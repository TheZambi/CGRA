/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	changeTex()
	{
		this.texCoords=[];
		this.texCoords=[
			1,1,
			1,0,
			0.5,0.5,
			1,0.5,			
		];
		this.updateTexCoordsGLBuffers();
	}

	initBuffers() {
		this.vertices = [
            -2, 0,0,    //0
            2, 0, 0,    //1
            0, 2, 0,    //2
            0, 0, 0     //3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 2,
            3, 1, 2
		];

		this.texCoords = [
			0,0,
			1,0,
			0.5,0.5,
			0.5,0
        ];

		this.normals=[]
		var normX,normY,normZ;
		for(var i=0;i<4;i++) // n vertices
		{
			this.normals.push(0,0,1);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	updateBuffers(complexity){

    }
}