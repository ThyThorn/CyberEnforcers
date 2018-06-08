var gameLevel;

var virLevel;

var background;
var backgroundVir;
var moveButton;
var kaito;
var virus;
var kaitoObject;
var virusObject;
var playerTeam = new Array();
var enemyTeam = new Array();
var virViruses = new Array();
var levelWidth;
var levelHeight;
var mapWidth;
var mapHeight;
var xSelected;
var ySelected;
var turnNumber;
var shiftPhysFactor = 16;
var shiftUIFactor = 16 * 12;
var shiftVirFactor = 16 * 13;
var timer;
var attackTimer;

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
var yellowNode4;
var accessible;
var isFull;
var chosenVirSquare;
var chosenVirX;
var chosenVirY;
var kenta;
var physNode;
var xAOE;
var yAOE;
var northBound;
var southBound;
var westBound;
var eastBound;
var virCounter;
var transposed = false; // Initialize it here and not in create.
var whichLevel;

var newUnit;
var attacker;
var doneUnit;
var aiIndex;
var goToThis;
var blueNodeVar;
var aiTimer;
var virTimer;

var chosenSquare;
var movePressed;
var attackPressed;
var turnEndPressed;
var chosenX;
var chosenY;
var turnEndEnsure;
var stopAI;

var level2Battle = function(game) {};
level2Battle.prototype = {
    preload: function() {
        game.load.atlas('atlas', 'assets/img/allSprites-wBase.png', 'assets/img/allSprites-wBase.json'); // Load the atlas.
        game.load.image('background', 'assets/img/level2.png');
        game.load.image('backgroundVir', 'assets/img/level1v.png');
        game.load.image('greenTile', 'assets/img/highlight.png');

        game.load.image('moveButton', 'assets/img/movefullicon.png');
        game.load.image('moveButtonPressed', 'assets/img/movefullicongrey.png');

        game.load.image('attackButton', 'assets/img/attackfullicon.png');
        game.load.image('attackButtonPressed', 'assets/img/attackfullicongrey.png');

        game.load.image('hackNodeButton', 'assets/img/hacknodefullicon.png');
        game.load.image('hackNodeButtonPressed', 'assets/img/hacknodefullicongrey.png');

        game.load.image('turnEndButton', 'assets/img/turnendicon.png');
        game.load.image('turnEndButtonPressed', 'assets/img/turnendicongrey.png');

        game.load.image('borderL','assets/img/borderL.png');
        game.load.image('borderR','assets/img/borderR.png');
        game.load.image('bar','assets/img/bar.png');
        game.load.image('UIr','assets/img/UIrow.png');
        game.load.image('UIc','assets/img/UIcolumn.png');

        game.load.image('kaito', 'assets/img/kaitoHeadshot.png');
        game.load.image('kenta', 'assets/img/kentaHeadshot.png');
        game.load.image('junpei', 'assets/img/junpeiHeadshot.png');
        game.load.image('atsumi', 'assets/img/atsumiHeadshot.png');
        game.load.image('hayato', 'assets/img/hayatoHeadshot.png');

        game.load.image('attackicon','assets/img/attackicon.png');
        game.load.image('defenseicon','assets/img/defenseicon.png');
        game.load.image('moveicon','assets/img/moveicon.png');
        game.load.image('itemicon','assets/img/itemicon.png');

        game.load.audio('battleThemePlayer', 'assets/audio/Random Battle.mp3');
        game.load.audio('battleThemeEnemy', 'assets/audio/Hayato Battle.wav');

        game.load.audio('attackSound', 'assets/audio/Attack sound.wav');
        game.load.audio('redNode', 'assets/audio/redNode.mp3');
        game.load.audio('blueNode', 'assets/audio/blueNode.wav');
        game.load.audio('greenNode', 'assets/audio/greenNode.wav');
        game.load.audio('death', 'assets/audio/death.wav');
        game.load.audio('confirmation', 'assets/audio/Confirmation sound.wav');
        game.load.audio('clickThru', 'assets/audio/ClickThruSound.mp3');
        game.load.audio('negative', 'assets/audio/Negative.mp3');
    },

    create: function() {
        gameLevel = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
        ];

        virLevel = [
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
        // Initialize all the global variables to be changed for each level here. This is important, since they need to be reset whenever this state starts.
        levelWidth = 30;
        levelHeight = 30;
        turnNumber = 1;
        mapWidth = 480;
        mapHeight = 480;
        xAOE = 3;
        yAOE = 3;
        whichLevel = 2;

        // Initializing all these here to be safe.
        accessible = false;
        isFull = false;
        chosenVirSquare = false;
        virCounter = 0;
        aiIndex = 0;
        blueNodeVar = false;
        chosenSquare = false;
        movePressed = false;
        attackPressed = false;
        turnEndPressed = false;
        turnEndEnsure = false;
        stopAI = false;

        game.scale.setGameSize(shiftPhysFactor * 2 + mapWidth * 2 + shiftUIFactor, mapHeight + shiftPhysFactor * 2);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        if(transposed == false) {
            gameLevel = Phaser.ArrayUtils.transposeMatrix(gameLevel);
            transposed = true;
        }

        background = game.add.sprite(0 + shiftPhysFactor, 0 + shiftPhysFactor, 'background');
        background.inputEnabled = true;
        background.events.onInputDown.add(PhysUnit.prototype.chooseUnit, this);

        backgroundVir = game.add.sprite(background.width + shiftVirFactor, 0 + shiftPhysFactor, 'backgroundVir');
        backgroundVir.inputEnabled = true;
        backgroundVir.events.onInputDown.add(VirUnit.prototype.chooseVirUnit, this);

        game.add.image(32*16,0,'bar');
        game.add.image(32*16,31*16,'bar');
        game.add.image(0,0,'borderL');
        game.add.image(32*16+160,0,'borderR');
        game.add.image(31*16, 16 +50,'UIr');
        game.add.image(31*16, 16*13,'UIr');
        game.add.image(31*16, 16*16,'UIr');
        game.add.image(31*16+28+16,16*13,'UIc');
        game.add.image(31*16+28*2+16*2,16*13,'UIc');
        game.add.image(31*16+28*3+16*3,16*13,'UIc');
        game.add.image(31*16, 16*18+10,'UIr');
        game.add.image(31*16+14, 16*14,'defenseicon');
        var attackicon = game.add.image(34*16+13, 16*14+3,'attackicon');
        attackicon.scale.set(.8,.8);
        var moveicon = game.add.image(37*16+8, 16*14+2,'moveicon');
        moveicon.scale.set(.9,.9);
        var moveicon = game.add.image(40*16+1, 16*14,'itemicon');
        game.add.image(31*16, 16*22+12,'UIr');
        game.add.image(31*16, 16*26+14,'UIr');

        moveButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 50 + shiftPhysFactor, 'moveButton', moveUnit, this);
        moveButton.onInputDown.add(moveDown, this);

        attackButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 116 + shiftPhysFactor, 'attackButton', attackUnit, this);
        attackButton.onInputDown.add(attackDown, this);

        hackNodeButton = game.add.button(shiftPhysFactor + mapWidth + 16, mapHeight - 183 + shiftPhysFactor, 'hackNodeButton', hackNode, this);
        hackNodeButton.onInputDown.add(hackNodeDown, this);

        turnEndButton = game.add.button(shiftPhysFactor + mapWidth + 16, shiftPhysFactor, 'turnEndButton', endTurn, this);
        turnEndButton.onInputDown.add(endTurnDown, this);

        battleThemePlayer = game.add.audio('battleThemePlayer');
        battleThemePlayer.loop = true;
        battleThemePlayer.volume = 0.1;
        battleThemePlayer.play();
        battleThemeEnemy = game.add.audio('battleThemeEnemy');
        battleThemeEnemy.loop = true;
        battleThemeEnemy.volume = 0.3;
        attackSound = game.add.audio('attackSound');
        redNodeSound = game.add.audio('redNode');
        blueNodeSound = game.add.audio('blueNode');
        greenNodeSound = game.add.audio('greenNode');
        deathSound = game.add.audio('death');
        confirmation = game.add.audio('confirmation');
        clickThruSound = game.add.audio('clickThru');
        negative = game.add.audio('negative');

        // Only three player units.
        kaitoObject = new PhysUnit('Kaito', 13, 4, 2, 6, 'player', false, 16, 9, 'atlas', 'Kaito01', 'kaito');
        game.add.existing(kaitoObject);
        atsumiObject = new PhysUnit('Atsumi', 13, 4, 2, 5, 'player', false, 25, 18, 'atlas', 'Atsumi01', 'atsumi');
        game.add.existing(atsumiObject);
        junpeiObject = new PhysUnit('Junpei', 13, 4, 2, 7, 'player', false, 12, 21, 'atlas', 'Junpei01', 'junpei');
        game.add.existing(junpeiObject);

        // One 'boss' character and three to four viruses as his minions.
        hayatoObject = new PhysUnit('Hayato', 15, 8, 1, 13, 'enemy', true, 22, 28, 'atlas', 'Hayato01', 'hayato');
        game.add.existing(hayatoObject);
        virusObject1 = new PhysUnit('Virus', 7, 7, 1, 13, 'enemy', true, 20, 3, 'atlas', 'EnemyRed01');
        game.add.existing(virusObject1);
        virusObject2 = new PhysUnit('Virus', 7, 7, 1, 13, 'enemy', true, 7, 13, 'atlas', 'EnemyGreen01');
        game.add.existing(virusObject2);

        kenta = new VirUnit('Kenta', 5, 'player', false, 16, 9, 'atlas', 'Kenta01', 'kenta');
        game.add.existing(kenta);

        virEnemy = new VirUnit('Virus', 1, 'enemy', true, 27, 27, 'atlas', 'EnemyBlue01');
        game.add.existing(virEnemy);

        virEnemy2 = new VirUnit('Virus', 1, 'enemy', true, 2, 9, 'atlas', 'EnemyBlue01');
        game.add.existing(virEnemy2);

        greenNode1 = new Node('Green1', 'green', yellowNode4, null, null, greenNode2, 2, 9, null); // Make sure to give the node the corresponding unit, if there is any!
        greenNode2 = new Node('Green2', 'green', null, null, greenNode1, greenNode3, 7, 9, null);
        greenNode1.east = greenNode2; // Note that since greenNode2 was undefined when I initialized greenNode1, I need to set its value to greenNode1.east again.
        
        greenNode3 = new Node('Green3', 'green', null, redNode2, greenNode2, blueNode1, 11, 9, null);
        greenNode2.east = greenNode3;
        
        redNode1 = new Node('Red1', 'red', null, blueNode1, null, null, 16, 3, null);
        blueNode1 = new Node('Blue1', 'blue', redNode1, yellowNode1, greenNode3, yellowNode3, 16, 9, kenta);
        redNode1.south = blueNode1;
        
        redNode2 = new Node('Red2', 'red', greenNode3, null, null, null, 11, 13, virEnemy2);
        greenNode3.south = redNode2;
        greenNode3.east = blueNode1;
        
        yellowNode1 = new Node('Yellow1', 'yellow', blueNode1, null, null, yellowNode2, 16, 27, virEnemy);
        blueNode1.south = yellowNode1;
        
        yellowNode2 = new Node('Yellow2', 'yellow', greenNode4, null, yellowNode1, null, 27, 27, null);
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

        blueNode3 = new Node('Blue3', 'blue', null, null, redNode4, null, 13, 22, null);

        redNode4 = new Node('Red4', 'red', null, null, greenNode5, blueNode3, 10, 23, null);
        blueNode3.west = redNode4;

        redNode5 = new Node('Red5', 'red', null, greenNode5, null, null, 3, 21, null); // This one is a bit tricky because of the node placements.

        greenNode5 = new Node('Green5', 'green', redNode5, null, null, redNode4, 3, 25, null);
        redNode4.west = greenNode5;
        redNode5.south = greenNode5;

        yellowNode4 = new Node('Yellow4', 'yellow', null, greenNode1, null, null, 2, 4, null);
        greenNode1.north = yellowNode4;
    },

    update: function(){
        if(playerTeam.length == 0 && stopAI == false) {
            stopAI = true;
            game.sound.stopAll();
            background.inputEnabled = false;
            backgroundVir.inputEnabled = false;
            game.camera.fade(0x000000);
            game.camera.onFadeComplete.add(this.loseBattle, this);
            enemyTeam.length = 0;
            virViruses.length = 0;
        }
        else if(enemyTeam.length == 0 && stopAI == false) {
            stopAI = true;
            game.sound.stopAll();
            background.inputEnabled = false;
            backgroundVir.inputEnabled = false;
            game.camera.fade(0x000000);
            game.camera.onFadeComplete.add(this.winBattle, this);
            playerTeam.length = 0;
            virViruses.length = 0;
        }
        else if(turnEndEnsure == false && turnNumber % 2 == 1 & stopAI == false) {
            var updateCounter = 0;
            for(var i = 0; i < playerTeam.length; i++) {
                if(playerTeam[i].turnEnd == true) {
                    updateCounter += 1;
                }
            }
            if(updateCounter == playerTeam.length) {
                updateCounter = 0;
                turnEndEnsure = true;
                PhysUnit.prototype.turnEnd();
            }
        }
    },

    loseBattle: function() {
        transposed = false;
        game.scale.setGameSize(960, 600);
        game.state.start('gameOver');
    },

    winBattle: function() {
        transposed = false;
        game.scale.setGameSize(960, 600);
        game.state.start('level3Dialog');
    }
}

