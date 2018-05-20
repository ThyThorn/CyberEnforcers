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
    this.inputEnabled = false;
    this.pathTiles = game.add.group();
    this.pathsFound = false;
    this.leftMax = 0;
    this.rightMax = 0;
    this.upMax = 0;
    this.downMax = 0;
    this.enemyLeft = false;
    this.enemyRight = false;
    this.enemyUp = false;
    this.enemyDown = false;
    game.physics.enable(this);
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

Level1Unit.prototype.pathFinder = function() {
    var moveDiff = this.moveCount - this.movesDone; // The number of turns that a unit can truly make.
    //Level1Unit.prototype.checkEnemy(this); // These two functions are put here for now so that
    //Level1Unit.prototype.battle(this); // you may test them.
    if(this.turnEnd == false) {
        if(this.pathsFound == false) {
            for(this.leftMax = 1; this.leftMax <= moveDiff; this.leftMax++){ // Go look at the western path.
                if(this.xPlace - this.leftMax < 0) { // If space does not exist, then stop, as there is no point in looking into this path anymore.
                    break;
                }
                else if(gameLevel1[this.xPlace - this.leftMax][this.yPlace] != 0) { // A free square has the value 0, so anything else means that the square is occupied.
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace - this.leftMax) * 16, this.yPlace * 16, 'greenTile'); // Tile to be used to show that a unit can go to the square.
            }
            this.leftMax -= 1;
            for(this.upMax = 1; this.upMax <= moveDiff; this.upMax++){ // Now look at the northern path. Pathfinding works exactly the same way.
                if(this.yPlace - this.upMax < 0) {
                    break;
                }
                else if(gameLevel1[this.xPlace][this.yPlace - this.upMax] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16, (this.yPlace - this.upMax) * 16, 'greenTile');
            }
            this.upMax -= 1;
            for(this.rightMax = 1; this.rightMax <= moveDiff; this.rightMax++) { // Now look at the eastern path.
                if(this.xPlace + this.rightMax >= level1Width) {
                    break;
                }
                else if(gameLevel1[this.xPlace + this.rightMax][this.yPlace] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace + this.rightMax) * 16, this.yPlace * 16, 'greenTile');
            }
            this.rightMax -= 1;
            for(this.downMax = 1; this.downMax <= moveDiff; this.downMax++) { // Now look at the southern path.
                if(this.yPlace + this.downMax >= level1Height) {
                    break;
                }
                else if(gameLevel1[this.xPlace][this.yPlace + this.downMax] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16, (this.yPlace + this.downMax) * 16, 'greenTile');
            }
            this.downMax -= 1;
            this.pathTiles.visible = true;
            this.pathsFound = true;
        }
        else {
            this.pathTiles.visible = true;
        }
    }
}

var doCombat = false; // Combat can be done only if this is true.

Level1Unit.prototype.checkEnemy = function(player) {
    if(player.attackedEnemy == false) { // A unit cannot attack if it has already done combat.
        if(player.xPlace - 1 >= 0) { // Does the square to the left exist? If so...
            if(gameLevel1[player.xPlace - 1][player.yPlace] instanceof Level1Unit) { // Three possiblities: nothing, an obstacle, or a unit. We want only the last one.
                if(gameLevel1[player.xPlace - 1][player.yPlace].team != player.team) { // We want the unit to attack only if the unit is not on the same team as it is on.
                    console.log(gameLevel1[player.xPlace - 1][player.yPlace].health);
                    doCombat = true;
                    player.enemyLeft = true;
                }
            }
        }
        if(player.xPlace + 1 < level1Width) { // Same thing as above, but the square checked on is now to the right.
            if(gameLevel1[player.xPlace + 1][player.yPlace] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace + 1][player.yPlace].team != player.team) {
                    console.log(gameLevel1[player.xPlace + 1][player.yPlace].health);
                    doCombat = true;
                    player.enemyRight = true;
                }
            }
        }
        if(player.yPlace - 1 >= 0) { // And now above.
            if(gameLevel1[player.xPlace][player.yPlace - 1] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace][player.yPlace - 1].team != player.team) {
                    console.log(gameLevel1[player.xPlace][player.yPlace - 1].health);
                    doCombat = true;
                    player.enemyUp = true;
                }
            }
        }
        if(player.yPlace + 1 < level1Height) { // And now below.
            if(gameLevel1[player.xPlace][player.yPlace + 1] instanceof Level1Unit) {
                if(gameLevel1[player.xPlace][player.yPlace + 1].team != player.team) {
                    console.log(gameLevel1[player.xPlace][player.yPlace + 1].health);
                    doCombat = true;
                    player.enemyDown = true;
                }
            }
        }
    }
}

Level1Unit.prototype.battle = function(attacker) {
    console.log('left' + attacker.enemyLeft);
    console.log('right' + attacker.enemyRight);
    console.log('up' + attacker.enemyUp);
    console.log('down' + attacker.enemyDown);
    if(doCombat == true) { 
        var damage = 0;
        var attackedUnit; // Variable will be used in all four possible cases.
        if(attacker.enemyLeft == true) {
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
                attacker.enemyLeft = false; // No enemy is there anymore, so set this to false.
            }
        }
        else if(attacker.enemyRight == true) { // Same thing for the other three cases. Note that "else if" is used since a unit can attack only once a turn.
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
                attacker.enemyRight = false;
            }
        }
        else if(attacker.enemyUp == true) {
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
                attacker.enemyUp = false;
            }
        }
        else if(attacker.enemyDown == true) {
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
                attacker.enemyDown = false;
            }
        }
        attacker.attackedEnemy = true;
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