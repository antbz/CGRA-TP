/**
 * MyBox
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBox extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.quad = new MyQuad(scene);
    }
    initMaterials(){
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.9, 0.9, 0.9, 1);
        this.material.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/box.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);

        this.material.apply(); 

        this.scene.pushMatrix(); // front
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // back
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix(); // bottom
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix(); // top
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix(); // left
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix(); // right
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}

