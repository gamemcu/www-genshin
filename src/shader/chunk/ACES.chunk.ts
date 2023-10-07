export const ACES_Inv = /*glsl*/`
vec3 rrt_odt_fit(vec3 v)
{
    vec3 a = v*(         v + 0.0245786) - 0.000090537;
    vec3 b = v*(0.983729*v + 0.4329510) + 0.238081;
    return a/b;
}
vec3 inv_rrt_odt_fit(vec3 v)
{
    vec3 a = -(sqrt(10.)*sqrt((-187248350.*pow(v,vec3(2.)))+232585567.*v+241290.)+21650.*v-1230.);
    vec3 b = (98370.*v-100000.);
    return a/b;
}

mat3 mat3_from_rows(vec3 c0, vec3 c1, vec3 c2)
{
    mat3 m = mat3(c0, c1, c2);
    m = transpose(m);

    return m;
}

vec3 mul(mat3 m, vec3 v)
{
    return m * v;
}

mat3 mul(mat3 m1, mat3 m2)
{
    return m1 * m2;
}

vec3 aces_fitted(vec3 color)
{
    mat3 ACES_INPUT_MAT = mat3_from_rows(
        vec3( 0.59719, 0.35458, 0.04823),
        vec3( 0.07600, 0.90834, 0.01566),
        vec3( 0.02840, 0.13383, 0.83777));

    mat3 ACES_OUTPUT_MAT = mat3_from_rows(
        vec3( 1.60475,-0.53108,-0.07367),
        vec3(-0.10208, 1.10813,-0.00605),
        vec3(-0.00327,-0.07276, 1.07602));

    color = mul(ACES_INPUT_MAT, color);

    // Apply RRT and ODT
    color = rrt_odt_fit(color);

    color = mul(ACES_OUTPUT_MAT, color);

    return color;
}
vec3 ACES_Inv(vec3 color)
{
    mat3 ACES_INPUT_MAT = mat3_from_rows(
        vec3( 1.76474, -0.67577, -0.08896),
        vec3( -0.14702, 1.16025, -0.01322),
        vec3( -0.03633, -0.16243, 1.19877));

    mat3 ACES_OUTPUT_MAT = mat3_from_rows(
        vec3( 0.64304, 0.31119,0.04578),
        vec3(0.05926, 0.93144, 0.00929),
        vec3(0.00596,0.06393, 0.93012));

    color = mul(ACES_OUTPUT_MAT, color);
    
    // Apply RRT and ODT
    color = inv_rrt_odt_fit(color);

    color = mul(ACES_INPUT_MAT, color);

    return color;
}

vec3 PowVec3(vec3 v, float p)
{
    return vec3(pow(v.x, p), pow(v.y, p), pow(v.z, p));
}

const float gamma = 2.2;
vec3 ToSRGB(vec3 v) { return PowVec3(v, 1.0/gamma); }
`