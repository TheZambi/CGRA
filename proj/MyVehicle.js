/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.sphere = new MySphere(this.scene,slices,stacks);
        this.cylinder = new MyCylinder(this.scene,10);

        this.speed=0;
        this.position = [0,0,0]; //change y to 10 after testing
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
        //Changes causeed by the user
        this.scene.pushMatrix();
        this.scene.translate(this.position[0],this.position[1],this.position[2]);
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);
        
        
        //Elipse
        this.scene.pushMatrix();

        this.scene.scale(1,1,2);      
    
        this.sphere.display();
        this.scene.popMatrix();
        //Spheres on the edge of the Cabin
        this.scene.pushMatrix();

        this.scene.translate(0,-1,0);
        this.scene.pushMatrix();
        
        this.scene.translate(0,0,-0.375);
        this.scene.scale(0.121,0.121,0.121);
        
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.485);
        this.scene.scale(0.121,0.121,0.121);
        this.sphere.display();
        this.scene.popMatrix();

        //Cabin
        this.scene.translate(0,0,-0.375);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.125,0.85,0.125);

      
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
