/**
 * MyLandedSupply
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLandedSupply extends CGFobject {

	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(scene);
    
	}
    display()
    {   
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.translate(1,0,0);
        this.quad.display();
        this.scene.translate(-2,0,0);
        this.quad.display();
        this.scene.translate(1,1,0);
        this.quad.display();
        this.scene.translate(0,-2,0);
        this.quad.display();
        this.scene.popMatrix();

    }
}