class Scene2 extends Phaser.Scene {

    constructor(){

        super("aquarium");
        this.spriteArray = [];

    }

create(){
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
     
    

     this.bgm = this.sound.add('bgm', { loop: true, volume: 0.7 });
    this.bgm.play(); 
 
    this.rabbit = this.physics.add.sprite(2000,16,"rabbit");
    this.rabbit.setVelocity(100,100);
    this.rabbit.play("rabbitMove");
    this.rabbit.setScale(5);
    this.rabbit.setCollideWorldBounds(true);
    this.rabbit.setInteractive();
    this.rabbit.setBounce(1);
    /* this.rabbit.on('pointerdown', () => {
        // Transition to another scene when the rabbit is clicked
        this.scene.start('miniGame');  // Replace 'nextSceneName' with the name of your next scene
    });
 */
    
    

    this.bee = this.physics.add.sprite(1000,16,"kat");
    this.bee.setVelocity(100,100);
    this.bee.play("katMove");
    this.bee.setScale(4);
    this.bee.setCollideWorldBounds(true);
    this.bee.setInteractive();
    this.bee.setBounce(1);

    this.dog = this.physics.add.sprite(500,16,"dog");
    this.dog.setVelocity(100,100);
    this.dog.play("dogMove");
    this.dog.setScale(2);
    this.dog.setCollideWorldBounds(true);
    this.dog.setInteractive();
    this.dog.setBounce(1);

    this.cubes = this.physics.add.sprite(500,166,"cubes");
    this.cubes.setVelocity(200,100);
    this.cubes.play("cubesMove");
    this.cubes.setScale(0.4);
    this.cubes.setCollideWorldBounds(true);
    this.cubes.setInteractive();
    this.cubes.setBounce(1);

    this.donut = this.physics.add.sprite(50,166,"donut");
    this.donut.setVelocity(200,100);
    this.donut.play("donutMove");
    this.donut.setScale(0.4);
    this.donut.setCollideWorldBounds(true); 
    this.donut.setInteractive();
    this.donut.setBounce(1);
    
    
    this.jellyfish = this.physics.add.sprite(300,566,"jellyfish");
    this.jellyfish.setVelocity(200,100);
    this.jellyfish.play("jellyfishMove");
    this.jellyfish.setScale(4);
    this.jellyfish.setCollideWorldBounds(true);
    this.jellyfish.setInteractive();
    this.jellyfish.setBounce(1);

    this.panda = this.physics.add.sprite(700,566,"panda");
    this.panda.setVelocity(100,100);
    this.panda.play("pandaMove");
    this.panda.setScale(2.1);
    this.panda.setCollideWorldBounds(true);
    this.panda.setInteractive();
    this.panda.setBounce(1);

    this.sushi = this.physics.add.sprite(100,400,"sushi");
    this.sushi.setVelocity(100,100);
    this.sushi.play("sushiMove");
    this.sushi.setScale(0.3);
    this.sushi.setCollideWorldBounds(true);
    this.sushi.setInteractive();
    this.sushi.setBounce(1);

    this.pispud = this.physics.add.sprite(60,60,"pispud");
    this.pispud.play("pispudMove");
    this.pispud.setScale(1.5);

   // Add a feed sprite initially hidden
   this.feed = this.physics.add.sprite(60, 120, "feed");
   this.feed.play("feedMove");
   this.feed.setScale(3);
   this.feed.setVisible(false);

     // Populate the spriteArray with your sprites
     this.spriteArray.push(this.rabbit, this.bee, this.dog, this.cubes, this.donut, this.jellyfish, this.panda, this.sushi);

    




 // Add a pointerdown event listener for the feed
 this.input.on('pointerdown', (pointer) => {
    // Show feed sprite at the pointer position
    this.feed.setPosition(pointer.x, pointer.y);
    this.feed.setVisible(true);

    // Set a timeout to hide the feed sprite after 2 seconds
    setTimeout(() => {
        this.feed.setVisible(false);
    }, 2000);

    // Tween all moving sprites to the feed position
    this.tweens.add({
        targets: this.spriteArray,
        x: this.feed.x,
        y: this.feed.y,
        duration: 2000,
        ease: 'Linear',
        onComplete: () => {
            // Increment the scale of each sprite
            this.spriteArray.forEach(sprite => {
                sprite.setScale(sprite.scaleX + 0.03);
            });
        }
    });

    this.tweens.add({
        targets: this.panda,
        x: this.feed.x,
        y: this.feed.y,
        duration: 2000,
        ease: 'Linear',
        onComplete: () => {
            // Increment the scale of the panda
            this.panda.setScale(this.panda.scaleX + 0.001);
        }
    });
});



// Add a pointerdown event listener for the pispud
this.input.on('pointerdown', (pointer) => {
    // Tween pispud to follow the mouse
    this.tweens.add({
        targets: this.pispud,
        x: pointer.x,
        y: pointer.y,
        duration: 500, // Adjust the duration as needed
        ease: 'Linear',
        onComplete: () => {
            // Tween pispud to go back to its original position
            this.tweens.add({
                targets: this.pispud,
                x: 60,
                y: 60,
                duration: 500, // Adjust the duration as needed
                ease: 'Linear'
            });
        }
    });
});
 


   

}

update(){


}

}