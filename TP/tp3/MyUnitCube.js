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
		
		this.normals=[];


		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,		//2
			-0.5, 0.5, -0.5,	//3
			-0.5, -0.5, 0.5,	//4
			0.5, -0.5, 0.5,	    //5
			0.5, 0.5, 0.5,		//6
			-0.5, 0.5, 0.5,		//7

			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,		//2
			-0.5, 0.5, -0.5,	//3
			-0.5, -0.5, 0.5,	//4
			0.5, -0.5, 0.5,	    //5
			0.5, 0.5, 0.5,		//6
			-0.5, 0.5, 0.5,		//7

			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,		//2
			-0.5, 0.5, -0.5,	//3
			-0.5, -0.5, 0.5,	//4
			0.5, -0.5, 0.5,	    //5
			0.5, 0.5, 0.5,		//6
			-0.5, 0.5, 0.5		//7
		];
	
		// for(var j=0;j<3;j++) // coordenadas dos vertices
		// {
		// 	if(j==0){
		// 		if(this.vertices[3*i+j]>0)
		// 			normX=1;
		// 		else normX=-1;
		// 	}
		// 	if(j==1)
		// 	{
		// 		if(this.vertices[3*i+j]>0)
		// 			normY=1;
		// 		else normY=-1;
		// 	}
		// 	if(j==2)
		// 	{
		// 		if(this.vertices[3*i+j]>0)
		// 			normZ=1;
		// 		else normZ=-1;
		// 	}

		// } // nomais na diagonal(colocar dentro de 1 for e comentar os outros)
		for(var i=0;i<8;i++) // n vertices
		{
			if(this.vertices[i*3]<0)
				this.normals.push(-1,0,0);
			else
				this.normals.push(1,0,0);
		}
		for(var i=0;i<8;i++) // n vertices
		{
			if(this.vertices[i*3+1]<0)
				this.normals.push(0,-1,0);
			else
				this.normals.push(0,1,0);
		}
		for(var i=0;i<8;i++) // n vertices
		{
			if(this.vertices[i*3+2]<0)
				this.normals.push(0,0,-1);
			else
				this.normals.push(0,0,1);
		}


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
	updateBuffers(complexity){
        

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

