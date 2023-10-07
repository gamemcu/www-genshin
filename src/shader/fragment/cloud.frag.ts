import { ACES_Inv } from "../chunk/ACES.chunk";
import { random } from "../chunk/random.chunk";

export const frag=/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;

uniform sampler2D cloudTexture;

uniform vec3 color_1;
uniform float color_intensity_1;
uniform vec3 color_2;
uniform float color_intensity_2;

${random}
${ACES_Inv}

void main() {
    vec4 col = texture(cloudTexture,vUv);
    vec3 mask = col.rgb;

    vec3 col_r = mix(color_1*color_intensity_1,color_2*color_intensity_2,vec3(pow(mask.r,0.6)));

    col = vec4(col_r,col.a);
    col.rgb = ACES_Inv(col.rgb);
    gl_FragColor = vec4(col);
}`