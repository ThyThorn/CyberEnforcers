var lineVar = 0;
var textBox;
var leftChar;
var rightChar;
var background;
var thinking;
var crisis;
var town;
var normal;
var scene = new Array();
var kaitoX = 20;
var kaitoY = 80;
var atsumiX = 450;
var atsumiY = 40;
var junpeiX = 450;
var junpeiY = 50;
var kentaX = 550;
var kentaY = 100;
var kimuraX = 470;
var kimuraY = 30;
var hayatoX = 450;
var hayatoY = 60;

var level2Dialog = function(game) {}; // Scene 1, Kaito and Atsumi go on a walk in the park.
level2Dialog.prototype = {
    preload: function() {
        game.load.image('urban', 'assets/img/urban.jpg');
        game.load.image('office', 'assets/img/office.jpg');
        game.load.image('medieval', 'assets/img/medieval.jpg');
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('kaito', 'assets/img/kaito.png');
        game.load.image('kenta', 'assets/img/kenta.png');
        game.load.image('atsumi', 'assets/img/atsumi.png');
        game.load.image('junpei', 'assets/img/junpei.png');
        game.load.image('kimura', 'assets/img/kimura.png');
        game.load.image('hayato', 'assets/img/hayato.png');
        game.load.audio('thinking', 'assets/audio/S31-Let the Games Begin.mp3');
        game.load.audio('crisis', 'assets/audio/S31-Winning the Race.mp3');
        game.load.audio('town', 'assets/audio/Town Theme 1.wav');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
    },

    create: function() {
        background = game.add.sprite(0, 0, 'urban'); // Add the background first.
        background.scale.setTo(0.7, 0.7);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem2, this); // Add the listener function to it. 
        normal = game.add.audio('normal');

        crisis = game.add.audio('crisis');
        crisis.loop = true;

        town = game.add.audio('town');
        town.loop = true;

        thinking = game.add.audio('thinking');
        thinking.loop = true;

        line = new dialogLine("Kaito: Take this, you stupid creatures!",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Viruses: Raaaaaaaaah!",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', false, false);
        line = new dialogLine("Junpei: I think that's the last of them!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: Commander, the other squads have reported that the viruses\nhave been fully eliminated.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: If it hadn't been for me, it would've gotten worse, I tell you!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kenta: Sure, Junpei. Sure.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: It's true, you stupid AI! If you don't believe me, maybe a good swing\nwith my trusty weapon here will make you a believer!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Ooh, I'm so scared! Oh, wait, I'm not! What you see is just a projection!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kaito: (Why must you two bicker, especially when one of you is just an AI?\nWhy did the creator have to make Kenta that eccentric?)",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: Come on, guys. Let's head back to HQ.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);

        line = new dialogLine("A few days later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Kaito: You wanted to see us, Miss Kimura?",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kimura: Yes. It's about the virus outbreak that happened the other day.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kimura: Director Zaizen is... concerned about it. The number of viruses, he says,\nwas much higher than usual.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kimura: In addition, the viruses stole some top secret information from the\nDennoshi city government amidst the chaos.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kimura: That's why we should like you to do two things:\none, find out the cause of the outbreak, and two, retrieve the stolen information.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Of course, Miss Kimura. As a Commander, I'll do whatever I can\nto keep Dennoshi safe.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Another day of work for us, I see.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Aw, man, not another mission! Can't a guy get some rest around here?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kimura: You knew what you signed up for when you joined the CERC,\nMr. Junpei Kasuya.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kimura: Like it or not, your position and that compass weapon of yours aren't\nonly for making yourself look attractive to those poor naive girls.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: I can't say she's wrong.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kenta: Don't worry, Junpei. I'm sure you can get a girl, just like you can get me.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: Gah! A-All right, then.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Grr... This isn't over, Cyberboy.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: Enough of this, you two. Where shall we even start our investigation?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: The viruses must've come from terminals. Have they been found yet?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kimura: Oh, yes, the terminals have been tracked down. We've had the\nother squads track down some of them already.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kimura: I want you to go find the terminal in the area called the Knights' Den.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: The Knights' Town? I've heard of it a few times, I think.\nBut what exactly is it?",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kenta: Ooh, I love that theme park! I love how it's modeled after Europe!\nToo bad we can't go to Europe anymore, when everything's in ruins over there now.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: It's attracted a crowd of cool men who love playing as Western knights.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kimura: Very good, Kenta. Now go. It behooves you not to keep Director Zaizen\nwaiting, you should know.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("About an hour later...", 
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Kaito: Well, here we are. Looks rather out of place, doesn't it?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Junpei: Yeah, I'd rather be somewhere more traditional, like Kyoto.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: At least people are coming to come visit this place, now that Europe's\nin no condition for vacationing.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true); 
        line = new dialogLine("Kenta: Okay, now that I'm in the terminal's vicinity, I should be able to track\ndown where it is.",
           'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: Let's see... Okay, it's this barrel in that empty alley.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: What? That can't be right.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: It's true, Junpei. The Knights' Town, despite its looks, is full of modern\ntechnology. It's just disguised to look medieval.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Looks can be very deceiving, can't they?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Okay, let me see whether there's anything in this terminal...",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kenta: Hmm... Is that... Whoa!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Viruses: Graaaaaaaaaaaaah!", 
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, false);

        line = new dialogLine("Kenta: Whoa! The viruses are coming out of the barrel!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: No kidding! Come on, help me kill them already!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito & Atsumi: On it!",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, true); 
        line = new dialogLine("Kaito: Phew! That was close! If we hadn't been here, who knows what chaos\nthose things would have caused.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', 'flash', true, false); 
        line = new dialogLine("Kenta: I've managed to get a sample of one of the viruses.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Kenta: If we're lucky, an analysis of it will lead us to the culprit of the outbreak\nor the stolen information.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("20 minutes later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Junpei: Well? How did it go?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: It doesn't have anything direct, so to speak... But I did found code\nthat instructs the viruses to head to a certain building in the city.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: Let me track down what it is... Ah, got it. It's the headquarters of a group\ncalled the Order of the Silver Sword.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Atsumi: Ah, that's the organization that criticizes the CERC's methods of dealing\nwith the Virtual World monsters and attacks.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: Yes. Lately, many members have come to this part of the city\nsupposedly because they plan to have a recruitment fair soon.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: And its leader is... a man named Kazuhito Kisaki.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Kazuhito Kisaki... I've heard only bad things about him.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Understandable. He's a former government scientist infamous\nfor sabotaging a project fifteen years ago.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: He's dangerous and untrustworthy, but he's gotten a few sympathizers\nwith his anti-CERC cause.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Such a despicable man... Doesn't he understand that we're\nthe protectors of Dennoshi. Why can't he see that?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Moreover, can it be that he staged the virus outbreak to steal\nthe government information?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Of course he did it! That man's no clean fellow, that's for certain.\nWouldn't be above him to do such a thing.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Then he's our main suspect now. Let's go find him.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("A few minutes later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Kaito: Hey, look. That boy over there preaching...",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("???: O ye good men, I have come hither with important news to tell!",
            '', 'hayato', 0, 0, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("???: We will reveal the misdeeds and corruption of the CERC, a group that is\nnothing more than a den of thieves! They take our money and our freedoms!",
            '', 'hayato', 0, 0, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("???: Soon, we will have the Dennoshi city government see this truth,\nand with this revelation, we shall be free once more!",
            '', 'hayato', 0, 0, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Junpei: Now what the heck are you talking about?",
            'junpei', 'hayato', kaitoX, junpeiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("???: Ah! CERC agents!",
            'junpei', 'hayato', kaitoX, junpeiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: Stand back! I'm Hayato Kisaki, the son of Kazuhito Kisaki!",
            'junpei', 'hayato', kaitoX, junpeiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Is that so? Take us to him right now.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: He's under suspicion for having orchestrated the virus outbreak\nthat happened a few days ago.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Hayato: I-I'll never do what you CERC fiends tell me!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: And what you say is wrong. Father is innocent, and I'll make sure\nyou won't see him.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: If you won't let us see him, then we'll arrest you for hindering\nour investigation.",
            'atsumi', 'hayato', kaitoX, atsumiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: Uh... Hah! Try to stop me, when I have this!",
            'atsumi', 'hayato', kaitoX, atsumiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Uh, guys! Viruses are pouring out from nearby terminals!",
            'kenta', 'hayato', kaitoX, kentaY, hayatoX, hayatoY, 1, 0.8, scene, '', '', true, false);

        line = new dialogLine("Hayato: Hahaha... I have a special device that changes the behavior of viruses.\nUh, wait, I mean, I've been blessed with this power!",
            'atsumi', 'hayato', kaitoX, atsumiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Drat. It seems we have to fight him and his viruses. I was hoping\nit wouldn't come to this.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Well, if you want a fight, we'll give you a fight!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: You'll never beat me, when I have a greater power on my side!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        dialogSystem2();
    },
}

dialogSystem2 = function() {
    if(lineVar == scene.length) { // Check whether the array of dialog lines has reached its end.
        lineVar = 0;
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(goToBattle2, this);
    }
    else {
        if(lineVar == 10) { // To do something special in a line, take ineVar and subtract 1 from it, since lineVar hasn't been raised yet at this point.
            background = game.add.sprite(0, 0, 'office');
            background.scale.setTo(0.7, 0.7);
        }
        if(lineVar == 12) {
            thinking.play();
        }
        if(lineVar == 33) {
            game.sound.stopAll();
            background = game.add.sprite(0, 0, 'medieval');
            background.scale.setTo(0.9, 0.9);
        }
        if(lineVar == 34) {
            town.play();
        }
        if(lineVar == 60) {
            game.sound.stopAll();
        }
        if(lineVar == 75) {
            crisis.play();
        }
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

goToBattle2 = function() {
    game.state.start("level2Battle");
}
