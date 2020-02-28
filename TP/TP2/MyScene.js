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

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.paralelogram = new MyParalelogram(this);
        this.triangleSmall = new MyTriangleSmall(this);
        this.triangleSmall2 = new MyTriangleSmall(this);
        this.triangleBig = new MyTriangleBig(this);
        this.triangleBig2 = new MyTriangleBig(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
        this.displayTriangle = true;
        this.displayTriangleS = true;
        this.displayTriangleB2 = true;
        this.displayTriangleB = true;
        this.displayDiamond = true;
        this.displayPara = true;
        this.displayTriangleS2 = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
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

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section
        
        //DIAMOND
        this.pushMatrix();
         var m = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, 0, 0, 1
        ];

        this.multMatrix(m);
        //this.translate(-1,0,0);

        if(this.displayDiamond)
            this.diamond.display();
        
        this.popMatrix();
        
        //BIG TRIANGLE
        this.pushMatrix();
        this.translate(0,-2,0);
        if(this.displayTriangleB)
            this.triangleBig.display();
        this.popMatrix();

        //BIG TRIANGLE 2
        this.pushMatrix();
        this.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.rotate(-Math.PI/4,0,0,1);
        
        if(this.displayTriangleB2)
            this.triangleBig2.display();
        
        this.popMatrix();
        
        //TRIANGLE
        this.pushMatrix();
        this.translate(-2,0,0);
        this.rotate(-Math.PI/2,0,0,1);

         if(this.displayTriangle)
            this.triangle.display();
        this.popMatrix();

        //SMALL TRIANGLE
        this.pushMatrix();
        this.translate(2*Math.sqrt(2),0.66,0);
        this.rotate(-Math.PI/2, 0,0,1);
        if(this.displayTriangleS)
            this.triangleSmall.display();

        this.popMatrix();

        //SMALL TRIANGLE 2
        this.pushMatrix();
        this.translate(0,-2-Math.sin(Math.PI/4),0);
        this.rotate(Math.PI/4, 0,0,1);
        if(this.displayTriangleS)
            this.triangleSmall.display();

        this.popMatrix();

        //PARALELOGRAM
        this.pushMatrix();
        this.translate(-3,1,0);
        this.rotate(Math.PI,0,1,0);
        this.rotate(3*Math.PI/4,0,0,1);
        
        if(this.displayPara)
             this.paralelogram.display();


        //---- END Primitive drawing section
    }
}