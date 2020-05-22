/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.sphere = new MySphere(this.scene,slices,stacks);
        this.cylinder = new MyCylinder(this.scene,10);
        this.rudder = new MyRudder(this.scene);
        this.propeller = new MyPropeller(this.scene, slices, stacks);
        this.flag = new MyFlag(this.scene);

        this.auto = false;
        this.pilotAngle = 0;
        this.angularSpeed = Math.PI*2 / 5;
        this.previousTime = 0;
        this.center = [0,0,0];
        this.speed=0;
        this.position = [0,10,0];
        this.orientation = 0;
        this.rudder_orient = 0;
        this.previousSpeed = 0;
        
    }
    
    startAutoPilot(t)
    {

        if(!this.auto){
            this.previousSpeed = this.speed;
            this.auto = true;
            this.previousTime = t;
            this.pilotAngle = this.orientation - Math.PI/2;

            var directionVector = [Math.sin(this.orientation+Math.PI/2), 0, Math.cos(this.orientation+Math.PI/2)];

            this.center[0] = this.position[0] + 5 * directionVector[0];
            this.center[1] = 10;
            this.center[2] = this.position[2] + 5 * directionVector[2];
        }
        else{
            this.auto = false;
            this.previousTime = t;
            this.center[0] = 0;
            this.center[1] = 0;
            this.center[2] = 0;
            this.pilotAngle = 0;
            this.speed = this.previousSpeed;
        }
        
    }

    turn(val)
    {
        this.orientation += val;

        if (val > 0) {
            this.rudder_orient = -1;
        }
        else if (val < 0){
            this.rudder_orient = 1;
        }
      
    }

    accelarate(val)
    {
        this.speed += val;
        if(this.speed < 0)
            this.speed=0;
    }

    update(t, speedFactor)
    {
        if(this.previousTime==0)
            this.previousTime=t;
        var deltaTime = (t - this.previousTime) / 1000;
        this.previousTime = t;
        if(!this.auto){
            var directionVector = [Math.sin(this.orientation), 0, Math.cos(this.orientation)];

            this.position[0] = this.position[0] + directionVector[0] * this.speed*speedFactor;
            this.position[1] = this.position[1] + directionVector[1] * this.speed*speedFactor;
            this.position[2] = this.position[2] + directionVector[2] * this.speed*speedFactor;
        }
        else{
            this.rudder_orient = -1;
           

            var deltaAngle = deltaTime * this.angularSpeed;

            this.pilotAngle = this.pilotAngle + deltaAngle;

            this.orientation = this.pilotAngle + Math.PI/2;

            var directionVector = [Math.sin(this.pilotAngle), 0, Math.cos(this.pilotAngle)];

            this.position[0] = this.center[0] + directionVector[0] * 5;
            this.position[1] = this.center[1] + directionVector[1] * 5;
            this.position[2] = this.center[2] + directionVector[2] * 5;

            
        }
        
        this.flag.update(this.speed+deltaTime);
    }

    reset()
    {
        this.speed=0;
        this.position = [0,10,0];
        this.orientation = 0;
        this.auto = false;
        this.center=[0,0,0];
        this.accelarate.pilotAngle = 0;
    }

    display(scaleFactor) {
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
        this.scene.scale(0.181,0.181,0.181);
        
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.60);
        this.scene.scale(0.181,0.181,0.181);
        this.sphere.display();
        this.scene.popMatrix();

        //Cabin
        this.scene.translate(0,0,-0.375);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.190,0.95,0.190);

      
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/16*this.rudder_orient, 0, 1,0);

        //Upper Rudder
        this.scene.pushMatrix();
        this.scene.scale(1.4,1.4,1.4);
        this.scene.translate(0,0.3,-1.1);
        this.rudder.display();
        this.scene.popMatrix();

        //Lower Rudder
        this.scene.pushMatrix();
        this.scene.scale(1.4,1.4,1.4);
        this.scene.translate(0,-0.3,-1.1);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        //Left Rudder
        this.scene.pushMatrix();
        this.scene.scale(1.4,1.4,1.4);
        this.scene.translate(-0.3,0,-1.1);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        //Right Rudder
        this.scene.pushMatrix();
        this.scene.scale(1.4,1.4,1.4);
        this.scene.translate(0.3,0,-1.1);
        this.scene.rotate(Math.PI/2, 0, 0, -1);
        this.rudder.display();
        this.scene.popMatrix();

        this.propeller.prop_speed += this.speed/20.0 + 0.005;
    
        //Left Engine
        this.scene.pushMatrix();
        this.scene.translate(-0.151, -1.05, -0.5);
        this.propeller.display();
        this.scene.popMatrix();

        //Right Engine
        this.scene.pushMatrix();
        this.scene.translate(0.151, -1.05, -0.5);
        this.propeller.display();
        this.scene.popMatrix();

        //Flag
        this.flag.display();

        this.scene.popMatrix();

    
        

    }
}
