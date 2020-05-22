/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(scene);

        
        //TEXTURE 0
        this.bottom = new CGFappearance(this.scene);
        this.bottom.setDiffuse(0.6,0.6,0.6,1.0);
        this.bottom.setSpecular(0.6,0.6,0.6,1.0);
        this.bottom.setShininess(1.0);
        this.bottom.loadTexture('images/split_cubemap/bottom.png');

        this.back = new CGFappearance(this.scene);
        this.back.setDiffuse(0.6,0.6,0.6,1.0);
        this.back.setSpecular(0.6,0.6,0.6,1.0);
        this.back.setShininess(1.0);
        this.back.loadTexture('images/split_cubemap/back.png');

        this.top = new CGFappearance(this.scene);
        this.top.setDiffuse(0.6,0.6,0.6,1.0);
        this.top.setSpecular(0.6,0.6,0.6,1.0);
        this.top.setShininess(1.0);
        this.top.loadTexture('images/split_cubemap/top.png');

        this.front = new CGFappearance(this.scene);
        this.front.setDiffuse(0.6,0.6,0.6,1.0);
        this.front.setSpecular(0.6,0.6,0.6,1.0);
        this.front.setShininess(1.0);
        this.front.loadTexture('images/split_cubemap/front.png');
    

        this.right = new CGFappearance(this.scene);
        this.right.setDiffuse(0.6,0.6,0.6,1.0);
        this.right.setSpecular(0.6,0.6,0.6,1.0);
        this.right.setShininess(1.0);
        this.right.loadTexture('images/split_cubemap/right.png');


        this.left = new CGFappearance(this.scene);
        this.left.setDiffuse(0.6,0.6,0.6,1.0);
        this.left.setSpecular(0.6,0.6,0.6,1.0);
        this.left.setShininess(1.0);
        this.left.loadTexture('images/split_cubemap/left.png');

        //TEXTURE 1
        this.bottom1 = new CGFappearance(this.scene);
        this.bottom1.setDiffuse(0.6,0.6,0.6,1.0);
        this.bottom1.setSpecular(0.6,0.6,0.6,1.0);
        this.bottom1.setShininess(1.0);
        this.bottom1.loadTexture('images/splitcubemap/bottom1.png');

        this.back1 = new CGFappearance(this.scene);
        this.back1.setDiffuse(0.6,0.6,0.6,1.0);
        this.back1.setSpecular(0.6,0.6,0.6,1.0);
        this.back1.setShininess(1.0);
        this.back1.loadTexture('images/splitcubemap/back1.png');

        this.top1 = new CGFappearance(this.scene);
        this.top1.setDiffuse(0.6,0.6,0.6,1.0);
        this.top1.setSpecular(0.6,0.6,0.6,1.0);
        this.top1.setShininess(1.0);
        this.top1.loadTexture('images/splitcubemap/top1.png');

        this.front1 = new CGFappearance(this.scene);
        this.front1.setDiffuse(0.6,0.6,0.6,1.0);
        this.front1.setSpecular(0.6,0.6,0.6,1.0);
        this.front1.setShininess(1.0);
        this.front1.loadTexture('images/splitcubemap/front1.png');
    

        this.right1 = new CGFappearance(this.scene);
        this.right1.setDiffuse(0.6,0.6,0.6,1.0);
        this.right1.setSpecular(0.6,0.6,0.6,1.0);
        this.right1.setShininess(1.0);
        this.right1.loadTexture('images/splitcubemap/right1.png');


        this.left1 = new CGFappearance(this.scene);
        this.left1.setDiffuse(0.6,0.6,0.6,1.0);
        this.left1.setSpecular(0.6,0.6,0.6,1.0);
        this.left1.setShininess(1.0);
        this.left1.loadTexture('images/splitcubemap/left1.png');

        this.textures = [[this.bottom, this.back, this.top, this.front, this.right, this.left], 
                         [this.bottom1, this.back1, this.top1, this.front1, this.right1, this.left1]];
        this.activeTexture = this.textures[0];
    
	}
    display()
    {   
        this.scene.pushMatrix();
        this.scene.translate(0.0,0.49,0.0);

        //FRONT
        this.activeTexture[3].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.quad.display();

        //BACK
        this.activeTexture[1].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(Math.PI,1,0,0);
        this.scene.translate(0,0,-0.5);
        this.quad.display();

        //LEFT
        this.activeTexture[5].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.quad.display();
        
        //RIGHT
        this.activeTexture[4].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,-1);
        this.quad.display();
        
        //BOTTOM
        this.activeTexture[0].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        
        this.scene.rotate(Math.PI,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
        //TOP
        this.activeTexture[2].apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        //this.bottom.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);

        this.quad.display();

        this.scene.popMatrix();


    }
}