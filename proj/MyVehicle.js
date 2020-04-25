class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangle = new MyTriangle(scene);
    }
    
    display() {
        this.scene.pushMatrix();

        this.scene.scale(1/Math.sqrt(8), 1, 1);
        this.scene.translate(0, 0, -Math.sqrt(2)/2);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangle.display();

        this.scene.popMatrix();
    }
}