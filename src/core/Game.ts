import {
    LinearEncoding,
    NoToneMapping,
    ToneMappingMode,
    ToneMappingPlugin,
    Viewer,
    AssetManager,
    DeviceInput,
    AudioComponent,
    Fog,
    FXAAPlugin,
    BloomPlugin,
    TWEEN,
    $r,
} from "../libs/xviewer";

import { User } from "./User";
import { gameManager } from "./GameManager";
import { StateHandler } from "./states/StateHandler";
import { StateMachine } from "./states/StateMachine";
import { AmbientLightComponent } from "./components/AmbientLightComponent";
import { Road } from "./components/Road";
import { BloomTransitionEffectPlugin } from "./components/BloomTransition";
import { ForwardCamera } from "./components/ForwardCamera";
import { DirectionalLightComponent } from "./components/DirectionalLightComponent";
import { PolarLight } from "./components/PolarLight";
import { Cloud } from "./components/Cloud";
import { HashFog } from "./components/HashFog";
import { Column } from "./components/Column";
import { BigCloud } from "./components/BigCloud";
import { gradientBackgroundPlugin } from "./components/gradientBackground";

const { TweenManager } = TWEEN;

let onResizeOrigin = DeviceInput.prototype["_onResize"];
function resizeWindow() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    if (width > height) {
        DeviceInput.prototype["_onResize"] = onResizeOrigin
    }
    else {
        DeviceInput.prototype["_onResize"] = function () {
            this.viewer.resize(height, width);
            this.viewer.emit(DeviceInput.RESIZE, height, width);
        }
    }
}
resizeWindow()

var evt = "resize";//"onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, resizeWindow, false);


export class Game {
    public viewer!: Viewer;
    public SM: StateMachine = new StateMachine(this);

    constructor(canvas: HTMLCanvasElement) {
        this.viewer = new Viewer({
            canvas,
            camera: { fov: 45, near: 50, far: 100000, rotation: $r(5.5 * Math.PI / 180, 0, 0) },
            user: new User(),
            linear: false, toneMapping: NoToneMapping, outputEncoding: LinearEncoding
        });
        this.SM.registState(StatePreload);
        this.SM.registState(StateGame);
        this.SM.setState("StatePreload");
        this.SM.setState("StateGame");
    }

    public destroy() {
        this.SM.reset();
        this.viewer.destroy();
    }
}

class StatePreload extends StateHandler<Game> {
    public name: string = "StatePreload";

    public onEnter() {
        const resources = this.target.viewer.user.resources;
        return Promise.all([
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/DOOR.glb" }).then((v) => resources.DOOR = v), { name: "DOOR" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_BigCloud.glb" }).then((v) => resources.SM_BigCloud = v), { name: "SM_BigCloud" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Light.glb" }).then((v) => resources.SM_Light = v), { name: "SM_Light" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Qiao01.glb" }).then((v) => resources.SM_Qiao01 = v), { name: "SM_Qiao01" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Qiao02.glb" }).then((v) => resources.SM_Qiao02 = v), { name: "SM_Qiao02" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Qiao03.glb" }).then((v) => resources.SM_Qiao03 = v), { name: "SM_Qiao03" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Qiao04.glb" }).then((v) => resources.SM_Qiao04 = v), { name: "SM_Qiao04" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_Road.glb" }).then((v) => resources.SM_Road = v), { name: "SM_Road" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_ZhuZi01.glb" }).then((v) => resources.SM_ZhuZi01 = v), { name: "SM_ZhuZi01" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_ZhuZi02.glb" }).then((v) => resources.SM_ZhuZi02 = v), { name: "SM_ZhuZi02" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_ZhuZi03.glb" }).then((v) => resources.SM_ZhuZi03 = v), { name: "SM_ZhuZi03" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/SM_ZhuZi04.glb" }).then((v) => resources.SM_ZhuZi04 = v), { name: "SM_ZhuZi04" }),
            gameManager.task(AssetManager.Load({ url: "Genshin/Login/WHITE_PLANE.glb" }).then((v) => resources.WHITE_PLANE = v), { name: "WHITE_PLANE" }),
        ]);
    }
}

