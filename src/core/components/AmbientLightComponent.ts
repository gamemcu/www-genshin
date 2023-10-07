import {
    Component,
    Color,
    AmbientLight,
    property,
    $p
} from "../../libs/xviewer";


export class AmbientLightComponent extends Component<AmbientLight> {
    @property()
    get color() {
        return this.node.color;
    }

    set color(v: Color) {
        this.node.color.copy(v);
    }

    @property({ min: 0, max: 20, step: 0.001 })
    get intensity() {
        return this.node.intensity;
    }

    set intensity(v: number) {
        this.node.intensity = v;
    }

    public create(props?: any) {
        return $p(new AmbientLight(), {
            color: new Color(0x0f6eff),
            intensity: 6,
            ...props
        })
    }
}