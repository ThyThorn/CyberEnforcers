var gameLevel = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var virLevel = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var background;
var backgroundVir;
var moveButton;
var battleTheme1;
var kaito;
var virus;
var scaleFactor = 16;
var kaitoObject;
var virusObject;
var playerTeam = new Array();
var enemyTeam = new Array();
var virViruses = new Array();
var levelWidth = 30;
var levelHeight = 30;
var mapWidth = 480;
var mapHeight = 480;
var xSelected;
var ySelected;
var turnNumber = 1;
var shiftPhysFactor = 16;
var shiftUIFactor = 16 * 12;
var shiftVirFactor = 16 * 13;

var greenNode1; // All the node variables must be declared first.
var greenNode2;
var greenNode3;
var greenNode4;
var greenNode5;
var blueNode1;
var blueNode2;
var blueNode3;
var redNode1;
var redNode2;
var redNode3;
var redNode4;
var redNode5;
var yellowNode1;
var yellowNode2;
var yellowNode3;
var accessible = false;
var isFull = false;
var chosenVirSquare = false;
var chosenVirX;
var chosenVirY;
var kenta;
var physNode;
var xAOE = 3;
var yAOE = 3;
var northBound;
var southBound;
var westBound;
var eastBound;

var level1Battle = function(game) {};
level1Battle.prototype = {
    preload: function() {
        game.load.atlas('atlas', 'assets/img/allSprites.png', 'assets/img/allSprites.json'); // Load the atlas.

        game.load.image('background', 'assets/img/level1.png');
        game.load.image('backgroundVir', 'assets/img/level1v.png');
        game.load.image('greenTile', 'assets/img/highlight.png');

        game.load.image('moveButton', 'assets/img/movefullicon.png');
        game.load.image('moveButtonPressed', 'assets/img/movefullicongrey.png');

        game.load.image('attackButton', 'assets/img/attackfullicon.png');
        game.load.image('attackButtonPressed', 'assets/img/attackfullicongrey.png');

        game.load.image('hackNodeButton', 'assets/img/hacknodefullicon.png');
        game.load.image('hackNodeButtonPressed', 'assets/img/hacknodefullicongrey.png');

        game.load.image('turnEndButton', 'assets/img/turnendicon.png');

        game.load.audio('battleThemePlayer1', 'assets/audio/Fighting is not an option.mp3');
        game.load.audio('battleThemeEnemy1', 'assets/audio/S31-Robotic City.mp3');
    },

    create: function() {
        game.scale.setGameSize(shiftPhysFactor * 2 + mapWidth * 2 + shiftUIFactor, mapHeight + shiftPhysFactor * 2);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        gameLevel = Phaser.ArrayUtils.transposeMatrix(gameLevel);

        background = game.add.sprite(0 + shiftPhysFactor, 0 + shiftPhysFactor, 'background');
        background.inputEnabled = true;
        background.events.onInputDown.add(chooseUnit, this);

        backgroundVir = game.add.sprite(background.width + shiftVirFactor, 0 + shiftPhysFactor, 'backgroundVir');
        backgroundVir.inputEnabled = true;
        backgroundVir.events.onInputDown.add(chooseVirUnit, this);

        moveButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 50 + shiftPhysFactor, 'moveButton', moveUnit, this);
        moveButton.onInputDown.add(moveDown, this);

        attackButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 110 + shiftPhysFactor, 'attackButton', attackUnit, this);
        attackButton.onInputDown.add(attackDown, this);

        hackNodeButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 170 + shiftPhysFactor, 'hackNodeButton', hackNode, this);
        hackNodeButton.onInputDown.add(hackNodeDown, this);

        turnEndButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 230 + shiftPhysFactor, 'turnEndButton', endTurn, this);

        battleThemePlayer1 = game.add.audio('battleThemePlayer1');
        battleThemePlayer1.loop = true;
        battleThemePlayer1.play();
        battleThemeEnemy1 = game.add.audio('battleThemeEnemy1');
        battleThemeEnemy1.loop = true;

        kaitoObject = new PhysUnit('Kaito', 20, 10, 5, 10, 'player', false, 19, 3, 'atlas', 'kaito01');
        game.add.existing(kaitoObject);
        kaitoObject1 = new PhysUnit('Kaito1', 20, 10, 5, 10, 'player', false, 14, 10, 'atlas', 'kaito01');
        game.add.existing(kaitoObject1);
        kaitoObject2 = new PhysUnit('Kaito2', 20, 10, 5, 10, 'player', false, 7, 23, 'atlas', 'kaito01');
        game.add.existing(kaitoObject2);

        virusObject = new PhysUnit('Virus', 25, 5, 5, 10, 'enemy', true, 15, 13, 'atlas', 'kenta01');
        game.add.existing(virusObject);
        virusObject1 = new PhysUnit('Virus', 25, 5, 5, 10, 'enemy', true, 20, 3, 'atlas', 'kenta01');
        game.add.existing(virusObject1);
        virusObject2 = new PhysUnit('Virus', 25, 5, 5, 10, 'enemy', true, 7, 24, 'atlas', 'kenta01');
        game.add.existing(virusObject2);

        kenta = new VirUnit('Kenta', 5, 'player', false, 2, 9, 'atlas', 'kenta01');
        game.add.existing(kenta);

        greenNode1 = new Node('Green1', 'green', null, null, null, greenNode2, 2, 9, kenta);
        greenNode2 = new Node('Green2', 'green', null, null, greenNode1, greenNode3, 7, 9, null);
        greenNode1.east = greenNode2; // Note that since greenNode2 was undefined when I initialized greenNode1, I need to set its value to greenNode1.east again.
        
        greenNode3 = new Node('Green3', 'green', redNode1, blueNode1, greenNode2, null, 11, 9, null);
        greenNode2.east = greenNode3;
        
        redNode1 = new Node('Red1', 'red', null, redNode2, greenNode3, blueNode1, 16, 3, null);
        blueNode1 = new Node('Blue1', 'blue', redNode1, yellowNode1, greenNode3, yellowNode3, 16, 10, null);
        redNode1.south = blueNode1;
        
        redNode2 = new Node('Red2', 'red', greenNode3, null, null, null, 11, 13, null);
        greenNode3.north = redNode1;
        greenNode3.south = redNode2;
        greenNode3.east = blueNode1;
        
        yellowNode1 = new Node('Yellow1', 'yellow', blueNode1, null, blueNode3, yellowNode2, 16, 27, null); // For testing purposes, you can walk to faraway blue nodes for now.
        blueNode1.south = yellowNode1;
        
        yellowNode2 = new Node('Yellow2', 'yellow', greenNode4, null, yellowNode1, null, 27, 28, null);
        yellowNode1.east = yellowNode2;
        
        greenNode4 = new Node('Green4', 'green', yellowNode3, yellowNode2, null, null, 27, 22, null);
        yellowNode2.north = greenNode4;
        
        yellowNode3 = new Node('Yellow3', 'yellow', blueNode2, greenNode4, blueNode1, redNode3, 27, 8, null);
        blueNode1.east = yellowNode3;
        greenNode4.north = yellowNode3;

        redNode3 = new Node('Red3', 'red', null, null, yellowNode3, null, 29, 7, null);
        yellowNode3.east = redNode3;

        blueNode2 = new Node('Blue2', 'blue', null, yellowNode3, null, null, 27, 2, null);
        yellowNode3.north = blueNode2;

        blueNode3 = new Node('Blue3', 'blue', null, null, redNode4, yellowNode1, 13, 22, null);
        yellowNode1.west = blueNode3;

        redNode4 = new Node('Red4', 'red', redNode5, greenNode5, null, blueNode3, 10, 23, null);
        blueNode3.west = redNode4;

        redNode5 = new Node('Red5', 'red', null, redNode4, null, greenNode5, 3, 21, null); // This one is a bit tricky because of the node placements.
        redNode4.north = redNode5;

        greenNode5 = new Node('Green5', 'green', redNode4, null, redNode5, null, 3, 25, null);
        redNode4.south = greenNode5;
        redNode5.east = greenNode5;
    },

    update: function(){
    }
}

