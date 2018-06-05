var creditsScreen;

var credits = function(game) {};
credits.prototype = {
    preload: function() {
        game.load.image('sky', 'assets/img/sky.png');
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
    },
    create: function() {
        creditsScreen = game.add.sprite(0, 0, 'sky');
        creditsScreen.scale.setTo(2, 2);
        confirmation = game.add.audio('confirmation');
        game.add.text(0, 10, 'Credits page', { fontSize: '20px', fill: '#000' });
        game.add.text(0, 40, 'Art:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 60, 'Character portraits for Kaito, Atsumi, Junpei,', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 80, 'Hayato, Kazuhito, and Zaizen:', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 100, 'タイトル (title)：[JewelSaviorFREE]', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 120, 'URL：[http://www.jewel-s.jp/]', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 150, 'Character portrait for Kenta', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 170, 'made by Shurajo & AVALANCHE Game Studio', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 200, 'Character portrait for Kimura made by anonymous', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 230, 'Park, urban, medieval backgrounds', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 250, 'made by mugenjohncel of lemmasoft.renai.us', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 280, 'Dialog frame by plemuzic of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 310, 'Sky taken from Phaser tutorial', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 340, 'City tileset by Kenney.nl of opengameart.org', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 370, 'Exterior 32x32 Town tileset by Arthur Carvalho, CC-BY-SA 4.0.', { fontSize: '16px', fill: '#000' });
        game.add.text(0, 390, 'https://fb.com/sonettocommons. Copyright 2017, 2018 Guilherme Vieira', { fontSize: '16px', fill: '#000' });

    },

    update: function() {
    }
}