function setInvisible() {
    for(var i = 0; i < playerTeam.length; i++) {
        playerTeam[i].pathTiles.visible = false;
        playerTeam[i].UIdefenseT.visible = false;
        playerTeam[i].UIattackT.visible = false;
        playerTeam[i].UImovecountT.visible = false;
        playerTeam[i].UIhealthT.visible = false;
        if(playerTeam[i].tint != 0x696969) {
            playerTeam[i].tint = 0xffffff;
        }
        if(playerTeam[i].portrait != null) {
            playerTeam[i].portrait.visible = false;
        }
    }
    for(var i = 0; i < enemyTeam.length; i++) {
        enemyTeam[i].pathTiles.visible = false;
        enemyTeam[i].pathTiles.visible = false;
        enemyTeam[i].UIdefenseT.visible = false;
        enemyTeam[i].UIattackT.visible = false;
        enemyTeam[i].UImovecountT.visible = false;
        enemyTeam[i].UIhealthT.visible = false;
        if(enemyTeam[i].tint != 0x696969) {
            enemyTeam[i].tint = 0xffffff;
        }
        if(enemyTeam[i].portrait != null) {
            enemyTeam[i].portrait.visible = false;
        }
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
    turnEndButton.loadTexture('turnEndButton');
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
    virLevel[kenta.xPlace][kenta.yPlace].whichKind(); // Kenta is the only possible VW unit that the player can use.
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

function endTurnDown() {
    turnEndButton.loadTexture('turnEndButtonPressed');
}
