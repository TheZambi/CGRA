
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyBillboard extends CGFobject{
	constructor(scene) {
        super(scene);

        this.base = new MyPlane(this.scene, 64);
        this.progressBar = new MyPlane(this.scene, 30);
        this.leg = new MyPlane(this.scene, 30);

        //this.tex1 = new CGFtexture(this.scene, 'images/supliesDropped.png');

        this.baseTex = new CGFappearance(this.scene);
        this.baseTex.setDiffuse(0.6,0.6,0.6,1.0);
        this.baseTex.setSpecular(0.6,0.6,0.6,1.0);
        this.baseTex.setShininess(1.0);
        this.baseTex.loadTexture('images/supliesDropped.png');

        this.whiteTex = new CGFappearance(this.scene);
        this.whiteTex.setDiffuse(0.3,0.3,0.3,1.0);
        this.whiteTex.setSpecular(0.3,0.3,0.3,1.0);
        this.whiteTex.setShininess(1.0);
        this.whiteTex.loadTexture('images/white.png');

        this.shader1 = new CGFshader(this.scene.gl, 'shaders/texture3.vert', 'shaders/texture3.frag');

        this.shader1.setUniformsValues({ uSampler: 1 });
        this.shader1.setUniformsValues({ cutoff: -0.5 });

    }

    update(val){
        this.shader1.setUniformsValues({ cutoff : val });
    }
        
    
    display(){
        
        this.baseTex.apply();

        this.scene.pushMatrix();
        this.scene.translate(-3,1.5,-7);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        
        this.scene.scale(2,1,1);

        this.base.display();
        
        this.whiteTex.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0,1,0);
        this.base.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.shader1);
        this.scene.translate(0, -0.2, 0.01);
        this.scene.scale(1.5/2,0.2,1);
        this.progressBar.display();

        this.scene.setActiveShader(this.scene.defaultShader);
        
        this.scene.translate(-0.61,-4.0,-0.01);
        this.scene.scale(0.1,5,1);
        this.leg.display();

        this.scene.rotate(Math.PI, 0, 1, 0);
        this.leg.display();

        this.scene.translate(-12.2, 0,0);
        this.leg.display();

        this.scene.rotate(Math.PI, 0, 1, 0);
        this.leg.display();








        // this.scene.setActiveShader(this.shader2);
       

        // this.scene.popMatrix();

        

    }


	
}


