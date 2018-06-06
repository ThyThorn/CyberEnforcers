var titleMusic;
var title;
var startButton;
var creditsButton;

var title = function(game) {};
title.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('logo', 'assets/img/titlescreen.png');
        game.load.image('startButton', 'assets/img/startfullicon.png');
        game.load.image('creditsButton', 'assets/img/creditsfullicon.png');
        game.load.audio('title', 'assets/audio/S31-Hit and Run.mp3'); // Load title theme.
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
    },
    create: function() {
        title = game.add.sprite(0, 0, 'sky');
        title.scale.setTo(2, 2);
        confirmation = game.add.audio('confirmation');
        game.add.sprite(220, 100, 'logo');
        startButton = game.add.button(400, 350, 'startButton', startGame);
        creditsButton = game.add.button(400, 410, 'creditsButton', startCredits);
        titleMusic = game.add.audio('title');
        titleMusic.loop = true; // Let title theme loop.
        titleMusic.play(); // Start playing the theme.
    },

    update: function() {
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) { // This will be deleted later.
            game.sound.stopAll(); // All sounds from title state should not be in the next state.
            confirmation.play();
            game.camera.fade(0x000000); // Make the screen fade to black.
            game.camera.onFadeComplete.add(this.battle1, this); // Once the screen fades to black, do this function.
        }
    },

    battle1: function() {
        game.state.start("gameOver");
    },
}

startGame = function() {
    game.sound.stopAll(); // All sounds from title state should not be in the next state.
    confirmation.play();
    game.camera.fade(0x000000, 2500); // Make the screen fade to black.
    game.camera.onFadeComplete.add(beginScene1, this); // Once the screen fades to black, do this function.
}

beginScene1 = function() {
    game.state.start("prolog"); // Go to the next state.
},

startCredits = function() {
    game.sound.stopAll(); // All sounds from title state should not be in the next state.
    confirmation.play();
    game.camera.fade(0x000000, 2500); // Make the screen fade to black.
    game.camera.onFadeComplete.add(goToCredits, this); // Once the screen fades to black, do this function.
}

goToCredits = function() {
    game.state.start("credits");        
}
