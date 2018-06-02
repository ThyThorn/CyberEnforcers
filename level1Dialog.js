// Frame taken from plemuzic of opengameart.org.
// To do list: add dialog sprites. If possible, do darkening of sprites to indicate which characters aren't speaking.

var beginningDialog = [ // Used for the old dialog system. Lines will be reused for the new one.
    "Kaito: Computer viruses and other cybernetic fiends still are these days.", 
    "Kaito: And somehow, a few years ago, the monsters could at last\nmake their way from their virtual den to our real world!",
    "Kaito: Awful! They hurt many people, and by the time they were slain,\nmore had come to be in the Virtual World.",
    "Kaito: An easy way to deal with the problem would have been\nto delete the Virtual World, but...",
    "Kaito: It was far too much in our lives to get rid of. Very few would go through it.",
    "Kaito: Thus, the government thought of another solution. It established an agency\ndedicated to fighting the cybernetic creatures.", 
    "Kaito: That's how CERC came to be. Now, life in Dennoshi City is rather peaceful,\nwith a virus attack every now and then.",
    "Kaito: Could be better, I guess. But I don't mind how things are in 2070.\nIt's a bit fun.",
    "Kaito: As for me, well...",
    "Atsumi: Kaito!",
    "Kaito: Wh-What's the problem?!", 
    "Kaito: (This is Atsumi Ayukawa. She's also a member of CERC.)",
    "Kaito: (I myself am a commander of my own squad, Squad 667,\nso I'm technically the leader.)",
    "Kaito: (Of course, Atsumi's close to me, so she often treats me\nas if we were on equal terms.)",
    "Atsumi: The computer viruses! There's a report that they're coming out of\nthe Digital World in great numbers!",
    "Kaito: What?! How great is it?", 
    "Atsumi: So great that they've spread throughout parts of the city in no time!",
    "Kaito: Oh no! We must go stop them!",
    "Junpei: Hey, Kaito, over here!",
    "Kaito: Junpei! What's the situation?",
    "Junpei: A group of viruses have gathered at those parts of the streets.", 
    "Junpei: It's odd. There are far more of them than there usually are.",
    "Kaito: This must be some kind of outbreak, if you can even call it that.",
    "Kaito: (This is Junpei Kasuya. He's the third member of Squad 667, I being included.)",
    "Kaito: (He's a pretty friendly guy, and I trust him with the tasks I give him.)",
    "Kaito: (The thing is, he's a bit of a daredevil. Obedient he is not.)", 
    "Junpei: Now's no time to talk about names, Kaito. We need to kill them quickly!",
    "Atsumi: Shouldn't we ask for orders from HQ first?",
    "Junpei: No time, Atsumi. Those damn viruses are terrorizing the city right now!",
    "Junpei: It's now or never, Kaito! And I say it's now, even if you disagree!",
    "Kaito: I'd ordinarily chide you for your lack of listening, but...", 
    "Kaito: Right now, I find no reason to say otherwise. We'll attack them now.",
    "Atsumi: And I assume you'll be the one explaining this to HQ.",
    "Kaito: Don't I ever?",
    "???: If you're going to do that, let me analyze the situation first!",
    "Kaito: Kenta! About time you got here!", 
    "Kenta: There was some problem I met along the way here, but I took care of it!",
    "Kaito: (Kenta is... a bit noteworthy.)",
    "Kaito: (Kenta looks human, but he's truly an AI that exists only in the Virtual World.",
    "Kaito: (The man who made him had him look like a young boy.)",
    "Kaito: (The CERC gives every squad commander his own personal AI\nto help him with his duties.",
    "Kaito: (Kenta's useful and all, and he's considered our fourth member.)",
    "Kaito: (There are some parts of his... character that I would have changed\nhad I programmed him, though.)",
    "Kaito: Kenta, can you see what's going on on your side?",
    "Kenta: Let's see... Wow! Lots of viruses coming out from\nsome parts of the Virtual World.",
    "Kenta: A lot of them are leaking out into your world\nlike milk from a leaky carton!", 
    "Kaito: Can you stop them on your end?",
    "Kenta: I can get rid of them easily, but things might get thorny\nif I let them get into your world.",
    "Kaito: Well, if that's so, let's be done with this quickly!"
];

var printedLine;

var lineVar = 0;
var textBox;
var gameLine;
var newLine;
var shake = true;
var introTheme;
var leftChar;
var rightChar;
var scene1 = new Array();
var kaitoX = 20;
var kaitoY = 80;
var atsumiX = 450;
var atsumiY = 40;

