class Scene3 extends Phaser.Scene {

    constructor(){

        super("miniGame");
        

    }


    create(){
     this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
    }
}