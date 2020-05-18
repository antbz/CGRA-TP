/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.quad = new MyQuad(scene);
    }
    initMaterials(){
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(1, 1, 1, 1);
        this.topMaterial.setDiffuse(1, 1, 1, 1);
        this.topMaterial.setSpecular(1, 1, 1, 1);
        this.topMaterial.setShininess(100.0);
        this.topMaterial.loadTexture('images/split_cubemap/top.png');
        this.topMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(1, 1, 1, 1);
        this.bottomMaterial.setDiffuse(1, 1, 1, 1);
        this.bottomMaterial.setSpecular(1, 1, 1, 1);
        this.bottomMaterial.setShininess(100.0);
        this.bottomMaterial.loadTexture('images/split_cubemap/bottom.png');
        this.bottomMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(1, 1, 1, 1);
        this.frontMaterial.setDiffuse(1, 1, 1, 1);
        this.frontMaterial.setSpecular(1, 1, 1, 1);
        this.frontMaterial.setShininess(100.0);
        this.frontMaterial.loadTexture('images/split_cubemap/front.png');
        this.frontMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(1, 1, 1, 1);
        this.backMaterial.setDiffuse(1, 1, 1, 1);
        this.backMaterial.setSpecular(1, 1, 1, 1);
        this.backMaterial.setShininess(100.0);
        this.backMaterial.loadTexture('images/split_cubemap/back.png');
        this.backMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(1, 1, 1, 1);
        this.leftMaterial.setDiffuse(1, 1, 1, 1);
        this.leftMaterial.setSpecular(1, 1, 1, 1);
        this.leftMaterial.setShininess(100.0);
        this.leftMaterial.loadTexture('images/split_cubemap/left.png');
        this.leftMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(1, 1, 1, 1);
        this.rightMaterial.setDiffuse(1, 1, 1, 1);
        this.rightMaterial.setSpecular(1, 1, 1, 1);
        this.rightMaterial.setShininess(100.0);
        this.rightMaterial.loadTexture('images/split_cubemap/right.png');
        this.rightMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }
    updateTexture() {
        if (this.scene.landscapeTexture == 0) {
            this.topMaterial.loadTexture('images/split_cubemap/top.png');
            this.bottomMaterial.loadTexture('images/split_cubemap/bottom.png');
            this.frontMaterial.loadTexture('images/split_cubemap/front.png');
            this.backMaterial.loadTexture('images/split_cubemap/back.png');
            this.leftMaterial.loadTexture('images/split_cubemap/left.png');
            this.rightMaterial.loadTexture('images/split_cubemap/right.png');
        } else if (this.scene.landscapeTexture == 1) {
            this.topMaterial.loadTexture('images/split_cubemap2/top.png');
            this.bottomMaterial.loadTexture('images/split_cubemap2/bottom.png');
            this.frontMaterial.loadTexture('images/split_cubemap2/front.png');
            this.backMaterial.loadTexture('images/split_cubemap2/back.png');
            this.leftMaterial.loadTexture('images/split_cubemap2/left.png');
            this.rightMaterial.loadTexture('images/split_cubemap2/right.png');
        }
    }
    display(){
        this.scene.pushMatrix();

        // this.scene.scale(25, 25, 25);
        this.scene.scale(50, 50, 50);

        this.frontMaterial.apply(); //front
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.backMaterial.apply(); //back
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(this.scene.pi, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.bottomMaterial.apply(); //bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-this.scene.pi_2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.topMaterial.apply(); //top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(this.scene.pi_2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.leftMaterial.apply();//left side
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(this.scene.pi_2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        this.rightMaterial.apply();//right side
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-this.scene.pi_2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
 
        this.scene.popMatrix();
    }
}

