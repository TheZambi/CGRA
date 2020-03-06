/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,		//2
			-0.5, 0.5, -0.5,	//3
			-0.5, -0.5, 0.5,	//4
			0.5, -0.5, 0.5,	    //5
			0.5, 0.5, 0.5,		//6
			-0.5, 0.5, 0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices=[];
		var i;
		for (i = 0; i <= 3; i++) {
			this.indices.push(i, (i + 1) % 4, i + 4,
			(i + 1) % 4, ((i + 1) % 4) + 4, i + 4);
		}
		this.indices.push(4,5,7,
						  5,6,7,
						  
						  0,3,2,
						  0,2,1);

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

