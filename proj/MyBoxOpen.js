class MyBoxOpen extends CGFobject {
    constructor(scene) {
        super(scene);

        this.sphere = new MySphere(scene, 10, 10);
        this.quad = new MyQuad(scene);

        this.initMaterials();
    }

    initMaterials() {
        this.gold = new CGFappearance(this.scene);
        this.gold.setAmbient(1, 1, 1, 1);
        this.gold.setDiffuse(1.0, 1.0, 1.0, 1);
        this.gold.setSpecular(1.0, 1.0, 1.0, 1);
        this.gold.setShininess(10000.0);
        this.gold.loadTexture('images/supplies/gold.jpg');
        this.gold.setTextureWrap('REPEAT', 'REPEAT');

        this.box = new CGFappearance(this.scene);
        this.box.setAmbient(0.9, 0.9, 0.9, 1);
        this.box.setDiffuse(0.0, 0.0, 0.0, 1);
        this.box.setSpecular(0.0, 0.0, 0.0, 1);
        this.box.setShininess(10.0);
        this.box.loadTexture('images/supplies/box_in.jpg');
        this.box.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.box.apply();
        
        this.scene.pushMatrix(); // bottom
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // left
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // right
        this.scene.translate(1, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // front
        this.scene.translate(0, 0, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // back
        this.scene.translate(0, 0, -1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.gold.apply();

        this.scene.translate(0, 0.5, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.sphere.display();
    }
}