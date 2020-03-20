/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(scene);
        
        this.bottom = new CGFappearance(this.scene);
        this.bottom.setDiffuse(0.9,0.9,0.9,1.0);
        this.bottom.setSpecular(0.1,0.1,0.1,1.0);
        this.bottom.setShininess(1.0);
        this.bottom.loadTexture('images/mineBottom.png');


        this.top = new CGFappearance(this.scene);
        this.top.setDiffuse(0.9,0.9,0.9,1.0);
        this.top.setSpecular(0.1,0.1,0.1,1.0);
        this.top.setShininess(1.0);
        this.top.loadTexture('images/mineTop.png');

        this.side = new CGFappearance(this.scene);
        this.side.setDiffuse(0.9,0.9,0.9,1.0);
        this.side.setSpecular(0.1,0.1,0.1,1.0);
        this.side.setShininess(1.0);
        this.side.loadTexture('images/mineSide.png');
	}
    display()
    {
        
        this.side.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display(); //Base


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(Math.PI,1,0,0);
        this.scene.translate(0,0,1);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2, 0,1,0);
        
        this.quad.display();
        
        
        
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,1);
        this.quad.display();
        
        this.top.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        
        this.scene.rotate(Math.PI,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        

        this.bottom.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        
        this.bottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.quad.display();



    }
}