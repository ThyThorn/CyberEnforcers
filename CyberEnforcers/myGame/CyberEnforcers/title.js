var titleMusic;

var title = function(game) {};
title.prototype = {
    preload: function() {
        game.load.image('sky', 'phaser/myGame/assets/sky.png');
        game.load.audio('title', 'phaser/myGame/assets/S31-Hit and Run.mp3'); // Load title theme.
    },
    create: function() {
        game.add.sprite(0, 0, 'sky');
        game.add.text(140,160, 'Cyber Enforcers', { fontSize: '40px', fill: '#000' });
        game.add.text(170,250, 'Press Enter to start playing.', { fontSize: '16px', fill: '#000' });
        titleMusic = game.add.audio('title');
        titleMusic.loop = true; // Let title theme loop.
        titleMusic.play(); // Start playing the theme.
    },
    update: function() {
        if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) { // Press the Enter key to begin gameplay.
            game.sound.stopAll(); // All sounds from title state should not be in the next state.
            game.state.start("beginningDialog");
        }
    }
}
