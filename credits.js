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
        game.scale.setGameSize(1200, 740);
        creditsScreen = game.add.sprite(0, 0, 'sky');
        creditsScreen.scale.setTo(4, 4);
        confirmation = game.add.audio('confirmation');
        quitButton = game.add.button(1040, 690, 'quitButton', goToMenu);

        creditsMusic = game.add.audio('town');
        creditsMusic.loop = true;
        creditsMusic.play();

        game.add.text(0, 10, 'Credits page', { fontSize: '20px', fill: '#000' });
        game.add.text(0, 40, 'Art:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 60, 'Character portraits for Kaito, Atsumi, Junpei,', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 80, 'Hayato, Kazuhito, and Zaizen:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 100, 'タイトル (title)：[JewelSaviorFREE]', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 120, 'URL：[http://www.jewel-s.jp/]', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 150, 'Character portrait for Kenta', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 170, 'made by Shurajo & AVALANCHE Game Studio', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 200, 'Character portrait for Kimura made by anonymous', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 230, 'Park, urban, medieval, mansion, and garden backgrounds', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 250, 'made by mugenjohncel of lemmasoft.renai.us', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 280, 'Dialog frame by plemuzic of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 310, 'Sky taken from Phaser tutorial', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 340, 'City tileset by Kenney.nl of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 370, 'Exterior 32x32 Town tileset by Arthur Carvalho, CC-BY-SA 4.0.', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 390, 'https://fb.com/sonettocommons. Copyright 2017, 2018 Guilherme Vieira', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 420, 'Sci-fi and garden tilesets made by Buch of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 450, 'Battle sprites modified from sprite base by Lyndsay Takacs', { fontSize: '16px', fill: '#000' });

        game.add.text(0, 480, 'Sound:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 500, '1. The Market by João Vitor Lisboa', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 520, 'Attack sound/blueNode by TheGeekRanger of freesound.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 550, 'Battle Escape by bf5man of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 580, '\"Battle of the Void\". Music by Marcelo Fernandez (http://www.marcelofernandezmusic.com).', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 600, 'Licensed under Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0/).', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 630, 'Chapel of Hate by FoxSynergy of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 660, 'Fighting is not an option:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 680, 'Music by: Cleyton Kauffman - http://opengameart.org/users/doppelganger', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 10, 'GUI Sound Effects_031 by Jesús Lastra of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 40, 'Hayato Battle - Battle Theme by Pugly of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 70, 'Kazuhito Battle - Battle Theme by Wolfgang of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 100, 'Melancholy by syncopika of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 130, 'Random Battle by controllerhead of opengameart.org,', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 160, 'Hit and Run, Let the Games Begin, Robotic City, and Winning the Race by', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 180, 'section31 of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 210, 'Town Theme 1 by LarsG of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 240, 'Underwater_battle by davidkvis99 of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(550, 260, 'https://soundcloud.com/david-kvistorf', { fontSize: '16px', fill: '#000' });
    },
}

goToMenu = function() {
    game.sound.stopAll();
    confirmation.play();
    game.scale.setGameSize(960, 600);
    game.state.start("title");
}
