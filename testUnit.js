function Unit(unitName, health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace, key, frame)   // Use the x and y variables as part of making the sprite.
{
	Phaser.Sprite.call(this, game, xPlace * 16, yPlace * 16, key, frame);
    this.width = 16;
    this.height = 16;
    this.unitName = unitName;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team; // This is a string that determines whether the unit is a player unit or an enemy unit.
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    gameLevel1[xPlace][yPlace] = this;
    this.inputEnabled = true;
    game.physics.enable(this);
    this.events.onInputDown.add(Unit.prototype.selector, this);
    if(this.team == 'player')
    {
        playerTeam.push(this);
        this.index = playerTeamIndex;
        playerTeamIndex++;
    }
    else
    {
        enemyTeam.push(this);
        this.index = enemyTeamIndex;
        enemyTeamIndex++;
    }

}

Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

Unit.prototype.selector = function() {
    var moveDiff = this.moveCount - this.movesDone;
    for(var i = 1; i <= moveDiff; i++){
        if(this.xPlace - i < 0) {
            break;
        }
        else if(gameLevel1[this.xPlace - i][this.yPlace] != 0) {
            break;
        }
        console.log(3);
        //blueTile = game.add.sprite((this.xPlace - i) * 16, this.yPlace * 16, 'blueTile'); // Tile to be used to show that a unit can go to the square.
    }
    for(var i = 1; i <= moveDiff; i++){
        if(this.yPlace - i < 0) {
            break;
        }
        else if(gameLevel1[this.xPlace][this.yPlace - i] != 0) {
            break;
        }
        console.log(4);
    }
    for(var i = 1; i <= moveDiff; i++) {
        if(this.xPlace + i >= 30) {
            break;
        }
        else if(gameLevel1[this.xPlace + i][this.yPlace] != 0) {
            break;
        }
        console.log(11);
    }
    for(var i = 1; i <= moveDiff; i++) {
        if(this.yPlace + i >= 30) {
            break;
        }
        else if(gameLevel1[this.xPlace][this.yPlace + i] != 0) {
            break;
        }
        console.log(9);
    }
}

Unit.prototype.battle = function() {
    if(doCombat == true) {
        var damage = this.attack - gameLevel1[this.xPlace - 1][this.yPlace].defense;
        if(enemyLeft == true) {
            gameLevel1[this.xPlace - 1][this.yPlace].health -= damage;
            if(gameLevel1[this.xPlace - 1][this.yPlace].health <= 0) {
                enemyLeft = false;
            }
        }
        if(enemyRight == true) {
            gameLevel1[this.xPlace + 1][this.yPlace].health -= damage;
            if(gameLevel1[this.xPlace + 1][this.yPlace].health <= 0) {
                enemyRight = false;
            }
        }
        if(enemyUp == true) {
            gameLevel1[this.xPlace][this.yPlace - 1].health -= damage;
            if(gameLevel1[this.xPlace][this.yPlace - 1].team.health <= 0) {
                enemyUp = false;
            }
        }
        if(enemyDown == true) {
            gameLevel1[this.xPlace][this.yPlace + 1].health -= damage;
            if(gameLevel1[this.xPlace][this.yPlace + 1].team.health <= 0) {
                enemyDown = false;
            }
        }
    }
    doCombat = false;
}

var doCombat = false;
var enemyLeft = false;
var enemyRight = false;
var enemyUp = false;
var enemyDown = false;

Unit.prototype.checkEnemy = function() {
    if(this.turnEnd == false) {
        if(this.xPlace - 1 >= 0) {
            if(gameLevel1[this.xPlace - 1][this.yPlace] instanceof Unit) {
                if(gameLevel1[this.xPlace - 1][this.yPlace].team != this.team) {
                    doCombat = true;
                    enemyLeft = true;
                }
            }
        }
        if(this.xPlace + 1 <= 30) {
            if(gameLevel1[this.xPlace + 1][this.yPlace] != 0) {
                if(gameLevel1[this.xPlace + 1][this.yPlace].team != this.team) {
                    doCombat = true;
                    enemyRight = true;
                }
            }
        }
        if(this.yPlace - 1 >= 0) {
            if(gameLevel1[this.xPlace][this.yPlace - 1] != 0) {
                if(gameLevel1[this.xPlace][this.yPlace - 1].team != this.team) {
                    doCombat = true;
                    enemyUp = true;
                }
            }
        }
        if(this.yPlace + 1 <= 30) {
            if(gameLevel1[this.xPlace][this.yPlace + 1] != 0) {
                if(gameLevel1[this.xPlace][this.yPlace + 1].team != this.team) {
                    doCombat = true;
                    enemyDown = true;
                }
            }
        }
    }
}
