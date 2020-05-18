const SupplyStates = {
    INACTIVE : 0,
    FALLING : 1,
    LANDED : 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);

        this.state = SupplyStates.INACTIVE;
        this.x = 0; this.y = 9; this.z = 0;

        this.box = new MyBox(scene);
        this.boxOpen = new MyBoxOpen(scene);
    }

    update(elapsed) {
        if (this.state == SupplyStates.FALLING) {
            this.y -= elapsed * (8.9 / 3000.0);
            if (this.y <= 0.1) {
                this.land();
            }
        }
    }

    drop(x, z) {
        this.state = SupplyStates.FALLING;
        this.x = x;
        this.z = z;
    }

    land() {
        this.y = 0.1;
        this.state = SupplyStates.LANDED;
    }

    reset() {
        this.y = 9;
        this.state = SupplyStates.INACTIVE;
    }

    display() {
        if (this.state != SupplyStates.INACTIVE) {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            if (this.state == SupplyStates.FALLING) {
                this.box.display();
            } else {
                this.boxOpen.display();
            }
            this.scene.popMatrix();
        }
    }
}
