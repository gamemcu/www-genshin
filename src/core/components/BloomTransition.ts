import {
    Effect,
    EffectPlugin,
    TWEEN,
    Uniform,
} from "../../libs/xviewer";
import { ACES_Inv } from "../../shader/chunk/ACES.chunk";
import { rgb_hsv } from "../../shader/chunk/rgb_hsv.chunk";

class CustomEffect extends Effect {

    constructor() {
        super("CustomEffect", /*glsl*/`
            ${rgb_hsv}
            ${ACES_Inv}
            uniform float intensity;
            uniform float whiteAlpha;
            void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
                vec3 linear = aces_fitted(inputColor.rgb);
                vec3 hsv = rgb2hsv(linear);
                hsv.z += intensity; 
                
                vec3 color = mix(hsv2rgb(hsv),vec3(1.),whiteAlpha);
                color = clamp(color,vec3(0.),vec3(1.));
                color = ACES_Inv(color);

                outputColor.rgb = color;
                outputColor.a = inputColor.a;
            }
        `)
        this.uniforms.set("intensity", new Uniform(0.0))
        this.uniforms.set("whiteAlpha", new Uniform(0.0))
    }
}

export class BloomTransitionEffectPlugin extends EffectPlugin<CustomEffect> {
    private _intensity = 0;
    public initialize(props: any): void {
        this.effect = new CustomEffect();
    }
    public playTransition() {
        TWEEN.TweenManager.Timeline(this.effect.uniforms.get("intensity"))
            .to({ value: 3 }, 0.84, { easing: TWEEN.Easing.Cubic.In })
            .start();
        TWEEN.TweenManager.Timeline(this.effect.uniforms.get("whiteAlpha"))
            .delay(0.50)
            .to({ value: 1 }, 0.2)
            .start();
    }
    public recoverTransition() {

    }

}