class StateGame extends StateHandler<Game> {
    public name: string = "StateGame";

    private _road!: Road;
    private _BloomTransition!: BloomTransitionEffectPlugin;
    private _forwardCamera!: ForwardCamera;

    public onEnter(...args: any[]): void | Promise<any> {
        this._initScene();
        this._initAudios();
    }

    private _initScene() {
        const viewer = this.target.viewer;
        viewer.scene.fog = new Fog(0x389af2, 5000, 10000);

        viewer.addNode(AmbientLightComponent);
        viewer.addNode(DirectionalLightComponent);
        viewer.addNode(PolarLight);
        viewer.addNode(Cloud);
        viewer.addNode(HashFog);
        viewer.addNode(Column);
        viewer.addNode(BigCloud);

        this._forwardCamera = viewer.addNode(ForwardCamera)
        this._road = viewer.addNode(Road);

        viewer.addPlugin(gradientBackgroundPlugin);
        viewer.addPlugin(FXAAPlugin)
        viewer.addPlugin(BloomPlugin, { mipmapBlur: true, luminanceThreshold: 2, intensity: 0.6 });
        this._BloomTransition = viewer.addPlugin(BloomTransitionEffectPlugin);

        viewer.addPlugin(ToneMappingPlugin, { mode: ToneMappingMode.ACES_FILMIC });

        // 调试窗口
        // viewer.addPlugin(InspectorPostprocessingPlugin);
        // viewer.addPlugin(InspectorMaterialPlugin);
        // viewer.addPlugin(InspectorComponentPlugin);
        // viewer.addPlugin(InspectorViewerPlugin)
        // viewer.addPlugin(StatsPlugin);

        gameManager.on("start", this._startGame, this, true);
    }

    private _initAudios() {
        const viewer = this.target.viewer;
        const audioBGM = viewer.addNode(AudioComponent);
        const audioEffect = viewer.addNode(AudioComponent);

        gameManager.on("canvas-click", () => {
            audioBGM.play({ url: "/Genshin/BGM.mp3", loop: true });
        })
        gameManager.on("button-start-click", () => {
            audioBGM.play({ url: "/Genshin/BGM.mp3", loop: true });
            audioEffect.play({ url: "/Genshin/Genshin Impact [Duang].mp3", force: true });
        })
        gameManager.on("openDoor", () => {
            setTimeout(() => audioEffect.play({ url: "/Genshin/Genshin Impact [DoorThrough].mp3", force: true }), 150);
        })
        gameManager.on("doorCreateBegin", () => {
            setTimeout(() => audioEffect.play({ url: "/Genshin/Genshin Impact [DoorComeout].mp3", force: true }), 150);
        })

    }

    private _startGame(e: MouseEvent) {
        // gameManager.emit("start");
        this._road.emit("start");
        gameManager.on("showDoor", (v) => {
            this._forwardCamera.emit("showDoor", v);
            gameManager.on("doorCreate", () => this.target.viewer.on(DeviceInput.POINTER_DOWN, this._jump, this, true), this, true);
        }, this, true);
    }

    private _jump() {
        gameManager.emit("openDoor");
        this._forwardCamera.emit("openDoor");
        this._BloomTransition.playTransition();
        TweenManager.Timeline(this)
            .delay(0.1)
            .call(() => { this._road.openDoor() })
            .delay(2)
            .call(() => {
                gameManager.restart();
                console.log("restart")
            })
            .start();
    }
}

AssetManager.Load({ url: "/Genshin/BGM.mp3" });
AssetManager.Load({ url: "/Genshin/Genshin Impact [Duang].mp3" });
AssetManager.Load({ url: "/Genshin/Genshin Impact [DoorThrough].mp3" });
AssetManager.Load({ url: "/Genshin/Genshin Impact [DoorComeout].mp3" });