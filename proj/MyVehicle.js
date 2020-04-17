/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.pyramid = new MyPyramid(this.scene,slices,stacks);
        
    }
    
    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.pyramid.display();
    }
}
