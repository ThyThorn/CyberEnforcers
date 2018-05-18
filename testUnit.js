// Constructor for unit in the Physical World.

function Level1Unit(unitName, health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace, key, frame)
{
	Phaser.Sprite.call(this, game, xPlace * 16, yPlace * 16, key, frame);
    this.width = 16; // Will likely be removed later, since this is needed
    this.height = 16; // only because the current sprite is too big.
    this.unitName = unitName; // Give the unit a name.
    this.health = health; // Give unit health, attack and defense.
    this.attack = attack;
    this.defense = defense;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team; // This is a string that determines whether the unit is a player unit or an enemy unit.
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
    this.xPlace = xPlace; // Set the unit's x and y coordinates.
    this.yPlace = yPlace;
    gameLevel1[xPlace][yPlace] = this; // Put it in the 2D array.
    this.inputEnabled = true; // Let the unit be clicked on.
    this.pathsFound = false;
    this.toggle = false;
    this.pathTiles = game.add.group();
    this.leftMax = 0;
    this.rightMax = 0;
    this.upMax = 0;
    this.downMax = 0;
    game.physics.enable(this);
    this.events.onInputDown.add(Level1Unit.prototype.selector, this);
    if(this.team == 'player') // Put the unit in either the player's team or the enemy's.
    {
        playerTeam.push(this);
    }
    else
    {
        enemyTeam.push(this);
    }
}

Level1Unit.prototype = Object.create(Phaser.Sprite.prototype);
Level1Unit.prototype.constructor = Level1Unit;

Level1Unit.prototype.selector = function() {
    var moveDiff = this.moveCount - this.movesDone; // The number of turns that a unit can truly make.
    Level1Unit.prototype.checkEnemy(this); // These two functions are put here for now so that
    Level1Unit.prototype.battle(this); // you may test them.
    if(this.turnEnd == false) {
        if(this.pathsFound == false) {
            for(var i = 1; i <= moveDiff; i++){ // Go look at the western path.
                if(this.xPlace - i < 0) { // If space does not exist, then stop, as there is no point in looking into this path anymore.
                    break;
                }
                else if(gameLevel1[this.xPlace - i][this.yPlace] != 0) { // A free square has the value 0, so anything else means that the square is occupied.
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace - i) * 16, this.yPlace * 16, 'greenTile'); // Tile to be used to show that a unit can go to the square.
            }
            for(var i = 1; i <= moveDiff; i++){ // Now look at the northern path. Pathfinding works exactly the same way.
                if(this.yPlace - i < 0) {
                    break;
                }
                else if(gameLevel1[this.xPlace][this.yPlace - i] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16, (this.yPlace - i) * 16, 'greenTile');
            }
            for(var i = 1; i <= moveDiff; i++) { // Now look at the eastern path.
                if(this.xPlace + i >= level1Width) {
                    break;
                }
                else if(gameLevel1[this.xPlace + i][this.yPlace] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace + i) * 16, this.yPlace * 16, 'greenTile');
            }
            for(var i = 1; i <= moveDiff; i++) { // Now look at the southern path.
                if(this.yPlace + i >= level1Height) {
                    break;
                }
                else if(gameLevel1[this.xPlace][this.yPlace + i] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16, (this.yPlace + i) * 16, 'greenTile');
            }
            this.pathsFound = true;
            this.toggle = true;
        }
        if(this.toggle == true) {
                this.pathTiles.visible = true;
                chosenSquare = true;
                var unitSelf = this;
                background.events.onInputDown.add(clickSquare, this, {newUnit: unitSelf, xCoord: unitSelf.xPlace, yCoord: unitSelf.yPlace});
        }
        else {
                this.pathTiles.visible = false;
                chosenSquare = false;
        }
        this.toggle = !(this.toggle);
    }
}

var doCombat = false; // Combat can be done only if this is true.
var enemyLeft = false; // If this is true, then there is a unit of the opposite team on the left.
var enemyRight = false; // Same, but the unit is on the right now.
var enemyUp = false; // Now above.
var enemyDown = false; // And below.

