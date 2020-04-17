class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
     */
    constructor(scene, stacks) {
        super(scene);
        this.nFaces = stacks;

        this.initBuffers();
    }

    /**
     * @method initBuffers
     * Initializes the sphere buffers
     * TODO: DEFINE TEXTURE COORDINATES
     */
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        
        var i = 0;
        for (; i <= this.nFaces; i += 1) {
            for (var j = 0; j <= 1; j += 1) {
                this.vertices.push(Math.cos(2 * Math.PI * i / this.nFaces), j, Math.sin(2 * Math.PI * i / this.nFaces));
                this.normals.push(Math.cos(2 * Math.PI * i / this.nFaces), 0, Math.sin(2 * Math.PI * i / this.nFaces));
                this.texCoords.push((this.nFaces-i)/this.nFaces,1-j);
            }
        }
        //var lastIndice = i;

        for (var i = 0; i < this.nFaces * 2 - 1; i += 2) {
            this.indices.push(i, i + 1, i + 3,
                i + 2, i, i + 3,
                i + 3, i + 1, i,
                i + 3, i, i + 2);
        }

        // this.vertices.push(0, 0, 0,
        //                    0, 1, 0);
        // this.normals.push(0,-1,0,
        //                   0,1,0);

        // for (var i = 0; i < this.nFaces*2; i += 1) {
        //     this.indices.push(i, lastIndice, i + 2,
        //                       i + 2, lastIndice, i);
        //     this.indices.push(i + 1, lastIndice + 1, i + 3,
        //                       i + 3, lastIndice+1, i+1);
        // }




        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}