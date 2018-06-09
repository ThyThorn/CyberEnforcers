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
var blueNode4;
var blueNode5;
var blueNode6;
var blueNode7;
var blueNode8;
var blueNode9;
var blueNode10;
var blueNode11;
var blueNode12;
var blueNode13; 
var redNode1;
var redNode2;
var redNode3;
var redNode4;
var redNode5;
var redNode6;
var redNode7;
var redNode8;
var redNode9;

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

var level3Battle = function(game) {};
level3Battle.prototype = {
    preload: function() {
        game.load.atlas('atlas', 'assets/img/allSprites-wBase.png', 'assets/img/allSprites-wBase.json'); // Load the atlas.
        game.load.image('background', 'assets/img/level3.png');
        game.load.image('backgroundVir', 'assets/img/level3v.png');
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
        game.load.image('kazuhito','assets/img/kazuhitoHeadshot.png');

        game.load.image('attackicon','assets/img/attackicon.png');
        game.load.image('defenseicon','assets/img/defenseicon.png');
        game.load.image('moveicon','assets/img/moveicon.png');
        game.load.image('itemicon','assets/img/itemicon.png');

        game.load.audio('battleThemePlayer', 'assets/audio/Underwater_battle.mp3');
        game.load.audio('battleThemeEnemy', 'assets/audio/Kazuhito Battle.mp3');

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
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        whichLevel = 3;

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
        var attackicon =game.add.image(34*16+13, 16*14+3,'attackicon');
        attackicon.scale.set(.8,.8);
        var moveicon= game.add.image(37*16+8, 16*14+2,'moveicon');
        moveicon.scale.set(.9,.9);
        var moveicon= game.add.image(40*16+1, 16*14,'itemicon');
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
        battleThemePlayer.volume = 0.6;
        battleThemePlayer.play();
        battleThemeEnemy = game.add.audio('battleThemeEnemy');
        battleThemeEnemy.loop = true;
        battleThemeEnemy.volume = 0.6;
        attackSound = game.add.audio('attackSound');
        redNodeSound = game.add.audio('redNode');
        blueNodeSound = game.add.audio('blueNode');
        greenNodeSound = game.add.audio('greenNode');
        deathSound = game.add.audio('death');
        confirmation = game.add.audio('confirmation');
        clickThruSound = game.add.audio('clickThru');
        negative = game.add.audio('negative');

        // Only four player units.
        kaitoObject = new PhysUnit('Kaito', 40, 10, 10, 5, 'player', false, 12, 5, 'atlas', 'Kaito01', 'kaito');
        game.add.existing(kaitoObject);
        atsumiObject = new PhysUnit('Atsumi', 50, 8, 8, 6, 'player', false, 5, 3, 'atlas', 'Atsumi01', 'atsumi');
        game.add.existing(atsumiObject);
        junpeiObject = new PhysUnit('Junpei', 35, 12, 7, 5, 'player', false, 11, 3, 'atlas', 'Junpei01', 'junpei');
        game.add.existing(junpeiObject);
        hayatoObject = new PhysUnit('Hayato', 40, 8, 12, 4, 'player', false, 5, 5, 'atlas', 'Hayato01', 'hayato');
        game.add.existing(hayatoObject);

        // One 'boss' character and four viruses as his minions.
        kazuhitoObject = new PhysUnit('Kazuhito', 60, 17, 3, 5, 'enemy', true, 20, 23, 'atlas', 'Kazuhito01', 'kazuhito');
        game.add.existing(kazuhitoObject);
        virusObject1 = new PhysUnit('Virus', 20, 20, 3, 5, 'enemy', true, 20, 15, 'atlas', 'EnemyRed01');
        game.add.existing(virusObject1);
        virusObject2 = new PhysUnit('Virus', 20, 15, 2, 7, 'enemy', true, 23, 14, 'atlas', 'EnemyGreen01');
        game.add.existing(virusObject2);
        virusObject3 = new PhysUnit('Virus', 20, 20, 3, 5, 'enemy', true, 3, 20, 'atlas', 'EnemyRed01');
        game.add.existing(virusObject3);
        virusObject4 = new PhysUnit('Virus', 20, 15, 2, 7, 'enemy', true, 7, 23, 'atlas', 'EnemyGreen01');

        kenta = new VirUnit('Kenta', 5, 'player', false, 3, 2, 'atlas', 'Kenta01', 'kenta');
        game.add.existing(kenta);

        greenNode1 = new Node('Green1', 'green', null, null, null, null, 3, 2, kenta); // Make sure to give the node the corresponding unit, if there is any!
        greenNode2 = new Node('Green2', 'green', null, null, null, null, 14, 2, null);
        greenNode3 = new Node('Green3', 'green', null, null, null, null, 27, 2, null);
        greenNode4 = new Node('Green4', 'green', null, null, null, null, 2, 26, null);
        
        redNode1 = new Node('Red1', 'red', null, null, null, null, 9, 8, null);
        redNode2 = new Node('Red2', 'red', null, null, null, null, 21, 8, null);
        redNode3 = new Node('Red3', 'red', null, null, null, null, 2, 15, null);
        redNode4 = new Node('Red4', 'red', null, null, null, null, 15, 14, null);
        redNode5 = new Node('Red5', 'red', null, null, null, null, 26, 15, null);
        redNode6 = new Node('Red6', 'red', null, null, null, null, 8, 20, null);
        redNode7 = new Node('Red7', 'red', null, null, null, null, 21, 20, null);
        redNode8 = new Node('Red8', 'red', null, null, null, null, 14, 26, null);
        redNode9 = new Node('Red9', 'red', null, null, null, null, 26, 26, null);
        
        blueNode1 = new Node('Blue1', 'blue', null, null, null, null, 4, 2, null);
        blueNode2 = new Node('Blue2', 'blue', null, null, null, null, 14, 4, null);
        blueNode3 = new Node('Blue3', 'blue', null, null, null, null, 27, 4, null);
        blueNode4 = new Node('Blue4', 'blue', null, null, null, null, 9, 10, null);
        blueNode5 = new Node('Blue5', 'blue', null, null, null, null, 21, 10, null);
        blueNode6 = new Node('Blue6', 'blue', null, null, null, null, 2, 16, null);   
        blueNode7 = new Node('Blue7', 'blue', null, null, null, null, 14, 16, null);
        blueNode8 = new Node('Blue8', 'blue', null, null, null, null, 26, 17, null);
        blueNode9 = new Node('Blue9', 'blue', null, null, null, null, 8, 22, null);
        blueNode10 = new Node('Blue10', 'blue', null, null, null, null, 21, 22, null);
        blueNode11 = new Node('Blue11', 'blue', null, null, null, null, 2, 28, null);
        blueNode12 = new Node('Blue12', 'blue', null, null, null, null, 14, 28, null);
        blueNode13 = new Node('Blue13', 'blue', null, null, null, null, 26, 28, null);
        
        // setting up directions
        greenNode1.west = blueNode1;
        greenNode1.south = redNode3;
        greenNode2.east = blueNode1;
        greenNode2.west = greenNode3;
        greenNode2.south = blueNode2;
        greenNode3.east = greenNode2;
        greenNode3.south = blueNode3;
        greenNode4.north = blueNode6;
        greenNode4.south = blueNode11;
        greenNode4.west = redNode8;
        
        blueNode1.east = greenNode1;
        blueNode1.west = greenNode2;
        blueNode2.north = greenNode2;
        blueNode2.south = blueNode7;
        blueNode3.north = greenNode3;
        blueNode4.north = redNode1;
        blueNode4.west = blueNode5;
        blueNode5.east = blueNode4;
        blueNode5.north = redNode2;
        blueNode5.south = redNode7;
        blueNode6.north = redNode3;
        blueNode6.south = greenNode4;
        blueNode6.west = blueNode7;
        blueNode7.north = redNode4;
        blueNode7.east = blueNode6;
        blueNode7.south = redNode8;
        blueNode8.north = redNode5;
        blueNode8.south = redNode9;
        blueNode9.north = redNode6;
        blueNode10.north = redNode7;
        blueNode11.north = greenNode4;
        blueNode11.west = blueNode12;
        blueNode12.north = redNode8;
        blueNode12.east = blueNode11;
        blueNode12.west = blueNode13;
        blueNode13.north = redNode9;
        blueNode13.east = blueNode12;
        
        redNode1.west = redNode2;
        redNode1.south = blueNode4;
        redNode2.east = redNode1;
        redNode2.south = blueNode5;
        redNode3.north = greenNode1;
        redNode3.south = blueNode6;
        redNode3.west = redNode5;
        redNode4.south = blueNode7;
        redNode5.east = redNode3;
        redNode5.south = blueNode8;
        redNode6.south = blueNode9;
        redNode6.west = redNode7;
        redNode7.north = blueNode5;
        redNode7.east = redNode6;
        redNode7.south = blueNode10;
        redNode8.east = greenNode4;
        redNode8.north = blueNode7;
        redNode8.south = blueNode12;
        redNode8.west = blueNode13;
        redNode9.north = redNode5;
        redNode9.east = redNode8;
        redNode9.south = blueNode13;
        
        yellowNode1 = 0;
        yellowNode2 = 0;
        yellowNode3 = 0;
        yellowNode4 = 0;
        yellowNode5 = 0;    
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
        game.state.start('level4Dialog');
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
