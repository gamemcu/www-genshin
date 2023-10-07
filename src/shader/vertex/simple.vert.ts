export const vert =/*glsl */`varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPositionW;
varying vec3 vNormalW;
attribute vec3 color;
varying vec3 vColor;
varying vec4 viewerUV;

void main() {
    vPosition = position;
    vNormal = normalMatrix * normal;
    vPositionW = vec3( modelMatrix*vec4( position, 1.0 ));
    vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
    vUv = uv;
    //UV是反的
    vUv.y = 1.0 - vUv.y;
    vColor=color;

    #ifdef USE_INSTANCING
      vPositionW = vec3(instanceMatrix * vec4(vPositionW,1.));
    #endif

    #ifdef USE_INSTANCING
      vPosition = vec3(instanceMatrix * vec4(vPosition,1.));
    #endif
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
    viewerUV = projectionMatrix*modelViewMatrix * vec4(vPosition, 1.0);
    viewerUV = vec4((viewerUV.xyz / viewerUV.w).xy* 0.5 + 0.5,0.,1.);
}`