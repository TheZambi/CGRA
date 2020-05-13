/**
 * MyUnitCubeQuadReversed
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuadReversed extends CGFobject {

	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(scene);
        
        this.text = new CGFappearance(this.scene);
        this.text.setDiffuse(0.9,0.9,0.9,1.0);
        this.text.setSpecular(0.1,0.1,0.1,1.0);
        this.text.setShininess(1.0);
        this.text.loadTexture('images/crate.png');

	}
    display()
    {
        
        this.text.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display(); //Base


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(Math.PI,1,0,0);
        this.scene.translate(0,0,1);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2, 0,1,0);
        
        this.quad.display();
        
        
        
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,1);
        this.quad.display();
        
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        
        this.scene.rotate(Math.PI,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.quad.display();

        this.scene.popMatrix();

    }
}