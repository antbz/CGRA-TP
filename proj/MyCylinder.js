/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     */
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        
        var theta = 0;
        var thetaInc = Math.PI * 2 / this.slices;
        var textMap = 0;
        var textMapInc = 1 / this.slices;


        for (var i = 0; i <= this.slices; i++) {
            var x_coord = Math.cos(theta);
            var z_coord = Math.sin(-theta);

            this.vertices.push(x_coord, 0, z_coord);
            this.vertices.push(x_coord, 1, z_coord);

            this.normals.push(x_coord, 0, z_coord, x_coord, 0, z_coord);
            
            this.texCoords.push(textMap, 1);
            this.texCoords.push(textMap, 0);

            if (i != 0) {
                this.indices.push((i*2), (i*2+1), (i*2-1));
                this.indices.push((i*2), (i*2-1), (i*2-2));
            }

            theta += thetaInc;
            textMap += textMapInc;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateSlices(complexity) {
        this.slices = complexity;

        this.initBuffers();
        this.initNormalVizBuffers();
    }
}