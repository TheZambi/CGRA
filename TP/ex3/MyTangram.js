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
    }
    
    enableNormalViz()
	{
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleBig2.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
        this.paralelogram.enableNormalViz();
        this.diamond.enableNormalViz();
    }
    
    disableNormalViz()
	{
        this.triangle.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleBig2.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleSmall2.disableNormalViz();
        this.paralelogram.disableNormalViz();
        this.diamond.disableNormalViz();
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


        this.scene.multMatrix(m);

        this.scene.customMaterial.apply();
        this.diamond.display();
        
        this.scene.popMatrix();
        
        //BIG TRIANGLE
        this.big_triangle = new CGFappearance(this.scene);
        this.big_triangle.setAmbient(0.5,0.85,1,1.0);
        this.big_triangle.setDiffuse(0.5,0.85,1,1.0);
        this.big_triangle.setSpecular(1,1,1,1.0);
        this.big_triangle.setShininess(10.0);

        this.big_triangle.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-2,0);
       
        this.triangleBig.display();
        this.scene.popMatrix();

        //BIG TRIANGLE 2
        this.triangle_color2 = new CGFappearance(this.scene);
        this.triangle_color2.setAmbient(1,0.6,0,1.0);
        this.triangle_color2.setDiffuse(1,0.6,0,1.0);
        this.triangle_color2.setSpecular(1,1,1,1.0);
        this.triangle_color2.setShininess(10.0);
        this.triangle_color2.apply();

        this.triangle_color2.apply();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        
        
        this.triangleBig2.display();
        
        this.scene.popMatrix();
        
        //TRIANGLE
        this.triangle_color = new CGFappearance(this.scene);
        this.triangle_color.setAmbient(1,0.79,0.85,1.0);
        this.triangle_color.setDiffuse(1,0.79,0.85,1.0);
        this.triangle_color.setSpecular(1,1,1,1.0);
        this.triangle_color.setShininess(10.0);
        this.triangle_color.apply();
        

        this.scene.pushMatrix();
        this.scene.translate(-2,0,0);
        this.scene.rotate(-Math.PI/2,0,0,1);


        this.triangle.display();
        this.scene.popMatrix();

        //SMALL TRIANGLE

        this.triangle_color3 = new CGFappearance(this.scene);
        this.triangle_color3.setAmbient(1,0,0,1.0);
        this.triangle_color3.setDiffuse(1,0,0,1.0);
        this.triangle_color3.setSpecular(1,1,1,1.0);
        this.triangle_color3.setShininess(10.0);
        this.triangle_color3.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2),0.66,0);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.triangleSmall.display();

        this.scene.popMatrix();

        //SMALL TRIANGLE 2
        this.small_triangle_2_color = new CGFappearance(this.scene);
        this.small_triangle_2_color.setAmbient(0.6,0.2,0.6,1.0);
        this.small_triangle_2_color.setDiffuse(0.6,0.2,0.6,1.0);
        this.small_triangle_2_color.setSpecular(1,1,1,1.0);
        this.small_triangle_2_color.setShininess(10.0);
        this.small_triangle_2_color.apply();

        this.scene.pushMatrix();
        this.scene.translate(0,-2-Math.sin(Math.PI/4),0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.triangleSmall.display();

        this.scene.popMatrix();

        //PARALELOGRAM
        this.paralelogram_color = new CGFappearance(this.scene);
        this.paralelogram_color.setAmbient(1,1,0,1.0);
        this.paralelogram_color.setDiffuse(1,1,0,1.0);
        this.paralelogram_color.setSpecular(1,1,1,1.0);
        this.paralelogram_color.setShininess(10.0);
        this.paralelogram_color.apply();

        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(3*Math.PI/4,0,0,1);

        this.paralelogram.display();

        this.scene.popMatrix();

    }
    updateBuffers(complexity){
        

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}