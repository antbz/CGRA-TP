class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.sphere = new MySphere(scene, 20, 20);
        this.cylinder = new MyCylinder(scene, 20);
        this.fin = new MyFin(scene);
        this.propeller = new MyPropeller(scene);

        this.angle = 0;
        this.speed = 0;
        this.x_pos = 0; this.y_pos = 0; this.z_pos = 0;

        this.fin_dir = 0;
        this.prop_ang = 0;

        this.autoPilot = false;
        this.x_centre = 0;
        this.z_centre = 0;

        this.prevUpdate = 0;

        this.baloon = new CGFappearance(this.scene);
        this.baloon.setAmbient(0.7,0.7,0.7,1);
        this.baloon.setDiffuse(0.9,0.9,0.9,1);
        this.baloon.setShininess(10);
        this.baloon.loadTexture('images/blimp/balloon.png');
        this.baloon.setTextureWrap('REPEAT','REPEAT');
        
        this.resto = new CGFappearance(this.scene);
        this.resto.setAmbient(0.7,0.7,0.7,1);
        this.resto.setDiffuse(0.9,0.9,0.9,1);
        this.resto.setShininess(10);
        this.resto.loadTexture('images/blimp/aperture_fin.png');
        this.resto.setTextureWrap('REPEAT','REPEAT');
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x_pos, this.y_pos, this.z_pos);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);

        // Balloon
        this.baloon.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.sphere.display();
        this.scene.popMatrix();

        // Cockpit
        
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(0.1, 0.1, 0.7);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinder.display();
        this.scene.popMatrix();

        // Cockpit tips
        
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0.35);
        this.scene.scale(0.1, 0.1, 0.1);
        this.sphere.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.35);
        this.scene.scale(0.1, 0.1, 0.1);
        this.sphere.display();
        this.scene.popMatrix();

        // Engines
        this.scene.pushMatrix();
        this.scene.translate(0.1, -0.52, -0.35);
        this.scene.scale(0.05, 0.05, 0.1);
        this.sphere.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.1, -0.52, -0.35);
        this.scene.scale(0.05, 0.05, 0.1);
        this.sphere.display();
        this.scene.popMatrix();

        // Propellers
        this.scene.pushMatrix();
        this.scene.translate(-0.1, -0.52, -0.45);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(this.prop_ang, 0, 0, 1);
        this.propeller.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.1, -0.52, -0.45);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(this.prop_ang, 0, 0, 1);
        this.propeller.display();
        this.scene.popMatrix();

        // Fins
        // Vertical
        this.resto.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 1/3, -1);
        this.scene.rotate(this.fin_dir, 0, 1, 0);
        this.fin.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, -1/3, -1);
        this.scene.rotate(this.fin_dir, 0, 1, 0);
        this.fin.display();
        this.scene.popMatrix();
        // Horizontal
        this.scene.pushMatrix();
        this.scene.translate(1/3, 0, -1);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.fin.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1/3, 0, -1);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.fin.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    autoPilotToggle() { 
        this.autoPilot = true;
        var ang = (this.angle + 90) * Math.PI / 180;
        this.x_centre = this.x_pos + 5*Math.sin(ang);
        this.z_centre = this.z_pos + 5*Math.cos(ang);
    }

    update(t) {
        if (this.prevUpdate == 0) {
            this.prevUpdate = t;
        }
        var elapsed = t - this.prevUpdate;
        this.prevUpdate = t;

        if (this.autoPilot) {
            this.x_pos = -5 * Math.cos(this.angle * Math.PI / 180) + this.x_centre;
            this.z_pos = 5 * Math.sin(this.angle * Math.PI / 180) + this.z_centre;
            this.turn(360 * elapsed / 5000.0);
            this.prop_ang = (this.prop_ang + 20) % (Math.PI * 2);
        } else {      
            this.x_pos += this.speed * Math.sin(this.angle * Math.PI / 180) * (elapsed / 1000.0);
            this.z_pos += this.speed * Math.cos(this.angle * Math.PI / 180) * (elapsed / 1000.0);
            // TODO melhorar hierarquia entre os objetos
            this.prop_ang = (this.prop_ang + this.speed) % (Math.PI * 2);
        }
    }

    turn(val) {
        this.angle += val;
        this.angle %= 360;
        this.fin_dir = -val*3 * Math.PI / 180;
    }

    accelerate(val) {
        this.speed += val;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    reset() {
        this.x_pos = 0;
        this.y_pos = 0;
        this.z_pos = 0;
        this.angle = 0;
        this.speed = 0;
        this.fin_dir = 0;
        this.prop_ang = 0;
        this.autoPilot = false;
    }
}