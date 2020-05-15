
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyFlag extends CGFobject{
	constructor(scene) {
        super(scene);

        this.phase = 0;
        this.plane = new MyPlane(this.scene, 64);

        this.tex1 = new CGFtexture(this.scene, 'images/Portugal.png');

        this.shader1 = new CGFshader(this.scene.gl, 'shaders/texture1.vert', 'shaders/texture1.frag');

        this.shader1.setUniformsValues({ uSampler: 1 });
        this.shader1.setUniformsValues({ phase: 0 });

        this.shader2 = new CGFshader(this.scene.gl, 'shaders/texture2.vert', 'shaders/texture1.frag');

        this.shader2.setUniformsValues({ uSampler: 1 });
        this.shader2.setUniformsValues({ phase: 0 });
    }

    update(t){

        this.phase += t;
        this.shader1.setUniformsValues({phase: this.phase});
        this.shader2.setUniformsValues({phase: this.phase});
    
    }
        
    
    display(){
        this.tex1.bind(0);

        this.scene.setActiveShader(this.shader1);

        this.scene.pushMatrix();
        this.scene.translate(0,0,-5);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.scale(2,1.2,1);

        this.plane.display();
        this.scene.setActiveShader(this.shader2);


        this.scene.rotate(Math.PI,0,1,0);
        this.plane.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

    }


	
}


