import { Component, TWEEN, Vector3 } from "../../libs/xviewer";

export const cameraCenter = new Vector3()

let __delta = new Vector3();
export class ForwardCamera extends Component {
    public speed = new Vector3(0, 0, -88)
    private shouldStop = false;
    private _zOffset = 0;
    onLoad(props: any): void {
        cameraCenter.set(0, 0, 0);
        this.on("showDoor", this.stop, this)
        this.on("openDoor", this.openDoor, this)
    }
    update(dt: number): void {
        if (!this.shouldStop) {
            cameraCenter.add(__delta.copy(this.speed).multiplyScalar(dt));
            this.viewer.camera.position.copy(cameraCenter)
        }
    }

    private stop(zOffset: number) {
        this.shouldStop = true;
        this._zOffset = zOffset;
        let orgPos = this.viewer.camera.position.clone()
        TWEEN.TweenManager.Tween(this.viewer.camera)
            .to({ position: new Vector3(orgPos.x, orgPos.y, zOffset - 165) }, 5)
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
    }
    private openDoor() {
        let orgPos = this.viewer.camera.position.clone()
        TWEEN.TweenManager.KillTweensOf(this.viewer.camera);
        TWEEN.TweenManager.Tween(this.viewer.camera)
            .to({ position: new Vector3(orgPos.x, orgPos.y, this._zOffset - 400) }, 0.6)
            .easing(TWEEN.Easing.Cubic.In)
            .start();
    }
}