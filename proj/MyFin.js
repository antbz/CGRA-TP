class MyFin extends CGFobject {
    constructor(scene) {
        super(scene);

        this.triangle = new MyTriangle(scene);
        this.quad = new MyQuad2(scene);

        this.initMaterials();
    }

    initMaterials() {
        this.triangleMaterial = new CGFappearance(this.scene);
        this.triangleMaterial.setAmbient(0.7,0.7,0.7,1);
        this.triangleMaterial.setDiffuse(0.9,0.9,0.9,1);
        this.triangleMaterial.setShininess(10);
        this.triangleMaterial.loadTexture('images/blimp/fin/fin_trig.png');
        this.triangleMaterial.setTextureWrap('REPEAT','REPEAT');

        this.quadMaterial = new CGFappearance(this.scene);
        this.quadMaterial.setAmbient(0.7,0.7,0.7,1);
        this.quadMaterial.setDiffuse(0.9,0.9,0.9,1);
        this.quadMaterial.setShininess(10);
        this.quadMaterial.loadTexture('images/blimp/fin/fin_quad.png');
        this.quadMaterial.setTextureWrap('REPEAT','REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1/3, 1/3, 1/3);

        this.triangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1/Math.sqrt(8), 1/Math.sqrt(8));
        this.scene.rotate(this.scene.pi_2, 0, 1, 0);
        this.scene.rotate(-this.scene.pi_4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.quadMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(this.scene.pi_2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();



        this.scene.popMatrix();
    }
}