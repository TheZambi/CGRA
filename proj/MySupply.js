/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */

const SupplyStates =  {      
    INACTIVE: 0,      
    FALLING: 1,      
    LANDED: 2  
};

class MySupply extends CGFobject {

	constructor(scene) {
		super(scene);
        this.cube = new MyUnitCubeQuadReversed(this.scene);
        this.landed = new MyLandedSupply(this.scene);
        
        this.state = SupplyStates.INACTIVE;

        this.text = new CGFappearance(this.scene);
        this.text.setDiffuse(0.6,0.6,0.6,1.0);
        this.text.setSpecular(0.6,0.6,0.6,1.0);
        this.text.setShininess(1.0);
        this.text.loadTexture('images/crate.png');

        this.position = [0.0,9.0,0.0];
    }

    reset()
    {
        this.position = [0.0,9.0,0.0];
        this.state = SupplyStates.INACTIVE;
    }
    
    update () {

        if (this.state == SupplyStates.FALLING)
            this.position[1] = this.position[1] - 150/1000;
        
        
        if (this.position[1] <= 0.5) {
            this.land();
        }

    }

    drop (dropPosition) {
        this.state = SupplyStates.FALLING;
        this.position[0] = dropPosition[0];
        this.position[2] = dropPosition[2];
    }
    land () {
        this.position[1] += 0.05;
        this.state = SupplyStates.LANDED;
    }
    display()
    {   
        this.text.apply();
        if(this.state == SupplyStates.FALLING){
            this.scene.pushMatrix();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.cube.display();
            this.scene.popMatrix();
        }
        else if(this.state==SupplyStates.LANDED)
        {
            this.scene.pushMatrix();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.landed.display();
            this.scene.popMatrix();
        }
        
    }
}