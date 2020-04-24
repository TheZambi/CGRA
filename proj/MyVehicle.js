/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.pyramid = new MyPyramid(this.scene,slices,stacks);

        this.speed=0;
        this.position = [0,0,0];
        this.orientation = 0;
        
    }
    
    turn(val)
    {
        this.orientation += val;
    }

    accelarate(val)
    {
        this.speed += val;
        if(this.speed < 0)
            this.speed=0;
    }

    update()
    {
        var directionVector = [Math.sin(this.orientation), 0, Math.cos(this.orientation)];

        this.position[0] = this.position[0] + directionVector[0] * this.speed;
        this.position[1] = this.position[1] + directionVector[1] * this.speed;
        this.position[2] = this.position[2] + directionVector[2] * this.speed;
    }

    reset()
    {
        this.speed=0;
        this.position = [0,0,0];
        this.orientation = 0;
    }

    display(scaleFactor) {
        this.update();
        
        this.scene.pushMatrix();

        this.scene.translate(this.position[0],this.position[1],this.position[2]);
        this.scene.rotate(this.orientation,0,1,0);

        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI/2,1,0,0);

        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);
        
        
        this.pyramid.display();

        this.scene.popMatrix();
    }
}
