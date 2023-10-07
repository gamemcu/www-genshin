import { ACES_Inv } from "../chunk/ACES.chunk";

export const frag =/*glsl */`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec3 vPositionW;

float random(float seed) {
    return fract(sin(seed) * 43758.5453);
}

void main() {
    #include <clipping_planes_fragment>
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vec4( diffuse, opacity );
    #include <logdepthbuf_fragment>

    #if defined( USE_MAP ) || defined( USE_ALPHAMAP )
        vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
    #endif
    #ifdef USE_MAP
        float rr = vColor.r+vColor.g+vColor.b;
        float randomInt = float(int(random(rr) * 3.0));
        diffuseColor.a *= texture2D( map, vec2(uv.x/3.+randomInt/3.,uv.y)).r;
    #endif
    #ifdef USE_ALPHAMAP
        diffuseColor.a *= texture2D( alphaMap, uv ).g;
    #endif
    //与相机距离越近，透明度降低
    float distanceToCamera = distance(cameraPosition.xyz,vPositionW);
    diffuseColor.a*=smoothstep(1500.,5000.,distanceToCamera);

    #include <color_fragment>
    #include <alphatest_fragment>
    outgoingLight = diffuseColor.rgb;
    #include <output_fragment>
    #include <tonemapping_fragment>
    #include <encodings_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
}`