var chosenSquare = false;
var movePressed = false;
var attackPressed = false;
var turnEndPressed = false;
var chosenX;
var chosenY;

function setInvisible() {
    for(var i = 0; i < playerTeam.length; i++) {
        playerTeam[i].pathTiles.visible = false;
    }
    for(var i = 0; i < enemyTeam.length; i++) {
        enemyTeam[i].pathTiles.visible = false;
    }
}

function disableButtons() {
    moveButton.input.enabled = false;
    attackButton.input.enabled = false;
    hackNodeButton.input.enabled = false;
    turnEndButton.input.enabled = false;
}

function enableButtons() {
    moveButton.input.enabled = true;
    moveButton.loadTexture('moveButton');
    attackButton.input.enabled = true;
    attackButton.loadTexture('attackButton');
    hackNodeButton.input.enabled = true;
    hackNodeButton.loadTexture('hackNodeButton');
    turnEndButton.input.enabled = true;
}

function moveUnit() {
    setInvisible();
    movePressed = true;
    attackPressed = false;
    turnEndPressed = false;
    disableButtons();
}

function moveDown() {
    moveButton.loadTexture('moveButtonPressed');
}

function attackUnit() {
    setInvisible();
    attackPressed = true;
    movePressed = false;
    turnEndPressed = false;
    disableButtons();
}

