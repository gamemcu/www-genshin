export const vert =/*glsl */`uniform float size;
uniform float scale;
uniform float time;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPositionW;
float random(float seed) {
    return fract(sin(seed) * 43758.5453);
}

void main() {
    #include <color_vertex>
    #include <morphcolor_vertex>
    #include <begin_vertex>

    //进行随机移动
    float moveLen = 500.;

    vColor;
    transformed+=vec3((random(vColor.r)-0.5)*2.,(random(vColor.g)-0.8)*2.,(random(vColor.b)-0.5)*2.)*sin(time*(0.1*random(vColor.b))+random(vColor.g))*moveLen;
    vColor.a = smoothstep(0.,0.2,sin(time*(1.2*random(vColor.b)+0.4)+random(vColor.g))-0.8);

    #include <morphtarget_vertex>
    #include <project_vertex>
    gl_PointSize = size;
    #ifdef USE_SIZEATTENUATION
        bool isPerspective = isPerspectiveMatrix( projectionMatrix );
        if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
    #endif
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
    #include <worldpos_vertex>
    vPositionW = vec3( modelMatrix*vec4( position, 1.0 ));
    #include <fog_vertex>
}`