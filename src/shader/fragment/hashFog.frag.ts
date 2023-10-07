import { noise3d } from "../chunk/noise3d.chunk";
import { random } from "../chunk/random.chunk";

export const frag =/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;

uniform float time;
${noise3d}

void main() {
    
	vec2 uv = vUv*vec2(0.0024,0.0016);
	
	float f = 0.0;

    f = clamp(noise3d(vPositionW*vec3(0.012,0.012,0.)+vec3(time*0.25))+0.2,0.,1.);
    f+= clamp(noise3d(vPositionW*vec3(0.004,0.004,0.)-vec3(time*0.15))+0.1,0.,1.);

    f=clamp(f,0.,1.);
    //做一个y轴的过渡
    f*=(1.-smoothstep(-5.,45.,vPositionW.y));
    f*= (smoothstep(-200.,-35.,vPositionW.y));
    //做一个x轴的过渡
    f*=(smoothstep(0.,40.,vPositionW.x)+(1.-smoothstep(-40.,-0.,vPositionW.x)));
    
    gl_FragColor = vec4(vec3(1.)*3.,f*0.3);
}`