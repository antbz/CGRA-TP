/**
 * MyDiamond
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
		    0.5, 0.5, 0.5,	//0
			-0.5, 0.5, 0.5,	//1
			-0.5, -0.5, 0.5,	//2
            0.5, -0.5, 0.5,	//3
            0.5, 0.5, -0.5,   //4
            -0.5, 0.5, -0.5,  //5
            -0.5,-0.5,-0.5,   //6
            0.5, -0.5, -0.5    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //front
            3, 0, 2,

            0, 4 ,5, //top
            0, 5, 1,

            0, 3, 7, //right
            7, 4, 0,

            4, 7, 6, //back
            6, 5, 4,

            5, 6, 2, //left 
            2, 1, 5,

            2, 6, 7, //bottom
            7, 3, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

