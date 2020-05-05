/**
 * MyPropeller
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPropeller extends CGFobject {
	constructor(scene, stacks, slices) {
		super(scene);
		this.initBuffers();
        this.prop_speed = 0;

        this.sphere = new MySphere(this.scene, stacks, slices);            
	}

    display() {

        //Support
        this.scene.pushMatrix();
        this.scene.scale(0.05,0.05,0.15);
        this.sphere.display();
        this.scene.popMatrix();

        //Center
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.155);
        this.scene.scale(0.02,0.02,0.02);
        this.sphere.display();
        this.scene.popMatrix();

        //Upper Propeller
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2*this.prop_speed, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.05, -0.155);
        this.scene.scale(0.01,0.05,0.01);
        this.sphere.display();

        //Lower Propeller
        this.scene.translate(0, -2, 0);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.popMatrix();


    }

    
}

