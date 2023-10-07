import { ACES_Inv } from "../chunk/ACES.chunk";
import { random } from "../chunk/random.chunk";

export const frag=/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;

uniform sampler2D cloudTexture;
uniform float time;

${random}
${ACES_Inv}

void main() {
    vec4 col = texture(cloudTexture,vUv);
    vec3 mask = col.rgb;

    vec3 col_r = mix(vec3(23., 145., 250.)/255.,vec3(0.93),vec3(pow(mask.r,0.4)));
    
    col = vec4(col_r,col.a);
    col.rgb = ACES_Inv(col.rgb);

    gl_FragColor = vec4(col);
}`