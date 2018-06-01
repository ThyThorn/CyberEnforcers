var titleMusic;

var title = function(game) {};
title.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('logo', 'assets/img/titlescreen.png');
        game.load.audio('title', 'assets/audio/S31-Hit and Run.mp3'); // Load title theme.
    },
    create: function() {
        var park = game.add.sprite(0, 0, 'sky');
        park.scale.setTo(2, 2);
        game.add.sprite(220, 100, 'logo');
        game.add.text(340,350, 'Press Enter to start playing.', { fontSize: '16px', fill: '#000' });
        titleMusic = game.add.audio('title');
        titleMusic.loop = true; // Let title theme loop.
        titleMusic.play(); // Start playing the theme.
    },
    update: function() {
        if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) { // Press the Enter key to begin the next scene.
            game.sound.stopAll(); // All sounds from title state should not be in the next state.
            game.camera.fade(0x000000); // Make the screen fade to black.
            game.camera.onFadeComplete.add(this.beginScene1, this); // Once the screen fades to black, do this function.
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) { // Press the Enter key to begin the next scene.
            game.sound.stopAll();
            game.state.start('level1Battle');
        }
    },

    beginScene1: function() {
        game.state.start("beginningDialog"); // Go to the next state.
    }
}
