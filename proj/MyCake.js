class MyCake extends CGFobject {
    constructor(scene) {
        super(scene);

        this.body = new MyCylinder(scene, 10);
        this.top = new MySemiSphere(scene, 10, 5);

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
        this.box.loadTexture('images/supplies/cake.jpg');
        this.box.setTextureWrap('REPEAT', 'REPEAT');

        this.cherry = new CGFappearance(this.scene);
        this.cherry.setAmbient(1, 1, 1, 1);
        this.cherry.setDiffuse(1, 1, 1, 1);
        this.cherry.setSpecular(1, 1, 1, 1);
        this.cherry.setShininess(1000.0);
        this.cherry.loadTexture('images/supplies/cherry.png');
        this.cherry.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.box.apply();
        this.body.display();

        this.gold.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(1, 0.3, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        this.cherry.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 1.28, 0);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();        
    }
}