class Scene1 extends Phaser.Scene {

    constructor(){

        super("bootGame");
    }


    preload(){
        this.load.image("background","Assets/background1.png");



        this.load.spritesheet("rabbit", "Assets/rabbit.png", {
            frameWidth: 64/2, 
            frameHeight: 96/3
        });

        this.load.spritesheet("kat", "Assets/kat.png", {
            frameWidth: 128/2, 
            frameHeight: 192/3
        });

        this.load.spritesheet("dog", "Assets/dog.png", {
            frameWidth: 128/2, 
            frameHeight: 192/3
        });
        this.load.spritesheet("cubes", "Assets/cubes.png", {
            frameWidth: 3130/5, 
            frameHeight: 438
        });
        this.load.spritesheet("donut", "Assets/donut.png", {
            frameWidth: 1835/5, 
            frameHeight: 528
        });

        this.load.spritesheet("jellyfish", "Assets/jellyfish.png", {
            frameWidth: 96/3, 
            frameHeight: 96/3
        });

        this.load.spritesheet("panda", "Assets/panda.png", {
            frameWidth: 128/2, 
            frameHeight: 128/2
        });

        this.load.spritesheet("sushi", "Assets/sushi.png", {
            frameWidth: 1835/5, 
            frameHeight: 528
        });


        this.load.spritesheet("pispud", "Assets/pispud.png", {
            frameWidth: 192/3, 
            frameHeight: 192/3
        });

        this.load.spritesheet("feed", "Assets/feed.png", {
            frameWidth: 192/3, 
            frameHeight: 256/4
        });

        this.load.audio("bgm", "Assets/jazz.mp3");


    }


create(){

    //scene start
    this.scene.start("aquarium");

    this.anims.create({
        key: "rabbitMove",
        frames: this.anims.generateFrameNumbers("rabbit", {start: 0, end: 4}),
        frameRate: 15,
        repeat: -1
    })

    this.anims.create({
        key: "katMove",
        frames: this.anims.generateFrameNumbers("kat",{start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    })

    this.anims.create({
        key: "dogMove",
        frames: this.anims.generateFrameNumbers("dog",{start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    })

    this.anims.create({
        key: "cubesMove",
        frames: this.anims.generateFrameNumbers("cubes",{start: 0, end: 1}),
        frameRate: 4 ,
        repeat: -1
    })

    this.anims.create({
        key: "donutMove",
        frames: this.anims.generateFrameNumbers("donut",{start: 0, end: 1}),
        frameRate: 4,
        repeat: -1
    })

    this.anims.create({
        key: "jellyfishMove",
        frames: this.anims.generateFrameNumbers("jellyfish",{start: 0, end: 7}),
        frameRate: 4,
        repeat: -1
    })

    this.anims.create({
        key: "pandaMove",
        frames: this.anims.generateFrameNumbers("panda",{start: 0, end: 2}),
        frameRate: 6,
        repeat: -1
    })

    this.anims.create({
        key: "sushiMove",
        frames: this.anims.generateFrameNumbers("sushi",{start: 0, end: 2}),
        frameRate: 4,
        repeat: -1
    })


    this.anims.create({
        key: "pispudMove",
        frames: this.anims.generateFrameNumbers("pispud",{start: 0, end: 8}),
        frameRate: 14,
        repeat: -1
    })

    this.anims.create({
        key: "feedMove",
        frames: this.anims.generateFrameNumbers("feed",{start: 0, end: 8}),
        frameRate: 11,  
        repeat: -1
    })
   



}
}