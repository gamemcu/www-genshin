import {
    Component,
    DirectionalLight,
    Color,
    Vector3,
    Object3D,
    property
} from "../../libs/xviewer";
import { cameraCenter } from "./ForwardCamera";

export const directionalLight = new DirectionalLight(0xff6222, 35);

export class DirectionalLightComponent extends Component {
    private _originalPos = new Vector3()
    onLoad(props: any): void {
        this._originalPos.set(10000, 0, 6000);
        this._originalPos.y = Math.sqrt(
            Math.pow(this._originalPos.x, 2) +
            Math.pow(this._originalPos.z, 2)) / 1.35
        // directionalLight.lookAt(new Vector3(100,1000,100))
        let p = new Object3D()
        this.viewer.scene.add(p)
        directionalLight.target = p;
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.top = 400;
        directionalLight.shadow.camera.bottom = - 100;
        directionalLight.shadow.camera.left = - 100;
        directionalLight.shadow.camera.right = 400;
        directionalLight.shadow.camera.near = 1;
        directionalLight.shadow.camera.far = 50000;
        directionalLight.shadow.bias = -0.00005
        this.viewer.scene.add(directionalLight)
        this.viewer.renderer.shadowMap.enabled = true
    }

    update(dt: number): void {
        directionalLight.position.copy(cameraCenter.clone().add(this._originalPos));
        directionalLight.target.position.copy(cameraCenter)
    }

    @property()
    get color() {
        return directionalLight.color;
    }

    set color(v: Color) {
        directionalLight.color.copy(v);
    }

    @property({ min: 0, max: 100, step: 0.01 })
    get intensity() {
        return directionalLight.intensity;
    }

    set intensity(v: number) {
        directionalLight.intensity = v;
    }
}