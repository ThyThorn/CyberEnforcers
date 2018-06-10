// Code for level 4 dialog.

var lineVar = 0;
var textBox;
var leftChar;
var rightChar;
var background;
var melancholy;
var angry;
var lastFight;
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

var level4Dialog = function(game) {}; // Scene 4, Kaito and his friends confront the mastermind of the case.
level4Dialog.prototype = {
    preload: function() {
        game.load.image('mansion', 'assets/img/mansion.jpg');
        game.load.image('bedroom', 'assets/img/bedroom.jpg');
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
        game.load.audio('angry', 'assets/audio/Chapel of Hate v0_8.mp3');
        game.load.audio('lastFight', 'assets/audio/Battle of the Void.mp3');
        game.load.audio('normal', 'assets/audio/GUI Sound Effects_031.mp3');
    },

    create: function() {
        background = game.add.sprite(0, 0, 'mansion'); // Add the background first.
        background.scale.setTo(0.7, 0.7);
        background.inputEnabled = true;
        background.events.onInputDown.add(dialogSystem4, this); // Add the listener function to it. 
        normal = game.add.audio('normal');

        melancholy = game.add.audio('melancholy');
        melancholy.loop = true;

        angry = game.add.audio('angry');
        angry.loop = true;

        lastFight = game.add.audio('lastFight');
        lastFight.loop = true;

        line = new dialogLine("Kazuhito: No! How could I be beaten like this?!",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: You had it coming, when you dared to fight us.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Kaito! Kenta and I have found the government info!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Excellent! We've caught the culprit and gotten the info back. I say we have\nno more reason to be here.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: F-Father...",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kazuhito: ... Could I ask one favor from you of the CERC?",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: Please let Hayato and the other members of my order go. If someone must\ntake responsiblity of these crimes, only I should suffer the cost.",
            'hayato', 'kazuhito', kaitoX, hayatoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: How noble of you. Shame you couldn't be that noble earlier.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: But... I'll see what I can do.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Now let's head back. Everyone will be eager to hear of our success.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kaito: Mr. Kisaki... I do have one question for you.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: What were you talking about when you, well, freaked out from seeing Kenta?",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: You spoke of a project twenty years ago. Is that related to the project\nyou sabotaged fifteen years ago?",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: Hahaha... You beat me fair and square. Fine, I'll answer you.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: The project twenty years ago was called Project Connection. But it was\nonly a daring attempt to let humans be able to enter the Virtual World itself,\nas if we hadn't enough connections thereto.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kazuhito: I was rather young and new at the government's research firms.\nI only helped here and there to set up the project.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: The try involved putting the mind of a human boy inside the\nVirtual World. I knew not his name, but I did take a glance of him as he entered\nthe lab, all happy and merry, unaware of his sad fate.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: We... could not get the young boy's mind back into his body.\nHis mind was trapped in the Virtual World, it seemed.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: Your AI program there has the same physical characteristics\nas that boy. That is why I was so shocked when he popped up.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: ... A project twenty years ago... I don't remember anything like that.",
            'kenta', 'kazuhito', kaitoX, kentaY, kazuhitoX, kazuhitoY, 1, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kazuhito: That boy was declared dead, and the body was taken somewhere,\nbut I know not of where his mind now is. Does he still lurk in the Virtual World?",
            'kenta', 'kazuhito', kaitoX, kentaY, kazuhitoX, kazuhitoY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: I am confident that he is now dead, however. The Virtual World\nis filled with creatures that must have ravished him already.",
            'kenta', 'kazuhito', kaitoX, kentaY, kazuhitoX, kazuhitoY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: It was an unfortunate project... but thankfully, the boy was\nthe only victim of the government's folly.",
            'kenta', 'kazuhito', kaitoX, kentaY, kazuhitoX, kazuhitoY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: ... What about my other question?",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: The project that happened five years after had no connection to it.\nThe only link was the researchers involved.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kazuhito: But then again... Did you know? Zaizen, your precious director,\nand I were two reseachers of both projects.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Wh-What?! You know Zaizen and worked with him?",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kazuhito: Indeed I do. We were both in line for the position of the head of\nR&D of the CERC. He was a crafty man who was always focused on his work.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kazuhito: That's all I will say on that matter, however. Some things are best\nleft unsaid at the moment.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: If that's the case, let's head back already.",
            'kaito', 'kazuhito', kaitoX, kaitoY, kazuhitoX, kazuhitoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("An hour later...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Kaito: (Ah, good to be back in my room, after a day's work.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Miss Kimura praised me as usual, and we celebrated at my house,\nbecause of course I'd be the one to be made to clean up everything.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (It's nice to know that I've stopped the mastermind of that awful outbreak\nbefore he could do anything else.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: (Thankfully, I managed to get Kimura to let Hayato go, though I don't know\nwhat he'll do now.)",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);

        line = new dialogLine("Kaito: Nothing I'd like to do more than to sleep now.",
            'kaito', '', kaitoX, kaitoY, 0, 0, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Junpei: Kaito!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', 'flash', false, true);
        line = new dialogLine("Kaito: Gah! Junpei! You're still here?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Well, yeah! Hayato felt a bit unsettled, so Atsumi's with him at your lounge.\nMeanwhile, Kenta and I have something to show you!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: You know that secret government info we were supposed to get? Well, before\nI gave it back to Miss Kimura, Junpei got me to make a copy.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Kaito: You WHAT?! You copied it without letting us know?! How could you?!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', 'flash', true, false);
        line = new dialogLine("Kaito: Junpei, this is a new low for your daredevilry! Have my suggestions meant\nnothing to you?!",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Calm down, Kaito! I was only curious as to what it might be. Kenta wanted\nto look at it as well, so it's not as if I'd forced him or anything.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: There was something weird about what that Kisaki man said earlier.\nI couldn't stop thinking about it, which is even weirder!",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: I've never really thought about where I come from, but... maybe this\ninformation is related to it.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);

        line = new dialogLine("Kaito: ...... If truth be told, I'm starting to think there's something\nfishy going on here. Fine, I'll take a look.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Let's see... Hmm? \"Project Soldier canceled. Led by Kazuhito Kisaki and\nMasakage Zaizen.\"",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: \"Kisaki has been fired from his position as a project director, due to\nsabotage of CERC technology used as test subjects for the improvement of soldiers\nand military weapons development.\"",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: \"Kisaki and Zaizen were the top two candidates for the position of head of\nR&D of the CERC. Because of his sabotage, the position will now be given to Zaizen.\"",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: \"Zaizen has suggested that we watch over Kisaki carefully, claiming that\nhe is a dangerous man.\"",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Hayato: N-No! Stop! It's all wrong!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Hayato!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: He suddenly headed to your room once he heard you talk about the project.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: F-Father told me to keep this secret, since he thought it would be bad\nif people knew why he was truly against your agency.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: But at this point, I can't keep it a secret. I'll tell you everything.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Junpei: Well, that's nice to hear! Things were getting shadowy here.",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: That report you read... All the events were right, but who did what was\nall wrong.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: Father always said that it was Zaizen who sabotaged the project and framed\nhim for it. That's why he truly wanted revenge against him.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: He thought the CERC was just doing Zaizen's dirty deeds.",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: What?! Nonsense! We of the CERC have saved Dennoshi many times!",
            'kaito', 'hayato', kaitoX, kaitoY, hayatoX, hayatoY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Junpei: Still, someone's not telling us the whole truth. Kaito, don't you think\neven an old man like Zaizen could've been lying to us?",
            'kaito', 'junpei', kaitoX, kaitoY, junpeiX, junpeiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Unfortunately, I agree with Junpei again. While you were talking\nI noticed that in the info about the project, there was code for a virus intended\nto be used as part of a test.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: I compared it with the virus sample we got earlier at the Knights' Town.\nIt's almost a complete match, so someone else connected to the project\nis likely involved.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kenta: And if Kisaki really was framed, then it means Zaizen's highly likely to be\nthe true mastermind behind the virus outbreak.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', false, true);
        line = new dialogLine("Kaito: ...... I can't deny it. Zaizen's looking rather suspicious here.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);

        line = new dialogLine("Kaito: He benefited from getting Kisaki out of his way for the job at the CERC,\nand he'll certainly benefit again for framing him for the attack.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Kaito: Atsumi, do you know where Zaizen is? We have to talk to him about this.",
            'kaito', 'kenta', kaitoX, kaitoY, kentaX, kentaY, 0.75, 1, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Kaito, are you aware of the risk you're about to take? If Zaizen's the culprit,\nhe'll more than likely try to get rid of us to keep it secret.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: I'm fully aware. If you don't want to go, you're free not to join me.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: Please... Please don't go. I don't want to lose you.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: We've been here for each other since we were kids. You know how hard it\nwill be for me if you suddenly disappear from my life!",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: I... I don't think I can take it. Of all the men I have met, you're the\ndearest one to me.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: ...... I know that it's risky, but it has to be done. I'm the Commander of this\nsquad. It's right for me to investigate whether this injustice has come from within.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: But trust me, Atsumi. I'll be okay. I've taken many risks throughout my life.\nI can't let this one stop me.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Atsumi: ... I understand. I'll go with you, then.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Atsumi: Zaizen's at the garden by CERC headquarters. He usually takes his\nnightly walks there by himself.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Well, then, we're off to the garden. That will be where we end this\nmess of a case.",
            'kaito', 'atsumi', kaitoX, kaitoY, atsumiX, atsumiY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Not long after...",
            '', '', 0, 0, 0, 0, 0, 0, scene, '', 'flash', false, false);
        line = new dialogLine("Zaizen: Ah, if it isn't Kaito Ichiki and his friends! Fancy seeing you this time\nof night.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: It's good seeing you as well, sir, given that we want to ask you some questions.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Zaizen: I have time for however many you'd like to ask. An old man like me has\nlittle to occupy himself with nowadays.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Hayato: A-Ah... You're the one who worked with Father.",
            'hayato', 'zaizen', kaitoX, hayatoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Hahaha... Kazuhito's son is here as well, hmm? I can see the nature of\nyour questions already.",
            'hayato', 'zaizen', kaitoX, hayatoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: Sir... Hayato tells me his father claims to have been framed by you for\nProject Soldier's sabotage fifteen years ago.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: And the similarities between the virus in the project and the viruses\nthat attacked a few days ago are there.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kaito: We have the evidence to open up another investigation into your\naffairs. Do you have anything to say?",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Ah, looking at things at which you may not look, are you? I always\nthought you were no daredevil, unlike your teammate there.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: In any case, it's all true. It was I who framed Kazuhito Kisaki for\nthe project's sabotage and the virus outbreak.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: But, sir... Why? Just why?!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: This old man has his reasons, I assure you.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Zaizen: Kenta? Are you there?",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Director Zaizen? What's going on here?",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Kenta... From the very moment you opened your eyes in the Virtual World,\nyou've thought that you are an artificial intelligence.'",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: You certainly are the most human of the AIs of the CERC, are you not?",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: But in truth, you are a false sign of mankind's progress with technology.\nOur most advanced AIs right now cannot truly feel as you do.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);

        line = new dialogLine("Zaizen: Kenta, the cheerful AI helper... No, that is not your true self.\nYou are Hajime Kousaki, the test subject whose mind we lost that day.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Hajime... Kousaki...",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: I... I... I... I remember... going into a lab.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: I remember being told that everything would take only a short while.\nEverything looked so clean and spotless.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: The men told me to sit on a weird chair while they put something on me.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kenta: But... everything went even whiter, like I fell asleep.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: And when I woke up, I became Kenta.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Zaizen: Do you wish you had the power to change this? The power to shape\nthe world into your liking? The power to make that dearest wonder come true?",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kenta: Yes... I want to be a normal boy again...",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: ......",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Zaizen: Power, my boy. The power to make wonders come true. That's the\nanswer to your question.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: I was the one who took Hajime Kousaki away from his family.\nI felt shame so great that I wished to shape the Physical and Virtual Worlds.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: Once the government established the CERC, I saw a way to fulfill\nmy whole-hearted ambitions.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: I needed to be the topmost man of the agency, so I thought to get rid\nof Kazuhito, who was a unwitting threat to my ambitions.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: But why the virus outbreak, if you're already the director of the CERC?",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Zaizen: As I have told you already: power. A virus outbreak would certainly\nmake the public supportive of giving the CERC more power.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("???: And it was thanks to us that it worked perfectly.",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, false);
        line = new dialogLine("Junpei: Miss Erika Kimura! You're a conspirator as well?!",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kimura: But of course. Most of CERC's top brass support his plan for gaining\nmore power over our two worlds.",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kimura: I assure you, however, that if you join us in our plan, you'll be\nrewarded generously for it.",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);

        line = new dialogLine("Kimura: After all, what's the use of control if you can't do anything with it?\nWe plan to use it to shape the world into paradise.",
            'junpei', 'kimura', kaitoX, junpeiY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Kaito: To shape the world into paradise... To make my wonders come true...",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: ......",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: No thanks. Wonder's all about discovery. If I can control everything\nthen there's nothing to discover. It's no paradise at all.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: And more importantly, you still haven't paid for your misdeeds.\nI'll take what's right over what I want personally.",
            'kaito', 'kimura', kaitoX, kaitoY, kimuraX, kimuraY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Zaizen: Ridiculous! Such rejection is devoid of logic!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: You of Kaito Ichiki's squad! Don't listen to him!\nWhat he says is rank hogwash!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Atsumi: Is it? Well, if he won't accept your paradise, then neither will I!",
            'atsumi', 'zaizen', kaitoX, atsumiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Junpei: Yeah! I won't let you have your way after you've hurt so many innocents!",
            'junpei', 'zaizen', kaitoX, junpeiY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Hayato: After you've wronged my father, no one can truly believe you're doing this\nfor all of us!",
            'hayato', 'zaizen', kaitoX, hayatoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Kenta: ... Director Zaizen.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: I'd like a way to return to the Physical World one day.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kenta: But I'm sure there's another way than letting you control our two worlds.\nI don't want to do the wrong thing.",
            'kenta', 'zaizen', kaitoX, kentaY, zaizenX, zaizenY, 1, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Everyone... I'm glad to see that we're all at one here.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);
        line = new dialogLine("Kaito: Together, we can beat Zaizen and bring this case to its ending at last!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', true, false);

        line = new dialogLine("Zaizen: Hahaha... We'll see soon enough who'll get to write this tale's ending.",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);
        line = new dialogLine("Zaizen: I'll show you that even without the help of viruses, I still have\nthe upper hand!",
            'kaito', 'zaizen', kaitoX, kaitoY, zaizenX, zaizenY, 0.75, 0.8, scene, '', '', false, true);

        dialogSystem4();
    },
}

dialogSystem4 = function() {
    if(lineVar == scene.length) { // Check whether the array of dialog lines has reached its end.
        lineVar = 0;
        background.inputEnabled = false;
        game.sound.stopAll();
        game.camera.fade(0xffffff);
        game.camera.onFadeComplete.add(goToBattle4, this);
    }
    else {
        if(lineVar == 14) { // To do something special in a line, take ineVar and subtract 1 from it, since lineVar hasn't been raised yet at this point.
            melancholy.play();
        }
        if(lineVar == 30) { 
            game.sound.stopAll();
            background = game.add.sprite(0, 0, 'bedroom');
            background.scale.setTo(0.5, 0.5);
        }
        if(lineVar == 40) {
            angry.play();
        }
        if(lineVar == 66) {
            game.sound.stopAll();
        }
        if(lineVar == 69) {
            melancholy.play();
        }
        if(lineVar == 77) {
            game.sound.stopAll();            
            background = game.add.sprite(0, 0, 'garden');
            background.scale.setTo(0.8, 0.8);
        }
        if(lineVar == 90) {
            melancholy.play();
        }
        if(lineVar == 111) {
            game.sound.stopAll();
        }
        if(lineVar == 118) {
            lastFight.play();
        }
        scene[lineVar].execute(); // Check the dialog line constructor for the function.
    }
}

goToBattle4 = function() {
    game.state.start("level4Battle");
}
