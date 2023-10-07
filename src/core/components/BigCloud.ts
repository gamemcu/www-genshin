import { Component, Mesh, Object3D, Plugin, Vector3 } from "../../libs/xviewer";
import { cameraCenter } from "./ForwardCamera";
import { M_BigCloud, M_BigCloudBG } from "./Materials";

export class BigCloud extends Component {
    private originalPos = new Vector3();
    public vCloud !: Object3D;
    onLoad(props: any): void {

        this.viewer.load({ url: "Genshin/Login/SM_BigCloud.glb" }).then((v) => {
            this.vCloud = v;
            for (let i of v.children) {
                i.position.multiplyScalar(0.1)
                i.scale.multiplyScalar(0.1)
            }
            v.traverse((mesh: any) => {
                if (mesh instanceof Mesh) {
                    mesh.renderOrder = -1
                    if (mesh.name == "Plane011") {
                        mesh.material = M_BigCloud;
                    }
                    else {
                        mesh.material = M_BigCloudBG;
                    }
                }
            })
        })
    }
    update(dt: number): void {
        if (this.vCloud) {
            this.vCloud.position.copy(cameraCenter)
        }
    }
}