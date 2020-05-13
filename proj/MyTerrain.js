class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.plane = new MyPlane(this.scene, 20);

        this.shader = new CGFshader(this.scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');

        this.tex1 = new CGFtexture(this.scene, 'images/terrain.jpg');
        this.tex2 = new CGFtexture(this.scene, 'images/heightmap2.png');
        this.shader.setUniformsValues({ uSampler1: 1 });
        this.shader.setUniformsValues({ uSampler2: 2 });
    }

    display() {

        // bind additional texture to texture unit 1
        this.tex1.bind(1);
        this.tex2.bind(2); 

        this.scene.setActiveShader(this.shader);
        
    
        this.scene.pushMatrix();
        this.scene.scale(50,1,50);
        this.scene.rotate(Math.PI/2, -1, 0, 0);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }

}