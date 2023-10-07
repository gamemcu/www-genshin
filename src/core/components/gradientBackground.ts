import {
    Color,
    DataTexture,
    FloatType,
    Matrix3,
    Plugin,
    RGBAFormat,
    Vector3
} from "../../libs/xviewer";


function inv_rrt_odt_fit(v: number): number {
    let a = -(Math.sqrt(10.) * Math.sqrt((-187248350. * Math.pow(v, 2)) + 232585567. * v + 241290.) + 21650. * v - 1230.);
    let b = (98370. * v - 100000.);
    return a / b;
}
function ACES_Inv(color: Vector3): Vector3 {
    let ACES_INPUT_MAT = new Matrix3();
    ACES_INPUT_MAT.set(
        1.76474, -0.67577, -0.08896,
        -0.14702, 1.16025, -0.01322,
        -0.03633, -0.16243, 1.19877
    )

    let ACES_OUTPUT_MAT = new Matrix3();
    ACES_OUTPUT_MAT.set(
        0.64304, 0.31119, 0.04578,
        0.05926, 0.93144, 0.00929,
        0.00596, 0.06393, 0.93012
    );

    color = color.applyMatrix3(ACES_OUTPUT_MAT);

    // Apply RRT and ODT
    color.set(inv_rrt_odt_fit(color.x),
        inv_rrt_odt_fit(color.y),
        inv_rrt_odt_fit(color.z));

    color = color.applyMatrix3(ACES_INPUT_MAT);

    return color;
}

function Color_ACES_Inv(x: Color) {
    let p = new Vector3(x.r, x.g, x.b)
    p = ACES_Inv(p)
    x.r = p.x; x.g = p.y; x.b = p.z;
    return x;
}

export class gradientBackgroundPlugin extends Plugin {


    onLoad(): void {
        // 定义渐变色参数
        const width = 1; // 纹理宽度
        const height = window.innerHeight; // 纹理高度
        const colorT = new Color().setHex(0x001c54)//.convertLinearToSRGB();
        const colorTB = new Color().setHex(0x023fa1)
        const colorB = new Color().setHex(0x26a8ff)

        const tb_l = 0.20
        const b_l = 0.6
        //#c0d6e2
        // 创建一个 Uint8Array 数组来保存纹理像素数据
        const data = new Float32Array(width * height * 4);

        // 根据渐变色数组填充纹理像素数据
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;
                let l = 1 - y / (height - 1); // 计算当前位置在渐变色数组中的插值位置
                let t = 1 - this.smoothstep(0, tb_l, l);
                let tb = this.smoothstep(0, tb_l, l) * (1 - this.smoothstep(tb_l, b_l, l));
                let b = Math.pow(this.smoothstep(tb_l, b_l, l), 1);
                let color = new Color().setRGB(
                    Math.min(t * colorT.r + tb * colorTB.r + b * colorB.r, 100000),
                    Math.min(t * colorT.g + tb * colorTB.g + b * colorB.g, 100000),
                    Math.min(t * colorT.b + tb * colorTB.b + b * colorB.b, 100000)
                );
                Color_ACES_Inv(color)
                data[index] = color.r //* 255;
                data[index + 1] = color.g //* 255;
                data[index + 2] = color.b //* 255;
                data[index + 3] = 1//255;
            }
        }

        // 创建 DataTexture
        const dataTexture = new DataTexture(data, width, height, RGBAFormat, FloatType);
        dataTexture.needsUpdate = true;
        this.viewer.scene.background = dataTexture;
    }
    public smoothstep(edge0: number, edge1: number, x: number): number {
        // 先将 x 限制在 0 到 1 之间
        const t = Math.max(0, Math.min((x - edge0) / (edge1 - edge0), 1));

        // 应用 Smoothstep 插值函数
        return t //* t * (3 - 2 * t);
    }
}