/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	changeTex()
	{
		this.texCoords=[];
		this.texCoords=[
			0,0,
			0,0.25,
			0.25,0.25,
			0,0.5		
		];
		this.updateTexCoordsGLBuffers();
	}

	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, 0, 0,	//1
			0, 1, 0,	//2
            1, 0, 0 	//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            3, 2, 1
		];


		this.texCoords = [
			0.25,0.75,
			0.5,0.75,
			0.5,0.5,
			0.75,0.75
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