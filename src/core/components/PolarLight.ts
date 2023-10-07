import {
    BufferGeometry,
    Component,
    Euler,
    Float32BufferAttribute,
    InstancedMesh,
    Matrix4,
    Mesh,
    Plugin,
    Points,
    PointsMaterial,
    Quaternion,
    TextureLoader,
    Vector3
} from "../../libs/xviewer";
import { zLength } from "../datas/Config";

import { frag } from "../../shader/fragment/star.frag";
import { vert } from "../../shader/vertex/star.vert";
import { cameraCenter } from "./ForwardCamera";
import { M_PolarLight } from "./Materials";
import { MashList } from "../datas/PolarLightList";

interface TransformInfo {
    position: Vector3,
    rotation: Quaternion,
    scale: Vector3,
}
export class PolarLight extends Component {
    private PolarLightTransforms: TransformInfo[] = [];
    private lightInst!: InstancedMesh;
    private starParticle!: starParticle;
    onLoad(): void {
        const meshList = MashList;
        for (let i of meshList) {
            let t = {
                position: new Vector3(i.Location[0] * 0.1, i.Location[2] * 0.1, -i.Location[1] * 0.1),
                rotation: new Quaternion().setFromEuler(new Euler(i.Rotation[0], -i.Rotation[1], i.Rotation[2])),
                scale: new Vector3(0.1, 0.1, 0.1)
            }
            this.PolarLightTransforms.push(t)
        }
        let customSort = function (a, b) {
            return a.position.z - b.position.z;
        };
        this.PolarLightTransforms.sort(customSort)

        this.viewer.load({ url: "Genshin/Login/SM_Light.glb" }).then((v) => {
            //将mesh创建出实例组
            v.traverse((mesh: any) => {
                if (mesh instanceof Mesh) {
                    const instancedMesh = new InstancedMesh(mesh.geometry, M_PolarLight, this.PolarLightTransforms.length);

                    this.viewer.scene.add(instancedMesh);
                    this.lightInst = instancedMesh;
                    this.updateInstance();
                }
            })
            this.viewer.scene.remove(v)
        })
        this.viewer.addPlugin(starParticle, { PolarLightTransforms: this.PolarLightTransforms });
    }
    update(dt: number): void {
        M_PolarLight.uniforms.time.value += dt;
        if (this.lightInst) {
            if (this.PolarLightTransforms[this.PolarLightTransforms.length - 1].position.z > cameraCenter.z) {
                const firstElement = this.PolarLightTransforms.pop();
                firstElement.position.z -= zLength * 0.1;
                this.PolarLightTransforms.unshift(firstElement);
                this.updateInstance();
            }
        }
    }
    private updateInstance() {
        for (let i = 0; i < this.PolarLightTransforms.length; i++) {
            const matrix = new Matrix4();
            matrix.compose(this.PolarLightTransforms[i].position,
                this.PolarLightTransforms[i].rotation,
                this.PolarLightTransforms[i].scale);
            this.lightInst.setMatrixAt(i, matrix)
        }
        this.lightInst.instanceMatrix.needsUpdate = true;
    }
}

class starParticle extends Plugin {
    private particlesGeometry !: BufferGeometry;
    private particles !: Points;
    private particlesMaterial!: PointsMaterial;
    private LightTransforms!: TransformInfo[];
    onLoad({ PolarLightTransforms }: { PolarLightTransforms: TransformInfo[] }): void {
        this.LightTransforms = PolarLightTransforms
        const positions = [];
        const colors = [];
        const particleCount = 400;
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 2500;
            const y = (Math.random() - 0.5) * 2500;
            const z = (Math.random() - 0.5) * 1000;
            positions.push(x, y, z);

            const r = Math.random() * 3 - 0.2;
            const g = Math.random() * 3 + 0.5;
            const b = Math.random() * 3 + 1;
            const a = 1;
            colors.push(r, g, b, a);
        }

        // Create the particle system
        this.particlesGeometry = new BufferGeometry();
        const textureLoader = new TextureLoader();
        const texture_star = textureLoader.load("Genshin/Login/Textures/Tex_0075.png");
        const particlesMaterial = new PointsMaterial({ size: 100, transparent: true, vertexColors: true, depthWrite: false, map: texture_star, });
        particlesMaterial.userData = { time: { value: 0 } }
        particlesMaterial.onBeforeCompile = ((shader, renderer) => {
            shader.uniforms.time = particlesMaterial.userData.time
            shader.fragmentShader = frag;
            shader.vertexShader = vert;
        })
        this.particlesMaterial = particlesMaterial;
        this.particles = new Points(this.particlesGeometry, particlesMaterial);

        this.particlesGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        this.particlesGeometry.setAttribute('color', new Float32BufferAttribute(colors, 4));

        this.particles.position.set(0, 0, -1000)
        this.viewer.scene.add(this.particles);
    }
    update(dt: number): void {
        this.particles.position.set(cameraCenter.x, cameraCenter.y, cameraCenter.z - 200);
        this.particlesMaterial.userData.time.value += dt;
        let vpos = this.LightTransforms[this.LightTransforms.length - 1].position.clone()
        vpos.add(new Vector3(-2400, -3000, 0));
        if (!vpos.equals(this.particles.position)) {
            this.particles.position.copy(vpos)
        }
    }
}