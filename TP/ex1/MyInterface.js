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
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');
        this.gui.add(this.scene, 'displayPara').name('Paralel');
        this.gui.add(this.scene, 'displayTriangleS').name('TriangleS');
        this.gui.add(this.scene, 'displayTriangleB').name('TriangleB');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');
        
        return true;
    }
}