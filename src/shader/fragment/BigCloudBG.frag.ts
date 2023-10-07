import { ACES_Inv } from "../chunk/ACES.chunk";
import { random } from "../chunk/random.chunk";

export const frag=/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;

uniform sampler2D cloudTexture;

${random}
${ACES_Inv}

void main() {
    vec4 col = texture(cloudTexture,vUv);
    col.a = col.r;
    col = vec4(vec3(0.9)*2.,col.a*0.4);
    gl_FragColor = vec4(col);
}`