var creditsScreen;
var quitButton;
var creditsMusic;

var credits = function(game) {};
credits.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('quitButton', 'assets/img/menufullicon.png');
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
        game.load.audio('town', 'assets/audio/Town Theme 1.wav');
    },
    create: function() {
        creditsScreen = game.add.sprite(0, 0, 'sky');
        creditsScreen.scale.setTo(2, 2);
        confirmation = game.add.audio('confirmation');
        quitButton = game.add.button(800, 550, 'quitButton', goToMenu);

        creditsMusic = game.add.audio('town');
        creditsMusic.loop = true;
        creditsMusic.play();
        
        let textStyle = {
            font: 'Fira Sans',
            fontSize: 13,
            wordWrap: true,
            wordWrapWidth: 400,
            fill: 000
        };
        game.add.text(0, 10, 'Credits page \nCyberEnforcers Team:\nZhao Li\nWilson lau\nChe Wei Wu\nNicholas Sabolevsky\nJacob Swanson\n\nArt:\nCharacter portraits for Kaito, Atsumi, Junpei,Hayato, Kazuhito, and Zaizen: タイトル (title)：[JewelSaviorFREE] URL：[http://www.jewel-s.jp/] \nCharacter portrait for Kenta made by Shurajo & AVALANCHE Game Studio\nCharacter portrait for Kimura made by anonymous\nPark, urban, office, medieval, mansion, bedroom, and garden backgrounds made by mugenjohncel of lemmasoft.renai.us\nDialog frame by plemuzic of opengameart.org\nCity tileset by Kenney.nl of opengameart.org\nSci-fi and garden tilesets made by Buch of opengameart.org\nExterior 32x32 Town tileset by Arthur Carvalho, CC-BY-SA 4.0. https://fb.com/sonettocommons. Copyright 2017, 2018 Guilherme Vieira\nBattle sprites modified from sprite base by Lyndsay Takacs\nSky taken from Phaser tutorial', textStyle);
        textStyle = {
            font: 'Fira Sans',
            fontSize: 13,
            wordWrap: true,
            wordWrapWidth: 400,
            fill: 000
        };
        game.add.text(400, 26, 'Sound:\nSound provided by opengameart.org users:\n1. The Market by João Vitor Lisboa \nBattle Escape by bf5man \nChapel of Hate by FoxSynergy\nFighting is not an option by Cleyton Kauffman - http://opengameart.org/users/doppelganger \nGUI Sound Effects_031 by Jesús Lastra\nHayato Battle - Battle Theme by Pugly\nKazuhito Battle - Battle Theme by Wolfgang\nMelancholy by syncopika\nRandom Battle by controllerhead\nHit and Run, Let the Games Begin, Robotic City, and Winning the Race by section31\nTown Theme 1 by LarsG\nUnderwater_battle by davidkvis99 https://soundcloud.com/david-kvistorf\n\"Battle of the Void\". Music by Marcelo Fernandez (http://www.marcelofernandezmusic.com). Licensed under Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0/).\nAdditional sound effects provided by freesound.org users:\nTheGeekRanger: Laser Gun Shot\nCGEffex: Sci Fi Beep 01, Sci Fi Beep 03\nwildweasel: cardlock-open\nJarAxe: Dislocator (sci-fi weapon)\nIwiploppenisse: Explosion', textStyle);
        

    },
}

goToMenu = function() {
    game.sound.stopAll();
    confirmation.play();
    game.state.start("title");
}
