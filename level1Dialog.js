// Code for level 1 dialog.

var lineVar = 0;
var textBox;
var leftChar;
var rightChar;
var background;
var tutorialPic;
var thinking;
var crisis;
var normal;
var scene = new Array();
var kaitoX = 20; // Coordinates of each character sprite on the screen.
var kaitoY = 80;
var atsumiX = 450;
var atsumiY = 40;
var junpeiX = 450;
var junpeiY = 50;
var kentaX = 550;
var kentaY = 100;

var prolog = function(game) {}; // Scene 0, prolog. The mastermind speaks.
prolog.prototype = {
    preload: function(){
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('black', 'assets/img/black.jpg');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
    },

    create: function(){
        background = game.add.sprite(0, 0, 'black'); // Add the background first.
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem0, this); // Add the listener function to it.
        normal = game.add.audio('normal');

        // Now add the lines of the dialog. This is rather tedious, but it must be done if we want more say in how scenes should look.
        // For what each parameter means, go to dialogLine.js.
        line = new dialogLine("???: Wonderful, isn't it? Fifteen years have come and gone.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: I've been waiting a long while just for this.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: Today's world... Split into two by us.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: We men live in the Physical World, but we also dwell in the Virtual World.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: It still amazes me that it's a greater continuation of the Internet. In a way,\nwe went many steps closer to our ideal escapist world.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        
        line = new dialogLine("???: Nearly everything's now controlled online. Microwaves, refrigerators, cars...", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: Amazing... and wretched. Evil always is, and so it now dwells in\nthe Virtual World as well. And those horrid computer viruses are still at large.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: Even after all those years, that incident still lurks in my mind.\nMy great error requires great control to fix it.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("???: All my preparations shall not be in vain. And the naive ones in the agency\nwon't even know about it.", '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        dialogSystem0();
    },
}

var level1Dialog = function(game) {}; // Scene 1, Kaito and Atsumi go on a walk in the park.
level1Dialog.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('park', 'assets/img/park.jpg');
        game.load.image('urban', 'assets/img/urban.jpg');
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('Tutorial01', 'assets/img/Tutorial01.png');
        game.load.image('Tutorial02', 'assets/img/Tutorial02.png');
        game.load.image('Tutorial03', 'assets/img/Tutorial03.png');
        game.load.image('Tutorial04', 'assets/img/Tutorial04.png');
        game.load.image('Tutorial05', 'assets/img/Tutorial05.png');
        game.load.image('Tutorial06', 'assets/img/Tutorial06.png');
        game.load.image('Tutorial07', 'assets/img/Tutorial07.png');
        game.load.image('Tutorial08', 'assets/img/Tutorial08.png');
        game.load.image('Tutorial09', 'assets/img/Tutorial09.png');
        game.load.image('Tutorial10', 'assets/img/Tutorial10.png');
        game.load.image('kaito', 'assets/img/kaito.png');
        game.load.image('kenta', 'assets/img/kenta.png');
        game.load.image('atsumi', 'assets/img/atsumi.png');
        game.load.image('junpei', 'assets/img/junpei.png');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
        game.load.audio('introTheme', 'assets/audio/1. The Market.mp3');
        game.load.audio('thinking', 'assets/audio/S31-Let the Games Begin.mp3');
        game.load.audio('crisis', 'assets/audio/S31-Winning the Race.mp3');
    },

    create: function() {
        background = game.add.sprite(0, 0, 'park'); // Add the background first.
        background.scale.setTo(0.7, 0.7);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem1, this); // Add the listener function to it. 
        var introTheme = game.add.audio('introTheme'); 
        introTheme.loop = true;
        introTheme.play();
        normal = game.add.audio('normal');
        crisis = game.add.audio('crisis');
        crisis.loop = true;

        thinking = game.add.audio('thinking');
        thinking.loop = true;

        line = new dialogLine("Kaito: It's a nice day today, isn't it?",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Of course. We're here to maintain the peace, after all.\nIf it weren't for us, we should be in a great crisis.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Making it stay so is one of my duties as Commander. It's nice\nto see our squad's work pay off, that's all.", 
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: (My name is Kaito Ichiki. I am a member of an organization called\nthe Cybernetwork Enforcement and Regulation Commission.)", 
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Years ago, mankind had at last the Virtual World, after years of research\nin computer networks.)", 
            'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kaito: (But somehow, a few years ago, viruses from that world made their way\nfrom their virtual den to our real world!)", 
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: (The government then established the CERC, an agency dedicated to\nfighting the cybernetic creatures.)", 
            'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Hey, Kaito. Have you been listening to what I've been saying?", 
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Oh, uh, sorry, Atsumi. I was thinking about something.", 
            'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Always thinking of work, aren't you? Take a break, Kaito, and\nenjoy your little walk in the park with me.", 
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("???: Aaaaaaaaaaah! Someone help!",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, false);
        line = new dialogLine("Kaito: Sounds like a classic sign of trouble! Forget the break, Atsumi!\nWe've got to see what's going on!",
            'kaito', 'atsumi', kaitoX, kaitoY, 450, 40, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Sigh... Always at the worst possible times.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("A few minutes later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Junpei: Oh, Kaito! You've come just in time!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: A group of viruses have suddenly come and are now attacking\nthe city!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: That's odd. There are far more of them than there usually are.\nIs this some kind of outbreak?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Whatever this may be, it's got to be stopped! Let's attack at once, Kaito!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("???: If you're going to attack, let me join in as well!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, false);
        line = new dialogLine("Kenta: I don't want to be left out of the fun, you know!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kaito: Ah, Kenta! Glad to see you're finally up!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);

        line = new dialogLine("Kaito: (Kenta... is a bit noteworthy. He looks like a normal boy,\nbut he's truly an AI that's only in the Virtual World.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (The CERC gives every squad commander his own personal AI\nto help him with his duties.)",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Kenta's pretty useful, but I question why the creator made\nsome parts of him like that.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (And technically, he's not even here. We're just looking at a projection of him.)",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kenta: Whoa! Lots of viruses are pouring out of the Virtual World!\nThey're leaking out like crazy!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Kaito: We'd better attack, if we don't want this city get run down by those dang pests.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("This is what the game screen during the battle phase looks like.", 
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("In battle, there are two screens. The left shows the Physical World,\nand the right shows the Virtual World.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("On the field are units, and they belong to either of two teams:\nyour, the player's team, or the enemy's.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Your goal is to defeat all the enemy units. If you lose all your units, you lose.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);

        line = new dialogLine("To do anything with a unit, you must first press one of the buttons\nin the middle. This is very important to remember!",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Let's focus on the left screen for now. To move a unit, first, press the\nmove button. Then choose which unit you want to move.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("You will get to see which squares a unit can go to. Going to a square uses up\nthe number of moves you can make on one turn.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("To go to a square, just click on it. If you look at the unit's moves counter\nat the middle of the screen, you'll see that the number has just risen.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("If you click on any unit, then you get to see its information such as\nits move counter and its health.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);

        line = new dialogLine("Next, attacking units. To do so, click the attack button.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Click on the unit you want to use as the attacker. Then click on the unit\nthat you want to attack.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Afterwards, you can click on the unit that you've attacked\nto see how much damage has been dealt.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("To calculate damage, subtract the attacked unit's defense\nfrom the attacker's attack. Note that if the defense is greater than the attack\nthe damage is calculated as zero.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("If you don't want to do anything else with a unit, first, click\nthe Turn End button.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);

        line = new dialogLine("Then choose the unit whose turn you want to end. That unit will then\nbe blacked out.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Your turn ends when all your units' turns have been ended.\nImmediately after, the enemy will begin its turn.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Now, let's turn our attention to the right screen. This is\nthe Virtual World. Your only unit there is Kenta, and he too\nis controlled with the buttons in the middle.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("In the Virtual World are various nodes that can be hacked, so to speak\nto do something special on the Physical World, the left screen.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Kenta can move only to nodes. He too has a moves counter,\nand moving to a node takes up one move.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);

        line = new dialogLine("There are four kinds of nodes: yellow, blue, green, and red.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Yellow nodes do nothing. They're there as neutral nodes.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Blue nodes let you go to any other blue node, at no cost at all. But if an enemy uses it,\nit causes Kenta to have wasted one move next turn.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Green and red nodes cause the node's corresponding area in the Physical World\nto undergo a special effect.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("If you use green nodes, all your units in that area get healed.\nIf you use red nodes, all the enemy units in that area get damaged.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);

        line = new dialogLine("Note that unlike the enemies in the Physical World, the Virtual World enemies can't\nbe attacked. They're more like obstacles, so clicking them won't\ngive you any information.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Also, the Turn End button doesn't work on Kenta. You can end your turn\nwithout using the Turn End button on him.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Using the power of the Virtual World, you can find a way to defeat the enemies,\noverwhelming though they may be.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        line = new dialogLine("Now, onto the battle. Remember: press the button and then the unit.",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', '', false, false);
        dialogSystem1();
    },
}

dialogSystem0 = function() {
    if(lineVar == scene.length) { // Check whether the array of dialog lines has reached its end.
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(goToScene1, this);
    }
    else {
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

dialogSystem1 = function() {
    if(lineVar == scene.length) { // Check whether the array of dialog lines has reached its end.
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(goToBattle, this);
    }
    else {
        if(lineVar == 10) { // To do something special in a line, take ineVar and subtract 1 from it, since lineVar hasn't been raised yet at this point.
            game.sound.stopAll();
        }
        if(lineVar == 11) {
            crisis.play();
        }
        if(lineVar == 13) {
            background = game.add.sprite(0, 0, 'urban');
            background.scale.setTo(0.7, 0.7);
        }
        if(lineVar == 26) {
            game.sound.stopAll();
        }
        if(lineVar == 27) {
            thinking.play();
            background = game.add.sprite(0, 0, 'sky');
            background.scale.setTo(2, 2);
            tutorialPic1 = game.add.sprite(100, 70, 'Tutorial01');
            tutorialPic1.scale.setTo(0.75, 0.75);
        }
        if(lineVar == 32) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial03');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 33) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial04');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 34) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial05');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 35) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial06');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 36) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial07');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 37) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial08');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 38) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial09');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 39) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial02');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        if(lineVar == 43) {
            tutorialPic1.kill();
            tutorialPic1 = game.add.sprite(200, 70, 'Tutorial10');
            tutorialPic1.scale.setTo(0.6, 0.6);
        }
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

goToScene1 = function() {
    lineVar = 0;
    scene.length = 0;
    game.state.start("level1Dialog");
}

goToBattle = function() {
    lineVar = 0;
    scene.length = 0;
    game.state.start("level1Battle");
}
