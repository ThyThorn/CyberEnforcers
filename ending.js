// Code for the last scene of the game.

var lineVar = 0;
var textBox;
var leftChar;
var rightChar;
var background;
var melancholy;
var peace;
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
var kazuhitoX = 450;
var kazuhitoY = 50;
var zaizenX = 450;
var zaizenY = 40;

var ending = function(game) {}; // Last scene, Kaito and the crew arrest the mastermind, and everything is peaceful now.
ending.prototype = {
    preload: function() {
        game.load.image('black', 'assets/img/black.jpg');
        game.load.image('park', 'assets/img/park.jpg');
        game.load.image('garden', 'assets/img/garden.jpg');
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('kaito', 'assets/img/kaito.png');
        game.load.image('kenta', 'assets/img/kenta.png');
        game.load.image('atsumi', 'assets/img/atsumi.png');
        game.load.image('junpei', 'assets/img/junpei.png');
        game.load.image('kimura', 'assets/img/kimura.png');
        game.load.image('hayato', 'assets/img/hayato.png');
        game.load.image('kazuhito', 'assets/img/kazuhito.png');
        game.load.image('zaizen', 'assets/img/zaizen.png');
        game.load.audio('melancholy', 'assets/audio/Melancholy.wav');
        game.load.audio('peace', 'assets/audio/Town Theme 1.wav');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
    },

    create: function() {
        background = game.add.sprite(0, 0, 'garden'); // Add the background first.
        background.scale.setTo(0.8, 0.8);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystemEnding, this); // Add the listener function to it. 
        normal = game.add.audio('normal');

        melancholy = game.add.audio('melancholy');
        melancholy.loop = true;

        peace = game.add.audio('peace');
        peace.loop = true;

        line = new dialogLine("Kaito: Take this, Zaizen!",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Gah! My ambitions! My control over the two worlds!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: How can a squad like yours have made my power disappear?!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Time to face justice, Kimura!",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kimura: Get your filthy hands off of me!",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Hayato: After you helped the man who framed my father? There's no way\nI'm letting you go!",
            'hayato', 'kimura', kaitoX, hayatoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Director Zaizen, will you give up at last?",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: .........",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: An old man like me has gotten enough sense to know when to quit.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: If I couldn't control you, how could I control two worlds?",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: Thank you, Director, for causing no more trouble for us.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: It's the least that I can do, Miss Ayukawa, to save what little dignity\nI still have.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Director Zaizen...",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: I was not lying when I said that I wanted to bring you back, Hajime Kousaki.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: To do so would have been one of the greatest wonders that the world\nhad ever seen. It would have been the start of a wonderland.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);

        line = new dialogLine("Zaizen: I was willing to do anything for it... Even if it meant framing\nan innocent man.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: And framing that innocent man only ended up making things worse for you.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Yes, that I will not deny. Poor Kazuhito proved more trouble than\nI had thought.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: ... Kaito, society has no more use for an old man like me. I'm willing\nto accept the consequences of my failure.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: But before I leave, let me leave you a gift.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kaito: Gift?",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: If you search my office, you will find my diary. You are free to examine\nits contents as you see fit.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: In one of the entries, however, I have written details about the whereabouts\nof Hajime Kousaki's body.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: My body! It's still here, even after twenty years?!",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Yes... After Project Connection failed, a few other researchers and I\nput it in a capsule that would preserve it wholly.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);

        line = new dialogLine("Zaizen: If you wish to return to the Physical World, you will need your body,\nof course. If you return, you will be a little boy in both body and mind.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: Director... Why are you telling us this?",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: You've earned the right to know it, Miss Ayukawa.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: And perhaps... you can pull off the wonder that I could not make come true.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: I have tried many methods before deciding that control over both worlds\nwas the only solution.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Zaizen: But... there may be another way. Perhaps your eyes can see what mine\nhave become blind to.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: .........",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Thank you, Director. That's all I will say to you.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: And that, everyone, is a job well done.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Let's take him away. Justice will be served at last.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("A few weeks later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Kaito: (Since Zaizen's, Kimura's, and the other corrupt CERC admins' arrests,\nDennoshi has become much more peaceful.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Kazuhito Kisaki was let go, given that his arrest was part of Zaizen's plot.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (The Dennoshi city government offered him the position of CERC director,\nwhich he gladly accepted. At the job, he's what everything Zaizen should've been.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Even with his knightly eccentricities, we at the agency still appreciate him\nfor his plans for reform.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);

        line = new dialogLine("Kaito: (As for me, well, I'm glad everyone's celebrating my actions. Even I like to be\npraised for doing the right thing.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Junpei: Hey, Kaito! You know how everything's more peaceful now?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', 'flash', false, true);
        line = new dialogLine("Kaito: Yes? What about it, Junpei?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Well, do you understand now? Why listening to orders isn't always good?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: You know how I roll now. I go by what's right, not by what's told to me.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kaito: That may be, but I won't let you do anything willy-nilly, just because of that.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: But! You've been doing some good work lately. Keep it up, and maybe you'll\nfind the girl of your dreams.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Heh, will do!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: Kaito! I'm glad to see you here!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', 'flash', false, true);
        line = new dialogLine("Hayato: I'd just like to thank you once more for clearing my father's name!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Hayato: Now the public can trust him once more, and our family's honor can at last\nbe gotten back, now that that dirty Zaizen's in prison.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Don't mention it. By the way, what's going to happen to the Order of the\nSilver Sword?",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: Well, Father made it to fight against the CERC's corruption, but now that\nits purpose has been fulfilled, he plans to turn it into a squad working overseas.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: The Japanese government wants to help other countries with their own\nproblems with the Virtual World, after all.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Let's hope the order's overseas ventures go well, then.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("???: If you're going to have a walk in the park, let me join in as well!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, false);
        line = new dialogLine("Kaito: Oh, Kenta! I mean, Hajime. Sorry, I'm still getting used to your true name.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', 'flash', true, false);
        line = new dialogLine("Hajime: Hey, no worries! We're both human, after all!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: Kaito, thanks so much for helping me discover who I truly am. I still can't\nbelieve that all these years, Zaizen hid that from all of us.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: To be Hajime Kousaki instead of Kenta makes me feel free. I'm no longer\nliving in a lie.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Hajime: And guess what? Kisaki's agreed to find a way to take me back to the\nPhysical World!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kaito: Great! What's happened so far?",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Hajime: He had some of his men from his order look into what Zaizen had told us\nthat night about my body.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: And can you believe that they found a body that looks exactly like me!\nI was brimming with joy when I took a good look at myself!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: It's pretty handy that my body's in perfect condition. Right now, Kisaki's\nalso investigating the capsule itself.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Hajime: It'll take a while for him and his men to find a way to put my mind back into\nmy body. I'll wait as long as it takes, but I hope it'll be soon. That way, we can still be\nfriends in our true world.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: Hmm... If truth be told, it'll feel weird once they manage to put you\nback into your body. I'll have no virtual boy to argue with anymore.",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Hajime: Yeah, even though I'm excited to go back to your world, I admit, there\nare some parts of being in the Virtual World that I'll miss.",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: I did like messing around in machines and causing chaos to happen!",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Hajime: But I want to return to our world. Kisaki managed to track down my family,\nand Mother and Father were beyond shocked and glad when we saw each other\nfor the first time in twenty years!",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Hajime: Don't worry, though. I'll have plenty of stories about your incidents\nto tell to my classmates once I go to school again.",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Junpei: What?! Why, you little brat! Have you forgotten how cool I am?!",
            'junpei', 'kenta', kaitoX, junpeiY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Atsumi: ......",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', 'flash', false, true);
        line = new dialogLine("Kaito: You look like you have something to say, Atsumi. What is it?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Oh, it's, uh, nothing, Kaito. It's just that I'm still enthralled by how\nheroic you were when dealing with Zaizen.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: You were willing to reject Zaizen's offer for paradise, all for your\ndearest one's sake.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: My dearest one's sake?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: You know, someone who's always been there for you, and will do anything\nto protect you.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Hmm... Every one of you is dear to me. We're a squad, after all.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: We'd do anything to help each other at times of need, wouldn't we?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Hayato: Uh, Kaito?",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: He just doesn't get it, man.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hajime: Agreed.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kaito: What? What am I not getting?",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Sigh... You still have much to learn, Kaito.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("THE END\nTHANK YOU FOR PLAYING",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        dialogSystemEnding();
    },
}

dialogSystemEnding = function() {
    if(lineVar == scene.length) { // Make the end screen.
        lineVar = 0;
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(enterCredits, this);
    }
    else {
        if(lineVar == 13) {
            melancholy.play();
        }
        if(lineVar == 32) {
            game.sound.stopAll();
        }
        if(lineVar == 35) {
            background = game.add.sprite(0, 0, 'park'); // Add the background first.
            background.scale.setTo(0.7, 0.7);
        }
        if(lineVar == 36) {
            peace.play();
        }
        if(lineVar == scene.length - 1) { // Make the end screen.
            background = game.add.sprite(0, 0, 'black');
        }
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

enterCredits = function() {
    scene.length = 0;
    game.state.start("credits");
}