function attackDown() {
    attackButton.loadTexture('attackButtonPressed');
}

function hackNode() {
    setInvisible();
    disableButtons();
    virLevel[kenta.xPlace][kenta.yPlace].whichKind();
}

function hackNodeDown() {
    hackNodeButton.loadTexture('hackNodeButtonPressed');
}

function endTurn() {
    setInvisible();
    turnEndPressed = true;
    attackPressed = false;
    movePressed = false;
    disableButtons();
}

var newUnit;
var attacker;
var doneUnit;

function chooseUnit() {
    notEnemy:
    if(chosenSquare == false) {
        chosenX = Math.floor((game.input.mousePointer.x - shiftPhysFactor) / 16);
        chosenY = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        if(gameLevel[chosenX][chosenY] instanceof PhysUnit) {
            setInvisible();
            if(gameLevel[chosenX][chosenY].turnEnd == true) {
                enableButtons();
                return;
            }
            gameLevel[chosenX][chosenY].pathFinder();
            if(turnNumber % 2 == 1) {
                if(gameLevel[chosenX][chosenY].team == 'player') {
                    if(movePressed == true) {
                        if(gameLevel[chosenX][chosenY].movesDone == gameLevel[chosenX][chosenY].moveCount) {
                            enableButtons();
                            return;
                        }
                        chosenSquare = true;
                        newUnit = gameLevel[chosenX][chosenY];
                        return;
                    }
                    if(attackPressed == true) {
                        if(gameLevel[chosenX][chosenY].attackedEnemy == true) {
                            enableButtons();
                            return;
                        }
                        setInvisible();
                        chosenSquare = true;
                        attacker = gameLevel[chosenX][chosenY];
                        return;
                    }
                    if(turnEndPressed == true) {
                        setInvisible();
                        chosenSquare = true;
                        doneUnit = gameLevel[chosenX][chosenY];
                        doneUnit.turnEnd = true;
                        chosenSquare = false;
                        enableButtons();
                        turnEnd(doneUnit.team);
                        return;
                    }
                }
                else {
                    break notEnemy;
                }
            }
            else {
                if(gameLevel[chosenX][chosenY].team == 'enemy') {
                    if(movePressed == true) {
                        if(gameLevel[chosenX][chosenY].movesDone == gameLevel[chosenX][chosenY].moveCount) {
                            enableButtons();
                            return;
                        }
                        chosenSquare = true;
                        newUnit = gameLevel[chosenX][chosenY];
                        return;
                    }
                    if(attackPressed == true) {
                        if(gameLevel[chosenX][chosenY].attackedEnemy == true) {
                        enableButtons();
                        return;
                    }
                        setInvisible();
                        console.log('attack');
                        chosenSquare = true;
                        attacker = gameLevel[chosenX][chosenY];
                        return;
                    }
                    if(turnEndPressed == true) {
                        setInvisible();
                        chosenSquare = true;
                        doneUnit = gameLevel[chosenX][chosenY];
                        console.log('hello');
                        doneUnit.turnEnd = true;
                        chosenSquare = false;
                        enableButtons();
                        turnEnd(doneUnit.team);
                        return;
                    }
                }
                else {
                    break notEnemy;
                }
            }
        } 
        else {
            setInvisible();
            enableButtons();
        }
    }
    else if(movePressed == true) {
        chooseSquare();
    }
    else if(attackPressed == true) {
        attacker.checkEnemy();
    }
}

