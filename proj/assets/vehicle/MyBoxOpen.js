class MyBoxOpen extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cake = new MyCake(scene);
        this.quad = new MyQuad(scene);

        this.initMaterials();
    }

    initMaterials() {
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
        this.scene.rotate(-this.scene.pi_2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // left
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(-this.scene.pi_2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // right
        this.scene.translate(1, 0, 0);
        this.scene.rotate(-this.scene.pi_2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // front
        this.scene.translate(0, 0, 1);
        this.scene.rotate(-this.scene.pi_2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // back
        this.scene.translate(0, 0, -1);
        this.scene.rotate(-this.scene.pi_2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.cake.display();
        this.scene.popMatrix();
    }
}