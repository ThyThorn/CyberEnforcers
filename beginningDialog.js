// Frame taken from plemuzic of opengameart.org.

var beginningDialog = [
	"Kaito: My name is Kaito Ichiki.",
	"Kaito: I am a member of an organization called the Cybernetwork Enforcement\nand Regulation Commission.",
	"Kaito: It's pretty long, though, so we call it CERC for short.",
	"Kaito: We of CERC are in charge of maintaining the City's peace.",
	"Kaito: Years ago, mankind had at last made something truly awesome,\nafter years of research in computer networks.",
	"Kaito: There is now the Virtual World, which is a great advancement of the Internet.",
	"Kaito: Our lives had already involved the Internet a lot more,\nbut the Virtual World only marked that we should not stop there.",
	"Kaito: Thanks to the Virtual World, we don't even have to manually handle\nmuch of the technology in our daily lives. It's rather handy.",
	"Kaito: Of course, that comes with its downfalls. It makes it easier\nfor evildoers to work havoc.",
	"Kaito: Computer viruses and other cybernetic fiends still are these days.",
	"Kaito: And somehow, a few years ago, the monsters could at last\nmake their way from their virtual den to our real world!",
	"Kaito: Awful! They hurt many people, and by the time they were slain,\nmore had come to be in the Virtual World.",
	"Kaito: An easy way to deal with the problem would have been to delete the Virtual World, but...",
	"Kaito: It was far too much in our lives to get rid of. Very few would go through it.",
	"Kaito: Thus, the government thought of another solution. It established an agency\ndedicated to fighting the cybernetic creatures.",
	"Kaito: That's how CERC came to be. Now, life in Dennoshi City is rather peaceful,\nwith a virus attack every now and then.",
	"Kaito: Could be better, I guess. But I don't mind how things are in 2070. It's a bit fun.",
	"Kaito: As for me, well...",
    "Atsumi: Kaito!",
    "Kaito: Wh-What's the problem?!",
    "Kaito: (This is Atsumi Ayukawa. She's also a member of CERC.)",
    "Kaito: (I myself am a commander of my own squad, Squad 667, so I'm technically the leader.)",
    "Kaito: (Of course, Atsumi's close to me, so she often treats me as if we were on equal terms.)",
    "Atsumi: The computer viruses! There's a report that they're coming out of\nthe Digital World in great numbers!",
    "Kaito: What?! How great is it?",
    "Atsumi: So great that they've spread throughout parts of the city in no time!",
    "Kaito: Oh no! We must go stop them!",
];

var printedLine;

var lineVar = 1;
var bool;
var line;
var newLine;
var shake = true;

var beginningDialogPlay = function(game) {};
beginningDialogPlay.prototype = {
    preload: function() {
        game.load.image('sky', 'phaser/myGame/assets/sky.png');
        game.load.image('textBox', 'phaser/myGame/assets/g4410.png');
    },

    create: function() {
        var sky = game.add.sprite(0, 0, 'sky');
        var textBox = game.add.sprite(0, game.world.height - 134, 'textBox');
        textBox.width = game.world.width;
        line = game.add.text(23,game.world.height - 120, "Kaito: My name is Kaito Ichiki.", {font: '23pt Georgia', fill: '#000' }); 
        // The string put in here is the first line that pops up.
        sky.scale.setTo(2, 1);
    },

    update: function() {
        if(lineVar == 3 && shake == true){
            game.camera.shake(0.05, 50);
            shake = false;
        }
    	if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
    		game.paused = true;
    	}
    	if(game.paused){
    		game.paused = false;
    		if(lineVar == beginningDialog.length) {
                lineVar = 0;
                line.destroy();
                game.state.start("battle");
    		}
            shake = true;
    		newLine = beginningDialog[lineVar]
    		line.text = '' + newLine;
    		lineVar += 1;
    	}
    }   
}
