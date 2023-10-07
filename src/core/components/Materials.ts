import {
    Color,
    LinearMipmapLinearFilter,
    MeshPhysicalMaterial,
    Plugin,
    RepeatWrapping,
    ShaderMaterial,
    TextureLoader,
    WebGLRenderer,
    property
} from "../../libs/xviewer";

import { ACES_fog_fragment } from "../../shader/chunk/ACES_fog_fragment.chunk";
import { RE_Direct_ToonPhysical } from "../../shader/chunk/RE_Direct_ToonPhysical.chunk";
import { RE_Direct_ToonPhysical_Road } from "../../shader/chunk/RE_Direct_ToonPhysical.chunk_Road";
import { lights_fragment_beginToon } from "../../shader/chunk/lights_fragment_beginToon";
import { frag as bigCloud } from "../../shader/fragment/BigCloud.frag";
import { frag as bigCloudBG } from "../../shader/fragment/BigCloudBG.frag";
import { frag as cloudFrag } from "../../shader/fragment/cloud.frag";
import { frag as hashFogFrag } from "../../shader/fragment/hashFog.frag";
import { frag as polarLightFrag } from "../../shader/fragment/polarLight.frag";
import { vert as cloudVert } from "../../shader/vertex/cloud.vert";
import { vert as simpleVert } from "../../shader/vertex/simple.vert";

const textureLoader = new TextureLoader();
export const texture_Cloud = textureLoader.load("Genshin/Login/Textures/Tex_0062.png");
export const M_Cloud = new ShaderMaterial({
    uniforms: {
        cloudTexture: { value: texture_Cloud },
        color_1: { value: new Color("#00a2f0") },
        color_intensity_1: { value: 1 },
        color_2: { value: new Color("#f0f0f5") },
        color_intensity_2: { value: 1 },
    },
    fragmentShader: cloudFrag,
    vertexShader: cloudVert,
    transparent: true,
    depthWrite: false,

});
const textureLoader1 = new TextureLoader();
export const texture_Cloud0 = textureLoader1.load("Genshin/Login/Textures/Tex_0063.png");
export const M_BigCloud = new ShaderMaterial({
    uniforms: {
        cloudTexture: { value: texture_Cloud0 }
    },
    fragmentShader: bigCloud,
    vertexShader: simpleVert,
    transparent: true,
    depthWrite: false,

});
const textureLoader2 = new TextureLoader();
export const texture_Cloud1 = textureLoader2.load("Genshin/Login/Textures/Tex_0067b.png");
export const M_BigCloudBG = new ShaderMaterial({
    uniforms: {
        cloudTexture: { value: texture_Cloud1 }
    },
    fragmentShader: bigCloudBG,
    vertexShader: simpleVert,
    transparent: true,
    depthWrite: false,

});

export const M_HashFog = new ShaderMaterial({
    uniforms: {
        time: { value: 123 }
    },
    fragmentShader: hashFogFrag,
    vertexShader: simpleVert,
    transparent: true,
    depthWrite: false,
});

const textureLoader0 = new TextureLoader();
export const texture_Light = textureLoader0.load("Genshin/Login/Textures/Tex_0071.png");
texture_Light.wrapS = RepeatWrapping
texture_Light.wrapT = RepeatWrapping
export const M_PolarLight = new ShaderMaterial({
    uniforms: {
        lightTexture: { value: texture_Light },
        time: { value: 123 }
    },
    fragmentShader: polarLightFrag,
    vertexShader: simpleVert,
    transparent: true,
    depthWrite: false,
});

export class ToonMaterials {
    public getToonMaterial_Column(originMaterial: MeshPhysicalMaterial) {
        originMaterial.metalness = 0.3;
        originMaterial.onBeforeCompile = function (shader) {
            let fragment = shader.fragmentShader
            fragment = fragment.replace("#include <lights_physical_pars_fragment>", `
            #include <lights_physical_pars_fragment>
            vec3 fresnelCol = vec3(0x11,0x2e,0xae)/255.*5.;
            ${RE_Direct_ToonPhysical}
            `)
            fragment = fragment.replace("#include <lights_fragment_begin>", `
            ${lights_fragment_beginToon}
            `)
            fragment = fragment.replace("#include <fog_fragment>", `
            ${ACES_fog_fragment}
            `)
            shader.fragmentShader = fragment;
        }
        return originMaterial;
    }
    public getToonMaterial_Road(originMaterial: MeshPhysicalMaterial, renderer: WebGLRenderer) {
        originMaterial.color.multiply(new Color("#fffcfe").add(new Color().setRGB(0.015, 0, 0)))
        originMaterial.normalMap.minFilter = LinearMipmapLinearFilter;
        originMaterial.normalMap.anisotropy = renderer.capabilities.getMaxAnisotropy() / 2;
        originMaterial.roughnessMap.anisotropy = renderer.capabilities.getMaxAnisotropy() / 2;
        originMaterial.map.anisotropy = renderer.capabilities.getMaxAnisotropy() / 2;
        originMaterial.roughness = 5
        originMaterial.metalness = 0.;
        originMaterial.onBeforeCompile = function (shader) {
            let fragment = shader.fragmentShader
            fragment = fragment.replace("#include <lights_physical_pars_fragment>", `
            #include <lights_physical_pars_fragment>
            //vec3 fresnelCol = vec3(254., 103., 57.)/255.;
            vec3 fresnelCol = vec3(0.)/255.;
            ${RE_Direct_ToonPhysical_Road}
            `)
            fragment = fragment.replace("#include <lights_fragment_begin>", `
            ${lights_fragment_beginToon}
            `)

            shader.fragmentShader = fragment;
        }
        originMaterial.needsUpdate = true
        return originMaterial;
    }
    public getToonMaterial_Door(originMaterial: MeshPhysicalMaterial, renderer: WebGLRenderer) {
        originMaterial.metalness = 0.15;
        originMaterial.color = new Color("#454545")
        originMaterial.onBeforeCompile = function (shader) {
            let fragment = shader.fragmentShader
            fragment = fragment.replace("#include <lights_physical_pars_fragment>", `
            #include <lights_physical_pars_fragment>
            vec3 fresnelCol = vec3(254., 103., 57.)/255.;
            ${RE_Direct_ToonPhysical_Road}
            `)
            fragment = fragment.replace("#include <lights_fragment_begin>", `
            ${lights_fragment_beginToon}
            `)

            shader.fragmentShader = fragment;
        }
        originMaterial.needsUpdate = true
        return originMaterial;
    }
}
export const toonMaterials = new ToonMaterials();

export class MTTest extends Plugin {

    @property()
    get Cloud_Color_1() {
        return M_Cloud.uniforms.color_1.value;
    }

    set Cloud_Color_1(v: Color) {
        M_Cloud.uniforms.color_1.value.copy(v)
    }
    @property({ min: 0, max: 20, step: 0.001 })
    get intensity_Color_1() {
        return M_Cloud.uniforms.color_intensity_1.value;
    }

    set intensity_Color_1(v: number) {
        M_Cloud.uniforms.color_intensity_1.value = v;
    }
    @property()
    get Cloud_Color_2() {
        return M_Cloud.uniforms.color_2.value;
    }

    set Cloud_Color_2(v: Color) {
        M_Cloud.uniforms.color_2.value.copy(v)
    }
    @property({ min: 0, max: 20, step: 0.001 })
    get intensity_Color_2() {
        return M_Cloud.uniforms.color_intensity_2.value;
    }

    set intensity_Color_2(v: number) {
        M_Cloud.uniforms.color_intensity_2.value = v;
    }
    update(dt: number): void {
    }
}

