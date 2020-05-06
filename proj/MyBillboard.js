/**
 * MyBillboard
 * @constructor
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
        super(scene);
        this.board = new MyPlane(this.scene, 40);
        this.back = new MyPlane(this.scene, 40);
        this.legs = new MyPlane(this.scene, 30);
        this.legs_back = new MyPlane(this.scene, 30);
        this.progressbar = new MyPlane(this.scene, 30);


        this.dropped = 0;

        this.progressShader = new CGFshader(scene.gl,'shaders/billboard.vert','shaders/billboard.frag');
        this.progressShader.setUniformsValues({drops: this.dropped})

        this.initMaterials();
		
    }
    
    initMaterials(){
        this.boardbody = new CGFappearance(this.scene);
        this.boardbody.setAmbient(0.1, 0.1, 0.1, 1);
        this.boardbody.setDiffuse(0.9, 0.9, 0.9, 1);
        this.boardbody.setShininess(10.0);
        this.boardbody.loadTexture('images/billboard.jpg');
        this.boardbody.setTextureWrap('REPEAT', 'REPEAT');

        this.boardlegs = new CGFappearance(this.scene);
        this.boardlegs.setAmbient(0.1, 0.1, 0.1, 1);
        this.boardlegs.setDiffuse(0.1, 0.1, 0.1, 1);
        this.boardlegs.setShininess(10.0);
        this.boardlegs.loadTexture('images/boardlegs.jpg');
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
        this.scene.translate(0.0, 2.0, -8.0);
        

        this.boardbody.apply();
        this.scene.pushMatrix();
        this.scene.scale(3.0, 2.0, 1.0);
        this.board.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.scale(3.0, 2.0, 1.0);
        this.back.display();
        this.scene.popMatrix();

  
        this.boardlegs.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.95, -1.5, 0.0);
        this.scene.scale(0.2, 1.0, 0);
        this.legs.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.95, -1.5, 0.0);
        this.scene.scale(0.2, 1.0, 0.0);
        this.legs.display();
        this.scene.popMatrix();

     
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.translate(-0.95, -1.5, 0.0);
        this.scene.scale(0.2, 1.0, 0);
        this.legs_back.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0.0, 1.0, 0.0);
        this.scene.translate(0.95, -1.5, 0.0);
        this.scene.scale(0.2, 1.0, 0.0);
        this.legs_back.display();
        this.scene.popMatrix();

    
        this.scene.setActiveShader(this.progressShader);
        this.scene.pushMatrix();
        this.scene.translate(0.0, -0.5, 0.01);
        this.scene.scale(2.0, 0.4, 1.0);
        this.progressbar.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}