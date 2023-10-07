import { random } from "../chunk/random.chunk";

export const frag=/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;

uniform sampler2D lightTexture;
uniform float time;

${random}

void main() {
    float mask = 1.5*texture(lightTexture,vUv+vec2(time*0.015,0.)).r;
    mask+=  texture(lightTexture,vUv*vec2(0.4,1.)+vec2(time*-0.0075,0.)).r;

    vec4 col = vec4(vec3(1.8),mask);
    //与相机距离越近，透明度降低
    float distanceToCamera = distance(cameraPosition.xyz,vPositionW);
    col.a*=smoothstep(200.,1000.,distanceToCamera);
    col.a*=smoothstep(0.0,0.5,vUv.y);
    col.a*=smoothstep(0.0,0.1,vUv.x)*smoothstep(1.0,0.9,vUv.x);
    gl_FragColor = vec4(col);
}`