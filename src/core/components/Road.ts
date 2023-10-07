
import { gameManager } from "../../core/GameManager";
import { AnimationMixer, Color, Component, LoopOnce, Mesh, Object3D, TWEEN, Vector3 } from "../../libs/xviewer";
import { cameraCenter } from "./ForwardCamera";
import { toonMaterials } from "./Materials";

export class Road extends Component {
    private zLength = 212.4027;
    private offset = new Vector3(0, 34, 200)//一开始是道路的起始偏移，后面变成门的偏移
    private extendNum = 1;//扩展出的长度
    private RoadUnitLength = 0;
    private hasStartGame = false;
    private obj!: Object3D
    private shouldStop: boolean = false;
    private doorHasCreate: boolean = false;
    private shouldOpenDoor: boolean = false;
    private originPosList: Vector3[] = [];

    private mixerList: AnimationMixer[] = [];

    onLoad(): void {
        const v = this.viewer.user.resources.SM_Road
        this.viewer.scene.add(v)
        v.traverse((mesh: any) => {
            mesh.receiveShadow = true
            if (mesh instanceof Mesh) {
                mesh.material = toonMaterials.getToonMaterial_Road(mesh.material, this.viewer.renderer)
                mesh.receiveShadow = true
            }
        })

        for (let i of v.children) {
            i.scale.multiplyScalar(0.1)
            i.position.multiplyScalar(0.1)
            i.position.sub(this.offset)
        }
        let n = v.children.length
        this.RoadUnitLength = n;
        for (let i = 0; i < this.extendNum; i++) {
            for (let j = 0; j < n; j++) {
                let clone = this.cloneObject3D(v.children[j]);
                clone.position.add(new Vector3(0, 0, -this.zLength * (1 + i)))
                v.add(clone)
            }
        }
        this.zLength *= 1 + this.extendNum
        this.obj = v
        for (let i = 0; i < this.obj.children.length; i++) {
            this.originPosList.push(this.obj.children[i].position.clone())
        }
        this.on("start", this._startGame, this, true)
    }
    update(dt: number): void {
        if (this.obj && !this.shouldStop) {
            for (let i = 0; i < this.obj.children.length; i++) {

                if (this.obj.children[i].position.z > cameraCenter.z) {
                    if (i % this.RoadUnitLength == 0 && this.hasStartGame) {
                        this.shouldStop = true;
                        this._showDoor(this.obj.children[i].position.z);
                        gameManager.emit("showDoor", this.obj.children[i].position.z);
                    }
                    this.obj.children[i].position.sub(new Vector3(0, 0, this.zLength))
                    this.originPosList[i].sub(new Vector3(0, 0, this.zLength))
                    let originalPos = this.originPosList[i].clone()
                    this.obj.children[i].position.add(new Vector3(0, -70, 0))
                    TWEEN.TweenManager.KillTweensOf(this.obj.children[i]);
                    TWEEN.TweenManager.Tween(this.obj.children[i])
                        .to({ position: originalPos }, 2)
                        .easing(TWEEN.Easing.Back.Out)
                        .start();
                }
            }
        }
        for (let mix of this.mixerList) {
            // 判断动画是否已经结束
            if (mix.time + dt > 1.4583333333333333) {
                if (!this.doorHasCreate) {
                    gameManager.emit("doorCreate")
                    this._creatBackground();
                }
                // 暂停动画
                if (this.shouldOpenDoor && mix.time + dt * 1.6 < mix.timeScale * mix["_actions"][0]["_clip"].duration) {
                    mix.update(dt * 1.6)
                }
            }
            else {
                mix.update(dt);
            }
        }
    }

    private cloneObject3D(object) {
        const clone = object.clone();
        return clone;
    }

    private _startGame() {
        this.hasStartGame = true;
    }

    private _showDoor(zOffset) {
        this.viewer.load({ url: "Genshin/Login/DOOR.glb" }).then((v) => {
            gameManager.emit("doorCreateBegin")

            v.traverse((mesh: any) => {
                if (mesh instanceof Mesh) {
                    mesh.castShadow = true
                    mesh.receiveShadow = true
                    mesh.material = toonMaterials.getToonMaterial_Door(mesh.material, this.viewer.renderer)
                }
            })
            v.scale.set(0.1, 0.1, 0.04);

            for (let clip of v.animations) {
                const mixer = new AnimationMixer(v);
                mixer.clipAction(clip).setLoop(LoopOnce, 1);
                mixer.clipAction(clip).play();
                this.mixerList.push(mixer);
            }
            this.offset.set(0, -this.offset.y, zOffset - this.extendNum * this.zLength - 14);
            v.position.copy(this.offset)
        })
    }

    private hasLoadBackground = false
    private _creatBackground() {
        if (!this.hasLoadBackground) {
            this.viewer.load({ url: "Genshin/Login/WHITE_PLANE.glb" }).then((v) => {
                v.scale.set(0.1, 0.1, 0.1);
                v.traverse((mesh: any) => {
                    if (mesh instanceof Mesh) {
                        mesh.material.color = new Color("#ffffff").multiplyScalar(3)
                    }
                })
                v.position.copy(this.offset);
                this.doorHasCreate = true;
            })
            this.hasLoadBackground = true
        }
    }

    public openDoor() {
        this.shouldOpenDoor = true;
    }
}