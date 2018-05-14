// Adapted from Nathan Altice's states 03.js
// 4/10/18
// Simple 3-State Switcher w/ Parameter Passing between States

// define game
var game = new Phaser.Game(800, 600, Phaser.AUTO);

// define MainMenu state and methods
var MainMenu = function(game) {};
MainMenu.prototype = {
	init: function() {
		this.level = 1;
	},
	preload: function() {
		console.log('MainMenu: preload');

	},
	create: function() {
		console.log('MainMenu: create');
		game.stage.backgroundColor = "#facade";
		this.add.text(50, 100, 'Hit Space to start', {fontSize: '32px', fill: 'white'});
		console.log('level: ' + this.level);
	},
	update: function() {
		// main menu logic
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			// pass this.level to next state
			game.state.start('GamePlay', true, false, this.level);
		}
	}
}

// define GamePlay state and methods
var GamePlay = function(game) {};
GamePlay.prototype = {
	init: function(lvl) {
		console.log('GamePlay: init');
		// grab lvl from previous state
		this.level = lvl+1;
	},

	preload: function() {
		console.log('GamePlay: preload');
		this.game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');
	},
	create: function() {
		console.log('GamePlay: create');
		game.stage.backgroundColor = "#ccddaa";
		//score logic
		scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
		game.physics.startSystem(Phaser.Physics.ARCADE);
		cursors = game.input.keyboard.createCursorKeys();
		//player logic
	  player = game.add.sprite(100, 300, 'atlas');
		game.physics.arcade.enable(player);
		player.animations.add('Soldierwalk', Phaser.Animation.generateFrameNames('sprite', 1, 5), 5, true);
		player.animations.play('Soldierwalk');


	  //diamonds = game.add.group();
		//diamonds.enableBody = true;
		this.makeDiamond();
		this.collectDiamond();


		console.log('level: ' + this.level);
	},
	makeDiamond: function(){
		var diamond = diamonds.create(this.rnd.integerInRange(20, 500), game.world.height-40, 'atlas','diamond');
	        //  create gravity
					game.physics.arcade.enable(player);
					diamond.enableBody = true;
	        diamond.body.gravity.y = 6;
	        //  This gives each diamond a slightly random bounce value
	        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;

	},
	collectDiamond: function(player, diamond) {
					// Removes the diamond from the screen
					diamond.kill();
					//  Add and update the score
					score += 25;
					scoreText.text = 'Score: ' + score;
	},

	update: function() {
		// player gameplay logic
		player.body.velocity.x = 150;
		player.body.bounce.y = 0.2;
	  player.body.gravity.y = 800;
	  player.body.collideWorldBounds = true;
		game.physics.arcade.overlap(player, diamond, collectDiamond, null, this);
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('GameOver', true, false, this.level);
		}
	}
}

// define GameOver state and methods
var GameOver = function(game) {};
GameOver.prototype = {
	init: function(lvl) {
		this.level = lvl+1;
	},
	preload: function() {
		console.log('GameOver: preload');
	},
	create: function() {
		console.log('GameOver: create');
		game.stage.backgroundColor = "#bb11ee";
		this.add.text(50, 100, 'Hit Space to return to start', {fontSize: '32px', fill: 'white'});
		this.add.text(50, 150, 'Hit w to restart game', {fontSize: '32px', fill: 'white'});
		console.log('level: ' + this.level);
	},
	update: function() {
		// GameOver logic, different keys do different options
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('MainMenu');
		}
		if(game.input.keyboard.isDown(Phaser.Keyboard.W)) {
			game.state.start('GamePlay');
		}
	}
}

// add states to StateManager and start MainMenu
game.state.add('MainMenu', MainMenu);
game.state.add('GamePlay', GamePlay);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');
