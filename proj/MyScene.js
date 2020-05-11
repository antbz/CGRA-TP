/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.unitCylinder = new MyCylinder(this, 200);
        this.cubeMap = new MyCubeMap(this);
        this.vehicle = new MyVehicle(this);
        this.terrain = new MyTerrain(this);
        this.billboard = new MyBillboard(this);
        this.supplies = [];
        this.supplyID = 0;
        for (var i = 0; i < 5; i++) {
            this.supplies.push(new MySupply(this));
        }

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.speedFactor = 1;
        this.scaleFactor = 1;
        this.landscapeTexture = 0;
        this.displayFlag = true;
        this.displayBillboard = true;

        // Landscape textures
        this.lsTextureList = {
            'Default' : 0,
            'Mars' : 1
        };

        this.cooldown = 0;
    }
    initLights() {
        this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.5, 0.1, 500, vec3.fromValues(30, 20, 30), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;

        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            if (!this.vehicle.autoPilot)
                this.vehicle.accelerate(0.2 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            if (!this.vehicle.autoPilot)
                this.vehicle.accelerate(-0.2 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            if (!this.vehicle.autoPilot)
                this.vehicle.turn(5);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            if (!this.vehicle.autoPilot)
                this.vehicle.turn(-5);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.vehicle.reset();
            for (var i = 0; i < this.supplyID; i++) {
                this.supplies[i].reset();
            }
            this.billboard.reset();
            this.supplyID = 0;
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            if (!this.vehicle.autoPilot)
                this.vehicle.autoPilotToggle();
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyL") && this.cooldown == 0) {
            text += " L ";
            
            this.cooldown = 15;
            if (this.supplyID < this.supplies.length) {
                this.supplies[this.supplyID].drop(this.vehicle.x_pos, this.vehicle.z_pos);
                this.supplyID++;
                this.billboard.update();
            }
            keysPressed = true;
        }
        if (keysPressed) {
            
            console.log(text);
        } else if (!this.vehicle.autoPilot) {
            this.vehicle.turn(0);
        }
    }
    updateLSTexture() {
        this.cubeMap.updateTexture();
        this.terrain.updateTexture();
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        if (this.cooldown > 0) { this.cooldown--; }
        this.checkKeys();
        this.vehicle.update(t);
        for (var i = 0; i < this.supplyID; i++) {
            this.supplies[i].update(t);
        }

    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis) {
            this.axis.display();
        }

        this.setDefaultAppearance();
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.pushMatrix();
        this.translate(0, 10, 0);
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.vehicle.display();
        this.popMatrix();

        this.terrain.display();
        for (var i = 0; i < this.supplyID; i++) {
            this.supplies[i].display();
        }

        this.cubeMap.display();
        if(this.displayBillboard)
            this.billboard.display();

        // ---- END Primitive drawing section
    }
}