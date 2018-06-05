var gameOverMusic;
var restartButton;
var quitButton;

var gameOver = function(game) {};
gameOver.prototype = {
    preload: function() {
        game.load.image('restartButton', 'assets/img/attackfullicon.png');
        game.load.image('quitButton', 'assets/img/movefullicon.png');
        game.load.audio('title', 'assets/audio/S31-Hit and Run.mp3'); 
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
    },
    create: function() {
        confirmation = game.add.audio('confirmation');
        restartButton = game.add.button(180, 200, 'restartButton', restart);
        quitButton = game.add.button(180, 300, 'quitButton', quit);
        game.add.text(340,350, 'Click with the mouse to start playing.', { fontSize: '16px', fill: '#000' });
        game.add.text(340, 390, 'Press UP to go to the state currently tested.', { fontSize: '16px', fill: '#000' });
        gameOverMusic = game.add.audio('title');
        gameOverMusic.loop = true; // Let title theme loop.
        gameOverMusic.play(); // Start playing the theme.
    },

}

restart = function() {
    game.sound.stopAll(); 
    confirmation.play();
    if(whichLevel == 1) {
        game.state.start("level1Battle");
    }
    else if(whichLevel == 2) {
        game.state.start("level2Battle");
    }
}

quit = function() {
    game.sound.stopAll(); 
    confirmation.play();
    game.state.start("title");
}