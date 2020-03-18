/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.smalltriangle1 = new MyTriangleSmall(this.scene);
        this.smalltriangle2 = new MyTriangleSmall(this.scene);
        this.bigtriangle1 = new MyTriangleBig(this.scene);
        this.bigtriangle2 = new MyTriangleBig(this.scene);
        this.paralellogram = new MyParalellogram(this.scene);
	}
	display() {
		var trans = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            1.0, 0.0, 0.0, 1.0];

        this.scene.setColor(0, 1, 0, 1);
        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.diamond.display();
        this.scene.popMatrix();
    

        this.scene.setColor(1, 0.6078, 0, 1);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.scene.translate(0.5, 0.0, 0.0);
        this.bigtriangle1.display();
        this.scene.popMatrix();


        this.scene.setColor(0, 0.6078, 1, 1);
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 3/4, Math.sqrt(2) * 5/4, 0.0);
        this.bigtriangle2.display();
        this.scene.popMatrix();


        this.scene.setColor(1, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 5/4, 2 + Math.sqrt(2) * 7/4, 0);
        this.scene.rotate(-Math.PI*3/4, 0, 0, 1);
        this.smalltriangle1.display();
        this.scene.popMatrix();

    
        this.scene.setColor(0.5882, 0.3137, 0.7451, 1);
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) * 1/2 + 0.7, -0.7 - Math.sqrt(2) * 1/2, 0);
        this.scene.rotate(Math.PI*3/4, 0, 0, 1);
        this.smalltriangle2.display();
        this.scene.popMatrix();

    
        this.scene.setColor(1, 1, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2) * 3/4, -Math.sqrt(2) * 3/4, 0);
        this.scene.rotate(-Math.PI * 1/4, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.paralellogram.display();
        this.scene.popMatrix();


        this.scene.setColor(1, 0.6078, 0.8118, 1);
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 5/4, 2 + Math.sqrt(2) * 7/4, 0);
        this.scene.rotate(-Math.PI * 1/2, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();
	}
}

