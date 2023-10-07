import { ACES_Inv } from "../../shader/chunk/ACES.chunk";
import { Color, Mesh, MeshPhysicalMaterial, PlaneGeometry, Plugin, ShaderMaterial, SphereGeometry, Vector3, property } from "../libs/xviewer";

const sphereMat = new ShaderMaterial({
    vertexShader: `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
    `,
    fragmentShader: `
    uniform vec3 color;
    uniform float intensity;  
    ${ACES_Inv}
    void main() {
        vec3 col = ACES_Inv(color);
        col*=intensity;
         gl_FragColor = vec4(col, 1.);
    }
    `,
    uniforms: {
        color: { value: new Color("#95c4de") },
        intensity: { value: 1 }
    }
})

export class ShaderTest extends Plugin {
    private mesh!: Mesh;
    private plane!: Mesh;
    onLoad(props: any): void {
        const geometry = new SphereGeometry(10, 16, 32);
        const mesh = new Mesh(geometry, sphereMat)
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.name = "sphereeeeeeeeeeeeeeeeeee"
        this.viewer.scene.add(mesh);
        this.mesh = mesh;

        const geometry_plane = new PlaneGeometry(1000, 10000);
        const mesh_plane = new Mesh(geometry_plane, new MeshPhysicalMaterial({
            color: new Color("#666666")
        }))
        console.log(mesh_plane.material)
        mesh_plane.rotateOnWorldAxis(new Vector3(1, 0, 0), -Math.PI / 2)
        mesh_plane.receiveShadow = true
        mesh_plane.name = "planeeeeeeeeeeeeeeeeeeee"
        this.viewer.scene.add(mesh_plane);
        this.plane = mesh_plane;

    }

    update(dt: number): void {
        this.mesh.position.copy(cameraCenter.clone().add(new Vector3(0, -10, -100)))
        this.plane.position.copy(cameraCenter.clone().add(new Vector3(30, -27, -100)))
    }

    @property()
    get color() {
        return sphereMat.uniforms.color.value;
    }

    set color(v: Color) {
        sphereMat.uniforms.color.value.clone(v)
    }
    @property({ min: 0, max: 50, step: 0.001 })
    get intensity() {
        return sphereMat.uniforms.intensity.value;
    }

    set intensity(v: number) {
        sphereMat.uniforms.intensity.value = v;
    }
}