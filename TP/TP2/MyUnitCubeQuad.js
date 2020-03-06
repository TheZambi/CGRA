/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
		this.quad = new MyQuad(scene);
	}
    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.quad.display(); //Base


        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.quad.display();
        
        
        this.scene.translate(0,-1,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.quad.display();


        this.scene.translate(0,-1,0);
        this.quad.display();






    }
}