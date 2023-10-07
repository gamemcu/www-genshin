import { Component, Mesh, Object3D, PlaneGeometry } from "../../libs/xviewer";
import { M_HashFog } from "./Materials";
import { cameraCenter } from "./ForwardCamera";

export class HashFog extends Component {
    private FogList:Object3D[] = []
    private number = 1;
    private interval = 80;
    onLoad(props: any): void {
        const Plane = new PlaneGeometry(1000, 1000);
        for(let i = 0;i<this.number;i++){
            // 创建面片
            const mesh = new Mesh(Plane, M_HashFog);
            mesh.position.z = -i*this.interval;
            this.viewer.scene.add(mesh);
            this.FogList.push(mesh);
        }
    }
    update(dt: number): void {
        for(let i = 0;i< this.FogList.length;i++){
            this.FogList[i].position.z = cameraCenter.z-i*80-400
        }
        M_HashFog.uniforms.time.value+=dt;
    }
}