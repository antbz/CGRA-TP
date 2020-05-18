/**
 * MyBillboard
 * @constructor
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
        super(scene);
        this.plane = new MyPlane(this.scene, 30);

        this.dropped = 0;

        this.progressShader = new CGFshader(scene.gl,'shaders/billboard.vert','shaders/billboard.frag');
        this.progressShader.setUniformsValues({drops: this.dropped})

        this.initMaterials();
		
    }
    
    initMaterials(){
        this.boardbody = new CGFappearance(this.scene);
        this.boardbody.setAmbient(1, 1, 1, 1);
        this.boardbody.setDiffuse(0.9, 0.9, 0.9, 1);
        this.boardbody.setSpecular(0.9, 0.9, 0.9, 1);
        this.boardbody.setShininess(10.0);
        this.boardbody.loadTexture('images/billboard/billboard.png');
        this.boardbody.setTextureWrap('REPEAT', 'REPEAT');

        this.boardback = new CGFappearance(this.scene);
        this.boardback.setAmbient(1, 1, 1, 1);
        this.boardback.setDiffuse(0.9, 0.9, 0.9, 1);
        this.boardback.setSpecular(0.9, 0.9, 0.9, 1);
        this.boardback.setShininess(10.0);
        this.boardback.loadTexture('images/billboard/billboard_back.png');
        this.boardback.setTextureWrap('REPEAT', 'REPEAT');

        this.boardlegs = new CGFappearance(this.scene);
        this.boardlegs.setAmbient(1, 1, 1, 1);
        this.boardlegs.setDiffuse(0.8, 0.8, 0.8, 1);
        this.boardlegs.setSpecular(0.9, 0.9, 0.9, 1);
        this.boardlegs.setShininess(10.0);
        this.boardlegs.loadTexture('images/billboard/boardlegs.jpg');
        this.boardlegs.setTextureWrap('REPEAT', 'REPEAT');
    }

    update() {
        this.progressShader.setUniformsValues({ drops: ++this.dropped});
    }

    reset() {
        this.dropped = 0;
        this.progressShader.setUniformsValues({ drops: this.dropped });
    }

	display(){
        this.scene.pushMatrix();
        this.scene.translate(14.0, 6.25, 16.0);
        this.scene.rotate(Math.PI/5, 0, 1, 0);
        
        // Billboard
        this.boardbody.apply();
        this.scene.pushMatrix();
        this.scene.scale(2.0, 1.0, 1.0);
        this.plane.display();
        this.scene.popMatrix();
        // Back
        this.boardback.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.scale(2.0, 1.0, 1.0);
        this.plane.display();
        this.scene.popMatrix();

        // Legs
        this.boardlegs.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.95, -1.0, 0.0);
        this.scene.scale(0.1, 1.0, 0);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.95, -1.0, 0.0);
        this.scene.scale(0.1, 1.0, 0.0);
        this.plane.display();
        this.scene.popMatrix();
        // Back
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.translate(-0.95, -1.0, 0.0);
        this.scene.scale(0.1, 1.0, 0);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.translate(0.95, -1.0, 0.0);
        this.scene.scale(0.1, 1.0, 0.0);
        this.plane.display();
        this.scene.popMatrix();

        // Progress bar
        this.scene.setActiveShader(this.progressShader);
        this.scene.pushMatrix();
        this.scene.translate(0.0, -0.25, 0.01);
        this.scene.scale(1.6, 0.3, 1.0);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}