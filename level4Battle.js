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
var nodes = new Array(); // Not likely to be used, but it could be helpful later.
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
var yellowNode1;
var yellowNode2;
var yellowNode3;
var yellowNode4;
var yellowNode5;
var yellowNode6;
var yellowNode7;
var yellowNode8;
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

var level4Battle = function(game) {};
level4Battle.prototype = {
    preload: function() {
        game.load.atlas('atlas', 'assets/img/allSprites-wBase.png', 'assets/img/allSprites-wBase.json'); // Load the atlas.
        game.load.image('background', 'assets/img/level4.png');
        game.load.image('backgroundVir', 'assets/img/level4v.png');
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
        game.load.image('kimura','assets/img/kimuraHeadshot.png');
        game.load.image('zaizen', 'assets/img/zaizenHeadshot.png');

        game.load.image('attackicon','assets/img/attackicon.png');
        game.load.image('defenseicon','assets/img/defenseicon.png');
        game.load.image('moveicon','assets/img/moveicon.png');
        game.load.image('itemicon','assets/img/itemicon.png');

        game.load.audio('battleThemePlayer', 'assets/audio/Battle of the Void.mp3');
        game.load.audio('battleThemeEnemy', 'assets/audio/Battle Escape.mp3');

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
        // Initialize all the global variables to be changed for each level here. This is important, since they need to be reset whenever this state starts.
        gameLevel = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
        levelWidth = 30;
        levelHeight = 30;
        turnNumber = 1;
        mapWidth = 480;
        mapHeight = 480;
        xAOE = 3;
        yAOE = 3;
        whichLevel = 4;

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
        confirmationSound = game.add.audio('confirmation');
        clickThruSound = game.add.audio('clickThru');
        negative = game.add.audio('negative');

        // Only four player units.
        kaitoObject = new PhysUnit('Kaito', 20, 10, 6, 200, 'player', false, 14, 25, 'atlas', 'Kaito01', 'kaito');
        game.add.existing(kaitoObject);
        atsumiObject = new PhysUnit('Atsumi', 25, 180, 5, 200, 'player', false, 15, 25, 'atlas', 'Atsumi01', 'atsumi');
        game.add.existing(atsumiObject);
        junpeiObject = new PhysUnit('Junpei', 15, 200, 3, 70, 'player', false, 15, 24, 'atlas', 'Junpei01', 'junpei');
        game.add.existing(junpeiObject);
        hayatoObject = new PhysUnit('Hayato', 25, 150, 5, 9, 'player', false, 14, 24, 'atlas', 'Hayato01', 'hayato');
        game.add.existing(hayatoObject);

        // Only two enemies in the Physical World. Both should be somewhat tough to beat with only Physical World units.
        kimuraObject = new PhysUnit('Kimura', 25, 150, 5, 9, 'enemy', true, 15, 6, 'atlas', 'Erika01', 'kimura');
        game.add.existing(kimuraObject);
        zaizenObject = new PhysUnit('Zaizen', 25, 150, 5, 9, 'enemy', true, 14, 6, 'atlas', 'Zaizen01', 'zaizen');
        game.add.existing(zaizenObject);

        kenta = new VirUnit('Kenta', 7, 'player', null, 9, 4, 'atlas', 'Kenta01', 'kenta');
        game.add.existing(kenta);

        blueNode1 = new Node('Blue1', 'blue', null, redNode1, null, null, 9, 4, kenta);

        redNode1 = new Node('Red1', 'red', blueNode1, null, yellowNode1, greenNode1, 9, 7, null);
        blueNode1.south = redNode1;

        greenNode1 = new Node('Green1', 'green', null, null, redNode1, greenNode2, 14, 7, null);
        redNode1.east = greenNode1;

        greenNode2 = new Node('Green2', 'green', null, null, greenNode1, redNode2, 15, 7, null);
        greenNode1.east = greenNode2;

        redNode2 = new Node('Red2', 'red', blueNode2, null, greenNode2, yellowNode2, 20, 7, null);
        greenNode2.east = redNode2;

        blueNode2 = new Node('Blue2', 'blue', null, redNode2, null, null, 20, 4, null);
        redNode2.north = blueNode2;

        yellowNode1 = new Node('Yellow1', 'yellow', null, redNode3, null, redNode1, 6, 7, null);
        redNode1.west = yellowNode1;

        redNode3 = new Node('Red3', 'red', yellowNode1, yellowNode3, null, null, 6, 11, null);
        yellowNode1.south = redNode3;

        yellowNode3 = new Node('Yellow3', 'yellow', redNode3, redNode4, null, null, 6, 14, null);
        redNode3.south = yellowNode3;

        redNode4 = new Node('Red4', 'red', yellowNode3, null, null, yellowNode4, 6, 17, null);
        yellowNode3.south = redNode4;

        yellowNode2 = new Node('Yellow2', 'yellow', null, redNode5, redNode2, null, 23, 7, null);
        redNode2.east = yellowNode2;

        redNode5 = new Node('Red5', 'red', yellowNode2, yellowNode5, null, null, 23, 11, null);
        yellowNode2.south = redNode5;

        yellowNode5 = new Node('Yellow5', 'yellow', redNode5, redNode6, null, null, 23, 14, null);
        redNode5.south = yellowNode5;

        redNode6 = new Node('Red6', 'red', yellowNode5, null, yellowNode6, null, 23, 17, null);
        yellowNode5.south = redNode6;

        yellowNode4 = new Node('Yellow4', 'yellow', null, null, redNode4, redNode7, 9, 17, null);
        redNode4.east = yellowNode4;

        redNode7 = new Node('Red7', 'red', null, null, yellowNode4, yellowNode7, 13, 17, null);
        yellowNode4.east = redNode7;

        yellowNode7 = new Node('Yellow7', 'yellow', blueNode3, null, redNode7, yellowNode8, 14, 18, null);
        redNode7.east = yellowNode7;

        yellowNode6 = new Node('Yellow6', 'yellow', null, null, redNode8, redNode6, 20, 17, null);
        redNode6.west = yellowNode6;

        redNode8 = new Node('Red8', 'red', null, null, yellowNode8, yellowNode6, 16, 17, null);
        yellowNode6.west = redNode8;

        yellowNode8 = new Node('Yellow8', 'yellow', null, blueNode3, yellowNode7, redNode8, 16, 18, null);
        yellowNode7.east = yellowNode8;
        redNode8.west = yellowNode8;

        blueNode3 = new Node('Blue3', 'blue', yellowNode8, yellowNode7, null, null, 15, 23, null);
        yellowNode8.south = blueNode3;
        yellowNode7.north = blueNode3;

        greenNode3 = 0;
        greenNode4 = 0;

        blueNode4 = 0;
        blueNode5 = 0;
        blueNode6 = 0;
        blueNode7 = 0;
        blueNode8 = 0;
        blueNode9 = 0;
        blueNode10 = 0;
        blueNode11 = 0;
        blueNode12 = 0;
        blueNode13 = 0;

        redNode9 = 0;
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
        game.state.start('ending');
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
