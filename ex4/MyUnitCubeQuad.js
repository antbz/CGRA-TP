/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.quad1 = new MyQuad(this.scene);
        this.quad2 = new MyQuad(this.scene);
        this.quad3 = new MyQuad(this.scene);
        this.quad4 = new MyQuad(this.scene);
        this.quad5 = new MyQuad(this.scene);
        this.quad6 = new MyQuad(this.scene);
        


        /*this.sideTexture = new CGFtexture(this.scene, 'images/mineSide.png');
        this.topTexture = new CGFtexture(this.scene, 'images/mineTop.png');
        this.bottomTexture = new CGFtexture(this.scene, 'images/mineBottom.png');*/
       
        
    }
    initMaterials(){
        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture('images/mineSide.png');
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/mineTop.png');
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/mineBottom.png');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');



    }
    display(){
        
   

   
        this.sideMaterial.apply(); //front
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,0);
     
        this.quad1.display();
        this.scene.popMatrix();
 
    
        this.sideMaterial.apply(); //back
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-1);

        this.scene.rotate(Math.PI,0,1.0,0);
 
        this.quad2.display();
        this.scene.popMatrix();
       
       
        this.bottomMaterial.apply(); //bottom
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,-0.5);
   
        this.scene.rotate(Math.PI/2,1.0,0,0);

        this.quad3.display();
        this.scene.popMatrix();
     
        this.topMaterial.apply(); //top
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,-0.5);
        
        this.scene.rotate(-Math.PI/2,1.0,0,0);

        this.quad4.display();
        this.scene.popMatrix();
       
        this.sideMaterial.apply();//left side
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,-0.5);
        
        this.scene.rotate(Math.PI/2,0.0,1.0,0);

        this.quad5.display();
        this.scene.popMatrix();
       
        
        this.sideMaterial.apply();//right side
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,-0.5);
        this.scene.rotate(-Math.PI/2,0.0,1.0,0);

        this.quad6.display();
        this.scene.popMatrix();
    


        
        this.scene.pushMatrix();

 

    }
    




    updateTexCoords(coords){
        this.quad1.updateTexCoords(coords);
        this.quad2.updateTexCoords(coords);
        this.quad3.updateTexCoords(coords);
        this.quad4.updateTexCoords(coords);
        this.quad5.updateTexCoords(coords);
        this.quad6.updateTexCoords(coords);
    
    }
}

