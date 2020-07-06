class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);

        // track rockets firing status
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        // left/right movement
        
        /*if (keyLEFT.isDown && this.x >= 47) {
            this.x -= 2;
        } else if (keyRIGHT.isDown && this.x <= 578) {
            this.x += 2;
        }*/
        let mousex = game.input.mousePointer.x
        if (mousex >= 47 && mousex <= 578) {
            this.x = mousex;
        }
        
        // fire button
        if (game.input.mousePointer.isDown && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired move up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // reset on miss
        if (this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}