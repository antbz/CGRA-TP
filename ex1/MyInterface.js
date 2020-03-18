/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayDiamond').name('Display diamond');
        this.gui.add(this.scene, 'displayTriangle').name('Display triangle');
        this.gui.add(this.scene, 'displayParalellogram').name('Display paralellogram');
        this.gui.add(this.scene, 'displaySmallTriangle').name('Display small triangle');
        this.gui.add(this.scene, 'displayBigTriangle').name('Display big triangle');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}