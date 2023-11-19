window.onload = function (){
    var game = new Phaser.Game(config);
}


var config = {

    width: 1350,
    height: 700,
    backgroundColor: 0x0B0A695, 
    scene: [Scene1, Scene2, Scene3],
   
    physics: {
        default: "arcade",
        arcade:{
            debug:false
        }
    }
}



var gameSettings = {
    playerSpeed: 400,
}

var superDash = {

    playerSpeed: 1000,
}