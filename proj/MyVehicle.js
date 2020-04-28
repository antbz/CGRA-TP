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
        this.autoPilotTime = -1;

        this.prevUpdate = 0;
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x_pos, this.y_pos, this.z_pos);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);

        // Balloon
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

    autoPilotUpdate(t) {
        if (this.autoPilotTime == -1) {
            this.autoPilotTime = t;
        }

        var time = ((t - this.autoPilotTime) % 5000) / 5000.0;
        var curr_ang = 2 * Math.PI * time;

        this.x_pos = -5 * Math.cos(curr_ang) + this.ap_x_coord;
        this.z_pos = 5 * Math.sin(curr_ang) + this.ap_z_coord;

        this.angle = curr_ang * 180 / Math.PI;
    }

    autoPilotToggle() { 
        this.autoPilot = true;
        this.ap_x_coord = this.x_pos + 5 * Math.cos(this.angle);
        this.ap_z_coord = this.z_pos + 5 * Math.sin(this.angle);
    }

    update(t) {
        if (this.prevUpdate == 0) {
            this.prevUpdate = t;
        }
        var elapsed = t - this.prevUpdate;
        this.prevUpdate = t;

        if (this.autoPilot) {
            t = t
            this.autoPilotUpdate(t);
        } else {        
            this.x_pos += this.speed * Math.sin(this.angle * Math.PI / 180) * (elapsed / 1000.0);
            this.z_pos += this.speed * Math.cos(this.angle * Math.PI / 180) * (elapsed / 1000.0);
            this.prop_ang = (this.prop_ang + this.speed) % (Math.PI * 2);
        }
    }

    turn(val) {
        this.angle += val;
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