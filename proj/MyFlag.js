class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.flag = new MyPlane(scene,20);
        this.flagString = new MyUnitCubeQuad(scene);

        this.initShaders();
    }

    initShaders() {
        this.flagshader = new CGFshader(this.scene.gl,"shaders/flag.vert", "shaders/flag.frag");
        this.flagshader.setUniformsValues({uSampler1: 3})
        this.flagshader.setUniformsValues({speed: this.speed});
        this.flagshader.setUniformsValues({timeFactor: this.prevUpdate});

        this.flagmap = new CGFtexture(this.scene,"images/theflag.jpg");
    }

    update(speed, t) {
        this.flagshader.setUniformsValues({speed: speed});
        this.flagshader.setUniformsValues({timeFactor: t / 1000 % 1000});
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0,0.4,-1.5);
        this.scene.scale(0.01,0.01,0.65);
        this.flagString.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.4,-1.5);
        this.scene.scale(0.01,0.01,0.65);
        this.flagString.display();
        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.flagshader);
        this.flagmap.bind(3);
        
        this.scene.pushMatrix();

        this.scene.translate(0,0,-2.8);
        this.scene.scale(1,1,2);
        this.scene.rotate(Math.PI/2, 0, -1, 0);
        this.flagshader.setUniformsValues( {side: 1} );
        this.flag.display();

        this.flagshader.setUniformsValues( {side: 0} );
        this.scene.rotate(Math.PI, 0, -1, 0);
        this.flag.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}