var gameOverScreen;
var gameOverMusic;
var restartButton;
var quitButton;

var gameOver = function(game) {};
gameOver.prototype = {
    preload: function() {
        game.load.image('gameOverScreen', 'assets/img/gameOverScreen.png');
        game.load.image('restartButton', 'assets/img/retryfullicon.png');
        game.load.image('quitButton', 'assets/img/menufullicon.png');
        game.load.audio('melancholy', 'assets/audio/Melancholy.wav'); 
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
    },
    create: function() {
        gameOverScreen = game.add.sprite(0, 0, 'gameOverScreen')
        confirmation = game.add.audio('confirmation');
        restartButton = game.add.button(400, 350, 'restartButton', restart);
        quitButton = game.add.button(400, 410, 'quitButton', quit);
        gameOverMusic = game.add.audio('melancholy');
        gameOverMusic.loop = true; // Let theme loop.
        gameOverMusic.play(); // Start playing the theme.
    },

}

restart = function() {
    game.sound.stopAll(); 
    confirmation.play();
    if(whichLevel == 1) { // whichLevel is a global variable that is changed in each battle, so this is a way to return to the battle without having to make multiple states.
        game.state.start("level1Battle");
    }
    else if(whichLevel == 2) {
        game.state.start("level2Battle");
    }
    else if(whichLevel == 3) {
        game.state.start("level3Battle");
    }
    else if(whichLevel == 4) {
        game.state.start("level4Battle");
    }
}

quit = function() {
    game.sound.stopAll(); 
    confirmation.play();
    game.state.start("title");
}