Level1Unit.prototype.checkEnemy = function(player) {
    if(player.turnEnd == false) { // A unit cannot attack if its turn has already ended.
        if(player.xPlace - 1 >= 0) { // Does the square to the left exist? If so...
            if(gameLevel1[player.xPlace - 1][player.yPlace] instanceof Level1Unit) { // Three possiblities: nothing, an obstacle, or a unit. We want only the last one.
                if(gameLevel1[player.xPlace - 1][player.yPlace].team != player.team) { // We want the unit to attack only if the unit is not on the same team as it is on.
                    console.log(gameLevel1[player.xPlace - 1][player.yPlace].health);
                    doCombat = true;
                    enemyLeft = true;
                }
            }
        }
        if(player.xPlace + 1 < level1Width) { // Same thing as above, but the square checked on is now to the right.
            if(gameLevel1[player.xPlace + 1][player.yPlace] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace + 1][player.yPlace].team != player.team) {
                    console.log(gameLevel1[player.xPlace + 1][player.yPlace].health);
                    doCombat = true;
                    enemyRight = true;
                }
            }
        }
        if(player.yPlace - 1 >= 0) { // And now above.
            if(gameLevel1[player.xPlace][player.yPlace - 1] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace][player.yPlace - 1].team != player.team) {
                    console.log(gameLevel1[player.xPlace][player.yPlace - 1].health);
                    doCombat = true;
                    enemyUp = true;
                }
            }
        }
        if(player.yPlace + 1 < level1Height) { // And now below.
            if(gameLevel1[player.xPlace][player.yPlace + 1] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace][player.yPlace + 1].team != player.team) {
                    console.log(gameLevel1[player.xPlace][player.yPlace + 1].health);
                    doCombat = true;
                    enemyDown = true;
                }
            }
        }
    }
}

Level1Unit.prototype.battle = function(attacker) {
    console.log('left' + enemyLeft);
    console.log('right' + enemyRight);
    console.log('up' + enemyUp);
    console.log('down' + enemyDown);
    if(doCombat == true) { 
        var damage = 0;
        var attackedUnit; // Variable will be used in all four possible cases.
        if(enemyLeft == true) {
            attackedUnit = gameLevel1[attacker.xPlace - 1][attacker.yPlace]; 
            damage = attacker.attack - attackedUnit.defense; // Calculate the damage first.
            if(damage < 0) {
                damage = 0; // Negative damage should not heal the unit, so set damage to 0.
            }
            attackedUnit.health -= damage; // Then deal it to the unit's health.
            console.log(attackedUnit.health);
            if(attackedUnit.health <= 0) { // If unit is now dead...
                Level1Unit.prototype.removeFromTeam(attacker, attackedUnit);
                gameLevel1[attacker.xPlace - 1][attacker.yPlace] = 0; // Set the unit's square to 0, since nothing should be on it now.
                enemyLeft = false; // No enemy is there anymore, so set this to false.
            }
        }
        else if(enemyRight == true) { // Same thing for the other three cases. Note that "else if" is used since a unit can attack only once a turn.
            attackedUnit = gameLevel1[attacker.xPlace + 1][attacker.yPlace];
            damage = attacker.attack - attackedUnit.defense;
            if(damage < 0) {
                damage = 0;
            }
            attackedUnit.health -= damage;
            console.log(attackedUnit.health);
            if(attackedUnit.health <= 0) {
                Level1Unit.prototype.removeFromTeam(attacker, attackedUnit);
                gameLevel1[attacker.xPlace + 1][attacker.yPlace] = 0;
                enemyRight = false;
            }
        }
        else if(enemyUp == true) {
            attackedUnit = gameLevel1[attacker.xPlace][attacker.yPlace - 1];
            damage = attacker.attack - attackedUnit.defense;
            if(damage < 0) {
                damage = 0;
            }
            attackedUnit.health -= damage;
            console.log(attackedUnit.health);
            if(attackedUnit.health <= 0) {
                Level1Unit.prototype.removeFromTeam(attacker, attackedUnit);
                gameLevel1[attacker.xPlace][attacker.yPlace - 1] = 0;
                enemyUp = false;
            }
        }
        else if(enemyDown == true) {
            attackedUnit = gameLevel1[attacker.xPlace][attacker.yPlace + 1];
            damage = attacker.attack - attackedUnit.defense;
            if(damage < 0) {
                damage = 0;
            }
            attackedUnit.health -= damage;
            console.log(attackedUnit.health);
            if(attackedUnit.health <= 0) {
                Level1Unit.prototype.removeFromTeam(attacker, attackedUnit);
                gameLevel1[attacker.xPlace][attacker.yPlace + 1] = 0;
                enemyDown = false;
            }
        }
    }
    doCombat = false; // Always check whether there is a unit of the opposite team before doing combat.
}

Level1Unit.prototype.removeFromTeam = function(winner, loser) { // Now that the attacked unit is dead, it needs to be taken out of its team's array.
    loser.kill(); // Get rid of the sprite.
    if(winner.team = 'player') {  
        for(var i = 0; i < enemyTeam.length; i++) { // Go through whole array and find the unit that has the same coordinates as the dead unit.
            if(enemyTeam[i].xPlace == loser.xPlace && enemyTeam[i].yPlace == loser.yPlace) {
                enemyTeam.splice(i, 1); // Cut out the unit.
                break; // Now that the unit has been found and removed, we can stop the loop now.
            }
        }
    }
    else {
        for(var i = 0; i < playerTeam.length; i++) {
            if(playerTeam[i].xPlace == loser.xPlace && playerTeam[i].yPlace == loser.yPlace) {
                playerTeam.splice(i, 1);
                break;
            }
        }
    }
}
