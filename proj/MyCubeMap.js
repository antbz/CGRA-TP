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
        this.topMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.topMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.topMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/split_cubemap/top.png');
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.bottomMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/split_cubemap/bottom.png');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.frontMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.frontMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.frontMaterial.setShininess(10.0);
        this.frontMaterial.loadTexture('images/split_cubemap/front.png');
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.backMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.backMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.backMaterial.setShininess(10.0);
        this.backMaterial.loadTexture('images/split_cubemap/back.png');
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.leftMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.leftMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.leftMaterial.setShininess(10.0);
        this.leftMaterial.loadTexture('images/split_cubemap/left.png');
        this.leftMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.rightMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.rightMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.rightMaterial.setShininess(10.0);
        this.rightMaterial.loadTexture('images/split_cubemap/right.png');
        this.rightMaterial.setTextureWrap('REPEAT', 'REPEAT');
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
        // this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.backMaterial.apply(); //back
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.bottomMaterial.apply(); //bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.topMaterial.apply(); //top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        this.leftMaterial.apply();//left side
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        this.rightMaterial.apply();//right side
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
 
        this.scene.popMatrix();
    }
}

