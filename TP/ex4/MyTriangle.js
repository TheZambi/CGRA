/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			0, -1, 0,	//1
			-1, 0, 0,	//2
            0, 0, 0,	//3
            -1, 1, 0,   //4
            1, -1, 0    //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 2,
            1, 3, 0,
            3, 4, 2,
            5, 3, 1
		];

		this.texCoords = [
			0,1,
			0.25,1,
			0,0.75,
			0.25,0.75,
			0,0.5,
			0.5,1
        ];

		this.normals=[]
		var normX,normY,normZ;
		for(var i=0;i<5;i++) // n vertices
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