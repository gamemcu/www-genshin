import { ACES_Inv } from "./ACES.chunk";

export const RE_Direct_ToonPhysical_Road=/*glsl*/`
${ACES_Inv}
void RE_Direct_ToonPhysical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, const in float metalnessFactor, inout ReflectedLight reflectedLight ) {
    float dotNL_noSaturate = dot( geometry.normal, directLight.direction );
    float dotNL = saturate( dotNL_noSaturate );
    float dotNL_toon = smoothstep(0.25,0.27,dotNL)*pow(dotNL,0.5)*1.4;//*0.8;//+0.14;
    dotNL_toon += smoothstep(0.75,0.8,dotNL)*pow(dotNL,1.);
    vec3 irradiance = dotNL_toon * directLight.color;
    #ifdef USE_CLEARCOAT
        float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
        vec3 ccIrradiance = dotNLcc * directLight.color;
        clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
    #endif
    #ifdef USE_SHEEN
        sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
    #endif
    #ifdef USE_IRIDESCENCE
        reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
    #else
        //手动调整反射粗糙度
        float new_roughness = (1.0-metalnessFactor)*pow(material.roughness,0.4);
        new_roughness += metalnessFactor*pow(material.roughness,1.2);
        reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, new_roughness );
    #endif
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    //计算出假反射
    float dotNL_reflect_faker = 1.-smoothstep(0.,0.3,dotNL_noSaturate);

	float fresnelTerm = dot(geometry.viewDir, geometry.normal);
	fresnelTerm = clamp(1.0 - fresnelTerm, 0., 1.) * dotNL_reflect_faker;
    reflectedLight.directDiffuse += fresnelCol*pow(fresnelTerm,5.)*0.8;
}
`