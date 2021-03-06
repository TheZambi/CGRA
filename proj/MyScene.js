/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.speedFactor=0.1;
        this.scaleFactor=1;

        this.displaySphere = false;
        this.displayCilinder = false;


        this.selectedTexture = 0;
        this.textureIds = { 'Default' : 0, 'Sky' : 1 };


        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        this.text = new CGFappearance(this);
        this.text.setDiffuse(0.9,0.9,0.9,1.0);
        this.text.setSpecular(0.1,0.1,0.1,1.0);
        this.text.setShininess(1.0);
        this.text.loadTexture('images/earth.jpg');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this,50);
        this.unitQuad = new MyUnitCubeQuad(this);
        this.vehicle = new MyVehicle(this,20,5);
        this.terrain = new MyTerrain(this);
        this.billboard = new MyBillboard(this);

        this.supplies = [];
        this.suppliesDroped=0;

        for(var i=0; i<5;i++)
        {
            this.supplies.push(new MySupply(this));
        }

        //Objects connected to MyInterface
        this.displayAxis = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setAmbient(0.25,0.25,0.25,1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys(val) {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
            this.vehicle.accelarate(1);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
            this.vehicle.accelarate(-1);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
            this.vehicle.turn(Math.PI/10);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
            this.vehicle.turn(-Math.PI/10);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            keysPressed = true;
            this.vehicle.reset();
            for(var i=0; i<5;i++)
                this.supplies[i].reset();
            this.suppliesDroped=0;
            this.billboard.update(-0.5);
        }
        if (this.gui.isKeyPressedDelay("KeyP")) {
            text += " P ";
            keysPressed = true;
            this.vehicle.startAutoPilot(val);
        }
        if (this.gui.isKeyPressedDelay("KeyL")) {
            text += " L ";
            keysPressed = true;
            if(this.suppliesDroped<5){
                this.supplies[this.suppliesDroped].drop(this.vehicle.position);
                this.suppliesDroped+=1;
                this.billboard.update(this.suppliesDroped/5.0)
            }
            
        }
        if (keysPressed)
            console.log(text);
        else {
            this.vehicle.rudder_orient = 0;
        }

    }


    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
        this.checkKeys(t);
        this.vehicle.update(t, this.speedFactor);

        for(var i=0; i<5;i++)
            this.supplies[i].update();
    }

    updateAppliedTexture(){
        this.unitQuad.selectTexture(this.selectedTexture);
    }

    
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        

        if(this.displayCilinder || this.displaySphere)
        {
            this.text.apply();
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        }

        if(this.displaySphere){  
            this.pushMatrix();
            this.translate(0,2,0);   
            this.incompleteSphere.display();
            this.popMatrix();
        }

        if(this.displayCilinder){
            this.pushMatrix();
            this.translate(0,2,0);  
            this.cylinder.display();
            this.popMatrix();
        }
  

        this.vehicle.display(this.scaleFactor);
        
        for(var i=0; i<5;i++)
            this.supplies[i].display();


        this.pushMatrix();
        this.scale(50,50,50);
        this.unitQuad.display();
        this.popMatrix();

        this.pushMatrix();
        this.setDefaultAppearance();

        this.terrain.display();
        this.popMatrix();

        this.billboard.display();

        
        // ---- END Primitive drawing section
    }
}