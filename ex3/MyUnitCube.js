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
			
			0.5, 0.5, 0.5, // 4 (0)
			-0.5, 0.5, 0.5, // 5 (1)
            0.5, 0.5, -0.5,   //6 (4)
			-0.5, 0.5, -0.5,  //7 (5)
			
			0.5, 0.5, 0.5, // 8 (0)
			0.5, -0.5, 0.5, // 9 (3)
			0.5, 0.5, -0.5, // 10 (4)
			0.5, -0.5, -0.5, // 11 (7)

			0.5, 0.5, -0.5, // 12 (4)
			-0.5, 0.5, -0.5, // 13 (5)
			-0.5,-0.5,-0.5,   // 14 (6)
			0.5, -0.5, -0.5,    // 15 (7)
			
			-0.5, 0.5, 0.5, // 16 (1)
			-0.5, -0.5, 0.5, // 17 (2)
			-0.5, 0.5, -0.5, // 18 (5)
			-0.5,-0.5,-0.5, // 19 (6)

			-0.5, -0.5, 0.5, // 20 (2)
			0.5, -0.5, 0.5, // 21 (3)
			-0.5,-0.5,-0.5, // 22 (6)
			0.5, -0.5, -0.5 // 23 (7)
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //front [0..3]
            3, 0, 2,

            4, 6 ,7, //top [4..7]
            4, 7, 5,

            8, 9, 11, //right [8..11]
            11, 10, 8,
			
            12, 15, 14, //back [12..15]
            14, 13, 12,

            18, 19, 17, //left [16..19]
            17, 16, 18,

            20, 22, 23, //bottom [20..23]
            23, 21, 20
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

