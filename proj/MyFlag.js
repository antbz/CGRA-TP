class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.flag = new MyPlane(scene,20);
        this.flagString = new MyCylinder(scene, 5);

        this.initShaders();
    }

    initShaders() {
        this.ropeMaterial = new CGFappearance(this.scene);
        this.ropeMaterial.setAmbient(0.7,0.7,0.7,1);
        this.ropeMaterial.setDiffuse(0.9,0.9,0.9,1);
        this.ropeMaterial.setShininess(10);
        this.ropeMaterial.loadTexture('images/blimp/flag/rope.jpg');
        this.ropeMaterial.setTextureWrap('REPEAT','REPEAT');

        this.flagshader = new CGFshader(this.scene.gl,"shaders/flag.vert", "shaders/flag.frag");
        this.flagshader.setUniformsValues({uSampler1: 3})
        this.flagshader.setUniformsValues({speed: this.speed});
        this.flagshader.setUniformsValues({timeFactor: this.prevUpdate});

        this.flagmap = new CGFtexture(this.scene,"images/blimp/flag/flag.jpg");
    }

    update(speed, t) {
        this.flagshader.setUniformsValues({speed: speed});
        this.flagshader.setUniformsValues({timeFactor: t / 1000 % 1000});
    }

    display() {
        this.ropeMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.4, -1.48);
        this.scene.scale(0.01, 0.01, 0.65);
        this.scene.rotate(this.scene.pi_2, 1, 0, 0);
        this.scene.translate(0, -0.5, 0);
        this.flagString.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.4, -1.48);
        this.scene.scale(0.01, 0.01, 0.65);
        this.scene.rotate(this.scene.pi_2, 1, 0, 0);
        this.scene.translate(0, -0.5, 0);
        this.flagString.display();
        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.flagshader);
        this.flagmap.bind(3);
        
        this.scene.pushMatrix();

        this.scene.translate(0,0,-2.8);
        this.scene.scale(1,1,2);
        this.scene.rotate(this.scene.pi_2, 0, -1, 0);
        this.flagshader.setUniformsValues( {side: 1} );
        this.flag.display();

        this.flagshader.setUniformsValues( {side: 0} );
        this.scene.rotate(this.scene.pi, 0, -1, 0);
        this.flag.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}