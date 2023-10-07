
export enum CinestationBlendStyle {
    Linear = 0,
    QuadraticIn = 1,
    QuadraticOut = 2,
    QuadraticInOut = 3,
    CubicIn = 4,
    CubicOut = 5,
    CubicInOut = 6,
    QuarticIn = 7,
    QuarticOut = 8,
    QuarticInOut = 9,
    QuinticIn = 10,
    QuinticOut = 11,
    QuinticInOut = 12,
    SinusoidalIn = 13,
    SinusoidalOut = 14,
    SinusoidalInOut = 15,
    ExponentialIn = 16,
    ExponentialOut = 17,
    ExponentialInOut = 18,
    CircularIn = 19,
    CircularOut = 20,
    CircularInOut = 21,
    ElasticIn = 22,
    ElasticOut = 23,
    ElasticInOut = 24,
    BackIn = 25,
    BackOut = 26,
    BackInOut = 27,
    BounceIn = 28,
    BounceOut = 29,
    BounceInOut = 30
}
export const CinestationBlendFunc: (typeof LinearNone)[];
export class CinestationBlendDefinition {
    style: CinestationBlendStyle;
    time: number;
}
export class CinestationBrain extends Component {
    private _vcam;
    private _vcamSolo;
    private _vcams;
    private _lerpTime;
    brainBlend: CinestationBlendDefinition;
    get vcam(): VirtualCamera;
    get vcams(): VirtualCamera[];
    update(dt: number): void;
    activeCamera(vcam: VirtualCamera, time?: number): void;
    addCamera(vcam: VirtualCamera): void;
    removeCamera(vcam: VirtualCamera): void;
    getActiveCamera(): VirtualCamera;
    private _lerpToMainCamera;
}
export function LinearNone(k: number): number;
export function QuadraticIn(k: number): number;
export function QuadraticOut(k: number): number;
export function QuadraticInOut(k: number): number;
export function CubicIn(k: number): number;
export function CubicOut(k: number): number;
export function CubicInOut(k: number): number;
export function QuarticIn(k: number): number;
export function QuarticOut(k: number): number;
export function QuarticInOut(k: number): number;
export function QuinticIn(k: number): number;
export function QuinticOut(k: number): number;
export function QuinticInOut(k: number): number;
export function SinusoidalIn(k: number): number;
export function SinusoidalOut(k: number): number;
export function SinusoidalInOut(k: number): number;
export function ExponentialIn(k: number): number;
export function ExponentialOut(k: number): number;
export function ExponentialInOut(k: number): number;
export function CircularIn(k: number): number;
export function CircularOut(k: number): number;
export function CircularInOut(k: number): number;
export function ElasticIn(k: number): number;
export function ElasticOut(k: number): number;
export function ElasticInOut(k: number): number;
export function BackIn(k: number): number;
export function BackOut(k: number): number;
export function BackInOut(k: number): number;
export function BounceIn(k: number): number;
export function BounceOut(k: number): number;
export function BounceInOut(k: number): number;
export namespace CinetationMath {
export function exponentialDamp(current: number, target: number, dampTime: number, deltaTime: number): number;
export function quarticDamp(current: number, target: number, dampTime: number, deltaTime: number): number;
export function Quat_exponentialDamp(out: Quaternion, current: Quaternion, target: Quaternion, dampTime: number, deltaTime: number): Quaternion;
export function Quat_quarticDamp(out: Quaternion, current: Quaternion, target: Quaternion, dampTime: number, deltaTime: number): Quaternion;
export function smoothDamp(state: any, current: number, target: number, smoothTime: number, maxSpeed: number, deltaTime: number): number;
export function Quat_smoothDamp(current: Quaternion, target: Quaternion, dampTime: number, deltaTime: number, out?: Quaternion): Quaternion;
export function Vec3_smoothDamp(current: Vector3, target: Vector3, dampTime: number, deltaTime: number, out?: Vector3): Vector3;
export function VInterpTo(current: Vector3, target: Vector3, deltaTime: number, speed: number, out?: Vector3): Vector3;
export function VInterpConstantTo(current: Vector3, target: Vector3, deltaTime: number, speed: number, out?: Vector3): Vector3;
export function QInterpTo(current: Quaternion, target: Quaternion, deltaTime: number, speed: number): Quaternion;
export function QInterpConstantTo(current: Quaternion, target: Quaternion, deltaTime: number, speed: number, out?: Quaternion): Quaternion;
export function FInterpTo(current: number, target: number, deltaTime: number, speed: number): number;
export function FInterpConstantTo(current: number, target: number, deltaTime: number, speed: number): number;
}
export class VCamAim {
    trackedObjectOffset: Vector3;
}
export enum VCamFreeLookMode {
    FREE = 0,
    TRANSLATE = 1,
    LOCK = 2
}
export class VCamFreeLook {
    mode: VCamFreeLookMode;
    forbidX: boolean;
    forbidY: boolean;
    forbidZ: boolean;
    forbidPanX: boolean;
    forbidPanY: boolean;
    rotateSpeed: number;
    rotateSmoothing: number;
    panSpeed: number;
    panSmoothing: number;
    phiMin: number;
    phiMax: number;
    thetaMin: number;
    thetaMax: number;
    distanceMin: number;
    distanceMax: number;
    rotateTouchID: number;
}
export class VCamLens {
    fov: number;
    near: number;
    far: number;
}
export class FreelookVirtualCamera extends VirtualCamera {
    private _button;
    private _touchID;
    private _distanceDelta;
    private _preLoc0;
    private _preLoc1;
    private _rotateDelta;
    private _panDelta;
    freelook: VCamFreeLook;
    onLoad({ forbidX, forbidY, forbidZ, forbidPanX, forbidPanY, mode, ...props }: {
        [x: string]: any;
        forbidX?: boolean;
        forbidY?: boolean;
        forbidZ?: boolean;
        forbidPanX?: boolean;
        forbidPanY?: boolean;
        mode?: VCamFreeLookMode;
    }): void;
    onEnable(): void;
    onDisable(): void;
    reset(): void;
    private _onPointerDown;
    private _onPointerUp;
    private _onPointerMove;
    private _onMouseWheel;
    private _onTouchStart;
    private _onTouchMove;
    private _calculateDistanceScale;
    private _calculateRotateDelta;
    private _calculatePanDelta;
    update(dt: number): void;
}
export class VirtualCamera extends Component<Object3D & {
    isCamera?: boolean;
}> {
    private _finalPosition;
    private _finalRotation;
    priority: number;
    lookAt: Object3D | null;
    follow: Object3D | null;
    lens: VCamLens;
    aim: VCamAim;
    correctPosition: Vector3;
    correctRotation: Quaternion;
    lookaheadPosition: Vector3;
    brain: CinestationBrain;
    get finalPosition(): Vector3;
    get finalRotation(): Quaternion;
    onLoad({ lookAt, fov, near, far, ...props }: {
        lookAt?: Object3D;
        fov?: number;
        near?: number;
        far?: number;
        [k: string]: any;
    }): void;
    onDestroy(): void;
    update(dt: number): void;
}

enum Flags {
    Destroyed = 1,
    OnLoadCalled = 2,
    OnEnableCalled = 4,
    StartCalled = 8,
    Deactivating = 16
}
export class Entity extends EventEmitter {
    static readonly Flags: typeof Flags;
    uuid: string;
    name: string;
    private _objFlags;
    constructor(name?: string);
    __setFlag(flag: Flags): void;
    __clearFlag(flag: Flags): void;
    __getFlag(flag: Flags): boolean;
    get isValid(): boolean;
    destroy(): boolean;
    destroyImmediate(): void;
    protected _onPreDestroy?(): void;
}
interface Listener {
    name: string;
    callback: (...args: any[]) => any;
}
export class EventEmitter {
    private _events;
    clear(): this;
    on(name: string, callback: (...args: any[]) => any, target?: Object, once?: boolean): this;
    off(name: string, callback: (...args: any[]) => any, target?: Object): this;
    onof(name: string, callback: (...args: any[]) => any, container: Object & {
        _listeners?: Listener[];
    }): this;
    offof(container: Object & {
        _listeners?: Listener[];
    }): this;
    private _removeEvent;
    targetOff(target: Object): void;
    emit(name: string, ...args: any[]): this;
}
export function getUUID(): string;
global {
    interface Array<T> {
        /**
         * Remove item from Array
         * @param v
         */
        remove(v: T): T;
    }
}
interface ICallTarget {
    uuid: string;
}
export class Scheduler {
    private _callers;
    private _callersArray;
    pause(target: ICallTarget): void;
    resume(target: ICallTarget): void;
    schedule(target: ICallTarget, callback: Function, interval: number, repeat: number): void;
    unshedule(target: ICallTarget, callback: Function): void;
    unscheduleAll(target: ICallTarget): void;
    update(dt: number): void;
}
export function serializable(className: string): (target: any) => void;
export function nonserialized(target: any, property: string): void;
export interface ISerializeOption {
    compress?: boolean;
    encode?: boolean;
}
export function serialize(obj: any, option?: ISerializeOption): any;
export function deserialize(data: string, target?: any): any;
export function $p<T>(target: T & {
    copy?: Function;
}, props: Object, force?: boolean): T & {
    copy?: Function;
};
export function $c(r: number, g: number, b: number): Color;
export function $c(color?: ColorRepresentation): Color;
export function $v2(x?: number, y?: number): Vector2;
export function $v3(x?: number, y?: number, z?: number): Vector3;
export function $v4(x?: number, y?: number, z?: number, w?: number): Vector4;
export function $r(x?: number, y?: number, z?: number): Euler;
export function $q(x?: number, y?: number, z?: number, w?: number): Quaternion;
type Object3D_ = Object3D & {
    isMesh?: boolean;
    geometry?: BufferGeometry;
    material?: Material;
};
export function makeInstanced(node: Object3D_, props?: {}, ignore?: (v: Object3D_) => boolean): Group;
export function $ext(path: string): string;
export function $dirname(path: string): string;
export function $basename(path: string, ext?: string): string;
export function getFullscreenTriangle(): BufferGeometry;
export class AudioComponent<K extends AudioNode = GainNode, T extends Audio<K> = Audio<K>> extends Component<T> {
    create(): T;
    onLoad({ listener }: {
        listener: any;
    }): void;
    play({ url, loop, volume, force, }: {
        url: string;
        loop?: boolean;
        volume?: number;
        force?: boolean;
        delay?: number;
    }): void;
    stop(): void;
}
export class AudioListenerComponent extends Component<AudioListener> {
    create(): AudioListener;
    onLoad(props?: any): void;
}
export class PositionalAudioComponent extends AudioComponent<PannerNode, PositionalAudio> {
    create(): PositionalAudio;
    play({ refDistance, maxDistance, ...props }: {
        url: string;
        loop?: boolean;
        volume?: number;
        refDistance?: number;
        maxDistance?: number;
    }): void;
}
export class ImagePanorama extends Panorama {
    onLoad(props: LoadProperties): void;
}
export class Panorama extends Component<Mesh<SphereGeometry, MeshBasicMaterial>> {
    create(): Mesh<SphereGeometry, MeshBasicMaterial>;
}
export class VideoPanorama extends Panorama {
}
export class PlaneReflector extends Component<Mesh> {
    private _fbo1;
    private _fbo2;
    private _blurPass;
    private _hasBlur;
    private _virtualCamera;
    private _reflectorOffset;
    private _textureMatrix;
    private _reflectorMaterial;
    create({ width, height, ...props }: {
        [x: string]: any;
        width?: number;
        height?: number;
    }): Mesh<PlaneGeometry, Material | Material[]> & {
        copy?: Function;
    };
    onLoad({ mixBlur, mixStrength, resolution, blur, minDepthThreshold, maxDepthThreshold, depthScale, depthToBlurRatioBias, mirror, distortion, mixContrast, distortionMap, reflectorOffset, ...props }: {
        [x: string]: any;
        mixBlur?: number;
        mixStrength?: number;
        resolution?: number;
        blur?: number[];
        minDepthThreshold?: number;
        maxDepthThreshold?: number;
        depthScale?: number;
        depthToBlurRatioBias?: number;
        mirror?: number;
        distortion?: number;
        mixContrast?: number;
        distortionMap: any;
        reflectorOffset?: number;
    }): void;
    onDestroy(): void;
    beforeRender(): void;
    update(dt: number): void;
}
export namespace primitives {
export class Box extends Component<Mesh> {
    create({ width, height, depth, widthSegments, heightSegments, depthSegments, material, ...props }: {
        [x: string]: any;
        width?: number;
        height?: number;
        depth?: number;
        widthSegments?: number;
        heightSegments?: number;
        depthSegments?: number;
        material?: MeshStandardMaterial;
    }): Mesh<BoxGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Capsule extends Component<Mesh> {
    create({ radius, length, capSegments, radialSegments, material, ...props }: {
        [x: string]: any;
        radius?: number;
        length?: number;
        capSegments?: number;
        radialSegments?: number;
        material?: MeshStandardMaterial;
    }): Mesh<CapsuleGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Circle extends Component<Mesh> {
    create({ radius, segments, thetaStart, thetaLength, material, ...props }: {
        [x: string]: any;
        radius: any;
        segments: any;
        thetaStart: any;
        thetaLength: any;
        material?: MeshStandardMaterial;
    }): Mesh<CircleGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Cone extends Component<Mesh> {
    create({ radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength, material, ...props }: {
        [x: string]: any;
        radius?: number;
        height?: number;
        radialSegments?: number;
        heightSegments?: number;
        openEnded?: boolean;
        thetaStart?: number;
        thetaLength?: number;
        material?: MeshStandardMaterial;
    }): Mesh<ConeGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Cylinder extends Component<Mesh> {
    create({ radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength, material, ...props }: {
        [x: string]: any;
        radiusTop?: number;
        radiusBottom?: number;
        height?: number;
        radialSegments?: number;
        heightSegments?: number;
        openEnded?: boolean;
        thetaStart?: number;
        thetaLength?: number;
        material?: MeshStandardMaterial;
    }): Mesh<CylinderGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Dodecahedron extends Component<Mesh> {
    create({ radius, detail, material, ...props }: {
        [x: string]: any;
        radius?: number;
        detail?: number;
        material?: MeshStandardMaterial;
    }): Mesh<DodecahedronGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Edges extends Component<Mesh> {
    create({ geometry, thresholdAngle, material, ...props }: {
        [x: string]: any;
        geometry?: any;
        thresholdAngle?: number;
        material?: MeshStandardMaterial;
    }): Mesh<EdgesGeometry<any>, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Extrude extends Component<Mesh> {
    create({ shapes, options, material, ...props }: {
        [x: string]: any;
        shapes?: Shape;
        options?: {};
        material?: MeshStandardMaterial;
    }): Mesh<ExtrudeGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Icosahedron extends Component<Mesh> {
    create({ radius, detail, material, ...props }: {
        [x: string]: any;
        radius?: number;
        detail?: number;
        material?: MeshStandardMaterial;
    }): Mesh<IcosahedronGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Lathe extends Component<Mesh> {
    create({ points, segments, phiStart, phiLength, material, ...props }: {
        [x: string]: any;
        points?: Vector2[];
        segments?: number;
        phiStart?: number;
        phiLength?: number;
        material?: MeshStandardMaterial;
    }): Mesh<LatheGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Octahedron extends Component<Mesh> {
    create({ radius, detail, material, ...props }: {
        [x: string]: any;
        radius?: number;
        detail?: number;
        material?: MeshStandardMaterial;
    }): Mesh<OctahedronGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Plane extends Component<Mesh> {
    create({ width, height, widthSegments, heightSegments, material, ...props }: {
        [x: string]: any;
        width?: number;
        height?: number;
        widthSegments?: number;
        heightSegments?: number;
        material?: MeshStandardMaterial;
    }): Mesh<PlaneGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Polyhedron extends Component<Mesh> {
    create({ vertices, indices, radius, detail, material, ...props }: {
        [x: string]: any;
        vertices?: any[];
        indices?: any[];
        radius?: number;
        detail?: number;
        material?: MeshStandardMaterial;
    }): Mesh<PolyhedronGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Ring extends Component<Mesh> {
    create({ innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength, material, ...props }: {
        [x: string]: any;
        innerRadius?: number;
        outerRadius?: number;
        thetaSegments?: number;
        phiSegments?: number;
        thetaStart?: number;
        thetaLength?: number;
        material?: MeshStandardMaterial;
    }): Mesh<RingGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Shape extends Component<Mesh> {
    create({ shapes, curveSegments, material, ...props }: {
        [x: string]: any;
        shapes?: THREE_Shape;
        curveSegments?: number;
        material?: MeshStandardMaterial;
    }): Mesh<ShapeGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Sphere extends Component<Mesh> {
    create({ radius, widthSegments, heightSegments, material, ...props }: {
        [x: string]: any;
        radius: any;
        widthSegments: any;
        heightSegments: any;
        material?: MeshStandardMaterial;
    }): Mesh<SphereGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Tetrahedron extends Component<Mesh> {
    create({ radius, detail, material, ...props }: {
        [x: string]: any;
        radius?: number;
        detail?: number;
        material?: MeshStandardMaterial;
    }): Mesh<TetrahedronGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Torus extends Component<Mesh> {
    create({ radius, tube, radialSegments, tubularSegments, arc, material, ...props }: {
        [x: string]: any;
        radius?: number;
        tube?: number;
        radialSegments?: number;
        tubularSegments?: number;
        arc?: number;
        material?: MeshStandardMaterial;
    }): Mesh<TorusGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class TorusKnot extends Component<Mesh> {
    create({ radius, tube, tubularSegments, radialSegments, p, q, material, ...props }: {
        [x: string]: any;
        radius?: number;
        tube?: number;
        tubularSegments?: number;
        radialSegments?: number;
        p?: number;
        q?: number;
        material?: MeshStandardMaterial;
    }): Mesh<TorusKnotGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Tube extends Component<Mesh> {
    create({ path, tubularSegments, radius, radialSegments, closed, material, ...props }: {
        [x: string]: any;
        path?: QuadraticBezierCurve3;
        tubularSegments?: number;
        radius?: number;
        radialSegments?: number;
        closed?: boolean;
        material?: MeshStandardMaterial;
    }): Mesh<TubeGeometry, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export namespace primitives {
export class Wireframe extends Component<Mesh> {
    create({ geometry, material, ...props }: {
        [x: string]: any;
        geometry?: any;
        material?: MeshStandardMaterial;
    }): Mesh<WireframeGeometry<any>, MeshStandardMaterial> & {
        copy?: Function;
    };
}
}
export class RenderTexture extends Component {
    private _fbo;
    private _scene;
    private _camera;
    get texture(): Texture;
    onLoad({ width, height, ...props }: {
        width?: number;
        height?: number;
    }): void;
    update(dt: number): void;
}
export interface ProgressEvent {
    lengthComputable: boolean;
    loaded: number;
    total: number;
}
export interface LoadProperties {
    url?: string | File | {
        mainFile: File;
        additionalFiles: File[];
    };
    settings?: TextureSettings;
    onProgress?: (event: ProgressEvent) => void;
}
export class AssetManager {
    static loaders: Map<string, AssetLoader>;
    static caches: Map<string, any>;
    static Clear(): void;
    static RegistLoader(Loader: {
        new (): AssetLoader;
    }): void;
    static Load<T = any>(props: LoadProperties): Promise<T>;
}
export class Component<T extends Object3D = Object3D> extends Entity {
    viewer: Viewer;
    node: T;
    /**
     * create an instance of Object3D instead of the default
     * @param props
     */
    create?(props?: any): T;
    onLoad?(props?: any): void;
    onEnable?(): void;
    onDisable?(): void;
    onDestroy?(): void;
    start?(): void;
    update?(dt: number): void;
    lastUpdate?(dt: number): void;
    isComponent: boolean;
    private _enabled;
    get enabled(): boolean;
    set enabled(v: boolean);
    protected _onPreDestroy(): void;
    schedule(callback: Function, interval: number, repeat?: number): void;
    unshedule(callback: Function): void;
    unscheduleAll(): void;
}
export class ComponentManager extends Entity {
    private _scheduler;
    private _componentScheduler;
    get scheduler(): Scheduler;
    get componentScheduler(): ComponentScheduler;
    update(dt: number): void;
    destroyNode(node: Object3D): void;
    activeNode(node: Object3D, active: boolean): void;
    destroyComponents(node: Object3D & {
        _components?: Component[];
    }): void;
    activeComponents(node: Object3D): void;
    addComponent<T extends Component>(node: Object3D | Component, instance: T, props?: any): T;
    addComponent<T extends Component>(node: Object3D | Component, constructor: {
        new (): T;
    }, props?: any): T;
    removeComponent(node: Object3D, component: Component): this;
    getComponent<T extends Component>(node: Object3D, constructor: {
        prototype: T;
    }): T;
    getComponentsInChidren<T extends Component>(node: Object3D, constructor: {
        prototype: T;
    }, out?: T[]): T[];
    _getComponents(node: Object3D & {
        _components?: Component[];
    }): Component<Object3D<Event>>[];
    private _findComponent;
    protected _activeComponent(comp: Component, active: boolean): void;
}

class Invoker<T> {
    protected _targets: T[];
    protected _callback: (target: T, dt: number) => any;
    constructor(callback: (target: T, dt: number) => any);
    add(target: any): void;
    remove(target: any): void;
    invoke(dt: number): void;
}
export class ComponentScheduler {
    startInvoker: Invoker<Component>;
    updateInvoker: Invoker<Component>;
    lastUpdateInvoker: Invoker<Component>;
    start(): void;
    update(dt: number): void;
    lastUpdate(dt: number): void;
    enableComponent(comp: Component, enable: boolean): void;
}

interface PropertyDescriptor {
    dir?: string;
    parent?: string;
    max?: number;
    min?: number;
    step?: number;
    value?: any;
}
export function property(props?: PropertyDescriptor): (target: any, property: any) => void;
export function dependencies(...components: (new () => Component)[]): (target: any) => void;
export class DeviceInput {
    viewer: Viewer;
    static readonly MOUSE_WHEEL = "mousewheel";
    static readonly TOUCH_START = "touchstart";
    static readonly TOUCH_END = "touchend";
    static readonly TOUCH_MOVE = "touchmove";
    static readonly POINTER_DOWN = "pointerdown";
    static readonly POINTER_UP = "pointerup";
    static readonly POINTER_MOVE = "pointermove";
    static readonly KEYDOWN = "keydown";
    static readonly KEYPRESS = "keypress";
    static readonly KEYUP = "keyup";
    static readonly RESIZE = "resize";
    private _listeners;
    private _mouseWheel;
    private _touches;
    private _touchCount;
    private _pointerButton;
    private _pointerPosition;
    private _pointer;
    private _keys;
    get pointerButton(): number;
    get pointer(): Vector2;
    get pointerPosition(): Vector2;
    get mouseWheel(): number;
    get touchCount(): number;
    get touches(): {
        id: number;
        position: Vector2;
    }[];
    get keys(): {
        [k: string]: boolean;
    };
    constructor(viewer: Viewer);
    addEventListeners(): void;
    private _onResize;
    private _onPointerDown;
    private _onPointerUp;
    private _onPointerMove;
    private _onMouseWheel;
    private _onTouchStart;
    private _onTouchEnd;
    private _onTouchMove;
    private _onKeyDown;
    private _onKeyPress;
    private _onKeyUp;
    private _addEventListener;
    removeAllListeners(): void;
}
export class SpriteFrame {
    texture: Texture;
    texCoords: Vector4;
    meshCoords: Vector4;
    constructor(texture: Texture, texCoords: Vector4, meshCoords: Vector4);
}


interface FrameAtlas {
    frame: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    rotated: boolean;
    trimmed: boolean;
    sourceSize: {
        w: number;
        h: number;
    };
    spriteSourceSize: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    anchor: {
        x: number;
        y: number;
    };
}
interface MetaAtlas {
    size: {
        w: number;
        h: number;
    };
    scale: number;
    image: string;
}
export interface JsonAtlas {
    frames: {
        [k: string]: FrameAtlas;
    };
    animations: {
        [k: string]: string[];
    };
    meta: MetaAtlas;
}
export class TextureAtlas {
    json: JsonAtlas;
    texture: Texture;
    private _spriteFrames;
    private _animations;
    constructor(json: JsonAtlas, texture: Texture);
    getAnimation(name: string): SpriteFrame[];
    getSpriteFrame(name: string): SpriteFrame;
}
export class Viewer extends ComponentManager {
    private _time;
    private _running;
    private _renderer;
    private _scene;
    private _camera;
    private _viewport;
    private _states;
    private _input;
    private _user;
    private _environment;
    private _background;
    get environment(): string | File;
    get background(): string | Color | File;
    get input(): DeviceInput;
    get time(): number;
    get renderer(): WebGLRenderer;
    get scene(): Scene & {
        _components?: Component<Object3D<Event>>[];
    };
    get camera(): PerspectiveCamera;
    get dpr(): number;
    get viewport(): {
        width: number;
        height: number;
        factor: number;
    };
    get size(): Vector2;
    get user(): any;
    constructor({ canvas, shadows, linear, outputEncoding, toneMapping, toneMappingExposure, camera, user, ...props }: {
        canvas?: HTMLCanvasElement;
        shadows?: boolean | ShadowMapType;
        linear?: boolean;
        antialias?: boolean;
        outputEncoding?: TextureEncoding;
        toneMappingExposure?: number;
        toneMapping?: ToneMapping;
        camera?: {
            fov?: number;
            aspect?: number;
            near?: number;
            far?: number;
            position?: Vector3;
            rotation?: Euler;
        };
        user?: any;
    });
    private _printInfo;
    protected _onPreDestroy(): void;
    load({ replace, castShadow, receiveShadow, parent, ...props }: LoadProperties & {
        parent?: Object3D;
        replace?: boolean;
        castShadow?: boolean;
        receiveShadow?: boolean;
    }): Promise<Object3D<Event>>;
    setEnvironment(props?: LoadProperties & {
        url: string | File;
        noBackground?: boolean;
    }): Promise<void>;
    setBackground(props?: LoadProperties & {
        color?: Color;
        url?: string | File;
    }): Promise<void>;
    pushScene(scene?: Scene): this;
    popScene(): this;
    addNode<T extends Object3D>(object: T, props?: NodeProperties<T>, parent?: Object3D): T;
    addNode<T extends Object3D>(object: new (...args: any[]) => T, props?: NodeProperties<T>, parent?: Object3D): T;
    addNode<T extends Component>(object: new (...args: any[]) => T, props?: NodeProperties<T>, parent?: Object3D): T;
    addPlugin<T extends Plugin>(TPlutin: new () => T, props?: PluginProperties<T>): T;
    removePlugin(plugin: Plugin): this;
    getPlugin<T extends Plugin>(TPlutin: new () => T): T;
    private _addDefaultPlugins;
    resize(width: number, height: number): void;
    start(): this;
    render(dt: number): void;
    stop(): this;
}
export class AtlasAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError, settings }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
        settings: any;
    }): void;
}
export interface TextureSettings {
    flipY?: boolean;
    mapping?: Mapping;
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: TextureFilter;
    minFilter?: TextureFilter;
    format?: PixelFormat;
    type?: TextureDataType;
    anisotropy?: number;
    encoding?: TextureEncoding;
    repeat?: Vector2;
}
export abstract class AssetLoader {
    name: string;
    abstract extensions: string[];
    abstract load(props: {
        url: string;
        file: any;
        onLoad: Function;
        onProgress?: Function;
        onError?: Function;
        settings?: TextureSettings;
    }): void;
}
export class AudioAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
    }): void;
}
export class FBXAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
    }): void;
}
export class GLTFAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
    }): void;
}
export class HDRAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError, settings }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
        settings: any;
    }): void;
}
export class JSONAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
    }): void;
}
export class TextureAssetLoader extends AssetLoader {
    extensions: string[];
    load({ url, file, onLoad, onProgress, onError, settings }: {
        url: any;
        file: any;
        onLoad: any;
        onProgress: any;
        onError: any;
        settings: any;
    }): void;
}
export interface BlurPassProps {
    gl: WebGLRenderer;
    resolution: number;
    width?: number;
    height?: number;
    minDepthThreshold?: number;
    maxDepthThreshold?: number;
    depthScale?: number;
    depthToBlurRatioBias?: number;
}
export class BlurPass {
    readonly renderTargetA: WebGLRenderTarget;
    readonly renderTargetB: WebGLRenderTarget;
    readonly convolutionMaterial: ConvolutionMaterial;
    readonly scene: Scene;
    readonly camera: Camera;
    readonly screen: Mesh;
    renderToScreen: boolean;
    constructor({ gl, resolution, width, height, minDepthThreshold, maxDepthThreshold, depthScale, depthToBlurRatioBias, }: BlurPassProps);
    render(renderer: any, inputBuffer: any, outputBuffer: any): void;
}
export class ConvolutionMaterial extends ShaderMaterial {
    readonly kernel: Float32Array;
    constructor(texelSize?: Vector2);
    setTexelSize(x: number, y: number): void;
    setResolution(resolution: Vector2): void;
}
export class MeshReflectorMaterial extends MeshStandardMaterial {
    private _tDepth;
    private _distortionMap;
    private _tDiffuse;
    private _tDiffuseBlur;
    private _textureMatrix;
    private _hasBlur;
    private _mirror;
    private _mixBlur;
    private _blurStrength;
    private _minDepthThreshold;
    private _maxDepthThreshold;
    private _depthScale;
    private _depthToBlurRatioBias;
    private _distortion;
    private _mixContrast;
    constructor(parameters?: {});
    onBeforeCompile(shader: any): void;
    get tDiffuse(): Texture | null;
    set tDiffuse(v: Texture | null);
    get tDepth(): Texture | null;
    set tDepth(v: Texture | null);
    get distortionMap(): Texture | null;
    set distortionMap(v: Texture | null);
    get tDiffuseBlur(): Texture | null;
    set tDiffuseBlur(v: Texture | null);
    get textureMatrix(): Matrix4 | null;
    set textureMatrix(v: Matrix4 | null);
    get hasBlur(): boolean;
    set hasBlur(v: boolean);
    get mirror(): number;
    set mirror(v: number);
    get mixBlur(): number;
    set mixBlur(v: number);
    get mixStrength(): number;
    set mixStrength(v: number);
    get minDepthThreshold(): number;
    set minDepthThreshold(v: number);
    get maxDepthThreshold(): number;
    set maxDepthThreshold(v: number);
    get depthScale(): number;
    set depthScale(v: number);
    get depthToBlurRatioBias(): number;
    set depthToBlurRatioBias(v: number);
    get distortion(): number;
    set distortion(v: number);
    get mixContrast(): number;
    set mixContrast(v: number);
}
export namespace Particle {
export class Alpha extends Behaviour {
    alphaA: number;
    alphaB?: number;
    easing: EasingFunction;
    constructor(alphaA?: number, alphaB?: number, easing?: EasingFunction, enabled?: boolean);
    initialize<T>(target: Particle<T>): void;
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
export namespace Particle {
export class Behaviour {
    enabled: boolean;
    constructor(enabled?: boolean);
    applyBehaviour<T>(target: Particle<T>, dt: number, p: number): void;
    initialize<T>(target: Particle<T>): void;
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
type THREE_Color = Color;
export namespace Particle {
export class Color extends Behaviour {
    colorA: THREE_Color;
    colorB?: THREE_Color;
    easing: EasingFunction;
    constructor(colorA?: THREE_Color, colorB?: THREE_Color, easing?: EasingFunction, enabled?: boolean);
    initialize<T>(target: Particle<T>): void;
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
export namespace Particle {
export class Force extends Behaviour {
    force: Vector3;
    constructor(force?: Vector3, enabled?: boolean);
    initialize<T>(target: Particle<T>): void;
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
export namespace Particle {
export class Gravity extends Force {
    gravity: number;
    constructor(gravity?: number, enabled?: boolean);
}
}
export namespace Particle {
export class Rotate extends Behaviour {
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
export namespace Particle {
export class Scale extends Behaviour {
    scaleA: Vector3;
    scaleB?: Vector3;
    easing: EasingFunction;
    constructor(scaleA?: Vector3, scaleB?: Vector3, easing?: EasingFunction, enabled?: boolean);
    initialize<T>(target: Particle<T>): void;
    mutate<T>(target: Particle<T>, dt: number, p: number): void;
}
}
export namespace Particle {
export type ParticleCreateProperties = ParticleProperties & {
    count: number;
};
export class Controller {
    spriteFrame: SpriteFrame;
    count: number;
    interval: number;
    repeat: number;
    billboard: boolean;
    behaviours: Behaviour[];
    constructor(props?: {
        spriteFrame?: SpriteFrame;
        count?: number;
        interval?: number;
        repeat?: number;
        billboard?: boolean;
        behaviours?: Behaviour[];
        [k: string]: any;
    });
    onParticleCreate?(particle: Particle, props: ParticleCreateProperties): void;
    onParticleUpdate?(particle: Particle): void;
}
}
export namespace Particle {
export const ease: {
    easeLinear: (value: number) => number;
    easeInQuad: (value: number) => number;
    easeOutQuad: (value: number) => number;
    easeInOutQuad: (value: number) => number;
    easeInCubic: (value: number) => number;
    easeOutCubic: (value: number) => number;
    easeInOutCubic: (value: number) => number;
    easeInQuart: (value: number) => number;
    easeOutQuart: (value: number) => number;
    easeInOutQuart: (value: number) => number;
    easeInSine: (value: number) => number;
    easeOutSine: (value: number) => number;
    easeInOutSine: (value: number) => number;
    easeInExpo: (value: number) => number;
    easeOutExpo: (value: number) => number;
    easeInOutExpo: (value: number) => number;
    easeInCirc: (value: number) => number;
    easeOutCirc: (value: number) => number;
    easeInOutCirc: (value: number) => number;
    easeInBack: (value: number) => number;
    easeOutBack: (value: number) => number;
    easeInOutBack: (value: number) => number;
};
export type EasingFunction = (value: number) => number;
}
export namespace Particle {
export class Emitter extends Particle<System> {
    rate: Rate;
    playing: boolean;
    particles: Particle<Emitter>[];
    damping: number;
    controller: Controller;
    constructor(props?: {
        life?: number;
        controller?: Controller;
    });
    initialize({ count, interval, repeat, behaviours }: Controller): void;
    update(dt: number): boolean;
    integrate(dt: number): void;
    createParticle(props: ParticleCreateProperties): void;
    generate(dt: number): void;
    emit(props: ParticleCreateProperties): void;
    play(): void;
    stop(): void;
}
}
export namespace Particle {
export const SYSTEM_UPDATE = "SYSTEM_UPDATE";
export const PARTICLE_CREATED = "PARTICLE_CREATED";
export const PARTICLE_UPDATE = "PARTICLE_UPDATE";
export const PARTICLE_DEAD = "PARTICLE_DEAD";
export const EMITTER_ADDED = "EMITTER_ADDED";
export const EMITTER_REMOVED = "EMITTER_REMOVED";
export const EMITTER_DEAD = "EMITTER_DEAD";
export const SYSTEM_UPDATE_AFTER = "SYSTEM_UPDATE_AFTER";
}
export namespace Particle {
export const INTEGRATION_TYPE_EULER = "EULER";
export const INTEGRATION_TYPE_RK2 = "RUNGE_KUTTA_2";
export const INTEGRATION_TYPE_RK4 = "RUNGE_KUTTA_4";
export const INTEGRATION_TYPE_VERLET = "VERLET";
export function integrate<T>(particle: Particle<T>, dt: number, damping: number, type?: string): void;
export function randomAToB(a: number, b: number, INT: boolean): number;
export function randomFloating(center: number, f: number, INT: boolean): any;
export class Span {
    a: number;
    b: number;
    arr: number[];
    constructor(a: number | number[], b?: number);
    getValue(INT?: boolean): number;
}
export class Rate {
    private _countSpan;
    private _intervalSpan;
    private _elapse;
    private _inteval;
    private _lastTime;
    private _repeat;
    private _repeatCount;
    constructor(count?: number | number[], interval?: number | number[], repeat?: number);
    reset(): void;
    getVaue(dt: number): number;
}
}
export namespace Particle {
export interface ParticleProperties {
    [k: string]: any;
    age?: number;
    life?: number;
    delay?: number;
    energy?: number;
    dead?: boolean;
    behaviours?: Behaviour[];
    rand?: Vector3;
    scale?: Vector3;
    position?: Vector3;
    rotation?: Euler;
    color?: THREE_Color;
}
export interface ParticleTransform {
    [k: string]: any;
    colorA?: THREE_Color;
    colorB?: THREE_Color;
    scaleA?: Vector3;
    scaleB?: Vector3;
    alphaA?: number;
    alphaB?: number;
    force?: Vector3;
}
export class Particle<T = Emitter> {
    index: number;
    age: number;
    life: number;
    energy: number;
    progress: number;
    dead: boolean;
    sleep: boolean;
    delay: number;
    acceleration: Vector3;
    scale: Vector3;
    position: Vector3;
    velocity: Vector3;
    rotation: Euler;
    behaviours: Behaviour[];
    parent: T;
    color: THREE_Color;
    alpha: number;
    mass: number;
    easing: (value: number) => number;
    transform: ParticleTransform;
    rand: Vector3;
    constructor(props?: ParticleProperties);
    reset(): this;
    destroy(): this;
    update(dt: number): boolean;
    addBehaviour(...behaviours: Behaviour[]): void;
    removeBehaviour(behaviour: Behaviour): void;
    removeAllBehaviours(): void;
}
}
export namespace Particle {
export class Pool<T> {
    list: T[];
    get<T extends Object>(proto: new () => T): T | T;
    expire(obj: T): void;
}
}
export namespace Particle {
export class System extends Component {
    playing: boolean;
    pool: Pool<Particle<Emitter>>;
    emitters: Emitter[];
    renderers: BaseRenderer[];
    onLoad({ name, ...props }: {
        [x: string]: any;
        name: any;
    }): void;
    addEmitter(emiter: Emitter): this;
    removeEmitter(emiter: Emitter): this;
    addRenderer(renderer: BaseRenderer): this;
    removeRenderer(renderer: BaseRenderer): this;
    play(): this;
    stop(): this;
    update(dt: number): void;
    getCount(): number;
    onDestroy(): void;
}
}
export namespace Particle {
export function setPrototypeByObj(target: Object, proObj: Object, filters?: string[]): Object;
export function copyProperties(target: Object, props: Object): Object;
}
export namespace Particle {
export class BaseRenderer extends Mesh {
    system?: System;
    init(system: System): this;
    reset(): this;
    destroy(): void;
    onSystemUpdate(system: System): void;
    onSystemUpdateAfter(system: System): void;
}
}
export namespace Particle {





interface IRenderOptions {
    blending?: THREE.Blending;
    useAlphaSDF?: boolean;
    depthTest?: boolean;
    depthWrite?: boolean;
    transparent?: boolean;
    maxParticles?: number;
    map?: THREE.Texture;
    groupOrder?: number;
    renderOrder?: number;
    frustumCulled?: boolean;
}
export class GPURenderer extends BaseRenderer {
    stride: number;
    buffer: Float32Array;
    interleavedBuffer: THREE.InstancedInterleavedBuffer;
    geometry: THREE.InstancedBufferGeometry;
    renderMode: number;
    constructor(options?: IRenderOptions);
    onSystemUpdateAfter(system: System): void;
    commitInstanceBuffer(ins: Particle<Emitter>, offset?: number): void;
}
}
export namespace Particle {
export class MeshRenderer extends BaseRenderer {
}
}
export namespace Particle {
export const ParticleVertexShader = "\nprecision highp float;\nattribute vec4 texCoords;\nattribute vec4 meshCoords;\nattribute vec3 spritePos;\nattribute vec4 spriteQuat;\nattribute vec4 spriteColor;\nattribute vec2 decorators;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\n\n#include <matrix>\n\nmat2 makeRotateMatrix(in float rad) {\n    float c = cos(rad);\n    float s = sin(rad);\n    return mat2(c,-s,s,c);\n}\n\nvoid main() {\n    vColor = spriteColor;\n    vUv = uv * texCoords.zw + texCoords.xy;\n    vUv.y = 1. - vUv.y;\n\n    mat4 instanceMatrix = getInstanceMatrix(spritePos, spriteQuat, vec3(1.));\n    mat4 mvMatrix = modelViewMatrix * instanceMatrix;\n\n    vec4 transformed = vec4(position,1.);\n    transformed.xy = transformed.xy * meshCoords.zw + meshCoords.xy;\n\n    vec4 mvPosition = mvMatrix * transformed;\n    vec4 bbPosition = mvMatrix * vec4(0.,0.,0.,1.);\n    vec2 scale = vec2(length(mvMatrix[0].xyz), length(mvMatrix[1].xyz));\n    bbPosition.xy += makeRotateMatrix(spriteQuat.x) * transformed.xy * scale;\n    mvPosition = mix(mvPosition, bbPosition, decorators.x);\n    \n    gl_Position = projectionMatrix * mvPosition;\n}\n";
export const ParticleFragmentShader = "\nprecision highp float;\nuniform sampler2D map;\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nfloat luma(vec3 color) { return dot(color, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture2D(map, vUv);\n    float shape = color.r;\n\n#ifdef USE_ALPHA_SDF\n#ifdef IS_ADDITIVE_BLENDING\n    float l = vColor.a * luma(vColor.rgb);\n    shape = max(smoothstep(0.48, 0.52, shape), shape * l);\n#else\n    shape = smoothstep(0.48, 0.52, shape);\n#endif\n#endif\n\n    float alpha = color.a * vColor.a;\n    vec3 col = vColor.rgb * vColor.a * shape;\n    gl_FragColor = vec4(col, alpha * shape);\n}\n";
}
export namespace Particle {
export class SpriteRenderer extends BaseRenderer {
}
}
export class InspectorCameraPlugin extends Plugin {
    onLoad(props: any): void;
}
export class InspectorComponentPlugin extends Plugin {
    private _inspector;
    onLoad(props: any): void;
    onDestroy(): void;
    private _onComponentChanged;
}
export class InspectorLightPlugin extends Plugin {
    private _inspectorNode;
    private _inspectorHandler;
    onLoad(props?: any): void;
    onDestroy(): void;
    update(dt: number): void;
}
export class InspectorMaterialPlugin extends Plugin {
    private _inspectorNode;
    private _inspectorHandler;
    onLoad(props?: any): void;
    onDestroy(): void;
}
export class InspectorNodePlugin extends Plugin {
    inspector: InspectorPlugin;
    inspectorNodeHandlers: InspectorNodeHandler[];
    onLoad(props?: any): void;
    onDestroy(): void;
    start(): void;
    registHandler(handler: InspectorNodeHandler): void;
    unregistHandler(handler: InspectorNodeHandler): void;
    private _onNodeChanged;
}
export class InspectorNodeHandler {
    inspectorNode: InspectorNodePlugin;
    onNodeAdd?(node: Object3D): void;
    onNodeRemove?(node: Object3D): void;
    init(inspectorNode: InspectorNodePlugin): this;
}
export class InspectorPlugin extends Plugin {
    private _gui;
    onLoad(): void;
    onDestroy(): void;
    inspect(dir?: string, ...objects: (Object & Properties)[]): this;
    uninspect(dir?: string, ...objects: (Object & Properties)[]): void;
    getObjectName(object: Object & Properties): string;
}
interface Properties {
    name?: string;
    uuid?: string;
    __cls?: string;
    __properties?: any;
}
export class InspectorPostprocessingPlugin extends Plugin {
    private _inspector;
    onLoad(props?: any): void;
    onDestroy(): void;
    private _onComponentChanged;
}
interface ObjectProperties {
    __properties?: any;
    __properties_copy?: any;
    __properties_ignore?: {
        [k: string]: boolean;
    };
}
export function setProperties<T>(obj: T & ObjectProperties, properties_common: {
    [k: string]: any;
}, properties_ignore_common: {
    [k: string]: boolean;
}): T & ObjectProperties;
export function setPropertiesCommon(props: {
    [k: string]: any;
}): {
    [k: string]: any;
};
export function setPropertiesIgnoreCommon(ignores: string[]): {
    [k: string]: boolean;
};
export function defineProperty(target: Object, property: string, get?: () => void, set?: (v: any) => any): Object;
export class InspectorViewerPlugin extends Plugin {
    private _viewerWrap;
    private _inspector;
    onLoad(props: any): void;
    onDestroy(): void;
}
export class Plugin extends Component {
    isPlugin: boolean;
}
export class BloomPlugin extends EffectPlugin<BloomEffect> {
    name: string;
    initialize(props: any): void;
    get intensity(): number;
    set intensity(v: number);
    get luminanceThreshold(): number;
    set luminanceThreshold(v: number);
}
export class ChromaticAberrationPlugin extends EffectPlugin<ChromaticAberrationEffect> {
    name: string;
    get offset(): Vector2;
    set offset(v: Vector2);
    initialize(props: any): void;
}
export class DepthOfFieldPlugin extends EffectPlugin<DepthOfFieldEffect> {
    name: string;
    initialize({ target, ...props }: any): void;
    get target(): Vector3;
    set target(v: Vector3);
    get focalLength(): number;
    set focalLength(v: number);
    get bokehScale(): number;
    set bokehScale(v: number);
}
export class EffectPlugin<T extends Effect> extends Plugin {
    effect: T;
    initialize?(props: any): void;
    onEnable(): void;
    onDisable(): void;
    onLoad(props: any): void;
}
export class FXAAPlugin extends EffectPlugin<FXAAEffect> {
    name: string;
    initialize(props: any): void;
    get minEdgeThreshold(): number;
    set minEdgeThreshold(v: number);
    get maxEdgeThreshold(): number;
    set maxEdgeThreshold(v: number);
    get subpixelQuality(): number;
    set subpixelQuality(v: number);
    get samples(): number;
    set samples(v: number);
}
export class N8AOPlugin extends PassPlugin<N8AOPostPass> {
    name: string;
    private _quality;
    initialize(props: any): void;
    get intensity(): number;
    set intensity(v: number);
    get aoRadius(): number;
    set aoRadius(v: number);
    get quality(): N8AOQuality;
    set quality(v: N8AOQuality);
    get renderMode(): number;
    set renderMode(v: number);
    get depthAwareUpsampling(): boolean;
    set depthAwareUpsampling(v: boolean);
    get halfRes(): boolean;
    set halfRes(v: boolean);
}
export class NVFXAAPlugin extends PassPlugin<ShaderPass> {
    name: string;
    private _material;
    initialize(props: any): void;
    update(dt: number): void;
}
export class PassPlugin<T extends Pass> extends Plugin {
    pass: T;
    initialize?(props: any): void;
    onEnable(): void;
    onDisable(): void;
    onLoad(props: any): void;
    onDestroy(): void;
}
export class SelectiveBloomPlugin extends EffectPlugin<SelectiveBloomEffect> {
    name: string;
    initialize({ selection, selectionLayer, ignoreBackground, ...props }: any): void;
    get intensity(): number;
    set intensity(v: number);
    get luminanceThreshold(): number;
    set luminanceThreshold(v: number);
    get selectionLayer(): number;
    set selectionLayer(v: number);
}
export class SSAOPlugin extends PassPlugin<SSAOPass> {
    initialize(props: any): void;
    get radius(): number;
    set radius(v: number);
    get giBoost(): number;
    set giBoost(v: number);
}
export { ToneMappingMode };
export class ToneMappingPlugin extends EffectPlugin<ToneMappingEffect> {
    name: string;
    get mode(): ToneMappingMode;
    set mode(v: ToneMappingMode);
    initialize(props: any): void;
}
export { Effect, Pass };
export class PostprocessingPlugin extends Plugin {
    private _composer;
    private _effects;
    private _effectPass;
    private _effectsNeedUpdate;
    onLoad({ depthBuffer, stencilBuffer, multisampling, frameBufferType }: {
        depthBuffer?: boolean;
        stencilBuffer?: boolean;
        multisampling?: number;
        frameBufferType?: 1016;
    }): void;
    onDestroy(): void;
    onEnable(): void;
    onDisable(): void;
    onResize(width: number, height: number): void;
    addPass(pass: Pass): void;
    removePass(pass: Pass): void;
    addEffect(effect: Effect): void;
    removeEffect(effect: Effect): void;
    updateEffects(): void;
    update(dt: number): void;
}
export class RenderPlugin extends Plugin {
    update(dt: number): void;
}
export class StatsPlugin extends Plugin {
    private _stats;
    private _dcPanel;
    private _triPanel;
    private _texPanel;
    private _prgPanel;
    onLoad(props?: any): void;
    update(dt: number): void;
}
export class TweenPlugin extends Plugin {
    update(dt: number): void;
}
export class VirtualCameraPlugin extends Plugin {
    name: string;
    private _brain;
    private _freelookCamera;
    onEnable(): void;
    onDisable(): void;
    onLoad(props: {
        fov: number;
        near: number;
        far: number;
        lookAt: Object3D;
        forbidX: boolean;
        forbidY: boolean;
        forbidZ: boolean;
        forbidPanX: boolean;
        forbidPanY: boolean;
        mode: VCamFreeLookMode;
        [k: string]: any;
    }): void;
}
export class SSAOPass extends Pass {
    private _scene;
    private _camera;
    private _ssaoMaterial;
    private _fsQuad;
    private _depthTexture;
    private _normalRenderTarget;
    private _normalMaterial;
    private _aoParams;
    get radius(): number;
    set radius(v: number);
    get giBoost(): number;
    set giBoost(v: number);
    constructor(scene: Scene, camera: Camera);
    private _createSamples;
    private _createNoiseTexure;
    setSize(width: number, height: number): void;
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean): void;
    private _renderOverride;
    private _blit;
    dispose(): void;
}
export const SSAOShader: {
    uniforms: {
        tDiffuse: {
            value: any;
        };
        tDepth: {
            value: any;
        };
        tNormal: {
            value: any;
        };
        tNoise: {
            value: any;
        };
        uClippingParams: {
            value: Vector4;
        };
        uSamples: {
            value: any[];
        };
        uAoParams: {
            value: Vector4;
        };
        uScreenSize: {
            value: Vector4;
        };
        uSsaoProjectionInfo: {
            value: Vector4;
        };
        uFrameModTaaSS: {
            value: number;
        };
        cameraNear: {
            value: number;
        };
        cameraFar: {
            value: number;
        };
        cameraProjectionMatrix: {
            value: Matrix4;
        };
        cameraInverseProjectionMatrix: {
            value: Matrix4;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
export const matrix = "\nmat4 getInstanceMatrix(vec3 p, vec4 q, vec3 s) {\n    mat4 m;\n    float x = q.x;\n    float y = q.y;\n    float z = q.z;\n    float w = q.w;\n    float x2 = x + x;\n    float y2 = y + y;\n    float z2 = z + z;\n    float xx = x * x2;\n    float xy = x * y2;\n    float xz = x * z2;\n    float yy = y * y2;\n    float yz = y * z2;\n    float zz = z * z2;\n    float wx = w * x2;\n    float wy = w * y2;\n    float wz = w * z2;\n    float sx = s.x;\n    float sy = s.y;\n    float sz = s.z;\n    m[0][0] = (1. - (yy + zz)) * sx;\n    m[0][1] = (xy + wz) * sx;\n    m[0][2] = (xz - wy) * sx;\n    m[0][3] = 0.;\n    m[1][0] = (xy - wz) * sy;\n    m[1][1] = (1. - (xx + zz)) * sy;\n    m[1][2] = (yz + wx) * sy;\n    m[1][3] = 0.;\n    m[2][0] = (xz + wy) * sz;\n    m[2][1] = (yz - wx) * sz;\n    m[2][2] = (1. - (xx + yy)) * sz;\n    m[2][3] = 0.;\n    m[3][0] = p.x;\n    m[3][1] = p.y;\n    m[3][2] = p.z;\n    m[3][3] = 1.;\n    return m;\n}\nmat3 getInstanceRotationMatrix(vec4 q) {\n    mat3 m;\n    float x = q.x;\n    float y = q.y;\n    float z = q.z;\n    float w = q.w;\n    float x2 = x + x;\n    float y2 = y + y;\n    float z2 = z + z;\n    float xx = x * x2;\n    float xy = x * y2;\n    float xz = x * z2;\n    float yy = y * y2;\n    float yz = y * z2;\n    float zz = z * z2;\n    float wx = w * x2;\n    float wy = w * y2;\n    float wz = w * z2;\n    m[0][0] = (1. - (yy + zz));\n    m[0][1] = (xy + wz);\n    m[0][2] = (xz - wy);\n    m[1][0] = (xy - wz);\n    m[1][1] = (1. - (xx + zz));\n    m[1][2] = (yz + wx);\n    m[2][0] = (xz + wy);\n    m[2][1] = (yz - wx);\n    m[2][2] = (1. - (xx + yy));\n    return m;\n}\n";
export class GUI {
    /**
     * Creates a panel that holds controllers.
     * @example
     * new GUI();
     * new GUI( { container: document.getElementById( 'custom' ) } );
     *
     * @param {object} [options]
     * @param {boolean} [options.autoPlace=true]
     * Adds the GUI to `document.body` and fixes it to the top right of the page.
     *
     * @param {HTMLElement} [options.container]
     * Adds the GUI to this DOM element. Overrides `autoPlace`.
     *
     * @param {number} [options.width=245]
     * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
     * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`
     *
     * @param {string} [options.title=Controls]
     * Name to display in the title bar.
     *
     * @param {string} [options.id=title]
     * Id of GUI
     *
     * @param {boolean} [options.closeFolders=false]
     * Pass `true` to close all folders in this GUI by default.
     *
     * @param {boolean} [options.injectStyles=true]
     * Injects the default stylesheet into the page if this is the first GUI.
     * Pass `false` to use your own stylesheet.
     *
     * @param {number} [options.touchStyles=true]
     * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
     *
     * @param {GUI} [options.parent]
     * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
     *
     */
    constructor({ parent, autoPlace, container, width, title, id, closeFolders, injectStyles, touchStyles }?: {
        autoPlace?: boolean;
        container?: HTMLElement;
        width?: number;
        title?: string;
        id?: string;
        closeFolders?: boolean;
        injectStyles?: boolean;
        touchStyles?: number;
        parent?: GUI;
    });
    /**
     * The GUI id, default value set as title
     * @type {GUI}
     */
    id: GUI;
    /**
     * The GUI containing this folder, or `undefined` if this is the root GUI.
     * @type {GUI}
     */
    parent: GUI;
    /**
     * The top level GUI containing this folder, or `this` if this is the root GUI.
     * @type {GUI}
     */
    root: GUI;
    /**
     * The list of controllers and folders contained by this GUI.
     * @type {Array<GUI|Controller>}
     */
    children: Array<GUI | Controller>;
    /**
     * The list of controllers contained by this GUI.
     * @type {Array<Controller>}
     */
    controllers: Array<Controller>;
    /**
     * The list of folders contained by this GUI.
     * @type {Array<GUI>}
     */
    folders: Array<GUI>;
    /**
     * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
     * @type {boolean}
     */
    _closed: boolean;
    /**
     * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
     * @type {boolean}
     */
    _hidden: boolean;
    /**
     * The outermost container element.
     * @type {HTMLElement}
     */
    domElement: HTMLElement;
    /**
     * The DOM element that contains the title.
     * @type {HTMLElement}
     */
    $title: HTMLElement;
    /**
     * The DOM element that contains children.
     * @type {HTMLElement}
     */
    $children: HTMLElement;
    _closeFolders: boolean;
    /**
     * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
     * @example
     * gui.add( object, 'property' );
     * gui.add( object, 'number', 0, 100, 1 );
     * gui.add( object, 'options', [ 1, 2, 3 ] );
     *
     * @param {object} object The object the controller will modify.
     * @param {string} property Name of the property to control.
     * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
     * selectable values for a dropdown.
     * @param {number} [max] Maximum value for number controllers.
     * @param {number} [step] Step value for number controllers.
     * @returns {Controller}
     */
    add(object: object, property: string, $1?: number | object | any[], max?: number, step?: number): Controller;
    /**
     * Adds a color controller to the GUI.
     * @example
     * params = {
     * 	cssColor: '#ff00ff',
     * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
     * 	customRange: [ 0, 127, 255 ],
     * };
     *
     * gui.addColor( params, 'cssColor' );
     * gui.addColor( params, 'rgbColor' );
     * gui.addColor( params, 'customRange', 255 );
     *
     * @param {object} object The object the controller will modify.
     * @param {string} property Name of the property to control.
     * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
     * need to set this to 255 if your colors are too bright.
     * @returns {Controller}
     */
    addColor(object: object, property: string, rgbScale?: number): Controller;
    /**
     *
     * @param {object} object
     * @param {string} property Name of the property to control.
     * @returns {Controller}
     */
    addImage(object: object, property: string): Controller;
    /**
     *
     * @param {object} object
     * @param {string} property
     * @param min
     * @param max
     * @param step
     * @returns {Controller}
     */
    addVector(object: object, property: string, min?: number, max?: number, step?: number): Controller;
    /**
     * Adds a folder to the GUI, which is just another GUI. This method returns
     * the nested GUI so you can add controllers to it.
     * @example
     * const folder = gui.addFolder( 'Position' );
     * folder.add( position, 'x' );
     * folder.add( position, 'y' );
     * folder.add( position, 'z' );
     *
     * @param {string} title Name to display in the folder's title bar.
     * @param {string} id Id
     * @returns {GUI}
     */
    addFolder(title: string, id?: string): GUI;
    /**
     *
     * @param {string} id
     * @returns {this}
     */
    removeFolder(id: string): this;
    /**
     *
     * @param {string} id
     * @returns {GUI}
     */
    getFolder(id: string): GUI;
    /**
     * Recalls values that were saved with `gui.save()`.
     * @param {object} obj
     * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
     * @returns {this}
     */
    load(obj: object, recursive?: boolean): this;
    /**
     * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
     * recall these values.
     * @example
     * {
     * 	controllers: {
     * 		prop1: 1,
     * 		prop2: 'value',
     * 		...
     * 	},
     * 	folders: {
     * 		folderName1: { controllers, folders },
     * 		folderName2: { controllers, folders }
     * 		...
     * 	}
     * }
     *
     * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
     * @returns {object}
     */
    save(recursive?: boolean): object;
    /**
     * Opens a GUI or folder. GUI and folders are open by default.
     * @param {boolean} open Pass false to close
     * @returns {this}
     * @example
     * gui.open(); // open
     * gui.open( false ); // close
     * gui.open( gui._closed ); // toggle
     */
    open(open?: boolean): this;
    /**
     * Closes the GUI.
     * @returns {this}
     */
    close(): this;
    _setClosed(closed: any): void;
    /**
     * Shows the GUI after it's been hidden.
     * @param {boolean} show
     * @returns {this}
     * @example
     * gui.show();
     * gui.show( false ); // hide
     * gui.show( gui._hidden ); // toggle
     */
    show(show?: boolean): this;
    /**
     * Hides the GUI.
     * @returns {this}
     */
    hide(): this;
    openAnimated(open?: boolean): this;
    /**
     * Change the title of this GUI.
     * @param {string} title
     * @returns {this}
     */
    title(title: string): this;
    /**
     * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
     * @type {string}
     */
    _title: string;
    /**
     * Resets all controllers to their initial values.
     * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
     * @returns {this}
     */
    reset(recursive?: boolean): this;
    /**
     * Pass a function to be called whenever a controller in this GUI changes.
     * @param {function({object:object, property:string, value:any, controller:Controller})} callback
     * @returns {this}
     * @example
     * gui.onChange( event => {
     * 	event.object     // object that was modified
     * 	event.property   // string, name of property
     * 	event.value      // new value of controller
     * 	event.controller // controller that was modified
     * } );
     */
    onChange(callback: (arg0: {
        object: object;
        property: string;
        value: any;
        controller: Controller;
    }) => any): this;
    /**
     * Used to access the function bound to `onChange` events. Don't modify this value
     * directly. Use the `gui.onChange( callback )` method instead.
     * @type {Function}
     */
    _onChange: Function;
    _callOnChange(controller: any): void;
    /**
     * Pass a function to be called whenever a controller in this GUI has finished changing.
     * @param {function({object:object, property:string, value:any, controller:Controller})} callback
     * @returns {this}
     * @example
     * gui.onFinishChange( event => {
     * 	event.object     // object that was modified
     * 	event.property   // string, name of property
     * 	event.value      // new value of controller
     * 	event.controller // controller that was modified
     * } );
     */
    onFinishChange(callback: (arg0: {
        object: object;
        property: string;
        value: any;
        controller: Controller;
    }) => any): this;
    /**
     * Used to access the function bound to `onFinishChange` events. Don't modify this value
     * directly. Use the `gui.onFinishChange( callback )` method instead.
     * @type {Function}
     */
    _onFinishChange: Function;
    _callOnFinishChange(controller: any): void;
    /**
     * Pass a function to be called when this GUI or its descendants are opened or closed.
     * @param {function(GUI)} callback
     * @returns {this}
     * @example
     * gui.onOpenClose( changedGUI => {
     * 	console.log( changedGUI._closed );
     * } );
     */
    onOpenClose(callback: (arg0: GUI) => any): this;
    _onOpenClose: (arg0: GUI) => any;
    _callOnOpenClose(changedGUI: any): void;
    /**
     * Destroys all DOM elements and event listeners associated with this GUI
     */
    destroy(): void;
    /**
     * Returns an array of controllers contained by this GUI and its descendents.
     * @returns {Controller[]}
     */
    controllersRecursive(): Controller[];
    /**
     * Returns an array of folders contained by this GUI and its descendents.
     * @returns {GUI[]}
     */
    foldersRecursive(): GUI[];
}
export class BooleanController extends Controller {
    constructor(parent: any, object: any, property: any);
    $input: HTMLInputElement;
    $disable: HTMLInputElement;
    updateDisplay(): this;
}
export class ColorController extends Controller {
    constructor(parent: any, object: any, property: any, rgbScale: any);
    $input: HTMLInputElement;
    $text: HTMLInputElement;
    $display: HTMLDivElement;
    _format: {
        isPrimitive: boolean;
        match: (v: any) => boolean;
        fromHexString: typeof normalizeColorString;
        toHexString: typeof normalizeColorString;
    } | {
        isPrimitive: boolean;
        match: (v: any) => boolean;
        fromHexString(string: any, target: any, rgbScale?: number): void;
        toHexString([r, g, b]: [any, any, any], rgbScale?: number): string;
    } | {
        isPrimitive: boolean;
        match: (v: any) => boolean;
        fromHexString(string: any, target: any, rgbScale?: number): void;
        toHexString({ r, g, b }: {
            r: any;
            g: any;
            b: any;
        }, rgbScale?: number): string;
    };
    _rgbScale: any;
    _initialValueHexString: string | boolean;
    _textFocused: boolean;
    $disable: HTMLInputElement;
    reset(): this;
    _setValueFromHexString(value: any): void;
    save(): string | false;
    load(value: any): this;
    updateDisplay(): this;
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */
/** @module Controller */
/**
 * Base class for all controllers.
 */
export class Controller {
    constructor(parent: any, object: any, property: any, className: any, widgetTag?: string);
    /**
     * The GUI that contains this controller.
     * @type {GUI}
     */
    parent: GUI;
    /**
     * The object this controller will modify.
     * @type {object}
     */
    object: object;
    /**
     * The name of the property to control.
     * @type {string}
     */
    property: string;
    /**
     * Used to determine if the controller is disabled.
     * Use `controller.disable( true|false )` to modify this value
     * @type {boolean}
     */
    _disabled: boolean;
    /**
     * Used to determine if the Controller is hidden.
     * Use `controller.show()` or `controller.hide()` to change this.
     * @type {boolean}
     */
    _hidden: boolean;
    /**
     * The value of `object[ property ]` when the controller was created.
     * @type {any}
     */
    initialValue: any;
    /**
     * The outermost container DOM element for this controller.
     * @type {HTMLElement}
     */
    domElement: HTMLElement;
    /**
     * The DOM element that contains the controller's name.
     * @type {HTMLElement}
     */
    $name: HTMLElement;
    /**
     * The DOM element that contains the controller's "widget" (which differs by controller type).
     * @type {HTMLElement}
     */
    $widget: HTMLElement;
    /**
     * The DOM element that receives the disabled attribute when using disable()
     * @type {HTMLElement}
     */
    $disable: HTMLElement;
    _listenCallback(): void;
    /**
     * Sets the name of the controller and its label in the GUI.
     * @param {string} name
     * @returns {this}
     */
    name(name: string): this;
    /**
     * The controller's name. Use `controller.name( 'Name' )` to modify this value.
     * @type {string}
     */
    _name: string;
    /**
     * Pass a function to be called whenever the value is modified by this controller.
     * The function receives the new value as its first parameter. The value of `this` will be the
     * controller.
     *
     * For function controllers, the `onChange` callback will be fired on click, after the function
     * executes.
     * @param {Function} callback
     * @returns {this}
     * @example
     * const controller = gui.add( object, 'property' );
     *
     * controller.onChange( function( v ) {
     * 	console.log( 'The value is now ' + v );
     * 	console.assert( this === controller );
     * } );
     */
    onChange(callback: Function): this;
    /**
     * Used to access the function bound to `onChange` events. Don't modify this value directly.
     * Use the `controller.onChange( callback )` method instead.
     * @type {Function}
     */
    _onChange: Function;
    /**
     * Calls the onChange methods of this controller and its parent GUI.
     * @protected
     */
    protected _callOnChange(): void;
    _changed: boolean;
    /**
     * Pass a function to be called after this controller has been modified and loses focus.
     * @param {Function} callback
     * @returns {this}
     * @example
     * const controller = gui.add( object, 'property' );
     *
     * controller.onFinishChange( function( v ) {
     * 	console.log( 'Changes complete: ' + v );
     * 	console.assert( this === controller );
     * } );
     */
    onFinishChange(callback: Function): this;
    /**
     * Used to access the function bound to `onFinishChange` events. Don't modify this value
     * directly. Use the `controller.onFinishChange( callback )` method instead.
     * @type {Function}
     */
    _onFinishChange: Function;
    /**
     * Should be called by Controller when its widgets lose focus.
     * @protected
     */
    protected _callOnFinishChange(): void;
    /**
     * Sets the controller back to its initial value.
     * @returns {this}
     */
    reset(): this;
    /**
     * Enables this controller.
     * @param {boolean} enabled
     * @returns {this}
     * @example
     * controller.enable();
     * controller.enable( false ); // disable
     * controller.enable( controller._disabled ); // toggle
     */
    enable(enabled?: boolean): this;
    /**
     * Disables this controller.
     * @param {boolean} disabled
     * @returns {this}
     * @example
     * controller.disable();
     * controller.disable( false ); // enable
     * controller.disable( !controller._disabled ); // toggle
     */
    disable(disabled?: boolean): this;
    /**
     * Shows the Controller after it's been hidden.
     * @param {boolean} show
     * @returns {this}
     * @example
     * controller.show();
     * controller.show( false ); // hide
     * controller.show( controller._hidden ); // toggle
     */
    show(show?: boolean): this;
    /**
     * Hides the Controller.
     * @returns {this}
     */
    hide(): this;
    /**
     * Destroys this controller and replaces it with a new option controller. Provided as a more
     * descriptive syntax for `gui.add`, but primarily for compatibility with dat.gui.
     *
     * Use caution, as this method will destroy old references to this controller. It will also
     * change controller order if called out of sequence, moving the option controller to the end of
     * the GUI.
     * @example
     * // safe usage
     *
     * gui.add( object1, 'property' ).options( [ 'a', 'b', 'c' ] );
     * gui.add( object2, 'property' );
     *
     * // danger
     *
     * const c = gui.add( object1, 'property' );
     * gui.add( object2, 'property' );
     *
     * c.options( [ 'a', 'b', 'c' ] );
     * // controller is now at the end of the GUI even though it was added first
     *
     * assert( c.parent.children.indexOf( c ) === -1 )
     * // c references a controller that no longer exists
     *
     * @param {object|Array} options
     * @returns {Controller}
     */
    options(options: object | any[]): Controller;
    /**
     * Sets the minimum value. Only works on number controllers.
     * @param {number} min
     * @returns {this}
     */
    min(min: number): this;
    /**
     * Sets the maximum value. Only works on number controllers.
     * @param {number} max
     * @returns {this}
     */
    max(max: number): this;
    /**
     * Values set by this controller will be rounded to multiples of `step`. Only works on number
     * controllers.
     * @param {number} step
     * @returns {this}
     */
    step(step: number): this;
    /**
     * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
     * like `step()`. Only works on number controllers.
     * @example
     * gui.add( object, 'property' ).listen().decimals( 4 );
     * @param {number} decimals
     * @returns {this}
     */
    decimals(decimals: number): this;
    /**
     * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
     * @param {boolean} listen
     * @returns {this}
     */
    listen(listen?: boolean): this;
    /**
     * Used to determine if the controller is currently listening. Don't modify this value
     * directly. Use the `controller.listen( true|false )` method instead.
     * @type {boolean}
     */
    _listening: boolean;
    _listenCallbackID: number;
    _listenPrevValue: any;
    /**
     * Returns `object[ property ]`.
     * @returns {any}
     */
    getValue(): any;
    /**
     * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
     * @param {any} value
     * @param {boolean} callOnChange
     * @returns {this}
     */
    setValue(value: any): this;
    /**
     * Updates the display to keep it in sync with the current value. Useful for updating your
     * controllers when their values have been modified outside of the GUI.
     * @returns {this}
     */
    updateDisplay(): this;
    load(value: any): this;
    save(): any;
    /**
     * Destroys this controller and removes it from the parent GUI.
     */
    destroy(): void;
}
export class FunctionController extends Controller {
    constructor(parent: any, object: any, property: any);
    $button: HTMLButtonElement;
    $disable: HTMLButtonElement;
}
export class ImageController extends Controller {
    constructor(parent: any, object: any, property: any);
    $img: HTMLImageElement;
    updateDisplay(): this;
}
export class NumberController extends Controller {
    constructor(parent: any, object: any, property: any, min: any, max: any, step: any);
    decimals(decimals: any): this;
    _decimals: any;
    min(min: any): this;
    _min: any;
    max(max: any): this;
    _max: any;
    step(step: any, explicit?: boolean): this;
    _step: any;
    _stepExplicit: boolean;
    updateDisplay(): this;
    _initInput(): void;
    $input: HTMLInputElement;
    _inputFocused: boolean;
    _initSlider(): void;
    _hasSlider: boolean;
    $slider: HTMLDivElement;
    $fill: HTMLDivElement;
    _setDraggingStyle(active: any, axis?: string): void;
    _getImplicitStep(): number;
    _onUpdateMinMax(): void;
    _normalizeMouseWheel(e: any): any;
    _arrowKeyMultiplier(e: any): number;
    _snap(value: any): number;
    _clamp(value: any): any;
    _snapClampSetValue(value: any): void;
    get _hasScrollBar(): boolean;
    get _hasMin(): boolean;
    get _hasMax(): boolean;
}
export class OptionController extends Controller {
    constructor(parent: any, object: any, property: any, options: any);
    $select: HTMLSelectElement;
    $display: HTMLDivElement;
    _values: any[];
    _names: any[];
    $disable: HTMLSelectElement;
    updateDisplay(): this;
}
export class StringController extends Controller {
    constructor(parent: any, object: any, property: any);
    $input: HTMLInputElement;
    $disable: HTMLInputElement;
    updateDisplay(): this;
}
function normalizeColorString(string: any): string | false;
export type N8AOQuality = "Performance" | "Low" | "Medium" | "High" | "Ultra";
export class N8AOPostPass extends Pass {
    constructor(scene: Scene, camera: Camera, width?: number, height?: number);
    public configuration: {
        aoSamples: number,
        aoRadius: number,
        denoiseSamples: number,
        denoiseRadius: number,
        distanceFalloff: number,
        intensity: number,
        denoiseIterations: number,
        renderMode: number,
        color: Color,
        gammaCorrection: boolean,
        logarithmicDepthBuffer: boolean,
        screenSpaceRadius: boolean,
        halfRes: boolean,
        depthAwareUpsampling: boolean,
        autoRenderBeauty: boolean,
        colorMultiply: boolean
    }

    public setQualityMode(mode: N8AOQuality): void;
}

/**
 * A color channel enumeration.
 *
 * @type {Object}
 * @property {Number} RED - Red.
 * @property {Number} GREEN - Green.
 * @property {Number} BLUE - Blue.
 * @property {Number} ALPHA - Alpha.
 */
export enum ColorChannel {
	RED,
	GREEN,
	BLUE,
	ALPHA,
}

/**
 * The Disposable contract.
 *
 * Implemented by objects that can free internal resources.
 *
 * @interface
 */
export interface Disposable {

	/**
	 * Frees internal resources.
	 */
	dispose(): void;

}

/**
 * The initializable contract.
 *
 * Implemented by objects that can be initialized.
 *
 * @interface
 */
export interface Initializable {

	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - A renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A Gauss kernel.
 *
 * Based on https://github.com/Jam3/glsl-fast-gaussian-blur.
 */
export class GaussKernel {

	/**
	 * Constructs a new Gauss kernel.
	 *
	 * @param kernelSize - The kernel size. Should be an odd number in the range [3, 1020].
	 * @param [edgeBias=2] - Determines how many edge coefficients should be cut off for increased accuracy.
	 */
	constructor(kernelSize: number, edgeBias: number);

}
/**
 * An adaptive luminance shader material.
 */
export class AdaptiveLuminanceMaterial extends ShaderMaterial {

	/**
	 * Constructs a new adaptive luminance material.
	 */
	constructor();
	/**
	 * The primary luminance buffer that contains the downsampled average luminance.
	 *
	 * @type {Texture}
	 */
	set luminanceBuffer0(arg: Texture);
	/**
	 * Sets the primary luminance buffer that contains the downsampled average luminance.
	 *
	 * @deprecated Use luminanceBuffer0 instead.
	 * @param {Texture} value - The buffer.
	 */
	setLuminanceBuffer0(value: Texture): void;
	/**
	 * The secondary luminance buffer.
	 *
	 * @type {Texture}
	 */
	set luminanceBuffer1(arg: Texture);
	/**
	 * Sets the secondary luminance buffer.
	 *
	 * @deprecated Use luminanceBuffer1 instead.
	 * @param {Texture} value - The buffer.
	 */
	setLuminanceBuffer1(value: Texture): void;
	/**
	 * The 1x1 mipmap level.
	 *
	 * This level is used to identify the smallest mipmap of the primary luminance buffer.
	 *
	 * @type {Number}
	 */
	set mipLevel1x1(arg: number);
	/**
	 * Sets the 1x1 mipmap level.
	 *
	 * @deprecated Use mipLevel1x1 instead.
	 * @param {Number} value - The level.
	 */
	setMipLevel1x1(value: number): void;
	/**
	 * The delta time.
	 *
	 * @type {Number}
	 */
	set deltaTime(arg: number);
	/**
	 * Sets the delta time.
	 *
	 * @deprecated Use deltaTime instead.
	 * @param {Number} value - The delta time.
	 */
	setDeltaTime(value: number): void;
	set minLuminance(arg: number);
	/**
	 * The lowest possible luminance value.
	 *
	 * @type {Number}
	 */
	get minLuminance(): number;
	/**
	 * Returns the lowest possible luminance value.
	 *
	 * @deprecated Use minLuminance instead.
	 * @return {Number} The minimum luminance.
	 */
	getMinLuminance(): number;
	/**
	 * Sets the minimum luminance.
	 *
	 * @deprecated Use minLuminance instead.
	 * @param {Number} value - The minimum luminance.
	 */
	setMinLuminance(value: number): void;
	set adaptationRate(arg: number);
	/**
	 * The luminance adaptation rate.
	 *
	 * @type {Number}
	 */
	get adaptationRate(): number;
	/**
	 * Returns the luminance adaptation rate.
	 *
	 * @deprecated Use adaptationRate instead.
	 * @return {Number} The adaptation rate.
	 */
	getAdaptationRate(): number;
	/**
	 * Sets the luminance adaptation rate.
	 *
	 * @deprecated Use adaptationRate instead.
	 * @param {Number} value - The adaptation rate.
	 */
	setAdaptationRate(value: number): void;

}

/**
 * A bokeh disc blur material.
 *
 * This material should be applied twice in a row, with `fill` mode enabled for the second pass. Enabling the
 * `foreground` option causes the shader to combine the near and far CoC values around foreground objects.
 *
 * @implements {Resizable}
 */
export class BokehMaterial extends ShaderMaterial implements Resizable {

	/**
	 * Constructs a new bokeh material.
	 *
	 * @param {Boolean} [fill=false] - Enables or disables the bokeh highlight fill mode.
	 * @param {Boolean} [foreground=false] - Determines whether this material will be applied to foreground colors.
	 */
	constructor(fill?: boolean, foreground?: boolean);
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The buffer.
	 */
	setInputBuffer(value: Texture): void;
	/**
	 * The circle of confusion buffer.
	 *
	 * @type {Texture}
	 */
	set cocBuffer(arg: Texture);
	/**
	 * Sets the circle of confusion buffer.
	 *
	 * @deprecated Use cocBuffer instead.
	 * @param {Texture} value - The buffer.
	 */
	setCoCBuffer(value: Texture): void;
	set scale(arg: number);
	/**
	 * The blur scale.
	 *
	 * @type {Number}
	 */
	get scale(): number;
	/**
	 * Returns the blur scale.
	 *
	 * @deprecated Use scale instead.
	 * @return {Number} The scale.
	 */
	getScale(value: number): number;
	/**
	 * Sets the blur scale.
	 *
	 * @deprecated Use scale instead.
	 * @param {Number} value - The scale.
	 */
	setScale(value: number): void;
	/**
	 * Sets the texel size.
	 *
	 * @deprecated Use setSize() instead.
	 * @param {Number} x - The texel width.
	 * @param {Number} y - The texel height.
	 */
	setTexelSize(x: number, y: number): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * A Circle of Confusion shader material.
 */
export class CircleOfConfusionMaterial extends ShaderMaterial {

	/**
	 * Constructs a new CoC material.
	 *
	 * @param {Camera} camera - A camera.
	 */
	constructor(camera: Camera);
	/**
	 * The depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	set focusDistance(arg: number);
	/**
	 * The focus distance. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get focusDistance(): number;
	/**
	 * Returns the focus distance.
	 *
	 * @deprecated Use focusDistance instead.
	 * @return {Number} The focus distance.
	 */
	getFocusDistance(value: number): number;
	/**
	 * Sets the focus distance.
	 *
	 * @deprecated Use focusDistance instead.
	 * @param {Number} value - The focus distance.
	 */
	setFocusDistance(value: number): void;
	set focalLength(arg: number);
	/**
	 * The focal length.
	 *
	 * @deprecated Renamed to focusRange.
	 * @type {Number}
	 */
	get focalLength(): number;
	/**
	 * Returns the focal length.
	 *
	 * @deprecated Use focusRange instead.
	 * @return {Number} The focal length.
	 */
	getFocalLength(value: number): number;
	/**
	 * Sets the focal length.
	 *
	 * @deprecated Use focusRange instead.
	 * @param {Number} value - The focal length.
	 */
	setFocalLength(value: number): void;
	/**
	 * Adopts the settings of the given camera.
	 *
	 * @param {Camera} camera - A camera.
	 */
	adoptCameraSettings(camera: Camera): void;

	/**
	 * The focus distance in world units.
	 *
	 * @type {Number}
	 */
	get worldFocusDistance(): number;
	set worldFocusDistance(value: number);

	/**
	 * The focus range. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get focusRange(): number;
	set focusRange(value: number);

	/**
	 * The focus range in world units.
	 *
	 * @type {Number}
	 */
	get worldFocusRange(): number;
	set worldFocusRange(value: number);

}

/**
 * A blur kernel size enumeration.
 *
 * @type {Object}
 * @property {Number} VERY_SMALL - A very small kernel that matches a 7x7 Gaussian blur kernel.
 * @property {Number} SMALL - A small kernel that matches a 15x15 Gaussian blur kernel.
 * @property {Number} MEDIUM - A medium sized kernel that matches a 23x23 Gaussian blur kernel.
 * @property {Number} LARGE - A large kernel that matches a 35x35 Gaussian blur kernel.
 * @property {Number} VERY_LARGE - A very large kernel that matches a 63x63 Gaussian blur kernel.
 * @property {Number} HUGE - A huge kernel that matches a 127x127 Gaussian blur kernel.
 */
export enum KernelSize {
	VERY_SMALL,
	SMALL,
	MEDIUM,
	LARGE,
	VERY_LARGE,
	HUGE,
}

/**
 * A simple copy shader material.
 */
export class CopyMaterial extends ShaderMaterial {

	/**
	 * Constructs a new copy material.
	 */
	constructor();
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Number} value - The buffer.
	 */
	setInputBuffer(value: number): void;
	/**
	 * Returns the opacity.
	 *
	 * @deprecated Use opacity instead.
	 * @return {Number} The opacity.
	 */
	getOpacity(): number;
	/**
	 * Sets the opacity.
	 *
	 * @deprecated Use opacity instead.
	 * @param {Number} value - The opacity.
	 */
	setOpacity(value: number): void;

}

/**
 * A depth comparison shader material.
 */
export class DepthComparisonMaterial extends ShaderMaterial {

	/**
	 * Constructs a new depth comparison material.
	 *
	 * @param {Texture} [depthTexture=null] - A depth texture.
	 * @param {PerspectiveCamera} [camera] - A camera.
	 */
	constructor(depthTexture?: Texture, camera?: PerspectiveCamera);
	/**
	 * The depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=RGBADepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Adopts the settings of the given camera.
	 *
	 * @param {Camera} camera - A camera.
	 */
	adoptCameraSettings(camera: Camera): void;

}

/**
 * An enumeration of depth copy modes.
 *
 * @type {Object}
 * @property {Number} FULL - Copies the full depth texture every frame.
 * @property {Number} SINGLE - Copies a single texel from the depth texture on demand.
 */
export enum DepthCopyMode {
	FULL,
	SINGLE,
}

/**
 * A depth copy shader material.
 */
export class DepthCopyMaterial extends ShaderMaterial {

	/**
	 * Constructs a new depth copy material.
	 */
	constructor();
	/**
	 * The input depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The input depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set inputDepthPacking(arg: DepthPackingStrategies);
	set outputDepthPacking(arg: DepthPackingStrategies);
	/**
	 * The output depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	get outputDepthPacking(): DepthPackingStrategies;
	/**
	 * Sets the input depth buffer.
	 *
	 * @deprecated Use depthBuffer and inputDepthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Returns the current input depth packing strategy.
	 *
	 * @deprecated
	 * @return {DepthPackingStrategies} The input depth packing strategy.
	 */
	getInputDepthPacking(): DepthPackingStrategies;
	/**
	 * Sets the input depth packing strategy.
	 *
	 * @deprecated Use inputDepthPacking instead.
	 * @param {DepthPackingStrategies} value - The new input depth packing strategy.
	 */
	setInputDepthPacking(value: DepthPackingStrategies): void;
	/**
	 * Returns the current output depth packing strategy.
	 *
	 * @deprecated Use outputDepthPacking instead.
	 * @return {DepthPackingStrategies} The output depth packing strategy.
	 */
	getOutputDepthPacking(): DepthPackingStrategies;
	/**
	 * Sets the output depth packing strategy.
	 *
	 * @deprecated Use outputDepthPacking instead.
	 * @param {DepthPackingStrategies} value - The new output depth packing strategy.
	 */
	setOutputDepthPacking(value: DepthPackingStrategies): void;
	/**
	 * The screen space position used for single-texel copy operations.
	 *
	 * @type {Vector2}
	 */
	get texelPosition(): Vector2;
	/**
	 * Returns the screen space position used for single-texel copy operations.
	 *
	 * @deprecated Use texelPosition instead.
	 * @return {Vector2} The position.
	 */
	getTexelPosition(): Vector2;
	/**
	 * Sets the screen space position used for single-texel copy operations.
	 *
	 * @deprecated
	 * @param {Vector2} value - The position.
	 */
	setTexelPosition(value: Vector2): void;
	set mode(arg: DepthCopyMode);
	/**
	 * The depth copy mode.
	 *
	 * @type {DepthCopyMode}
	 */
	get mode(): DepthCopyMode;
	/**
	 * Returns the depth copy mode.
	 *
	 * @deprecated Use mode instead.
	 * @return {DepthCopyMode} The depth copy mode.
	 */
	getMode(): DepthCopyMode;
	/**
	 * Sets the depth copy mode.
	 *
	 * @deprecated Use mode instead.
	 * @param {DepthCopyMode} value - The new mode.
	 */
	setMode(value: DepthCopyMode): void;

}

/**
 * A depth downsampling shader material.
 *
 * Based on an article by Eleni Maria Stea:
 * https://eleni.mutantstargoat.com/hikiko/depth-aware-upsampling-6
 *
 * @implements {Resizable}
 */
export class DepthDownsamplingMaterial
	extends ShaderMaterial
	implements Resizable {

	/**
	 * Constructs a new depth downsampling material.
	 */
	constructor();
	/**
	 * The depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * The normal buffer.
	 *
	 * @type {Texture}
	 */
	set normalBuffer(arg: Texture);
	/**
	 * Sets the normal buffer.
	 *
	 * @deprecated Use normalBuffer instead.
	 * @param {Texture} value - The normal buffer.
	 */
	setNormalBuffer(value: Texture): void;
	/**
	 * Sets the texel size.
	 *
	 * @deprecated Use setSize() instead.
	 * @param {Number} x - The texel width.
	 * @param {Number} y - The texel height.
	 */
	setTexelSize(x: number, y: number): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * An enumeration of depth test strategies.
 *
 * @type {Object}
 * @property {Number} DEFAULT - Perform depth test only.
 * @property {Number} KEEP_MAX_DEPTH - Always keep max depth.
 * @property {Number} DISCARD_MAX_DEPTH - Always discard max depth.
 */
export enum DepthTestStrategy {
	DEFAULT,
	KEEP_MAX_DEPTH,
	DISCARD_MAX_DEPTH,
}

/**
 * A depth mask shader material.
 *
 * This material masks a color buffer by comparing two depth textures.
 */
export class DepthMaskMaterial extends ShaderMaterial {

	/**
	 * Constructs a new depth mask material.
	 */
	constructor();
	set depthMode(arg: DepthModes);
	/**
	 * The depth mode.
	 *
	 * @see https://threejs.org/docs/#api/en/constants/Materials
	 * @type {DepthModes}
	 */
	get depthMode(): DepthModes;
	/**
	 * The primary depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer0(arg: Texture);
	/**
	 * The primary depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking0(arg: DepthPackingStrategies);
	/**
	 * Sets the base depth buffer.
	 *
	 * @deprecated Use depthBuffer0 and depthPacking0 instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer0(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * The secondary depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer1(arg: Texture);
	/**
	 * The secondary depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking1(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer that will be compared with the base depth buffer.
	 *
	 * @deprecated Use depthBuffer1 and depthPacking1 instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer1(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	set maxDepthStrategy(arg: DepthTestStrategy);
	/**
	 * The strategy for handling maximum depth.
	 *
	 * @type {DepthTestStrategy}
	 */
	get maxDepthStrategy(): DepthTestStrategy;
	set keepFar(arg: boolean);
	/**
	 * Indicates whether maximum depth values should be preserved.
	 *
	 * @type {Boolean}
	 * @deprecated Use maxDepthStrategy instead.
	 */
	get keepFar(): boolean;
	/**
	 * Returns the strategy for dealing with maximum depth values.
	 *
	 * @deprecated Use maxDepthStrategy instead.
	 * @return {DepthTestStrategy} The strategy.
	 */
	getMaxDepthStrategy(): DepthTestStrategy;
	/**
	 * Sets the strategy for dealing with maximum depth values.
	 *
	 * @deprecated Use maxDepthStrategy instead.
	 * @param {DepthTestStrategy} value - The strategy.
	 */
	setMaxDepthStrategy(value: DepthTestStrategy): void;
	set epsilon(arg: number);
	/**
	 * A small error threshold that is used for `EqualDepth` and `NotEqualDepth` tests. Default is `1e-5`.
	 *
	 * @type {Number}
	 */
	get epsilon(): number;
	/**
	 * Returns the current error threshold for depth comparisons. Default is `1e-5`.
	 *
	 * @deprecated Use epsilon instead.
	 * @return {Number} The error threshold.
	 */
	getEpsilon(): number;
	/**
	 * Sets the depth comparison error threshold.
	 *
	 * @deprecated Use epsilon instead.
	 * @param {Number} value - The new error threshold.
	 */
	setEpsilon(value: number): void;
	/**
	 * Returns the current depth mode.
	 *
	 * @deprecated Use depthMode instead.
	 * @return {DepthModes} The depth mode. Default is `LessDepth`.
	 */
	getDepthMode(): DepthModes;
	/**
	 * Sets the depth mode.
	 *
	 * @deprecated Use depthMode instead.
	 * @param {DepthModes} mode - The depth mode.
	 */
	setDepthMode(mode: DepthModes): void;

}

/**
 * An enumeration of edge detection modes.
 *
 * @type {Object}
 * @property {Number} DEPTH - Depth-based edge detection.
 * @property {Number} LUMA - Luminance-based edge detection.
 * @property {Number} COLOR - Chroma-based edge detection.
 */
export enum EdgeDetectionMode {
	DEPTH,
	LUMA,
	COLOR,
}

/**
 * An enumeration of predication modes.
 *
 * @type {Object}
 * @property {Number} DISABLED - No predicated thresholding.
 * @property {Number} DEPTH - Depth-based predicated thresholding.
 * @property {Number} CUSTOM - Predicated thresholding using a custom buffer.
 */
export enum PredicationMode {
	DISABLED,
	DEPTH,
	CUSTOM,
}
/**
 * An edge detection material.
 *
 * Mainly used for Subpixel Morphological Anti-Aliasing.
 *
 * @implements {Resizable}
 */
export class EdgeDetectionMaterial
	extends ShaderMaterial
	implements Resizable {

	/**
	 * Constructs a new edge detection material.
	 *
	 * TODO Remove parameters.
	 * @param {Vector2} [texelSize] - The screen texel size.
	 * @param {EdgeDetectionMode} [mode=EdgeDetectionMode.COLOR] - The edge detection mode.
	 */
	constructor(texelSize?: Vector2, mode?: EdgeDetectionMode);
	set edgeDetectionMode(arg: EdgeDetectionMode);
	/**
	 * The edge detection mode.
	 *
	 * @type {EdgeDetectionMode}
	 */
	get edgeDetectionMode(): EdgeDetectionMode;
	/**
	 * The depth buffer.
	 *
	 * @type {Texture}
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Returns the edge detection mode.
	 *
	 * @deprecated Use edgeDetectionMode instead.
	 * @return {EdgeDetectionMode} The mode.
	 */
	getEdgeDetectionMode(): EdgeDetectionMode;
	/**
	 * Sets the edge detection mode.
	 *
	 * @deprecated Use edgeDetectionMode instead.
	 * @param {EdgeDetectionMode} value - The edge detection mode.
	 */
	setEdgeDetectionMode(value: EdgeDetectionMode): void;
	set localContrastAdaptationFactor(arg: number);
	/**
	 * The local contrast adaptation factor. Has no effect if the edge detection mode is set to DEPTH. Default is 2.0.
	 *
	 * If a neighbor edge has _factor_ times bigger contrast than the current edge, the edge will be discarded.
	 *
	 * This allows to eliminate spurious crossing edges and is based on the fact that if there is too much contrast in a
	 * direction, the perceptual contrast in the other neighbors will be hidden.
	 *
	 * @type {Number}
	 */
	get localContrastAdaptationFactor(): number;
	/**
	 * Returns the local contrast adaptation factor.
	 *
	 * @deprecated Use localContrastAdaptationFactor instead.
	 * @return {Number} The factor.
	 */
	getLocalContrastAdaptationFactor(): number;
	/**
	 * Sets the local contrast adaptation factor. Has no effect if the edge detection mode is set to DEPTH.
	 *
	 * @deprecated Use localContrastAdaptationFactor instead.
	 * @param {Number} value - The local contrast adaptation factor. Default is 2.0.
	 */
	setLocalContrastAdaptationFactor(value: number): void;
	set edgeDetectionThreshold(arg: number);
	/**
	 * The edge detection threshold. Range: [0.0, 0.5].
	 *
	 * A lower value results in more edges being detected at the expense of performance.
	 *
	 * For luma- and chroma-based edge detection, 0.1 is a reasonable value and allows to catch most visible edges. 0.05
	 * is a rather overkill value that allows to catch 'em all. Darker scenes may require an even lower threshold.
	 *
	 * If depth-based edge detection is used, the threshold will depend on the scene depth.
	 *
	 * @type {Number}
	 */
	get edgeDetectionThreshold(): number;
	/**
	 * Returns the edge detection threshold.
	 *
	 * @deprecated Use edgeDetectionThreshold instead.
	 * @return {Number} The threshold.
	 */
	getEdgeDetectionThreshold(): number;
	/**
	 * Sets the edge detection threshold.
	 *
	 * @deprecated Use edgeDetectionThreshold instead.
	 * @param {Number} value - The edge detection threshold. Range: [0.0, 0.5].
	 */
	setEdgeDetectionThreshold(value: number): void;
	set predicationMode(arg: PredicationMode);
	/**
	 * The predication mode.
	 *
	 * Predicated thresholding allows to better preserve texture details and to improve edge detection using an additional
	 * buffer such as a light accumulation or depth buffer.
	 *
	 * @type {PredicationMode}
	 */
	get predicationMode(): PredicationMode;
	/**
	 * Returns the predication mode.
	 *
	 * @deprecated Use predicationMode instead.
	 * @return {PredicationMode} The mode.
	 */
	getPredicationMode(): PredicationMode;
	/**
	 * Sets the predication mode.
	 *
	 * @deprecated Use predicationMode instead.
	 * @param {PredicationMode} value - The predication mode.
	 */
	setPredicationMode(value: PredicationMode): void;
	/**
	 * The predication buffer.
	 *
	 * @type {Texture}
	 */
	set predicationBuffer(arg: Texture);
	/**
	 * Sets a custom predication buffer.
	 *
	 * @deprecated Use predicationBuffer instead.
	 * @param {Texture} value - The predication buffer.
	 */
	setPredicationBuffer(value: Texture): void;
	set predicationThreshold(arg: number);
	/**
	 * The predication threshold.
	 *
	 * @type {Number}
	 */
	get predicationThreshold(): number;
	/**
	 * Returns the predication threshold.
	 *
	 * @deprecated Use predicationThreshold instead.
	 * @return {Number} The threshold.
	 */
	getPredicationThreshold(): number;
	/**
	 * Sets the predication threshold.
	 *
	 * @deprecated Use predicationThreshold instead.
	 * @param {Number} value - The threshold.
	 */
	setPredicationThreshold(value: number): void;
	set predicationScale(arg: number);
	/**
	 * The predication scale. Range: [1.0, 5.0].
	 *
	 * Determines how much the edge detection threshold should be scaled when using predication.
	 *
	 * @type {Number}
	 */
	get predicationScale(): number;
	/**
	 * Returns the predication scale.
	 *
	 * @deprecated Use predicationScale instead.
	 * @return {Number} The scale.
	 */
	getPredicationScale(): number;
	/**
	 * Sets the predication scale.
	 *
	 * @deprecated Use predicationScale instead.
	 * @param {Number} value - The scale. Range: [1.0, 5.0].
	 */
	setPredicationScale(value: number): void;
	set predicationStrength(arg: number);
	/**
	 * The predication strength. Range: [0.0, 1.0].
	 *
	 * Determines how much the edge detection threshold should be decreased locally when using predication.
	 *
	 * @type {Number}
	 */
	get predicationStrength(): number;
	/**
	 * Returns the predication strength.
	 *
	 * @deprecated Use predicationStrength instead.
	 * @return {Number} The strength.
	 */
	getPredicationStrength(): number;
	/**
	 * Sets the predication strength.
	 *
	 * @deprecated Use predicationStrength instead.
	 * @param {Number} value - The strength. Range: [0.0, 1.0].
	 */
	setPredicationStrength(value: number): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}
export type ColorEdgesMaterial = EdgeDetectionMaterial;

/**
 * An effect material for compound shaders. Supports dithering.
 *
 * @implements {Resizable}
 */
export class EffectMaterial extends ShaderMaterial implements Resizable {

	/**
	 * An enumeration of shader code section placeholders used by the {@link EffectPass}.
	 *
	 * @type {Object}
	 * @property {String} FRAGMENT_HEAD - A placeholder for function and variable declarations inside the fragment shader.
	 * @property {String} FRAGMENT_MAIN_UV - A placeholder for UV transformations inside the fragment shader.
	 * @property {String} FRAGMENT_MAIN_IMAGE - A placeholder for color calculations inside the fragment shader.
	 * @property {String} VERTEX_HEAD - A placeholder for function and variable declarations inside the vertex shader.
	 * @property {String} VERTEX_MAIN_SUPPORT - A placeholder for supporting calculations inside the vertex shader.
	 */
	static get Section(): {
		FRAGMENT_HEAD: string;
		FRAGMENT_MAIN_UV: string;
		FRAGMENT_MAIN_IMAGE: string;
		VERTEX_HEAD: string;
		VERTEX_MAIN_SUPPORT: string;
	};

	/**
	 * Constructs a new effect material.
	 *
	 * @param {Map<String, String>} [shaderParts] - A collection of shader snippets. See {@link Section}.
	 * @param {Map<String, String>} [defines] - A collection of preprocessor macro definitions.
	 * @param {Map<String, Uniform>} [uniforms] - A collection of uniforms.
	 * @param {Camera} [camera] - A camera.
	 * @param {Boolean} [dithering=false] - Whether dithering should be enabled.
	 */
	constructor(
		shaderParts?: Map<string, string>,
		defines?: Map<string, string>,
		uniforms?: Map<string, Uniform>,
		camera?: Camera,
		dithering?: boolean
	);

	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	set depthBuffer(arg: Texture);
	/**
	 * The depth buffer.
	 *
	 * @type {Texture}
	 */
	get depthBuffer(): Texture;
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * The depth packing strategy.
	 *
	 * @type {DepthPackingStrategies}
	 */
	get depthPacking(): DepthPackingStrategies;
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Sets the shader parts.
	 *
	 * @param {Map<String, String>} shaderParts - A collection of shader snippets. See {@link Section}.
	 * @return {EffectMaterial} This material.
	 */
	setShaderParts(shaderParts: Map<string, string>): EffectMaterial;
	/**
	 * Sets the shader macros.
	 *
	 * @param {Map<String, String>} defines - A collection of preprocessor macro definitions.
	 * @return {EffectMaterial} This material.
	 */
	setDefines(defines: Map<string, string>): EffectMaterial;
	/**
	 * Sets the shader uniforms.
	 *
	 * @param {Map<String, Uniform>} uniforms - A collection of uniforms.
	 * @return {EffectMaterial} This material.
	 */
	setUniforms(uniforms: Map<string, Uniform>): EffectMaterial;
	/**
	 * Sets the required shader extensions.
	 *
	 * @param {Set<WebGLExtension>} extensions - A collection of extensions.
	 * @return {EffectMaterial} This material.
	 */
	setExtensions(extensions: Set<WebGLExtension>): EffectMaterial;
	set encodeOutput(arg: boolean);
	/**
	 * Indicates whether output encoding is enabled.
	 *
	 * @type {Boolean}
	 */
	get encodeOutput(): boolean;
	/**
	 * Indicates whether output encoding is enabled.
	 *
	 * @deprecated Use encodeOutput instead.
	 * @return {Boolean} Whether output encoding is enabled.
	 */
	isOutputEncodingEnabled(): boolean;
	/**
	 * Enables or disables output encoding.
	 *
	 * @deprecated Use encodeOutput instead.
	 * @param {Boolean} value - Whether output encoding should be enabled.
	 */
	setOutputEncodingEnabled(value: boolean): void;
	set time(arg: number);
	/**
	 * The time in seconds.
	 *
	 * @type {Number}
	 */
	get time(): number;
	/**
	 * Sets the delta time.
	 *
	 * @deprecated Use time instead.
	 * @param {Number} value - The delta time in seconds.
	 */
	setDeltaTime(value: number): void;
	/**
	 * Adopts the settings of the given camera.
	 *
	 * @param {Camera} camera - A camera.
	 */
	adoptCameraSettings(camera: Camera): void;
	/**
	 * Sets the resolution.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * An enumeration of shader code placeholders used by the {@link EffectPass}.
 * @property FRAGMENT_HEAD - A placeholder for function and variable declarations inside the fragment shader.
 * @property FRAGMENT_MAIN_UV - A placeholder for UV transformations inside the fragment shader.
 * @property FRAGMENT_MAIN_IMAGE - A placeholder for color calculations inside the fragment shader.
 * @property VERTEX_HEAD - A placeholder for function and variable declarations inside the vertex shader.
 * @property VERTEX_MAIN_SUPPORT - A placeholder for supporting calculations inside the vertex shader.
 * @deprecated Use EffectMaterial.Section instead.
 */
export const Section: {
	FRAGMENT_HEAD: string;
	FRAGMENT_MAIN_UV: string;
	FRAGMENT_MAIN_IMAGE: string;
	VERTEX_HEAD: string;
	VERTEX_MAIN_SUPPORT: string;
};

/**
 * A crepuscular rays shader material.
 *
 * References:
 *
 * Thibaut Despoulain, 2012:
 *	[(WebGL) Volumetric Light Approximation in Three.js](
 *	http://bkcore.com/blog/3d/webgl-three-js-volumetric-light-godrays.html)
 *
 * Nvidia, GPU Gems 3, 2008:
 *	[Chapter 13. Volumetric Light Scattering as a Post-Process](
 *	https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html)
 *
 * @todo Remove dithering code from fragment shader.
 */
export class GodRaysMaterial extends ShaderMaterial {

	/**
	 * Constructs a new god rays material.
	 *
	 * TODO Remove lightPosition param.
	 * @param {Vector2} lightPosition - Deprecated.
	 */
	constructor(lightPosition: Vector2);
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	/**
	 * The screen space position of the light source.
	 *
	 * @type {Vector2}
	 */
	get lightPosition(): Vector2;
	/**
	 * Returns the screen space position of the light source.
	 *
	 * @deprecated Use lightPosition instead.
	 * @return {Vector2} The position.
	 */
	getLightPosition(): Vector2;
	/**
	 * Sets the screen space position of the light source.
	 *
	 * @deprecated Use lightPosition instead.
	 * @param {Vector2} value - The position.
	 */
	setLightPosition(value: Vector2): void;
	set density(arg: number);
	/**
	 * The density.
	 *
	 * @type {Number}
	 */
	get density(): number;
	/**
	 * Returns the density.
	 *
	 * @deprecated Use density instead.
	 * @return {Number} The density.
	 */
	getDensity(): number;
	/**
	 * Sets the density.
	 *
	 * @deprecated Use density instead.
	 * @param {Number} value - The density.
	 */
	setDensity(value: number): void;
	set decay(arg: number);
	/**
	 * The decay.
	 *
	 * @type {Number}
	 */
	get decay(): number;
	/**
	 * Returns the decay.
	 *
	 * @deprecated Use decay instead.
	 * @return {Number} The decay.
	 */
	getDecay(): number;
	/**
	 * Sets the decay.
	 *
	 * @deprecated Use decay instead.
	 * @param {Number} value - The decay.
	 */
	setDecay(value: number): void;
	set weight(arg: number);
	/**
	 * The weight.
	 *
	 * @type {Number}
	 */
	get weight(): number;
	/**
	 * Returns the weight.
	 *
	 * @deprecated Use weight instead.
	 * @return {Number} The weight.
	 */
	getWeight(): number;
	/**
	 * Sets the weight.
	 *
	 * @deprecated Use weight instead.
	 * @param {Number} value - The weight.
	 */
	setWeight(value: number): void;
	set exposure(arg: number);
	/**
	 * The exposure.
	 *
	 * @type {Number}
	 */
	get exposure(): number;
	/**
	 * Returns the exposure.
	 *
	 * @deprecated Use exposure instead.
	 * @return {Number} The exposure.
	 */
	getExposure(): number;
	/**
	 * Sets the exposure.
	 *
	 * @deprecated Use exposure instead.
	 * @param {Number} value - The exposure.
	 */
	setExposure(value: number): void;
	set maxIntensity(arg: number);
	/**
	 * The maximum light intensity.
	 *
	 * @type {Number}
	 */
	get maxIntensity(): number;
	/**
	 * Returns the maximum light intensity.
	 *
	 * @deprecated Use maxIntensity instead.
	 * @return {Number} The maximum light intensity.
	 */
	getMaxIntensity(): number;
	/**
	 * Sets the maximum light intensity.
	 *
	 * @deprecated Use maxIntensity instead.
	 * @param {Number} value - The maximum light intensity.
	 */
	setMaxIntensity(value: number): void;
	set samples(arg: number);
	/**
	 * The amount of samples per pixel.
	 *
	 * @type {Number}
	 */
	get samples(): number;
	/**
	 * Returns the amount of samples per pixel.
	 *
	 * @deprecated Use samples instead.
	 * @return {Number} The sample count.
	 */
	getSamples(): number;
	/**
	 * Sets the amount of samples per pixel.
	 *
	 * @deprecated Use samples instead.
	 * @param {Number} value - The sample count.
	 */
	setSamples(value: number): void;

}

/**
 * A box blur material.
 *
 * @implements {Resizable}
 */
export class BoxBlurMaterial extends ShaderMaterial { }

/**
 * A box blur pass.
 */
export class BoxBlurPass extends Pass {

	/**
	 * Constructs a new box blur pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.kernelSize=5] - The kernel size.
	 * @param {Number} [options.iterations=1] - The amount of times the blur should be applied.
	 * @param {Number} [options.bilateral=false] - Enables or disables bilateral blurring.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 */

	constructor(
		{
			kernelSize,
			iterations,
			bilateral,
			resolutionScale,
			resolutionX,
			resolutionY
		}?: {
			kernelSize?: number;
			iterations?: number;
			bilateral?: boolean;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
		}
	);

}

/**
 * An optimized Gaussian convolution shader material.
 *
 * References:
 *
 * Filip Strugar, Intel, 2014: [An investigation of fast real-time GPU-based image blur algorithms](
 * https://www.intel.com/content/www/us/en/developer/articles/technical/an-investigation-of-fast-real-time-gpu-based-image-blur-algorithms.html)
 *
 * @implements {Resizable}
 */
export class GaussianBlurMaterial extends ShaderMaterial {

	/**
	 * Constructs a new convolution material.
	 *
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.kernelSize=35] - The kernel size.
	 */
	constructor(
		{
			kernelSize
		}?: {
			kernelSize?: number;
		}
	);

}

/**
 * A Gaussian blur pass.
 */
export class GaussianBlurPass extends Pass {

	/**
	 * Constructs a new Gaussian blur pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.kernelSize=35] - The kernel size. Should be an odd number in the range [3, 1020].
	 * @param {Number} [options.iterations=1] - The amount of times the blur should be applied.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 */

	constructor(
		{
			kernelSize,
			iterations,
			resolutionScale,
			resolutionX,
			resolutionY
		}?: {
			kernelSize?: number;
			iterations?: number;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
		}
	);

}

/**
 * An optimised convolution shader material.
 *
 * Based on the GDC2003 Presentation by Masaki Kawase, Bunkasha Games:
 *	Frame Buffer Postprocessing Effects in DOUBLE-S.T.E.A.L (Wreckless)
 * and an article by Filip Strugar, Intel:
 *	An investigation of fast real-time GPU-based image blur algorithms
 *
 * Further modified according to Apple's [Best Practices for Shaders](https://goo.gl/lmRoM5).
 *
 * @todo Remove dithering code from fragment shader.
 * @implements {Resizable}
 */
export class KawaseBlurMaterial extends ShaderMaterial implements Resizable {

	/**
	 * Constructs a new convolution material.
	 *
	 * TODO Remove texelSize param.
	 * @param {Vector2} [texelSize] - Deprecated.
	 */
	constructor(texelSize?: Vector2);
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	set scale(arg: number);
	/**
	 * The blur scale.
	 *
	 * @type {Number}
	 */
	get scale(): number;
	/**
	 * Returns the blur scale.
	 *
	 * @deprecated Use scale instead.
	 * @return {Number} The scale.
	 */
	getScale(): number;
	/**
	 * Sets the blur scale.
	 *
	 * @deprecated Use scale instead.
	 * @param {Number} value - The scale.
	 */
	setScale(value: number): void;
	/**
	 * Returns the kernel.
	 *
	 * @return {Float32Array} The kernel.
	 * @deprecated Implementation detail, removed with no replacement.
	 */
	getKernel(): Float32Array;
	set kernel(arg: number);
	/**
	 * The current kernel.
	 *
	 * @type {Number}
	 */
	get kernel(): number;
	/**
	 * Sets the current kernel.
	 *
	 * @deprecated Use kernel instead.
	 * @param {Number} value - The kernel.
	 */
	setKernel(value: number): void;
	/**
	 * Sets the texel size.
	 *
	 * @deprecated Use setSize() instead.
	 * @param {Number} x - The texel width.
	 * @param {Number} y - The texel height.
	 */
	setTexelSize(x: number, y: number): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}



/**
 * A luminance shader material.
 *
 * This shader produces a greyscale luminance map that describes the absolute amount of light emitted by a scene. It can
 * also be configured to output colors that are scaled with their respective luminance value. Additionally, a range may
 * be provided to mask out undesired texels.
 *
 * The alpha channel always contains the luminance value.
 *
 * On luminance coefficients:
 *	http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
 *
 * Coefficients for different color spaces:
 *	https://hsto.org/getpro/habr/post_images/2ab/69d/084/2ab69d084f9a597e032624bcd74d57a7.png
 *
 * Luminance range reference:
 *	https://cycling74.com/2007/05/23/your-first-shader/#.Vty9FfkrL4Z
 */
export class LuminanceMaterial extends ShaderMaterial {

	/**
	 * Constructs a new luminance material.
	 *
	 * @param {Boolean} [colorOutput=false] - Defines whether the shader should output colors scaled with their luminance value.
	 * @param {Vector2} [luminanceRange] - If provided, the shader will mask out texels that aren't in the specified luminance range.
	 */
	constructor(colorOutput?: boolean, luminanceRange?: Vector2);
	set colorOutput(arg: boolean);
	/**
	 * Indicates whether color output is enabled.
	 *
	 * @type {Boolean}
	 */
	get colorOutput(): boolean;
	set luminanceRange(arg: boolean);
	/**
	 * The luminance range. Set to null to disable.
	 *
	 * @type {Boolean}
	 */
	get luminanceRange(): boolean;
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	set threshold(arg: number);
	/**
	 * The luminance threshold.
	 *
	 * @type {Number}
	 */
	get threshold(): number;
	/**
	 * Returns the luminance threshold.
	 *
	 * @deprecated Use threshold instead.
	 * @return {Number} The threshold.
	 */
	getThreshold(): number;
	/**
	 * Sets the luminance threshold.
	 *
	 * @deprecated Use threshold instead.
	 * @param {Number} value - The threshold.
	 */
	setThreshold(value: number): void;
	set smoothing(arg: number);
	/**
	 * The luminance threshold smoothing.
	 *
	 * @type {Number}
	 */
	get smoothing(): number;
	/**
	 * Returns the luminance threshold smoothing factor.
	 *
	 * @deprecated Use smoothing instead.
	 * @return {Number} The smoothing factor.
	 */
	getSmoothingFactor(): number;
	/**
	 * Sets the luminance threshold smoothing factor.
	 *
	 * @deprecated Use smoothing instead.
	 * @param {Number} value - The smoothing factor.
	 */
	setSmoothingFactor(value: number): void;
	set useThreshold(arg: boolean);
	/**
	 * Indicates whether the luminance threshold is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated Adjust the threshold or smoothing factor instead.
	 */
	get useThreshold(): boolean;
	/**
	 * Indicates whether color output is enabled.
	 *
	 * @deprecated Use colorOutput instead.
	 * @return {Boolean} Whether color output is enabled.
	 */
	isColorOutputEnabled(): boolean;
	/**
	 * Enables or disables color output.
	 *
	 * @deprecated Use colorOutput instead.
	 * @param {Boolean} value - Whether color output should be enabled.
	 */
	setColorOutputEnabled(value: boolean): void;
	set useRange(arg: boolean);
	/**
	 * Indicates whether luminance masking is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated
	 */
	get useRange(): boolean;
	/**
	 * Returns the current luminance range.
	 *
	 * @deprecated Use luminanceRange instead.
	 * @return {Vector2} The luminance range.
	 */
	getLuminanceRange(): Vector2;
	/**
	 * Sets a luminance range. Set to null to disable.
	 *
	 * @deprecated Use luminanceRange instead.
	 * @param {Vector2} value - The luminance range.
	 */
	setLuminanceRange(value: Vector2): void;

}

/**
 * A mask function enumeration.
 *
 * @type {Object}
 * @property {Number} DISCARD - Discards elements when the respective mask value is zero.
 * @property {Number} MULTIPLY - Multiplies the input buffer with the mask texture.
 * @property {Number} MULTIPLY_RGB_SET_ALPHA - Multiplies the input RGB values with the mask and sets alpha to the mask value.
 */
export enum MaskFunction {
	DISCARD,
	MULTIPLY,
	MULTIPLY_RGB_SET_ALPHA,
}

/**
 * A mask shader material.
 *
 * This material applies a mask texture to a buffer.
 */
export class MaskMaterial extends ShaderMaterial {

	/**
	 * Constructs a new mask material.
	 *
	 * @param {Texture} [maskTexture] - The mask texture.
	 */
	constructor(maskTexture?: Texture);
	/**
	 * The input buffer.
	 *
	 * @type {Texture}
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	/**
	 * The mask texture.
	 *
	 * @type {Texture}
	 */
	set maskTexture(arg: Texture);
	/**
	 * Sets the mask texture.
	 *
	 * @deprecated Use maskTexture instead.
	 * @param {Texture} value - The texture.
	 */
	setMaskTexture(value: Texture): void;
	/**
	 * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
	 *
	 * @type {ColorChannel}
	 */
	set colorChannel(arg: ColorChannel);
	/**
	 * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
	 *
	 * @deprecated Use colorChannel instead.
	 * @param {ColorChannel} value - The channel.
	 */
	setColorChannel(value: ColorChannel): void;
	/**
	 * The masking technique. Default is `MaskFunction.DISCARD`.
	 *
	 * @type {MaskFunction}
	 */
	set maskFunction(arg: MaskFunction);
	/**
	 * Sets the masking technique. Default is `MaskFunction.DISCARD`.
	 *
	 * @deprecated Use maskFunction instead.
	 * @param {MaskFunction} value - The function.
	 */
	setMaskFunction(value: MaskFunction): void;
	set inverted(arg: boolean);
	/**
	 * Indicates whether the masking is inverted.
	 *
	 * @type {Boolean}
	 */
	get inverted(): boolean;
	/**
	 * Indicates whether the masking is inverted.
	 *
	 * @deprecated Use inverted instead.
	 * @return {Boolean} Whether the masking is inverted.
	 */
	isInverted(): boolean;
	/**
	 * Determines whether the masking should be inverted.
	 *
	 * @deprecated Use inverted instead.
	 * @param {Boolean} value - Whether the masking should be inverted.
	 */
	setInverted(value: boolean): void;
	set strength(arg: number);
	/**
	 * The current mask strength.
	 *
	 * Individual mask values will be clamped to [0.0, 1.0]. Has no effect when the mask function is set to `DISCARD`.
	 *
	 * @type {Number}
	 */
	get strength(): number;
	/**
	 * Returns the current mask strength.
	 *
	 * @deprecated Use strength instead.
	 * @return {Number} The mask strength.
	 */
	getStrength(): number;
	/**
	 * Sets the mask strength.
	 *
	 * Has no effect when the mask function is set to `DISCARD`.
	 *
	 * @deprecated Use strength instead.
	 * @param {Number} value - The mask strength.
	 */
	setStrength(value: number): void;

}

/**
 * An outline shader material.
 *
 * @implements {Resizable}
 */
export class OutlineMaterial extends ShaderMaterial implements Resizable {

	/**
	 * Constructs a new outline material.
	 *
	 * TODO Remove texelSize param.
	 * @param {Vector2} [texelSize] - The screen texel size.
	 */
	constructor(texelSize?: Vector2);
	/**
	 * The input buffer.
	 *
	 * @param {Texture} arg - The input buffer.
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	/**
	 * Sets the texel size.
	 *
	 * @deprecated Use setSize() instead.
	 * @param {Number} x - The texel width.
	 * @param {Number} y - The texel height.
	 */
	setTexelSize(x: number, y: number): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * An outline shader material.
 */
export type OutlineEdgesMaterial = OutlineMaterial;

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material computes weights for detected edges.
 *
 * @implements {Resizable}
 */
export class SMAAWeightsMaterial extends ShaderMaterial implements Resizable {

	/**
	 * Constructs a new SMAA weights material.
	 *
	 * @param {Vector2} [texelSize] - The absolute screen texel size.
	 * @param {Vector2} [resolution] - The resolution.
	 */
	constructor(texelSize?: Vector2, resolution?: Vector2);
	/**
	 * The input buffer.
	 *
	 * @param {Texture} arg - The input buffer.
	 */
	set inputBuffer(arg: Texture);
	/**
	 * Sets the input buffer.
	 *
	 * @deprecated Use inputBuffer instead.
	 * @param {Texture} value - The input buffer.
	 */
	setInputBuffer(value: Texture): void;
	set searchTexture(arg: Texture);
	/**
	 * The search lookup texture.
	 *
	 * @type {Texture}
	 */
	get searchTexture(): Texture;
	set areaTexture(arg: Texture);
	/**
	 * The area lookup texture.
	 *
	 * @type {Texture}
	 */
	get areaTexture(): Texture;
	/**
	 * Sets the search and area lookup textures.
	 *
	 * @deprecated Use searchTexture and areaTexture instead.
	 * @param {Texture} search - The search lookup texture.
	 * @param {Texture} area - The area lookup texture.
	 */
	setLookupTextures(search: Texture, area: Texture): void;
	set orthogonalSearchSteps(arg: number);
	/**
	 * The maximum amount of steps performed in the horizontal/vertical pattern searches, at each side of the pixel.
	 * Range: [0, 112].
	 *
	 * In number of pixels, it's actually the double. So the maximum line length perfectly handled by, for example 16, is
	 * 64 (perfectly means that longer lines won't look as good, but are still antialiased).
	 *
	 * @type {Number}
	 */
	get orthogonalSearchSteps(): number;
	/**
	 * Sets the maximum amount of steps performed in the horizontal/vertical pattern searches, at each side of the pixel.
	 *
	 * @deprecated Use orthogonalSearchSteps instead.
	 * @param {Number} value - The search steps. Range: [0, 112].
	 */
	setOrthogonalSearchSteps(value: number): void;
	set diagonalSearchSteps(arg: number);
	/**
	 * The maximum steps performed in the diagonal pattern searches, at each side of the pixel. This search
	 * jumps one pixel at a time. Range: [0, 20].
	 *
	 * On high-end machines this search is cheap (between 0.8x and 0.9x slower for 16 steps), but it can have a
	 * significant impact on older machines.
	 *
	 * @type {Number}
	 */
	get diagonalSearchSteps(): number;
	/**
	 * Specifies the maximum steps performed in the diagonal pattern searches, at each side of the pixel.
	 *
	 * @deprecated Use diagonalSearchSteps instead.
	 * @param {Number} value - The search steps. Range: [0, 20].
	 */
	setDiagonalSearchSteps(value: number): void;
	set diagonalDetection(arg: boolean);
	/**
	 * Indicates whether diagonal pattern detection is enabled.
	 *
	 * @type {Boolean}
	 */
	get diagonalDetection(): boolean;
	/**
	 * Indicates whether diagonal pattern detection is enabled.
	 *
	 * @deprecated Use diagonalDetection instead.
	 * @return {Boolean} Whether diagonal pattern detection is enabled.
	 */
	isDiagonalDetectionEnabled(): boolean;
	/**
	 * Enables or disables diagonal pattern detection.
	 *
	 * @deprecated Use diagonalDetection instead.
	 * @param {Boolean} value - Whether diagonal pattern detection should be enabled.
	 */
	setDiagonalDetectionEnabled(value: boolean): void;
	set cornerRounding(arg: number);
	/**
	 * Specifies how much sharp corners will be rounded. Range: [0, 100].
	 *
	 * @type {Number}
	 */
	get cornerRounding(): number;
	/**
	 * Specifies how much sharp corners will be rounded.
	 *
	 * @deprecated Use cornerRounding instead.
	 * @param {Number} value - The corner rounding amount. Range: [0, 100].
	 */
	setCornerRounding(value: number): void;
	set cornerDetection(arg: number);
	/**
	 * Indicates whether corner detection is enabled.
	 *
	 * @type {Number}
	 */
	get cornerDetection(): number;
	/**
	 * Indicates whether corner rounding is enabled.
	 *
	 * @deprecated Use cornerDetection instead.
	 * @return {Boolean} Whether corner rounding is enabled.
	 */
	isCornerRoundingEnabled(): boolean;
	/**
	 * Enables or disables corner rounding.
	 *
	 * @deprecated Use cornerDetection instead.
	 * @param {Boolean} value - Whether corner rounding should be enabled.
	 */
	setCornerRoundingEnabled(value: boolean): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * A Screen Space Ambient Occlusion (SSAO) shader material.
 *
 * @implements {Resizable}
 */
export class SSAOMaterial extends ShaderMaterial implements Resizable {

	/**
	 * Constructs a new SSAO material.
	 *
	 * @param {Camera} camera - A camera.
	 */
	constructor(camera: Camera);
	/**
	 * The combined normal-depth buffer.
	 *
	 * @param {Texture} arg - The buffer.
	 */
	set normalDepthBuffer(arg: Texture);
	/**
	 * Sets the combined normal-depth buffer.
	 *
	 * @deprecated Use normalDepthBuffer instead.
	 * @param {Texture} value - The buffer.
	 */
	setNormalDepthBuffer(value: Texture): void;
	/**
	 * The normal buffer.
	 *
	 * @param {Texture} arg - The buffer.
	 */
	set normalBuffer(arg: Texture);
	/**
	 * Sets the normal buffer.
	 *
	 * @deprecated Use normalBuffer instead.
	 * @param {Texture} value - The buffer.
	 */
	setNormalBuffer(value: Texture): void;
	/**
	 * The depth buffer.
	 *
	 * @param {Texture} arg - The buffer.
	 */
	set depthBuffer(arg: Texture);
	/**
	 * The depth packing strategy.
	 *
	 * @param {DepthPackingStrategies} arg - The depth packing strategy.
	 */
	set depthPacking(arg: DepthPackingStrategies);
	/**
	 * Sets the depth buffer.
	 *
	 * @deprecated Use depthBuffer and depthPacking instead.
	 * @param {Texture} buffer - The depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
	 */
	setDepthBuffer(
		buffer: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * The noise texture.
	 *
	 * @param {Texture} arg - The texture.
	 */
	set noiseTexture(arg: Texture);
	/**
	 * Sets the noise texture.
	 *
	 * @deprecated Use noiseTexture instead.
	 * @param {Texture} value - The texture.
	 */
	setNoiseTexture(value: Texture): void;
	set samples(arg: number);
	/**
	 * The sample count.
	 *
	 * @type {Number}
	 */
	get samples(): number;
	/**
	 * Returns the amount of occlusion samples per pixel.
	 *
	 * @deprecated Use samples instead.
	 * @return {Number} The sample count.
	 */
	getSamples(): number;
	/**
	 * Sets the amount of occlusion samples per pixel.
	 *
	 * @deprecated Use samples instead.
	 * @param {Number} value - The sample count.
	 */
	setSamples(value: number): void;
	set rings(arg: number);
	/**
	 * The sampling spiral ring count.
	 *
	 * @type {Number}
	 */
	get rings(): number;
	/**
	 * Returns the amount of spiral turns in the occlusion sampling pattern.
	 *
	 * @deprecated Use rings instead.
	 * @return {Number} The radius.
	 */
	getRings(): number;
	/**
	 * Sets the amount of spiral turns in the occlusion sampling pattern.
	 *
	 * @deprecated Use rings instead.
	 * @param {Number} value - The radius.
	 */
	setRings(value: number): void;
	/**
	 * The intensity.
	 *
	 * @type {Number}
	 * @deprecated Use SSAOEffect.intensity instead.
	 */
	get intensity(): number;
	set intensity(arg: number);
	/**
	 * Returns the intensity.
	 *
	 * @deprecated Use intensity instead.
	 * @return {Number} The intensity.
	 */
	getIntensity(): number;
	/**
	 * Sets the intensity.
	 *
	 * @deprecated Use intensity instead.
	 * @param {Number} value - The intensity.
	 */
	setIntensity(value: number): void;
	set fade(arg: number);
	/**
	 * The depth fade factor.
	 *
	 * @type {Number}
	 */
	get fade(): number;
	/**
	 * Returns the depth fade factor.
	 *
	 * @deprecated Use fade instead.
	 * @return {Number} The fade factor.
	 */
	getFade(): number;
	/**
	 * Sets the depth fade factor.
	 *
	 * @deprecated Use fade instead.
	 * @param {Number} value - The fade factor.
	 */
	setFade(value: number): void;
	set bias(arg: number);
	/**
	 * The depth bias. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get bias(): number;
	/**
	 * Returns the depth bias.
	 *
	 * @deprecated Use bias instead.
	 * @return {Number} The bias.
	 */
	getBias(): number;
	/**
	 * Sets the depth bias.
	 *
	 * @deprecated Use bias instead.
	 * @param {Number} value - The bias.
	 */
	setBias(value: number): void;
	set minRadiusScale(arg: number);
	/**
	 * The minimum radius scale for distance scaling. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get minRadiusScale(): number;
	/**
	 * Returns the minimum radius scale for distance scaling.
	 *
	 * @deprecated Use minRadiusScale instead.
	 * @return {Number} The minimum radius scale.
	 */
	getMinRadiusScale(): number;
	/**
	 * Sets the minimum radius scale for distance scaling.
	 *
	 * @deprecated Use minRadiusScale instead.
	 * @param {Number} value - The minimum radius scale.
	 */
	setMinRadiusScale(value: number): void;
	set radius(arg: number);
	/**
	 * The occlusion sampling radius. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get radius(): number;
	/**
	 * Returns the occlusion sampling radius.
	 *
	 * @deprecated Use radius instead.
	 * @return {Number} The radius.
	 */
	getRadius(): number;
	/**
	 * Sets the occlusion sampling radius.
	 *
	 * @deprecated Use radius instead.
	 * @param {Number} value - The radius. Range [1e-6, 1.0].
	 */
	setRadius(value: number): void;
	set distanceScaling(arg: boolean);
	/**
	 * Indicates whether distance-based radius scaling is enabled.
	 *
	 * @type {Boolean}
	 */
	get distanceScaling(): boolean;
	/**
	 * Indicates whether distance-based radius scaling is enabled.
	 *
	 * @deprecated Use distanceScaling instead.
	 * @return {Boolean} Whether distance scaling is enabled.
	 */
	isDistanceScalingEnabled(): boolean;
	/**
	 * Enables or disables distance-based radius scaling.
	 *
	 * @deprecated Use distanceScaling instead.
	 * @param {Boolean} value - Whether distance scaling should be enabled.
	 */
	setDistanceScalingEnabled(value: boolean): void;
	set distanceThreshold(arg: number);
	/**
	 * The occlusion distance threshold. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get distanceThreshold(): number;

	/**
	 * The occlusion distance falloff.
	 * The occlusion distance threshold in world units.
	 *
	 * @type {Number}
	 */

	get worldDistanceThreshold(): number;
	set worldDistanceThreshold(value: number);

	set distanceFalloff(arg: number);
	/**
	 * The occlusion distance falloff. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get distanceFalloff(): number;

	/**
	 * The occlusion distance falloff in world units.
	 *
	 * @type {Number}
	 */

	get worldDistanceFalloff(): number;
	set worldDistanceFalloff(value: number);

	/**
	 * Sets the occlusion distance cutoff.
	 *
	 * @deprecated Use distanceThreshold and distanceFalloff instead.
	 * @param {Number} threshold - The distance threshold. Range [0.0, 1.0].
	 * @param {Number} falloff - The falloff. Range [0.0, 1.0].
	 */
	setDistanceCutoff(threshold: number, falloff: number): void;
	set proximityThreshold(arg: number);
	/**
	 * The occlusion proximity threshold. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get proximityThreshold(): number;
	/**
	 * The occlusion proximity threshold in world units.
	 *
	 * @type {Number}
	 */
	get worldProximityThreshold(): number;
	set worldProximityThreshold(value: number);

	set proximityFalloff(arg: number);
	/**
	 * The occlusion proximity falloff. Range: [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get proximityFalloff(): number;

	/**
	 * The occlusion proximity falloff in world units.
	 *
	 * @type {Number}
	 */

	get worldProximityFalloff(): number;
	set worldProximityFalloff(value: number);

	/**
	 * Sets the occlusion proximity cutoff.
	 *
	 * @deprecated Use proximityThreshold and proximityFalloff instead.
	 * @param {Number} threshold - The range threshold. Range [0.0, 1.0].
	 * @param {Number} falloff - The falloff. Range [0.0, 1.0].
	 */
	setProximityCutoff(threshold: number, falloff: number): void;
	/**
	 * Sets the texel size.
	 *
	 * @deprecated Use setSize() instead.
	 * @param {Number} x - The texel width.
	 * @param {Number} y - The texel height.
	 */
	setTexelSize(x: number, y: number): void;
	/**
	 * Adopts the settings of the given camera.
	 *
	 * @param {Camera} camera - A camera.
	 */
	adoptCameraSettings(camera: Camera): void;
	/**
	 * Sets the size of this object.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * A resolution.
 */
export class Resolution extends EventDispatcher<Event> {

	/**
	 * An auto sizing constant.
	 *
	 * Can be used to automatically calculate the width or height based on the original aspect ratio.
	 *
	 * @type {Number}
	 */
	static get AUTO_SIZE(): number;
	/**
	 * Constructs a new resolution.
	 *
	 * TODO Remove resizable param.
	 * @param {Resizable} resizable - A resizable object.
	 * @param {Number} [width=Resolution.AUTO_SIZE] - The preferred width.
	 * @param {Number} [height=Resolution.AUTO_SIZE] - The preferred height.
	 * @param {Number} [scale=1.0] - A resolution scale.
	 */
	constructor(
		resizable: Resizable,
		width?: number,
		height?: number,
		scale?: number
	);

	/**
	 * A resizable object.
	 *
	 * @type {Resizable}
	 * @deprecated Use an event listener for "change" events instead.
	 */
	resizable: Resizable;
	/**
	 * The preferred resolution.
	 *
	 * @type {Vector2}
	 * @deprecated Added for backward-compatibility.
	 */
	target: Vector2;
	set width(arg: number);
	/**
	 * The effective width.
	 *
	 * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
	 *
	 * @type {Number}
	 */
	get width(): number;
	set preferredWidth(arg: number);
	/**
	 * The preferred width.
	 *
	 * @type {Number}
	 */
	get preferredWidth(): number;
	set height(arg: number);
	/**
	 * The effective height.
	 *
	 * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
	 *
	 * @type {Number}
	 */
	get height(): number;
	set preferredHeight(arg: number);
	/**
	 * The preferred height.
	 *
	 * @type {Number}
	 */
	get preferredHeight(): number;
	/**
	 * Returns the effective width.
	 *
	 * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
	 *
	 * @deprecated Use width instead.
	 * @return {Number} The effective width.
	 */
	getWidth(): number;
	/**
	 * Returns the effective height.
	 *
	 * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
	 *
	 * @deprecated Use height instead.
	 * @return {Number} The effective height.
	 */
	getHeight(): number;
	set scale(arg: number);
	/**
	 * The resolution scale.
	 *
	 * @type {Number}
	 */
	get scale(): number;
	/**
	 * Returns the current resolution scale.
	 *
	 * @deprecated Use scale instead.
	 * @return {Number} The scale.
	 */
	getScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * Also sets the preferred resolution to {@link Resizer.AUTO_SIZE}.
	 *
	 * @deprecated Use scale instead.
	 * @param {Number} value - The scale.
	 */
	setScale(value: number): void;
	set baseWidth(arg: number);
	/**
	 * The base width.
	 *
	 * @type {Number}
	 */
	get baseWidth(): number;
	/**
	 * Returns the base width.
	 *
	 * @deprecated Use baseWidth instead.
	 * @return {Number} The base width.
	 */
	getBaseWidth(): number;
	/**
	 * Sets the base width.
	 *
	 * @deprecated Use baseWidth instead.
	 * @param {Number} value - The width.
	 */
	setBaseWidth(value: number): void;
	set baseHeight(arg: number);
	/**
	 * The base height.
	 *
	 * @type {Number}
	 */
	get baseHeight(): number;
	/**
	 * Returns the base height.
	 *
	 * @deprecated Use baseHeight instead.
	 * @return {Number} The base height.
	 */
	getBaseHeight(): number;
	/**
	 * Sets the base height.
	 *
	 * @deprecated Use baseHeight instead.
	 * @param {Number} value - The height.
	 */
	setBaseHeight(value: number): void;
	/**
	 * Sets the base size.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setBaseSize(width: number, height: number): void;
	/**
	 * Returns the preferred width.
	 *
	 * @deprecated Use preferredWidth instead.
	 * @return {Number} The preferred width.
	 */
	getPreferredWidth(): number;
	/**
	 * Sets the preferred width.
	 *
	 * Use {@link Resizer.AUTO_SIZE} to automatically calculate the width based on the height and aspect ratio.
	 *
	 * @deprecated Use preferredWidth instead.
	 * @param {Number} value - The width.
	 */
	setPreferredWidth(value: number): void;
	/**
	 * Returns the preferred height.
	 *
	 * @deprecated Use preferredHeight instead.
	 * @return {Number} The preferred height.
	 */
	getPreferredHeight(): number;
	/**
	 * Sets the preferred height.
	 *
	 * Use {@link Resizer.AUTO_SIZE} to automatically calculate the height based on the width and aspect ratio.
	 *
	 * @deprecated Use preferredHeight instead.
	 * @param {Number} value - The height.
	 */
	setPreferredHeight(value: number): void;
	/**
	 * Sets the preferred size.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setPreferredSize(width: number, height: number): void;
	/**
	 * Copies the given resolution.
	 *
	 * @param {Resolution} resolution - The resolution.
	 */
	copy(resolution: Resolution): void;

}
export type Resizer = Resolution;

/**
 * An abstract pass.
 *
 * Fullscreen passes use a shared fullscreen triangle:
 * https://michaldrobot.com/2014/04/01/gcn-execution-patterns-in-full-screen-passes/
 *
 * @implements {Initializable}
 * @implements {Resizable}
 * @implements {Disposable}
 */
export class Pass implements Initializable, Resizable, Disposable {

	/**
	 * Constructs a new pass.
	 *
	 * @param {String} [name] - The name of this pass. Does not have to be unique.
	 * @param {Scene} [scene] - The scene to render. The default scene contains a single mesh that fills the screen.
	 * @param {Camera} [camera] - A camera. Fullscreen effect passes don't require a camera.
	 */
	constructor(name?: string, scene?: Scene, camera?: Camera);
	/**
	 * The name of this pass.
	 *
	 * @type {String}
	 */
	name: string;
	/**
	 * The renderer.
	 *
	 * @deprecated
	 * @type {WebGLRenderer}
	 * @protected
	 */
	protected renderer: WebGLRenderer;
	/**
	 * The scene to render.
	 *
	 * @type {Scene}
	 * @protected
	 */
	protected scene: Scene;
	/**
	 * The camera.
	 *
	 * @type {Camera}
	 * @protected
	 */
	protected camera: Camera;
	/**
	 * Only relevant for subclassing.
	 *
	 * Indicates whether the {@link EffectComposer} should swap the frame buffers after this pass has finished
	 * rendering. Set this to `false` if this pass doesn't render to the output buffer or the screen. Otherwise, the
	 * contents of the input buffer will be lost.
	 *
	 * @type {Boolean}
	 */
	needsSwap: boolean;
	/**
	 * Only relevant for subclassing.
	 *
	 * Indicates whether the {@link EffectComposer} should prepare a depth texture for this pass.
	 * Set this to `true` if this pass relies on depth information from a preceding {@link RenderPass}.
	 *
	 * @type {Boolean}
	 */
	needsDepthTexture: boolean;
	/**
	 * Indicates whether this pass is enabled.
	 *
	 * @type {Boolean}
	 */
	enabled: boolean;
	/**
	 * Sets the render to screen flag.
	 *
	 * If this flag is changed, the fullscreen material will be updated as well.
	 *
	 * @type {Boolean}
	 */
	set renderToScreen(arg: boolean);
	/**
	 * Indicates whether this pass should render to screen.
	 *
	 * @type {Boolean}
	 */
	get renderToScreen(): boolean;
	/**
	 * Sets the main scene.
	 *
	 * @type {Scene}
	 */
	set mainScene(arg: Scene);
	/**
	 * Sets the main camera.
	 *
	 * @type {Camera}
	 */
	set mainCamera(arg: Camera);
	/**
	 * Sets the renderer
	 *
	 * @deprecated
	 * @param {WebGLRenderer} renderer - The renderer.
	 */
	setRenderer(renderer: WebGLRenderer): void;
	/**
	 * Indicates whether this pass is enabled.
	 *
	 * @deprecated Use enabled instead.
	 * @return {Boolean} Whether this pass is enabled.
	 */
	isEnabled(): boolean;
	/**
	 * Enables or disables this pass.
	 *
	 * @deprecated Use enabled instead.
	 * @param {Boolean} value - Whether the pass should be enabled.
	 */
	setEnabled(value: boolean): void;
	set fullscreenMaterial(arg: Material);
	/**
	 * The fullscreen material.
	 *
	 * @type {Material}
	 */
	get fullscreenMaterial(): Material;
	/**
	 * Returns the current fullscreen material.
	 *
	 * @deprecated Use fullscreenMaterial instead.
	 * @return {Material} The current fullscreen material, or null if there is none.
	 */
	getFullscreenMaterial(): Material;
	/**
	 * Sets the fullscreen material.
	 *
	 * @deprecated Use fullscreenMaterial instead.
	 * @protected
	 * @param {Material} value - A fullscreen material.
	 */
	protected setFullscreenMaterial(value: Material): void;
	/**
	 * Returns the current depth texture.
	 *
	 * @return {Texture} The current depth texture, or null if there is none.
	 */
	getDepthTexture(): Texture;
	/**
	 * Sets the depth texture.
	 *
	 * This method will be called automatically by the {@link EffectComposer}.
	 * You may override this method if your pass relies on the depth information of a preceding {@link RenderPass}.
	 *
	 * @param {Texture} depthTexture - A depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
	 */
	setDepthTexture(
		depthTexture: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Renders this pass.
	 *
	 * This is an abstract method that must be overridden.
	 *
	 * @abstract
	 * @throws {Error} An error is thrown if the method is not overridden.
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

	/**
	 * Sets the size.
	 *
	 * You may override this method if you want to be informed about the size of the backbuffer/canvas.
	 * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * This method is called when this pass is added to an {@link EffectComposer}.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

	/**
	 * Performs a shallow search for disposable properties and deletes them.
	 *
	 * The {@link EffectComposer} calls this method when it is being destroyed. You can use it independently to free
	 * memory when you're certain that you don't need this pass anymore.
	 */
	dispose(): void;

}

/**
 * A pass that renders an adaptive luminance map.
 */
export class AdaptiveLuminancePass extends Pass {

	/**
	 * Constructs a new adaptive luminance pass.
	 *
	 * @param {Texture} luminanceBuffer - A buffer that contains the current scene luminance.
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.minLuminance=0.01] - The minimum luminance.
	 * @param {Number} [options.adaptationRate=1.0] - The luminance adaptation rate.
	 */
	constructor(
		luminanceBuffer: Texture,
		{
			minLuminance,
			adaptationRate
		}?: {
			minLuminance?: number;
			adaptationRate?: number;
		}
	);

	/**
	 * The adaptive luminance texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the adaptive 1x1 luminance texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Sets the 1x1 mipmap level.
	 *
	 * This level is used to identify the smallest mipmap of the main luminance texture which contains the downsampled
	 * average scene luminance.
	 *
	 * @type {Number}
	 * @deprecated Use fullscreenMaterial.mipLevel1x1 instead.
	 */
	set mipLevel1x1(arg: number);
	/**
	 * @type {Number}
	 * @deprecated Use fullscreenMaterial.adaptationRate instead.
	 */
	set adaptationRate(arg: number);
	/**
	 * The luminance adaptation rate.
	 *
	 * @type {Number}
	 * @deprecated Use fullscreenMaterial.adaptationRate instead.
	 */
	get adaptationRate(): number;
	/**
	 * Renders the scene normals.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A Kawase blur pass.
 */
export class KawaseBlurPass extends Pass {

	/**
	 * An auto sizing flag.
	 *
	 * @type {Number}
	 * @deprecated Use {@link Resolution.AUTO_SIZE} instead.
	 */
	static get AUTO_SIZE(): number;
	/**
	 * Constructs a new Kawase blur pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
	 */
	constructor({
		resolutionScale,
		resolutionX,
		resolutionY,
		width,
		height,
		kernelSize
	}?: {
		resolutionScale?: number;
		resolutionX?: number;
		resolutionY?: number;
		width?: number;
		height?: number;
		kernelSize?: KernelSize;
	});

	resolution: Resolution;
	/**
	 * The blur material.
	 *
	 * @type {KawaseBlurMaterial}
	 */
	blurMaterial: KawaseBlurMaterial;
	/**
	 * Indicates whether dithering is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated
	 */
	dithering: boolean;
	/**
	 * The kernel size.
	 *
	 * @type {KernelSize}
	 */
	kernelSize: KernelSize;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Sets the render width.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.preferredWidth instead.
	 */
	set width(arg: number);
	/**
	 * The current width of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.width instead.
	 */
	get width(): number;
	/**
	 * Sets the render height.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.preferredHeight instead.
	 */
	set height(arg: number);
	/**
	 * The current height of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.height instead.
	 */
	get height(): number;
	set scale(arg: number);
	/**
	 * The current blur scale.
	 *
	 * @type {Number}
	 * @deprecated Use blurMaterial.scale instead.
	 */
	get scale(): number;
	/**
	 * Returns the current blur scale.
	 *
	 * @deprecated Use blurMaterial.scale instead.
	 * @return {Number} The scale.
	 */
	getScale(): number;
	/**
	 * Sets the blur scale.
	 *
	 * This value influences the overall blur strength and should not be greater than 1. For larger blurs please increase
	 * the kernel size via {@link setKernelSize}!
	 *
	 * Note that the blur strength is closely tied to the resolution. For a smooth transition from no blur to full blur,
	 * set the width or the height to a high enough value.
	 *
	 * @deprecated Use blurMaterial.scale instead.
	 * @param {Number} value - The scale.
	 */
	setScale(value: number): void;
	/**
	 * Returns the kernel size.
	 *
	 * @deprecated Use kernelSize instead.
	 * @return {KernelSize} The kernel size.
	 */
	getKernelSize(): KernelSize;
	/**
	 * Sets the kernel size.
	 *
	 * Larger kernels require more processing power but scale well with larger render resolutions.
	 *
	 * @deprecated Use kernelSize instead.
	 * @param {KernelSize} value - The kernel size.
	 */
	setKernelSize(value: KernelSize): void;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * Blurs the input buffer and writes the result to the output buffer. The input buffer remains intact, unless it's
	 * also used as the output buffer.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}



/**
 * A pass that disables the stencil test.
 */
export class ClearMaskPass extends Pass {

	/**
	 * Constructs a new clear mask pass.
	 */
	constructor();

	/**
	 * Disables the global stencil test.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that clears the input buffer or the screen.
 */
export class ClearPass extends Pass {

	/**
	 * Constructs a new clear pass.
	 *
	 * @param {Boolean} [color=true] - Determines whether the color buffer should be cleared.
	 * @param {Boolean} [depth=true] - Determines whether the depth buffer should be cleared.
	 * @param {Boolean} [stencil=false] - Determines whether the stencil buffer should be cleared.
	 */
	constructor(color?: boolean, depth?: boolean, stencil?: boolean);
	/**
	 * Indicates whether the color buffer should be cleared.
	 *
	 * @type {Boolean}
	 * @deprecated Use setClearFlags() instead.
	 */
	color: boolean;
	/**
	 * Indicates whether the depth buffer should be cleared.
	 *
	 * @type {Boolean}
	 * @deprecated Use setClearFlags() instead.
	 */
	depth: boolean;
	/**
	 * Indicates whether the stencil buffer should be cleared.
	 *
	 * @type {Boolean}
	 * @deprecated Use setClearFlags() instead.
	 */
	stencil: boolean;
	/**
	 * An override clear color. Default is null.
	 *
	 * @type {Color}
	 */
	overrideClearColor: Color;
	/**
	 * An override clear alpha. Default is -1.
	 *
	 * @type {Number}
	 */
	overrideClearAlpha: number;
	/**
	 * Sets the clear flags.
	 *
	 * @param {Boolean} color - Whether the color buffer should be cleared.
	 * @param {Boolean} depth - Whether the depth buffer should be cleared.
	 * @param {Boolean} stencil - Whether the stencil buffer should be cleared.
	 */
	setClearFlags(color: boolean, depth: boolean, stencil: boolean): void;
	/**
	 * Returns the override clear color. Default is null.
	 *
	 * @deprecated Use overrideClearColor instead.
	 * @return {Color} The clear color.
	 */
	getOverrideClearColor(): Color;
	/**
	 * Sets the override clear color.
	 *
	 * @deprecated Use overrideClearColor instead.
	 * @param {Color} value - The clear color.
	 */
	setOverrideClearColor(value: Color): void;
	/**
	 * Returns the override clear alpha. Default is -1.
	 *
	 * @deprecated Use overrideClearAlpha instead.
	 * @return {Number} The clear alpha.
	 */
	getOverrideClearAlpha(): number;
	/**
	 * Sets the override clear alpha.
	 *
	 * @deprecated Use overrideClearAlpha instead.
	 * @param {Number} value - The clear alpha.
	 */
	setOverrideClearAlpha(value: number): void;
	/**
	 * Clears the input buffer or the screen.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that copies the contents of an input buffer to another render target.
 */
export class CopyPass extends Pass {

	/**
	 * Constructs a new save pass.
	 *
	 * @param {WebGLRenderTarget} [renderTarget] - A render target.
	 * @param {Boolean} [autoResize=true] - Whether the render target size should be updated automatically.
	 */
	constructor(renderTarget?: WebGLRenderTarget, autoResize?: boolean);
	/**
	 * Enables or disables auto resizing of the render target.
	 *
	 * @type {Boolean}
	 */
	autoResize: boolean;
	set resize(arg: boolean);
	/**
	 * Enables or disables auto resizing of the render target.
	 *
	 * @deprecated Use autoResize instead.
	 * @type {Boolean}
	 */
	get resize(): boolean;
	/**
	 * The output texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the output texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Enables or disables auto resizing of the render target.
	 *
	 * @deprecated Use autoResize instead.
	 * @param {Boolean} value - Whether the render target size should be updated automatically.
	 */
	setAutoResizeEnabled(value: boolean): void;
	/**
	 * Saves the input buffer.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}
export type SavePass = CopyPass;

/**
 * A pass that copies depth into a render target.
 */
export class DepthCopyPass extends Pass {

	/**
	 * Constructs a new depth save pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {DepthPackingStrategies} [options.depthPacking=RGBADepthPacking] - The output depth packing.
	 */
	constructor({ depthPacking }?: { depthPacking?: DepthPackingStrategies });
	/**
	 * The output depth texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the output depth texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * The output depth packing.
	 *
	 * @type {DepthPackingStrategies}
	 */
	get depthPacking(): DepthPackingStrategies;
	/**
	 * Returns the output depth packing.
	 *
	 * @deprecated Use depthPacking instead.
	 * @return {DepthPackingStrategies} The depth packing.
	 */
	getDepthPacking(): DepthPackingStrategies;
	/**
	 * Copies depth from a depth texture.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that downsamples the scene depth by picking the most representative depth in 2x2 texel neighborhoods. If a
 * normal buffer is provided, the corresponding normals will be stored as well.
 *
 * This pass requires WebGL 2.
 */
export class DepthDownsamplingPass extends Pass {

	/**
	 * Constructs a new depth downsampling pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {Texture} [options.normalBuffer=null] - A texture that contains view space normals. See {@link NormalPass}.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - The render width.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - The render height.
	 */
	constructor({
		normalBuffer,
		resolutionScale,
		width,
		height
	}?: {
		normalBuffer?: Texture;
		resolutionScale?: number;
		width?: number;
		height?: number;
	});

	resolution: Resolution;
	/**
	 * The normal(RGB) + depth(A) texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the normal(RGB) + depth(A) texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Downsamples depth and scene normals.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that renders a given scene into the input buffer or to screen.
 *
 * This pass uses a {@link ClearPass} to clear the target buffer.
 */
export class RenderPass extends Pass {

	/**
	 * Constructs a new render pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use to render the scene.
	 * @param {Material} [overrideMaterial=null] - An override material.
	 */
	constructor(scene?: Scene, camera?: Camera, overrideMaterial?: Material);
	/**
	 * A clear pass.
	 *
	 * @type {ClearPass}
	 */
	clearPass: ClearPass;
	/**
	 * Indicates whether the scene background should be ignored.
	 *
	 * @type {Boolean}
	 */
	ignoreBackground: boolean;
	/**
	 * Indicates whether the shadow map auto update should be skipped.
	 *
	 * @type {Boolean}
	 */
	skipShadowMapUpdate: boolean;
	/**
	 * A selection of objects to render.
	 *
	 * @type {Selection}
	 */
	selection: Selection;
	set overrideMaterial(arg: Material);
	/**
	 * The current override material.
	 *
	 * @type {Material}
	 */
	get overrideMaterial(): Material;
	/**
	 * Returns the current override material.
	 *
	 * @deprecated Use overrideMaterial instead.
	 * @return {Material} The material.
	 */
	getOverrideMaterial(): Material;
	/**
	 * Sets the override material.
	 *
	 * @deprecated Use overrideMaterial instead.
	 * @param {Material} value - The material.
	 */
	setOverrideMaterial(value: Material): void;
	set clear(arg: boolean);
	/**
	 * Indicates whether the target buffer should be cleared before rendering.
	 *
	 * @type {Boolean}
	 * @deprecated Use clearPass.enabled instead.
	 */
	get clear(): boolean;
	/**
	 * Returns the selection. Default is `null` (no restriction).
	 *
	 * @deprecated Use selection instead.
	 * @return {Selection} The selection.
	 */
	getSelection(): Selection;
	/**
	 * Sets the selection. Set to `null` to disable.
	 *
	 * @deprecated Use selection instead.
	 * @param {Selection} value - The selection.
	 */
	setSelection(value: Selection): void;
	/**
	 * Indicates whether the scene background is disabled.
	 *
	 * @deprecated Use ignoreBackground instead.
	 * @return {Boolean} Whether the scene background is disabled.
	 */
	isBackgroundDisabled(): boolean;
	/**
	 * Enables or disables the scene background.
	 *
	 * @deprecated Use ignoreBackground instead.
	 * @param {Boolean} value - Whether the scene background should be disabled.
	 */
	setBackgroundDisabled(value: boolean): void;
	/**
	 * Indicates whether the shadow map auto update is disabled.
	 *
	 * @deprecated Use skipShadowMapUpdate instead.
	 * @return {Boolean} Whether the shadow map update is disabled.
	 */
	isShadowMapDisabled(): boolean;
	/**
	 * Enables or disables the shadow map auto update.
	 *
	 * @deprecated Use skipShadowMapUpdate instead.
	 * @param {Boolean} value - Whether the shadow map auto update should be disabled.
	 */
	setShadowMapDisabled(value: boolean): void;
	/**
	 * Returns the clear pass.
	 *
	 * @deprecated Use clearPass.enabled instead.
	 * @return {ClearPass} The clear pass.
	 */
	getClearPass(): ClearPass;
	/**
	 * Renders the scene.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that renders depth into an RGBA buffer.
 */
export class DepthPass extends Pass {

	/**
	 * Constructs a new depth pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use to render the scene.
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
	 */
	constructor(
		scene?: Scene,
		camera?: Camera,
		{
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height,
			renderTarget
		}?: {
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
			renderTarget?: WebGLRenderTarget;
		}
	);

	resolution: Resolution;
	/**
	 * The depth texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the depth texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * Renders the scene depth.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A depth picking pass.
 */
export class DepthPickingPass extends DepthCopyPass {

	/**
	 * Constructs a new depth picking pass.
	 *
	 * @param {Object} [options] - The options.
	 * @param {DepthPackingStrategies} [options.depthPacking=RGBADepthPacking] - The depth packing.
	 * @param {Number} [options.mode=DepthCopyMode.SINGLE] - The depth copy mode.
	 */
	constructor({
		depthPacking,
		mode
	}?: {
		depthPacking?: DepthPackingStrategies;
		mode?: number;
	});

	/**
	 * Reads depth at a specific screen position.
	 *
	 * Only one depth value can be picked per frame. Calling this method multiple times per frame will overwrite the
	 * picking coordinates. Unresolved promises will be abandoned.
	 *
	 * @example
	 * const ndc = new Vector3();
	 * const clientRect = myViewport.getBoundingClientRect();
	 * const clientX = pointerEvent.clientX - clientRect.left;
	 * const clientY = pointerEvent.clientY - clientRect.top;
	 * ndc.x = (clientX / myViewport.clientWidth) * 2.0 - 1.0;
	 * ndc.y = -(clientY / myViewport.clientHeight) * 2.0 + 1.0;
	 * const depth = await depthPickingPass.readDepth(ndc);
	 * ndc.z = depth * 2.0 - 1.0;
	 *
	 * const worldPosition = ndc.unproject(camera);
	 *
	 * @param {Vector2|Vector3} ndc - Normalized device coordinates. Only X and Y are relevant.
	 * @return {Promise<Number>} A promise that returns the depth on the next frame.
	 */
	readDepth(ndc: Vector2 | Vector3): Promise<number>;
	/**
	 * Copies depth and resolves depth picking promises.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A blend function enumeration.
 *
 * Important: Do not use `BlendFunction.SKIP` to disable effects. See
 * [Enabling and Disabling Effects](https://github.com/vanruesc/postprocessing/wiki/Enabling-and-Disabling-Effects)
 * for more information.
 *
 * Based on https://www.khronos.org/registry/OpenGL/extensions/NV/NV_blend_equation_advanced.txt
 *
 * @type {Object}
 * @property {Number} SKIP - Deprecated. Use DST instead. Warning: This blend function does NOT fully disable the effect.
 * @property {Number} SET - Deprecated. Use SRC instead.
 * @property {Number} ADD - Additive blending. Fast, but may produce washed out results.
 * @property {Number} ALPHA - Alpha blending. Blends based on the alpha value of the new color.
 * @property {Number} AVERAGE - Calculates the avarage of the new color and the base color.
 * @property {Number} COLOR - Converts the colors to HSL and blends based on color.
 * @property {Number} COLOR_BURN - Color burn.
 * @property {Number} COLOR_DODGE - Color dodge.
 * @property {Number} DARKEN - Prioritize darker colors.
 * @property {Number} DIFFERENCE - Color difference.
 * @property {Number} DIVIDE - Color division.
 * @property {Number} DST - Overwrites the new color with the base color. Ignores opacity.
 * @property {Number} EXCLUSION - Color exclusion.
 * @property {Number} HARD_LIGHT - Hard light.
 * @property {Number} HARD_MIX - Hard mix.
 * @property {Number} HUE - Converts the colors to HSL and blends based on hue.
 * @property {Number} INVERT - Overwrites the base color with the inverted new color.
 * @property {Number} INVERT_RGB - Multiplies the new color with the inverted base color.
 * @property {Number} LIGHTEN - Prioritize lighter colors.
 * @property {Number} LINEAR_BURN - Linear burn.
 * @property {Number} LINEAR_DODGE - Same as ADD but limits the result to 1.
 * @property {Number} LINEAR_LIGHT - Linear light.
 * @property {Number} LUMINOSITY - Converts the colors to HSL and blends based on luminosity.
 * @property {Number} MULTIPLY - Color multiplication.
 * @property {Number} NEGATION - Negates the base color using the new color.
 * @property {Number} NORMAL - Overwrites the base color with the new one.
 * @property {Number} OVERLAY - Color overlay.
 * @property {Number} PIN_LIGHT - Pin light.
 * @property {Number} REFLECT - Color reflection.
 * @property {Number} SCREEN - Screen blending. The two colors are effectively projected on a white screen simultaneously.
 * @property {Number} SRC - Overwrites the base color with the new one. Ignores opacity.
 * @property {Number} SATURATION - Converts the colors to HSL and blends based on saturation.
 * @property {Number} SOFT_LIGHT - Soft light.
 * @property {Number} SUBTRACT - Subtracts the new color from the base color.
 * @property {Number} VIVID_LIGHT - Vivid light.
 */
export enum BlendFunction {
	SKIP,
	SET,
	ADD,
	ALPHA,
	AVERAGE,
	COLOR,
	COLOR_BURN,
	COLOR_DODGE,
	DARKEN,
	DIFFERENCE,
	DIVIDE,
	DST,
	EXCLUSION,
	HARD_LIGHT,
	HARD_MIX,
	HUE,
	INVERT,
	INVERT_RGB,
	LIGHTEN,
	LINEAR_BURN,
	LINEAR_DODGE,
	LINEAR_LIGHT,
	LUMINOSITY,
	MULTIPLY,
	NEGATION,
	NORMAL,
	OVERLAY,
	PIN_LIGHT,
	REFLECT,
	SATURATION,
	SCREEN,
	SOFT_LIGHT,
	SRC,
	SUBTRACT,
	VIVID_LIGHT
}

/**
 * A blend mode.
 */
export class BlendMode extends EventDispatcher<Event> {

	/**
	 * Constructs a new blend mode.
	 *
	 * @param {BlendFunction} blendFunction - The blend function.
	 * @param {Number} opacity - The opacity of the color that will be blended with the base color.
	 */
	constructor(blendFunction: BlendFunction, opacity?: number);
	/**
	 * A uniform that controls the opacity of this blend mode.
	 *
	 * TODO Add opacity accessors for uniform value.
	 * @type {Uniform}
	 */
	opacity: Uniform;
	/**
	 * Returns the opacity.
	 *
	 * @return {Number} The opacity.
	 */
	getOpacity(): number;
	/**
	 * Sets the opacity.
	 *
	 * @param {Number} value - The opacity.
	 */
	setOpacity(value: number): void;
	/**
	 * Returns the blend function.
	 *
	 * @deprecated Use blendFunction instead.
	 * @return {BlendFunction} The blend function.
	 */
	getBlendFunction(): BlendFunction;
	/**
	 * Sets the blend function.
	 *
	 * @deprecated Use blendFunction instead.
	 * @param {BlendFunction} value - The blend function.
	 */
	setBlendFunction(value: BlendFunction): void;
	/**
	 * Returns the blend function shader code.
	 *
	 * @return {String} The blend function shader code.
	 */
	getShaderCode(): string;
	/**
	 * The blend function.
	 *
	 * @type {BlendFunction}
	 */
	get blendFunction(): BlendFunction;
	set blendFunction(value: BlendFunction);

}

/**
 * An abstract effect.
 *
 * Effects can be combined using the {@link EffectPass}.
 *
 * @implements {Initializable}
 * @implements {Resizable}
 * @implements {Disposable}
 */
export class Effect
	extends EventDispatcher<Event>
	implements Initializable, Resizable, Disposable {

	/**
	 * Constructs a new effect.
	 *
	 * @param {String} name - The name of this effect. Doesn't have to be unique.
	 * @param {String} fragmentShader - The fragment shader. This shader is required.
	 * @param {Object} [options] - Additional options.
	 * @param {EffectAttribute} [options.attributes=EffectAttribute.NONE] - The effect attributes that determine the execution priority and resource requirements.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
	 * @param {Map<String, String>} [options.defines] - Custom preprocessor macro definitions. Keys are names and values are code.
	 * @param {Map<String, Uniform>} [options.uniforms] - Custom shader uniforms. Keys are names and values are uniforms.
	 * @param {Set<WebGLExtension>} [options.extensions] - WebGL extensions.
	 * @param {String} [options.vertexShader=null] - The vertex shader. Most effects don't need one.
	 */
	constructor(
		name: string,
		fragmentShader: string,
		{
			attributes,
			blendFunction,
			defines,
			uniforms,
			extensions,
			vertexShader
		}?: {
			attributes?: EffectAttribute;
			blendFunction?: BlendFunction;
			defines?: Map<string, string>;
			uniforms?: Map<string, Uniform>;
			extensions?: Set<WebGLExtension>;
			vertexShader?: string;
		}
	);

	/**
	 * The name of this effect.
	 *
	 * @type {String}
	 */
	name: string;
	/**
	 * The renderer.
	 *
	 * @type {WebGLRenderer}
	 * @protected
	 * @deprecated
	 */
	protected renderer: WebGLRenderer;
	/**
	 * Preprocessor macro definitions.
	 *
	 * Call {@link Effect.setChanged} after changing macro definitions.
	 *
	 * @type {Map<String, String>}
	 */
	readonly defines: Map<string, string>;
	/**
	 * Shader uniforms.
	 *
	 * Call {@link Effect.setChanged} after adding or removing uniforms.
	 *
	 * @type {Map<String, Uniform>}
	 */
	readonly uniforms: Map<string, Uniform>;
	/**
	 * WebGL extensions that are required by this effect.
	 *
	 * Call {@link Effect.setChanged} after adding or removing extensions.
	 *
	 * @type {Set<WebGLExtension>}
	 */
	readonly extensions: Set<WebGLExtension>;
	/**
	 * The blend mode of this effect.
	 *
	 * @type {BlendMode}
	 */
	readonly blendMode: BlendMode;
	/**
	 * The input color space.
	 *
	 * @type {ColorSpace}
	 * @experimental
	 */
	get inputColorSpace(): ColorSpace;
	/**
	 * @type {ColorSpace}
	 * @protected
	 * @experimental
	 */
	protected set inputColorSpace(arg: ColorSpace);
	/**
	 * The output color space.
	 *
	 * Should only be changed if this effect converts the input colors to a different color space.
	 *
	 * @type {ColorSpace}
	 * @experimental
	 */
	get outputColorSpace(): ColorSpace;
	/**
	 * @type {ColorSpace}
	 * @protected
	 * @experimental
	 */
	protected set outputColorSpace(arg: ColorSpace);
	/**
	 * Sets the main scene.
	 *
	 * @type {Scene}
	 */
	set mainScene(arg: Scene);
	/**
	 * Sets the main camera.
	 *
	 * @type {Camera}
	 */
	set mainCamera(arg: Camera);
	/**
	 * Returns the name of this effect.
	 *
	 * @deprecated Use name instead.
	 * @return {String} The name.
	 */
	getName(): string;
	/**
	 * Sets the renderer.
	 *
	 * @deprecated
	 * @param {WebGLRenderer} renderer - The renderer.
	 */
	setRenderer(renderer: WebGLRenderer): void;
	/**
	 * Returns the preprocessor macro definitions.
	 *
	 * @deprecated Use defines instead.
	 * @return {Map<String, String>} The extensions.
	 */
	getDefines(): Map<string, string>;
	/**
	 * Returns the uniforms of this effect.
	 *
	 * @deprecated Use uniforms instead.
	 * @return {Map<String, Uniform>} The extensions.
	 */
	getUniforms(): Map<string, Uniform>;
	/**
	 * Returns the WebGL extensions that are required by this effect.
	 *
	 * @deprecated Use extensions instead.
	 * @return {Set<WebGLExtension>} The extensions.
	 */
	getExtensions(): Set<WebGLExtension>;
	/**
	 * Returns the blend mode.
	 *
	 * The result of this effect will be blended with the result of the previous effect using this blend mode.
	 *
	 * @deprecated Use blendMode instead.
	 * @return {BlendMode} The blend mode.
	 */
	getBlendMode(): BlendMode;
	/**
	 * Returns the effect attributes.
	 *
	 * @return {EffectAttribute} The attributes.
	 */
	getAttributes(): EffectAttribute;
	/**
	 * Sets the effect attributes.
	 *
	 * Effects that have the same attributes will be executed in the order in which they were registered. Some attributes
	 * imply a higher priority.
	 *
	 * @protected
	 * @param {EffectAttribute} attributes - The attributes.
	 */
	protected setAttributes(attributes: EffectAttribute): void;
	/**
	 * Returns the fragment shader.
	 *
	 * @return {String} The fragment shader.
	 */
	getFragmentShader(): string;
	/**
	 * Sets the fragment shader.
	 *
	 * @protected
	 * @param {String} fragmentShader - The fragment shader.
	 */
	protected setFragmentShader(fragmentShader: string): void;
	/**
	 * Returns the vertex shader.
	 *
	 * @return {String} The vertex shader.
	 */
	getVertexShader(): string;
	/**
	 * Sets the vertex shader.
	 *
	 * @protected
	 * @param {String} vertexShader - The vertex shader.
	 */
	protected setVertexShader(vertexShader: string): void;
	/**
	 * Informs the associated {@link EffectPass} that this effect requires a shader recompilation.
	 *
	 * Should be called after changing macros or extensions and after adding/removing uniforms.
	 *
	 * @protected
	 */
	protected setChanged(): void;
	/**
	 * Sets the depth texture.
	 *
	 * You may override this method if your effect requires direct access to the depth texture that is bound to the
	 * associated {@link EffectPass}.
	 *
	 * @param {Texture} depthTexture - A depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
	 */
	setDepthTexture(
		depthTexture: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Updates this effect by performing supporting operations.
	 *
	 * This method is called by the {@link EffectPass} right before the main fullscreen render operation, even if the
	 * blend function is set to `SKIP`.
	 *
	 * You may override this method if you need to update custom uniforms or render additional off-screen textures.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of this effect.
	 *
	 * You may override this method if you want to be informed about the size of the backbuffer/canvas.
	 * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * This method is called when the associated {@link EffectPass} is added to an {@link EffectComposer}.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 * @example if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

	/**
	 * Performs a shallow search for properties that define a dispose method and deletes them.
	 *
	 * The {@link EffectComposer} calls this method when it is being destroyed.
	 */
	dispose(): void;

}

/**
 * An enumeration of effect attributes.
 *
 * Attributes can be concatenated using the bitwise OR operator.
 *
 * @type {Object}
 * @property {Number} NONE - No attributes. Most effects don't need to specify any attributes.
 * @property {Number} DEPTH - Describes effects that require a depth texture.
 * @property {Number} CONVOLUTION - Describes effects that fetch additional samples from the input buffer. There cannot be more than one effect with this attribute per {@link EffectPass}.
 * @example const attributes = EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH;
 */
export enum EffectAttribute {
	CONVOLUTION,
	DEPTH,
	NONE,
}

/**
 * An enumeration of WebGL extensions.
 *
 * @type {Object}
 * @property {String} DERIVATIVES - Enables derivatives by adding the functions dFdx, dFdy and fwidth.
 * @property {String} FRAG_DEPTH - Enables gl_FragDepthEXT to set a depth value of a fragment from within the fragment shader.
 * @property {String} DRAW_BUFFERS - Enables multiple render targets (MRT) support.
 * @property {String} SHADER_TEXTURE_LOD - Enables explicit control of texture LOD.
 */
export enum WebGLExtension {
	DERIVATIVES = "derivatives",
	FRAG_DEPTH = "fragDepth",
	DRAW_BUFFERS = "drawBuffers",
	SHADER_TEXTURE_LOD = "shaderTextureLOD",
}

/**
 * An effect pass.
 *
 * Use this pass to combine {@link Effect} instances.
 */
export class EffectPass extends Pass {

	/**
	 * Constructs a new effect pass.
	 *
	 * @param {Camera} camera - The main camera.
	 * @param {...Effect} effects - The effects that will be rendered by this pass.
	 */
	constructor(camera?: Camera, ...effects: Effect[]);
	/**
	 * The effects.
	 *
	 * Use `updateMaterial` or `recompile` after changing the effects and consider calling `dispose` to free resources
	 * of unused effects.
	 *
	 * @type {Effect[]}
	 * @protected
	 */
	private effects: Effect[];
	/**
	 * A time offset.
	 *
	 * Elapsed time will start at this value.
	 *
	 * @type {Number}
	 * @deprecated
	 */
	minTime: number;
	/**
	 * The maximum time.
	 *
	 * If the elapsed time exceeds this value, it will be reset.
	 *
	 * @type {Number}
	 * @deprecated
	 */
	maxTime: number;
	set encodeOutput(arg: boolean);
	/**
	 * Indicates whether this pass encodes its output when rendering to screen.
	 *
	 * @type {Boolean}
	 * @deprecated Use fullscreenMaterial.encodeOutput instead.
	 */
	get encodeOutput(): boolean;
	set dithering(arg: boolean);
	/**
	 * Indicates whether dithering is enabled.
	 *
	 * @type {Boolean}
	 */
	get dithering(): boolean;
	/**
	 * Updates the compound shader material.
	 */
	protected updateMaterial(): void;
	/**
	 * Rebuilds the shader material.
	 */
	recompile(): void;
	/**
	 * Sets the effects.
	 *
	 * @param effects - The effects.
	 */
	protected setEffects(effects: Effect[]): void;
	/**
	 * Returns the current depth texture.
	 * @returns The current depth texture, or null if there is none.
	 */
	getDepthTexture(): Texture;
	/**
	 * Sets the depth texture.
	 * @param depthTexture - A depth texture.
	 * @param [depthPacking = 0] - The depth packing.
	 */
	setDepthTexture(depthTexture: Texture, depthPacking?: number): void;
	/**
	 * Renders the effect.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

	/**
	 * Updates the size of this pass.
	 * @param width - The width.
	 * @param height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 * @param renderer - The renderer.
	 * @param alpha - Whether the renderer uses the alpha channel or not.
	 * @param frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

	/**
	 * Deletes disposable objects.
	 * This pass will be inoperative after this method was called!
	 */
	dispose(): void;
	/**
	 * Handles events.
	 *
	 * @param {Event} event - An event.
	 */
	handleEvent(event: Event): void;

}

/**
 * A pass that executes a given function.
 */
export class LambdaPass extends Pass {

	/**
	 * Constructs a new lambda pass.
	 *
	 * @param {Function} f - A function.
	 */
	constructor(f: Function);

}

/**
 * A pass that renders luminance.
 */
export class LuminancePass extends Pass {

	/**
	 * Constructs a new luminance pass.
	 *
	 * @param {Object} [options] - The options. See {@link LuminanceMaterial} for additional options.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
	 */
	constructor({
		resolutionScale,
		resolutionX,
		resolutionY,
		width,
		height,
		renderTarget
	}?: {
		resolutionScale?: number;
		resolutionX?: number;
		resolutionY?: number;
		width?: number;
		height?: number;
		renderTarget?: WebGLRenderTarget;
	});

	resolution: Resolution;
	/**
	 * The luminance texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the luminance texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Renders the luminance.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A stencil mask pass.
 *
 * This pass requires that the input and output buffers have a stencil buffer. You can enable the stencil buffer via the
 * {@link EffectComposer} constructor.
 */
export class MaskPass extends Pass {

	/**
	 * Constructs a new mask pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use.
	 */
	constructor(scene?: Scene, camera?: Camera);
	/**
	 * A clear pass.
	 *
	 * @type {ClearPass}
	 */
	clearPass: ClearPass;
	/**
	 * Inverse flag.
	 *
	 * @type {Boolean}
	 * @deprecated Use inverted instead.
	 */
	inverse: boolean;
	set inverted(arg: boolean);
	/**
	 * Indicates whether the mask should be inverted.
	 *
	 * @type {Boolean}
	 */
	get inverted(): boolean;
	set clear(arg: boolean);
	/**
	 * Indicates whether this pass should clear the stencil buffer.
	 *
	 * @type {Boolean}
	 * @deprecated Use clearPass.enabled instead.
	 */
	get clear(): boolean;
	/**
	 * Returns the internal clear pass.
	 *
	 * @deprecated Use clearPass.enabled instead.
	 * @return {ClearPass} The clear pass.
	 */
	getClearPass(): ClearPass;
	/**
	 * Indicates whether the mask is inverted.
	 *
	 * @deprecated Use inverted instead.
	 * @return {Boolean} Whether the mask is inverted.
	 */
	isInverted(): boolean;
	/**
	 * Enables or disable mask inversion.
	 *
	 * @deprecated Use inverted instead.
	 * @param {Boolean} value - Whether the mask should be inverted.
	 */
	setInverted(value: boolean): void;
	/**
	 * Renders the effect.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A pass that renders the normals of a given scene.
 */
export class NormalPass extends Pass {

	/**
	 * Constructs a new normal pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use to render the scene.
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
	 */
	constructor(
		scene?: Scene,
		camera?: Camera,
		{
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height,
			renderTarget
		}?: {
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
			renderTarget?: WebGLRenderTarget;
		}
	);

	resolution: Resolution;
	/**
	 * The normal texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * The normal texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * Renders the scene normals.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * A shader pass.
 *
 * Renders any shader material as a fullscreen effect. This pass should not be used to create multiple chained effects.
 * For a more efficient solution, please refer to the {@link EffectPass}.
 */
export class ShaderPass extends Pass {

	/**
	 * Constructs a new shader pass.
	 *
	 * @param {ShaderMaterial} material - A shader material.
	 * @param {String} [input="inputBuffer"] - The name of the input buffer uniform.
	 */
	constructor(material: ShaderMaterial, input?: string);
	/**
	 * Sets the name of the input buffer uniform.
	 *
	 * Most fullscreen materials modify texels from an input texture. This pass automatically assigns the main input
	 * buffer to the uniform identified by the given name.
	 *
	 * @param {String} input - The name of the input buffer uniform.
	 */
	setInput(input: string): void;
	/**
	 * Renders the effect.
	 * @param renderer - The renderer.
	 * @param inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
	 * @param [deltaTime] - The time between the last frame and the current one in seconds.
	 * @param [stencilTest] - Indicates whether a stencil mask is active.
	 */
	render(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget | null,
		outputBuffer: WebGLRenderTarget | null,
		deltaTime?: number,
		stencilTest?: boolean
	): void;

}

/**
 * The EffectComposer may be used in place of a normal WebGLRenderer.
 *
 * The auto clear behaviour of the provided renderer will be disabled to prevent unnecessary clear operations.
 *
 * It is common practice to use a {@link RenderPass} as the first pass to automatically clear the buffers and render a
 * scene for further processing.
 *
 * @implements {Resizable}
 * @implements {Disposable}
 */
export class EffectComposer implements Resizable, Disposable {

	/**
	 * Constructs a new effect composer.
	 *
	 * @param {WebGLRenderer} renderer - The renderer that should be used.
	 * @param {Object} [options] - The options.
	 * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
	 * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
	 * @param {Boolean} [options.alpha] - Deprecated. Buffers are always RGBA since three r137.
	 * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
	 * @param {Number} [options.frameBufferType] - The type of the internal frame buffers. It's recommended to use HalfFloatType if possible.
	 */
	constructor(
		renderer?: WebGLRenderer,
		{
			depthBuffer,
			stencilBuffer,
			multisampling,
			frameBufferType
		}?: {
			depthBuffer?: boolean;
			stencilBuffer?: boolean;
			alpha?: boolean;
			multisampling?: number;
			frameBufferType?: number;
		}
	);

	/**
	 * The input buffer.
	 *
	 * Two identical buffers are used to avoid reading from and writing to the same render target.
	 *
	 * @type {WebGLRenderTarget}
	 */
	inputBuffer: WebGLRenderTarget;
	/**
	 * The output buffer.
	 *
	 * @type {WebGLRenderTarget}
	 */
	outputBuffer: WebGLRenderTarget;
	/**
	 * The passes.
	 *
	 * @type {Pass[]}
	 */
	passes: Pass[];
	/**
	 * Determines whether the last pass automatically renders to screen.
	 *
	 * @type {Boolean}
	 */
	autoRenderToScreen: boolean;
	/**
	 * Sets the amount of MSAA samples.
	 *
	 * Requires WebGL 2. Set to zero to disable multisampling.
	 *
	 * @type {Number}
	 */
	set multisampling(arg: number);
	/**
	 * The current amount of samples used for multisample anti-aliasing.
	 *
	 * @type {Number}
	 */
	get multisampling(): number;
	/**
	 * Returns the internal timer.
	 *
	 * @return {Timer} The timer.
	 */
	getTimer(): Timer;
	/**
	 * Returns the renderer.
	 *
	 * @return {WebGLRenderer} The renderer.
	 */
	getRenderer(): WebGLRenderer;
	/**
	 * Sets the renderer.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 */
	setRenderer(renderer: WebGLRenderer): void;
	/**
	 * Replaces the current renderer with the given one.
	 *
	 * The auto clear mechanism of the provided renderer will be disabled. If the new render size differs from the
	 * previous one, all passes will be updated.
	 *
	 * By default, the DOM element of the current renderer will automatically be removed from its parent node and the DOM
	 * element of the new renderer will take its place.
	 *
	 * @deprecated Use setRenderer instead.
	 * @param {WebGLRenderer} renderer - The new renderer.
	 * @param {Boolean} updateDOM - Indicates whether the old canvas should be replaced by the new one in the DOM.
	 * @return {WebGLRenderer} The old renderer.
	 */
	replaceRenderer(
		renderer: WebGLRenderer,
		updateDOM?: boolean
	): WebGLRenderer;
	/**
	 * Creates a new render target.
	 *
	 * @deprecated Create buffers manually via WebGLRenderTarget instead.
	 * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
	 * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
	 * @param {Number} type - The frame buffer type.
	 * @param {Number} multisampling - The number of samples to use for antialiasing.
	 * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
	 */
	createBuffer(
		depthBuffer: boolean,
		stencilBuffer: boolean,
		type: number,
		multisampling: number
	): WebGLRenderTarget;
	/**
	 * Can be used to change the main scene for all registered passes and effects.
	 *
	 * @param {Scene} scene - The scene.
	 */
	setMainScene(scene: Scene): void;
	/**
	 * Can be used to change the main camera for all registered passes and effects.
	 *
	 * @param {Camera} camera - The camera.
	 */
	setMainCamera(camera: Camera): void;
	/**
	 * Adds a pass, optionally at a specific index.
	 *
	 * @param {Pass} pass - A new pass.
	 * @param {Number} [index] - An index at which the pass should be inserted.
	 */
	addPass(pass: Pass, index?: number): void;
	/**
	 * Removes a pass.
	 *
	 * @param {Pass} pass - The pass.
	 */
	removePass(pass: Pass): void;
	/**
	 * Removes all passes.
	 */
	removeAllPasses(): void;
	/**
	 * Renders all enabled passes in the order in which they were added.
	 *
	 * @param {Number} [deltaTime] - The time since the last frame in seconds.
	 */
	render(deltaTime?: number): void;
	/**
	 * Sets the size of the buffers, passes and the renderer.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 * @param {Boolean} [updateStyle] - Determines whether the style of the canvas should be updated.
	 */
	setSize(width: number, height: number, updateStyle?: boolean): void;
	/**
	 * Resets this composer by deleting all passes and creating new buffers.
	 */
	reset(): void;
	/**
	 * Disposes this composer and all passes.
	 */
	dispose(): void;

}

/**
 * An override material manager.
 *
 * Includes a workaround that fixes override materials for skinned meshes and instancing. Doesn't fix uniforms such as
 * normal maps and displacement maps. Using the workaround may have a negative impact on performance if the scene
 * contains a lot of meshes.
 *
 * @implements {Disposable}
 */
export class OverrideMaterialManager implements Disposable {

	/**
	 * Enables or disables the override material workaround globally.
	 *
	 * This only affects post processing passes and effects.
	 *
	 * @type {Boolean}
	 */
	static set workaroundEnabled(arg: boolean);
	/**
	 * Indicates whether the override material workaround is enabled.
	 *
	 * @type {Boolean}
	 */
	static get workaroundEnabled(): boolean;
	/**
	 * Constructs a new override material manager.
	 *
	 * @param {Material} [material=null] - An override material.
	 */
	constructor(material?: Material);
	/**
	 * Sets the override material.
	 *
	 * @param {Material} material - The material.
	 */
	setMaterial(material: Material): void;
	/**
	 * Performs cleanup tasks.
	 */
	dispose(): void;

}

/**
 * The Resizable contract.
 *
 * Implemented by objects that can be resized.
 *
 * @interface
 */
export interface Resizable {

	/**
	 * Sets the size of this object.
	 *
	 * @param {number} width - The width.
	 * @param {number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * A timer that provides read access to time data.
 *
 * @interface
 */
export interface ImmutableTimer {

	/**
	* The current delta time in seconds.
	*
	* @type {Number}
	*/
	get delta(): number;
	/**
	* The fixed delta time in seconds.
	*
	* @type {Number}
	*/
	get fixedDelta(): number;
	/**
	* The elapsed time in seconds.
	*
	* @type {Number}
	*/
	get elapsed(): number;

}

/**
 * An object selection.
 *
 * Object selections use render layers to facilitate quick and efficient visibility changes.
 */
export class Selection extends Set<Object3D> {

	/**
	 * Constructs a new selection.
	 *
	 * @param {Iterable<Object3D>} [iterable] - A collection of objects that should be added to this selection.
	 * @param {Number} [layer=10] - A dedicated render layer for selected objects.
	 */
	constructor(iterable?: Iterable<Object3D>, layer?: number);
	/**
	 * Controls whether objects that are added to this selection should be removed from all other layers.
	 *
	 * @type {Boolean}
	 */
	exclusive: boolean;
	set layer(arg: number);
	/**
	 * The render layer for selected objects.
	 *
	 * @type {Number}
	 */
	get layer(): number;
	/**
	 * Returns the current render layer for selected objects.
	 *
	 * The default layer is 10. If this collides with your own custom layers, please change it before rendering!
	 *
	 * @deprecated Use layer instead.
	 * @return {Number} The layer.
	 */
	getLayer(): number;
	/**
	 * Sets the render layer for selected objects.
	 *
	 * The current selection will be updated accordingly.
	 *
	 * @deprecated Use layer instead.
	 * @param {Number} value - The layer. Range is [0, 31].
	 */
	setLayer(value: number): void;
	/**
	 * Indicates whether objects that are added to this selection will be removed from all other layers.
	 *
	 * @deprecated Use exclusive instead.
	 * @return {Number} Whether this selection is exclusive. Default is false.
	 */
	isExclusive(): number;
	/**
	 * Controls whether objects that are added to this selection should be removed from all other layers.
	 *
	 * @deprecated Use exclusive instead.
	 * @param {Number} value - Whether this selection should be exclusive.
	 */
	setExclusive(value: number): void;
	/**
	 * Clears this selection.
	 *
	 * @return {Selection} This selection.
	 */
	clear(): this;
	/**
	 * Clears this selection and adds the given objects.
	 *
	 * @param {Iterable<Object3D>} objects - The objects that should be selected.
	 * @return {Selection} This selection.
	 */
	set(objects: Iterable<Object3D>): this;
	/**
	 * An alias for {@link has}.
	 *
	 * @param {Object3D} object - An object.
	 * @return {Number} Returns 0 if the given object is currently selected, or -1 otherwise.
	 * @deprecated Added for backward-compatibility.
	 */
	indexOf(object: Object3D): number;
	/**
	 * Adds an object to this selection.
	 *
	 * If {@link exclusive} is set to `true`, the object will also be removed from all other layers.
	 *
	 * @param {Object3D} object - The object that should be selected.
	 * @return {Selection} This selection.
	 */
	add(object: Object3D): this;
	/**
	 * Removes an existing object from the selection. If the object doesn't exist it's added instead.
	 *
	 * @param {Object3D} object - The object.
	 * @return {Boolean} Returns true if the object is added, false otherwise.
	 */
	toggle(object: Object3D): boolean;
	/**
	 * Sets the visibility of all selected objects.
	 *
	 * This method enables or disables render layer 0 of all selected objects.
	 *
	 * @param {Boolean} visible - Whether the selected objects should be visible.
	 * @return {Selection} This selection.
	 */
	setVisible(visible: boolean): this;

}

/**
 * A timer.
 *
 * Original implementation by Michael Herzog (Mugen87).
 *
 * @experimental Temporary substitute for {@link https://github.com/mrdoob/three.js/pull/17912}
 * @implements {Disposable}
 * @implements {EventListenerObject}
 */
export class Timer implements ImmutableTimer, Disposable, EventListenerObject {
	handleEvent(object: Event): void;

	/**
	 * The current delta time in seconds.
	 */
	get delta(): number;
	/**
	 * The fixed delta time in seconds.
	 */
	get fixedDelta(): number;
	set fixedDelta(value: number);
	/**
	 * The elapsed time in seconds.
	 */
	get elapsed(): number;
	/**
	 * Determines whether this timer should use a fixed time step.
	 */
	useFixedDelta: boolean;
	/**
	 * The timescale.
	 */
	timescale: number;
	/**
	 * Enables or disables auto reset based on page visibility.
	 *
	 * If enabled, the timer will be reset when the page becomes visible. This effectively pauses the timer when the page
	 * is hidden. Has no effect if the API is not supported.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
	 */
	get autoReset(): boolean;
	set autoReset(value: boolean);
	/**
	 * Updates this timer.
	 *
	 * @param {Number} [timestamp] - The current time in milliseconds.
	 */
	update(timestamp?: number): void;
	/**
	 * Resets this timer.
	 *
	 * @return {Timer} This timer.
	 */
	reset(): Timer;
	/**
	 * Disposes this timer.
	 */
	dispose(): void;

}
export type BloomEffectOptions = {
	blendFunction?: BlendFunction;
	mipmapBlur?: boolean;
	luminanceThreshold?: number;
	luminanceSmoothing?: number;
	intensity?: number;
	resolutionScale?: number;
	resolutionX?: number;
	resolutionY?: number;
	width?: number;
	height?: number;
	kernelSize?: KernelSize;
};

/**
 * A bloom effect.
 */
export class BloomEffect extends Effect {

	/**
	 * Constructs a new bloom effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
	 * @param {Boolean} [options.mipmapBlur=false] - Enables or disables mipmap blur.
	 * @param {Number} [options.luminanceThreshold=0.9] - The luminance threshold. Raise this value to mask out darker elements in the scene. Range is [0, 1].
	 * @param {Number} [options.luminanceSmoothing=0.025] - Controls the smoothness of the luminance threshold. Range is [0, 1].
	 * @param {Number} [options.intensity=1.0] - The intensity.
	 * @param {KernelSize} [options.kernelSize=KernelSize.LARGE] - The blur kernel size.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 */
	constructor({
		blendFunction,
		mipmapBlur,
		luminanceThreshold,
		luminanceSmoothing,
		intensity,
		resolutionScale,
		width,
		height,
		resolutionX,
		resolutionY,
		kernelSize
	}?: BloomEffectOptions);

	/**
	 * A luminance shader pass.
	 *
	 * This pass can be disabled to skip luminance filtering.
	 *
	 * @type {LuminancePass}
	 */
	luminancePass: LuminancePass;
	/**
	 * A blur pass.
	 *
	 * @type {KawaseBlurPass}
	 */
	blurPass: KawaseBlurPass;
	/**
	 * A texture that contains the intermediate result of this effect.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * Returns the generated bloom texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * The resolution of this effect.
	 *
	 * @type {Resolution}
	 */
	get resolution(): Resolution;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Returns the blur pass.
	 *
	 * @deprecated Use blurPass instead.
	 * @return {KawaseBlurPass} The blur pass.
	 */
	getBlurPass(): KawaseBlurPass;
	/**
	 * Returns the luminance pass.
	 *
	 * @deprecated Use luminancePass instead.
	 * @return {LuminancePass} The luminance pass.
	 */
	getLuminancePass(): LuminancePass;
	/**
	 * The luminance material.
	 *
	 * @type {LuminanceMaterial}
	 */
	get luminanceMaterial(): LuminanceMaterial;
	/**
	 * Returns the luminance material.
	 *
	 * @deprecated Use luminanceMaterial instead.
	 * @return {LuminanceMaterial} The material.
	 */
	getLuminanceMaterial(): LuminanceMaterial;
	set width(arg: number);
	/**
	 * The current width of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.width instead.
	 */
	get width(): number;
	set height(arg: number);
	/**
	 * The current height of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.height instead.
	 */
	get height(): number;
	set dithering(arg: boolean);
	/**
	 * Indicates whether dithering is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated Use EffectPass.fullscreenMaterial.dithering instead.
	 */
	get dithering(): boolean;
	set kernelSize(arg: KernelSize);
	/**
	 * The blur kernel size.
	 *
	 * @type {KernelSize}
	 * @deprecated Use blurPass.kernelSize instead.
	 */
	get kernelSize(): KernelSize;
	set distinction(arg: number);
	/**
	 * @type {Number}
	 * @deprecated Use luminanceMaterial instead.
	 */
	get distinction(): number;
	set intensity(arg: number);
	/**
	 * The bloom intensity.
	 *
	 * @type {Number}
	 */
	get intensity(): number;
	/**
	 * The bloom intensity.
	 *
	 * @deprecated Use intensity instead.
	 * @return {Number} The intensity.
	 */
	getIntensity(): number;
	/**
	 * Sets the bloom intensity.
	 *
	 * @deprecated Use intensity instead.
	 * @param {Number} value - The intensity.
	 */
	setIntensity(value: number): void;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A depth of field (bokeh) effect.
 *
 * Original shader code by Martins Upitis:
 *	http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
 *
 * @deprecated Use DepthOfFieldEffect instead.
 */
export class BokehEffect extends Effect {

	/**
	 * Constructs a new bokeh effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.focus=0.5] - The focus distance ratio, ranging from 0.0 to 1.0.
	 * @param {Number} [options.dof=0.02] - Depth of field. An area in front of and behind the focal point that still appears sharp.
	 * @param {Number} [options.aperture=0.015] - Camera aperture scale. Bigger values for stronger blur and shallower depth of field.
	 * @param {Number} [options.maxBlur=1.0] - The maximum blur strength.
	 */
	constructor({
		blendFunction,
		focus,
		dof,
		aperture,
		maxBlur
	}?: {
		blendFunction?: BlendFunction;
		focus?: number;
		dof?: number;
		aperture?: number;
		maxBlur?: number;
	});

}

/**
 * A brightness/contrast effect.
 *
 * Reference: https://github.com/evanw/glfx.js
 */
export class BrightnessContrastEffect extends Effect {

	/**
	 * Constructs a new brightness/contrast effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.brightness=0.0] - The brightness factor, ranging from -1 to 1, where 0 means no change.
	 * @param {Number} [options.contrast=0.0] - The contrast factor, ranging from -1 to 1, where 0 means no change.
	 */
	constructor({
		blendFunction,
		brightness,
		contrast
	}?: {
		blendFunction?: BlendFunction;
		brightness?: number;
		contrast?: number;
	});

	set brightness(arg: number);
	/**
	 * The brightness.
	 *
	 * @type {Number}
	 */
	get brightness(): number;
	/**
	 * Returns the brightness.
	 *
	 * @deprecated Use brightness instead.
	 * @return {Number} The brightness.
	 */
	getBrightness(): number;
	/**
	 * Sets the brightness.
	 *
	 * @deprecated Use brightness instead.
	 * @param {Number} value - The brightness.
	 */
	setBrightness(value: number): void;
	set contrast(arg: number);
	/**
	 * The contrast.
	 *
	 * @type {Number}
	 */
	get contrast(): number;
	/**
	 * Returns the contrast.
	 *
	 * @deprecated Use contrast instead.
	 * @return {Number} The contrast.
	 */
	getContrast(): number;
	/**
	 * Sets the contrast.
	 *
	 * @deprecated Use contrast instead.
	 * @param {Number} value - The contrast.
	 */
	setContrast(value: number): void;

}

/**
 * A chromatic aberration effect.
 */
export class ChromaticAberrationEffect extends Effect {

	/**
	 * Constructs a new chromatic aberration effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Vector2} [options.offset] - The color offset.
	 * @param {Boolean} [options.radialModulation=false] - Whether the effect should be modulated with a radial gradient.
	 * @param {Number} [options.modulationOffset=0.15] - The modulation offset. Only applies if `radialModulation` is enabled.
	 */
	constructor({
		blendFunction,
		offset,
		radialModulation,
		modulationOffset
	}?: {
		blendFunction?: BlendFunction;
		offset?: Vector2;
		radialModulation: boolean,
		modulationOffset: number
	});

	set offset(arg: Vector2);
	/**
	 * The color offset.
	 *
	 * @type {Vector2}
	 */
	get offset(): Vector2;
	/**
	 * Indicates whether radial modulation is enabled.
	 *
	 * When enabled, the effect will be weaker in the middle and stronger towards the screen edges.
	 *
	 * @type {Boolean}
	 */
	get radialModulation(): boolean;
	set radialModulation(arg: boolean);
	/**
	 * The modulation offset.
	 *
	 * @type {Number}
	 */
	get modulationOffset(): number;
	set modulationOffset(arg: number);
	/**
	 * Returns the color offset vector.
	 *
	 * @deprecated Use offset instead.
	 * @return {Vector2} The offset.
	 */
	getOffset(): Vector2;
	/**
	 * Sets the color offset vector.
	 *
	 * @deprecated Use offset instead.
	 * @param {Vector2} value - The offset.
	 */
	setOffset(value: Vector2): void;

}

/**
 * A fast greyscale effect.
 */
export class ColorAverageEffect extends Effect {

	/**
	 * Constructs a new color average effect.
	 *
	 * @param {BlendFunction} [blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 */
	constructor(blendFunction?: BlendFunction);

}

/**
 * A color depth effect.
 *
 * Simulates a hardware limitation to achieve a retro feel. The real color depth will not be altered by this effect.
 */
export class ColorDepthEffect extends Effect {

	/**
	 * Constructs a new color depth effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.bits=16] - The color bit depth.
	 */
	constructor({
		blendFunction,
		bits
	}?: {
		blendFunction?: BlendFunction;
		bits?: number;
	});

	set bitDepth(arg: number);
	/**
	 * The virtual amount of color bits.
	 *
	 * Each color channel effectively uses a fourth of the total amount of bits. Alpha remains unaffected.
	 *
	 * @type {Number}
	 */
	get bitDepth(): number;
	/**
	 * Returns the current color bit depth.
	 *
	 * @return {Number} The bit depth.
	 */
	getBitDepth(): number;
	/**
	 * Sets the virtual amount of color bits.
	 *
	 * @param {Number} value - The bit depth.
	 */
	setBitDepth(value: number): void;

}

/**
 * A depth visualization effect.
 *
 * Useful for debugging.
 */
export class DepthEffect extends Effect {

	/**
	 * Constructs a new depth effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Boolean} [options.inverted=false] - Whether the depth should be inverted.
	 */
	constructor({
		blendFunction,
		inverted
	}?: {
		blendFunction?: BlendFunction;
		inverted?: boolean;
	});

	set inverted(arg: boolean);
	/**
	 * Indicates whether depth should be inverted.
	 *
	 * @type {Boolean}
	 */
	get inverted(): boolean;
	/**
	 * Indicates whether the rendered depth is inverted.
	 *
	 * @deprecated Use inverted instead.
	 * @return {Boolean} Whether the rendered depth is inverted.
	 */
	isInverted(): boolean;
	/**
	 * Enables or disables depth inversion.
	 *
	 * @deprecated Use inverted instead.
	 * @param {Boolean} value - Whether depth should be inverted.
	 */
	setInverted(value: boolean): void;

}

/**
 * A depth of field effect.
 *
 * Based on a graphics study by Adrian Courrèges and an article by Steve Avery:
 *	https://www.adriancourreges.com/blog/2016/09/09/doom-2016-graphics-study/
 *	https://pixelmischiefblog.wordpress.com/2016/11/25/bokeh-depth-of-field/
 */
export class DepthOfFieldEffect extends Effect {

	/**
	 * Constructs a new depth of field effect.
	 *
	 * @param {Camera} camera - The main camera.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.worldFocusDistance] - The focus distance in world units.
	 * @param {Number} [options.worldFocusRange] - The focus distance in world units.
	 * @param {Number} [options.focusDistance=0.0] - The normalized focus distance. Range is [0.0, 1.0].
	 * @param {Number} [options.focalLength=0.1] - The focal length. Range is [0.0, 1.0].
	 * @param {Number} [options.focusRange=0.1] - The focus range. Range is [0.0, 1.0].
	 * @param {Number} [options.focalLength=0.1] - Deprecated.
	 * @param {Number} [options.bokehScale=1.0] - The scale of the bokeh blur.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 */
	constructor(
		camera?: Camera,
		{
			blendFunction,
			worldFocusDistance,
			worldFocusRange,
			focusDistance,
			focalLength,
			focusRange,
			bokehScale,
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height
		}?: {
			blendFunction?: BlendFunction;
			worldFocusDistance?: number;
			worldFocusRange?: number;
			focusDistance?: number;
			focalLength?: number;
			focusRange?: number;
			bokehScale?: number;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
		}
	);

	/**
	 * This pass blurs the foreground CoC buffer to soften edges.
	 *
	 * @type {KawaseBlurPass}
	 */
	readonly blurPass: KawaseBlurPass;
	/**
	 * A target position that should be kept in focus. Set to `null` to disable auto focus.
	 *
	 * @type {Vector3}
	 */
	target: Vector3;
	set bokehScale(arg: number);
	/**
	 * The current bokeh scale.
	 *
	 * @type {Number}
	 */
	get bokehScale(): number;
	/**
	 * The circle of confusion material.
	 *
	 * @type {CircleOfConfusionMaterial}
	 */
	get circleOfConfusionMaterial(): CircleOfConfusionMaterial;
	/**
	 * Returns the circle of confusion material.
	 *
	 * @deprecated Use circleOfConfusionMaterial instead.
	 * @return {CircleOfConfusionMaterial} The material.
	 */
	getCircleOfConfusionMaterial(): CircleOfConfusionMaterial;
	/**
	 * Returns the pass that blurs the foreground CoC buffer to soften edges.
	 *
	 * @deprecated Use blurPass instead.
	 * @return {KawaseBlurPass} The blur pass.
	 */
	getBlurPass(): KawaseBlurPass;
	/**
	 * The resolution of this effect.
	 *
	 * @type {Resolution}
	 */
	get resolution(): Resolution;
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * Returns the current bokeh scale.
	 *
	 * @deprecated Use bokehScale instead.
	 * @return {Number} The scale.
	 */
	getBokehScale(): number;
	/**
	 * Sets the bokeh scale.
	 *
	 * @deprecated Use bokehScale instead.
	 * @param {Number} value - The scale.
	 */
	setBokehScale(value: number): void;
	/**
	 * Returns the current auto focus target.
	 *
	 * @deprecated Use target instead.
	 * @return {Vector3} The target.
	 */
	getTarget(): Vector3;
	/**
	 * Sets the auto focus target.
	 *
	 * @deprecated Use target instead.
	 * @param {Vector3} value - The target.
	 */
	setTarget(value: Vector3): void;
	/**
	 * Calculates the focus distance from the camera to the given position.
	 *
	 * @param {Vector3} target - The target.
	 * @return {Number} The normalized focus distance.
	 */
	calculateFocusDistance(target: Vector3): number;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A dot screen effect.
 */
export class DotScreenEffect extends Effect {

	/**
	 * Constructs a new dot screen effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.angle=1.57] - The angle of the dot pattern.
	 * @param {Number} [options.scale=1.0] - The scale of the dot pattern.
	 */
	constructor({
		blendFunction,
		angle,
		scale
	}?: {
		blendFunction?: BlendFunction;
		angle?: number;
		scale?: number;
	});

	set angle(arg: number);
	/**
	 * The angle.
	 *
	 * @type {Number}
	 */
	get angle(): number;
	/**
	 * Returns the pattern angle.
	 *
	 * @deprecated Use angle instead.
	 * @return {Number} The angle in radians.
	 */
	getAngle(): number;
	/**
	 * Sets the pattern angle.
	 *
	 * @deprecated Use angle instead.
	 * @param {Number} value - The angle in radians.
	 */
	setAngle(value: number): void;
	set scale(arg: number);
	/**
	 * The scale.
	 *
	 * @type {Number}
	 */
	get scale(): number;

}

/**
 * A gamma correction effect.
 *
 * @deprecated Set WebGLRenderer.outputEncoding to sRGBEncoding instead.
 */
export class GammaCorrectionEffect extends Effect {

	/**
	 * Constructs a new gamma correction effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.gamma=2.0] - The gamma factor.
	 */
	constructor({
		blendFunction,
		gamma
	}?: {
		blendFunction?: BlendFunction;
		gamma?: number;
	});

}

/**
 * A tilt shift effect.
 */
export class TiltShiftEffect extends Effect {

	/**
	 * Constructs a new tilt shift Effect
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
	 * @param {Number} [options.offset=0.0] - The relative offset of the focus area.
	 * @param {Number} [options.rotation=0.0] - The rotation of the focus area in radians.
	 * @param {Number} [options.focusArea=0.4] - The relative size of the focus area.
	 * @param {Number} [options.feather=0.3] - The softness of the focus area edges.
	 * @param {Number} [options.bias=0.06] - Deprecated.
	 * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 */
	constructor({
		blendFunction,
		offset,
		rotation,
		focusArea,
		feather,
		bias,
		kernelSize,
		resolutionScale,
		resolutionX,
		resolutionY
	}?: {
		blendFunction?: BlendFunction,
		offset?: number,
		rotation?: number,
		focusArea?: number,
		feather?: number,
		bias?: number,
		kernelSize?: KernelSize,
		resolutionScale?: number,
		resolutionX?: number,
		resolutionY?: number
	});

	/**
	 * A blur pass.
	 *
	 * @type {KawaseBlurPass}
	 */
	readonly blurPass: KawaseBlurPass;
	/**
	 * The resolution.
	 *
	 * @type {Resolution}
	 * @readonly
	 */
	get resolution(): Resolution;
	/**
	 * The rotation of the focus area in radians.
	 *
	 * @type {Number}
	 */
	get rotation(): number;
	set rotation(arg: number);
	/**
	 * The relative offset of the focus area.
	 *
	 * @type {Number}
	 */
	get offset(): number;
	set offset(arg: number);
	/**
	 * The relative size of the focus area.
	 *
	 * @type {Number}
	 */

	get focusArea(): number;
	set focusArea(arg: number);
	/**
	 * The softness of the focus area edges.
	 *
	 * @type {Number}
	 */
	get feather(): number;
	set feather(arg: number);
	/**
	 * A blend bias.
	 *
	 * @type {Number}
	 * @deprecated
	 */
	get bias(): number;
	set bias(arg: number);
}

/**
 * A glitch effect.
 *
 * This effect can be used in conjunction with the {@link ChromaticAberrationEffect}.
 *
 * Reference: https://github.com/staffantan/unityglitch
 */
export class GlitchEffect extends Effect {

	/**
	 * Constructs a new glitch effect.
	 *
	 * TODO Change ratio to 0.15.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Vector2} [options.chromaticAberrationOffset] - A chromatic aberration offset. If provided, the glitch effect will influence this offset.
	 * @param {Vector2} [options.delay] - The minimum and maximum delay between glitch activations in seconds.
	 * @param {Vector2} [options.duration] - The minimum and maximum duration of a glitch in seconds.
	 * @param {Vector2} [options.strength] - The strength of weak and strong glitches.
	 * @param {Texture} [options.perturbationMap] - A perturbation map. If none is provided, a noise texture will be created.
	 * @param {Number} [options.dtSize=64] - The size of the generated noise map. Will be ignored if a perturbation map is provided.
	 * @param {Number} [options.columns=0.05] - The scale of the blocky glitch columns.
	 * @param {Number} [options.ratio=0.85] - The threshold for strong glitches.
	 */
	constructor({
		blendFunction,
		chromaticAberrationOffset,
		delay,
		duration,
		strength,
		columns,
		ratio,
		perturbationMap,
		dtSize
	}?: {
		blendFunction?: BlendFunction;
		chromaticAberrationOffset?: Vector2;
		delay?: Vector2;
		duration?: Vector2;
		strength?: Vector2;
		perturbationMap?: Texture;
		dtSize?: number;
		columns?: number;
		ratio?: number;
	});

	set perturbationMap(arg: Texture);
	/**
	 * The perturbation map.
	 *
	 * @type {Texture}
	 */
	get perturbationMap(): Texture;
	/**
	 * The minimum and maximum delay between glitch activations in seconds.
	 *
	 * @type {Vector2}
	 * @deprecated Use minDelay and maxDelay instead.
	 */
	delay: Vector2;
	/**
	 * The minimum and maximum duration of a glitch in seconds.
	 *
	 * @type {Vector2}
	 * @deprecated Use minDuration and maxDuration instead.
	 */
	duration: Vector2;
	/**
	 * The strength of weak and strong glitches.
	 *
	 * @type {Vector2}
	 * @deprecated Use minStrength and maxStrength instead.
	 */
	strength: Vector2;
	/**
	 * The effect mode.
	 *
	 * @type {GlitchMode}
	 */
	mode: GlitchMode;
	/**
	 * The ratio between weak (0.0) and strong (1.0) glitches. Range is [0.0, 1.0].
	 *
	 * This value is currently being treated as a threshold for strong glitches, i.e. it's inverted.
	 *
	 * TODO Resolve inversion.
	 * @type {Number}
	 */
	ratio: number;
	/**
	 * The chromatic aberration offset.
	 *
	 * @type {Vector2}
	 */
	chromaticAberrationOffset: Vector2;
	/**
	 * Indicates whether the glitch effect is currently active.
	 *
	 * @type {Boolean}
	 */
	get active(): boolean;
	/**
	 * Indicates whether the glitch effect is currently active.
	 *
	 * @deprecated Use active instead.
	 * @return {Boolean} Whether the glitch effect is active.
	 */
	isActive(): boolean;
	set minDelay(arg: number);
	/**
	 * The minimum delay between glitch activations.
	 *
	 * @type {Number}
	 */
	get minDelay(): number;
	/**
	 * Returns the minimum delay between glitch activations.
	 *
	 * @deprecated Use minDelay instead.
	 * @return {Number} The minimum delay in seconds.
	 */
	getMinDelay(): number;
	/**
	 * Sets the minimum delay between glitch activations.
	 *
	 * @deprecated Use minDelay instead.
	 * @param {Number} value - The minimum delay in seconds.
	 */
	setMinDelay(value: number): void;
	set maxDelay(arg: number);
	/**
	 * The maximum delay between glitch activations.
	 *
	 * @type {Number}
	 */
	get maxDelay(): number;
	/**
	 * Returns the maximum delay between glitch activations.
	 *
	 * @deprecated Use maxDelay instead.
	 * @return {Number} The maximum delay in seconds.
	 */
	getMaxDelay(): number;
	/**
	 * Sets the maximum delay between glitch activations.
	 *
	 * @deprecated Use maxDelay instead.
	 * @param {Number} value - The maximum delay in seconds.
	 */
	setMaxDelay(value: number): void;
	set minDuration(arg: number);
	/**
	 * The minimum duration of sporadic glitches.
	 *
	 * @type {Number}
	 */
	get minDuration(): number;
	/**
	 * Returns the minimum duration of sporadic glitches.
	 *
	 * @deprecated Use minDuration instead.
	 * @return {Number} The minimum duration in seconds.
	 */
	getMinDuration(): number;
	/**
	 * Sets the minimum duration of sporadic glitches.
	 *
	 * @deprecated Use minDuration instead.
	 * @param {Number} value - The minimum duration in seconds.
	 */
	setMinDuration(value: number): void;
	set maxDuration(arg: number);
	/**
	 * The maximum duration of sporadic glitches.
	 *
	 * @type {Number}
	 */
	get maxDuration(): number;
	/**
	 * Returns the maximum duration of sporadic glitches.
	 *
	 * @deprecated Use maxDuration instead.
	 * @return {Number} The maximum duration in seconds.
	 */
	getMaxDuration(): number;
	/**
	 * Sets the maximum duration of sporadic glitches.
	 *
	 * @deprecated Use maxDuration instead.
	 * @param {Number} value - The maximum duration in seconds.
	 */
	setMaxDuration(value: number): void;
	set minStrength(arg: number);
	/**
	 * The strength of weak glitches.
	 *
	 * @type {Number}
	 */
	get minStrength(): number;
	/**
	 * Returns the strength of weak glitches.
	 *
	 * @deprecated Use minStrength instead.
	 * @return {Number} The strength.
	 */
	getMinStrength(): number;
	/**
	 * Sets the strength of weak glitches.
	 *
	 * @deprecated Use minStrength instead.
	 * @param {Number} value - The strength.
	 */
	setMinStrength(value: number): void;
	set maxStrength(arg: number);
	/**
	 * The strength of strong glitches.
	 *
	 * @type {Number}
	 */
	get maxStrength(): number;
	/**
	 * Returns the strength of strong glitches.
	 *
	 * @deprecated Use maxStrength instead.
	 * @return {Number} The strength.
	 */
	getMaxStrength(): number;
	/**
	 * Sets the strength of strong glitches.
	 *
	 * @deprecated Use maxStrength instead.
	 * @param {Number} value - The strength.
	 */
	setMaxStrength(value: number): void;
	/**
	 * Returns the current glitch mode.
	 *
	 * @deprecated Use mode instead.
	 * @return {GlitchMode} The mode.
	 */
	getMode(): GlitchMode;
	/**
	 * Sets the current glitch mode.
	 *
	 * @deprecated Use mode instead.
	 * @param {GlitchMode} value - The mode.
	 */
	setMode(value: GlitchMode): void;
	/**
	 * Returns the glitch ratio.
	 *
	 * @deprecated Use ratio instead.
	 * @return {Number} The ratio.
	 */
	getGlitchRatio(): number;
	/**
	 * Sets the ratio of weak (0.0) and strong (1.0) glitches.
	 *
	 * @deprecated Use ratio instead.
	 * @param {Number} value - The ratio. Range is [0.0, 1.0].
	 */
	setGlitchRatio(value: number): void;
	set columns(arg: number);
	/**
	 * The glitch column size.
	 *
	 * @type {Number}
	 */
	get columns(): number;
	/**
	 * Returns the glitch column size.
	 *
	 * @deprecated Use columns instead.
	 * @return {Number} The glitch column size.
	 */
	getGlitchColumns(): number;
	/**
	 * Sets the glitch column size.
	 *
	 * @deprecated Use columns instead.
	 * @param {Number} value - The glitch column size.
	 */
	setGlitchColumns(value: number): void;
	/**
	 * Returns the chromatic aberration offset.
	 *
	 * @deprecated Use chromaticAberrationOffset instead.
	 * @return {Vector2} The offset.
	 */
	getChromaticAberrationOffset(): Vector2;
	/**
	 * Sets the chromatic aberration offset.
	 *
	 * @deprecated Use chromaticAberrationOffset instead.
	 * @param {Vector2} value - The offset.
	 */
	setChromaticAberrationOffset(value: Vector2): void;
	/**
	 * Returns the current perturbation map.
	 *
	 * @deprecated Use perturbationMap instead.
	 * @return {Texture} The current perturbation map.
	 */
	getPerturbationMap(): Texture;
	/**
	 * Replaces the current perturbation map with the given one.
	 *
	 * The current map will be disposed if it was generated by this effect.
	 *
	 * @deprecated Use perturbationMap instead.
	 * @param {Texture} value - The new perturbation map.
	 */
	setPerturbationMap(value: Texture): void;
	/**
	 * Generates a perturbation map.
	 *
	 * @deprecated Use NoiseTexture instead.
	 * @param {Number} [value=64] - The texture size.
	 * @return {DataTexture} The perturbation map.
	 */
	generatePerturbationMap(value?: number): DataTexture;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Deletes generated resources.
	 */
	dispose(): void;

}

/**
 * A glitch mode enumeration.
 *
 * @type {Object}
 * @property {Number} DISABLED - No glitches.
 * @property {Number} SPORADIC - Sporadic glitches.
 * @property {Number} CONSTANT_MILD - Constant mild glitches.
 * @property {Number} CONSTANT_WILD - Constant wild glitches.
 */
export enum GlitchMode {
	DISABLED,
	SPORADIC,
	CONSTANT_MILD,
	CONSTANT_WILD,
}

/**
 * A god rays effect.
 */
export class GodRaysEffect extends Effect {

	/**
	 * Constructs a new god rays effect.
	 *
	 * @param {Camera} [camera] - The main camera.
	 * @param {Mesh|Points} [lightSource] - The light source. Must not write depth and has to be flagged as transparent.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
	 * @param {Number} [options.samples=60.0] - The number of samples per pixel.
	 * @param {Number} [options.density=0.96] - The density of the light rays.
	 * @param {Number} [options.decay=0.9] - An illumination decay factor.
	 * @param {Number} [options.weight=0.4] - A light ray weight factor.
	 * @param {Number} [options.exposure=0.6] - A constant attenuation coefficient.
	 * @param {Number} [options.clampMax=1.0] - An upper bound for the saturation of the overall effect.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 * @param {KernelSize} [options.kernelSize=KernelSize.SMALL] - The blur kernel size. Has no effect if blur is disabled.
	 * @param {Boolean} [options.blur=true] - Whether the god rays should be blurred to reduce artifacts.
	 */
	constructor(
		camera?: Camera,
		lightSource?: Mesh | Points,
		{
			blendFunction,
			samples,
			density,
			decay,
			weight,
			exposure,
			clampMax,
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height,
			kernelSize,
			blur
		}?: {
			blendFunction?: BlendFunction;
			samples?: number;
			density?: number;
			decay?: number;
			weight?: number;
			exposure?: number;
			clampMax?: number;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
			kernelSize?: KernelSize;
			blur?: boolean;
		}
	);

	/**
	 * A blur pass that reduces aliasing artifacts and makes the light softer.
	 *
	 * This pass can be disabled to improve performance.
	 *
	 * @type {KawaseBlurPass}
	 */
	blurPass: KawaseBlurPass;
	/**
	 * Returns the blur pass that reduces aliasing artifacts and makes the light softer.
	 *
	 * @deprecated Use blurPass instead.
	 * @return {KawaseBlurPass} The blur pass.
	 */
	getBlurPass(): KawaseBlurPass;
	/**
	 * Sets the light source.
	 *
	 * @type {Mesh|Points}
	 */
	get lightSource(): Mesh | Points | null;
	set lightSource(value: Mesh | Points | null);
	/**
	 * A texture that contains the intermediate result of this effect.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	/**
	 * The depth mask material.
	 *
	 * @type {DepthMaskMaterial}
	 */
	get depthMaskMaterial(): DepthMaskMaterial;
	/**
	 * Returns the god rays texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * The internal god rays material.
	 *
	 * @type {GodRaysMaterial}
	 */
	get godRaysMaterial(): GodRaysMaterial;
	/**
	 * Returns the god rays material.
	 *
	 * @deprecated Use godRaysMaterial instead.
	 * @return {GodRaysMaterial} The material.
	 */
	getGodRaysMaterial(): GodRaysMaterial;
	/**
	 * The resolution of this effect.
	 *
	 * @type {Resolution}
	 */
	get resolution(): Resolution;
	/**
	 * Returns the resolution of this effect.
	 *
	 * @deprecated Use resolution instead.
	 * @return {GodRaysMaterial} The material.
	 */
	getResolution(): GodRaysMaterial;
	set width(arg: number);
	/**
	 * The current width of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.width instead.
	 */
	get width(): number;
	set height(arg: number);
	/**
	 * The current height of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.height instead.
	 */
	get height(): number;
	set dithering(arg: boolean);
	/**
	 * Indicates whether dithering is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated
	 */
	get dithering(): boolean;
	set blur(arg: boolean);
	/**
	 * Indicates whether the god rays should be blurred to reduce artifacts.
	 *
	 * @type {Boolean}
	 * @deprecated Use blurPass.enabled instead.
	 */
	get blur(): boolean;
	set kernelSize(arg: KernelSize);
	/**
	 * The blur kernel size.
	 *
	 * @type {KernelSize}
	 * @deprecated Use blurPass.kernelSize instead.
	 */
	get kernelSize(): KernelSize;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * A higher sample count improves quality at the cost of performance.
	 *
	 * @type {Number}
	 * @deprecated Use godRaysMaterial.samples instead.
	 */
	set samples(arg: number);
	/**
	 * The number of samples per pixel.
	 *
	 * @type {Number}
	 * @deprecated Use godRaysMaterial.samples instead.
	 */
	get samples(): number;
	/**
	 * Sets the depth texture.
	 *
	 * @param {Texture} depthTexture - A depth texture.
	 * @param {Number} [depthPacking=BasicDepthPacking] - The depth packing.
	 */
	setDepthTexture(depthTexture: Texture, depthPacking?: number): void;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A grid effect.
 */
export class GridEffect extends Effect {

	/**
	 * Constructs a new grid effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.OVERLAY] - The blend function of this effect.
	 * @param {Number} [options.scale=1.0] - The scale of the grid pattern.
	 * @param {Number} [options.lineWidth=0.0] - The line width of the grid pattern.
	 */
	constructor({
		blendFunction,
		scale,
		lineWidth
	}?: {
		blendFunction?: BlendFunction;
		scale?: number;
		lineWidth?: number;
	});

	set scale(arg: number);
	/**
	 * The scale.
	 *
	 * @type {Number}
	 */
	get scale(): number;
	set lineWidth(arg: number);
	/**
	 * The line width.
	 *
	 * @type {Number}
	 */
	get lineWidth(): number;
	/**
	 * Returns the current grid scale.
	 *
	 * @deprecated Use scale instead.
	 * @return {Number} The grid scale.
	 */
	getScale(): number;
	/**
	 * Sets the grid scale.
	 *
	 * @deprecated Use scale instead.
	 * @param {Number} value - The new grid scale.
	 */
	setScale(value: number): void;
	/**
	 * Returns the current grid line width.
	 *
	 * @deprecated Use lineWidth instead.
	 * @return {Number} The grid line width.
	 */
	getLineWidth(): number;
	/**
	 * Sets the grid line width.
	 *
	 * @deprecated Use lineWidth instead.
	 * @param {Number} value - The new grid line width.
	 */
	setLineWidth(value: number): void;
	/**
	 * Updates the size of this pass.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * A hue/saturation effect.
 *
 * Reference: https://github.com/evanw/glfx.js
 */
export class HueSaturationEffect extends Effect {

	/**
	 * Constructs a new hue/saturation effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.hue=0.0] - The hue in radians.
	 * @param {Number} [options.saturation=0.0] - The saturation factor, ranging from -1 to 1, where 0 means no change.
	 */
	constructor({
		blendFunction,
		hue,
		saturation
	}?: {
		blendFunction?: BlendFunction;
		hue?: number;
		saturation?: number;
	});

	set hue(arg: number);
	/**
	 * The hue.
	 *
	 * @type {Number}
	 */
	get hue(): number;
	set saturation(arg: number);
	/**
	 * The saturation.
	 *
	 * @type {Number}
	 */
	get saturation(): number;
	/**
	 * Returns the saturation.
	 *
	 * @deprecated Use saturation instead.
	 * @return {Number} The saturation.
	 */
	getSaturation(): number;
	/**
	 * Sets the saturation.
	 *
	 * @deprecated Use saturation instead.
	 * @param {Number} value - The saturation.
	 */
	setSaturation(value: number): void;
	/**
	 * Returns the hue.
	 *
	 * @deprecated Use hue instead.
	 * @return {Number} The hue in radians.
	 */
	getHue(): number;
	/**
	 * Sets the hue.
	 *
	 * @deprecated Use hue instead.
	 * @param {Number} value - The hue in radians.
	 */
	setHue(value: number): void;

}

/**
 * A 1D LUT effect.
 */
export class LUT1DEffect extends Effect {

	/**
	 * Constructs a new color grading effect.
	 *
	 * @param {Texture} lut - The lookup texture.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SET] - The blend function of this effect.
	 */
	constructor(
		lut: Texture,
		{
			blendFunction
		}?: {
			blendFunction?: BlendFunction;
		}
	);

}
/**
 * A LUT effect.
 *
 * The tetrahedral interpolation algorithm was inspired by an implementation from OpenColorIO which is licensed under
 * the BSD 3-Clause License.
 *
 * The manual trilinear interpolation algorithm is based on an implementation by Garret Johnson which is licensed under
 * the MIT License.
 *
 * References:
 * https://developer.nvidia.com/gpugems/gpugems2/part-iii-high-quality-rendering/chapter-24-using-lookup-tables-accelerate-color
 * https://www.nvidia.com/content/GTC/posters/2010/V01-Real-Time-Color-Space-Conversion-for-High-Resolution-Video.pdf
 * https://github.com/AcademySoftwareFoundation/OpenColorIO/blob/master/src/OpenColorIO/ops/lut3d/
 * https://github.com/gkjohnson/threejs-sandbox/tree/master/3d-lut
 */
export class LUT3DEffect extends Effect {

	/**
	 * Constructs a new color grading effect.
	 *
	 * @param {Texture} lut - The lookup texture.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SET] - The blend function of this effect.
	 * @param {Boolean} [options.tetrahedralInterpolation=false] - Enables or disables tetrahedral interpolation.
	 * @param {TextureEncoding} [options.inputEncoding=sRGBEncoding] - Deprecated.
	 * @param {ColorSpace} [options.inputColorSpace=SRGBColorSpace] - The input color space.
	 */
	constructor(
		lut: Texture,
		{
			blendFunction,
			tetrahedralInterpolation,
			inputEncoding,
			inputColorSpace
		}?: {
			blendFunction?: BlendFunction;
			tetrahedralInterpolation?: boolean;
			inputEncoding?: TextureEncoding;
			inputColorSpace?: ColorSpace;
		}
	);

	/**
	 * Indicates whether tetrahedral interpolation is enabled. Requires a 3D LUT, disabled by default.
	 *
	 * Tetrahedral interpolation produces highly accurate results but is slower than hardware interpolation.
	 *
	 * @type {Boolean}
	 */
	get tetrahedralInterpolation(): boolean;
	set tetrahedralInterpolation(arg: boolean);
	/**
	 * The input encoding. Default is `sRGBEncoding`.
	 *
	 * Set this to `LinearEncoding` if your LUT expects linear color input.
	 *
	 * @deprecated Use inputColorSpace instead.
	 * @type {TextureEncoding}
	 */
	get inputEncoding(): TextureEncoding;
	set inputEncoding(arg: TextureEncoding);
	/**
	 * The LUT.
	 *
	 * @type {Texture}
	 */
	get lut(): Texture;
	set lut(arg: Texture);
	/**
	 * Returns the output encoding.
	 *
	 * @deprecated
	 * @return {TextureEncoding} The encoding.
	 */
	getOutputEncoding(): TextureEncoding;
	/**
	 * Returns the input encoding.
	 *
	 * @deprecated Use inputEncoding instead.
	 * @return {TextureEncoding} The encoding.
	 */
	getInputEncoding(): TextureEncoding;
	/**
	 * Sets the input encoding.
	 *
	 * @deprecated Use inputEncoding instead.
	 * @param {TextureEncoding} value - The encoding.
	 */
	setInputEncoding(value: TextureEncoding): void;
	/**
	 * Returns the current LUT.
	 *
	 * @deprecated Use lut instead.
	 * @return {Texture} The LUT.
	 */
	getLUT(): Texture;
	/**
	 * Sets the LUT.
	 *
	 * @deprecated Use lut instead.
	 * @param {Texture} value - The LUT.
	 */
	setLUT(value: Texture): void;
	/**
	 * Enables or disables tetrahedral interpolation.
	 *
	 * @deprecated Use tetrahedralInterpolation instead.
	 * @param {Boolean} value - Whether tetrahedral interpolation should be enabled.
	 */
	setTetrahedralInterpolationEnabled(value: boolean): void;

}

/**
 * A noise effect.
 */
export class NoiseEffect extends Effect {

	/**
	 * Constructs a new noise effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
	 * @param {Boolean} [options.premultiply=false] - Whether the noise should be multiplied with the input colors prior to blending.
	 */
	constructor({
		blendFunction,
		premultiply
	}?: {
		blendFunction?: BlendFunction;
		premultiply?: boolean;
	});

	set premultiply(arg: boolean);
	/**
	 * Indicates whether noise will be multiplied with the input colors prior to blending.
	 *
	 * @type {Boolean}
	 */
	get premultiply(): boolean;
	/**
	 * Indicates whether noise will be multiplied with the input colors prior to blending.
	 *
	 * @deprecated Use premultiply instead.
	 * @return {Boolean} Whether noise is premultiplied.
	 */
	isPremultiplied(): boolean;
	/**
	 * Controls whether noise should be multiplied with the input colors prior to blending.
	 *
	 * @deprecated Use premultiply instead.
	 * @param {Boolean} value - Whether noise should be premultiplied.
	 */
	setPremultiplied(value: boolean): void;

}

/**
 * An outline effect.
 */
export class OutlineEffect extends Effect {

	/**
	 * Constructs a new outline effect.
	 *
	 * @param {Scene} scene - The main scene.
	 * @param {Camera} camera - The main camera.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function. Use `BlendFunction.ALPHA` for dark outlines.
	 * @param {Texture} [options.patternTexture=null] - A pattern texture.
	 * @param {Number} [options.patternScale=1.0] - The pattern scale.
	 * @param {Number} [options.edgeStrength=1.0] - The edge strength.
	 * @param {Number} [options.pulseSpeed=0.0] - The pulse speed. A value of zero disables the pulse effect.
	 * @param {Number} [options.visibleEdgeColor=0xffffff] - The color of visible edges.
	 * @param {Number} [options.hiddenEdgeColor=0x22090a] - The color of hidden edges.
	 * @param {KernelSize} [options.kernelSize=KernelSize.VERY_SMALL] - The blur kernel size.
	 * @param {Boolean} [options.blur=false] - Whether the outline should be blurred.
	 * @param {Boolean} [options.xRay=true] - Whether occluded parts of selected objects should be visible.
	 * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
	 * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 */
	constructor(
		scene?: Scene,
		camera?: Camera,
		{
			blendFunction,
			patternTexture,
			patternScale,
			edgeStrength,
			pulseSpeed,
			visibleEdgeColor,
			hiddenEdgeColor,
			multisampling,
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height,
			kernelSize,
			blur,
			xRay
		}?: {
			blendFunction?: BlendFunction;
			patternTexture?: Texture;
			patternScale?: number;
			edgeStrength?: number;
			pulseSpeed?: number;
			visibleEdgeColor?: number;
			hiddenEdgeColor?: number;
			multisampling?: number;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
			kernelSize?: KernelSize;
			blur?: boolean;
			xRay?: boolean;
		}
	);

	set patternTexture(arg: Texture);
	/**
	 * The pattern texture. Set to `null` to disable.
	 *
	 * @type {Texture}
	 */
	get patternTexture(): Texture;
	set xRay(arg: boolean);
	/**
	 * Indicates whether X-ray mode is enabled.
	 *
	 * @type {Boolean}
	 */
	get xRay(): boolean;
	/**
	 * A blur pass.
	 *
	 * @type {KawaseBlurPass}
	 */
	blurPass: KawaseBlurPass;
	/**
	 * A selection of objects that will be outlined.
	 *
	 * The default layer of this selection is 10.
	 *
	 * @type {Selection}
	 */
	selection: Selection;
	/**
	 * The pulse speed. Set to 0 to disable.
	 *
	 * @type {Number}
	 */
	pulseSpeed: number;
	/**
	 * The resolution of this effect.
	 *
	 * @type {Resolution}
	 */
	get resolution(): Resolution;
	/**
	 * Returns the resolution.
	 *
	 * @return {Resizer} The resolution.
	 */
	getResolution(): Resizer;
	set patternScale(arg: number);
	/**
	 * The pattern scale.
	 *
	 * @type {Number}
	 */
	get patternScale(): number;
	set edgeStrength(arg: number);
	/**
	 * The edge strength.
	 *
	 * @type {Number}
	 */
	get edgeStrength(): number;
	set visibleEdgeColor(arg: Color);
	/**
	 * The visible edge color.
	 *
	 * @type {Color}
	 */
	get visibleEdgeColor(): Color;
	set hiddenEdgeColor(arg: Color);
	/**
	 * The hidden edge color.
	 *
	 * @type {Color}
	 */
	get hiddenEdgeColor(): Color;
	/**
	 * The amount of MSAA samples.
	 *
	 * Requires WebGL 2. Set to zero to disable multisampling.
	 *
	 * @experimental Requires three >= r138.
	 * @type {Number}
	 */
	get multisampling(): number;
	set multisampling(arg: number);
	/**
	 * Returns the blur pass.
	 *
	 * @deprecated Use blurPass instead.
	 * @return {KawaseBlurPass} The blur pass.
	 */
	getBlurPass(): KawaseBlurPass;
	/**
	 * Returns the selection.
	 *
	 * @deprecated Use selection instead.
	 * @return {Selection} The selection.
	 */
	getSelection(): Selection;
	/**
	 * Returns the pulse speed.
	 *
	 * @deprecated Use pulseSpeed instead.
	 * @return {Number} The speed.
	 */
	getPulseSpeed(): number;
	/**
	 * Sets the pulse speed. Set to zero to disable.
	 *
	 * @deprecated Use pulseSpeed instead.
	 * @param {Number} value - The speed.
	 */
	setPulseSpeed(value: number): void;
	set width(arg: number);
	/**
	 * The current width of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.width instead.
	 */
	get width(): number;
	set height(arg: number);
	/**
	 * The current height of the internal render targets.
	 *
	 * @type {Number}
	 * @deprecated Use resolution.height instead.
	 */
	get height(): number;
	set selectionLayer(arg: number);
	/**
	 * The selection layer.
	 *
	 * @type {Number}
	 * @deprecated Use selection.layer instead.
	 */
	get selectionLayer(): number;
	set dithering(arg: boolean);
	/**
	 * Indicates whether dithering is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated
	 */
	get dithering(): boolean;
	set kernelSize(arg: KernelSize);
	/**
	 * The blur kernel size.
	 *
	 * @type {KernelSize}
	 * @deprecated Use blurPass.kernelSize instead.
	 */
	get kernelSize(): KernelSize;
	set blur(arg: boolean);
	/**
	 * Indicates whether the outlines should be blurred.
	 *
	 * @type {Boolean}
	 * @deprecated Use blurPass.enabled instead.
	 */
	get blur(): boolean;
	/**
	 * Indicates whether X-ray mode is enabled.
	 *
	 * @deprecated Use xRay instead.
	 * @return {Boolean} Whether X-ray mode is enabled.
	 */
	isXRayEnabled(): boolean;
	/**
	 * Enables or disables X-ray outlines.
	 *
	 * @deprecated Use xRay instead.
	 * @param {Boolean} value - Whether X-ray should be enabled.
	 */
	setXRayEnabled(value: boolean): void;
	/**
	 * Sets the pattern texture.
	 *
	 * @deprecated Use patternTexture instead.
	 * @param {Texture} value - The new texture.
	 */
	setPatternTexture(value: Texture): void;
	/**
	 * Returns the current resolution scale.
	 *
	 * @return {Number} The resolution scale.
	 * @deprecated Use resolution instead.
	 */
	getResolutionScale(): number;
	/**
	 * Sets the resolution scale.
	 *
	 * @param {Number} scale - The new resolution scale.
	 * @deprecated Use resolution instead.
	 */
	setResolutionScale(scale: number): void;
	/**
	 * Clears the current selection and selects a list of objects.
	 *
	 * @param {Object3D[]} objects - The objects that should be outlined. This array will be copied.
	 * @return {OutlineEffect} This pass.
	 * @deprecated Use selection.set() instead.
	 */
	setSelection(objects: Object3D[]): OutlineEffect;
	/**
	 * Clears the list of selected objects.
	 *
	 * @return {OutlineEffect} This pass.
	 * @deprecated Use selection.clear() instead.
	 */
	clearSelection(): OutlineEffect;
	/**
	 * Selects an object.
	 *
	 * @param {Object3D} object - The object that should be outlined.
	 * @return {OutlineEffect} This pass.
	 * @deprecated Use selection.add() instead.
	 */
	selectObject(object: Object3D): OutlineEffect;
	/**
	 * Deselects an object.
	 *
	 * @param {Object3D} object - The object that should no longer be outlined.
	 * @return {OutlineEffect} This pass.
	 * @deprecated Use selection.delete() instead.
	 */
	deselectObject(object: Object3D): OutlineEffect;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A pixelation effect.
 *
 * Warning: This effect cannot be merged with convolution effects.
 */
export class PixelationEffect extends Effect {

	/**
	 * Constructs a new pixelation effect.
	 *
	 * @param {Number} [granularity=30.0] - The pixel granularity.
	 */
	constructor(granularity?: number);
	set granularity(arg: number);
	/**
	 * The pixel granularity.
	 *
	 * A higher value yields coarser visuals.
	 *
	 * @type {Number}
	 */
	get granularity(): number;
	/**
	 * Returns the pixel granularity.
	 *
	 * @deprecated Use granularity instead.
	 * @return {Number} The granularity.
	 */
	getGranularity(): number;
	/**
	 * Sets the pixel granularity.
	 *
	 * @deprecated Use granularity instead.
	 * @param {Number} value - The new granularity.
	 */
	setGranularity(value: number): void;
	/**
	 * Updates the granularity.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

}

/**
 * Depth of Field shader v2.4.
 *
 * Yields more realistic results but is also more demanding.
 *
 * Original shader code by Martins Upitis:
 *	http://blenderartists.org/forum/showthread.php?237488-GLSL-depth-of-field-with-bokeh-v2-4-(update)
 *
 * @deprecated Use DepthOfFieldEffect instead.
 */
export class RealisticBokehEffect extends Effect {

	/**
	 * Constructs a new bokeh effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.focus=1.0] - The focus distance in world units.
	 * @param {Number} [options.focalLength=24.0] - The focal length of the main camera.
	 * @param {Number} [options.fStop=0.9] - The ratio of the lens focal length to the diameter of the entrance pupil (aperture).
	 * @param {Number} [options.luminanceThreshold=0.5] - A luminance threshold.
	 * @param {Number} [options.luminanceGain=2.0] - A luminance gain factor.
	 * @param {Number} [options.bias=0.5] - A blur bias.
	 * @param {Number} [options.fringe=0.7] - A blur offset.
	 * @param {Number} [options.maxBlur=1.0] - The maximum blur strength.
	 * @param {Boolean} [options.rings=3] - The number of blur iterations.
	 * @param {Boolean} [options.samples=2] - The amount of samples taken per ring.
	 * @param {Boolean} [options.showFocus=false] - Whether the focal point should be highlighted. Useful for debugging.
	 * @param {Boolean} [options.manualDoF=false] - Enables manual control over the depth of field.
	 * @param {Boolean} [options.pentagon=false] - Enables pentagonal blur shapes. Requires a high number of rings and samples.
	 */
	constructor({
		blendFunction,
		focus,
		focalLength,
		fStop,
		luminanceThreshold,
		luminanceGain,
		bias,
		fringe,
		maxBlur,
		rings,
		samples,
		showFocus,
		manualDoF,
		pentagon
	}?: {
		blendFunction?: BlendFunction;
		focus?: number;
		focalLength?: number;
		fStop?: number;
		luminanceThreshold?: number;
		luminanceGain?: number;
		bias?: number;
		fringe?: number;
		maxBlur?: number;
		rings?: boolean;
		samples?: boolean;
		showFocus?: boolean;
		manualDoF?: boolean;
		pentagon?: boolean;
	});

	set rings(arg: number);
	/**
	 * The amount of blur iterations.
	 *
	 * @type {Number}
	 */
	get rings(): number;
	set samples(arg: number);
	/**
	 * The amount of blur samples per ring.
	 *
	 * @type {Number}
	 */
	get samples(): number;
	set showFocus(arg: boolean);
	/**
	 * Indicates whether the focal point will be highlighted.
	 *
	 * @type {Boolean}
	 */
	get showFocus(): boolean;
	set manualDoF(arg: boolean);
	/**
	 * Indicates whether the Depth of Field should be calculated manually.
	 *
	 * If enabled, the Depth of Field can be adjusted via the `dof` uniform.
	 *
	 * @type {Boolean}
	 */
	get manualDoF(): boolean;
	set pentagon(arg: boolean);
	/**
	 * Indicates whether the blur shape should be pentagonal.
	 *
	 * @type {Boolean}
	 */
	get pentagon(): boolean;

}

/**
 * A scanline effect.
 *
 * Based on an implementation by Georg 'Leviathan' Steinrohder (CC BY 3.0):
 * http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
 */
export class ScanlineEffect extends Effect {

	/**
	 * Constructs a new scanline effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.OVERLAY] - The blend function of this effect.
	 * @param {Number} [options.density=1.25] - The scanline density.
	 */
	constructor({
		blendFunction,
		density
	}?: {
		blendFunction?: BlendFunction;
		density?: number;
	});

	set density(arg: number);
	/**
	 * The scanline density.
	 *
	 * @type {Number}
	 */
	get density(): number;
	/**
	 * Returns the current scanline density.
	 *
	 * @deprecated Use density instead.
	 * @return {Number} The scanline density.
	 */
	getDensity(): number;
	/**
	 * Sets the scanline density.
	 *
	 * @deprecated Use density instead.
	 * @param {Number} value - The new scanline density.
	 */
	setDensity(value: number): void;
	/**
	 * Updates the size of this pass.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * The scanline scroll speed. Default is 0 (disabled).
	 *
	 * @type {Number}
	 */
	get scrollSpeed(): number;
	set scrollSpeed(value: number);

}

/**
 * A selective bloom effect.
 *
 * This effect applies bloom to selected objects only.
 */
export class SelectiveBloomEffect extends BloomEffect {

	/**
	 * Constructs a new selective bloom effect.
	 *
	 * @param {Scene} scene - The main scene.
	 * @param {Camera} camera - The main camera.
	 * @param {BloomEffectOptions} [options] - The options. See {@link BloomEffect} for details.
	 */
	constructor(scene?: Scene, camera?: Camera, options?: BloomEffectOptions);
	/**
	 * A selection of objects.
	 *
	 * The default layer of this selection is 11.
	 *
	 * @type {Selection}
	 */
	selection: Selection;
	/**
	 * Returns the selection.
	 *
	 * @deprecated Use selection instead.
	 * @return {Selection} The selection.
	 */
	getSelection(): Selection;
	set inverted(arg: boolean);
	/**
	 * Indicates whether the selection should be considered inverted.
	 *
	 * @type {Boolean}
	 */
	get inverted(): boolean;
	/**
	 * Indicates whether the mask is inverted.
	 *
	 * @deprecated Use inverted instead.
	 * @return {Boolean} Whether the mask is inverted.
	 */
	isInverted(): boolean;
	/**
	 * Enables or disable mask inversion.
	 *
	 * @deprecated Use inverted instead.
	 * @param {Boolean} value - Whether the mask should be inverted.
	 */
	setInverted(value: boolean): void;
	set ignoreBackground(arg: boolean);
	/**
	 * Indicates whether the background colors will be ignored.
	 *
	 * @type {Boolean}
	 */
	get ignoreBackground(): boolean;
	/**
	 * Indicates whether the background is disabled.
	 *
	 * @deprecated Use ignoreBackground instead.
	 * @return {Boolean} Whether the background is disabled.
	 */
	isBackgroundDisabled(): boolean;
	/**
	 * Enables or disables the background.
	 *
	 * @deprecated Use ignoreBackground instead.
	 * @param {Boolean} value - Whether the background should be disabled.
	 */
	setBackgroundDisabled(value: boolean): void;
	/**
	 * Sets the depth texture.
	 *
	 * @param {Texture} depthTexture - A depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
	 */
	setDepthTexture(
		depthTexture: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;

	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A sepia effect.
 */
export class SepiaEffect extends Effect {

	/**
	 * Constructs a new sepia effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Number} [options.intensity=1.0] - The intensity of the effect.
	 */
	constructor({
		blendFunction,
		intensity
	}?: {
		blendFunction?: BlendFunction;
		intensity?: number;
	});

	set intensity(arg: number);
	/**
	 * The intensity.
	 *
	 * @deprecated Use blendMode.opacity instead.
	 * @type {Number}
	 */
	get intensity(): number;
	/**
	 * Returns the current sepia intensity.
	 *
	 * @deprecated Use blendMode.opacity instead.
	 * @return {Number} The intensity.
	 */
	getIntensity(): number;
	/**
	 * Sets the sepia intensity.
	 *
	 * @deprecated Use blendMode.opacity instead.
	 * @param {Number} value - The intensity.
	 */
	setIntensity(value: number): void;

}

/**
 * A shock wave effect.
 *
 * Based on a Gist by Jean-Philippe Sarda:
 *	https://gist.github.com/jpsarda/33cea67a9f2ecb0a0eda
 */
export class ShockWaveEffect extends Effect {

	/**
	 * Constructs a new shock wave effect.
	 *
	 * @param {Camera} camera - The main camera.
	 * @param {Vector3} [position] - The world position of the shock wave.
	 * @param {Object} [options] - The options.
	 * @param {Number} [options.speed=2.0] - The animation speed.
	 * @param {Number} [options.maxRadius=1.0] - The extent of the shock wave.
	 * @param {Number} [options.waveSize=0.2] - The wave size.
	 * @param {Number} [options.amplitude=0.05] - The distortion amplitude.
	 */
	constructor(
		camera?: Camera,
		position?: Vector3,
		{
			speed,
			maxRadius,
			waveSize,
			amplitude
		}?: {
			speed?: number;
			maxRadius?: number;
			waveSize?: number;
			amplitude?: number;
		}
	);

	/**
	 * The position of the shock wave.
	 *
	 * @type {Vector3}
	 */
	position: Vector3;
	/**
	 * The speed of the shock wave animation.
	 *
	 * @type {Number}
	 */
	speed: number;
	set amplitude(arg: number);
	/**
	 * The amplitude.
	 *
	 * @type {Number}
	 */
	get amplitude(): number;
	set waveSize(arg: number);
	/**
	 * The wave size.
	 *
	 * @type {Number}
	 */
	get waveSize(): number;
	set maxRadius(arg: number);
	/**
	 * The maximum radius.
	 *
	 * @type {Number}
	 */
	get maxRadius(): number;
	set epicenter(arg: Vector3);
	/**
	 * The position of the shock wave.
	 *
	 * @type {Vector3}
	 * @deprecated Use position instead.
	 */
	get epicenter(): Vector3;
	/**
	 * Returns the position of the shock wave.
	 *
	 * @deprecated Use position instead.
	 * @return {Vector3} The position.
	 */
	getPosition(): Vector3;
	/**
	 * Sets the position of the shock wave.
	 *
	 * @deprecated Use position instead.
	 * @param {Vector3} value - The position.
	 */
	setPosition(value: Vector3): void;
	/**
	 * Returns the speed of the shock wave.
	 *
	 * @deprecated Use speed instead.
	 * @return {Number} The speed.
	 */
	getSpeed(): number;
	/**
	 * Sets the speed of the shock wave.
	 *
	 * @deprecated Use speed instead.
	 * @param {Number} value - The speed.
	 */
	setSpeed(value: number): void;
	/**
	 * Emits the shock wave.
	 */
	explode(): void;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [delta] - The time between the last frame and the current one in seconds.
	 */

	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		delta: number
	): void;

}

/**
 * NVIDIA FXAA 3.11 by Timothy Lottes:
 * https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
 *
 * Based on an implementation by Simon Rodriguez:
 * https://github.com/kosua20/Rendu/blob/master/resources/common/shaders/screens/fxaa.frag
 */
export class FXAAEffect extends Effect {

	/**
	 * Constructs a new FXAA effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
	 */
	constructor({
		blendFunction
	}?: {
		blendFunction?: BlendFunction
	});

	/**
	 * The minimum edge detection threshold. Range is [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get minEdgeThreshold(): number;
	set minEdgeThreshold(arg: number);

	/**
	 * The maximum edge detection threshold. Range is [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get maxEdgeThreshold(): number;
	set maxEdgeThreshold(arg: number);

	/**
	 * The subpixel blend quality. Range is [0.0, 1.0].
	 *
	 * @type {Number}
	 */
	get subpixelQuality(): number;
	set subpixelQuality(arg: number);

	/**
	 * The maximum amount of edge detection samples.
	 *
	 * @type {Number}
	 */
	get samples(): number;
	set samples(arg: number);

}

/**
 * Subpixel Morphological Antialiasing (SMAA).
 *
 * https://github.com/iryoku/smaa/releases/tag/v2.8
 */
export class SMAAEffect extends Effect {

	/**
	 * The SMAA search image, encoded as a base64 data URL.
	 *
	 * @type {String}
	 * @deprecated
	 */
	static get searchImageDataURL(): string;
	/**
	 * The SMAA area image, encoded as a base64 data URL.
	 *
	 * @type {String}
	 * @deprecated
	 */
	static get areaImageDataURL(): string;
	/**
	 * Constructs a new SMAA effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {SMAAPreset} [options.preset=SMAAPreset.MEDIUM] - The quality preset.
	 * @param {EdgeDetectionMode} [options.edgeDetectionMode=EdgeDetectionMode.COLOR] - The edge detection mode.
	 * @param {PredicationMode} [options.predicationMode=PredicationMode.DISABLED] - The predication mode.
	 */
	constructor({
		preset,
		edgeDetectionMode,
		predicationMode
	}?: {
		preset?: SMAAPreset;
		edgeDetectionMode?: EdgeDetectionMode;
		predicationMode?: PredicationMode;
	});

	/**
	 * The edges texture.
	 *
	 * @type {Texture}
	 */
	get edgesTexture(): Texture;
	/**
	 * Returns the edges texture.
	 *
	 * @deprecated Use edgesTexture instead.
	 * @return {Texture} The texture.
	 */
	getEdgesTexture(): Texture;
	/**
	 * The edge weights texture.
	 *
	 * @type {Texture}
	 */
	get weightsTexture(): Texture;
	/**
	 * Returns the edge weights texture.
	 *
	 * @deprecated Use weightsTexture instead.
	 * @return {Texture} The texture.
	 */
	getWeightsTexture(): Texture;
	/**
	 * The edge detection material.
	 *
	 * @type {EdgeDetectionMaterial}
	 */
	get edgeDetectionMaterial(): EdgeDetectionMaterial;
	/**
	 * The edge detection material.
	 *
	 * @type {EdgeDetectionMaterial}
	 * @deprecated Use edgeDetectionMaterial instead.
	 */
	get colorEdgesMaterial(): EdgeDetectionMaterial;
	/**
	 * Returns the edge detection material.
	 *
	 * @deprecated Use edgeDetectionMaterial instead.
	 * @return {EdgeDetectionMaterial} The material.
	 */
	getEdgeDetectionMaterial(): EdgeDetectionMaterial;
	/**
	 * The edge weights material.
	 *
	 * @type {SMAAWeightsMaterial}
	 */
	get weightsMaterial(): SMAAWeightsMaterial;
	/**
	 * Returns the edge weights material.
	 *
	 * @deprecated Use weightsMaterial instead.
	 * @return {SMAAWeightsMaterial} The material.
	 */
	getWeightsMaterial(): SMAAWeightsMaterial;
	/**
	 * Sets the edge detection sensitivity.
	 *
	 * See {@link EdgeDetectionMaterial#setEdgeDetectionThreshold} for more details.
	 *
	 * @deprecated Use edgeDetectionMaterial instead.
	 * @param {Number} threshold - The edge detection sensitivity. Range: [0.05, 0.5].
	 */
	setEdgeDetectionThreshold(threshold: number): void;
	/**
	 * Sets the maximum amount of horizontal/vertical search steps.
	 *
	 * See {@link SMAAWeightsMaterial#setOrthogonalSearchSteps} for more details.
	 *
	 * @deprecated Use weightsMaterial instead.
	 * @param {Number} steps - The search steps. Range: [0, 112].
	 */
	setOrthogonalSearchSteps(steps: number): void;
	/**
	 * Applies the given quality preset.
	 *
	 * @param {SMAAPreset} preset - The preset.
	 */
	applyPreset(preset: SMAAPreset): void;
	/**
	 * Sets the depth texture.
	 *
	 * @param {Texture} depthTexture - A depth texture.
	 * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
	 */
	setDepthTexture(
		depthTexture: Texture,
		depthPacking?: DepthPackingStrategies
	): void;

	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Updates the size of internal render targets.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * Deletes internal render targets and textures.
	 */
	dispose(): void;

}

/**
 * An enumeration of SMAA presets.
 *
 * @type {Object}
 * @property {Number} LOW - Results in around 60% of the maximum quality.
 * @property {Number} MEDIUM - Results in around 80% of the maximum quality.
 * @property {Number} HIGH - Results in around 95% of the maximum quality.
 * @property {Number} ULTRA - Results in around 99% of the maximum quality.
 */
export enum SMAAPreset {
	LOW,
	MEDIUM,
	HIGH,
	ULTRA,
}

/**
 * A Screen Space Ambient Occlusion (SSAO) effect.
 *
 * For high quality visuals use two SSAO effect instances in a row with different radii, one for rough AO and one for
 * fine details.
 *
 * This effect supports depth-aware upsampling and should be rendered at a lower resolution. The resolution should match
 * that of the downsampled normals and depth. If you intend to render SSAO at full resolution, do not provide a
 * downsampled `normalDepthBuffer`.
 *
 * It's recommended to specify a relative render resolution using the `resolutionScale` constructor parameter to avoid
 * undesired sampling patterns.
 *
 * Based on "Scalable Ambient Obscurance" by Morgan McGuire et al. and "Depth-aware upsampling experiments" by Eleni
 * Maria Stea:
 * https://research.nvidia.com/publication/scalable-ambient-obscurance
 * https://eleni.mutantstargoat.com/hikiko/on-depth-aware-upsampling
 *
 * The view position calculation is based on a shader by Norbert Nopper:
 * https://github.com/McNopper/OpenGL/blob/master/Example28/shader/ssao.frag.glsl
 */
export class SSAOEffect extends Effect {

	/**
	 * Constructs a new SSAO effect.
	 *
	 * @todo Move normalBuffer to options.
	 * @param {Camera} [camera] - The main camera.
	 * @param {Texture} [normalBuffer] - A texture that contains the scene normals.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.MULTIPLY] - The blend function of this effect.
	 * @param {Boolean} [options.distanceScaling=true] - Deprecated.
	 * @param {Boolean} [options.depthAwareUpsampling=true] - Enables or disables depth-aware upsampling. Has no effect if WebGL 2 is not supported.
	 * @param {Texture} [options.normalDepthBuffer=null] - Deprecated.
	 * @param {Number} [options.samples=9] - The amount of samples per pixel. Should not be a multiple of the ring count.
	 * @param {Number} [options.rings=7] - The amount of spiral turns in the occlusion sampling pattern. Should be a prime number.
	 * @param {Number} [options.worldDistanceThreshold] - The world distance threshold at which the occlusion effect starts to fade out.
	 * @param {Number} [options.worldDistanceFalloff] - The world distance falloff. Influences the smoothness of the occlusion cutoff.
	 * @param {Number} [options.worldProximityThreshold] - The world proximity threshold at which the occlusion starts to fade out.
	 * @param {Number} [options.worldProximityFalloff] - The world proximity falloff. Influences the smoothness of the proximity cutoff.
	 * @param {Number} [options.distanceThreshold=0.97] - Deprecated.
	 * @param {Number} [options.distanceFalloff=0.03] - Deprecated.
	 * @param {Number} [options.rangeThreshold=0.0005] - Deprecated.
	 * @param {Number} [options.rangeFalloff=0.001] - Deprecated.
	 * @param {Number} [options.minRadiusScale=0.1] - The minimum radius scale.
	 * @param {Number} [options.luminanceInfluence=0.7] - Determines how much the luminance of the scene influences the ambient occlusion.
	 * @param {Number} [options.radius=0.1825] - The occlusion sampling radius, expressed as a scale relative to the resolution. Range [1e-6, 1.0].
	 * @param {Number} [options.intensity=1.0] - The intensity of the ambient occlusion.
	 * @param {Number} [options.bias=0.025] - An occlusion bias. Eliminates artifacts caused by depth discontinuities.
	 * @param {Number} [options.fade=0.01] - Influences the smoothness of the shadows. A lower value results in higher contrast.
	 * @param {Color} [options.color=null] - The color of the ambient occlusion.
	 * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
	 * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
	 * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
	 * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
	 * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
	 */
	constructor(
		camera?: Camera,
		normalBuffer?: Texture,
		{
			blendFunction,
			distanceScaling,
			depthAwareUpsampling,
			normalDepthBuffer,
			samples,
			rings,
			worldDistanceThreshold,
			worldDistanceFalloff,
			worldProximityThreshold,
			worldProximityFalloff,
			distanceThreshold,
			distanceFalloff,
			rangeThreshold,
			rangeFalloff,
			minRadiusScale,
			luminanceInfluence,
			radius,
			intensity,
			bias,
			fade,
			color,
			resolutionScale,
			resolutionX,
			resolutionY,
			width,
			height
		}?: {
			blendFunction?: BlendFunction;
			distanceScaling?: boolean;
			depthAwareUpsampling?: boolean;
			normalDepthBuffer?: Texture;
			samples?: number;
			rings?: number;
			worldDistanceThreshold: number;
			worldDistanceFalloff: number;
			worldProximityThreshold: number;
			worldProximityFalloff: number;
			distanceThreshold?: number;
			distanceFalloff?: number;
			rangeThreshold?: number;
			rangeFalloff?: number;
			minRadiusScale?: number;
			luminanceInfluence?: number;
			radius?: number;
			intensity?: number;
			bias?: number;
			fade?: number;
			color?: Color;
			resolutionScale?: number;
			resolutionX?: number;
			resolutionY?: number;
			width?: number;
			height?: number;
		}
	);

	resolution: Resolution;
	/**
	 * Sets the normal buffer.
	 *
	 * @type {Texture}
	 */
	get normalBuffer(): Texture | null;
	set normalBuffer(value: Texture | null);
	/**
	 * Indicates whether depth-aware upsampling is enabled.
	 *
	 * @type {Boolean}
	 */
	get depthAwareUpsampling(): boolean;
	set depthAwareUpsampling(arg: boolean);
	/**
	 * The color of the ambient occlusion. Set to `null` to disable.
	 *
	 * @type {Color}
	 */
	get color(): Color;
	set color(arg: Color);
	/**
	 * Returns the resolution settings.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Resolution} The resolution.
	 */
	getResolution(): Resolution;
	/**
	 * The SSAO material.
	 *
	 * @type {SSAOMaterial}
	 */
	get ssaoMaterial(): SSAOMaterial;
	/**
	 * Returns the SSAO material.
	 *
	 * @deprecated Use ssaoMaterial instead.
	 * @return {SSAOMaterial} The material.
	 */
	getSSAOMaterial(): SSAOMaterial;
	/**
	 * The amount of occlusion samples per pixel.
	 *
	 * @type {Number}
	 * @deprecated Use ssaoMaterial.samples instead.
	 */
	get samples(): number;
	set samples(arg: number);
	/**
	 * The amount of spiral turns in the occlusion sampling pattern.
	 *
	 * @type {Number}
	 * @deprecated Use ssaoMaterial.rings instead.
	 */
	get rings(): number;
	set rings(arg: number);
	/**
	 * The occlusion sampling radius.
	 *
	 * @type {Number}
	 * @deprecated Use ssaoMaterial.radius instead.
	 */
	get radius(): number;
	set radius(arg: number);
	/**
	 * The intensity.
	 *
	 * @type {Number}
	 */
	get intensity(): number;
	set intensity(arg: number);
	/**
	 * Indicates whether depth-aware upsampling is enabled.
	 *
	 * @deprecated Use depthAwareUpsampling instead.
	 * @return {Boolean} Whether depth-aware upsampling is enabled.
	 */
	isDepthAwareUpsamplingEnabled(): boolean;
	/**
	 * Enables or disables depth-aware upsampling.
	 *
	 * @deprecated Use depthAwareUpsampling instead.
	 * @param {Boolean} value - Whether depth-aware upsampling should be enabled.
	 */
	setDepthAwareUpsamplingEnabled(value: boolean): void;
	/**
	 * Indicates whether distance-based radius scaling is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated Use ssaoMaterial.distanceScaling instead.
	 */
	get distanceScaling(): boolean;
	set distanceScaling(arg: boolean);
	/**
	 * Returns the color of the ambient occlusion.
	 *
	 * @deprecated Use color instead.
	 * @return {Color} The color.
	 */
	getColor(): Color;
	/**
	 * Sets the color of the ambient occlusion. Set to `null` to disable colorization.
	 *
	 * @deprecated Use color instead.
	 * @param {Color} value - The color.
	 */
	setColor(value: Color): void;
	/**
	 * Sets the occlusion distance cutoff.
	 *
	 * @deprecated Use ssaoMaterial instead.
	 * @param {Number} threshold - The distance threshold. Range [0.0, 1.0].
	 * @param {Number} falloff - The falloff. Range [0.0, 1.0].
	 */
	setDistanceCutoff(threshold: number, falloff: number): void;
	/**
	 * Sets the occlusion proximity cutoff.
	 *
	 * @deprecated Use ssaoMaterial instead.
	 * @param {Number} threshold - The proximity threshold. Range [0.0, 1.0].
	 * @param {Number} falloff - The falloff. Range [0.0, 1.0].
	 */
	setProximityCutoff(threshold: number, falloff: number): void;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;
	/**
	 * Sets the size.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 */
	setSize(width: number, height: number): void;
	/**
	 * The luminance influence factor. Range: [0.0, 1.0].
	 *
	 * @type {Boolean}
	 */
	get luminanceInfluence(): boolean;
	set luminanceInfluence(value: boolean);

}

/**
 * A texture effect.
 */
export class TextureEffect extends Effect {

	/**
	 * Constructs a new texture effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Texture} [options.texture] - A texture.
	 * @param {Boolean} [options.aspectCorrection=false] - Deprecated. Adjust the texture's offset, repeat and center instead.
	 */
	constructor({
		blendFunction,
		texture,
		aspectCorrection
	}?: {
		blendFunction?: BlendFunction;
		texture?: Texture;
		aspectCorrection?: boolean;
	});

	set texture(arg: Texture);
	/**
	 * The texture.
	 *
	 * @type {Texture}
	 */
	get texture(): Texture;
	set aspectCorrection(arg: number);
	/**
	 * Indicates whether aspect correction is enabled.
	 *
	 * @type {Number}
	 * @deprecated Adjust the texture's offset, repeat, rotation and center instead.
	 */
	get aspectCorrection(): number;
	/**
	 * Returns the texture.
	 *
	 * @deprecated Use texture instead.
	 * @return {Texture} The texture.
	 */
	getTexture(): Texture;
	/**
	 * Sets the texture.
	 *
	 * @deprecated Use texture instead.
	 * @param {Texture} value - The texture.
	 */
	setTexture(value: Texture): void;
	set uvTransform(arg: boolean);
	/**
	 * Indicates whether the texture UV coordinates will be transformed using the transformation matrix of the texture.
	 *
	 * @type {Boolean}
	 * @deprecated Use texture.matrixAutoUpdate instead.
	 */
	get uvTransform(): boolean;
	/**
	 * Sets the swizzles that will be applied to the components of a texel before it is written to the output color.
	 *
	 * @param {ColorChannel} r - The swizzle for the `r` component.
	 * @param {ColorChannel} [g=r] - The swizzle for the `g` component.
	 * @param {ColorChannel} [b=r] - The swizzle for the `b` component.
	 * @param {ColorChannel} [a=r] - The swizzle for the `a` component.
	 */
	setTextureSwizzleRGBA(
		r: ColorChannel,
		g?: ColorChannel,
		b?: ColorChannel,
		a?: ColorChannel
	): void;

	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */

	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime: number
	): void;

	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */

	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * A tone mapping mode enumeration.
 *
 * @type {Object}
 * @property {Number} REINHARD - Simple Reinhard tone mapping.
 * @property {Number} REINHARD2 - Modified Reinhard tone mapping.
 * @property {Number} REINHARD2_ADAPTIVE - Simulates the optic nerve responding to the amount of light it is receiving.
 * @property {Number} OPTIMIZED_CINEON - Optimized filmic operator by Jim Hejl and Richard Burgess-Dawson.
 * @property {Number} ACES_FILMIC - ACES tone mapping with a scale of 1.0/0.6.
 */
export enum ToneMappingMode {
	REINHARD,
	REINHARD2,
	REINHARD2_ADAPTIVE,
	OPTIMIZED_CINEON,
	ACES_FILMIC,
}

/**
 * A tone mapping effect.
 *
 * Note: `ToneMappingMode.REINHARD2_ADAPTIVE` requires support for `EXT_shader_texture_lod`.
 *
 * Reference:
 * GDC2007 - Wolfgang Engel, Post-Processing Pipeline
 * http://perso.univ-lyon1.fr/jean-claude.iehl/Public/educ/GAMA/2007/gdc07/Post-Processing_Pipeline.pdf
 */
export class ToneMappingEffect extends Effect {

	/**
	 * Constructs a new tone mapping effect.
	 *
	 * The additional parameters only affect the Reinhard2 operator.
	 *
	 * TODO Change default mode to ACES_FILMIC and white point to 4.
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {Boolean} [options.adaptive=true] - Deprecated. Use mode instead.
	 * @param {ToneMappingMode} [options.mode=ToneMappingMode.REINHARD2_ADAPTIVE] - The tone mapping mode.
	 * @param {Number} [options.resolution=256] - The resolution of the luminance texture. Must be a power of two.
	 * @param {Number} [options.maxLuminance=16.0] - Deprecated. Same as whitePoint.
	 * @param {Number} [options.whitePoint=16.0] - The white point.
	 * @param {Number} [options.middleGrey=0.6] - The middle grey factor.
	 * @param {Number} [options.minLuminance=0.01] - The minimum luminance. Prevents very high exposure in dark scenes.
	 * @param {Number} [options.averageLuminance=1.0] - The average luminance. Used for the non-adaptive Reinhard operator.
	 * @param {Number} [options.adaptationRate=1.0] - The luminance adaptation rate.
	 */
	constructor({
		blendFunction,
		adaptive,
		mode,
		resolution,
		maxLuminance,
		whitePoint,
		middleGrey,
		minLuminance,
		averageLuminance,
		adaptationRate
	}?: {
		blendFunction?: BlendFunction;
		adaptive?: boolean;
		mode?: ToneMappingMode;
		resolution?: number;
		maxLuminance?: number;
		whitePoint?: number;
		middleGrey?: number;
		minLuminance?: number;
		averageLuminance?: number;
		adaptationRate?: number;
	});

	set resolution(arg: number);
	/**
	 * The resolution of the luminance texture. Must be a power of two.
	 *
	 * @type {Number}
	 */
	get resolution(): number;
	set mode(arg: ToneMappingMode);
	/**
	 * The tone mapping mode.
	 *
	 * @type {ToneMappingMode}
	 */
	get mode(): ToneMappingMode;
	/**
	 * The white point. Default is `16.0`.
	 *
	 * Only applies to Reinhard2 (Modified & Adaptive).
	 *
	 * @type {Number}
	 */
	get whitePoint(): number;
	/**
	 * The middle grey factor. Default is `0.6`.
	 *
	 * Only applies to Reinhard2 (Modified & Adaptive).
	 *
	 * @type {Number}
	 */
	get middleGrey(): number;
	/**
	 * The average luminance.
	 *
	 * Only applies to Reinhard2 (Modified).
	 *
	 * @type {Number}
	 */
	get averageLuminance(): number;
	/**
	 * Returns the current tone mapping mode.
	 *
	 * @deprecated Use mode instead.
	 * @return {ToneMappingMode} The tone mapping mode.
	 */
	getMode(): ToneMappingMode;
	/**
	 * Sets the tone mapping mode.
	 *
	 * @deprecated Use mode instead.
	 * @param {ToneMappingMode} value - The tone mapping mode.
	 */
	setMode(value: ToneMappingMode): void;
	/**
	 * The adaptive luminance material.
	 *
	 * @type {AdaptiveLuminanceMaterial}
	 */
	get adaptiveLuminanceMaterial(): AdaptiveLuminanceMaterial;
	/**
	 * Returns the adaptive luminance material.
	 *
	 * @deprecated Use adaptiveLuminanceMaterial instead.
	 * @return {AdaptiveLuminanceMaterial} The material.
	 */
	getAdaptiveLuminanceMaterial(): AdaptiveLuminanceMaterial;
	/**
	 * Returns the resolution of the luminance texture.
	 *
	 * @deprecated Use resolution instead.
	 * @return {Number} The resolution.
	 */
	getResolution(): number;
	/**
	 * Sets the resolution of the luminance texture. Must be a power of two.
	 *
	 * @deprecated Use resolution instead.
	 * @param {Number} value - The resolution.
	 */
	setResolution(value: number): void;
	set adaptive(arg: boolean);
	/**
	 * Indicates whether this pass uses adaptive luminance.
	 *
	 * @type {Boolean}
	 * @deprecated Use mode instead.
	 */
	get adaptive(): boolean;
	set adaptationRate(arg: number);
	/**
	 * The luminance adaptation rate.
	 *
	 * @type {Number}
	 * @deprecated Use adaptiveLuminanceMaterial.adaptationRate instead.
	 */
	get adaptationRate(): number;
	set distinction(arg: number);
	/**
	 * @type {Number}
	 * @deprecated
	 */
	get distinction(): number;
	/**
	 * Updates this effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
	 * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
	 */
	update(
		renderer: WebGLRenderer,
		inputBuffer: WebGLRenderTarget,
		deltaTime?: number
	): void;

	/**
	 * Performs initialization tasks.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @param {Number} frameBufferType - The type of the main frame buffers.
	 */
	initialize(
		renderer: WebGLRenderer,
		alpha: boolean,
		frameBufferType: number
	): void;

}

/**
 * An enumeration of Vignette techniques.
 *
 * @type {Object}
 * @property {Number} DEFAULT - Produces a dusty look.
 * @property {Number} ESKIL - Produces a burned look.
 */
export enum VignetteTechnique {
	DEFAULT,
	ESKIL,
}
/**
 * A Vignette effect.
 */
export class VignetteEffect extends Effect {

	/**
	 * Constructs a new Vignette effect.
	 *
	 * @param {Object} [options] - The options.
	 * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
	 * @param {VignetteTechnique} [options.technique=VignetteTechnique.DEFAULT] - The Vignette technique.
	 * @param {Boolean} [options.eskil=false] - Deprecated. Use technique instead.
	 * @param {Number} [options.offset=0.5] - The Vignette offset.
	 * @param {Number} [options.darkness=0.5] - The Vignette darkness.
	 */
	constructor({
		blendFunction,
		technique,
		eskil,
		offset,
		darkness
	}?: {
		blendFunction?: BlendFunction;
		technique?: VignetteTechnique;
		eskil?: boolean;
		offset?: number;
		darkness?: number;
	});

	set technique(arg: VignetteTechnique);
	/**
	 * The Vignette technique.
	 *
	 * @type {VignetteTechnique}
	 */
	get technique(): VignetteTechnique;
	/**
	 * Indicates whether Eskil's Vignette technique is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated Use technique instead.
	 */
	set eskil(arg: boolean);
	/**
	 * Indicates whether Eskil's Vignette technique is enabled.
	 *
	 * @type {Boolean}
	 * @deprecated Use technique instead.
	 */
	get eskil(): boolean;
	/**
	 * Returns the Vignette technique.
	 *
	 * @deprecated Use technique instead.
	 * @return {VignetteTechnique} The technique.
	 */
	getTechnique(): VignetteTechnique;
	/**
	 * Sets the Vignette technique.
	 *
	 * @deprecated Use technique instead.
	 * @param {VignetteTechnique} value - The technique.
	 */
	setTechnique(value: VignetteTechnique): void;
	set offset(arg: number);
	/**
	 * The Vignette offset.
	 *
	 * @type {Number}
	 */
	get offset(): number;
	/**
	 * Returns the Vignette offset.
	 *
	 * @deprecated Use offset instead.
	 * @return {Number} The offset.
	 */
	getOffset(): number;
	/**
	 * Sets the Vignette offset.
	 *
	 * @deprecated Use offset instead.
	 * @param {Number} value - The offset.
	 */
	setOffset(value: number): void;
	set darkness(arg: number);
	/**
	 * The Vignette darkness.
	 *
	 * @type {Number}
	 */
	get darkness(): number;
	/**
	 * Returns the Vignette darkness.
	 *
	 * @deprecated Use darkness instead.
	 * @return {Number} The darkness.
	 */
	getDarkness(): number;
	/**
	 * Sets the Vignette darkness.
	 *
	 * @deprecated Use darkness instead.
	 * @param {Number} value - The darkness.
	 */
	setDarkness(value: number): void;

}

/**
 * An enumeration of LUT worker operations.
 *
 * @type {Object}
 * @property {String} SCALE_UP - Tetrahedral upscale operation.
 */
export enum LUTOperation {
	SCALE_UP = "lut.scaleup",
}

/**
 * A tetrahedral upscaler that can be used to augment 3D LUTs.
 *
 * Based on an implementation by Garrett Johnson:
 * https://github.com/gkjohnson/threejs-sandbox/blob/master/3d-lut/src/TetrahedralUpscaler.js
 */
export class TetrahedralUpscaler {

	/**
	 * Expands the given data to the target size.
	 *
	 * @param {ArrayBufferView} data - The input RGBA data. Assumed to be cubic.
	 * @param {Number} size - The target size.
	 * @return {ArrayBufferView} The new data.
	 */
	static expand(data: ArrayBufferView, size: number): ArrayBufferView;

}

/**
 * SMAA area image data.
 *
 * This texture allows to obtain the area for a certain pattern and distances to the left and right of identified lines.
 *
 * Based on the official python scripts:
 *	https://github.com/iryoku/smaa/tree/master/Scripts
 */
export class SMAAAreaImageData {

	/**
	 * Creates a new area image.
	 *
	 * @return {RawImageData} The generated image data.
	 */
	static generate(): RawImageData;

}

/**
 * An SMAA image generator.
 *
 * This class uses a worker thread to generate the search and area images. The generated data URLs will be cached using
 * localStorage, if available. To disable caching use {@link SMAAImageGenerator.setCacheEnabled}.
 */
export class SMAAImageGenerator {

	/**
	 * Indicates whether data image caching is disabled.
	 *
	 * @type {Boolean}
	 * @deprecated Use setCacheEnabled() instead.
	 */
	disableCache: boolean;
	/**
	 * Enables or disables caching via localStorage.
	 *
	 * @param {Boolean} value - Whether the cache should be enabled.
	 */
	setCacheEnabled(value: boolean): void;
	/**
	 * Generates the SMAA data images.
	 *
	 * @example
	 * SMAAImageGenerator.generate().then(([search, area]) => {
	 *		const smaaEffect = new SMAAEffect(search, area);
	 * });
	 * @return {Promise<Image[]>} A promise that returns the search image and area image as a pair.
	 */
	generate(): Promise<
		(new (width?: number, height?: number) => HTMLImageElement)[]
	>;

}

/**
 * SMAA search image data.
 *
 * This image stores information about how many pixels the line search algorithm must advance in the last step.
 *
 * Based on the official python scripts:
 *	https://github.com/iryoku/smaa/tree/master/Scripts
 */
export class SMAASearchImageData {

	/**
	 * Creates a new search image.
	 *
	 * @return {RawImageData} The generated image data.
	 */
	static generate(): RawImageData;

}

/**
 * A 3D lookup texture (LUT).
 *
 * This texture can be used as-is in a WebGL 2 context. It can also be converted into a 2D texture.
 */
export class LookupTexture extends Data3DTexture {

	/**
	 * Creates a new 3D LUT by copying a given LUT.
	 *
	 * Common image-based textures will be converted into 3D data textures.
	 *
	 * @param {Texture} texture - The LUT. Assumed to be cubic.
	 * @return {LookupTexture} A new 3D LUT.
	 */
	static from(texture: Texture): LookupTexture;
	/**
	 * Creates a neutral 3D LUT.
	 *
	 * @param {Number} size - The sidelength.
	 * @return {LookupTexture} A neutral 3D LUT.
	 */
	static createNeutral(size: number): LookupTexture;
	/**
	 * Constructs a cubic 3D lookup texture.
	 *
	 * @param {TypedArray} data - The pixel data. The default format is RGBA.
	 * @param {Number} size - The sidelength.
	 */
	constructor(data: ArrayBufferView, size: number);
	/**
	 * The lower bounds of the input domain.
	 *
	 * @type {Vector3}
	 */
	domainMin: Vector3;
	/**
	 * The upper bounds of the input domain.
	 *
	 * @type {Vector3}
	 */
	domainMax: Vector3;
	/**
	 * Indicates that this is an instance of LookupTexture3D.
	 *
	 * @type {Boolean}
	 * @deprecated
	 */
	get isLookupTexture3D(): boolean;
	/**
	 * Scales this LUT up to a given target size using tetrahedral interpolation.
	 *
	 * @param {Number} size - The target sidelength.
	 * @param {Boolean} [transferData=true] - Extra fast mode. Set to false to keep the original data intact.
	 * @return {Promise<LookupTexture>} A promise that resolves with a new LUT upon completion.
	 */
	scaleUp(size: number, transferData?: boolean): Promise<LookupTexture>;
	/**
	 * Applies the given LUT to this one.
	 *
	 * @param {LookupTexture} lut - A LUT. Must have the same dimensions, type and format as this LUT.
	 * @return {LookupTexture} This texture.
	 */
	applyLUT(lut: LookupTexture): LookupTexture;
	/**
	 * Converts the LUT data into unsigned byte data.
	 *
	 * This is a lossy operation which should only be performed after all other transformations have been applied.
	 *
	 * @return {LookupTexture} This texture.
	 */
	convertToUint8(): LookupTexture;
	/**
	 * Converts the LUT data into float data.
	 *
	 * @return {LookupTexture} This texture.
	 */
	convertToFloat(): LookupTexture;
	/**
	 * Converts this LUT into RGBA data.
	 *
	 * @deprecated LUTs are RGBA by default since three r137.
	 * @return {LookupTexture} This texture.
	 */
	convertToRGBA(): LookupTexture;
	/**
	 * Converts the output of this LUT into sRGB color space.
	 *
	 * @return {LookupTexture} This texture.
	 */
	convertLinearToSRGB(): LookupTexture;
	/**
	 * Converts the output of this LUT into linear color space.
	 *
	 * @return {LookupTexture} This texture.
	 */
	convertSRGBToLinear(): LookupTexture;
	/**
	 * Converts this LUT into a 2D data texture.
	 *
	 * Please note that custom input domains are not carried over to 2D textures.
	 *
	 * @return {DataTexture} The texture.
	 */
	toDataTexture(): DataTexture;

}
export type LookupTexture3D = LookupTexture;

/**
 * A simple noise texture.
 */
export class NoiseTexture extends DataTexture {

	/**
	 * Constructs a new noise texture.
	 *
	 * The texture format can be either `LuminanceFormat` or `RGBAFormat`. Additionally, the formats `RedFormat` and
	 * `RGFormat` can be used in a WebGL 2 context.
	 *
	 * @param {Number} width - The width.
	 * @param {Number} height - The height.
	 * @param {Number} [format=LuminanceFormat] - The texture format.
	 * @param {Number} [type=UnsignedByteType] - The texture type.
	 */
	constructor(width: number, height: number, format?: number, type?: number);

}

/**
 * A container for raw RGBA image data.
 *
 * @implements {ImageData}
 */
export class RawImageData implements ImageData {

	/**
	 * Creates a new image data container.
	 *
	 * @param {ImageData|Image} image - An image or plain image data.
	 * @return {RawImageData} The image data.
	 */
	static from(
		image:
			| ImageData
			| (new (width?: number, height?: number) => HTMLImageElement)
	): RawImageData;

	/**
	 * Constructs a new image data container.
	 *
	 * @param {Number} [width=0] - The width of the image.
	 * @param {Number} [height=0] - The height of the image.
	 * @param {Uint8ClampedArray} [data=null] - The image data.
	 */
	constructor(width?: number, height?: number, data?: Uint8ClampedArray);
	colorSpace: PredefinedColorSpace;
	/**
	 * The width of the image.
	 *
	 * @type {Number}
	 */
	width: number;
	/**
	 * The height of the image.
	 *
	 * @type {Number}
	 */
	height: number;
	/**
	 * The RGBA image data.
	 *
	 * @type {Uint8ClampedArray}
	 */
	data: Uint8ClampedArray;
	/**
	 * Creates a canvas from this image data.
	 *
	 * @return {HTMLCanvasElement} The canvas, or null if it couldn't be created.
	 */
	toCanvas(): HTMLCanvasElement;

}

/**
 * An SMAA image loader.
 *
 * @deprecated Preloading the SMAA lookup textures is no longer required.
 * @experimental Added for testing, API might change in patch or minor releases. Requires three >= r108.
 */
export class SMAAImageLoader extends Loader {

	/**
	 * Loads the SMAA data images.
	 *
	 * @param {Function} [onLoad] - A callback that receives the search image and area image as a pair.
	 * @param {Function} [onError] - An error callback that receives the URL of the image that failed to load.
	 * @return {Promise<Image[]>} A promise that returns the search image and area image as a pair.
	 */
	load(
		onLoad?: Function,
		onError?: Function
	): Promise<(new (width?: number, height?: number) => HTMLImageElement)[]>;

}

/**
 * A 3D LUT loader that supports the .cube file format.
 *
 * Based on an implementation by Garrett Johnson:
 * https://github.com/gkjohnson/threejs-sandbox/tree/master/3d-lut
 *
 * For more details see:
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */
export class LUTCubeLoader extends Loader {

	/**
	 * Loads a LUT.
	 *
	 * @param {String} url - The URL of the CUBE-file.
	 * @param {Function} [onLoad] - A callback that receives the loaded lookup texture.
	 * @param {Function} [onProgress] - A progress callback that receives the XMLHttpRequest instance.
	 * @param {Function} [onError] - An error callback that receives the URL of the file that failed to load.
	 * @return {Promise<LookupTexture>} A promise that returns the lookup texture.
	 */
	load(
		url: string,
		onLoad?: Function,
		onProgress?: Function,
		onError?: Function
	): Promise<LookupTexture>;

	/**
	 * Parses the given data.
	 *
	 * @param {String} input - The LUT data.
	 * @return {LookupTexture} The lookup texture.
	 * @throws {Error} Fails if the data is invalid.
	 */
	parse(input: string): LookupTexture;

}

/**
 * A 3D LUT loader that supports the .3dl file format.
 *
 * Based on an implementation by Garrett Johnson:
 * https://github.com/gkjohnson/threejs-sandbox/tree/master/3d-lut
 *
 * For more details see:
 * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
 */
export class LUT3dlLoader extends Loader {

	/**
	 * Loads a LUT.
	 *
	 * @param {String} url - The URL of the 3dl-file.
	 * @param {Function} [onLoad] - A callback that receives the loaded lookup texture.
	 * @param {Function} [onProgress] - A progress callback that receives the XMLHttpRequest instance.
	 * @param {Function} [onError] - An error callback that receives the URL of the file that failed to load.
	 * @return {Promise<LookupTexture>} A promise that returns the lookup texture.
	 */
	load(
		url: string,
		onLoad?: Function,
		onProgress?: Function,
		onError?: Function
	): Promise<LookupTexture>;

	/**
	 * Parses the given data.
	 *
	 * @param {String} input - The LUT data.
	 * @return {LookupTexture} The lookup texture.
	 * @throws {Error} Fails if the data is invalid.
	 */
	parse(input: string): LookupTexture;

}

/**
 * Determines the texture inline decoding.
 *
 * @param {Texture} texture - A texture.
 * @param {Boolean} isWebGL2 - Whether the context is WebGL 2.
 * @return {String} The decoding.
 * @ignore
 */
export function getTextureDecoding(
	texture: Texture,
	isWebGL2: boolean
): string;

/**
 * Converts orthographic depth to view Z.
 *
 * @see https://github.com/mrdoob/three.js/blob/0de4e75ee65c3238957318b88ef91b6597e23c1e/src/renderers/shaders/ShaderChunk/packing.glsl.js#L42
 * @param {Number} depth - The linear clip Z.
 * @param {Number} near - The camera near plane.
 * @param {Number} far - The camera far plane.
 * @return {Number} The view Z.
 * @ignore
 */
export function orthographicDepthToViewZ(
	depth: number,
	near: number,
	far: number
): number;

/**
 * Converts view Z to orthographic depth.
 *
 * @see https://github.com/mrdoob/three.js/blob/0de4e75ee65c3238957318b88ef91b6597e23c1e/src/renderers/shaders/ShaderChunk/packing.glsl.js#L39
 * @param {Number} viewZ - The view Z. Expected to be negative.
 * @param {Number} near - The camera near plane.
 * @param {Number} far - The camera far plane.
 * @return {Number} The depth.
 * @ignore
 */
export function viewZToOrthographicDepth(
	viewZ: number,
	near: number,
	far: number
): number;
export class Panel {
    constructor(name: string, fg: string, bg: string);
    dom: HTMLCanvasElement;
    update(value: number, maxValue: number): void;
}
export class Stats {
    REVISION: number;
    dom: HTMLDivElement;
    domElement: HTMLDivElement;
    begin(): void;
    end(): void;
    update(): void;
    addPanel(panel: Panel): void;
    showPanel(id: number): void;
    setMode(id: number): void;
}
export namespace examples {
export class SimplexNoise {
    constructor(r?: object);
    dot(g: number[], x: number, y: number): number;
    dot3(g: number[], x: number, y: number, z: number): number;
    dot4(g: number[], x: number, y: number, z: number, w: number): number;
    noise(xin: number, yin: number): number;
    noise3d(xin: number, yin: number, zin: number): number;
    noise4d(x: number, y: number, z: number, w: number): number;
}
}
export namespace examples {
export class CSS2DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;

    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
}
export type CSS2DParameters = {
    element?: HTMLElement;
};
export class CSS2DRenderer {
    constructor(parameters?: CSS2DParameters);
    domElement: HTMLElement;

    getSize(): { width: number; height: number };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
}
}
export namespace examples {
export class CSS3DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;

    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
}
export class CSS3DSprite extends CSS3DObject {
    constructor(element: HTMLElement);
}
export type CSS3DParameters = {
    element?: HTMLElement;
};
export class CSS3DRenderer {
    constructor(parameters?: CSS3DParameters);
    domElement: HTMLElement;

    getSize(): { width: number; height: number };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
}
}
export namespace examples {
export class RenderableObject {
    id: number;
    object: Object3D;
    z: number;
    renderOrder: number;
}
export class RenderableFace {
    id: number;
    v1: RenderableVertex;
    v2: RenderableVertex;
    v3: RenderableVertex;
    normalModel: Vector3;
    vertexNormalsModel: Vector3[];
    vertexNormalsLength: number;
    color: Color;
    material: Material;
    uvs: Vector2[];
    z: number;
    renderOrder: number;
}
export class RenderableVertex {
    position: Vector3;
    positionWorld: Vector3;
    positionScreen: Vector4;
    visible: boolean;

    copy(vertex: RenderableVertex): void;
}
export class RenderableLine {
    id: number;
    v1: RenderableVertex;
    v2: RenderableVertex;
    vertexColors: Color[];
    material: Material;
    z: number;
    renderOrder: number;
}
export class RenderableSprite {
    id: number;
    object: Object3D;
    x: number;
    y: number;
    z: number;
    rotation: number;
    scale: Vector2;
    material: Material;
    renderOrder: number;
}
export class Projector {
    constructor();

    projectScene(scene: Scene, camera: Camera, sortObjects: boolean, sortElements: boolean): any;
}
}
export namespace examples {
// https://threejs.org/docs/?q=buffergeome#examples/en/utils/BufferGeometryUtils
export function deepCloneAttribute(attribute: BufferAttribute): BufferAttribute;
export function mergeBufferGeometries(geometries: BufferGeometry[], useGroups?: boolean): BufferGeometry;
export function mergeBufferAttributes(attributes: BufferAttribute[]): BufferAttribute;
export function interleaveAttributes(attributes: BufferAttribute[]): InterleavedBufferAttribute;
export function estimateBytesUsed(geometry: BufferGeometry): number;
export function mergeVertices(geometry: BufferGeometry, tolerance?: number): BufferGeometry;
export function toTrianglesDrawMode(geometry: BufferGeometry, drawMode: TrianglesDrawModes): BufferGeometry;
export function computeMorphedAttributes(object: Mesh | Line | Points): object;
export function computeMikkTSpaceTangents(
    geometry: BufferGeometry,
    MikkTSpace: unknown,
    negateSign?: boolean,
): BufferGeometry;
export function mergeGroups(geometry: BufferGeometry): BufferGeometry;
export function deinterleaveAttribute(geometry: BufferGeometry): void;
export function deinterleaveGeometry(geometry: BufferGeometry): void;

/**
 * Creates a new, non-indexed geometry with smooth normals everywhere except faces that meet at an angle greater than the crease angle.
 *
 * @param geometry The input geometry.
 * @param creaseAngle The crease angle.
 */
export function toCreasedNormals(geometry: BufferGeometry, creaseAngle?: number): BufferGeometry;
}
export namespace examples {
export function createMeshesFromInstancedMesh(instancedMesh: InstancedMesh): Group;
export function createMultiMaterialObject(geometry: BufferGeometry, materials: Material[]): Group;
/**
 * @deprecated Use scene.attach( child ) instead.
 */
export function detach(child: Object3D, parent: Object3D, scene: Scene): void;
/**
 * @deprecated Use parent.attach( child ) instead.
 */
export function attach(child: Object3D, scene: Scene, parent: Object3D): void;
export function createMeshesFromMultiMaterialMesh(mesh: Mesh): Group;
export function sortInstancedMesh(mesh: InstancedMesh, compareFn: (a: number, b: number) => number): void;

/**
 * Akin to Array.prototype.reduce(), but operating on the vertices of all the visible descendant objects, in world space.
 * Additionally, it can operate as a transform-reduce, returning a different type T than the Vector3 input.
 * This can be useful for e.g. fitting a viewing frustum to the scene.
 *
 * @param object - The object to traverse (uses traverseVisible internally).
 * @param func - The binary function applied for the reduction.
 * Must have the signature: (value: T, vertex: Vector3): T.
 * @param initialValue - The value to initialize the reduction with.
 * This is required as it also sets the reduction type, which is not required to be Vector3.
 */
export function reduceVertices<TValue>(
    object: Object3D,
    func: (value: TValue, vertex: Vector3) => TValue,
    initialValue: TValue,
): TValue;
}




// Animation ////////////////////////////////////////////////////////////////////////////////////////
export class AnimationAction {
    constructor(mixer: AnimationMixer, clip: AnimationClip, localRoot?: Object3D, blendMode?: AnimationBlendMode);

    blendMode: AnimationBlendMode;

    /**
     * @default THREE.LoopRepeat
     */
    loop: AnimationActionLoopStyles;

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1
     */
    timeScale: number;

    /**
     * @default 1
     */
    weight: number;

    /**
     * @default Infinity
     */
    repetitions: number;

    /**
     * @default false
     */
    paused: boolean;

    /**
     * @default true
     */
    enabled: boolean;

    /**
     * @default false
     */
    clampWhenFinished: boolean;

    /**
     * @default true
     */
    zeroSlopeAtStart: boolean;

    /**
     * @default true
     */
    zeroSlopeAtEnd: boolean;

    play(): AnimationAction;
    stop(): AnimationAction;
    reset(): AnimationAction;
    isRunning(): boolean;
    isScheduled(): boolean;
    startAt(time: number): AnimationAction;
    setLoop(mode: AnimationActionLoopStyles, repetitions: number): AnimationAction;
    setEffectiveWeight(weight: number): AnimationAction;
    getEffectiveWeight(): number;
    fadeIn(duration: number): AnimationAction;
    fadeOut(duration: number): AnimationAction;
    crossFadeFrom(fadeOutAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    crossFadeTo(fadeInAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    stopFading(): AnimationAction;
    setEffectiveTimeScale(timeScale: number): AnimationAction;
    getEffectiveTimeScale(): number;
    setDuration(duration: number): AnimationAction;
    syncWith(action: AnimationAction): AnimationAction;
    halt(duration: number): AnimationAction;
    warp(statTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
    stopWarping(): AnimationAction;
    getMixer(): AnimationMixer;
    getClip(): AnimationClip;
    getRoot(): Object3D;
}
export interface MorphTarget {
    name: string;
    vertices: Vector3[];
}
export class AnimationClip {
    constructor(name?: string, duration?: number, tracks?: KeyframeTrack[], blendMode?: AnimationBlendMode);

    name: string;
    tracks: KeyframeTrack[];

    /**
     * @default THREE.NormalAnimationBlendMode
     */
    blendMode: AnimationBlendMode;

    /**
     * @default -1
     */
    duration: number;
    uuid: string;
    results: any[];

    resetDuration(): AnimationClip;
    trim(): AnimationClip;
    validate(): boolean;
    optimize(): AnimationClip;
    clone(): this;
    toJSON(clip: AnimationClip): any;

    static CreateFromMorphTargetSequence(
        name: string,
        morphTargetSequence: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip;
    static findByName(clipArray: AnimationClip[], name: string): AnimationClip;
    static CreateClipsFromMorphTargetSequences(
        morphTargets: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip[];
    static parse(json: any): AnimationClip;
    static parseAnimation(animation: any, bones: Bone[]): AnimationClip;
    static toJSON(clip: AnimationClip): any;
}
export class AnimationMixer extends EventDispatcher {
    constructor(root: Object3D | AnimationObjectGroup);

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1.0
     */
    timeScale: number;

    clipAction(
        clip: AnimationClip,
        root?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction;
    existingAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): AnimationAction | null;
    stopAllAction(): AnimationMixer;
    update(deltaTime: number): AnimationMixer;
    setTime(timeInSeconds: number): AnimationMixer;
    getRoot(): Object3D | AnimationObjectGroup;
    uncacheClip(clip: AnimationClip): void;
    uncacheRoot(root: Object3D | AnimationObjectGroup): void;
    uncacheAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): void;
}
export class AnimationObjectGroup {
    constructor(...args: any[]);

    uuid: string;
    stats: {
        bindingsPerObject: number;
        objects: {
            total: number;
            inUse: number;
        };
    };
    readonly isAnimationObjectGroup: true;

    add(...args: any[]): void;
    remove(...args: any[]): void;
    uncache(...args: any[]): void;
}
export namespace AnimationUtils {
export function arraySlice(array: any, from: number, to: number): any;
export function convertArray(array: any, type: any, forceClone: boolean): any;
export function isTypedArray(object: any): boolean;
export function getKeyframeOrder(times: number[]): number[];
export function sortedArray(values: any[], stride: number, order: number[]): any[];
export function flattenJSON(jsonKeys: string[], times: any[], values: any[], valuePropertyName: string): void;

/**
 * @param sourceClip
 * @param name
 * @param startFrame
 * @param endFrame
 * @param [fps=30]
 */
export function subclip(
    sourceClip: AnimationClip,
    name: string,
    startFrame: number,
    endFrame: number,
    fps?: number,
): AnimationClip;

/**
 * @param targetClip
 * @param [referenceFrame=0]
 * @param [referenceClip=targetClip]
 * @param [fps=30]
 */
export function makeClipAdditive(
    targetClip: AnimationClip,
    referenceFrame?: number,
    referenceClip?: AnimationClip,
    fps?: number,
): AnimationClip;
}
export class KeyframeTrack {
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    name: string;
    times: Float32Array;
    values: Float32Array;

    ValueTypeName: string;
    TimeBufferType: Float32Array;
    ValueBufferType: Float32Array;

    /**
     * @default THREE.InterpolateLinear
     */
    DefaultInterpolation: InterpolationModes;

    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

    setInterpolation(interpolation: InterpolationModes): KeyframeTrack;
    getInterpolation(): InterpolationModes;
    createInterpolant(): Interpolant;

    getValueSize(): number;

    shift(timeOffset: number): KeyframeTrack;
    scale(timeScale: number): KeyframeTrack;
    trim(startTime: number, endTime: number): KeyframeTrack;
    validate(): boolean;
    optimize(): KeyframeTrack;
    clone(): this;

    static toJSON(track: KeyframeTrack): any;
}
export interface ParseTrackNameResults {
    nodeName: string;
    objectName: string;
    objectIndex: string;
    propertyName: string;
    propertyIndex: string;
}
export class PropertyBinding {
    constructor(rootNode: any, path: string, parsedPath?: any);

    path: string;
    parsedPath: any;
    node: any;
    rootNode: any;

    getValue(targetArray: any, offset: number): any;
    setValue(sourceArray: any, offset: number): void;
    bind(): void;
    unbind(): void;

    BindingType: { [bindingType: string]: number };
    Versioning: { [versioning: string]: number };

    GetterByBindingType: Array<() => void>;
    SetterByBindingTypeAndVersioning: Array<Array<() => void>>;

    static create(root: any, path: any, parsedPath?: any): PropertyBinding | PropertyBinding.Composite;
    static sanitizeNodeName(name: string): string;
    static parseTrackName(trackName: string): ParseTrackNameResults;
    static findNode(root: any, nodeName: string): any;
}
export namespace PropertyBinding {
    class Composite {
        constructor(targetGroup: any, path: any, parsedPath?: any);

        getValue(array: any, offset: number): any;
        setValue(array: any, offset: number): void;
        bind(): void;
        unbind(): void;
    }
}
export class PropertyMixer {
    constructor(binding: any, typeName: string, valueSize: number);

    binding: any;
    valueSize: number;
    buffer: any;
    cumulativeWeight: number;
    cumulativeWeightAdditive: number;
    useCount: number;
    referenceCount: number;

    accumulate(accuIndex: number, weight: number): void;
    accumulateAdditive(weight: number): void;
    apply(accuIndex: number): void;
    saveOriginalState(): void;
    restoreOriginalState(): void;
}
export class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}
export class ColorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'color'
     */
    ValueTypeName: string;
}
export class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}
export class QuaternionKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'quaternion'
     */
    ValueTypeName: string;
}
export class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}
export class VectorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'vector'
     */
    ValueTypeName: string;
}




// Extras / Audio /////////////////////////////////////////////////////////////////////
export class Audio<NodeType extends AudioNode = GainNode> extends Object3D {
    constructor(listener: AudioListener);
    type: 'Audio';

    listener: AudioListener;
    context: AudioContext;
    gain: GainNode;

    /**
     * @default false
     */
    autoplay: boolean;
    buffer: null | AudioBuffer;

    /**
     * @default 0
     */
    detune: number;

    /**
     * @default false
     */
    loop: boolean;

    /**
     * @default 0
     */
    loopStart: number;

    /**
     * @default 0
     */
    loopEnd: number;

    /**
     * @default 0
     */
    offset: number;

    /**
     * @default undefined
     */
    duration: number | undefined;

    /**
     * @default 1
     */
    playbackRate: number;

    /**
     * @default false
     */
    isPlaying: boolean;

    /**
     * @default true
     */
    hasPlaybackControl: boolean;

    /**
     * @default 'empty'
     */
    sourceType: string;
    source: null | AudioBufferSourceNode;

    /**
     * @default []
     */
    filters: AudioNode[];

    getOutput(): NodeType;
    setNodeSource(audioNode: AudioBufferSourceNode): this;
    setMediaElementSource(mediaElement: HTMLMediaElement): this;
    setMediaStreamSource(mediaStream: MediaStream): this;
    setBuffer(audioBuffer: AudioBuffer): this;
    play(delay?: number): this;
    onEnded(): void;
    pause(): this;
    stop(): this;
    connect(): this;
    disconnect(): this;
    setDetune(value: number): this;
    getDetune(): number;
    getFilters(): AudioNode[];
    setFilters(value: AudioNode[]): this;
    getFilter(): AudioNode;
    setFilter(filter: AudioNode): this;
    setPlaybackRate(value: number): this;
    getPlaybackRate(): number;
    getLoop(): boolean;
    setLoop(value: boolean): this;
    setLoopStart(value: number): this;
    setLoopEnd(value: number): this;
    getVolume(): number;
    setVolume(value: number): this;
    /**
     * @deprecated Use {@link AudioLoader} instead.
     */
    load(file: string): Audio;
}
export class AudioAnalyser {
    /**
     * @param audio
     * @param [fftSize=2048]
     */
    constructor(audio: Audio<AudioNode>, fftSize?: number);

    analyser: AnalyserNode;
    data: Uint8Array;

    getFrequencyData(): Uint8Array;
    getAverageFrequency(): number;

    /**
     * @deprecated Use {@link AudioAnalyser#getFrequencyData .getFrequencyData()} instead.
     */
    getData(file: any): any;
}
/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioContext.js|src/audio/AudioContext.js}
 */
export namespace AudioContext {
    function getContext(): AudioContext;

    function setContext(context: AudioContext): void;
}
export class AudioListener extends Object3D {
    constructor();

    type: 'AudioListener';
    context: AudioContext;
    gain: GainNode;

    /**
     * @default null
     */
    filter: any;

    /**
     * @default 0
     */
    timeDelta: number;

    getInput(): GainNode;
    removeFilter(): this;
    setFilter(value: any): this;
    getFilter(): any;
    setMasterVolume(value: number): this;
    getMasterVolume(): number;
    updateMatrixWorld(force?: boolean): void;
}
export class PositionalAudio extends Audio<PannerNode> {
    constructor(listener: AudioListener);

    panner: PannerNode;

    getOutput(): PannerNode;
    setRefDistance(value: number): this;
    getRefDistance(): number;
    setRolloffFactor(value: number): this;
    getRolloffFactor(): number;
    setDistanceModel(value: string): this;
    getDistanceModel(): string;
    setMaxDistance(value: number): this;
    getMaxDistance(): number;
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
    updateMatrixWorld(force?: boolean): void;
}
export class ArrayCamera extends PerspectiveCamera {
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * @default []
     */
    cameras: PerspectiveCamera[];
    readonly isArrayCamera: true;
}




// Cameras ////////////////////////////////////////////////////////////////////////////////////////

/**
 * Abstract base class for cameras. This class should always be inherited when you build a new camera.
 */
export class Camera extends Object3D {
    /**
     * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
     */
    constructor();

    /**
     * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
     * @default new THREE.Matrix4()
     */
    matrixWorldInverse: Matrix4;

    /**
     * This is the matrix which contains the projection.
     * @default new THREE.Matrix4()
     */
    projectionMatrix: Matrix4;

    /**
     * This is the inverse of projectionMatrix.
     * @default new THREE.Matrix4()
     */
    projectionMatrixInverse: Matrix4;

    readonly isCamera: true;

    getWorldDirection(target: Vector3): Vector3;

    updateMatrixWorld(force?: boolean): void;
}
export class CubeCamera extends Object3D {
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    type: 'CubeCamera';

    renderTarget: WebGLCubeRenderTarget;

    update(renderer: WebGLRenderer, scene: Scene): void;
}


/**
 * Camera with orthographic projection
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js|src/cameras/OrthographicCamera.js}
 *
 * @example
 * const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
 * scene.add( camera );
 */
export class OrthographicCamera extends Camera {
    /**
     * @param left Camera frustum left plane.
     * @param right Camera frustum right plane.
     * @param top Camera frustum top plane.
     * @param bottom Camera frustum bottom plane.
     * @param [near=0.1] Camera frustum near plane.
     * @param [far=2000] Camera frustum far plane.
     */
    constructor(left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number);

    type: 'OrthographicCamera';

    readonly isOrthographicCamera: true;

    /**
     * @default 1
     */
    zoom: number;

    /**
     * @default null
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * Camera frustum left plane.
     * @default -1
     */
    left: number;

    /**
     * Camera frustum right plane.
     * @default 1
     */
    right: number;

    /**
     * Camera frustum top plane.
     * @default 1
     */
    top: number;

    /**
     * Camera frustum bottom plane.
     * @default -1
     */
    bottom: number;

    /**
     * Camera frustum near plane.
     * @default 0.1
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @default 2000
     */
    far: number;

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    updateProjectionMatrix(): void;
    setViewOffset(
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number,
    ): void;
    clearViewOffset(): void;
    toJSON(meta?: any): any;
}


/**
 * Camera with perspective projection.
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js
 */
export class PerspectiveCamera extends Camera {
    /**
     * @param [fov=50] Camera frustum vertical field of view. Default value is 50.
     * @param [aspect=1] Camera frustum aspect ratio. Default value is 1.
     * @param [near=0.1] Camera frustum near plane. Default value is 0.1.
     * @param [far=2000] Camera frustum far plane. Default value is 2000.
     */
    constructor(fov?: number, aspect?: number, near?: number, far?: number);

    type: 'PerspectiveCamera';

    readonly isPerspectiveCamera: true;

    /**
     * @default 1
     */
    zoom: number;

    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     * @default 50
     */
    fov: number;

    /**
     * Camera frustum aspect ratio, window width divided by window height.
     * @default 1
     */
    aspect: number;

    /**
     * Camera frustum near plane.
     * @default 0.1
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @default 2000
     */
    far: number;

    /**
     * @default 10
     */
    focus: number;

    /**
     * @default null
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * @default 35
     */
    filmGauge: number;

    /**
     * @default 0
     */
    filmOffset: number;

    setFocalLength(focalLength: number): void;
    getFocalLength(): number;
    getEffectiveFOV(): number;
    getFilmWidth(): number;
    getFilmHeight(): number;

    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
     *
     * +---+---+---+
     * | A | B | C |
     * +---+---+---+
     * | D | E | F |
     * +---+---+---+
     *
     * then for each monitor you would call it like this:
     *
     * const w = 1920;
     * const h = 1080;
     * const fullWidth = w * 3;
     * const fullHeight = h * 2;
     *
     * // A
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     * // B
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     * // C
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     * // D
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     * // E
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     * // F
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
     *
     * @param fullWidth full width of multiview setup
     * @param fullHeight full height of multiview setup
     * @param x horizontal offset of subcamera
     * @param y vertical offset of subcamera
     * @param width width of subcamera
     * @param height height of subcamera
     */
    setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
    clearViewOffset(): void;

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    updateProjectionMatrix(): void;
    toJSON(meta?: any): any;

    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength .setFocalLength()} and {@link PerspectiveCamera#filmGauge .filmGauge} instead.
     */
    setLens(focalLength: number, frameHeight?: number): void;
}
export class StereoCamera extends Camera {
    constructor();

    type: 'StereoCamera';

    /**
     * @default 1
     */
    aspect: number;

    /**
     * @default 0.064
     */
    eyeSep: number;

    cameraL: PerspectiveCamera;
    cameraR: PerspectiveCamera;

    update(camera: PerspectiveCamera): void;
}
export const REVISION: string;

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
export const MOUSE: {
    LEFT: 0;
    MIDDLE: 1;
    RIGHT: 2;
    ROTATE: 0;
    DOLLY: 1;
    PAN: 2;
};
export type MouseButton = 0 | 1 | 2;
export const TOUCH: {
    ROTATE: 0;
    PAN: 1;
    DOLLY_PAN: 2;
    DOLLY_ROTATE: 3;
};
export type TouchCount = 0 | 1 | 2 | 3;

// GL STATE CONSTANTS
export const CullFaceNone: 0;
export const CullFaceBack: 1;
export const CullFaceFront: 2;
export const CullFaceFrontBack: 3;
export type CullFace = typeof CullFaceNone | typeof CullFaceBack | typeof CullFaceFront | typeof CullFaceFrontBack;

// Shadowing Type
export const BasicShadowMap: 0;
export const PCFShadowMap: 1;
export const PCFSoftShadowMap: 2;
export const VSMShadowMap: 3;
export type ShadowMapType = typeof BasicShadowMap | typeof PCFShadowMap | typeof PCFSoftShadowMap | typeof VSMShadowMap;

// MATERIAL CONSTANTS

// side
export const FrontSide: 0;
export const BackSide: 1;
export const DoubleSide: 2;
export const TwoPassDoubleSide: 2;
/**
 * Defines which side of faces will be rendered - front, back or both.
 * Default is {@link FrontSide}.
 */
export type Side = typeof FrontSide | typeof BackSide | typeof DoubleSide | typeof TwoPassDoubleSide;

// blending modes
export const NoBlending: 0;
export const NormalBlending: 1;
export const AdditiveBlending: 2;
export const SubtractiveBlending: 3;
export const MultiplyBlending: 4;
export const CustomBlending: 5;
export type Blending =
    | typeof NoBlending
    | typeof NormalBlending
    | typeof AdditiveBlending
    | typeof SubtractiveBlending
    | typeof MultiplyBlending
    | typeof CustomBlending;

// custom blending equations
// (numbers start from 100 not to clash with other
// mappings to OpenGL constants defined in Texture.js)
export const AddEquation: 100;
export const SubtractEquation: 101;
export const ReverseSubtractEquation: 102;
export const MinEquation: 103;
export const MaxEquation: 104;
export type BlendingEquation =
    | typeof AddEquation
    | typeof SubtractEquation
    | typeof ReverseSubtractEquation
    | typeof MinEquation
    | typeof MaxEquation;

// custom blending destination factors
export const ZeroFactor: 200;
export const OneFactor: 201;
export const SrcColorFactor: 202;
export const OneMinusSrcColorFactor: 203;
export const SrcAlphaFactor: 204;
export const OneMinusSrcAlphaFactor: 205;
export const DstAlphaFactor: 206;
export const OneMinusDstAlphaFactor: 207;
export const DstColorFactor: 208;
export const OneMinusDstColorFactor: 209;
export type BlendingDstFactor =
    | typeof ZeroFactor
    | typeof OneFactor
    | typeof SrcColorFactor
    | typeof OneMinusSrcColorFactor
    | typeof SrcAlphaFactor
    | typeof OneMinusSrcAlphaFactor
    | typeof DstAlphaFactor
    | typeof OneMinusDstAlphaFactor
    | typeof DstColorFactor
    | typeof OneMinusDstColorFactor;

// custom blending src factors
export const SrcAlphaSaturateFactor: 210;
export type BlendingSrcFactor = typeof SrcAlphaSaturateFactor;

// depth modes
export const NeverDepth: 0;
export const AlwaysDepth: 1;
export const LessDepth: 2;
export const LessEqualDepth: 3;
export const EqualDepth: 4;
export const GreaterEqualDepth: 5;
export const GreaterDepth: 6;
export const NotEqualDepth: 7;
export type DepthModes =
    | typeof NeverDepth
    | typeof AlwaysDepth
    | typeof LessDepth
    | typeof LessEqualDepth
    | typeof EqualDepth
    | typeof GreaterEqualDepth
    | typeof GreaterDepth
    | typeof NotEqualDepth;

// TEXTURE CONSTANTS
// Operations
export const MultiplyOperation: 0;
export const MixOperation: 1;
export const AddOperation: 2;
export type Combine = typeof MultiplyOperation | typeof MixOperation | typeof AddOperation;

// Tone Mapping modes
export const NoToneMapping: 0;
export const LinearToneMapping: 1;
export const ReinhardToneMapping: 2;
export const CineonToneMapping: 3;
export const ACESFilmicToneMapping: 4;
export const CustomToneMapping: 5;
export type ToneMapping =
    | typeof NoToneMapping
    | typeof LinearToneMapping
    | typeof ReinhardToneMapping
    | typeof CineonToneMapping
    | typeof ACESFilmicToneMapping
    | typeof CustomToneMapping;

// Mapping modes
export const UVMapping: 300;
export const CubeReflectionMapping: 301;
export const CubeRefractionMapping: 302;
export const EquirectangularReflectionMapping: 303;
export const EquirectangularRefractionMapping: 304;
export const CubeUVReflectionMapping: 306;
export type Mapping =
    | typeof UVMapping
    | typeof CubeReflectionMapping
    | typeof CubeRefractionMapping
    | typeof EquirectangularReflectionMapping
    | typeof EquirectangularRefractionMapping
    | typeof CubeUVReflectionMapping;

// Wrapping modes
export const RepeatWrapping: 1000;
export const ClampToEdgeWrapping: 1001;
export const MirroredRepeatWrapping: 1002;
export type Wrapping = typeof RepeatWrapping | typeof ClampToEdgeWrapping | typeof MirroredRepeatWrapping;

// Filters
export const NearestFilter: 1003;
export const NearestMipmapNearestFilter: 1004;
export const NearestMipMapNearestFilter: 1004;
export const NearestMipmapLinearFilter: 1005;
export const NearestMipMapLinearFilter: 1005;
export const LinearFilter: 1006;
export const LinearMipmapNearestFilter: 1007;
export const LinearMipMapNearestFilter: 1007;
export const LinearMipmapLinearFilter: 1008;
export const LinearMipMapLinearFilter: 1008;
export type TextureFilter =
    | typeof NearestFilter
    | typeof NearestMipmapNearestFilter
    | typeof NearestMipMapNearestFilter
    | typeof NearestMipmapLinearFilter
    | typeof NearestMipMapLinearFilter
    | typeof LinearFilter
    | typeof LinearMipmapNearestFilter
    | typeof LinearMipMapNearestFilter
    | typeof LinearMipmapLinearFilter
    | typeof LinearMipMapLinearFilter;

// Data types
export const UnsignedByteType: 1009;
export const ByteType: 1010;
export const ShortType: 1011;
export const UnsignedShortType: 1012;
export const IntType: 1013;
export const UnsignedIntType: 1014;
export const FloatType: 1015;
export const HalfFloatType: 1016;
export const UnsignedShort4444Type: 1017;
export const UnsignedShort5551Type: 1018;
export const UnsignedInt248Type: 1020;
export type TextureDataType =
    | typeof UnsignedByteType
    | typeof ByteType
    | typeof ShortType
    | typeof UnsignedShortType
    | typeof IntType
    | typeof UnsignedIntType
    | typeof FloatType
    | typeof HalfFloatType
    | typeof UnsignedShort4444Type
    | typeof UnsignedShort5551Type
    | typeof UnsignedInt248Type;

// Pixel formats
export const AlphaFormat: 1021;
export const RGBAFormat: 1023;
export const LuminanceFormat: 1024;
export const LuminanceAlphaFormat: 1025;
export const DepthFormat: 1026;
export const DepthStencilFormat: 1027;
export const RedFormat: 1028;
export const RedIntegerFormat: 1029;
export const RGFormat: 1030;
export const RGIntegerFormat: 1031;
export const RGBAIntegerFormat: 1033;
export type PixelFormat =
    | typeof AlphaFormat
    | typeof RGBAFormat
    | typeof LuminanceFormat
    | typeof LuminanceAlphaFormat
    | typeof DepthFormat
    | typeof DepthStencilFormat
    | typeof RedFormat
    | typeof RedIntegerFormat
    | typeof RGFormat
    | typeof RGIntegerFormat
    | typeof RGBAIntegerFormat
    | typeof _SRGBAFormat;

// Compressed texture formats
// DDS / ST3C Compressed texture formats
export const RGB_S3TC_DXT1_Format: 33776;
export const RGBA_S3TC_DXT1_Format: 33777;
export const RGBA_S3TC_DXT3_Format: 33778;
export const RGBA_S3TC_DXT5_Format: 33779;

// PVRTC compressed './texture formats
export const RGB_PVRTC_4BPPV1_Format: 35840;
export const RGB_PVRTC_2BPPV1_Format: 35841;
export const RGBA_PVRTC_4BPPV1_Format: 35842;
export const RGBA_PVRTC_2BPPV1_Format: 35843;

// ETC compressed texture formats
export const RGB_ETC1_Format: 36196;
export const RGB_ETC2_Format: 37492;
export const RGBA_ETC2_EAC_Format: 37496;

// ASTC compressed texture formats
export const RGBA_ASTC_4x4_Format: 37808;
export const RGBA_ASTC_5x4_Format: 37809;
export const RGBA_ASTC_5x5_Format: 37810;
export const RGBA_ASTC_6x5_Format: 37811;
export const RGBA_ASTC_6x6_Format: 37812;
export const RGBA_ASTC_8x5_Format: 37813;
export const RGBA_ASTC_8x6_Format: 37814;
export const RGBA_ASTC_8x8_Format: 37815;
export const RGBA_ASTC_10x5_Format: 37816;
export const RGBA_ASTC_10x6_Format: 37817;
export const RGBA_ASTC_10x8_Format: 37818;
export const RGBA_ASTC_10x10_Format: 37819;
export const RGBA_ASTC_12x10_Format: 37820;
export const RGBA_ASTC_12x12_Format: 37821;

// BPTC compressed texture formats
export const RGBA_BPTC_Format: 36492;

// RGTC compressed texture formats
export const RED_RGTC1_Format: 36283;
export const SIGNED_RED_RGTC1_Format: 36284;
export const RED_GREEN_RGTC2_Format: 36285;
export const SIGNED_RED_GREEN_RGTC2_Format: 36286;
export type CompressedPixelFormat =
    | typeof RGB_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT3_Format
    | typeof RGBA_S3TC_DXT5_Format
    | typeof RGB_PVRTC_4BPPV1_Format
    | typeof RGB_PVRTC_2BPPV1_Format
    | typeof RGBA_PVRTC_4BPPV1_Format
    | typeof RGBA_PVRTC_2BPPV1_Format
    | typeof RGB_ETC1_Format
    | typeof RGB_ETC2_Format
    | typeof RGBA_ETC2_EAC_Format
    | typeof RGBA_ASTC_4x4_Format
    | typeof RGBA_ASTC_5x4_Format
    | typeof RGBA_ASTC_5x5_Format
    | typeof RGBA_ASTC_6x5_Format
    | typeof RGBA_ASTC_6x6_Format
    | typeof RGBA_ASTC_8x5_Format
    | typeof RGBA_ASTC_8x6_Format
    | typeof RGBA_ASTC_8x8_Format
    | typeof RGBA_ASTC_10x5_Format
    | typeof RGBA_ASTC_10x6_Format
    | typeof RGBA_ASTC_10x8_Format
    | typeof RGBA_ASTC_10x10_Format
    | typeof RGBA_ASTC_12x10_Format
    | typeof RGBA_ASTC_12x12_Format
    | typeof RGBA_BPTC_Format
    | typeof RED_RGTC1_Format
    | typeof SIGNED_RED_RGTC1_Format
    | typeof RED_GREEN_RGTC2_Format
    | typeof SIGNED_RED_GREEN_RGTC2_Format;

// Loop styles for AnimationAction
export const LoopOnce: 2200;
export const LoopRepeat: 2201;
export const LoopPingPong: 2202;
export type AnimationActionLoopStyles = typeof LoopOnce | typeof LoopRepeat | typeof LoopPingPong;

// Interpolation
export const InterpolateDiscrete: 2300;
export const InterpolateLinear: 2301;
export const InterpolateSmooth: 2302;
export type InterpolationModes = typeof InterpolateDiscrete | typeof InterpolateLinear | typeof InterpolateSmooth;

// Interpolant ending modes
export const ZeroCurvatureEnding: 2400;
export const ZeroSlopeEnding: 2401;
export const WrapAroundEnding: 2402;
export type InterpolationEndingModes = typeof ZeroCurvatureEnding | typeof ZeroSlopeEnding | typeof WrapAroundEnding;

// Animation blending modes
export const NormalAnimationBlendMode: 2500;
export const AdditiveAnimationBlendMode: 2501;
export type AnimationBlendMode = typeof NormalAnimationBlendMode | typeof AdditiveAnimationBlendMode;

// Triangle Draw modes
export const TrianglesDrawMode: 0;
export const TriangleStripDrawMode: 1;
export const TriangleFanDrawMode: 2;
export type TrianglesDrawModes = typeof TrianglesDrawMode | typeof TriangleStripDrawMode | typeof TriangleFanDrawMode;

// Texture Encodings
export const LinearEncoding: 3000;
export const sRGBEncoding: 3001;
export type TextureEncoding = typeof LinearEncoding | typeof sRGBEncoding;

// Depth packing strategies
export const BasicDepthPacking: 3200;
export const RGBADepthPacking: 3201;
export type DepthPackingStrategies = typeof BasicDepthPacking | typeof RGBADepthPacking;

// Normal Map types
export const TangentSpaceNormalMap: 0;
export const ObjectSpaceNormalMap: 1;
export type NormalMapTypes = typeof TangentSpaceNormalMap | typeof ObjectSpaceNormalMap;
export const NoColorSpace: '';
export const SRGBColorSpace: 'srgb';
export const LinearSRGBColorSpace: 'srgb-linear';
export type ColorSpace = typeof NoColorSpace | typeof SRGBColorSpace | typeof LinearSRGBColorSpace;

// Stencil Op types
export const ZeroStencilOp: 0;
export const KeepStencilOp: 7680;
export const ReplaceStencilOp: 7681;
export const IncrementStencilOp: 7682;
export const DecrementStencilOp: 7283;
export const IncrementWrapStencilOp: 34055;
export const DecrementWrapStencilOp: 34056;
export const InvertStencilOp: 5386;
export type StencilOp =
    | typeof ZeroStencilOp
    | typeof KeepStencilOp
    | typeof ReplaceStencilOp
    | typeof IncrementStencilOp
    | typeof DecrementStencilOp
    | typeof IncrementWrapStencilOp
    | typeof DecrementWrapStencilOp
    | typeof InvertStencilOp;

// Stencil Func types
export const NeverStencilFunc: 512;
export const LessStencilFunc: 513;
export const EqualStencilFunc: 514;
export const LessEqualStencilFunc: 515;
export const GreaterStencilFunc: 516;
export const NotEqualStencilFunc: 517;
export const GreaterEqualStencilFunc: 518;
export const AlwaysStencilFunc: 519;
export type StencilFunc =
    | typeof NeverStencilFunc
    | typeof LessStencilFunc
    | typeof EqualStencilFunc
    | typeof LessEqualStencilFunc
    | typeof GreaterStencilFunc
    | typeof NotEqualStencilFunc
    | typeof GreaterEqualStencilFunc
    | typeof AlwaysStencilFunc;

// usage types
export const StaticDrawUsage: 35044;
export const DynamicDrawUsage: 35048;
export const StreamDrawUsage: 35040;
export const StaticReadUsage: 35045;
export const DynamicReadUsage: 35049;
export const StreamReadUsage: 35041;
export const StaticCopyUsage: 35046;
export const DynamicCopyUsage: 35050;
export const StreamCopyUsage: 35042;
export type Usage =
    | typeof StaticDrawUsage
    | typeof DynamicDrawUsage
    | typeof StreamDrawUsage
    | typeof StaticReadUsage
    | typeof DynamicReadUsage
    | typeof StreamReadUsage
    | typeof StaticCopyUsage
    | typeof DynamicCopyUsage
    | typeof StreamCopyUsage;
export const GLSL1: '100';
export const GLSL3: '300 es';
export type GLSLVersion = typeof GLSL1 | typeof GLSL3;
export const _SRGBAFormat = 1035; // fallback for WebGL 1

// Internal Pixel Formats
export type PixelFormatGPU =
    | 'ALPHA'
    | 'RGB'
    | 'RGBA'
    | 'LUMINANCE'
    | 'LUMINANCE_ALPHA'
    | 'RED_INTEGER'
    | 'R8'
    | 'R8_SNORM'
    | 'R8I'
    | 'R8UI'
    | 'R16I'
    | 'R16UI'
    | 'R16F'
    | 'R32I'
    | 'R32UI'
    | 'R32F'
    | 'RG8'
    | 'RG8_SNORM'
    | 'RG8I'
    | 'RG8UI'
    | 'RG16I'
    | 'RG16UI'
    | 'RG16F'
    | 'RG32I'
    | 'RG32UI'
    | 'RG32F'
    | 'RGB565'
    | 'RGB8'
    | 'RGB8_SNORM'
    | 'RGB8I'
    | 'RGB8UI'
    | 'RGB16I'
    | 'RGB16UI'
    | 'RGB16F'
    | 'RGB32I'
    | 'RGB32UI'
    | 'RGB32F'
    | 'RGB9_E5'
    | 'SRGB8'
    | 'R11F_G11F_B10F'
    | 'RGBA4'
    | 'RGBA8'
    | 'RGBA8_SNORM'
    | 'RGBA8I'
    | 'RGBA8UI'
    | 'RGBA16I'
    | 'RGBA16UI'
    | 'RGBA16F'
    | 'RGBA32I'
    | 'RGBA32UI'
    | 'RGBA32F'
    | 'RGB5_A1'
    | 'RGB10_A2'
    | 'RGB10_A2UI'
    | 'SRGB8_ALPHA8'
    | 'SRGB8'
    | 'DEPTH_COMPONENT16'
    | 'DEPTH_COMPONENT24'
    | 'DEPTH_COMPONENT32F'
    | 'DEPTH24_STENCIL8'
    | 'DEPTH32F_STENCIL8';
export type BuiltinShaderAttributeName =
    | 'position'
    | 'normal'
    | 'uv'
    | 'color'
    | 'skinIndex'
    | 'skinWeight'
    | 'instanceMatrix'
    | 'morphTarget0'
    | 'morphTarget1'
    | 'morphTarget2'
    | 'morphTarget3'
    | 'morphTarget4'
    | 'morphTarget5'
    | 'morphTarget6'
    | 'morphTarget7'
    | 'morphNormal0'
    | 'morphNormal1'
    | 'morphNormal2'
    | 'morphNormal3';




/**
 * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
 * associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU
 * @remarks
 * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
 * {@link THREE.Vector2.fromBufferAttribute | Vector2},
 * {@link THREE.Vector3.fromBufferAttribute | Vector3},
 * {@link THREE.Vector4.fromBufferAttribute | Vector4}, and
 * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
 * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry - Clean up Memory}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class BufferAttribute {
    /**
     * This creates a new {@link THREE.GLBufferAttribute | GLBufferAttribute} object.
     * @param array Must be a `TypedArray`. Used to instantiate the buffer.
     * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry | BufferGeometry}.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @throws `TypeError` When the {@link array} is not a `TypedArray`;
     */
    constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean); // array parameter should be `TypedArray`.

    /**
     * Optional name for this attribute instance.
     * @defaultValue ''
     */
    name: string;

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} holding data stored in the buffer.
     * @returns `TypedArray`
     */
    array: ArrayLike<number>;

    /**
     * The length of vectors that are being stored in the {@link BufferAttribute.array | array}.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    usage: Usage;

    /**
     * This can be used to only update some components of stored vectors (for example, just the component related to color).
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     */
    updateRange: {
        /**
         * Position at which to start update.
         * @defaultValue `0`
         */
        offset: number;
        /** @defaultValue `-1`, which means don't use update ranges. */
        count: number;
    };

    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Indicates how the underlying data in the buffer maps to the values in the GLSL shader code.
     * @see `constructor` above for details.
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * Stores the {@link BufferAttribute.array | array}'s length divided by the {@link BufferAttribute.itemSize | itemSize}.
     * @remarks If the buffer is storing a 3-component vector (such as a position, normal, or color), then this will count the number of such vectors stored.
     * @remarks Expects a `Integer`
     */
    count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link BufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferAttribute: true;

    /**
     * A callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUploadCallback: () => void;

    /**
     * Sets the value of the {@link onUploadCallback} property.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry} this is used to free memory after the buffer has been transferred to the GPU.
     * @see {@link onUploadCallback}
     * @param callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUpload(callback: () => void): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(usage: Usage): this;

    /**
     * @returns a copy of this {@link BufferAttribute}.
     */
    clone(): BufferAttribute;

    /**
     * Copies another {@link BufferAttribute} to this {@link BufferAttribute}.
     * @param bufferAttribute
     */
    copy(source: BufferAttribute): this;

    /**
     * Copy a vector from bufferAttribute[index2] to {@link BufferAttribute.array | array}[index1].
     * @param index1
     * @param bufferAttribute
     * @param index2
     */
    copyAt(index1: number, attribute: BufferAttribute, index2: number): this;

    /**
     * Copy the array given here (which can be a normal array or `TypedArray`) into {@link BufferAttribute.array | array}.
     * @See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set} for notes on requirements if copying a `TypedArray`.
     */
    copyArray(array: ArrayLike<number>): this;

    /**
     * Applies matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyNormalMatrix(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(m: Matrix4): this;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value {@link Array | Array} or `TypedArray` from which to copy values.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number> | ArrayBufferView, offset?: number): this;

    /**
     * Returns the x component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param y
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param z
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param w
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     */
    setXY(index: number, x: number, y: number): this;

    /**
     * Sets the x, y and z components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     * @param w
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Convert this object to three.js to the `data.attributes` part of {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     */
    toJSON(): {
        itemSize: number;
        type: string;
        array: number[];
        normalized: boolean;
    };
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array: Int8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int8BufferAttribute | Int8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array: Uint8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8BufferAttribute | Uint8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray: Uint8ClampedArray}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint8ClampedBufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8ClampedBufferAttribute | Uint8ClampedBufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array: Int16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int16BufferAttribute | Int16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint16BufferAttribute | Uint16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array: Int32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int32BufferAttribute | Int32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array: Uint32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint32BufferAttribute | Uint32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Float16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float16BufferAttribute | Float16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array: Float32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Float32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float32BufferAttribute | Float32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array: Float64Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Float64BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float64BufferAttribute | Float64BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float64Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}













/**
 * A representation of mesh, line, or point geometry
 * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU.
 * @remarks
 * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry();
 * // create a simple square shape. We duplicate the top left and bottom right
 * // vertices because each vertex needs to appear once per triangle.
 * const vertices = new Float32Array([
 *         -1.0, -1.0, 1.0,
 *          1.0, -1.0, 1.0,
 *          1.0,  1.0, 1.0,
 *
 *          1.0,  1.0, 1.0,
 *         -1.0,  1.0, 1.0,
 *         -1.0, -1.0, 1.0]);
 * // itemSize = 3 because there are 3 values (components) per vertex
 * geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
 * const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
 * const mesh = new THREE.Mesh(geometry, material);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | Mesh with non-indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed | Mesh with indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines | Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed | Indexed Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles | Particles}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader | Raw Shaders}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js | Source}
 */
export class BufferGeometry extends EventDispatcher {
    /**
     * This creates a new {@link THREE.BufferGeometry | BufferGeometry} object.
     */
    constructor();

    /**
     * Unique number for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @remarks Expects a `Integer`
     */
    id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * @defaultValue `BufferGeometry`
     */
    type: string; // TODO Replace for "BufferGeometry" // TODO add readonly

    /**
     * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
     * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
     * If this attribute is not set, the {@link THREE.WebGLRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
     * @defaultValue `null`
     */
    index: BufferAttribute | null;

    /**
     * This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttribute | buffer} to set it to. Rather than accessing this property directly,
     * use {@link setAttribute | .setAttribute} and {@link getAttribute | .getAttribute} to access attributes of this geometry.
     * @defaultValue `{}`
     */
    attributes: {
        [name: string]: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute; // TODO Replace for 'Record<>'
    };

    /**
     * Hashmap of {@link THREE.BufferAttribute | BufferAttributes} holding details of the geometry's morph targets.
     * @remarks
     * Once the geometry has been rendered, the morph attribute data cannot be changed.
     * You will have to call {@link dispose | .dispose}(), and create a new instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @defaultValue `{}`
     */
    morphAttributes: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>; // TODO Replace for 'Record<>'
    };

    /**
     * Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.
     * @defaultValue `false`
     */
    morphTargetsRelative: boolean;

    /**
     * Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
     * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
     * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
     * @defaultValue `[]`
     */
    groups: Array<{
        /**
         * Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.
         * @remarks Expects a `Integer`
         */
        start: number;
        /**
         * Specifies how many vertices (or indices) are included.
         * @remarks Expects a `Integer`
         */
        count: number;
        /**
         * Specifies the material array index to use.
         * @remarks Expects a `Integer`
         */
        materialIndex?: number | undefined;
    }>;

    /**
     * Bounding box for the bufferGeometry, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingBox: Box3 | null;

    /**
     * Bounding sphere for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingSphere: Sphere | null;

    /**
     * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...)}.
     * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of vertices to render.
     * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of indices to render.
     * @defaultValue `{ start: 0, count: Infinity }`
     */
    drawRange: { start: number; count: number };

    /**
     * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    userData: { [key: string]: any };

    /**
     * Read-only flag to check if a given object is of type {@link BufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferGeometry: true;

    /**
     * Return the {@link index | .index} buffer.
     */
    getIndex(): BufferAttribute | null;

    /**
     * Set the {@link THREE.BufferGeometry.index | .index} buffer.
     * @param index
     */
    setIndex(index: BufferAttribute | number[] | null): this;

    /**
     * Sets an {@link attributes | attribute} to this geometry with the specified name.
     * @remarks
     * Use this rather than the attributes property, because an internal hashmap of {@link attributes | .attributes} is maintained to speed up iterating over attributes.
     * @param name
     * @param attribute
     */
    setAttribute(
        name: BuiltinShaderAttributeName | (string & {}),
        attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute,
    ): this;

    /**
     * Returns the {@link attributes | attribute} with the specified name.
     * @param name
     */
    getAttribute(
        name: BuiltinShaderAttributeName | (string & {}),
    ): BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute;

    /**
     * Deletes the  {@link attributes | attribute} with the specified name.
     * @param name
     */
    deleteAttribute(name: BuiltinShaderAttributeName | (string & {})): BufferGeometry;

    /**
     * Returns true if the {@link attributes | attribute} with the specified name exists.
     * @param name
     */
    hasAttribute(name: BuiltinShaderAttributeName | (string & {})): boolean;

    /**
     * Adds a group to this geometry
     * @see the {@link BufferGeometry.groups | groups} property for details.
     * @param start
     * @param count
     * @param materialIndex
     */
    addGroup(start: number, count: number, materialIndex?: number): void;

    /**
     * Clears all groups.
     */
    clearGroups(): void;

    /**
     * Set the {@link drawRange | .drawRange} property
     * @remarks For non-indexed BufferGeometry, count is the number of vertices to render
     * @remarks For indexed BufferGeometry, count is the number of indices to render.
     * @param start
     * @param count is the number of vertices or indices to render. Expects a `Integer`
     */
    setDrawRange(start: number, count: number): void;

    /**
     * Applies the matrix transform to the geometry.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): this;

    /**
     * Applies the rotation represented by the quaternion to the geometry.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotate the geometry about the Y axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotate the geometry about the Z axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate the geometry.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.position | Object3D.position} for typical real-time mesh rotation.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    translate(x: number, y: number, z: number): this;

    /**
     * Scale the geometry data.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.scale | Object3D.scale} for typical real-time mesh scaling.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    scale(x: number, y: number, z: number): this;

    /**
     * Rotates the geometry to face a point in space.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.lookAt | Object3D.lookAt} for typical real-time mesh usage.
     * @param vector A world vector to look at.
     */
    lookAt(vector: Vector3): this;

    /**
     * Center the geometry based on the bounding box.
     */
    center(): this;

    /**
     * Sets the attributes for this BufferGeometry from an array of points.
     * @param points
     */
    setFromPoints(points: Vector3[] | Vector2[]): this;

    /**
     * Computes bounding box of the geometry, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingBox(): void;

    /**
     * Computes bounding sphere of the geometry, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingSphere(): void;

    /**
     * Calculates and adds a tangent attribute to this geometry.
     * The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
     * @remarks
     * When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
     * {@link BufferGeometryUtils.computeMikkTSpaceTangents} instead.
     */
    computeTangents(): void;

    /**
     * Computes vertex normals by averaging face normals.
     */
    computeVertexNormals(): void;

    /**
     * Every normal vector in a geometry will have a magnitude of 1
     * @remarks This will correct lighting on the geometry surfaces.
     */
    normalizeNormals(): void;

    /**
     * Return a non-index version of an indexed BufferGeometry.
     */
    toNonIndexed(): BufferGeometry;

    /**
     * Convert the buffer geometry to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     */
    toJSON(): {};

    /**
     * Creates a clone of this BufferGeometry
     */
    clone(): BufferGeometry;

    /**
     * Copies another BufferGeometry to this BufferGeometry.
     * @param source
     */
    copy(source: BufferGeometry): this;

    /**
     * Frees the GPU-related resources allocated by this instance.
     * @remarks Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
/**
 * Object for keeping track of time
 * @remarks
 * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
 * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
 */
export class Clock {
    /**
     * Create a new instance of {@link THREE.Clock | Clock}
     * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
     */
    constructor(autoStart?: boolean);

    /**
     * If set, starts the clock automatically when {@link getDelta | .getDelta()} is called for the first time.
     * @defaultValue `true`
     */
    autoStart: boolean;

    /**
     * Holds the time at which the clock's {@link start | .start()} method was last called.
     * @defaultValue `0`
     */
    startTime: number;

    /**
     * Holds the time at which the clock's {@link start | .start()}, {@link getElapsedTime | .getElapsedTime()} or {@link getDelta | .getDelta()} methods were last called.
     * @defaultValue `0`
     */
    oldTime: number;

    /**
     * Keeps track of the total time that the clock has been running.
     * @defaultValue `0`
     */
    elapsedTime: number;

    /**
     * Whether the clock is running or not.
     * @defaultValue `false`
     */
    running: boolean;

    /**
     * Starts clock.
     * @remarks
     * Also sets the {@link startTime | .startTime} and {@link oldTime | .oldTime} to the current time,
     * sets {@link elapsedTime | .elapsedTime} to `0` and {@link running | .running} to `true`.
     */
    start(): void;

    /**
     * Stops clock and sets {@link oldTime | oldTime} to the current time.
     */
    stop(): void;

    /**
     * Get the seconds passed since the clock started and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getElapsedTime(): number;

    /**
     * Get the seconds passed since the time {@link oldTime | .oldTime} was set and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getDelta(): number;
}
export interface BaseEvent {
    type: string;
}

/**
 * Event object.
 */
export interface Event extends BaseEvent {
    target?: any;
    [attachment: string]: any;
}
export type EventListener<E, T, U> = (event: E & { type: T } & { target: U }) => void;

/**
 * JavaScript events for custom objects
 * @example
 * ```typescript
 * // Adding events to a custom object
 * class Car extends EventDispatcher {
 *   start() {
 *     this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
 *   }
 * };
 * // Using events with the custom object
 * const car = new Car();
 * car.addEventListener( 'start', ( event ) => {
 *   alert( event.message );
 * } );
 * car.start();
 * ```
 * @see {@link https://github.com/mrdoob/eventdispatcher.js | mrdoob EventDispatcher on GitHub}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js | Source}
 */
export class EventDispatcher<E extends BaseEvent = Event> {
    /**
     * Creates {@link THREE.EventDispatcher | EventDispatcher} object.
     */
    constructor();

    /**
     * Adds a listener to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    addEventListener<T extends E['type']>(type: T, listener: EventListener<E, T, this>): void;

    /**
     * Checks if listener is added to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    hasEventListener<T extends E['type']>(type: T, listener: EventListener<E, T, this>): boolean;

    /**
     * Removes a listener from an event type.
     * @param type The type of the listener that gets removed.
     * @param listener The listener function that gets removed.
     */
    removeEventListener<T extends E['type']>(type: T, listener: EventListener<E, T, this>): void;

    /**
     * Fire an event type.
     * @param event The event that gets fired.
     */
    dispatchEvent(event: E): void;
}
/**
 * This buffer attribute class does not construct a VBO.
 * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
 * @remarks
 * It is required to pass additional params alongside the VBO
 * Those are: the GL context, the GL data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
 * @remarks
 * The most common use case for this class is when some kind of GPGPU calculation interferes or even produces the VBOs in question.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute | WebGL / buffergeometry / glbufferattribute}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/GLBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js | Source}
 */
export class GLBufferAttribute {
    /**
     * This creates a new GLBufferAttribute object.
     * @param buffer Must be a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer}. See {@link GLBufferAttribute.buffer | .buffer}
     * @param type One of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Types}. See {@link GLBufferAttribute.type | .type}
     * @param itemSize How many values make up each item (vertex). See {@link GLBufferAttribute.itemSize | .itemSize}
     * @param elementSize `1`, `2` or `4`. The corresponding size (in bytes) for the given {@link type} param. See {@link GLBufferAttribute.elementSize | .elementSize}
     * @param count The expected number of vertices in VBO. See {@link GLBufferAttribute.count | .count}
     */
    constructor(buffer: WebGLBuffer, type: GLenum, itemSize: number, elementSize: 1 | 2 | 4, count: number);

    /**
     * Read-only flag to check if a given object is of type {@link GLBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isGLBufferAttribute: true;

    /**
     * Optional name for this attribute instance.
     * @defaultValue `""`
     */
    name: string;

    /**
     * The current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer} instance.
     */
    buffer: WebGLBuffer;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Type} describing the underlying VBO contents.
     *
     * #### WebGL Data Type (`GLenum`)
     * - gl.BYTE: 0x1400
     * - gl.UNSIGNED_BYTE: 0x1401
     * - gl.SHORT: 0x1402
     * - gl.UNSIGNED_SHORT: 0x1403
     * - gl.INT: 0x1404
     * - gl.UNSIGNED_INT: 0x1405
     * - gl.FLOAT: 0x1406
     * @remarks Set this property together with {@link elementSize | .elementSize}. The recommended way is using the {@link setType | .setType()} method.
     * @remarks Expects a `DataType` `GLenum` _possible values:_ `0x1400` `0x1401` `0x1402` `0x1403` `0x1404` `0x1405` `0x1406`
     */
    type: GLenum;

    /**
     * How many values make up each item (vertex).
     * @remarks The number of values of the array that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a position, normal, or color), then itemSize should be 3.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * Stores the corresponding size in bytes for the current {@link type | .type} property value.
     *
     * The corresponding size (_in bytes_) for the given "type" param.
     * #### WebGL Data Type (`GLenum`)
     * - gl.BYTE: 1
     * - gl.UNSIGNED_BYTE: 1
     * - gl.SHORT: 2
     * - gl.UNSIGNED_SHORT: 2
     * - gl.INT: 4
     * - gl.UNSIGNED_INT: 4
     * - gl.FLOAT: 4
     * @remarks Set this property together with {@link type | .type}. The recommended way is using the {@link setType | .setType} method.
     * @see `constructor`` for a list of known type sizes.
     * @remarks Expects a `1`, `2` or `4`
     */
    elementSize: 1 | 2 | 4;

    /**
     * The expected number of vertices in VBO.
     * @remarks Expects a `Integer`
     */
    count: number;

    /**
     * A version number, incremented every time the needsUpdate property is set to true.
     * @remarks Expects a `Integer`
     */
    version: number;

    /**
     * Setting this to true increments {@link version | .version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Sets the {@link buffer | .buffer} property.
     */
    setBuffer(buffer: WebGLBuffer): this;

    /**
     * Sets the both {@link GLBufferAttribute.type | type} and {@link GLBufferAttribute.elementSize | elementSize} properties.
     */
    setType(type: GLenum, elementSize: 1 | 2 | 4): this;

    /**
     * Sets the {@link GLBufferAttribute.itemSize | itemSize} property.
     */
    setItemSize(itemSize: number): this;

    /**
     * Sets the {@link GLBufferAttribute.count | count} property.
     */
    setCount(count: number): this;
}



/**
 * An instanced version of {@link THREE.InstancedBufferAttributeBufferAttribute | BufferAttribute}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
 */
export class InstancedBufferAttribute extends BufferAttribute {
    /**
     * Create a new instance of {@link THREE.InstancedBufferAttribute | InstancedBufferAttribute}
     * @param array
     * @param itemSize
     * @param normalized
     * @param meshPerAttribute
     */
    constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean, meshPerAttribute?: number);

    /**
     * Defines how often a value of this buffer attribute should be repeated.
     * A value of one means that each value of the instanced attribute is used for a single instance.
     * A value of two means that each value is used for two consecutive instances (and so on).
     * @defaultValue `1`
     */
    meshPerAttribute: number;
}


/**
 * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
 */
export class InstancedBufferGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link InstancedBufferGeometry}
     */
    constructor();

    /**
     * @defaultValue `InstancedBufferGeometry`
     */
    type: string;

    /**
     * Read-only flag to check if a given object is of type {@link InstancedBufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedBufferGeometry: true;

    /**
     *
     * @defaultValue `Infinity`
     */
    instanceCount: number;

    /**
     * Copies the given {@link InstancedBufferGeometry} to this instance.
     * @param source
     * @override
     */
    copy(source: InstancedBufferGeometry): this;
}


/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */
export class InstancedInterleavedBuffer extends InterleavedBuffer {
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number);

    /**
     * @defaultValue `1`
     */
    meshPerAttribute: number;
}



/**
 * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
 * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
 */
export class InterleavedBuffer {
    /**
     * Create a new instance of {@link InterleavedBuffer}
     * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     * @param stride The number of typed-array elements per vertex. Expects a `Integer`
     */
    constructor(array: ArrayLike<number>, stride: number);

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     */
    array: ArrayLike<number>;

    /**
     * The number of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} elements per vertex.
     * @remarks Expects a `Integer`
     */
    stride: number;

    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    usage: Usage;

    /**
     * Object containing offset and count.
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     */
    updateRange: {
        /** @defaultValue `0` */
        offset: number;
        /** @defaultValue `-1` */
        count: number;
    };

    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Gives the total number of elements in the array.
     * @remarks Expects a `Integer`
     * @defaultValue 0
     */
    count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value The source `TypedArray`.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number>, offset: number): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(value: Usage): this;

    /**
     * Copies another {@link InterleavedBuffer} to this {@link InterleavedBuffer} instance.
     * @param source
     */
    copy(source: InterleavedBuffer): this;

    /**
     * Copies data from {@link attribute}[{@link index2}] to {@link InterleavedBuffer.array | array}[{@link index1}].
     * @param index1 Expects a `Integer`
     * @param attribute
     * @param index2 Expects a `Integer`
     */
    copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): this;

    /**
     * Creates a clone of this {@link InterleavedBuffer}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data: {}): InterleavedBuffer;

    /**
     * Serializes this {@link InterleavedBuffer}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data: {}): {
        uuid: string;
        buffer: string;
        type: string;
        stride: number;
    };
}





/**
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
 */
export class InterleavedBufferAttribute {
    /**
     * Create a new instance of {@link THREE.InterleavedBufferAttribute | InterleavedBufferAttribute}.
     * @param interleavedBuffer
     * @param itemSize
     * @param offset
     * @param normalized Default `false`.
     */
    constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean);

    /**
     * Optional name for this attribute instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * The {@link InterleavedBuffer | InterleavedBuffer} instance passed in the constructor.
     */
    data: InterleavedBuffer;

    /**
     * How many values make up each item.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * The offset in the underlying array buffer where an item starts.
     * @remarks Expects a `Integer`
     */
    offset: number;

    /**
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * The value of {@link data | .data}.{@link InterleavedBuffer.count | count}.
     * If the buffer is storing a 3-component item (such as a _position, normal, or color_), then this will count the number of such items stored.
     * @remarks _get-only property_.
     * @remarks Expects a `Integer`
     */
    get count(): number;

    /**
     * The value of {@link InterleavedBufferAttribute.data | data}.{@link InterleavedBuffer.array | array}.
     * @remarks _get-only property_.
     */
    get array(): ArrayLike<number>;

    /**
     * Flag to indicate that the {@link data | .data} ({@link InterleavedBuffer}) attribute has changed and should be re-sent to the GPU.
     * @remarks Setting this to have the same result of setting true also increments the {@link InterleavedBuffer.needsUpdate | InterleavedBuffer.needsUpdate} of {@link data | .data}.
     * @remarks Setting this to true also increments the {@link InterleavedBuffer.version | InterleavedBuffer.version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link InterleavedBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInterleavedBufferAttribute: true;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyNormalMatrix(matrix: Matrix): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(matrix: Matrix): this;

    /**
     * Returns the x component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the item at the given index.
     * @param index Expects a `Integer`
     * @param y Expects a `Float`
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the item at the given index.
     * @param index Expects a `Integer`
     * @param z Expects a `Float`
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the item at the given index.
     * @param index Expects a `Integer`
     * @param w Expects a `Float`
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    setXY(index: number, x: number, y: number): this;
    /**
     * Sets the x, y and z components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     * @param w Expects a `Float`
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Creates a clone of this {@link InterleavedBufferAttribute}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data?: {}): BufferAttribute;

    /**
     * Serializes this {@link InterleavedBufferAttribute}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data?: {}): {
        isInterleavedBufferAttribute: true;
        itemSize: number;
        data: string;
        offset: number;
        normalized: boolean;
    };
}
/**
 * A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3D | Object3D} to 1 or more of 32 layers numbered `0` to `31` - internally the
 * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask}, and
 * by default all Object3Ds are a member of layer `0`.
 * @remarks
 * This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered.
 * @remarks
 * All classes that inherit from {@link THREE.Object3D | Object3D} have an {@link THREE.Object3D.layers | Object3D.layers} property which is an instance of this class.
 * @see Example: {@link https://threejs.org/examples/#webgl_layers | WebGL / layers}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers | Webxr / vr / layers}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js | Source}
 */
export class Layers {
    /**
     * Create a new Layers object, with membership initially set to layer 0.
     */
    constructor();

    /**
     * A bit mask storing which of the 32 layers this layers object is currently a member of.
     * @defaultValue `1 | 0`
     * @remarks Expects a `Integer`
     */
    mask: number;

    /**
     * Set membership to `layer`, and remove membership all other layers.
     * @param layer An integer from 0 to 31.
     */
    set(layer: number): void;

    /**
     * Add membership of this `layer`.
     * @param layer An integer from 0 to 31.
     */
    enable(layer: number): void;

    /**
     * Add membership to all layers.
     */
    enableAll(): void;

    /**
     * Toggle membership of `layer`.
     * @param layer An integer from 0 to 31.
     */
    toggle(layer: number): void;

    /**
     * Remove membership of this `layer`.
     * @param layer An integer from 0 to 31.
     */
    disable(layer: number): void;

    /**
     * Remove membership from all layers.
     */
    disableAll(): void;

    /**
     * Returns true if this and the passed `layers` object have at least one layer in common.
     * @param layers A Layers object
     */
    test(layers: Layers): boolean;

    /**
     * Returns true if the given layer is enabled.
     * @param layer An integer from 0 to 31.
     */
    isEnabled(layer: number): boolean;
}
















/**
 * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.
 * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3D.add | .add()} method which adds the object as a child,
 * however it is better to use {@link THREE.Group | Group} for this.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3D | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js | Source}
 */
export class Object3D<E extends BaseEvent = Event> extends EventDispatcher<E> {
    /**
     * This creates a new {@link Object3D} object.
     */
    constructor();

    /**
     * Unique number for this object instance.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @remarks Expects a `Integer`
     */
    readonly id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name of the object (doesn't need to be unique).
     * @defaultValue `''`
     */
    name: string;

    /**
     * @defaultValue `Object3D`
     */
    type: string; // TODO Replace for "Object3D" // TODO add readonly

    /**
     * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
     * @remarks An object can have at most one parent.
     * @defaultValue `null`
     */
    parent: Object3D | null;

    /**
     * Array with object's children.
     * @see {@link THREE.Object3DGroup | Group} for info on manually grouping objects.
     * @defaultValue `[]`
     */

    children: Object3D[];

    /**
     * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
     * @defaultValue {@link DEFAULT_UP | Object3D.DEFAULT_UP} - that is `(0, 1, 0)`.
     */
    up: Vector3;

    /**
     * Object's local position.
     * @defaultValue `new THREE.Vector3()` - that is `(0, 0, 0)`.
     */
    readonly position: Vector3;

    /**
     * Object's local rotation ({@link https://en.wikipedia.org/wiki/Euler_angles | Euler angles}), in radians.
     * @defaultValue `new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.
     */
    readonly rotation: Euler;

    /**
     * Object's local rotation as a {@link THREE.Quaternion | Quaternion}.
     * @defaultValue `new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.
     */
    readonly quaternion: Quaternion;

    /**
     * The object's local scale.
     * @defaultValue `new THREE.Vector3( 1, 1, 1 )`
     */
    readonly scale: Vector3;

    /**
     * @defaultValue `new THREE.Matrix4()`
     */
    readonly modelViewMatrix: Matrix4;

    /**
     * @defaultValue `new THREE.Matrix3()`
     */
    readonly normalMatrix: Matrix3;

    /**
     * The local transform matrix.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrix: Matrix4;

    /**
     * The global transform of the object.
     * @remarks If the {@link Object3D} has no parent, then it's identical to the local transform {@link THREE.Object3D.matrix | .matrix}.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrixWorld: Matrix4;

    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and
     * scale every frame and also recalculates the matrixWorld property.
     * @defaultValue {@link DEFAULT_MATRIX_AUTO_UPDATE} - that is `(true)`.
     */
    matrixAutoUpdate: boolean;

    /**
     * If set, then the renderer checks every frame if the object and its children need matrix updates.
     * When it isn't, then you have to maintain all matrices in the object and its children yourself.
     * @defaultValue {@link DEFAULT_MATRIX_WORLD_AUTO_UPDATE} - that is `(true)`.
     */
    matrixWorldAutoUpdate: boolean;

    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     * @defaultValue `false`
     */
    matrixWorldNeedsUpdate: boolean;

    /**
     * The layer membership of the object.
     * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3DCamera | Camera} in use.
     * @remarks This property can also be used to filter out unwanted objects in ray-intersection tests when using {@link THREE.Raycaster | Raycaster}.
     * @defaultValue `new THREE.Layers()`
     */
    layers: Layers;

    /**
     * Object gets rendered if `true`.
     * @defaultValue `true`
     */
    visible: boolean;

    /**
     * Whether the object gets rendered into shadow map.
     * @defaultValue `false`
     */
    castShadow: boolean;

    /**
     * Whether the material receives shadows.
     * @defaultValue `false`
     */
    receiveShadow: boolean;

    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
     * If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.
     * @defaultValue `true`
     */
    frustumCulled: boolean;

    /**
     * This value allows the default rendering order of {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}
     * objects to be overridden although opaque and transparent objects remain sorted independently.
     * @remarks When this property is set for an instance of {@link Group | Group}, all descendants objects will be sorted and rendered together.
     * @remarks Sorting is from lowest to highest renderOrder.
     * @defaultValue `0`
     */
    renderOrder: number;

    /**
     * Array with object's animation clips.
     * @defaultValue `[]`
     */
    animations: AnimationClip[];

    /**
     * An object that can be used to store custom data about the {@link Object3D}.
     * @remarks It should not hold references to _functions_ as these **will not** be cloned.
     * @default `{}`
     */
    userData: { [key: string]: any }; // TODO Replace this to a Record?
    uniforms: { [key: string]: any };
    /**
     * Custom depth material to be used when rendering to the depth map.
     * @remarks Can only be used in context of meshes.
     * @remarks When shadow-casting with a {@link THREE.DirectionalLight | DirectionalLight} or {@link THREE.SpotLight | SpotLight},
     * if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.
     * @defaultValue `undefined`
     */
    customDepthMaterial?: Material | undefined;

    /**
     * Same as {@link customDepthMaterial}, but used with {@link THREE.Object3DPointLight | PointLight}.
     * @defaultValue `undefined`
     */
    customDistanceMaterial?: Material | undefined;

    /**
     * Flag to check if a given object is of type {@link Object3D}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isObject3D: true;

    /**
     * An optional callback that is executed immediately before a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * @remarks Please notice that this callback is only executed for `renderable` 3D objects.
     * Meaning 3D objects which define their visual appearance with geometries and materials like
     * instances of {@link THREE.Object3DMesh | Mesh}, {@link THREE.Object3DLine | Line}, {@link THREE.Object3DPoints | Points} or {@link THREE.Object3DSprite | Sprite}.
     * Instances of {@link THREE.Object3DObject3D | Object3D}, {@link THREE.Object3DGroup | Group} or {@link THREE.Object3DBone | Bone}
     * are not renderable and thus this callback is not executed for such objects.
     * @defaultValue `() => {}`
     */
    onBeforeRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    /**
     * An optional callback that is executed immediately after a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * @remarks Please notice that this callback is only executed for `renderable` 3D objects.
     * Meaning 3D objects which define their visual appearance with geometries and materials like
     * instances of {@link THREE.Object3DMesh | Mesh}, {@link THREE.Object3DLine | Line}, {@link THREE.Object3DPoints | Points} or {@link THREE.Object3DSprite | Sprite}.
     * Instances of {@link THREE.Object3DObject3D | Object3D}, {@link THREE.Object3DGroup | Group} or {@link THREE.Object3DBone | Bone}
     * are not renderable and thus this callback is not executed for such objects.
     * @defaultValue `() => {}`
     */
    onAfterRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    /**
     * The default {@link up} direction for objects, also used as the default position for {@link THREE.DirectionalLight | DirectionalLight},
     * {@link THREE.HemisphereLight | HemisphereLight} and {@link THREE.Spotlight | Spotlight} (which creates lights shining from the top down).
     * @defaultValue `new THREE.Vector3( 0, 1, 0)`
     */
    static DEFAULT_UP: Vector3;

    /**
     * The default setting for {@link matrixAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_AUTO_UPDATE: boolean;

    /**
     * The default setting for {@link matrixWorldAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_WORLD_AUTO_UPDATE: boolean;

    /**
     * Applies the matrix transform to the object and updates the object's position, rotation and scale.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): void;

    /**
     * Applies the rotation represented by the quaternion to the object.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Calls {@link THREE.Quaternion.setFromAxisAngle | setFromAxisAngle}({@link axis}, {@link angle}) on the {@link quaternion | .quaternion}.
     * @param axis A normalized vector in object space.
     * @param angle Angle in radians. Expects a `Float`
     */
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;

    /**
     * Calls {@link THREE.Quaternion.setFromEuler | setFromEuler}({@link euler}) on the {@link quaternion | .quaternion}.
     * @param euler Euler angle specifying rotation amount.
     */
    setRotationFromEuler(euler: Euler): void;

    /**
     * Calls {@link THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix}({@link m}) on the {@link quaternion | .quaternion}.
     * @remarks Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).
     * @param m Rotate the quaternion by the rotation component of the matrix.
     */
    setRotationFromMatrix(m: Matrix4): void;

    /**
     * Copy the given {@link THREE.Quaternion | Quaternion} into {@link quaternion | .quaternion}.
     * @param q Normalized Quaternion.
     */
    setRotationFromQuaternion(q: Quaternion): void;

    /**
     * Rotate an object along an axis in object space.
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnAxis(axis: Vector3, angle: number): this;

    /**
     * Rotate an object along an axis in world space.
     * @remarks The axis is assumed to be normalized
     * @remarks Method Assumes no rotated parent.
     * @param axis A normalized vector in world space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnWorldAxis(axis: Vector3, angle: number): this;

    /**
     * Rotates the object around _x_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotates the object around _y_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotates the object around _z_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate an object by distance along an axis in object space
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param distance The distance to translate. Expects a `Float`
     */
    translateOnAxis(axis: Vector3, distance: number): this;

    /**
     * Translates object along x axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateX(distance: number): this;

    /**
     * Translates object along _y_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateY(distance: number): this;

    /**
     * Translates object along _z_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateZ(distance: number): this;

    /**
     * Converts the vector from this object's local space to world space.
     * @param vector A vector representing a position in this object's local space.
     */
    localToWorld(vector: Vector3): Vector3;

    /**
     * Converts the vector from world space to this object's local space.
     * @param vector A vector representing a position in world space.
     */
    worldToLocal(vector: Vector3): Vector3;

    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param vector A vector representing a position in world space to look at.
     */
    lookAt(vector: Vector3): void;
    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    lookAt(x: number, y: number, z: number): void;

    /**
     * Adds another {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be added
     * @remarks Any current parent on an {@link object} passed in here will be removed, since an {@link Object3D} can have at most one parent.
     * @see {@link attach}
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    add(...object: Object3D[]): this;
    addObject(object: Object3D): Object3D;
    /**
     * Removes a {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be removed.
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    remove(...object: Object3D[]): this;
    removeObject(object: Object3D): Object3D;
    /**
     * Removes this object from its current parent.
     */
    removeFromParent(): this;

    /**
     * Removes all child objects.
     */
    clear(): this;

    /**
     * Adds a {@link Object3D} as a child of this, while maintaining the object's world transform.
     * @remarks Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).
     * @see {@link add}
     * @param object
     */
    attach(object: Object3D): this;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching id.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @see {@link id}
     * @param id Unique number of the object instance. Expects a `Integer`
     */
    getObjectById(id: number): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching name.
     * @remarks Note that for most objects the name is an empty string by default
     * @remarks You will have to set it manually to make use of this method.
     * @param name String to match to the children's Object3D.name property.
     */
    getObjectByName(name: string): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     *
     * @param name - the property name to search for.
     * @param value - value of the given property.
     */
    getObjectByProperty(name: string, value: any): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     * @param name The property name to search for.
     * @param value Value of the given property.
     */
    getObjectsByProperty(name: string, value: any): Object3D[];

    /**
     * Returns a vector representing the position of the object in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldPosition(target: Vector3): Vector3;

    /**
     * Returns a quaternion representing the rotation of the object in world space.
     * @param target The result will be copied into this Quaternion.
     */
    getWorldQuaternion(target: Quaternion): Quaternion;

    /**
     * Returns a vector of the scaling factors applied to the object for each axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldScale(target: Vector3): Vector3;

    /**
     * Returns a vector representing the direction of object's positive z-axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldDirection(target: Vector3): Vector3;

    /**
     * Abstract (empty) method to get intersections between a casted ray and this object
     * @remarks Subclasses such as {@link THREE.Mesh | Mesh}, {@link THREE.Line | Line}, and {@link THREE.Points | Points} implement this method in order to use raycasting.
     * @see {@link THREE.Raycaster | Raycaster}
     * @param raycaster
     * @param intersects
     * @defaultValue `() => {}`
     */
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;

    /**
     * Executes the callback on this object and all descendants.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverse(callback: (object: Object3D) => any): void;

    /**
     * Like traverse, but the callback will only be executed for visible objects
     * @remarks Descendants of invisible objects are not traversed.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseVisible(callback: (object: Object3D) => any): void;

    /**
     * Executes the callback on all ancestors.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseAncestors(callback: (object: Object3D) => any): void;

    /**
     * Updates local transform.
     */
    updateMatrix(): void;

    /**
     * Updates the global transform of the object.
     * And will update the object descendants if {@link matrixWorldNeedsUpdate | .matrixWorldNeedsUpdate} is set to true or if the {@link force} parameter is set to `true`.
     * @param force A boolean that can be used to bypass {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate}, to recalculate the world matrix of the object and descendants on the current frame.
     * Useful if you cannot wait for the renderer to update it on the next frame, assuming {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate} set to `true`.
     */
    updateMatrixWorld(force?: boolean): void;

    /**
     * Updates the global transform of the object.
     * @param updateParents Recursively updates global transform of ancestors.
     * @param updateChildren Recursively updates global transform of descendants.
     */
    updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;

    /**
     * Convert the object to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as materials, textures or images for the object.
     */
    toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;

    /**
     * Returns a clone of this object and optionally all descendants.
     * @param recursive If true, descendants of the object are also cloned. Default `true`
     */
    clone(recursive?: boolean): this;

    /**
     * Copy the given object into this object
     * @remarks Note: event listeners and user-defined callbacks ({@link onAfterRender | .onAfterRender} and {@link onBeforeRender | .onBeforeRender}) are not copied.
     * @param source
     * @param recursive If true, descendants of the object are also copied. Default `true`
     */
    copy(source: Object3D, recursive?: boolean): this;
}
export interface Face {
    a: number;
    b: number;
    c: number;
    normal: Vector3;
    materialIndex: number;
}
export interface Intersection<TIntersected extends Object3D = Object3D> {
    /** Distance between the origin of the ray and the intersection */
    distance: number;
    distanceToRay?: number | undefined;
    /** Point of intersection, in world coordinates */
    point: Vector3;
    index?: number | undefined;
    /** Intersected face */
    face?: Face | null | undefined;
    /** Index of the intersected face */
    faceIndex?: number | undefined;
    /** The intersected object */
    object: TIntersected;
    uv?: Vector2 | undefined;
    uv2?: Vector2 | undefined;
    /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh | InstancedMesh } */
    instanceId?: number | undefined;
}
export interface RaycasterParameters {
    Mesh?: any;
    Line?: { threshold: number } | undefined;
    LOD?: any;
    Points?: { threshold: number } | undefined;
    Sprite?: any;
}

/**
 * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
 * @remarks
 * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
 * @example
 * ```typescript
 * const raycaster = new THREE.Raycaster();
 * const pointer = new THREE.Vector2();
 *
 * function onPointerMove(event) {
 *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
 *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
 *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
 * }
 *
 * function render() {
 *     // update the picking ray with the camera and pointer position
 *     raycaster.setFromCamera(pointer, camera);
 *     // calculate objects intersecting the picking ray
 *     const intersects = raycaster.intersectObjects(scene.children);
 *     for (let i = 0; i & lt; intersects.length; i++) {
 *         intersects[i].object.material.color.set(0xff0000);
 *     }
 *     renderer.render(scene, camera);
 * }
 * window.addEventListener('pointermove', onPointerMove);
 * window.requestAnimationFrame(render);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | Raycasting to a Mesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | Raycasting to a Mesh in using an OrthographicCamera}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry | Raycasting to a Mesh with BufferGeometry}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | Raycasting to a InstancedMesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines | Raycasting to a Line}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points | Raycasting to Points}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast | Terrain raycasting}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter | Raycasting to paint voxels}
 * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture | Raycast to a Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js | Source}
 */
export class Raycaster {
    /**
     * This creates a new {@link Raycaster} object.
     * @param origin The origin vector where the ray casts from. Default `new Vector3()`
     * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0, -1)`
     * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
     * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
     */
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

    /**
     * The {@link THREE.RaycasterRay | Ray} used for the raycasting.
     */
    ray: Ray;

    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be smaller than the far property.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    near: number;

    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be larger than the near property.
     * @remarks Expects a `Float`
     * @defaultValue `Infinity`
     */
    far: number;

    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like {@link THREE.Sprites | Sprites}.
     * This field can be set manually or is set when calling  {@link setFromCamera}.
     * @defaultValue `null`
     */
    camera: Camera;

    /**
     * Used by {@link Raycaster} to selectively ignore 3D objects when performing intersection tests.
     * The following code example ensures that only 3D objects on layer `1` will be honored by the instance of Raycaster.
     * ```
     * raycaster.layers.set( 1 );
     * object.layers.enable( 1 );
     * ```
     * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
     */
    layers: Layers;

    /**
     * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
     * @defaultValue `{ Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }`
     */
    params: RaycasterParameters;

    /**
     * Updates the ray with a new origin and direction
     * @remarks
     * Please note that this method only copies the values from the arguments.
     * @param origin The origin vector where the ray casts from.
     * @param direction The normalized direction vector that gives direction to the ray.
     */
    set(origin: Vector3, direction: Vector3): void;

    /**
     * Updates the ray with a new origin and direction.
     * @param coords 2D coordinates of the mouse, in normalized device coordinates (NDC)---X and Y components should be between -1 and 1.
     * @param camera camera from which the ray should originate
     */
    setFromCamera(coords: Vector2, camera: Camera): void;

    /**
     * Checks all intersection between the ray and the object with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObjects | .intersectObjects()}.
     * @param object The object to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants. Otherwise it only checks intersection with the object. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObject<TIntersected extends Object3D>(
        object: Object3D,
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;

    /**
     * Checks all intersection between the ray and the objects with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks Intersections are of the same form as those returned by {@link intersectObject | .intersectObject()}.
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObject | .intersectObject()}.
     * @param objects The objects to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants of the objects. Otherwise it only checks intersection with the objects. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObjects<TIntersected extends Object3D>(
        objects: Object3D[],
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;
}
/**
 * Uniforms are global GLSL variables.
 * They are passed to shader programs.
 * @example
 * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object.
 * ```typescript
 * uniforms: {
 *     time: {
 *         value: 1.0
 *     },
 *     resolution: new Uniform(new Vector2())
 * };
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGL2 / nodes / materials / instance / uniform}
 * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGPU / instance / uniform}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
 */
export class Uniform<T = any> {
    /**
     * Create a new instance of {@link THREE.Uniform | Uniform}
     * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
     */
    constructor(value: T);

    /**
     * Current value of the uniform.
     */
    value: T;

    /**
     * Returns a clone of this uniform.
     * @remarks
     * If the uniform's {@link value} property is an {@link Object | Object} with a `clone()` method, this is used,
     * otherwise the value is copied by assignment Array values are **shared** between cloned {@link THREE.UniformUniform | Uniform}s.
     */
    clone(): Uniform<T>;
}




/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGL2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */
export class UniformsGroup extends EventDispatcher {
    constructor();

    readonly isUniformsGroup: true;

    id: number;

    usage: Usage;

    uniforms: Uniform[];

    add(uniform: Uniform): this;

    remove(uniform: Uniform): this;

    setName(name: string): this;

    setUsage(value: Usage): this;

    dispose(): this;

    copy(source: UniformsGroup): this;

    clone(): UniformsGroup;
}



// Extras / Core /////////////////////////////////////////////////////////////////////

/**
 * An extensible curve object which contains methods for interpolation
 * class Curve<T extends Vector>
 */
export class Curve<T extends Vector> {
    /**
     * @default 'Curve'
     */
    type: string;

    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths of a curve via .getLengths.
     * To ensure precision when using methods like .getSpacedPoints, it is recommended to increase .arcLengthDivisions if the curve is very large.
     * @default 200
     */
    arcLengthDivisions: number;

    /**
     * Returns a vector for point t of the curve where t is between 0 and 1
     * getPoint(t: number, optionalTarget?: T): T;
     */
    getPoint(t: number, optionalTarget?: T): T;

    /**
     * Returns a vector for point at relative position in curve according to arc length
     * getPointAt(u: number, optionalTarget?: T): T;
     */
    getPointAt(u: number, optionalTarget?: T): T;

    /**
     * Get sequence of points using getPoint( t )
     * getPoints(divisions?: number): T[];
     */
    getPoints(divisions?: number): T[];

    /**
     * Get sequence of equi-spaced points using getPointAt( u )
     * getSpacedPoints(divisions?: number): T[];
     */
    getSpacedPoints(divisions?: number): T[];

    /**
     * Get total curve arc length
     */
    getLength(): number;

    /**
     * Get list of cumulative segment lengths
     */
    getLengths(divisions?: number): number[];

    /**
     * Update the cumlative segment distance cache
     */
    updateArcLengths(): void;

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
     */
    getUtoTmapping(u: number, distance: number): number;

    /**
     * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a
     * small delta apart will be used to find its gradient which seems to give a reasonable approximation
     * getTangent(t: number, optionalTarget?: T): T;
     */
    getTangent(t: number, optionalTarget?: T): T;

    /**
     * Returns tangent at equidistance point u on the curve
     * getTangentAt(u: number, optionalTarget?: T): T;
     */
    getTangentAt(u: number, optionalTarget?: T): T;

    /**
     * Generate Frenet frames of the curve
     */
    computeFrenetFrames(
        segments: number,
        closed?: boolean,
    ): {
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];
    };

    clone(): this;
    copy(source: Curve<T>): this;
    toJSON(): object;
    fromJSON(json: object): this;

    /**
     * @deprecated since r84.
     */
    static create(constructorFunc: () => void, getPointFunc: () => void): () => void;
}
export class CurvePath<T extends Vector> extends Curve<T> {
    constructor();

    /**
     * @default 'CurvePath'
     */
    type: string;

    /**
     * @default []
     */
    curves: Array<Curve<T>>;

    /**
     * @default false
     */
    autoClose: boolean;

    add(curve: Curve<T>): void;
    closePath(): void;
    getPoint(t: number, optionalTarget?: T): T;
    getCurveLengths(): number[];
}



/**
 * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
 */
export class Path extends CurvePath<Vector2> {
    constructor(points?: Vector2[]);

    /**
     * @default 'Path'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    currentPoint: Vector2;

    /**
     * @deprecated Use {@link Path#setFromPoints .setFromPoints()} instead.
     */
    fromPoints(vectors: Vector2[]): this;
    setFromPoints(vectors: Vector2[]): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    splineThru(pts: Vector2[]): this;
    arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;
    absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;
    ellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;
    absellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;
}



/**
 * Defines a 2d shape plane using paths.
 */
export class Shape extends Path {
    constructor(points?: Vector2[]);

    /**
     * @default 'Shape'
     */
    type: string;

    uuid: string;

    /**
     * @default []
     */
    holes: Path[];

    getPointsHoles(divisions: number): Vector2[][];

    extractPoints(divisions: number): {
        shape: Vector2[];
        holes: Vector2[][];
    };
}
export class ShapePath {
    constructor();

    /**
     * @default 'ShapePath'
     */
    type: string;

    /**
     * @default new THREE.Color()
     */
    color: Color;

    /**
     * @default []
     */
    subPaths: any[];

    /**
     * @default null
     */
    currentPath: any;

    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    splineThru(pts: Vector2[]): this;
    toShapes(isCCW: boolean): Shape[];
}
export class ArcCurve extends EllipseCurve {
    constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean);

    /**
     * @default 'ArcCurve'
     */
    type: string;
}



// Extras / Curves /////////////////////////////////////////////////////////////////////
export namespace CurveUtils {
    function tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
    function tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
    function tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
    function interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
}
export class CatmullRomCurve3 extends Curve<Vector3> {
    /**
     * @param [points=[]]
     * @param [closed=false]
     * @param [curveType='centripetal']
     * @param [tension=0.5]
     */
    constructor(points?: Vector3[], closed?: boolean, curveType?: string, tension?: number);

    /**
     * @default 'CatmullRomCurve3'
     */
    type: string;

    /**
     * @default []
     */
    points: Vector3[];
}
export class CubicBezierCurve extends Curve<Vector2> {
    constructor(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2);

    /**
     * @default 'CubicBezierCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v0: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v3: Vector2;
}
export class CubicBezierCurve3 extends Curve<Vector3> {
    constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);

    /**
     * @default 'CubicBezierCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v0: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v3: Vector3;
}
export class EllipseCurve extends Curve<Vector2> {
    constructor(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    );

    /**
     * @default 'EllipseCurve'
     */
    type: string;

    /**
     * @default 0
     */
    aX: number;

    /**
     * @default 0
     */
    aY: number;

    /**
     * @default 1
     */
    xRadius: number;

    /**
     * @default 1
     */
    yRadius: number;

    /**
     * @default 0
     */
    aStartAngle: number;

    /**
     * @default 2 * Math.PI
     */
    aEndAngle: number;

    /**
     * @default false
     */
    aClockwise: boolean;

    /**
     * @default 0
     */
    aRotation: number;
}
export class LineCurve extends Curve<Vector2> {
    constructor(v1: Vector2, v2: Vector2);

    /**
     * @default 'LineCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}
export class LineCurve3 extends Curve<Vector3> {
    constructor(v1: Vector3, v2: Vector3);

    /**
     * @default 'LineCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}
export class QuadraticBezierCurve extends Curve<Vector2> {
    constructor(v0: Vector2, v1: Vector2, v2: Vector2);

    /**
     * @default 'QuadraticBezierCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v0: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}
export class QuadraticBezierCurve3 extends Curve<Vector3> {
    constructor(v0: Vector3, v1: Vector3, v2: Vector3);

    /**
     * @default 'QuadraticBezierCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v0: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}
export class SplineCurve extends Curve<Vector2> {
    constructor(points?: Vector2[]);

    /**
     * @default 'SplineCurve'
     */
    type: string;

    /**
     * @default []
     */
    points: Vector2[];
}
export function toHalfFloat(val: number): number;
export const Earcut: {
    triangulate(data: number[], holeIndices?: number[], dim?: number): number[];
};
export namespace ImageUtils {
    function getDataURL(image: any): string;

    /**
     * @deprecated
     */
    let crossOrigin: string;

    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    function loadTexture(
        url: string,
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    function loadTextureCube(
        array: string[],
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;

    function sRGBToLinear(image: any): HTMLCanvasElement | { data: number[]; width: number; height: number };
}
export class PMREMGenerator {
    constructor(renderer: WebGLRenderer);
    fromScene(scene: Scene, sigma?: number, near?: number, far?: number): WebGLRenderTarget;
    fromEquirectangular(equirectangular: Texture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;
    fromCubemap(cubemap: CubeTexture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;
    compileCubemapShader(): void;
    compileEquirectangularShader(): void;
    dispose(): void;
}
export interface Vec2 {
    x: number;
    y: number;
}
export namespace ShapeUtils {
    function area(contour: Vec2[]): number;
    function triangulateShape(contour: Vec2[], holes: Vec2[][]): number[][];
    function isClockWise(pts: Vec2[]): boolean;
}
export class BoxGeometry extends BufferGeometry {
    /**
     * @param [width=1] — Width of the sides on the X axis.
     * @param [height=1] — Height of the sides on the Y axis.
     * @param [depth=1] — Depth of the sides on the Z axis.
     * @param [widthSegments=1] — Number of segmented faces along the width of the sides.
     * @param [heightSegments=1] — Number of segmented faces along the height of the sides.
     * @param [depthSegments=1] — Number of segmented faces along the depth of the sides.
     */
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );

    /**
     * @default 'BoxGeometry'
     */
    type: string;

    parameters: {
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
    };

    static fromJSON(data: any): BoxGeometry;
}
export class CapsuleGeometry extends BufferGeometry {
    /**
     * @param [radius=1] — Radius of the capsule.
     * @param [length=1] — Length of the middle section.
     * @param [capSegments=4] — Number of curve segments used to build the caps.
     * @param [radialSegments=8] — Number of segmented faces around the circumference of the capsule.
     */
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);

    /**
     * @default 'CapsuleGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        length: number;
        capSegments: number;
        radialSegments: number;
    };

    static fromJSON(data: any): CapsuleGeometry;
}
export class CircleGeometry extends BufferGeometry {
    /**
     * @param radius - Radius of the circle, default = 1.
     * @param segments - Number of segments (triangles), minimum = 3, default = 32.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

    /**
     * @default 'CircleGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): CircleGeometry;
}
export class ConeGeometry extends CylinderGeometry {
    /**
     * @param radius - Radius of the cone base. Default is 1.
     * @param height - Height of the cone. Default is 1.
     * @param radialSegments - Number of segmented faces around the circumference of the cone. Default is 32
     * @param heightSegments - Number of rows of faces along the height of the cone. Default is 1.
     * @param openEnded - A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
     */
    constructor(
        radius?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'ConeGeometry'
     */
    type: string;

    static fromJSON(data: any): ConeGeometry;
}
export class CylinderGeometry extends BufferGeometry {
    /**
     * @param radiusTop - Radius of the cylinder at the top. Default is 1.
     * @param radiusBottom - Radius of the cylinder at the bottom. Default is 1.
     * @param height - Height of the cylinder. Default is 1.
     * @param radialSegments - Number of segmented faces around the circumference of the cylinder. Default is 32
     * @param heightSegments - Number of rows of faces along the height of the cylinder. Default is 1.
     * @param openEnded - A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
     * @param thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
     */
    constructor(
        radiusTop?: number,
        radiusBottom?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'CylinderGeometry'
     */
    type: string;

    parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): CylinderGeometry;
}
export class DodecahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'DodecahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): DodecahedronGeometry;
}
export class EdgesGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    /**
     * @param geometry
     * @param [thresholdAngle=1]
     */
    constructor(geometry?: TBufferGeometry, thresholdAngle?: number);

    /**
     * @default 'EdgesGeometry'
     */
    type: string;

    parameters: {
        geometry: TBufferGeometry;
        thresholdAngle: number;
    };
}
export interface ExtrudeGeometryOptions {
    /**
     * @default 12
     */
    curveSegments?: number | undefined;
    /**
     * @default 1
     */
    steps?: number | undefined;
    /**
     * @default 100
     */
    depth?: number | undefined;
    /**
     * @default true
     */
    bevelEnabled?: boolean | undefined;
    /**
     * @default 6
     */
    bevelThickness?: number | undefined;
    bevelSize?: number | undefined;
    /**
     * @default 0
     */
    bevelOffset?: number | undefined;
    /**
     * @default 3
     */
    bevelSegments?: number | undefined;
    extrudePath?: Curve<Vector3> | undefined;
    UVGenerator?: UVGenerator | undefined;
}
export interface UVGenerator {
    generateTopUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
    ): Vector2[];
    generateSideWallUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
        indexD: number,
    ): Vector2[];
}
export class ExtrudeGeometry extends BufferGeometry {
    constructor(shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions);

    /**
     * @default 'ExtrudeGeometry'
     */
    type: string;

    addShapeList(shapes: Shape[], options?: any): void;
    addShape(shape: Shape, options?: any): void;

    static fromJSON(data: any): ExtrudeGeometry;
}
export class IcosahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'IcosahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): IcosahedronGeometry;
}
export class LatheGeometry extends BufferGeometry {
    /**
     * @param points
     * @param [segments=12]
     * @param [phiStart=0]
     * @param [phiLength=Math.PI * 2]
     */
    constructor(points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number);

    /**
     * @default 'LatheGeometry'
     */
    type: string;

    parameters: {
        points: Vector2[];
        segments: number;
        phiStart: number;
        phiLength: number;
    };

    static fromJSON(data: any): LatheGeometry;
}
export class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'OctahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): OctahedronGeometry;
}
export class PlaneGeometry extends BufferGeometry {
    /**
     * @param [width=1] — Width of the sides on the X axis.
     * @param [height=1] — Height of the sides on the Y axis.
     * @param [widthSegments=1] — Number of segmented faces along the width of the sides.
     * @param [heightSegments=1] — Number of segmented faces along the height of the sides.
     */
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);

    /**
     * @default 'PlaneGeometry'
     */
    type: string;

    parameters: {
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
    };

    static fromJSON(data: any): PlaneGeometry;
}
export class PolyhedronGeometry extends BufferGeometry {
    /**
     * @param vertices
     * @param indices
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(vertices?: number[], indices?: number[], radius?: number, detail?: number);

    /**
     * @default 'PolyhedronGeometry'
     */
    type: string;

    parameters: {
        vertices: number[];
        indices: number[];
        radius: number;
        detail: number;
    };

    static fromJSON(data: any): PolyhedronGeometry;
}
export class RingGeometry extends BufferGeometry {
    /**
     * @param innerRadius - Default is 0.5.
     * @param outerRadius - Default is 1.
     * @param thetaSegments - Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 32.
     * @param phiSegments - Minimum is 1. Default is 1.
     * @param thetaStart - Starting angle. Default is 0.
     * @param thetaLength - Central angle. Default is Math.PI * 2.
     */
    constructor(
        innerRadius?: number,
        outerRadius?: number,
        thetaSegments?: number,
        phiSegments?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'RingGeometry'
     */
    type: string;

    parameters: {
        innerRadius: number;
        outerRadius: number;
        thetaSegments: number;
        phiSegments: number;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): RingGeometry;
}
export class ShapeGeometry extends BufferGeometry {
    /**
     * @default 'ShapShapeGeometryeBufferGeometry'
     */
    type: string;

    constructor(shapes?: Shape | Shape[], curveSegments?: number);

    static fromJSON(data: any): ShapeGeometry;
}
export class SphereGeometry extends BufferGeometry {
    /**
     * The geometry is created by sweeping and calculating vertexes
     * around the Y axis (horizontal sweep) and the Z axis (vertical sweep).
     * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
     * through the use of different values of phiStart, phiLength, thetaStart and thetaLength,
     * in order to define the points in which we start (or end) calculating those vertices.
     *
     * @param [radius=50] - sphere radius. Default is 50.
     * @param [widthSegments=8] - number of horizontal segments. Minimum value is 3, and the default is 32.
     * @param [heightSegments=6] - number of vertical segments. Minimum value is 2, and the default is 16.
     * @param [phiStart=0] - specify horizontal starting angle. Default is 0.
     * @param [phiLength=Math.PI * 2] - specify horizontal sweep angle size. Default is Math.PI * 2.
     * @param [thetaStart=0] - specify vertical starting angle. Default is 0.
     * @param [thetaLength=Math.PI * 2] - specify vertical sweep angle size. Default is Math.PI.
     */
    constructor(
        radius?: number,
        widthSegments?: number,
        heightSegments?: number,
        phiStart?: number,
        phiLength?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'SphereGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        widthSegments: number;
        heightSegments: number;
        phiStart: number;
        phiLength: number;
        thetaStart: number;
        thetaLength: number;
    };

    static fromJSON(data: any): SphereGeometry;
}
export class TetrahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'TetrahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): TetrahedronGeometry;
}
export class TorusGeometry extends BufferGeometry {
    /**
     * @param radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
     * @param tube - Radius of the tube. Default is 0.4.
     * @param radialSegments - Default is 12
     * @param tubularSegments - Default is 48.
     * @param arc - Central angle. Default is Math.PI * 2.
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

    /**
     * @default 'TorusGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
    };

    static fromJSON(data: any): TorusGeometry;
}
export class TorusKnotGeometry extends BufferGeometry {
    /**
     * @param [radius=1]
     * @param [tube=0.4]
     * @param [radialSegments=64]
     * @param [tubularSegments=8]
     * @param [p=2]
     * @param [q=3]
     */
    constructor(
        radius?: number,
        tube?: number,
        tubularSegments?: number,
        radialSegments?: number,
        p?: number,
        q?: number,
    );

    /**
     * @default 'TorusKnotGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        tube: number;
        tubularSegments: number;
        radialSegments: number;
        p: number;
        q: number;
    };

    static fromJSON(data: any): TorusKnotGeometry;
}
export class TubeGeometry extends BufferGeometry {
    /**
     * @param path
     * @param [tubularSegments=64]
     * @param [radius=1]
     * @param [radiusSegments=8]
     * @param [closed=false]
     */
    constructor(
        path?: Curve<Vector3>,
        tubularSegments?: number,
        radius?: number,
        radiusSegments?: number,
        closed?: boolean,
    );

    /**
     * @default 'TubeGeometry'
     */
    type: string;

    parameters: {
        path: Curve<Vector3>;
        tubularSegments: number;
        radius: number;
        radialSegments: number;
        closed: boolean;
    };
    tangents: Vector3[];
    normals: Vector3[];
    binormals: Vector3[];

    static fromJSON(data: any): TubeGeometry;
}
export class WireframeGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    constructor(geometry?: TBufferGeometry);

    /**
     * @default 'WireframeGeometry'
     */
    type: string;

    parameters: {
        geometry: TBufferGeometry;
    };
}






// Extras / Helpers /////////////////////////////////////////////////////////////////////
export class ArrowHelper extends Object3D {
    /**
     * @param [dir] Direction from origin. Must be a unit vector.
     * @param [origin] Point at which the arrow starts.
     * @param [length] Length of the arrow.
     * @param [color] Hexadecimal value to define color.
     * @param [headLength] The length of the head of the arrow.
     * @param [headWidth] The width of the head of the arrow.
     */
    constructor(
        dir?: Vector3,
        origin?: Vector3,
        length?: number,
        color?: ColorRepresentation,
        headLength?: number,
        headWidth?: number,
    );

    /**
     * @default 'ArrowHelper'
     */
    type: string;

    /**
     * Contains the line part of the arrowHelper.
     */
    line: Line;

    /**
     * Contains the cone part of the arrowHelper.
     */
    cone: Mesh;

    /**
     * @param dir The desired direction. Must be a unit vector.
     */
    setDirection(dir: Vector3): void;

    /**
     * @param length The desired length.
     * @param [headLength] The length of the head of the arrow.
     * @param [headWidth] The width of the head of the arrow.
     */
    setLength(length: number, headLength?: number, headWidth?: number): void;

    /**
     * @param color The desired color.
     */
    setColor(color: ColorRepresentation): void;

    copy(source: this): this;

    dispose(): void;
}
export class AxesHelper extends LineSegments {
    /**
     * @param [size=1]
     */
    constructor(size?: number);

    /**
     * @default 'AxesHelper'
     */
    type: string;

    setColors(xAxisColor: Color, yAxisColor: Color, zAxisColor: Color): this;

    dispose(): void;
}
export class Box3Helper extends LineSegments {
    /**
     * @param box
     * @param [color=0xffff00]
     */
    constructor(box: Box3, color?: Color);

    /**
     * @default 'Box3Helper'
     */
    type: string;

    box: Box3;

    dispose(): void;
}
export class BoxHelper extends LineSegments {
    /**
     * @param object
     * @param [color=0xffff00]
     */
    constructor(object: Object3D, color?: ColorRepresentation);

    /**
     * @default 'BoxHelper'
     */
    type: string;

    update(object?: Object3D): void;

    setFromObject(object: Object3D): this;

    dispose(): void;
}





/**
 * This helps with visualizing what a camera contains in its frustum.
 * It visualizes the frustum of a camera using a {@link LineSegments}.
 *
 * CameraHelper must be a child of the scene.
 */
export class CameraHelper extends LineSegments {
    /**
     * This create a new CameraHelper for the specified camera.
     *
     * @param camera - The camera to visualize.
     */
    constructor(camera: Camera);

    /**
     * The camera being visualized.
     */
    camera: Camera;

    /**
     * This contains the points used to visualize the camera.
     */
    pointMap: { [id: string]: number[] };

    /**
     * Reference to the {@link Camera.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * See {@link Object3D.matrixAutoUpdate}.
     * Set to `false` here as the helper is using the camera's {@link Camera.matrixWorld}.
     */
    matrixAutoUpdate: boolean;

    /**
     * @default 'CameraHelper'
     */
    type: string;

    /**
     * Updates the helper based on the projectionMatrix of the camera.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance.
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;

    /**
     * Defines the colors of the helper.
     */
    setColors(frustum: Color, cone: Color, up: Color, target: Color, cross: Color): this;
}
export class DirectionalLightHelper extends Object3D {
    /**
     * @param light
     * @param [size=1]
     * @param color
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);

    light: DirectionalLight;
    lightPlane: Line;
    targetLine: Line;

    /**
     * @default undefined
     */
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}
export class GridHelper extends LineSegments {
    /**
     * @param [size=10]
     * @param [divisions=10]
     * @param [color1=0x444444]
     * @param [color2=0x888888]
     */
    constructor(size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation);

    /**
     * @default 'GridHelper'
     */
    type: string;

    dispose(): void;
}
export class HemisphereLightHelper extends Object3D {
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    light: HemisphereLight;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    material: MeshBasicMaterial;

    color: ColorRepresentation | undefined;

    dispose(): void;
    update(): void;
}
export class PlaneHelper extends LineSegments {
    /**
     * @param plane
     * @param [size=1]
     * @param [hex=0xffff00]
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * @default 'PlaneHelper'
     */
    type: string;

    plane: Plane;

    /**
     * @default 1
     */
    size: number;

    updateMatrixWorld(force?: boolean): void;

    dispose(): void;
}
export class PointLightHelper extends Object3D {
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);

    /**
     * @default 'PointLightHelper'
     */
    type: string;

    light: PointLight;
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}
export class PolarGridHelper extends LineSegments {
    /**
     * @param [radius=10]
     * @param [radials=16]
     * @param [circles=8]
     * @param [divisions=64]
     * @param [color1=0x444444]
     * @param [color2=0x888888]
     */
    constructor(
        radius?: number,
        radials?: number,
        circles?: number,
        divisions?: number,
        color1?: ColorRepresentation,
        color2?: ColorRepresentation,
    );

    /**
     * @default 'PolarGridHelper'
     */
    type: string;

    dispose(): void;
}
export class SkeletonHelper extends LineSegments {
    constructor(object: Object3D);

    /**
     * @default 'SkeletonHelper'
     */
    type: string;

    bones: Bone[];
    root: Object3D;

    readonly isSkeletonHelper: true;

    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    getBoneList(object: Object3D): Bone[];
    update(): void;

    dispose(): void;
}
export class SpotLightHelper extends Object3D {
    constructor(light: Light, color?: ColorRepresentation);

    light: Light;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;
    color: ColorRepresentation | undefined;
    cone: LineSegments;

    dispose(): void;
    update(): void;
}



/**
 * This light's color gets applied to all the objects in the scene globally.
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js
 */
export class AmbientLight extends Light {
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     * @param [intensity=1]
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * @default 'AmbientLight'
     */
    type: string;

    readonly isAmbientLight: true;
}
export class AmbientLightProbe extends LightProbe {
    constructor(color?: ColorRepresentation, intensity?: number);

    readonly isAmbientLightProbe: true;
}






/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js|src/lights/DirectionalLight.js}
 *
 * @example
 * // White directional light at half intensity shining from the top.
 * const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
 * directionalLight.position.set( 0, 1, 0 );
 * scene.add( directionalLight );
 */
export class DirectionalLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * @default 'DirectionalLight'
     */
    type: string;

    /**
     * This is set equal to {@link Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     *
     * @default {@link Object3D.DEFAULT_UP}
     */
    readonly position: Vector3;

    /**
     * Target used for shadow camera orientation.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * @default new THREE.DirectionalLightShadow()
     */
    shadow: DirectionalLightShadow;
    readonly isDirectionalLight: true;
}
export class DirectionalLightShadow extends LightShadow {
    camera: OrthographicCamera;
    readonly isDirectionalLightShadow: true;
}
export class HemisphereLight extends Light {
    /**
     * @param skyColor
     * @param groundColor
     * @param [intensity=1]
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * @default 'HemisphereLight'
     */
    type: string;

    /**
     * This is set equal to {@link Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     *
     * @default {@link Object3D.DEFAULT_UP}
     */
    position: Vector3;

    groundColor: Color;

    readonly isHemisphereLight: true;
}
export class HemisphereLightProbe extends LightProbe {
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    readonly isHemisphereLightProbe: true;
}




// Lights //////////////////////////////////////////////////////////////////////////////////

/**
 * Abstract base class for lights.
 */
export class Light extends Object3D {
    constructor(hex?: number | string, intensity?: number);

    /**
     * @default 'Light'
     */
    type: string;

    color: Color;

    /**
     * @default 1
     */
    intensity: number;
    readonly isLight: true;

    shadow: LightShadow;
    /**
     * @deprecated Use shadow.camera.fov instead.
     */
    shadowCameraFov: any;
    /**
     * @deprecated Use shadow.camera.left instead.
     */
    shadowCameraLeft: any;
    /**
     * @deprecated Use shadow.camera.right instead.
     */
    shadowCameraRight: any;
    /**
     * @deprecated Use shadow.camera.top instead.
     */
    shadowCameraTop: any;
    /**
     * @deprecated Use shadow.camera.bottom instead.
     */
    shadowCameraBottom: any;
    /**
     * @deprecated Use shadow.camera.near instead.
     */
    shadowCameraNear: any;
    /**
     * @deprecated Use shadow.camera.far instead.
     */
    shadowCameraFar: any;
    /**
     * @deprecated Use shadow.bias instead.
     */
    shadowBias: any;
    /**
     * @deprecated Use shadow.mapSize.width instead.
     */
    shadowMapWidth: any;
    /**
     * @deprecated Use shadow.mapSize.height instead.
     */
    shadowMapHeight: any;

    dispose(): void;
}
export class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * @default 'LightProbe'
     */
    type: string;

    readonly isLightProbe: true;

    /**
     * @default new THREE.SphericalHarmonics3()
     */
    sh: SphericalHarmonics3;

    fromJSON(json: object): LightProbe;
}
export class LightShadow {
    constructor(camera: Camera);

    camera: Camera;

    /**
     * @default 0
     */
    bias: number;

    /**
     * @default 0
     */
    normalBias: number;

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 8
     */
    blurSamples: number;

    /**
     * @default new THREE.Vector2( 512, 512 )
     */
    mapSize: Vector2;

    /**
     * @default null
     */
    map: WebGLRenderTarget;

    /**
     * @default null
     */
    mapPass: WebGLRenderTarget;

    /**
     * @default new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    copy(source: LightShadow): this;
    clone(recursive?: boolean): this;
    toJSON(): any;
    getFrustum(): number;
    updateMatrices(light: Light, viewportIndex?: number): void;
    getViewport(viewportIndex: number): Vector4;
    getFrameExtents(): Vector2;
    dispose(): void;
}




/**
 * @example
 * const light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 */
export class PointLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number, distance?: number, decay?: number);

    /**
     * @default 'PointLight'
     */
    type: string;

    /**
     * Light's intensity.
     * @default 2
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * See the {@link PointLightShadow} for details.
     * The default is `false`.
     */
    castShadow: boolean;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.PointLightShadow()
     */
    shadow: PointLightShadow;

    power: number;
}
export class PointLightShadow extends LightShadow {
    camera: PerspectiveCamera;
}
export class RectAreaLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number, width?: number, height?: number);

    /**
     * @default 'RectAreaLight'
     */
    type: string;

    /**
     * @default 10
     */
    width: number;

    /**
     * @default 10
     */
    height: number;

    /**
     * @default 1
     */
    intensity: number;

    power: number;

    readonly isRectAreaLight: true;
}








/**
 * A point light that can cast shadow in one direction.
 */
export class SpotLight extends Light {
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * @default 'SpotLight'
     */
    type: string;

    /**
     * This is set equal to {@link Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     *
     * @default {@link Object3D.DEFAULT_UP}
     */
    position: Vector3;

    /**
     * Spotlight focus points at target.position.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 2
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * Maximum extent of the spotlight, in radians, from its direction.
     * @default Math.PI / 3.
     */
    angle: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.SpotLightShadow()
     */
    shadow: SpotLightShadow;
    power: number;

    /**
     * @default 0
     */
    penumbra: number;

    /**
     * @default null
     */
    map: Texture | null;

    readonly isSpotLight: true;
}
export class SpotLightShadow extends LightShadow {
    camera: PerspectiveCamera;
    readonly isSpotLightShadow: true;

    /**
     * @default 1
     */
    focus: number;
}
export class AnimationLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (response: AnimationClip[]) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AnimationClip[]>;
    parse(json: any): AnimationClip[];
}
export class AudioLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (audioBuffer: AudioBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
        file?: { mainFile: File, additionalFiles: File[] },
    ): void;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AudioBuffer>;
}
export class BufferGeometryLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (bufferGeometry: InstancedBufferGeometry | BufferGeometry) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<InstancedBufferGeometry | BufferGeometry>;
    parse(json: any): InstancedBufferGeometry | BufferGeometry;
}
export namespace Cache {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default {}
     */
    let files: any;

    function add(key: string, file: any): void;
    function get(key: string): any;
    function remove(key: string): void;
    function clear(): void;
}
export class CompressedTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (texture: CompressedTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CompressedTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CompressedTexture>;
}
export class CubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadAsync(urls: string[], onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
}
export class DataTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (dataTexture: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
        file?: File
    ): DataTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<DataTexture>;
}
export class FileLoader extends Loader {
    constructor(manager?: LoadingManager);

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    load(
        url: string,
        onLoad?: (response: string | ArrayBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
        file?: File
    ): any;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<string | ArrayBuffer>;
    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}
export class ImageBitmapLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
    load(
        url: string,
        onLoad?: (response: ImageBitmap) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<ImageBitmap>;
}



/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export class ImageLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (image: HTMLImageElement) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): HTMLImageElement;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<HTMLImageElement>;
}


/**
 * Base class for implementing loaders.
 */
export class Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default: false
     */
    withCredentials: boolean;

    /**
     * @default ''
     */
    path: string;

    /**
     * @default ''
     */
    resourcePath: string;
    manager: LoadingManager;

    /**
     * @default {}
     */
    requestHeader: { [header: string]: string };

    /*
	load(): void;
    loadAsync(): Promise<unknown>;
	parse(): void;
	*/

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;
}
export interface LoaderUtils {
    decodeText(array: BufferSource): string;
    extractUrlBase(url: string): string;
    resolveURL(url: string, path: string): string;
}
export const LoaderUtils: LoaderUtils;
export const DefaultLoadingManager: LoadingManager;

/**
 * Handles and keeps track of loaded and pending data.
 */
export class LoadingManager {
    constructor(
        onLoad?: () => void,
        onProgress?: (url: string, loaded: number, total: number) => void,
        onError?: (url: string) => void,
    );

    /**
     * Will be called when loading of an item starts.
     * @param url The url of the item that started loading.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onStart?: ((url: string, loaded: number, total: number) => void) | undefined;

    /**
     * Will be called when all items finish loading.
     * The default is a function with empty body.
     */
    onLoad: () => void;

    /**
     * Will be called for each loaded item.
     * The default is a function with empty body.
     * @param url The url of the item just loaded.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onProgress: (url: string, loaded: number, total: number) => void;

    /**
     * Will be called when item loading fails.
     * The default is a function with empty body.
     * @param url The url of the item that errored.
     */
    onError: (url: string) => void;

    /**
     * If provided, the callback will be passed each resource URL before a request is sent.
     * The callback may return the original URL, or a new URL to override loading behavior.
     * This behavior can be used to load assets from .ZIP files, drag-and-drop APIs, and Data URIs.
     * @param callback URL modifier callback. Called with url argument, and must return resolvedURL.
     */
    setURLModifier(callback?: (url: string) => string): this;

    /**
     * Given a URL, uses the URL modifier callback (if any) and returns a resolved URL.
     * If no URL modifier is set, returns the original URL.
     * @param url the url to load
     */
    resolveURL(url: string): string;

    itemStart(url: string): void;
    itemEnd(url: string): void;
    itemError(url: string): void;

    // handlers

    addHandler(regex: RegExp, loader: Loader): this;
    removeHandler(regex: RegExp): this;
    getHandler(file: string): Loader | null;
}
export class MaterialLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    load(
        url: string,
        onLoad: (material: Material) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Material>;
    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: any): Material;
}
export class ObjectLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (object: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync<ObjectType extends Object3D>(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): // tslint:disable-next-line:no-unnecessary-generics
        Promise<ObjectType>;
    // tslint:disable-next-line:no-unnecessary-generics
    parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
    // tslint:disable-next-line:no-unnecessary-generics
    parseAsync<T extends Object3D>(json: any): Promise<T>;
    parseGeometries(json: any): { [key: string]: InstancedBufferGeometry | BufferGeometry }; // Array of BufferGeometry or Geometry or Geometry2.
    parseMaterials(json: any, textures: { [key: string]: Texture }): Material[]; // Array of Classes that inherits from Matrial.
    parseAnimations(json: any): AnimationClip[];
    parseImages(json: any, onLoad?: () => void): { [key: string]: Source };
    parseImagesAsync(json: any): Promise<{ [key: string]: Source }>;
    parseTextures(json: any, images: any): Texture[];
    parseObject<T extends Object3D>(
        data: any,
        geometries: any[],
        materials: Material[],
        animations: AnimationClip[],
    ): // tslint:disable-next-line:no-unnecessary-generics
        T;
}
export function readAsArrayBuffer(path: Blob): Promise<ArrayBuffer>;
export function readAsText(path: Blob): Promise<string>;
export function readAsDataURL(path: Blob): Promise<string>;



/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export class TextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (texture: Texture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
        data?: ArrayBuffer
    ): Texture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Texture>;
}
export interface LineBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
    linewidth?: number | undefined;
    linecap?: string | undefined;
    linejoin?: string | undefined;
}
export class LineBasicMaterial extends Material {
    constructor(parameters?: LineBasicMaterialParameters);

    /**
     * @default 'LineBasicMaterial'
     */
    type: string;

    /**
     * @default 0xffffff
     */
    color: Color;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    fog: boolean;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default 'round'
     */
    linecap: string;

    /**
     * @default 'round'
     */
    linejoin: string;

    setValues(parameters: LineBasicMaterialParameters): void;
}
export interface LineDashedMaterialParameters extends LineBasicMaterialParameters {
    scale?: number | undefined;
    dashSize?: number | undefined;
    gapSize?: number | undefined;
}
export class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);

    /**
     * @default 'LineDashedMaterial'
     */
    type: string;

    /**
     * @default 1
     */
    scale: number;

    /**
     * @default 1
     */
    dashSize: number;

    /**
     * @default 1
     */
    gapSize: number;
    readonly isLineDashedMaterial: true;

    setValues(parameters: LineDashedMaterialParameters): void;
}
export interface MaterialParameters {
    alphaTest?: number | undefined;
    alphaToCoverage?: boolean | undefined;
    blendDst?: BlendingDstFactor | undefined;
    blendDstAlpha?: number | undefined;
    blendEquation?: BlendingEquation | undefined;
    blendEquationAlpha?: number | undefined;
    blending?: Blending | undefined;
    blendSrc?: BlendingSrcFactor | BlendingDstFactor | undefined;
    blendSrcAlpha?: number | undefined;
    clipIntersection?: boolean | undefined;
    clippingPlanes?: Plane[] | undefined;
    clipShadows?: boolean | undefined;
    colorWrite?: boolean | undefined;
    defines?: any;
    depthFunc?: DepthModes | undefined;
    depthTest?: boolean | undefined;
    depthWrite?: boolean | undefined;
    name?: string | undefined;
    opacity?: number | undefined;
    polygonOffset?: boolean | undefined;
    polygonOffsetFactor?: number | undefined;
    polygonOffsetUnits?: number | undefined;
    precision?: 'highp' | 'mediump' | 'lowp' | null | undefined;
    premultipliedAlpha?: boolean | undefined;
    forceSinglePass?: boolean | undefined;
    dithering?: boolean | undefined;
    side?: Side | undefined;
    shadowSide?: Side | undefined;
    toneMapped?: boolean | undefined;
    transparent?: boolean | undefined;
    vertexColors?: boolean | undefined;
    visible?: boolean | undefined;
    format?: PixelFormat | undefined;
    stencilWrite?: boolean | undefined;
    stencilFunc?: StencilFunc | undefined;
    stencilRef?: number | undefined;
    stencilWriteMask?: number | undefined;
    stencilFuncMask?: number | undefined;
    stencilFail?: StencilOp | undefined;
    stencilZFail?: StencilOp | undefined;
    stencilZPass?: StencilOp | undefined;
    userData?: any;
}

/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */
export class Material extends EventDispatcher {
    constructor();

    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     * @default 0
     */
    alphaTest: number;

    /**
     * Enables alpha to coverage. Can only be used with MSAA-enabled rendering contexts.
     * @default false
     */
    alphaToCoverage: boolean;

    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     * @default THREE.OneMinusSrcAlphaFactor
     */
    blendDst: BlendingDstFactor;

    /**
     * The tranparency of the .blendDst. Default is null.
     * @default null
     */
    blendDstAlpha: number | null;

    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     * @default THREE.AddEquation
     */
    blendEquation: BlendingEquation;

    /**
     * The tranparency of the .blendEquation. Default is null.
     * @default null
     */
    blendEquationAlpha: number | null;

    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     * @default THREE.NormalBlending
     */
    blending: Blending;

    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     * @default THREE.SrcAlphaFactor
     */
    blendSrc: BlendingSrcFactor | BlendingDstFactor;

    /**
     * The tranparency of the .blendSrc. Default is null.
     * @default null
     */
    blendSrcAlpha: number | null;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     * @default false
     */
    clipIntersection: boolean;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space.
     * These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped (not rendered).
     * See the WebGL / clipping /intersection example. Default is null.
     * @default null
     */
    clippingPlanes: any;

    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     * @default false
     */
    clipShadows: boolean;

    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     * @default true
     */
    colorWrite: boolean;

    /**
     * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }.
     * The pairs are defined in both vertex and fragment shaders. Default is undefined.
     * @default undefined
     */
    defines: undefined | { [key: string]: any };

    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     * @default THREE.LessEqualDepth
     */
    depthFunc: DepthModes;

    /**
     * Whether to have depth test enabled when rendering this material. Default is true.
     * @default true
     */
    depthTest: boolean;

    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     * @default true
     */
    depthWrite: boolean;

    /**
     * Unique number of this material instance.
     */
    id: number;

    /**
     * Whether rendering this material has any effect on the stencil buffer. Default is *false*.
     * @default false
     */
    stencilWrite: boolean;

    /**
     * The stencil comparison function to use. Default is {@link AlwaysStencilFunc}. See stencil operation constants for all possible values.
     * @default THREE.AlwaysStencilFunc
     */
    stencilFunc: StencilFunc;

    /**
     * The value to use when performing stencil comparisons or stencil operations. Default is *0*.
     * @default 0
     */
    stencilRef: number;

    /**
     * The bit mask to use when writing to the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilWriteMask: number;

    /**
     * The bit mask to use when comparing against the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilFuncMask: number;

    /**
     * Which stencil operation to perform when the comparison function returns false. Default is {@link KeepStencilOp}. See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true but the depth test fails.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true and the depth test passes.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZPass: StencilOp;

    /**
     * Used to check whether this or derived classes are materials. Default is true.
     * You should not change this, as it used internally for optimisation.
     */
    readonly isMaterial: true;

    /**
     * Material name. Default is an empty string.
     * @default ''
     */
    name: string;

    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     * @default false
     */
    needsUpdate: boolean;

    /**
     * Opacity. Default is 1.
     * @default 1
     */
    opacity: number;

    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
     * @default false
     */
    polygonOffset: boolean;

    /**
     * Sets the polygon offset factor. Default is 0.
     * @default 0
     */
    polygonOffsetFactor: number;

    /**
     * Sets the polygon offset units. Default is 0.
     * @default 0
     */
    polygonOffsetUnits: number;

    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     * @default null
     */
    precision: 'highp' | 'mediump' | 'lowp' | null;

    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     * @default false
     */
    premultipliedAlpha: boolean;

    /**
     * @default false
     */
    forceSinglePass: boolean;

    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     * @default false
     */
    dithering: boolean;

    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is {@link THREE.FrontSide}. Other options are {@link THREE.BackSide} and {@link THREE.DoubleSide}.
     *
     * @default {@link THREE.FrontSide}
     */
    side: Side;

    /**
     * Defines which of the face sides will cast shadows. Default is *null*.
     * If *null*, the value is opposite that of side, above.
     * @default null
     */
    shadowSide: Side | null;

    /**
     * Defines whether this material is tone mapped according to the renderer's toneMapping setting.
     * Default is true.
     * @default true
     */
    toneMapped: boolean;

    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * Default is false.
     * @default false
     */
    transparent: boolean;

    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     * @default 'Material'
     */
    type: string;

    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * Defines whether vertex coloring is used. Default is false.
     * @default false
     */
    vertexColors: boolean;

    /**
     * Defines whether this material is visible. Default is true.
     * @default true
     */
    visible: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: any;

    /**
     * This starts at 0 and counts how many times .needsUpdate is set to true.
     * @default 0
     */
    version: number;

    /**
     * Return a new material with the same parameters as this material.
     */
    clone(): this;

    /**
     * Copy the parameters from the passed material into this material.
     * @param material
     */
    copy(material: Material): this;

    /**
     * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
     */
    dispose(): void;

    /**
     * An optional callback that is executed immediately before the shader program is compiled.
     * This function is called with the shader source code as a parameter.
     * Useful for the modification of built-in materials.
     * @param shader Source code of the shader
     * @param renderer WebGLRenderer Context that is initializing the material
     */
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;

    /**
     * In case onBeforeCompile is used, this callback can be used to identify values of settings used in onBeforeCompile, so three.js can reuse a cached shader or recompile the shader as needed.
     */
    customProgramCacheKey(): string;

    /**
     * Sets the properties based on the values.
     * @param values A container with parameters.
     */
    setValues(values: MaterialParameters): void;

    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    toJSON(meta?: any): any;
}























/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
export interface MeshBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    fog?: boolean | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
}
export class MeshBasicMaterial extends Material {
    constructor(parameters?: MeshBasicMaterialParameters);

    /**
     * @default 'MeshBasicMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshBasicMaterialParameters): void;
}
export interface MeshDepthMaterialParameters extends MaterialParameters {
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    depthPacking?: DepthPackingStrategies | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
}
export class MeshDepthMaterial extends Material {
    constructor(parameters?: MeshDepthMaterialParameters);

    /**
     * @default 'MeshDepthMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default THREE.BasicDepthPacking
     */
    depthPacking: DepthPackingStrategies;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDepthMaterialParameters): void;
}
export interface MeshDistanceMaterialParameters extends MaterialParameters {
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    farDistance?: number | undefined;
    nearDistance?: number | undefined;
    referencePosition?: Vector3 | undefined;
}
export class MeshDistanceMaterial extends Material {
    constructor(parameters?: MeshDistanceMaterialParameters);

    /**
     * @default 'MeshDistanceMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default 1000
     */
    farDistance: number;

    /**
     * @default 1
     */
    nearDistance: number;

    /**
     * @default new THREE.Vector3()
     */
    referencePosition: Vector3;

    /**
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDistanceMaterialParameters): void;
}
export interface MeshLambertMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | undefined;
    bumpScale?: number | undefined;
    color?: ColorRepresentation | undefined;
    displacementMap?: Texture | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    flatShading?: boolean | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    normalMap?: Texture | undefined;
    normalScale?: Vector2 | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
}
export class MeshLambertMaterial extends Material {
    constructor(parameters?: MeshLambertMaterialParameters);

    /**
     * @default 'MeshLambertMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default false
     */
    flatShading: boolean;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshLambertMaterialParameters): void;
}
export interface MeshMatcapMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    matcap?: Texture | null | undefined;
    map?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    alphaMap?: Texture | null | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}
export class MeshMatcapMaterial extends Material {
    constructor(parameters?: MeshMatcapMaterialParameters);

    /**
     * @default 'MeshMatcapMaterial'
     */
    type: string;

    /**
     * @default { 'MATCAP': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    matcap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshMatcapMaterialParameters): void;
}
export interface MeshNormalMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;

    flatShading?: boolean | undefined;
}
export class MeshNormalMaterial extends Material {
    constructor(parameters?: MeshNormalMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    setValues(parameters: MeshNormalMaterialParameters): void;
}
export interface MeshPhongMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: ColorRepresentation | undefined;
    specular?: ColorRepresentation | undefined;
    shininess?: number | undefined;
    opacity?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}
export class MeshPhongMaterial extends Material {
    constructor(parameters?: MeshPhongMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default new THREE.Color( 0x111111 )
     */
    specular: Color;

    /**
     * @default 30
     */
    shininess: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default null
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default null
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
     */
    metal: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshPhongMaterialParameters): void;
}
export interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    clearcoat?: number | undefined;
    clearcoatMap?: Texture | null | undefined;
    clearcoatRoughness?: number | undefined;
    clearcoatRoughnessMap?: Texture | null | undefined;
    clearcoatNormalScale?: Vector2 | undefined;
    clearcoatNormalMap?: Texture | null | undefined;

    reflectivity?: number | undefined;
    ior?: number | undefined;

    sheen?: number | undefined;
    sheenColor?: Color | undefined;
    sheenRoughness?: number | undefined;

    transmission?: number | undefined;
    transmissionMap?: Texture | null | undefined;
    attenuationDistance?: number | undefined;
    attenuationColor?: Color | undefined;

    specularIntensity?: number | undefined;
    specularColor?: Color | undefined;
    specularIntensityMap?: Texture | null | undefined;
    specularColorMap?: Texture | null | undefined;
}
export class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters?: MeshPhysicalMaterialParameters);

    /**
     * @default 'MeshPhysicalMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default 0
     */
    clearcoat: number;

    /**
     * @default null
     */
    clearcoatMap: Texture | null;

    /**
     * @default 0
     */
    clearcoatRoughness: number;

    /**
     * @default null
     */
    clearcoatRoughnessMap: Texture | null;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    clearcoatNormalScale: Vector2;

    /**
     * @default null
     */
    clearcoatNormalMap: Texture | null;

    /**
     * @default 0.5
     */
    reflectivity: number;

    /**
     * @default 1.5
     */
    ior: number;

    /**
     * @default 0.0
     */
    sheen: number;

    /**
     * @default Color( 0x000000 )
     */
    sheenColor: Color;

    /**
     * @default null
     */
    sheenColorMap: Texture | null;

    /**
     * @default 1.0
     */
    sheenRoughness: number;

    /**
     * @default null
     */
    sheenRoughnessMap: Texture | null;

    /**
     * @default 0
     */
    transmission: number;

    /**
     * @default null
     */
    transmissionMap: Texture | null;

    /**
     * @default 0.01
     */
    thickness: number;

    /**
     * @default null
     */
    thicknessMap: Texture | null;

    /**
     * @default 0.0
     */
    attenuationDistance: number;

    /**
     * @default Color( 1, 1, 1 )
     */
    attenuationColor: Color;

    /**
     * @default 1.0
     */
    specularIntensity: number;

    /**
     * @default Color(1, 1, 1)
     */
    specularColor: Color;

    /**
     * @default null
     */
    specularIntensityMap: Texture | null;

    /**
     * @default null
     */
    specularColorMap: Texture | null;

    /**
     * @default null
     */
    iridescenceMap: Texture | null;

    /**
     * @default 1.3
     */
    iridescenceIOR: number;

    /**
     * @default 0
     */
    iridescence: number;

    /**
     * @default [100, 400]
     */
    iridescenceThicknessRange: number[];

    /**
     * @default null
     */
    iridescenceThicknessMap: Texture | null;
}
export interface MeshStandardMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    roughness?: number | undefined;
    metalness?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    roughnessMap?: Texture | null | undefined;
    metalnessMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    envMapIntensity?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}
export class MeshStandardMaterial extends Material {
    constructor(parameters?: MeshStandardMaterialParameters);

    /**
     * @default 'MeshStandardMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default 1
     */
    roughness: number;

    /**
     * @default 0
     */
    metalness: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    roughnessMap: Texture | null;

    /**
     * @default null
     */
    metalnessMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default 1
     */
    envMapIntensity: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    isMeshStandardMaterial: boolean;

    setValues(parameters: MeshStandardMaterialParameters): void;
}
export interface MeshToonMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    gradientMap?: Texture | null | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    alphaMap?: Texture | null | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
}
export class MeshToonMaterial extends Material {
    constructor(parameters?: MeshToonMaterialParameters);

    /**
     * @default 'MeshToonMaterial'
     */
    type: string;

    /**
     * @default { 'TOON': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    gradientMap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshToonMaterialParameters): void;
}
export interface PointsMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    size?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}
export class PointsMaterial extends Material {
    constructor(parameters?: PointsMaterialParameters);

    /**
     * @default 'PointsMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 1
     */
    size: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: PointsMaterialParameters): void;
}
export class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters?: ShaderMaterialParameters);
}
export interface ShaderMaterialParameters extends MaterialParameters {
    uniforms?: { [uniform: string]: IUniform } | undefined;
    vertexShader?: string | undefined;
    fragmentShader?: string | undefined;
    linewidth?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    lights?: boolean | undefined;
    clipping?: boolean | undefined;
    fog?: boolean | undefined;
    extensions?:
        | {
              derivatives?: boolean | undefined;
              fragDepth?: boolean | undefined;
              drawBuffers?: boolean | undefined;
              shaderTextureLOD?: boolean | undefined;
          }
        | undefined;
    glslVersion?: GLSLVersion | undefined;
}
export class ShaderMaterial extends Material {
    constructor(parameters?: ShaderMaterialParameters);

    /**
     * @default 'ShaderMaterial'
     */
    type: string;

    /**
     * @default {}
     */
    defines: { [key: string]: any };

    /**
     * @default {}
     */
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    /**
     * @default false
     */
    lights: boolean;

    /**
     * @default false
     */
    clipping: boolean;

    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    derivatives: any;

    /**
     * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }
     */
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
    };

    /**
     * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv2': [ 0, 0 ] }
     */
    defaultAttributeValues: any;

    /**
     * @default undefined
     */
    index0AttributeName: string | undefined;

    /**
     * @default false
     */
    uniformsNeedUpdate: boolean;

    /**
     * @default null
     */
    glslVersion: GLSLVersion | null;

    isShaderMaterial: boolean;

    setValues(parameters: ShaderMaterialParameters): void;
    toJSON(meta: any): any;
}
export interface ShadowMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
}
export class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

    /**
     * @default 'ShadowMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    color: Color;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;
}
export interface SpriteMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    rotation?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}
export class SpriteMaterial extends Material {
    constructor(parameters?: SpriteMaterialParameters);
    /**
     * @default 'SpriteMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    readonly isSpriteMaterial: true;

    setValues(parameters: SpriteMaterialParameters): void;
    copy(source: SpriteMaterial): this;
}


// Math //////////////////////////////////////////////////////////////////////////////////
export class Box2 {
    constructor(min?: Vector2, max?: Vector2);

    /**
     * @default new THREE.Vector2( + Infinity, + Infinity )
     */
    min: Vector2;

    /**
     * @default new THREE.Vector2( - Infinity, - Infinity )
     */
    max: Vector2;

    set(min: Vector2, max: Vector2): Box2;
    setFromPoints(points: Vector2[]): Box2;
    setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
    clone(): this;
    copy(box: Box2): this;
    makeEmpty(): Box2;
    isEmpty(): boolean;
    getCenter(target: Vector2): Vector2;
    getSize(target: Vector2): Vector2;
    expandByPoint(point: Vector2): Box2;
    expandByVector(vector: Vector2): Box2;
    expandByScalar(scalar: number): Box2;
    containsPoint(point: Vector2): boolean;
    containsBox(box: Box2): boolean;
    getParameter(point: Vector2, target: Vector2): Vector2;
    intersectsBox(box: Box2): boolean;
    clampPoint(point: Vector2, target: Vector2): Vector2;
    distanceToPoint(point: Vector2): number;
    intersect(box: Box2): Box2;
    union(box: Box2): Box2;
    translate(offset: Vector2): Box2;
    equals(box: Box2): boolean;
    /**
     * @deprecated Use {@link Box2#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box2#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
}
export class Box3 {
    constructor(min?: Vector3, max?: Vector3);

    /**
     * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
     */
    min: Vector3;

    /**
     * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
     */
    max: Vector3;
    readonly isBox3: true;

    set(min: Vector3, max: Vector3): this;
    setFromArray(array: ArrayLike<number>): this;
    setFromBufferAttribute(bufferAttribute: BufferAttribute): this;
    setFromPoints(points: Vector3[]): this;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    setFromObject(object: Object3D, precise?: boolean): this;
    clone(): this;
    copy(box: Box3): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: Vector3): Vector3;
    getSize(target: Vector3): Vector3;
    expandByPoint(point: Vector3): this;
    expandByVector(vector: Vector3): this;
    expandByScalar(scalar: number): this;
    expandByObject(object: Object3D, precise?: boolean): this;
    containsPoint(point: Vector3): boolean;
    containsBox(box: Box3): boolean;
    getParameter(point: Vector3, target: Vector3): Vector3;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsPlane(plane: Plane): boolean;
    intersectsTriangle(triangle: Triangle): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    getBoundingSphere(target: Sphere): Sphere;
    intersect(box: Box3): this;
    union(box: Box3): this;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(box: Box3): boolean;
    /**
     * @deprecated Use {@link Box3#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box3#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
    /**
     * @deprecated Use {@link Box3#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}








const _colorKeywords: {
    aliceblue: 0xf0f8ff;
    antiquewhite: 0xfaebd7;
    aqua: 0x00ffff;
    aquamarine: 0x7fffd4;
    azure: 0xf0ffff;
    beige: 0xf5f5dc;
    bisque: 0xffe4c4;
    black: 0x000000;
    blanchedalmond: 0xffebcd;
    blue: 0x0000ff;
    blueviolet: 0x8a2be2;
    brown: 0xa52a2a;
    burlywood: 0xdeb887;
    cadetblue: 0x5f9ea0;
    chartreuse: 0x7fff00;
    chocolate: 0xd2691e;
    coral: 0xff7f50;
    cornflowerblue: 0x6495ed;
    cornsilk: 0xfff8dc;
    crimson: 0xdc143c;
    cyan: 0x00ffff;
    darkblue: 0x00008b;
    darkcyan: 0x008b8b;
    darkgoldenrod: 0xb8860b;
    darkgray: 0xa9a9a9;
    darkgreen: 0x006400;
    darkgrey: 0xa9a9a9;
    darkkhaki: 0xbdb76b;
    darkmagenta: 0x8b008b;
    darkolivegreen: 0x556b2f;
    darkorange: 0xff8c00;
    darkorchid: 0x9932cc;
    darkred: 0x8b0000;
    darksalmon: 0xe9967a;
    darkseagreen: 0x8fbc8f;
    darkslateblue: 0x483d8b;
    darkslategray: 0x2f4f4f;
    darkslategrey: 0x2f4f4f;
    darkturquoise: 0x00ced1;
    darkviolet: 0x9400d3;
    deeppink: 0xff1493;
    deepskyblue: 0x00bfff;
    dimgray: 0x696969;
    dimgrey: 0x696969;
    dodgerblue: 0x1e90ff;
    firebrick: 0xb22222;
    floralwhite: 0xfffaf0;
    forestgreen: 0x228b22;
    fuchsia: 0xff00ff;
    gainsboro: 0xdcdcdc;
    ghostwhite: 0xf8f8ff;
    gold: 0xffd700;
    goldenrod: 0xdaa520;
    gray: 0x808080;
    green: 0x008000;
    greenyellow: 0xadff2f;
    grey: 0x808080;
    honeydew: 0xf0fff0;
    hotpink: 0xff69b4;
    indianred: 0xcd5c5c;
    indigo: 0x4b0082;
    ivory: 0xfffff0;
    khaki: 0xf0e68c;
    lavender: 0xe6e6fa;
    lavenderblush: 0xfff0f5;
    lawngreen: 0x7cfc00;
    lemonchiffon: 0xfffacd;
    lightblue: 0xadd8e6;
    lightcoral: 0xf08080;
    lightcyan: 0xe0ffff;
    lightgoldenrodyellow: 0xfafad2;
    lightgray: 0xd3d3d3;
    lightgreen: 0x90ee90;
    lightgrey: 0xd3d3d3;
    lightpink: 0xffb6c1;
    lightsalmon: 0xffa07a;
    lightseagreen: 0x20b2aa;
    lightskyblue: 0x87cefa;
    lightslategray: 0x778899;
    lightslategrey: 0x778899;
    lightsteelblue: 0xb0c4de;
    lightyellow: 0xffffe0;
    lime: 0x00ff00;
    limegreen: 0x32cd32;
    linen: 0xfaf0e6;
    magenta: 0xff00ff;
    maroon: 0x800000;
    mediumaquamarine: 0x66cdaa;
    mediumblue: 0x0000cd;
    mediumorchid: 0xba55d3;
    mediumpurple: 0x9370db;
    mediumseagreen: 0x3cb371;
    mediumslateblue: 0x7b68ee;
    mediumspringgreen: 0x00fa9a;
    mediumturquoise: 0x48d1cc;
    mediumvioletred: 0xc71585;
    midnightblue: 0x191970;
    mintcream: 0xf5fffa;
    mistyrose: 0xffe4e1;
    moccasin: 0xffe4b5;
    navajowhite: 0xffdead;
    navy: 0x000080;
    oldlace: 0xfdf5e6;
    olive: 0x808000;
    olivedrab: 0x6b8e23;
    orange: 0xffa500;
    orangered: 0xff4500;
    orchid: 0xda70d6;
    palegoldenrod: 0xeee8aa;
    palegreen: 0x98fb98;
    paleturquoise: 0xafeeee;
    palevioletred: 0xdb7093;
    papayawhip: 0xffefd5;
    peachpuff: 0xffdab9;
    peru: 0xcd853f;
    pink: 0xffc0cb;
    plum: 0xdda0dd;
    powderblue: 0xb0e0e6;
    purple: 0x800080;
    rebeccapurple: 0x663399;
    red: 0xff0000;
    rosybrown: 0xbc8f8f;
    royalblue: 0x4169e1;
    saddlebrown: 0x8b4513;
    salmon: 0xfa8072;
    sandybrown: 0xf4a460;
    seagreen: 0x2e8b57;
    seashell: 0xfff5ee;
    sienna: 0xa0522d;
    silver: 0xc0c0c0;
    skyblue: 0x87ceeb;
    slateblue: 0x6a5acd;
    slategray: 0x708090;
    slategrey: 0x708090;
    snow: 0xfffafa;
    springgreen: 0x00ff7f;
    steelblue: 0x4682b4;
    tan: 0xd2b48c;
    teal: 0x008080;
    thistle: 0xd8bfd8;
    tomato: 0xff6347;
    turquoise: 0x40e0d0;
    violet: 0xee82ee;
    wheat: 0xf5deb3;
    white: 0xffffff;
    whitesmoke: 0xf5f5f5;
    yellow: 0xffff00;
    yellowgreen: 0x9acd32;
};
export type ColorKeyword = keyof typeof _colorKeywords;
export interface HSL {
    h: number;
    s: number;
    l: number;
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 );
 */
export class Color {
    constructor(color?: ColorRepresentation);
    constructor(r: number, g: number, b: number);

    readonly isColor: true;

    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    r: number;

    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    g: number;

    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    b: number;

    set(color: ColorRepresentation): Color;
    setScalar(scalar: number): Color;
    setHex(hex: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */
    setStyle(style: string, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a color name.
     * Faster than {@link Color#setStyle .setStyle()} method if you don't need the other CSS-style formats.
     * @param style Color name in X11 format.
     */
    setColorName(style: ColorKeyword, colorSpace?: ColorSpace): Color;

    /**
     * Clones this color.
     */
    clone(): this;

    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color: Color): this;

    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color: Color): Color;

    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color: Color): Color;

    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear(): Color;

    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB(): Color;

    /**
     * Returns the hexadecimal value of this color.
     */
    getHex(colorSpace?: ColorSpace): number;

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(colorSpace?: ColorSpace): string;

    getHSL(target: HSL, colorSpace?: ColorSpace): HSL;

    getRGB(target: RGB, colorSpace?: ColorSpace): RGB;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(colorSpace?: ColorSpace): string;

    offsetHSL(h: number, s: number, l: number): this;

    add(color: Color): this;
    addColors(color1: Color, color2: Color): this;
    addScalar(s: number): this;
    sub(color: Color): this;
    multiply(color: Color): this;
    multiplyScalar(s: number): this;
    lerp(color: Color, alpha: number): this;
    lerpColors(color1: Color, color2: Color, alpha: number): this;
    lerpHSL(color: Color, alpha: number): this;
    equals(color: Color): boolean;

    /**
     * Sets this color's red, green and blue value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [red, green, blue], or copies red, green and blue into the provided array.
     * @param array (optional) array to store the color to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies red, green and blue into the provided array-like.
     * @param array array-like to store the color to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(xyz: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    [Symbol.iterator](): Generator<number, void>;

    /**
     * List of X11 color names.
     */
    static NAMES: typeof _colorKeywords;
}
export function SRGBToLinear(c: number): number;
export function LinearToSRGB(c: number): number;
export namespace ColorManagement {
    /**
     * @default true
     */
    let legacyMode: boolean;
    let enabled: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    let workingColorSpace: ColorSpace;

    function convert(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace,
    ): Color;

    function fromWorkingColorSpace(
        color: Color,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace,
    ): Color;

    function toWorkingColorSpace(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace,
    ): Color;
}
export class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    theta: number;

    /**
     * @default 0
     */
    y: number;

    clone(): this;
    copy(other: Cylindrical): this;
    set(radius: number, theta: number, y: number): this;
    setFromVector3(vec3: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}
export type EulerOrder = 'XYZ' | 'YXZ' | 'ZXY' | 'ZYX' | 'YZX' | 'XZY';
export class Euler {
    constructor(x?: number, y?: number, z?: number, order?: EulerOrder);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default THREE.Euler.DEFAULT_ORDER
     */
    order: EulerOrder;
    readonly isEuler: true;

    _onChangeCallback: () => void;

    set(x: number, y: number, z: number, order?: EulerOrder): Euler;
    clone(): this;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order?: EulerOrder, update?: boolean): Euler;
    setFromQuaternion(q: Quaternion, order?: EulerOrder, update?: boolean): Euler;
    setFromVector3(v: Vector3, order?: EulerOrder): Euler;
    reorder(newOrder: EulerOrder): Euler;
    equals(euler: Euler): boolean;
    fromArray(xyzo: [number, number, number, EulerOrder?, ...any[]]): Euler;
    toArray(array?: Array<number | string | undefined>, offset?: number): Array<number | string | undefined>;
    _onChange(callback: () => void): this;

    static DEFAULT_ORDER: 'XYZ';

    [Symbol.iterator](): Generator<string | number, void>;
}








/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
export class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

    /**
     * Array of 6 vectors.
     */
    planes: Plane[];

    set(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
    clone(): this;
    copy(frustum: Frustum): this;
    setFromProjectionMatrix(m: Matrix4): this;
    intersectsObject(object: Object3D): boolean;
    intersectsSprite(sprite: Sprite): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    containsPoint(point: Vector3): boolean;
}
export abstract class Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: number, resultBuffer?: any);

    parameterPositions: any;
    sampleValues: any;
    valueSize: number;
    resultBuffer: any;

    evaluate(time: number): any;
}
export class CubicInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
export class DiscreteInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
export class LinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
export class QuaternionLinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
export class Line3 {
    constructor(start?: Vector3, end?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    start: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    end: Vector3;

    set(start?: Vector3, end?: Vector3): Line3;
    clone(): this;
    copy(line: Line3): this;
    getCenter(target: Vector3): Vector3;
    delta(target: Vector3): Vector3;
    distanceSq(): number;
    distance(): number;
    at(t: number, target: Vector3): Vector3;
    closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
    closestPointToPoint(point: Vector3, clampToLine: boolean, target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4): Line3;
    equals(line: Line3): boolean;
}
export namespace MathUtils {


/**
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/math/MathUtils.js|src/math/MathUtils.js}
 */
export const DEG2RAD: number;
export const RAD2DEG: number;
export function generateUUID(): string;

/**
 * Clamps the x to be between a and b.
 *
 * @param value Value to be clamped.
 * @param min Minimum value
 * @param max Maximum value.
 */
export function clamp(value: number, min: number, max: number): number;
export function clamp01(value: number): number;
export function euclideanModulo(n: number, m: number): number;

/**
 * Linear mapping of x from range [a1, a2] to range [b1, b2].
 *
 * @param x Value to be mapped.
 * @param a1 Minimum value for range A.
 * @param a2 Maximum value for range A.
 * @param b1 Minimum value for range B.
 * @param b2 Maximum value for range B.
 */
export function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;
export function smoothstep(x: number, min: number, max: number): number;
export function smootherstep(x: number, min: number, max: number): number;

/**
 * Random float from 0 to 1 with 16 bits of randomness.
 * Standard Math.random() creates repetitive patterns when applied over larger space.
 *
 * @deprecated Use {@link Math#random Math.random()}
 */
export function random16(): number;

/**
 * Random integer from low to high interval.
 */
export function randInt(low: number, high: number): number;

/**
 * Random float from low to high interval.
 */
export function randFloat(low: number, high: number): number;

/**
 * Random float from - range / 2 to range / 2 interval.
 */
export function randFloatSpread(range: number): number;

/**
 * Deterministic pseudo-random float in the interval [ 0, 1 ].
 */
export function seededRandom(seed?: number): number;
export function degToRad(degrees: number): number;
export function radToDeg(radians: number): number;
export function isPowerOfTwo(value: number): boolean;
export function inverseLerp(x: number, y: number, t: number): number;

/**
 * Returns a value linearly interpolated from two known points based
 * on the given interval - t = 0 will return x and t = 1 will return y.
 *
 * @param x Start point.
 * @param y End point.
 * @param t interpolation factor in the closed interval [0, 1]
 */
export function lerp(x: number, y: number, t: number): number;

/**
 * Smoothly interpolate a number from x toward y in a spring-like
 * manner using the dt to maintain frame rate independent movement.
 *
 * @param x Current point.
 * @param y Target point.
 * @param lambda A higher lambda value will make the movement more sudden, and a lower value will make the movement more gradual.
 * @param dt Delta time in seconds.
 */
export function damp(x: number, y: number, lambda: number, dt: number): number;

/**
 * Returns a value that alternates between 0 and length.
 *
 * @param x The value to pingpong.
 * @param length The positive value the
export function will pingpong to. Default is 1.
 */
export function pingpong(x: number, length?: number): number;

/**
 * @deprecated Use {@link Math#floorPowerOfTwo .floorPowerOfTwo()}
 */
export function nearestPowerOfTwo(value: number): number;

/**
 * @deprecated Use {@link Math#ceilPowerOfTwo .ceilPowerOfTwo()}
 */
export function nextPowerOfTwo(value: number): number;
export function floorPowerOfTwo(value: number): number;
export function ceilPowerOfTwo(value: number): number;
export function setQuaternionFromProperEuler(q: Quaternion, a: number, b: number, c: number, order: string): void;
}
// https://threejs.org/docs/#api/en/math/Matrix3
export type Matrix3Tuple = [number, number, number, number, number, number, number, number, number];

/**
 * ( interface Matrix<T> )
 */
export interface Matrix {
    /**
     * Array with matrix values.
     */
    elements: number[];

    /**
     * identity():T;
     */
    identity(): Matrix;

    /**
     * copy(m:T):T;
     */
    copy(m: this): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): Matrix;

    determinant(): number;

    /**
     * transpose():T;
     */
    transpose(): Matrix;

    /**
     * invert():T;
     */
    invert(): Matrix;

    /**
     * clone():T;
     */
    clone(): Matrix;
}

/**
 * ( class Matrix3 implements Matrix<Matrix3> )
 */
export class Matrix3 implements Matrix {
    /**
     * Creates an identity matrix.
     */
    constructor();

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    elements: number[];

    set(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    ): Matrix3;
    identity(): Matrix3;
    clone(): this;
    copy(m: Matrix3): this;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix3;
    setFromMatrix4(m: Matrix4): Matrix3;
    multiplyScalar(s: number): Matrix3;
    determinant(): number;

    /**
     * Inverts this matrix in place.
     */
    invert(): Matrix3;

    /**
     * Transposes this matrix in place.
     */
    transpose(): Matrix3;
    getNormalMatrix(matrix4: Matrix4): Matrix3;

    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     */
    transposeIntoArray(r: number[]): Matrix3;

    setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): Matrix3;

    scale(sx: number, sy: number): Matrix3;

    /**
     * Sets this matrix as a 2D translation transform:
     *
     * ```
     * 1, 0, x,
     * 0, 1, y,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to translate in the X axis.
     * @param y the amount to translate in the Y axis.
     */
    makeTranslation(x: number, y: number): this;
    makeTranslation(x: number, y: number): Matrix3;

    /**
     * Sets this matrix as a 2D rotational transformation by theta radians. The resulting matrix will be:
     *
     * ```
     * cos(θ) -sin(θ) 0
     * sin(θ) cos(θ)  0
     * 0      0       1
     * ```
     *
     * @param theta Rotation angle in radians. Positive values rotate counterclockwise.
     */
    makeRotation(theta: number): this;
    makeRotation(theta: number): Matrix3;

    makeRotationY(theta: number): this;
    makeRotationY(theta: number): Matrix3;

    /**
     * Sets this matrix as a 2D scale transform:
     *
     * ```
     * x, 0, 0,
     * 0, y, 0,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to scale in the X axis.
     * @param y the amount to scale in the Y axis.
     */
    makeScale(x: number, y: number): this;
    makeScale(x: number, y: number): Matrix3;

    rotate(theta: number): Matrix3;

    translate(tx: number, ty: number): Matrix3;

    equals(matrix: Matrix3): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix3;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix3Tuple, offset?: 0): Matrix3Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix3): Matrix3;

    premultiply(m: Matrix3): Matrix3;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): Matrix3;

    /**
     * @deprecated Use {@link Vector3.applyMatrix3 vector.applyMatrix3( matrix )} instead.
     */
    multiplyVector3(vector: Vector3): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(a: any): any;

    /**
     * @deprecated Use {@link Matrix3#invert .invert()} instead.
     */
    getInverse(matrix: Matrix4, throwOnDegenerate?: boolean): Matrix3;
    getInverse(matrix: Matrix): Matrix;

    /**
     * @deprecated Use {@link Matrix3#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];
}
export type Matrix4Tuple = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4();
 * const m1 = new THREE.Matrix4();
 * const m2 = new THREE.Matrix4();
 * const m3 = new THREE.Matrix4();
 * const alpha = 0;
 * const beta = Math.PI;
 * const gamma = Math.PI/2;
 * m1.makeRotationX( alpha );
 * m2.makeRotationY( beta );
 * m3.makeRotationZ( gamma );
 * m.multiplyMatrices( m1, m2 );
 * m.multiply( m3 );
 */
export class Matrix4 implements Matrix {
    constructor();

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
     */
    elements: number[];

    /**
     * Sets all fields of this matrix.
     */
    set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): Matrix4;

    /**
     * Resets this matrix to identity.
     */
    identity(): Matrix4;
    clone(): Matrix4;
    copy(m: Matrix4): this;
    copyPosition(m: Matrix4): Matrix4;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;

    /**
     * Copies the rotation component of the supplied matrix m into this matrix rotation component.
     */
    extractRotation(m: Matrix4): Matrix4;
    makeRotationFromEuler(euler: Euler): Matrix4;
    makeRotationFromQuaternion(q: Quaternion): Matrix4;
    /**
     * Constructs a rotation matrix, looking from eye towards center with defined up vector.
     */
    lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix4): Matrix4;

    premultiply(m: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b and stores the result into the flat array r.
     * r can be either a regular Array or a TypedArray.
     *
     * @deprecated This method has been removed completely.
     */
    multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;

    /**
     * Multiplies this matrix by s.
     */
    multiplyScalar(s: number): Matrix4;

    /**
     * Computes determinant of this matrix.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
     */
    determinant(): number;

    /**
     * Transposes this matrix.
     */
    transpose(): Matrix4;

    /**
     * Sets the position component for this matrix from vector v.
     */
    setPosition(v: Vector3 | number, y?: number, z?: number): Matrix4;

    /**
     * Inverts this matrix.
     */
    invert(): Matrix4;

    /**
     * Multiplies the columns of this matrix by vector v.
     */
    scale(v: Vector3): Matrix4;

    getMaxScaleOnAxis(): number;
    /**
     * Sets this matrix as translation transform.
     */
    makeTranslation(x: number, y: number, z: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around x axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationX(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around y axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationY(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around z axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationZ(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around axis by angle radians.
     * Based on http://www.gamedev.net/reference/articles/article1199.asp.
     *
     * @param axis Rotation axis.
     * @param theta Rotation angle in radians.
     */
    makeRotationAxis(axis: Vector3, angle: number): Matrix4;

    /**
     * Sets this matrix as scale transform.
     */
    makeScale(x: number, y: number, z: number): Matrix4;

    /**
     * Sets this matrix as shear transform.
     */
    makeShear(xy: number, xz: number, yx: number, yz: number, zx: number, zy: number): Matrix4;

    /**
     * Sets this matrix to the transformation composed of translation, rotation and scale.
     */
    compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Decomposes this matrix into it's position, quaternion and scale components.
     */
    decompose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Creates a frustum matrix.
     */
    makePerspective(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;

    /**
     * Creates a perspective projection matrix.
     */
    makePerspective(fov: number, aspect: number, near: number, far: number): Matrix4;

    /**
     * Creates an orthographic projection matrix.
     */
    makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
    equals(matrix: Matrix4): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix4;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix4Tuple, offset?: 0): Matrix4Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Set the upper 3x3 elements of this matrix to the values of the Matrix3 m.
     */
    setFromMatrix3(m: Matrix3): Matrix4;

    /**
     * @deprecated Use {@link Matrix4#copyPosition .copyPosition()} instead.
     */
    extractPosition(m: Matrix4): Matrix4;

    /**
     * @deprecated Use {@link Matrix4#makeRotationFromQuaternion .makeRotationFromQuaternion()} instead.
     */
    setRotationFromQuaternion(q: Quaternion): Matrix4;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector3(v: any): any;

    /**
     * @deprecated Use {@link Vector4#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector4(v: any): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(array: number[]): number[];

    /**
     * @deprecated Use {@link Vector3#transformDirection Vector3.transformDirection( matrix )} instead.
     */
    rotateAxis(v: any): void;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    crossVector(v: any): void;

    /**
     * @deprecated Use {@link Matrix4#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];

    /**
     * @deprecated Use {@link Matrix4#invert .invert()} instead.
     */
    getInverse(matrix: Matrix): Matrix;
}
export class Plane {
    constructor(normal?: Vector3, constant?: number);

    /**
     * @default new THREE.Vector3( 1, 0, 0 )
     */
    normal: Vector3;

    /**
     * @default 0
     */
    constant: number;

    readonly isPlane: true;

    set(normal: Vector3, constant: number): Plane;
    setComponents(x: number, y: number, z: number, w: number): Plane;
    setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
    setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
    clone(): this;
    copy(plane: Plane): this;
    normalize(): Plane;
    negate(): Plane;
    distanceToPoint(point: Vector3): number;
    distanceToSphere(sphere: Sphere): number;
    projectPoint(point: Vector3, target: Vector3): Vector3;
    intersectLine(line: Line3, target: Vector3): Vector3 | null;
    intersectsLine(line: Line3): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    coplanarPoint(target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
    translate(offset: Vector3): Plane;
    equals(plane: Plane): boolean;

    /**
     * @deprecated Use {@link Plane#intersectsLine .intersectsLine()} instead.
     */
    isIntersectionLine(l: any): any;
}






/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 */
export class Quaternion {
    /**
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     * @param w w coordinate
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 1
     */
    w: number;
    readonly isQuaternion: true;

    /**
     * Sets values of this quaternion.
     */
    set(x: number, y: number, z: number, w: number): Quaternion;

    /**
     * Clones this quaternion.
     */
    clone(): this;

    /**
     * Copies values of q to this quaternion.
     */
    copy(q: Quaternion): this;

    /**
     * Sets this quaternion from rotation specified by Euler angles.
     */
    setFromEuler(euler: Euler, update?: boolean): Quaternion;

    /**
     * Sets this quaternion from rotation specified by axis and angle.
     * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
     * Axis have to be normalized, angle is in radians.
     */
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     */
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
    angleTo(q: Quaternion): number;
    rotateTowards(q: Quaternion, step: number): Quaternion;

    identity(): Quaternion;

    /**
     * Inverts this quaternion.
     */
    invert(): Quaternion;

    conjugate(): Quaternion;
    dot(v: Quaternion): number;
    lengthSq(): number;

    /**
     * Computes length of this quaternion.
     */
    length(): number;

    /**
     * Normalizes this quaternion.
     */
    normalize(): Quaternion;

    /**
     * Multiplies this quaternion by b.
     */
    multiply(q: Quaternion): Quaternion;
    premultiply(q: Quaternion): Quaternion;

    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     */
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

    slerp(qb: Quaternion, t: number): Quaternion;
    slerpQuaternions(qa: Quaternion, qb: Quaternion, t: number): Quaternion;
    equals(v: Quaternion): boolean;

    /**
     * Sets this quaternion's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the quaternion to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the quaternion to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Sets x, y, z, w properties of this quaternion from the attribute.
     * @param attribute the source attribute.
     * @param index index in the attribute.
     */
    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): Quaternion;

    _onChange(callback: () => void): Quaternion;
    _onChangeCallback: () => void;

    static slerpFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
        t: number,
    ): void;

    static multiplyQuaternionsFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
    ): number[];

    /**
     * @deprecated Use qm.slerpQuaternions( qa, qb, t ) instead..
     */
    static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): number;

    /**
     * @deprecated Use {@link Vector#applyQuaternion vector.applyQuaternion( quaternion )} instead.
     */
    multiplyVector3(v: any): any;

    random(): Quaternion;

    [Symbol.iterator](): Generator<number, void>;
}
export class Ray {
    constructor(origin?: Vector3, direction?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    origin: Vector3;

    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    direction: Vector3;

    set(origin: Vector3, direction: Vector3): Ray;
    clone(): this;
    copy(ray: Ray): this;
    at(t: number, target: Vector3): Vector3;
    lookAt(v: Vector3): Ray;
    recast(t: number): Ray;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    distanceSqToPoint(point: Vector3): number;
    distanceSqToSegment(
        v0: Vector3,
        v1: Vector3,
        optionalPointOnRay?: Vector3,
        optionalPointOnSegment?: Vector3,
    ): number;
    intersectSphere(sphere: Sphere, target: Vector3): Vector3 | null;
    intersectsSphere(sphere: Sphere): boolean;
    distanceToPlane(plane: Plane): number;
    intersectPlane(plane: Plane, target: Vector3): Vector3 | null;
    intersectsPlane(plane: Plane): boolean;
    intersectBox(box: Box3, target: Vector3): Vector3 | null;
    intersectsBox(box: Box3): boolean;
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3): Vector3 | null;
    applyMatrix4(matrix4: Matrix4): Ray;
    equals(ray: Ray): boolean;

    /**
     * @deprecated Use {@link Ray#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsPlane .intersectsPlane()} instead.
     */
    isIntersectionPlane(p: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}
export class Sphere {
    constructor(center?: Vector3, radius?: number);

    /**
     * @default new Vector3()
     */
    center: Vector3;

    /**
     * @default 1
     */
    radius: number;

    set(center: Vector3, radius: number): Sphere;
    setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
    clone(): this;
    copy(sphere: Sphere): this;
    expandByPoint(point: Vector3): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: Vector3): boolean;
    distanceToPoint(point: Vector3): number;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsPlane(plane: Plane): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    getBoundingBox(target: Box3): Box3;
    applyMatrix4(matrix: Matrix4): Sphere;
    translate(offset: Vector3): Sphere;
    equals(sphere: Sphere): boolean;
    union(sphere: Sphere): this;

    /**
     * @deprecated Use {@link Sphere#isEmpty .isEmpty()} instead.
     */
    empty(): any;
}
export class Spherical {
    constructor(radius?: number, phi?: number, theta?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    phi: number;

    /**
     * @default 0
     */
    theta: number;

    set(radius: number, phi: number, theta: number): this;
    clone(): this;
    copy(other: Spherical): this;
    makeSafe(): this;
    setFromVector3(v: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}
export class SphericalHarmonics3 {
    constructor();

    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]
     */
    coefficients: Vector3[];
    readonly isSphericalHarmonics3: true;

    set(coefficients: Vector3[]): SphericalHarmonics3;
    zero(): SphericalHarmonics3;
    add(sh: SphericalHarmonics3): SphericalHarmonics3;
    addScaledSH(sh: SphericalHarmonics3, s: number): SphericalHarmonics3;
    scale(s: number): SphericalHarmonics3;
    lerp(sh: SphericalHarmonics3, alpha: number): SphericalHarmonics3;
    equals(sh: SphericalHarmonics3): boolean;
    copy(sh: SphericalHarmonics3): SphericalHarmonics3;
    clone(): this;

    /**
     * Sets the values of this spherical harmonics from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array.
     * @param array (optional) array to store the spherical harmonics to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array-like.
     * @param array array-like to store the spherical harmonics to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    getAt(normal: Vector3, target: Vector3): Vector3;
    getIrradianceAt(normal: Vector3, target: Vector3): Vector3;

    static getBasisAt(normal: Vector3, shBasis: number[]): void;
}
export class Triangle {
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    a: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    b: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    c: Vector3;

    set(a: Vector3, b: Vector3, c: Vector3): Triangle;
    setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): this;
    setFromAttributeAndIndices(
        attribute: BufferAttribute | InterleavedBufferAttribute,
        i0: number,
        i1: number,
        i2: number,
    ): this;
    clone(): this;
    copy(triangle: Triangle): this;
    getArea(): number;
    getMidpoint(target: Vector3): Vector3;
    getNormal(target: Vector3): Vector3;
    getPlane(target: Plane): Plane;
    getBarycoord(point: Vector3, target: Vector3): Vector3;
    getUV(point: Vector3, uv1: Vector2, uv2: Vector2, uv3: Vector2, target: Vector2): Vector2;
    containsPoint(point: Vector3): boolean;
    intersectsBox(box: Box3): boolean;
    isFrontFacing(direction: Vector3): boolean;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    equals(triangle: Triangle): boolean;

    static getNormal(a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static getBarycoord(point: Vector3, a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    static getUV(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        uv1: Vector2,
        uv2: Vector2,
        uv3: Vector2,
        target: Vector2,
    ): Vector2;
    static isFrontFacing(a: Vector3, b: Vector3, c: Vector3, direction: Vector3): boolean;
}
export type Vector2Tuple = [number, number];

/**
 * ( interface Vector<T> )
 *
 * Abstract interface of {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js|Vector2},
 * {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js|Vector3}
 * and {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector4.js|Vector4}.
 *
 * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
 *
 * Those definitions will be changed when TypeScript innovates Generics to be type safe.
 *
 * @example
 * const v:THREE.Vector = new THREE.Vector3();
 * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3)); // invalid but compiled successfully
 */
export interface Vector {
    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    set(...args: number[]): this;

    setScalar(scalar: number): this;

    /**
     * copy(v:T):T;
     */
    copy(v: Vector): this;

    /**
     * NOTE: The second argument is deprecated.
     *
     * add(v:T):T;
     */
    add(v: Vector): this;

    /**
     * addVectors(a:T, b:T):T;
     */
    addVectors(a: Vector, b: Vector): this;

    addScaledVector(vector: Vector, scale: number): this;

    /**
     * Adds the scalar value s to this vector's values.
     */
    addScalar(scalar: number): this;

    /**
     * sub(v:T):T;
     */
    sub(v: Vector): this;

    /**
     * subVectors(a:T, b:T):T;
     */
    subVectors(a: Vector, b: Vector): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): this;

    /**
     * divideScalar(s:number):T;
     */
    divideScalar(s: number): this;

    /**
     * negate():T;
     */
    negate(): this;

    /**
     * dot(v:T):T;
     */
    dot(v: Vector): number;

    /**
     * lengthSq():number;
     */
    lengthSq(): number;

    /**
     * length():number;
     */
    length(): number;

    /**
     * normalize():T;
     */
    normalize(): this;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceTo(v:T):number;
     */
    distanceTo?(v: Vector): number;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceToSquared(v:T):number;
     */
    distanceToSquared?(v: Vector): number;

    /**
     * setLength(l:number):T;
     */
    setLength(l: number): this;

    /**
     * lerp(v:T, alpha:number):T;
     */
    lerp(v: Vector, alpha: number): this;

    /**
     * equals(v:T):boolean;
     */
    equals(v: Vector): boolean;

    /**
     * clone():T;
     */
    clone(): Vector;
}

/**
 * 2D vector.
 *
 * ( class Vector2 implements Vector<Vector2> )
 */
export class Vector2 implements Vector {
    constructor(x?: number, y?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;
    width: number;
    height: number;
    readonly isVector2: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number): this;

    /**
     * Sets the x and y values of this vector both equal to scalar.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets a component of this vector.
     */
    setComponent(index: number, value: number): this;

    /**
     * Gets a component of this vector.
     */
    getComponent(index: number): number;

    /**
     * Returns a new Vector2 instance with the same `x` and `y` values.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector2): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector2, w?: Vector2): this;

    /**
     * Adds the scalar value s to this vector's x and y values.
     */
    addScalar(s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector2, b: Vector2): this;

    /**
     * Adds the multiple of v and s to this vector.
     */
    addScaledVector(v: Vector2, s: number): this;

    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector2): this;

    /**
     * Subtracts s from this vector's x and y components.
     */
    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector2, b: Vector2): this;

    /**
     * Multiplies this vector by v.
     */
    multiply(v: Vector2): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(scalar: number): this;

    /**
     * Divides this vector by v.
     */
    divide(v: Vector2): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * Multiplies this vector (with an implicit 1 as the 3rd component) by m.
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * If this vector's x or y value is greater than v's x or y value, replace that value with the corresponding min value.
     */
    min(v: Vector2): this;

    /**
     * If this vector's x or y value is less than v's x or y value, replace that value with the corresponding max value.
     */
    max(v: Vector2): this;

    /**
     * If this vector's x or y value is greater than the max vector's x or y value, it is replaced by the corresponding value.
     * If this vector's x or y value is less than the min vector's x or y value, it is replaced by the corresponding value.
     * @param min the minimum x and y values.
     * @param max the maximum x and y values in the desired range.
     */
    clamp(min: Vector2, max: Vector2): this;

    /**
     * If this vector's x or y values are greater than the max value, they are replaced by the max value.
     * If this vector's x or y values are less than the min value, they are replaced by the min value.
     * @param min the minimum value the components will be clamped to.
     * @param max the maximum value the components will be clamped to.
     */
    clampScalar(min: number, max: number): this;

    /**
     * If this vector's length is greater than the max value, it is replaced by the max value.
     * If this vector's length is less than the min value, it is replaced by the min value.
     * @param min the minimum value the length will be clamped to.
     * @param max the maximum value the length will be clamped to.
     */
    clampLength(min: number, max: number): this;

    /**
     * The components of the vector are rounded down to the nearest integer value.
     */
    floor(): this;

    /**
     * The x and y components of the vector are rounded up to the nearest integer value.
     */
    ceil(): this;

    /**
     * The components of the vector are rounded to the nearest integer value.
     */
    round(): this;

    /**
     * The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value.
     */
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector2): number;

    /**
     * Computes cross product of this vector and v.
     */
    cross(v: Vector2): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * @deprecated Use {@link Vector2#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * computes the angle in radians with respect to the positive x-axis
     */
    angle(): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector2): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector2): number;

    /**
     * @deprecated Use {@link Vector2#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector2): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector2): number;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolates between this vector and v, where alpha is the distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.
     * @param v vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerp(v: Vector2, alpha: number): this;

    /**
     * Sets this vector to be the vector linearly interpolated between v1 and v2 where alpha is the distance along the line connecting the two vectors - alpha = 0 will be v1, and alpha = 1 will be v2.
     * @param v1 the starting vector.
     * @param v2 vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerpVectors(v1: Vector2, v2: Vector2, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector2): boolean;

    /**
     * Sets this vector's x and y value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y], or copies x and y into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector2Tuple, offset?: 0): Vector2Tuple;

    /**
     * Copies x and y into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Sets this vector's x and y values from the attribute.
     * @param attribute the source attribute.
     * @param index index in the attribute.
     */
    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Rotates the vector around center by angle radians.
     * @param center the point around which to rotate.
     * @param angle the angle to rotate, in radians.
     */
    rotateAround(center: Vector2, angle: number): this;

    /**
     * Sets this vector's x and y from Math.random
     */
    random(): this;
}
export type Vector3Tuple = [number, number, number];

/**
 * 3D vector. ( class Vector3 implements Vector<Vector3> )
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 );
 * const b = new THREE.Vector3( 0, 1, 0 );
 * const c = new THREE.Vector3();
 * c.crossVectors( a, b );
 */
export class Vector3 implements Vector {
    static UNIT_X: Readonly<Vector3>;
    static UNIT_Y: Readonly<Vector3>;
    static UNIT_Z: Readonly<Vector3>;
    static RIGHT: Readonly<Vector3>;
    static UP: Readonly<Vector3>;
    static ZERO: Readonly<Vector3>;
    static ONE: Readonly<Vector3>;
    static NEG_ONE: Readonly<Vector3>;

    constructor(x?: number, y?: number, z?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;
    readonly isVector3: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets x value of this vector.
     */
    setX(x: number): Vector3;

    /**
     * Sets y value of this vector.
     */
    setY(y: number): Vector3;

    /**
     * Sets z value of this vector.
     */
    setZ(z: number): Vector3;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector3): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector3): this;

    addScalar(s: number): this;

    addScaledVector(v: Vector3, s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector3, b: Vector3): this;

    /**
     * Subtracts v from this vector.
     */
    sub(a: Vector3): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector3, b: Vector3): this;

    multiply(v: Vector3): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    multiplyVectors(a: Vector3, b: Vector3): this;

    applyEuler(euler: Euler): this;

    applyAxisAngle(axis: Vector3, angle: number): this;

    applyMatrix3(m: Matrix3): this;

    applyNormalMatrix(m: Matrix3): this;

    applyMatrix4(m: Matrix4): this;

    applyQuaternion(q: Quaternion): this;

    project(camera: Camera): this;

    unproject(camera: Camera): this;

    transformDirection(m: Matrix4): this;

    divide(v: Vector3): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    min(v: Vector3): this;

    max(v: Vector3): this;

    clamp(min: Vector3, max: Vector3): this;

    clampScalar(min: number, max: number): this;

    clampLength(min: number, max: number): this;

    floor(): this;

    ceil(): this;

    round(): this;

    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector3): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     *
     * @deprecated Use {@link Vector3#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector3): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(l: number): this;
    lerp(v: Vector3, alpha: number): this;

    lerpVectors(v1: Vector3, v2: Vector3, alpha: number): this;

    /**
     * Sets this vector to cross product of itself and v.
     */
    cross(a: Vector3): this;

    /**
     * Sets this vector to cross product of a and b.
     */
    crossVectors(a: Vector3, b: Vector3): this;
    projectOnVector(v: Vector3): this;
    projectOnPlane(planeNormal: Vector3): this;
    reflect(vector: Vector3): this;
    angleTo(v: Vector3): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector3): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector3): number;

    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector3): number;

    setFromSpherical(s: Spherical): this;
    setFromSphericalCoords(r: number, phi: number, theta: number): this;
    setFromCylindrical(s: Cylindrical): this;
    setFromCylindricalCoords(radius: number, theta: number, y: number): this;
    setFromMatrixPosition(m: Matrix4): this;
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(matrix: Matrix4, index: number): this;
    setFromMatrix3Column(matrix: Matrix3, index: number): this;

    /**
     * Sets this vector's {@link x}, {@link y} and {@link z} components from the x, y, and z components of the specified {@link Euler Euler Angle}.
     */
    setFromEuler(e: Euler): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector3): boolean;

    /**
     * Sets this vector's x, y and z value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector3Tuple, offset?: 0): Vector3Tuple;

    /**
     * Copies x, y and z into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y and z from Math.random
     */
    random(): this;

    randomDirection(): this;
}
export type Vector4Tuple = [number, number, number, number];

/**
 * 4D vector.
 *
 * ( class Vector4 implements Vector<Vector4> )
 */
export class Vector4 implements Vector {
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 0
     */
    w: number;

    width: number;
    height: number;
    readonly isVector4: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number, w: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets Z component of this vector.
     */
    setZ(z: number): this;

    /**
     * Sets w component of this vector.
     */
    setW(w: number): this;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector4): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector4): this;

    addScalar(scalar: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector4, b: Vector4): this;

    addScaledVector(v: Vector4, s: number): this;
    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector4): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector4, b: Vector4): this;

    multiply(v: Vector4): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    applyMatrix4(m: Matrix4): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
     * @param q is assumed to be normalized
     */
    setAxisAngleFromQuaternion(q: Quaternion): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
     * @param m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
     */
    setAxisAngleFromRotationMatrix(m: Matrix4): this;

    min(v: Vector4): this;
    max(v: Vector4): this;
    clamp(min: Vector4, max: Vector4): this;
    clampScalar(min: number, max: number): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector4): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;
    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolate between this vector and v with alpha factor.
     */
    lerp(v: Vector4, alpha: number): this;

    lerpVectors(v1: Vector4, v2: Vector4, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector4): boolean;

    /**
     * Sets this vector's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector4Tuple, offset?: 0): Vector4Tuple;

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y, z and w from Math.random
     */
    random(): this;
}


// Objects //////////////////////////////////////////////////////////////////////////////////
export class Bone extends Object3D {
    constructor();
    readonly isBone: true;
    type: 'Bone';
}
export class Group extends Object3D {
    constructor();
    type: 'Group';
    readonly isGroup: true;
}
export class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry: TGeometry | undefined, material: TMaterial | undefined, count: number);

    count: number;
    instanceColor: null | InstancedBufferAttribute;
    instanceMatrix: InstancedBufferAttribute;
    readonly isInstancedMesh: true;

    getColorAt(index: number, color: Color): void;
    getMatrixAt(index: number, matrix: Matrix4): void;
    setColorAt(index: number, color: Color): void;
    setMatrixAt(index: number, matrix: Matrix4): void;
    dispose(): void;
}
export class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;

    type: 'Line' | 'LineLoop' | 'LineSegments' | string;
    readonly isLine: true;

    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;

    computeLineDistances(): this;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}
export class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'LineLoop';
    readonly isLineLoop: true;
}




/**
 * @deprecated
 */
export const LineStrip: number;
/**
 * @deprecated
 */
export const LinePieces: number;
export class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * @default 'LineSegments'
     */
    type: 'LineSegments' | string;
    readonly isLineSegments: true;
}
export class LOD extends Object3D {
    constructor();

    type: 'LOD';

    /**
     *
     * An array of level objects
     *
     * Each level is an object with the following properties:
     *
     * - object - The Object3D to display at this level.
     * - distance - The distance at which to display this level of detail.
     * - hysteresis - Threshold used to avoid flickering at LOD boundaries, as a fraction of distance.
     */
    levels: Array<{ distance: number; hysteresis: number; object: Object3D }>;

    autoUpdate: boolean;
    readonly isLOD: true;

    /**
     * Adds a mesh that will display at a certain distance and greater. Typically the further away the distance, the lower the detail on the mesh.
     *
     * @param object The Object3D to display at this level.
     * @param distance The distance at which to display this level of detail. Default 0.0.
     * @param hysteresis Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Default 0.0.
     */
    addLevel(object: Object3D, distance?: number, hysteresis?: number): this;

    getCurrentLevel(): number;
    getObjectForDistance(distance: number): Object3D | null;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    update(camera: Camera): void;
    toJSON(meta: any): any;

    // TODO: Remove this
    /**
     * @deprecated Use {@link LOD#levels .levels} instead.
     */
    objects: any[];
}
export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isMesh: true;
    type: string;

    updateMorphTargets(): void;

    /**
     * Get the local-space position of the vertex at the given index,
     * taking into account the current animation state of both morph targets and skinning.
     */
    getVertexPosition(index: number, target: Vector3): Vector3;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
}






/**
 * A class for displaying points. The points are rendered by the WebGLRenderer using gl.POINTS.
 */
export class Points<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    /**
     * @param geometry An instance of BufferGeometry.
     * @param material An instance of Material (optional).
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'Points';
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isPoints: true;

    /**
     * An instance of BufferGeometry, where each vertex designates the position of a particle in the system.
     */
    geometry: TGeometry;

    /**
     * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
     */
    material: TMaterial;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}
export class Skeleton {
    constructor(bones: Bone[], boneInverses?: Matrix4[]);

    uuid: string;
    bones: Bone[];
    boneInverses: Matrix4[];
    boneMatrices: Float32Array;
    boneTexture: null | DataTexture;
    boneTextureSize: number;
    frame: number;

    init(): void;
    calculateInverses(): void;
    computeBoneTexture(): this;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    getBoneByName(name: string): undefined | Bone;
    dispose(): void;

    /**
     * @deprecated This property has been removed completely.
     */
    useVertexTexture: boolean;
}
export class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    bindMode: string;
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    skeleton: Skeleton;
    readonly isSkinnedMesh: true;

    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateMatrixWorld(force?: boolean): void;
    boneTransform(index: number, target: Vector3): Vector3;
}
export class Sprite extends Object3D {
    constructor(material?: SpriteMaterial);

    type: 'Sprite';
    readonly isSprite: true;

    geometry: BufferGeometry;
    material: SpriteMaterial;
    center: Vector2;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    copy(source: this): this;
}
// Renderers / Shaders /////////////////////////////////////////////////////////////////////
export let ShaderChunk: {
    [name: string]: string;

    alphamap_fragment: string;
    alphamap_pars_fragment: string;
    alphatest_fragment: string;
    aomap_fragment: string;
    aomap_pars_fragment: string;
    begin_vertex: string;
    beginnormal_vertex: string;
    bsdfs: string;
    bumpmap_pars_fragment: string;
    clipping_planes_fragment: string;
    clipping_planes_pars_fragment: string;
    clipping_planes_pars_vertex: string;
    clipping_planes_vertex: string;
    color_fragment: string;
    color_pars_fragment: string;
    color_pars_vertex: string;
    color_vertex: string;
    common: string;
    cube_frag: string;
    cube_vert: string;
    cube_uv_reflection_fragment: string;
    defaultnormal_vertex: string;
    depth_frag: string;
    depth_vert: string;
    distanceRGBA_frag: string;
    distanceRGBA_vert: string;
    displacementmap_vertex: string;
    displacementmap_pars_vertex: string;
    emissivemap_fragment: string;
    emissivemap_pars_fragment: string;
    encodings_pars_fragment: string;
    encodings_fragment: string;
    envmap_fragment: string;
    envmap_common_pars_fragment: string;
    envmap_pars_fragment: string;
    envmap_pars_vertex: string;
    envmap_vertex: string;
    equirect_frag: string;
    equirect_vert: string;
    fog_fragment: string;
    fog_pars_fragment: string;
    linedashed_frag: string;
    linedashed_vert: string;
    lightmap_fragment: string;
    lightmap_pars_fragment: string;
    lights_lambert_vertex: string;
    lights_pars_begin: string;
    envmap_physical_pars_fragment: string;
    lights_pars_map: string;
    lights_phong_fragment: string;
    lights_phong_pars_fragment: string;
    lights_physical_fragment: string;
    lights_physical_pars_fragment: string;
    lights_fragment_begin: string;
    lights_fragment_maps: string;
    lights_fragment_end: string;
    logdepthbuf_fragment: string;
    logdepthbuf_pars_fragment: string;
    logdepthbuf_pars_vertex: string;
    logdepthbuf_vertex: string;
    map_fragment: string;
    map_pars_fragment: string;
    map_particle_fragment: string;
    map_particle_pars_fragment: string;
    meshbasic_frag: string;
    meshbasic_vert: string;
    meshlambert_frag: string;
    meshlambert_vert: string;
    meshphong_frag: string;
    meshphong_vert: string;
    meshphysical_frag: string;
    meshphysical_vert: string;
    metalnessmap_fragment: string;
    metalnessmap_pars_fragment: string;
    morphnormal_vertex: string;
    morphtarget_pars_vertex: string;
    morphtarget_vertex: string;
    normal_flip: string;
    normal_frag: string;
    normal_fragment_begin: string;
    normal_fragment_maps: string;
    normal_vert: string;
    normalmap_pars_fragment: string;
    clearcoat_normal_fragment_begin: string;
    clearcoat_normal_fragment_maps: string;
    clearcoat_pars_fragment: string;
    packing: string;
    points_frag: string;
    points_vert: string;
    shadow_frag: string;
    shadow_vert: string;

    premultiplied_alpha_fragment: string;
    project_vertex: string;
    roughnessmap_fragment: string;
    roughnessmap_pars_fragment: string;
    shadowmap_pars_fragment: string;
    shadowmap_pars_vertex: string;
    shadowmap_vertex: string;
    shadowmask_pars_fragment: string;
    skinbase_vertex: string;
    skinning_pars_vertex: string;
    skinning_vertex: string;
    skinnormal_vertex: string;
    specularmap_fragment: string;
    specularmap_pars_fragment: string;
    tonemapping_fragment: string;
    tonemapping_pars_fragment: string;
    uv2_pars_fragment: string;
    uv2_pars_vertex: string;
    uv2_vertex: string;
    uv_pars_fragment: string;
    uv_pars_vertex: string;
    uv_vertex: string;
    worldpos_vertex: string;
};
export interface Shader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}
export let ShaderLib: {
    [name: string]: Shader;
    basic: Shader;
    lambert: Shader;
    phong: Shader;
    standard: Shader;
    matcap: Shader;
    points: Shader;
    dashed: Shader;
    depth: Shader;
    normal: Shader;
    sprite: Shader;
    background: Shader;
    cube: Shader;
    equirect: Shader;
    distanceRGBA: Shader;
    shadow: Shader;
    physical: Shader;
};
// tslint:disable-next-line:interface-name
export interface IUniform<TValue = any> {
    value: TValue;
}
export let UniformsLib: {
    common: {
        diffuse: IUniform;
        opacity: IUniform;
        map: IUniform;
        uvTransform: IUniform;
        uv2Transform: IUniform;
        alphaMap: IUniform;
    };
    specularmap: {
        specularMap: IUniform;
    };
    envmap: {
        envMap: IUniform;
        flipEnvMap: IUniform;
        reflectivity: IUniform;
        ior: IUniform;
        refractRatio: IUniform;
        backgroundBlurriness: IUniform;
    };
    aomap: {
        aoMap: IUniform;
        aoMapIntensity: IUniform;
    };
    lightmap: {
        lightMap: IUniform;
        lightMapIntensity: IUniform;
    };
    emissivemap: {
        emissiveMap: IUniform;
    };
    bumpmap: {
        bumpMap: IUniform;
        bumpScale: IUniform;
    };
    normalmap: {
        normalMap: IUniform;
        normalScale: IUniform;
    };
    displacementmap: {
        displacementMap: IUniform;
        displacementScale: IUniform;
        displacementBias: IUniform;
    };
    roughnessmap: {
        roughnessMap: IUniform;
    };
    metalnessmap: {
        metalnessMap: IUniform;
    };
    gradientmap: {
        gradientMap: IUniform;
    };
    fog: {
        fogDensity: IUniform;
        fogNear: IUniform;
        fogFar: IUniform;
        fogColor: IUniform;
    };
    lights: {
        ambientLightColor: IUniform;
        directionalLights: {
            value: any[];
            properties: {
                direction: {};
                color: {};
            };
        };
        directionalLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        directionalShadowMap: IUniform;
        directionalShadowMatrix: IUniform;
        spotLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                direction: {};
                distance: {};
                coneCos: {};
                penumbraCos: {};
                decay: {};
            };
        };
        spotLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        spotShadowMap: IUniform;
        spotShadowMatrix: IUniform;
        pointLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                decay: {};
                distance: {};
            };
        };
        pointLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        pointShadowMap: IUniform;
        pointShadowMatrix: IUniform;
        hemisphereLights: {
            value: any[];
            properties: {
                direction: {};
                skycolor: {};
                groundColor: {};
            };
        };
        rectAreaLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                width: {};
                height: {};
            };
        };
    };
    points: {
        diffuse: IUniform;
        opacity: IUniform;
        size: IUniform;
        scale: IUniform;
        map: IUniform;
        uvTransform: IUniform;
    };
};
export function cloneUniforms(uniforms_src: any): any;
export function mergeUniforms(uniforms: any): any;
export function cloneUniformsGroups(src: UniformsGroup[]): UniformsGroup[];
export namespace UniformsUtils {
export { mergeUniforms as merge, cloneUniforms as clone };
}
export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): {
        buffer: WebGLBuffer;
        type: number;
        bytesPerElement: number;
        version: number;
    };

    remove(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute, bufferType: number): void;
}
export class WebGLBindingStates {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        attributes: WebGLAttributes,
        capabilities: WebGLCapabilities,
    );

    setup(
        object: Object3D,
        material: Material,
        program: WebGLProgram,
        geometry: BufferGeometry,
        index: BufferAttribute,
    ): void;
    reset(): void;
    resetDefaultState(): void;
    dispose(): void;
    releaseStatesOfGeometry(): void;
    releaseStatesOfProgram(): void;
    initAttributes(): void;
    enableAttribute(attribute: number): void;
    disableUnusedAttributes(): void;
}
// Renderers / WebGL /////////////////////////////////////////////////////////////////////
export class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
        capabilities: WebGLCapabilities,
    );

    setMode(value: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}
export interface WebGLCapabilitiesParameters {
    precision?: string | undefined;
    logarithmicDepthBuffer?: boolean | undefined;
}
export class WebGLCapabilities {
    constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

    readonly isWebGL2: boolean;
    precision: string;
    logarithmicDepthBuffer: boolean;
    maxTextures: number;
    maxVertexTextures: number;
    maxTextureSize: number;
    maxCubemapSize: number;
    maxAttributes: number;
    maxVertexUniforms: number;
    maxVaryings: number;
    maxFragmentUniforms: number;
    vertexTextures: boolean;
    floatFragmentTextures: boolean;
    floatVertexTextures: boolean;
    maxSamples: number;

    getMaxAnisotropy(): number;
    getMaxPrecision(precision: string): string;
}
export class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean): boolean;
    beginShadows(): void;
    endShadows(): void;
    setGlobalState(planes: Plane[], camera: Camera): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}
export class WebGLCubeMaps {
    constructor(renderer: WebGLRenderer);

    get(texture: any): any;
    dispose(): void;
}
export class WebGLCubeUVMaps {
    constructor(renderer: WebGLRenderer);

    get<T>(texture: T): T extends Texture ? Texture : T;
    dispose(): void;
}
export class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(capabilities: WebGLCapabilities): void;
    get(name: string): any;
}
export class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}
export class WebGLIndexedBufferRenderer {
    constructor(gl: WebGLRenderingContext, extensions: any, info: any, capabilities: any);

    setMode(value: any): void;
    setIndex(index: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}


/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */
export class WebGLInfo {
    constructor(gl: WebGLRenderingContext);

    /**
     * @default true
     */
    autoReset: boolean;

    /**
     * @default { geometries: 0, textures: 0 }
     */
    memory: {
        geometries: number;
        textures: number;
    };

    /**
     * @default null
     */
    programs: WebGLProgram[] | null;

    /**
     * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
     */
    render: {
        calls: number;
        frame: number;
        lines: number;
        points: number;
        triangles: number;
    };
    update(count: number, mode: number, instanceCount: number): void;
    reset(): void;
}
export class WebGLLights {
    constructor(extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    state: {
        version: number;

        hash: {
            directionalLength: number;
            pointLength: number;
            spotLength: number;
            rectAreaLength: number;
            hemiLength: number;

            numDirectionalShadows: number;
            numPointShadows: number;
            numSpotShadows: number;
        };

        ambient: number[];
        probe: any[];
        directional: any[];
        directionalShadow: any[];
        directionalShadowMap: any[];
        directionalShadowMatrix: any[];
        spot: any[];
        spotShadow: any[];
        spotShadowMap: any[];
        spotShadowMatrix: any[];
        rectArea: any[];
        point: any[];
        pointShadow: any[];
        pointShadowMap: any[];
        pointShadowMatrix: any[];
        hemi: any[];
    };

    get(light: any): any;
    setup(lights: any): void;
    setupView(lights: any, camera: any): void;
}
export class WebGLObjects {
    constructor(gl: WebGLRenderingContext, geometries: any, attributes: any, info: any);

    update(object: any): any;
    dispose(): void;
}
export class WebGLProgram {
    constructor(renderer: WebGLRenderer, cacheKey: string, parameters: object);

    name: string;
    id: number;
    cacheKey: string; // unique identifier for this program, used for looking up compiled programs from cache.

    /**
     * @default 1
     */
    usedTimes: number;
    program: any;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    /**
     * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
     */
    uniforms: any;
    /**
     * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
     */
    attributes: any;

    getUniforms(): WebGLUniforms;
    getAttributes(): any;
    destroy(): void;
}
export class WebGLPrograms {
    constructor(
        renderer: WebGLRenderer,
        cubemaps: WebGLCubeMaps,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
        bindingStates: WebGLBindingStates,
        clipping: WebGLClipping,
    );

    programs: WebGLProgram[];

    getParameters(material: Material, lights: any, shadows: object[], scene: Scene, object: any): any;
    getProgramCacheKey(parameters: any): string;
    getUniforms(material: Material): object;
    acquireProgram(parameters: any, cacheKey: string): WebGLProgram;
    releaseProgram(program: WebGLProgram): void;
}
export class WebGLProperties {
    constructor();

    get(object: any): any;
    remove(object: any): void;
    update(object: any, key: any, value: any): any;
    dispose(): void;
}
export interface RenderItem {
    id: number;
    object: Object3D;
    geometry: BufferGeometry | null;
    material: Material;
    program: WebGLProgram;
    groupOrder: number;
    renderOrder: number;
    z: number;
    group: Group | null;
}
export class WebGLRenderList {
    constructor(properties: WebGLProperties);

    /**
     * @default []
     */
    opaque: RenderItem[];

    /**
     * @default []
     */
    transparent: RenderItem[];

    /**
     * @default []
     */
    transmissive: RenderItem[];

    init(): void;
    push(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    sort(opaqueSort: (a: any, b: any) => number, transparentSort: (a: any, b: any) => number): void;
    finish(): void;
}
export class WebGLRenderLists {
    constructor(properties: WebGLProperties);

    dispose(): void;
    get(scene: Scene, renderCallDepth: number): WebGLRenderList;
}
export function WebGLShader(gl: WebGLRenderingContext, type: string, string: string): WebGLShader;
export class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, _capabilities: WebGLCapabilities);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}
export class WebGLColorBuffer {
    constructor();

    setMask(colorMask: boolean): void;
    setLocked(lock: boolean): void;
    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void;
    reset(): void;
}
export class WebGLDepthBuffer {
    constructor();

    setTest(depthTest: boolean): void;
    setMask(depthMask: boolean): void;
    setFunc(depthFunc: DepthModes): void;
    setLocked(lock: boolean): void;
    setClear(depth: number): void;
    reset(): void;
}
export class WebGLStencilBuffer {
    constructor();

    setTest(stencilTest: boolean): void;
    setMask(stencilMask: number): void;
    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void;
    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void;
    setLocked(lock: boolean): void;
    setClear(stencil: number): void;
    reset(): void;
}
export class WebGLState {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    buffers: {
        color: WebGLColorBuffer;
        depth: WebGLDepthBuffer;
        stencil: WebGLStencilBuffer;
    };

    initAttributes(): void;
    enableAttribute(attribute: number): void;
    enableAttributeAndDivisor(attribute: number, meshPerAttribute: number): void;
    disableUnusedAttributes(): void;
    vertexAttribPointer(
        index: number,
        size: number,
        type: number,
        normalized: boolean,
        stride: number,
        offset: number,
    ): void;
    enable(id: number): void;
    disable(id: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void;
    bindXRFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    useProgram(program: any): boolean;
    setBlending(
        blending: Blending,
        blendEquation?: BlendingEquation,
        blendSrc?: BlendingSrcFactor,
        blendDst?: BlendingDstFactor,
        blendEquationAlpha?: BlendingEquation,
        blendSrcAlpha?: BlendingSrcFactor,
        blendDstAlpha?: BlendingDstFactor,
        premultiplyAlpha?: boolean,
    ): void;
    setMaterial(material: Material, frontFaceCW: boolean): void;
    setFlipSided(flipSided: boolean): void;
    setCullFace(cullFace: CullFace): void;
    setLineWidth(width: number): void;
    setPolygonOffset(polygonoffset: boolean, factor?: number, units?: number): void;
    setScissorTest(scissorTest: boolean): void;
    activeTexture(webglSlot: number): void;
    bindTexture(webglType: number, webglTexture: any): void;
    unbindTexture(): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        data: ArrayBufferView,
    ): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null,
    ): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, source: any): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        pixels: any,
    ): void;
    scissor(scissor: Vector4): void;
    viewport(viewport: Vector4): void;
    reset(): void;
}
export class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;
    setTexture2D(texture: any, slot: number): void;
    setTexture2DArray(texture: any, slot: number): void;
    setTexture3D(texture: any, slot: number): void;
    setTextureCube(texture: any, slot: number): void;
    setupRenderTarget(renderTarget: any): void;
    updateRenderTargetMipmap(renderTarget: any): void;
    updateMultisampleRenderTarget(renderTarget: any): void;
    safeSetTexture2D(texture: any, slot: number): void;
    safeSetTextureCube(texture: any, slot: number): void;
}
export class WebGLUniforms {
    constructor(gl: WebGLRenderingContext, program: WebGLProgram);

    setValue(gl: WebGLRenderingContext, name: string, value: any, textures: WebGLTextures): void;
    setOptional(gl: WebGLRenderingContext, object: any, name: string): void;

    static upload(gl: WebGLRenderingContext, seq: any, values: any[], textures: WebGLTextures): void;
    static seqWithValue(seq: any, values: any[]): any[];
}
export function WebGLUniformsGroups(
    gl: WebGLRenderingContext,
    info: WebGLInfo,
    capabilities: WebGLCapabilities,
    state: WebGLState,
): {
    dispose: () => void;
    update: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
    bind: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
};
export class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, encoding?: TextureEncoding | null): number | null;
}
export class WebGL1Renderer extends WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    readonly isWebGL1Renderer: true;
}



/**
 * Represents a three-dimensional render target.
 */
export class WebGL3DRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGL3DRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth of the render target.
     */
    constructor(width?: number, height?: number, depth?: number);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link Data3DTexture}.
     */
    texture: Data3DTexture;

    readonly isWebGL3DRenderTarget: true;
}



/**
 * This type of render target represents an array of textures.
 */
export class WebGLArrayRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGLArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth/layer count of the render target.
     */
    constructor(width?: number, height?: number, depth?: number);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link DataArrayTexture}.
     */
    texture: DataArrayTexture;

    readonly isWebGLArrayRenderTarget: true;
}
export class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: WebGLRenderTargetOptions);

    texture: CubeTexture;

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}




/**
 * This class originall extended WebGLMultipleRenderTarget
 * However, there are some issues with this method as documented below
 */
export class WebGLMultipleRenderTargets extends EventDispatcher {
    texture: Texture[];

    readonly isWebGLMultipleRenderTargets = true;

    /**
     * @param width The width of the render target.
     * @param height The height of the render target.
     * @param count The number of render targets.
     * @param options object that holds texture parameters for an auto-generated target texture and depthBuffer/stencilBuffer booleans.
     * For an explanation of the texture parameters see {@link Texture}.
     */
    constructor(width?: number, height?: number, count?: number, options?: WebGLRenderTargetOptions);

    setSize(width: number, height: number, depth?: number): this;
    copy(source: WebGLMultipleRenderTargets): this;
    clone(): this;
    dispose(): void;
    // This is an available method, however it will break the code see https://github.com/mrdoob/three.js/issues/21930
    setTexture(texture: Texture): void;
}
export interface Renderer {
    domElement: HTMLCanvasElement;

    render(scene: Object3D, camera: Camera): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
}
export interface WebGLRendererParameters {
    /**
     * A Canvas where the renderer draws its output.
     */
    canvas?: HTMLCanvasElement | OffscreenCanvas | undefined;

    /**
     * A WebGL Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
     * Default is null
     */
    context?: WebGLRenderingContext | undefined;

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision?: string | undefined;

    /**
     * default is false.
     */
    alpha?: boolean | undefined;

    /**
     * default is true.
     */
    premultipliedAlpha?: boolean | undefined;

    /**
     * default is false.
     */
    antialias?: boolean | undefined;

    /**
     * default is true.
     */
    stencil?: boolean | undefined;

    /**
     * default is false.
     */
    preserveDrawingBuffer?: boolean | undefined;

    /**
     * Can be "high-performance", "low-power" or "default"
     */
    powerPreference?: string | undefined;

    /**
     * default is true.
     */
    depth?: boolean | undefined;

    /**
     * default is false.
     */
    logarithmicDepthBuffer?: boolean | undefined;

    /**
     * default is false.
     */
    failIfMajorPerformanceCaveat?: boolean | undefined;
}
export interface WebGLDebug {
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    checkShaderErrors: boolean;
}

/**
 * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
 */
export class WebGLRenderer implements Renderer {
    /**
     * parameters is an optional object with properties defining the renderer's behaviour.
     * The constructor also accepts no parameters at all.
     * In all cases, it will assume sane defaults when parameters are missing.
     */
    constructor(parameters?: WebGLRendererParameters);

    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
     */
    domElement: HTMLCanvasElement;

    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     * @default true
     */
    autoClear: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     * @default true
     */
    autoClearColor: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     * @default true
     */
    autoClearDepth: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     * @default true
     */
    autoClearStencil: boolean;

    /**
     * Debug configurations.
     * @default { checkShaderErrors: true }
     */
    debug: WebGLDebug;

    /**
     * Defines whether the renderer should sort objects. Default is true.
     * @default true
     */
    sortObjects: boolean;

    /**
     * @default []
     */
    clippingPlanes: any[];

    /**
     * @default false
     */
    localClippingEnabled: boolean;

    extensions: WebGLExtensions;

    /**
     * Default is LinearEncoding.
     * @default THREE.LinearEncoding
     */
    outputEncoding: TextureEncoding;

    /**
     * @default false
     */
    physicallyCorrectLights: boolean;

    /**
     * @default THREE.NoToneMapping
     */
    toneMapping: ToneMapping;

    /**
     * @default 1
     */
    toneMappingExposure: number;

    info: WebGLInfo;

    shadowMap: WebGLShadowMap;

    pixelRatio: number;

    capabilities: WebGLCapabilities;
    properties: WebGLProperties;
    renderLists: WebGLRenderLists;
    state: WebGLState;

    xr: WebXRManager;

    /**
     * Return the WebGL context.
     */
    getContext(): WebGLRenderingContext | WebGL2RenderingContext;
    getContextAttributes(): any;
    forceContextLoss(): void;
    forceContextRestore(): void;

    /**
     * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy .capabilities.getMaxAnisotropy()} instead.
     */
    getMaxAnisotropy(): number;

    /**
     * @deprecated Use {@link WebGLCapabilities#precision .capabilities.precision} instead.
     */
    getPrecision(): string;

    getPixelRatio(): number;
    setPixelRatio(value: number): void;

    getDrawingBufferSize(target: Vector2): Vector2;
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;

    getSize(target: Vector2): Vector2;

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;

    getCurrentViewport(target: Vector4): Vector4;

    /**
     * Copies the viewport into target.
     */
    getViewport(target: Vector4): Vector4;

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    setViewport(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Copies the scissor area into target.
     */
    getScissor(target: Vector4): Vector4;

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    setScissor(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Returns true if scissor test is enabled; returns false otherwise.
     */
    getScissorTest(): boolean;

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    setScissorTest(enable: boolean): void;

    /**
     * Sets the custom opaque sort function for the WebGLRenderLists. Pass null to use the default painterSortStable function.
     */
    setOpaqueSort(method: (a: any, b: any) => number): void;

    /**
     * Sets the custom transparent sort function for the WebGLRenderLists. Pass null to use the default reversePainterSortStable function.
     */
    setTransparentSort(method: (a: any, b: any) => number): void;

    /**
     * Returns a THREE.Color instance with the current clear color.
     */
    getClearColor(target: Color): Color;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    setClearColor(color: ColorRepresentation, alpha?: number): void;

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     */
    getClearAlpha(): number;

    setClearAlpha(alpha: number): void;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

    clearColor(): void;
    clearDepth(): void;
    clearStencil(): void;
    clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;

    /**
     * @deprecated Use {@link WebGLState#reset .state.reset()} instead.
     */
    resetGLState(): void;
    dispose(): void;

    renderBufferDirect(
        camera: Camera,
        scene: Scene,
        geometry: BufferGeometry,
        material: Material,
        object: Object3D,
        geometryGroup: any,
    ): void;

    /**
     * A build in function that can be used instead of requestAnimationFrame. For WebXR projects this function must be used.
     * @param callback The function will be called every available frame. If `null` is passed it will stop any already ongoing animation.
     */
    setAnimationLoop(callback: XRFrameRequestCallback | null): void;

    /**
     * @deprecated Use {@link WebGLRenderer#setAnimationLoop .setAnimationLoop()} instead.
     */
    animate(callback: () => void): void;

    /**
     * Compiles all materials in the scene with the camera. This is useful to precompile shaders before the first rendering.
     */
    compile(scene: Object3D, camera: Camera): void;

    /**
     * Render a scene or an object using a camera.
     * The render is done to a previously specified {@link WebGLRenderTarget#renderTarget .renderTarget} set by calling
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget} or to the canvas as usual.
     *
     * By default render buffers are cleared before rendering but you can prevent this by setting the property
     * {@link WebGLRenderer#autoClear autoClear} to false. If you want to prevent only certain buffers being cleared
     * you can set either the {@link WebGLRenderer#autoClearColor autoClearColor},
     * {@link WebGLRenderer#autoClearStencil autoClearStencil} or {@link WebGLRenderer#autoClearDepth autoClearDepth}
     * properties to false. To forcibly clear one ore more buffers call {@link WebGLRenderer#clear .clear}.
     */
    render(scene: Object3D, camera: Camera): void;

    /**
     * Returns the current active cube face.
     */
    getActiveCubeFace(): number;

    /**
     * Returns the current active mipmap level.
     */
    getActiveMipmapLevel(): number;

    /**
     * Returns the current render target. If no render target is set, null is returned.
     */
    getRenderTarget(): WebGLRenderTarget | null;

    /**
     * @deprecated Use {@link WebGLRenderer#getRenderTarget .getRenderTarget()} instead.
     */
    getCurrentRenderTarget(): WebGLRenderTarget | null;

    /**
     * Sets the active render target.
     *
     * @param renderTarget The {@link WebGLRenderTarget renderTarget} that needs to be activated. When `null` is given, the canvas is set as the active render target instead.
     * @param activeCubeFace Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of {@link WebGLCubeRenderTarget}.
     * @param activeMipmapLevel Specifies the active mipmap level.
     */
    setRenderTarget(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets | null,
        activeCubeFace?: number,
        activeMipmapLevel?: number,
    ): void;

    readRenderTargetPixels(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets,
        x: number,
        y: number,
        width: number,
        height: number,
        buffer: any,
        activeCubeFaceIndex?: number,
    ): void;

    /**
     * Copies a region of the currently bound framebuffer into the selected mipmap level of the selected texture.
     * This region is defined by the size of the destination texture's mip level, offset by the input position.
     *
     * @param position Specifies the pixel offset from which to copy out of the framebuffer.
     * @param texture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyFramebufferToTexture(position: Vector2, texture: Texture, level?: number): void;

    /**
     * Copies srcTexture to the specified level of dstTexture, offset by the input position.
     *
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture(position: Vector2, srcTexture: Texture, dstTexture: Texture, level?: number): void;

    /**
     * Copies the pixels of a texture in the bounds sourceBox in the desination texture starting from the given position.
     * @param sourceBox Specifies the bounds
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture3D(
        sourceBox: Box3,
        position: Vector3,
        srcTexture: Texture,
        dstTexture: Data3DTexture | DataArrayTexture,
        level?: number,
    ): void;

    /**
     * Initializes the given texture. Can be used to preload a texture rather than waiting until first render (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @param texture The texture to Initialize.
     */
    initTexture(texture: Texture): void;

    /**
     * Can be used to reset the internal WebGL state.
     */
    resetState(): void;

    /**
     * @deprecated Use {@link WebGLRenderer#xr .xr} instead.
     */
    vr: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#enabled .shadowMap.enabled} instead.
     */
    shadowMapEnabled: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#type .shadowMap.type} instead.
     */
    shadowMapType: ShadowMapType;

    /**
     * @deprecated Use {@link WebGLShadowMap#cullFace .shadowMap.cullFace} instead.
     */
    shadowMapCullFace: CullFace;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_float' )} instead.
     */
    supportsFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_half_float' )} instead.
     */
    supportsHalfFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_standard_derivatives' )} instead.
     */
    supportsStandardDerivatives(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_s3tc' )} instead.
     */
    supportsCompressedTextureS3TC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_pvrtc' )} instead.
     */
    supportsCompressedTexturePVRTC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'EXT_blend_minmax' )} instead.
     */
    supportsBlendMinMax(): any;

    /**
     * @deprecated Use {@link WebGLCapabilities#vertexTextures .capabilities.vertexTextures} instead.
     */
    supportsVertexTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'ANGLE_instanced_arrays' )} instead.
     */
    supportsInstancedArrays(): any;

    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest .setScissorTest()} instead.
     */
    enableScissorTest(boolean: any): any;
}
export interface WebGLRenderTargetOptions {
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: TextureFilter | undefined;
    minFilter?: TextureFilter | undefined;
    format?: number | undefined; // RGBAFormat;
    type?: TextureDataType | undefined; // UnsignedByteType;
    anisotropy?: number | undefined; // 1;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    generateMipmaps?: boolean | undefined; // true;
    depthTexture?: DepthTexture | undefined;
    encoding?: TextureEncoding | undefined;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number;
}
export class WebGLRenderTarget extends EventDispatcher {
    constructor(width?: number, height?: number, options?: WebGLRenderTargetOptions);

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: Texture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    readonly isWebGLRenderTarget: true;

    /**
     * @deprecated Use {@link Texture#wrapS texture.wrapS} instead.
     */
    wrapS: any;
    /**
     * @deprecated Use {@link Texture#wrapT texture.wrapT} instead.
     */
    wrapT: any;
    /**
     * @deprecated Use {@link Texture#magFilter texture.magFilter} instead.
     */
    magFilter: any;
    /**
     * @deprecated Use {@link Texture#minFilter texture.minFilter} instead.
     */
    minFilter: any;
    /**
     * @deprecated Use {@link Texture#anisotropy texture.anisotropy} instead.
     */
    anisotropy: any;
    /**
     * @deprecated Use {@link Texture#offset texture.offset} instead.
     */
    offset: any;
    /**
     * @deprecated Use {@link Texture#repeat texture.repeat} instead.
     */
    repeat: any;
    /**
     * @deprecated Use {@link Texture#format texture.format} instead.
     */
    format: any;
    /**
     * @deprecated Use {@link Texture#type texture.type} instead.
     */
    type: any;
    /**
     * @deprecated Use {@link Texture#generateMipmaps texture.generateMipmaps} instead.
     */
    generateMipmaps: any;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: WebGLRenderTarget): this;
    dispose(): void;
}
export type XRControllerEventType = XRSessionEventType | XRInputSourceEventType | 'disconnected' | 'connected';
export class XRJointSpace extends Group {
    readonly jointRadius: number | undefined;
}
export type XRHandJoints = Record<XRHandJoint, XRJointSpace>;
export interface XRHandInputState {
    pinching: boolean;
}
export class XRHandSpace extends Group {
    readonly joints: Partial<XRHandJoints>;
    readonly inputState: XRHandInputState;
}
export class XRTargetRaySpace extends Group {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}
export class XRGripSpace extends Group {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}
export class WebXRController {
    constructor();

    getHandSpace(): XRHandSpace;
    getTargetRaySpace(): XRTargetRaySpace;
    getGripSpace(): XRGripSpace;
    dispatchEvent(event: { type: XRControllerEventType; data?: XRInputSource }): this;
    connect(inputSource: XRInputSource): this;
    disconnect(inputSource: XRInputSource): this;
    update(inputSource: XRInputSource, frame: XRFrame, referenceSpace: XRReferenceSpace): this;
}
// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager

/// <reference types="webxr" />
export type WebXRCamera = PerspectiveCamera & { viewport: Vector4 };
export type WebXRArrayCamera = Omit<ArrayCamera, 'cameras'> & { cameras: [WebXRCamera, WebXRCamera] };
export class WebXRManager extends EventDispatcher {
    constructor(renderer: any, gl: WebGLRenderingContext);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default false
     */
    isPresenting: boolean;

    /**
     * @default true
     */
    cameraAutoUpdate: boolean;

    getController(index: number): XRTargetRaySpace;
    getControllerGrip(index: number): XRGripSpace;
    getHand(index: number): XRHandSpace;
    setFramebufferScaleFactor(value: number): void;
    setReferenceSpaceType(value: XRReferenceSpaceType): void;
    getReferenceSpace(): XRReferenceSpace | null;
    setReferenceSpace(value: XRReferenceSpace): void;
    getBaseLayer(): XRWebGLLayer | XRProjectionLayer;
    getBinding(): XRWebGLBinding;
    getFrame(): XRFrame;
    getSession(): XRSession | null;
    setSession(value: XRSession | null): Promise<void>;
    getCamera(): WebXRArrayCamera;
    updateCamera(camera: PerspectiveCamera): void;
    setAnimationLoop(callback: XRFrameRequestCallback | null): void;
    getFoveation(): number | undefined;
    setFoveation(value: number): void;

    /**
     * Returns the set of planes detected by WebXR's plane detection API.
     */
    getPlanes(): Set<XRPlane>;

    dispose(): void;
}
export interface FogBase {
    name: string;
    color: Color;
    clone(): FogBase;
    toJSON(): any;
}

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 */
export class Fog implements FogBase {
    constructor(color: ColorRepresentation, near?: number, far?: number);

    /**
     * @default ''
     */
    name: string;

    /**
     * Fog color.
     */
    color: Color;

    /**
     * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
     * @default 1
     */
    near: number;

    /**
     * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
     * @default 1000
     */
    far: number;

    readonly isFog: true;

    clone(): Fog;
    toJSON(): any;
}


/**
 * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
 */
export class FogExp2 implements FogBase {
    constructor(hex: number | string, density?: number);

    /**
     * @default ''
     */
    name: string;

    color: Color;

    /**
     * Defines how fast the fog will grow dense.
     * @default 0.00025
     */
    density: number;

    readonly isFogExp2: true;

    clone(): FogExp2;
    toJSON(): any;
}
// https://threejs.org/docs/?q=scene#api/en/scenes/Scene








// Scenes /////////////////////////////////////////////////////////////////////

/**
 * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
 */
export class Scene extends Object3D {
    constructor();

    type: 'Scene';

    /**
     * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
     * @default null
     */
    fog: FogBase | null;

    /**
     * Sets the blurriness of the background. Only influences environment maps assigned to Scene.background. Valid input is a float between 0 and 1.
     *
     * @default 0
     */
    backgroundBlurriness: number;

    /**
     * Attenuates the color of the background. Only applies to background textures.
     *
     * @default 1
     */
    backgroundIntensity: number;

    /**
     * If not null, it will force everything in the scene to be rendered with that material. Default is null.
     * @default null
     */
    overrideMaterial: Material | null;

    /**
     * @default null
     */
    background: null | Color | Texture;

    /**
     * @default null
     */
    environment: null | Texture;
    envRotationMatrix: Matrix3;

    readonly isScene: true;

    toJSON(meta?: any): any;
}
export class CanvasTexture extends Texture {
    /**
     * @param canvas
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        canvas: TexImageSource | OffscreenCanvas,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    readonly isCanvasTexture: true;
}
export class CompressedArrayTexture extends CompressedTexture {
    isCompressedArrayTexture: true;

    wrapR: Wrapping;

    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        depth: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
    );
}
export class CompressedTexture extends Texture {
    /**
     * @param mipmaps
     * @param width
     * @param height
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    mipmaps: ImageData[];

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isCompressedTexture: true;
}
export class CubeTexture extends Texture {
    /**
     * @param [images=[]]
     * @param [mapping=THREE.CubeReflectionMapping]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        images?: any[], // HTMLImageElement or HTMLCanvasElement
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    images: any; // returns and sets the value of Texture.image in the codde ?

    /**
     * @default false
     */
    flipY: boolean;

    readonly isCubeTexture: true;
}
export class Data3DTexture extends Texture {
    constructor(data: BufferSource, width: number, height: number, depth: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: Wrapping;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isData3DTexture: true;
}
export class DataArrayTexture extends Texture {
    constructor(data?: BufferSource, width?: number, height?: number, depth?: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: boolean;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDataArrayTexture: true;
}
export class DataTexture extends Texture {
    /**
     * @param data
     * @param width
     * @param height
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.NearestFilter]
     * @param [minFilter=THREE.NearestFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        data?: BufferSource | null,
        width?: number,
        height?: number,
        format?: PixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    get image(): ImageData;
    set image(value: ImageData);

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    /**
     * @default 1
     */
    unpackAlignment: number;

    /**
     * @default THREE.DepthFormat
     */
    format: PixelFormat;

    readonly isDataTexture: true;
}
export class DepthTexture extends Texture {
    /**
     * @param width
     * @param height
     * @param type
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.NearestFilter]
     * @param [minFilter=THREE.NearestFilter]
     * @param [anisotropy=1]
     */
    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
    );

    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDepthTexture: true;
}
export class FramebufferTexture extends Texture {
    readonly isFramebufferTexture: true;

    constructor(width: number, height: number, format: PixelFormat);
}
/**
 * Represents the data source of a texture.
 */
export class Source {
    /**
     * @param [data] The data definition of a texture. default is **null**.
     */
    constructor(data: any);

    /**
     * The actual data of a texture. The type of this property depends on the texture that uses this instance.
     */
    data: any;

    /**
     * Set this to **true** to trigger a data upload to the GPU next time the source is used.
     */
    set needsUpdate(value: boolean);

    /**
     * [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.
     * This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * This starts at **0** and counts how many times [property:Boolean needsUpdate] is set to **true**.
     */
    version: number;

    /**
     * Convert the data source to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).
     *
     * @param [meta] optional object containing metadata.
     */
    toJSON(meta: any): any;

    readonly isTexture: true;
}
// https://threejs.org/docs/?q=texture#api/en/textures/Texture







/** Shim for OffscreenCanvas. */
// tslint:disable-next-line:no-empty-interface
export interface OffscreenCanvas extends EventTarget { }
export class Texture extends EventDispatcher {
    /**
     * @param [image]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=THREE.Texture.DEFAULT_ANISOTROPY]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        image?: TexImageSource | OffscreenCanvas,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    id: number;
    uuid: string;

    /**
     * @default ''
     */
    name: string;
    sourceFile: string;

    /**
     * The data definition of a texture. A reference to the data source can be shared across textures.
     * This is often useful in context of spritesheets where multiple textures render the same data but with different texture transformations.
     */
    source: Source;

    /**
     * An image object, typically created using the {@link TextureLoader.load} method.
     * This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     *
     * To use video as a texture you need to have a playing HTML5
     * video element as a source for your texture image and continuously update this texture
     * as long as video is playing - the {@link VideoTexture} class handles this automatically.
     */
    get image(): any;

    /**
     * An image object, typically created using the {@link TextureLoader.load} method.
     * This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     *
     * To use video as a texture you need to have a playing HTML5
     * video element as a source for your texture image and continuously update this texture
     * as long as video is playing - the {@link VideoTexture} class handles this automatically.
     */
    set image(data: any);

    /**
     * @default []
     */
    mipmaps: any[]; // ImageData[] for 2D textures and CubeTexture[] for cube textures;

    /**
     * @default THREE.Texture.DEFAULT_MAPPING
     */
    mapping: Mapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapS: Wrapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapT: Wrapping;

    /**
     * @default THREE.LinearFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.LinearMipmapLinearFilter
     */
    minFilter: TextureFilter;

    /**
     * @default 1
     */
    anisotropy: number;

    /**
     * @default THREE.RGBAFormat
     */
    format: PixelFormat;

    internalFormat: PixelFormatGPU | null;

    /**
     * @default THREE.UnsignedByteType
     */
    type: TextureDataType;

    /**
     * @default new THREE.Matrix3()
     */
    matrix: Matrix3;

    /**
     * @default true
     */
    matrixAutoUpdate: boolean;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    offset: Vector2;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    repeat: Vector2;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    center: Vector2;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    generateMipmaps: boolean;

    /**
     * @default false
     */
    premultiplyAlpha: boolean;

    /**
     * @default true
     */
    flipY: boolean;

    /**
     * @default 4
     */
    unpackAlignment: number;

    /**
     * @default THREE.LinearEncoding
     */
    encoding: TextureEncoding;

    /**
     * @default false
     */
    isRenderTargetTexture: boolean;

    /**
     * @default false
     */
    needsPMREMUpdate: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: any;

    /**
     * @default 0
     */
    version: number;
    set needsUpdate(value: boolean);
    readonly isTexture: true;

    onUpdate: () => void;

    static DEFAULT_ANISOTROPY: number;
    static DEFAULT_IMAGE: any;
    static DEFAULT_MAPPING: any;

    clone(): this;
    copy(source: Texture): this;
    toJSON(meta: any): any;
    dispose(): void;
    transformUv(uv: Vector2): Vector2;
    updateMatrix(): void;
    readPixels?(x: number, y: number, width: number, height: number, buffer: any): void;
}
export class VideoTexture extends Texture {
    /**
     * @param video
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearFilter]
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     */
    constructor(
        video: HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    readonly isVideoTexture: true;

    /**
     * @default false
     */
    generateMipmaps: boolean;
}
export type ColorModelString = `${'rgb' | 'hsl'}(${string})`;
export type HexColorString = `#${string}`;
export type ColorRepresentation = Color | ColorKeyword | ColorModelString | HexColorString | number;
export namespace TWEEN {
export class TweenChain<T extends Object = Object> {
    private _object: Object;
    private _tween: Tween<T>;
    private _chainedTween: Tween<T>;
    constructor(object: T)
    public start(): this;
    public stop(): this;
    public repeat(times: number): this;
    public union(): this;
    public call(callback): this;
    public delay(amount: number): this
    public to(
        properties: { [k: string]: any },
        duration?: number,
        props?: {
            from?: { [k: string]: any },
            easing?: (amount: number) => number,
            onStart?: (object: T) => void,
            onStop?: (object: T) => void,
            onComplete?: (object: T) => void,
            onUpdate?: (object: T, elapsed: number) => void,
            onRepeat?: (object: T) => void,
        }
    ): this;
    private _chainTween(): Tween<T>;
}
}
export namespace TWEEN {
export class TweenManager {
    static Tween<T extends Object>(target: T): Tween<T>;
    static Timeline<T extends Object>(target: T): TweenChain<T>;
    static CSS<T extends Object>(target: T): TweenCSS<T>;
    static KillTweensOf<T extends Object>(target: T): void;
    static TweenUpdate(time?: number): void;
}}
export namespace TWEEN {
export type EasingFunction = (amount: number) => number;
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
export const Easing: {
    Linear: {
        None: (amount: number) => number;
    };
    Quadratic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Cubic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Quartic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Quintic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Sinusoidal: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Exponential: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Circular: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Elastic: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Back: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
    Bounce: {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
};

/**
 *
 */
export type InterpolationFunction = (v: number[], k: number) => number;
/**
 *
 */
export const Interpolation: {
    Linear: (v: number[], k: number) => number;
    Bezier: (v: number[], k: number) => number;
    CatmullRom: (v: number[], k: number) => number;
    Utils: {
        Linear: (p0: number, p1: number, t: number) => number;
        Bernstein: (n: number, i: number) => number;
        Factorial: (n: number) => number;
        CatmullRom: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
    };
};
export class Tween<T extends UnknownProps> {
    protected _object;
    protected _group;
    protected _isPaused;
    protected _pauseStart;
    protected _valuesStart;
    protected _valuesEnd;
    protected _valuesStartRepeat;
    protected _duration;
    protected _initialRepeat;
    protected _repeat;
    protected _repeatDelayTime?;
    protected _yoyo;
    protected _isPlaying;
    protected _reversed;
    protected _delayTime;
    protected _startTime;
    protected _easingFunction;
    protected _interpolationFunction;
    protected _onStartCallback?;
    protected _onStartCallbackFired;
    protected _onUpdateCallback?;
    protected _onRepeatCallback?;
    protected _onCompleteCallback?;
    protected _onStopCallback?;
    protected _id;
    protected _isChainStopped;
    protected _chainedTweens;
    protected _parentTween;

    constructor(_object: T, _group?: Group | false);
    getId(): number;
    isPlaying(): boolean;
    isPaused(): boolean;
    union(headTween: Tween<T>, tailTween: Tween<T>): this;
    from(properties: UnknownProps): this;
    to(properties: UnknownProps, duration?: number): this;
    call(callback: (object: T) => void): this;
    duration(d: number): this;
    start(time?: number): this;
    protected _setupProperties;
    stop(): this;
    end(): this;
    pause(time?: number): this;
    resume(time?: number): this;
    stopChainedTweens(): this;
    group(group: Group): this;
    delay(amount: number): this;
    repeat(times: number): this;
    repeatDelay(amount: number): this;
    yoyo(yoyo: boolean): this;
    easing(easingFunction: EasingFunction): this;
    interpolation(interpolationFunction: InterpolationFunction): this;
    chain(...tweens: Array<Tween<UnknownProps>>): this;
    unchain(...tweens: Array<Tween<UnknownProps>>): this;
    onStart(callback: (object: T) => void): this;
    onUpdate(callback: (object: T, elapsed: number) => void): this;
    onRepeat(callback: (object: T) => void): this;
    onComplete(callback: (object: T) => void): this;
    onStop(callback: (object: T) => void): this;
    protected _goToEnd;
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    update(time?: number, autoStart?: boolean): boolean;
    protected _updateProperties;
    protected _handleRelativeValue;
    protected _swapEndStartRepeatValues;
}
export type UnknownProps = Record<string, any>;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
export class Group {
    private _tweens;
    private _tweensAddedDuringUpdate;
    getAll(): Array<Tween<UnknownProps>>;
    removeAll(): void;
    add(tween: Tween<UnknownProps>): void;
    remove(tween: Tween<UnknownProps>): void;
    update(time?: number, preserve?: boolean): boolean;
}
export let now: () => number;

/**
 * Utils
 */
export class Sequence {
    private static _nextId;
    static nextId(): number;
}
export const VERSION = "18.6.4";
export const nextId: typeof Sequence.nextId;
export const getAll: () => Tween<Record<string, any>>[];
export const removeAll: () => void;
export const add: (tween: Tween<Record<string, any>>) => void;
export const remove: (tween: Tween<Record<string, any>>) => void;
export const update: (time?: number, preserve?: boolean) => boolean;
}
export type FunctionKeys<T> = {
    [K in keyof T]-?: T[K] extends Function ? K : never;
}[keyof T];
export type Properties<T> = Omit<Partial<T>, FunctionKeys<T>> & {
    [k: string]: any;
};
interface BaseNodeProperties {
    scale?: Vector3;
    position?: Vector3;
    rotation?: Euler;
    quaternion?: Quaternion;
    args?: any[];
}
export type NodeProperties<T> = Properties<T> & BaseNodeProperties;
export type PluginProperties<T> = Properties<T> & BaseNodeProperties;
