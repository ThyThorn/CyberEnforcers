var lineVar = 0;
var textBox;
var leftChar;
var rightChar;
var background;
var crisis;
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

var level3Dialog = function(game) {}; // Scene 1, Kaito and Atsumi go on a walk in the park.
level3Dialog.prototype = {
    preload: function() {
        game.load.image('medieval', 'assets/img/medieval.jpg');
        game.load.image('mansion', 'assets/img/mansion.jpg');
        game.load.image('textBox', 'assets/img/g4410.png');
        game.load.image('kaito', 'assets/img/kaito.png');
        game.load.image('kenta', 'assets/img/kenta.png');
        game.load.image('atsumi', 'assets/img/atsumi.png');
        game.load.image('junpei', 'assets/img/junpei.png');
        game.load.image('kimura', 'assets/img/kimura.png');
        game.load.image('hayato', 'assets/img/hayato.png');
        game.load.image('kazuhito', 'assets/img/kazuhito.png');
        game.load.audio('crisis', 'assets/audio/S31-Winning the Race.mp3');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
    },

    create: function() {
        background = game.add.sprite(0, 0, 'medieval'); // Add the background first.
        background.scale.setTo(0.9, 0.9);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem3, this); // Add the listener function to it. 
        normal = game.add.audio('normal');

        line = new dialogLine("Hayato: Gah! I-I give up!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: Hah! You should've saved us the trouble by giving up earlier.",
            'junpei', 'hayato', kaitoX, junpeiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: I've broken your virus device. Now you'll be no trouble to us.",
            'atsumi', 'hayato', kaitoX, atsumiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Now will you take us to your father?",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: A-All right. But please, hear me out!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Hayato: Look, I don't think you're bad folks, truly. But it's my father.\nHe's making me do all this, even though I have my doubts about the order's cause.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: I don't like what he's been doing. But I can't leave him.\nI want to help clear his name, and I don't think his revenge plan will work.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Clear his name? You're convinced your father's innocent?",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: I-I'd like to think so. But if the truth is that he truly was guilty of\nhis crime, then I'll accept it.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: Anyway, let me join you in your investigation. It'll lead me to the truth\nabout all this, whether I like it or not.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kenta: Hey, I'd say yes if I were the commander. The more, the merrier!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Atsumi: Such a mature youth you are. I'd gladly let you join us.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Well, I suppose it won't be a problem. All right, you can join us.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: But take us to him already! Time's of the essence, after all!",
            'junpei', 'hayato', kaitoX, junpeiY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("About an hour later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);

        line = new dialogLine("Kazuhito: Hmm? Who goes there?",
            '', 'kazuhito', 0, 0, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: I-It's me, Father. But we have some special guests today.",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: What?! CERC agents?! Hayato, what is the meaning of this?",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: (Hmm... Hayato's father looks a bit younger than I thought. Not surprised\nto see he's got a few eccentricities.)",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Mr. Kisaki, we're here only to ask a few questions.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kazuhito: Hmph. Don't bother. My informants have been keeping me on top of\nwhat you're up to, though it seems they haven't reported my son's foolishness to me.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: I'll cut to the chase. The government information, which you seek so,\nearnestly is indeed in my hands.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Junpei: I knew it! You're the mastermind behind the outbreak!",
            'junpei', 'kazuhito', kaitoX, junpeiY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: Hold your horses, knave. That I have the information does not mean that\nI planned that dreadful outbreak.",
            'junpei', 'kazuhito', kaitoX, junpeiY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: One of my men found the information while fighting the viruses that came\ninto our headquarters. All I've been doing lately is going through the information.",
            'junpei', 'kazuhito', kaitoX, junpeiY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kaito: You expect me to believe that? Everything points to you. It seems too handy\nfor the information to fall into your dirty hands.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Give me the stolen information now, if you want everything to go well for you.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: You trust what the government has told you about me?",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: It's only right to do so, when the government's the one protecting the city\nagainst fiends like you.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: A fiend, you call me? Well, in any case, I won't give it to you, when I'm still\nin the middle of getting every secret that this wretched city has tried to hide.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kazuhito: You can imagine how interesting the negotiations between me and\nDennoshi will be with this information in my arsenal.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: F-Father... I don't want to keep doing this anymore!",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: This revenge plot against the CERC! Surely we can find the truth without\ngoing to such an awful, dirty method!",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: Hmph. You disappoint me, son. You know full well that only such a\nmethod as this will work to bring down the CERC, and now you join them?",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: If you insist on following those black knights, then fine! Your being my son\nshall not stop me from fighting you!",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Hayato: F-Father...",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Ugh... His anger is consuming him. Looks like we'll have to fight once more.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: My son may have been weaker than I thought, but you shall soon behold\nthe greatness of my might and fighting skills!",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: Let us fight in one of my house's rooms. I dislike this weather.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        dialogSystem3();
    },
}

dialogSystem3 = function() {
    if(lineVar == scene.length) { // Check whether the array of dialog lines has reached its end.
        lineVar = 0;
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(goToBattle3, this);
    }
    else {
        if(lineVar == 14) { // To do something special in a line, take ineVar and subtract 1 from it, since lineVar hasn't been raised yet at this point.
            background = game.add.sprite(0, 0, 'mansion');
            background.scale.setTo(0.7, 0.7);
        }
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

goToBattle3 = function() {
    game.state.start("level3Battle");
}