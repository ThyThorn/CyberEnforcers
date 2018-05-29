// Constructor for unit in the Physical World.

function PhysUnit(unitName, health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace, key, frame)
{
    Phaser.Sprite.call(this, game, xPlace * 16 + shiftPhysFactor, yPlace * 16 + shiftPhysFactor, key, frame);
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
    gameLevel[xPlace][yPlace] = this; // Put it in the 2D array.
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

PhysUnit.prototype = Object.create(Phaser.Sprite.prototype);
PhysUnit.prototype.constructor = PhysUnit;

PhysUnit.prototype.pathFinder = function() {
    var moveDiff = this.moveCount - this.movesDone; // The number of turns that a unit can truly make.
    if(this.turnEnd == false) {
        if(this.pathsFound == false) {
            for(this.leftMax = 1; this.leftMax <= moveDiff; this.leftMax++){ // Go look at the western path.
                if(this.xPlace - this.leftMax < 0) { // If space does not exist, then stop, as there is no point in looking into this path anymore.
                    break;
                }
                else if(gameLevel[this.xPlace - this.leftMax][this.yPlace] != 0) { // A free square has the value 0, so anything else means that the square is occupied.
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace - this.leftMax) * 16 + shiftPhysFactor, this.yPlace * 16 + shiftPhysFactor, 'greenTile'); // Tile to be used to show that a unit can go to the square.
            }
            this.leftMax -= 1;
            for(this.upMax = 1; this.upMax <= moveDiff; this.upMax++){ // Now look at the northern path. Pathfinding works exactly the same way.
                if(this.yPlace - this.upMax < 0) {
                    break;
                }
                else if(gameLevel[this.xPlace][this.yPlace - this.upMax] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16 + shiftPhysFactor, (this.yPlace - this.upMax) * 16 + shiftPhysFactor, 'greenTile');
            }
            this.upMax -= 1;
            for(this.rightMax = 1; this.rightMax <= moveDiff; this.rightMax++) { // Now look at the eastern path.
                if(this.xPlace + this.rightMax >= levelWidth) {
                    break;
                }
                else if(gameLevel[this.xPlace + this.rightMax][this.yPlace] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create((this.xPlace + this.rightMax) * 16 + shiftPhysFactor, this.yPlace * 16 + shiftPhysFactor, 'greenTile');
            }
            this.rightMax -= 1;
            for(this.downMax = 1; this.downMax <= moveDiff; this.downMax++) { // Now look at the southern path.
                if(this.yPlace + this.downMax >= levelHeight) {
                    break;
                }
                else if(gameLevel[this.xPlace][this.yPlace + this.downMax] != 0) {
                    break;
                }
                greenTile = this.pathTiles.create(this.xPlace * 16 + shiftPhysFactor, (this.yPlace + this.downMax) * 16 + shiftPhysFactor, 'greenTile');
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
var attackedUnit;

PhysUnit.prototype.checkEnemy = function() {
    if((xSelected >= 0 && xSelected < levelWidth) && (ySelected >= 0 && ySelected < levelHeight)) {
        if((gameLevel[xSelected][ySelected] instanceof PhysUnit) == true) {
            if(gameLevel[xSelected][ySelected].team != this.team){
                if(xSelected == (this.xPlace - 1) && ySelected == this.yPlace) {
                    attackedUnit = gameLevel[xSelected][ySelected];
                    console.log(attackedUnit.health);
                    doCombat = true;
                    this.enemyLeft = true;
                }
                else if(xSelected == (this.xPlace + 1) && ySelected == this.yPlace) {
                    attackedUnit = gameLevel[xSelected][ySelected];
                    console.log(attackedUnit.health);
                    doCombat = true;
                    this.enemyRight = true;
                }
                else if(xSelected == this.xPlace && ySelected == (this.yPlace - 1)) {
                    attackedUnit = gameLevel[xSelected][ySelected];
                    console.log(attackedUnit.health);
                    doCombat = true;
                    this.enemyUp = true;
                }
                else if(xSelected == this.xPlace && ySelected == (this.yPlace + 1)) {
                    attackedUnit = gameLevel[xSelected][ySelected];
                    console.log(attackedUnit.health);
                    doCombat = true;
                    this.enemyDown = true;
                }
            }
        }
    }
    if(doCombat == true) {
        this.battle();
    }
    else {
        chosenSquare = false;
        attackPressed = false;
        enableButtons();
    }
}

PhysUnit.prototype.battle = function() {
    var damage = 0;
    damage = this.attack - attackedUnit.defense; // Calculate the damage first.
    if(damage < 0) {
        damage = 0; // Negative damage should not heal the unit, so set damage to 0.
        }
    attackedUnit.health -= damage; // Then deal it to the unit's health.
    console.log(attackedUnit.health);
    if(attackedUnit.health <= 0) { // If unit is now dead...
        PhysUnit.prototype.removeFromTeam(this, attackedUnit);
        gameLevel[attackedUnit.xPlace][attackedUnit.yPlace] = 0; // Set the unit's square to 0, since nothing should be on it now.
    }
    this.attackedEnemy = true;
    this.enemyLeft = false;
    this.enemyRight = false;
    this.enemyUp = false;
    this.enemyDown = false;
    this.pathTiles.removeAll();
    this.pathsFound = false;
    chosenSquare = false;
    attackPressed = false;
    doCombat = false;
    enableButtons(); 
    this.pathFinder();
    this.pathTiles.visible = false;
}

PhysUnit.prototype.removeFromTeam = function(winner, loser) { // Now that the attacked unit is dead, it needs to be taken out of its team's array.
    loser.kill(); // Get rid of the sprite.
    if(winner.team == 'player') {  
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

PhysUnit.prototype.deleteFromTeam = function() { // Function used to delete a single member.
    this.kill();
    if(this.team == 'player') {  
        for(var i = 0; i < playerTeam.length; i++) { // Go through whole array and find the unit that has the same coordinates as the dead unit.
            if(playerTeam[i].xPlace == this.xPlace && playerTeam[i].yPlace == this.yPlace) {
                playerTeam.splice(i, 1); // Cut out the unit.
                break; // Now that the unit has been found and removed, we can stop the loop now.
            }
        }
    }
    else {
        for(var i = 0; i < enemyTeam.length; i++) {
            if(enemyTeam[i].xPlace == this.xPlace && enemyTeam[i].yPlace == this.yPlace) {
                enemyTeam.splice(i, 1);
                break;
            }
        }
    }
}
