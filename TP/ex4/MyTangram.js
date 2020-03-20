/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

	constructor(scene) {
		super(scene);
		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.paralelogram = new MyParalelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);

        this.png = new CGFappearance(this.scene);
        this.png.setDiffuse(0.9,0.9,0.9,1.0);
        this.png.setSpecular(0.1,0.1,0.1,1.0);
        this.png.setShininess(1.0);
        this.png.loadTexture('images/tangram.png');
	}
    display()
    {
        //DIAMOND
        this.scene.pushMatrix();
         var m = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, 0, 0, 1
        ];


        this.png.apply();


        this.scene.multMatrix(m);

        this.diamond.display();
        
        this.scene.popMatrix();
        
        //BIG TRIANGLE

        
        this.scene.pushMatrix();
        this.scene.translate(0,-2,0);
       
        this.triangleBig.display();
        this.scene.popMatrix();

        //BIG TRIANGLE 2
        this.triangleBig2.changeTex();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        
        
        this.triangleBig2.display();
        
        this.scene.popMatrix();
        
        //TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-2,0,0);
        this.scene.rotate(-Math.PI/2,0,0,1);


        this.triangle.display();
        this.scene.popMatrix();

        //SMALL TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2),0.66,0);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.triangleSmall.display();

        this.scene.popMatrix();

        //SMALL TRIANGLE 2
        this.triangleSmall2.changeTex();
        this.scene.pushMatrix();
        this.scene.translate(0,-2-Math.sin(Math.PI/4),0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.triangleSmall2.display();

        this.scene.popMatrix();

        //PARALELOGRAM
        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(3*Math.PI/4,0,0,1);

        this.paralelogram.display();

        this.scene.popMatrix();

    }
}