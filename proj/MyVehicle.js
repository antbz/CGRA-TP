class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangle = new MyTriangle(scene);

        this.angle = 0;
        this.speed = 0;
        this.x_pos = 0; this.y_pos = 0; this.z_pos = 0;
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x_pos, this.y_pos, this.z_pos);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);

        this.scene.pushMatrix();

        this.scene.scale(1/Math.sqrt(8), 1, 1);
        this.scene.translate(0, 0, -Math.sqrt(2)/2);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangle.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    update() {
        this.x_pos += this.speed * Math.sin(this.angle * Math.PI / 180);
        this.z_pos += this.speed * Math.cos(this.angle * Math.PI / 180);
    }

    turn(val) {
        this.angle += val;
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
    }
}