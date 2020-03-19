/**
 * MyParalellogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParalellogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 1, 0,	//1
			3, 1, 0,	//2
			2, 0, 0,	//3

			0, 0, 0,	//4 (0)
			1, 1, 0,	//5 (1)
			3, 1, 0,	//6 (2)
			2, 0, 0,	//7 (3)
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            2, 1, 0,
            2, 0, 3,
            4, 5, 6,
            7, 4, 6
		];

		this.normals = [
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}