var beginningDialogPlay = function(game) {};
beginningDialogPlay.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('kaito', 'assets/img/f343.png');
        game.load.image('kenta', 'assets/img/boy.png');
        game.load.image('atsumi', 'assets/img/f338.png');
        //game.load.image('junpei', 'assets/img/f249.png');
        game.load.audio('introTheme', 'assets/audio/1. The Market.mp3');
    },

    create: function() {
        var background = game.add.sprite(0, 0, 'sky'); // Add the background first.
        background.scale.setTo(2, 1);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem, this); // Add the listener function to it. 
        introTheme = game.add.audio('introTheme'); 
        introTheme.loop = true;
        introTheme.play();

        // Now add the lines of the dialog. This is rather tedious, but it must be done if we want more say in how scenes should look.
        // For what each parameter means, go to dialogLine.js.
        line0 = new dialogLine("Kaito: It's a nice day today, isn't it?", 'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene1, '', '', true, false);
        line1 = new dialogLine("Atsumi: Of course. We're here to maintain the peace, after all.", 'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene1, '', '', false, true);
        line2 = new dialogLine("Atsumi: But not for us, we should be in a great crisis.", 'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene1, '', '', false, true);
        line3 = new dialogLine("Kaito: Making it stay so is one of my duties as Commander. It's nice to see my work pay off, that's all.", 'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene1, '', '', true, false);
        line4 = new dialogLine("Kaito: (My name is Kaito Ichiki.)", 'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene1, '', '', true, false);
        line5 = new dialogLine("Kaito: (I am a member of an organization called the Cybernetwork Enforcement\nand Regulation Commission.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line6 = new dialogLine("Kaito: (It's pretty long, though, so we call it CERC for short.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line7 = new dialogLine("Kaito: (We of CERC are in charge of maintaining the City's peace.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line8 = new dialogLine("Kaito: (Years ago, mankind had at last made something truly awesome,\nafter years of research in computer networks.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line9 = new dialogLine("Kaito: (There is now the Virtual World, which is a great advancement of the Internet.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line10 = new dialogLine("Kaito: (Our lives had already involved the Internet a lot more,\nbut the Virtual World only marked that we should not stop there.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line11 = new dialogLine("Kaito: (Thanks to the Virtual World, we don't even have to manually handle\nmuch of the technology in our daily lives. It's rather handy.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line12 = new dialogLine("Kaito: (Of course, that comes with its downfalls. It makes it easier\nfor evildoers to work havoc.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);
        line13 = new dialogLine("Kaito: (Computer viruses and other cybernetic fiends still are these days.)", 'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene1, '', '', true, false);

        /*line1 = new dialogLine("Atsumi: Hurry!", 'kaito', 'atsumi', 20, 100, 450, 40, 0.75, 0.8, scene1, '', '', false, true);
        line2 = new dialogLine("Kenta: I'm cute!", 'kaito', 'kenta', 20, 100, 550, 100, 0.75, 1, scene1, '', '', false, true);
        line3 = new dialogLine("Junpei: Ooh, how cool! Shaking!", 'kaito', 'junpei', 20, 100, 450, 50, 0.75, 0.8, scene1, '', 'shake', false, true);
        line4 = new dialogLine("Zaizen: That's right!", 'kaito', 'junpei', 20, 100, 450, 50, 0.75, 0.8, scene1, '', '', false, false);
        line5 = new dialogLine("All: Wow!", 'kaito', 'junpei', 20, 100, 450, 50, 0.75, 0.8, scene1, '', '', true, true);
        line6 = new dialogLine("Kaito: Let's go!", 'kaito', 'junpei', 20, 100, 450, 50, 0.75, 0.8, scene1, '', '', true, false);
        line7 = new dialogLine("Kenta: And now, here's a flash!", 'kaito', 'kenta', 20, 100, 550, 100, 0.75, 1, scene1, '', '', false, true);*/
        dialogSystem();
    },

    update: function() {

    }   
}

dialogSystem = function() {
    if(lineVar == scene1.length) { // Check whether the array of dialog lines has reached its end.
        game.sound.stopAll();
        game.camera.flash(0xffffff);
        game.camera.onFlashComplete.add(goToBattle, this);
    }
    else {
        scene1[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

goToBattle = function() {
    game.state.start("level1Battle");
}
