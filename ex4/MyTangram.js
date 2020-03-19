/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.smalltriangle1 = new MyTriangleSmall(this.scene);
        this.smalltriangle2 = new MyTriangleSmall(this.scene);
        this.bigtriangle1 = new MyTriangleBig(this.scene);
        this.bigtriangle2 = new MyTriangleBig(this.scene);
        this.paralellogram = new MyParalellogram(this.scene);
    }
    initMaterials() {
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 0, 0, 1);
        this.green.setDiffuse(0.8 * 0, 0.8 * 1, 0.8 * 0, 1);
        this.green.setSpecular(0, 1, 0, 1);
        this.green.setShininess(10);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0, 0, 0, 1);
        this.orange.setDiffuse(0.8 * 1, 0.8 * 0.6078, 0.8 * 0, 1);
        this.orange.setSpecular(1, 0.6078, 0, 1);
        this.orange.setShininess(10);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0, 0, 0, 1);
        this.blue.setDiffuse(0.8 * 0, 0.8 * 0.6078, 0.8 * 1, 1);
        this.blue.setSpecular(0, 0.6078, 1, 1);
        this.blue.setShininess(10);

        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(0, 0, 0, 1);
        this.red.setDiffuse(0.8 * 1, 0.8 * 0, 0.8 * 0, 1);
        this.red.setSpecular(1, 0, 0, 1);
        this.red.setShininess(10);

        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0, 0, 0, 1);
        this.purple.setDiffuse(0.8 * 0.5882, 0.8 * 0.3137, 0.8 * 0.7451, 1);
        this.purple.setSpecular(0.5882, 0.3137, 0.7451, 1);
        this.purple.setShininess(10);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0, 0, 0, 1);
        this.yellow.setDiffuse(0.8 * 1, 0.8 * 1, 0.8 * 0, 1);
        this.yellow.setSpecular(1, 1, 0, 1);
        this.yellow.setShininess(10);

        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(0, 0, 0, 1);
        this.pink.setDiffuse(0.8 * 1, 0.8 * 0.6078, 0.8 * 0.8118, 1);
        this.pink.setSpecular(1, 0.6078, 0.8118, 1);
        this.pink.setShininess(10);


    }
	display() {
		var trans = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            1.0, 0.0, 0.0, 1.0];

        // this.scene.setColor(0, 1, 0, 1);
        // this.green.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.diamond.display();
        this.scene.popMatrix();
    

        // this.scene.setColor(1, 0.6078, 0, 1);
        this.orange.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.scene.translate(0.5, 0.0, 0.0);
        this.bigtriangle1.display();
        this.scene.popMatrix();


        // this.scene.setColor(0, 0.6078, 1, 1);
        this.blue.apply();
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 3/4, Math.sqrt(2) * 5/4, 0.0);
        this.bigtriangle2.display();
        this.scene.popMatrix();


        // this.scene.setColor(1, 0, 0, 1);
        this.red.apply();
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 5/4, 2 + Math.sqrt(2) * 7/4, 0);
        this.scene.rotate(-Math.PI*3/4, 0, 0, 1);
        this.smalltriangle1.display();
        this.scene.popMatrix();

    
        // this.scene.setColor(0.5882, 0.3137, 0.7451, 1);
        this.purple.apply();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) * 1/2 + 0.7, -0.7 - Math.sqrt(2) * 1/2, 0);
        this.scene.rotate(Math.PI*3/4, 0, 0, 1);
        this.smalltriangle2.display();
        this.scene.popMatrix();

    
        // this.scene.setColor(1, 1, 0, 1);
        this.yellow.apply();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2) * 3/4, -Math.sqrt(2) * 3/4, 0);
        this.scene.rotate(-Math.PI * 1/4, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.paralellogram.display();
        this.scene.popMatrix();


        // this.scene.setColor(1, 0.6078, 0.8118, 1);
        this.pink.apply();
        this.scene.pushMatrix();
        this.scene.translate(2 - Math.sqrt(2) * 5/4, 2 + Math.sqrt(2) * 7/4, 0);
        this.scene.rotate(-Math.PI * 1/2, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();
	}
}