function chooseSquare() {
    xSelected = Math.floor((game.input.mousePointer.x - shiftPhysFactor) / 16);
    ySelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
    if((xSelected >= 0 && xSelected < levelWidth) && (ySelected >= 0 && ySelected < levelHeight)) {
        if((gameLevel[xSelected][ySelected] instanceof PhysUnit) == false) {
            if((chosenX > xSelected && game.math.difference(chosenX, xSelected) <= newUnit.leftMax && chosenY == ySelected))
            {
                newUnit.movesDone += game.math.difference(chosenX, xSelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                changeSprite(newUnit);
            }
            else if((xSelected > chosenX && game.math.difference(chosenX, xSelected) <= newUnit.rightMax && chosenY == ySelected)) {
                newUnit.movesDone += game.math.difference(chosenX, xSelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                changeSprite(newUnit);
            }
            else if((chosenY > ySelected && game.math.difference(chosenY, ySelected) <= newUnit.upMax && chosenX == xSelected)) {
                newUnit.movesDone += game.math.difference(chosenY, ySelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                changeSprite(newUnit);
            }
            else if((ySelected > chosenY && game.math.difference(chosenY, ySelected) <= newUnit.downMax && chosenX == xSelected)) {
                newUnit.movesDone += game.math.difference(chosenY, ySelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                changeSprite(newUnit);
            }
            movePressed = false;
            chosenSquare = false;
            setInvisible();
            enableButtons();
            return;
        }
        movePressed = false;
        chosenSquare = false;
        setInvisible();
        enableButtons();
        return;
    }
}

function changeSprite(change) {
    change.x = change.xPlace * 16 + shiftPhysFactor;
    change.y = change.yPlace * 16 + shiftPhysFactor;
    change.pathTiles.removeAll();
    change.enemyLeft = false;
    change.enemyRight = false;
    change.enemyUp = false;
    change.enemyDown = false;
    change.pathsFound = false;
    change.leftMax = 0;
    change.rightMax = 0;
    change.upMax = 0;
    change.downMax = 0;
    chosenSquare = false;
    movePressed = false;
    enableButtons();
}

function turnEnd (player) {        
    if(playerTeam.length == 0) {
        console.log("I lose!");
    }
    else if(enemyTeam.length == 0) {
        console.log("I win!");
    }
    counter = 0;
    if(player == 'player') {
        var counter = 0;
        for(var i = 0; i < playerTeam.length; i++) {
            if(playerTeam[i].turnEnd == true) {
                counter += 1;
            }
        }
        if(counter == playerTeam.length) {
            for(var i = 0; i < playerTeam.length; i++) {
                playerTeam[i].movesDone = 0;
                playerTeam[i].attackedEnemy = false;
            }
            for(var i = 0; i < enemyTeam.length; i++) {
                enemyTeam[i].turnEnd = false;
            }
            turnNumber += 1;
            game.sound.stopAll();
            battleThemeEnemy1.play();
        }
    }
    else {
        var counter = 0;
        console.log('yellow');
        for(var i = 0; i < enemyTeam.length; i++) {
            if(enemyTeam[i].turnEnd == true) {
                counter += 1;
            }
        }
        if(counter == enemyTeam.length) {
            for(var i = 0; i < enemyTeam.length; i++) {
                enemyTeam[i].movesDone = 0;
                enemyTeam[i].turnEnd = true;
                enemyTeam[i].attackedEnemy = false;
            }
            for(var i = 0; i < playerTeam.length; i++) {
                playerTeam[i].turnEnd = false;
            }
            turnNumber += 1;
            game.sound.stopAll();
            battleThemePlayer1.play();
        }
    }
}

var goToThis;
var blueNodeVar = false;

function chooseVirUnit() {
    if(blueNodeVar == true) {
        disableButtons();
        setInvisible();
        xVirSelected = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30);
        yVirSelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        chosenVirX = kenta.xPlace;
        chosenVirY = kenta.yPlace;
        newNode = virLevel[chosenVirX][chosenVirY];
        tryAgain:
        if(newNode instanceof Node) {
            if(turnNumber % 2 == 1) {
                if(virLevel[xVirSelected][yVirSelected].effect == 'blue' && virLevel[xVirSelected][yVirSelected].unit == null) {
                    virLevel[xVirSelected][yVirSelected].unit = newNode.unit;
                    virLevel[xVirSelected][yVirSelected].unit.xPlace = xVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.yPlace = yVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * newNode.unit.xPlace);
                    virLevel[xVirSelected][yVirSelected].unit.y = 16 * yVirSelected + shiftPhysFactor;
                    virLevel[chosenVirX][chosenVirY].unit = null;
                    accessible = false;
                }
                else {
                    break tryAgain;
                }
            }
        }
        enableButtons();
        blueNodeVar = false;
        return;
    }
    notNode:
    if(chosenVirSquare == false) {
        chosenVirX = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30);
        chosenVirY = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        newNode = virLevel[chosenVirX][chosenVirY];
        if(newNode instanceof Node) {
            if(turnNumber % 2 == 1) {
                if(newNode.unit.team == 'player') {
                    if(movePressed == true) {
                        chosenVirSquare = true;
                    }
                }
                else {
                    break notNode;
                }
            }
            else {
                if(newNode.unit.team == 'enemy') {
                    if(movePressed == true) {
                        chosenVirSquare = true;
                    }
                }
                else {
                    break notNode;
                }
            }
        }
    }
    else {
        xVirSelected = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30);
        yVirSelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        if((xVirSelected >= 0 && xVirSelected < levelWidth) && (yVirSelected >= 0 && yVirSelected < levelHeight)) {
            goToThis = virLevel[xVirSelected][yVirSelected];
            if(goToThis instanceof Node) {
                newNode.unit.checkNodes(goToThis);
                if(goToThis.unit != null) {
                    isFull = true;
                }
                else {
                    isFull = false;
                }
                if(accessible == true && isFull == false && newNode.unit.movesDone < newNode.unit.moveCount) {
                    newNode.unit.movesDone += 1;
                    virLevel[xVirSelected][yVirSelected].unit = newNode.unit;
                    virLevel[xVirSelected][yVirSelected].unit.xPlace = xVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.yPlace = yVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * newNode.unit.xPlace);
                    virLevel[xVirSelected][yVirSelected].unit.y = 16 * yVirSelected + shiftPhysFactor;
                    virLevel[chosenVirX][chosenVirY].unit = null;
                    chosenVirSquare = false;
                    movePressed = false;
                    accessible = false;
                    enableButtons();
                }
                chosenVirSquare = false;
                movePressed = false;
                accessible = false;
                enableButtons();
            }
            else { 
                chosenVirSquare = false;
                movePressed = false;
                accessible = false;
                enableButtons();
            }
        }
    }
}
