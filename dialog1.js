var game = new Phaser.Game(1500, 600, Phaser.AUTO, '');

var dialog1 = [
	"Kaito: My name is Kaito Ichiki.",
	"I am a member of an organization called the Cybernetwork Enforcement\nand Regulation Commission.",
	"It's pretty long, though, so we call it CERC for short.",
	"We of CERC are in charge of maintaining the City's peace.",
	"Years ago, mankind had at last made something truly awesome,\nafter years of research in computer networks.",
	"There is now the Virtual World, which is a great advancement of the Internet.",
	"Our lives had already involved the Internet a lot more,\nbut the Virtual World only marked that we should not stop there.",
	"Thanks to the Virtual World, we don't even have to manually handle\nmuch of the technology in our daily lives. It's rather handy.",
	"Of course, that comes with its downfalls. It makes it easier for evildoers to work havoc.",
	"Computer viruses and other cybernetic fiends still are these days.",
	"And somehow, a few years ago, the monsters could at last\nmake their way from their virtual den to our real world!",
	"Awful! They hurt many people, and by the time they were slain,\n more had come to be in the Virtual World.",
	"An easy way to deal with the problem would have been to delete the Virtual World, but...",
	"It was far too much in our lives to get rid of. Very few would go through it.",
	"Thus, the government thought of another solution. It established an agency\ndedicated to fighting the cybernetic creatures.",
	"That's how CERC came to be. Now, life in Dennoshi City is rather peaceful,\nwith a virus attack every now and then.",
	"Could be better, I guess. But I don't mind how things are in 2070. It's a bit fun.",
	"As for me, well..."
];

var printedLine;

var lineVar = 0;
var bool;
var line;
var newLine;

var title = function(game) {};
title.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/sky.png');
    },

    create: function() {
        var sky = game.add.sprite(0, 0, 'sky');
        line = game.add.text(20,450, '', {font: '25pt Georgia', fill: '#000' }); // The string put in here is the first line that pops up.
        sky.scale.setTo(2, 1);
    },

    update: function() {
    	if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
    		game.paused = true;
    	}
    	if(game.paused){
    		game.paused = false;
    		if(lineVar == dialog1.length) {
    			return;
    		}
    		newLine = dialog1[lineVar]
    		line.text = '' + newLine;
    		lineVar += 1;
    	}
    }
        
}

game.state.add('title', title);
game.state.start('title');