// Constructor for unit in the Physical World.

function PhysUnit(unitName, health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace, key, frame, portrait)
{
    Phaser.Sprite.call(this, game, xPlace * 16 + shiftPhysFactor, yPlace * 16 + shiftPhysFactor, key, frame);
    this.portrait = game.add.image(31*16,16*5, portrait);
    this.portrait.scale.set(.5,.5);
    this.portrait.visible = false;
    this.portrait.sendToBack();
    this.unitName = unitName; // Give the unit a name.
    this.health = health; // Give unit health, attack and defense.
    this.attack = attack;
    this.defense = defense;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.UIdefenseT = game.add.text(33*16, 16*17+4, this.defense, { fontSize: '16px', fill: '#fff' });
    this.UIdefenseT.visible = false;
    this.UIattackT = game.add.text(36*16-12, 16*17+4, this.attack, { fontSize: '16px', fill: '#fff' });
    this.UIattackT.visible = false;
    this.UImovecountT = game.add.text(38*16 - 3, 16*17+4, this.movesDone + '/' + this.moveCount, { fontSize: '16px', fill: '#fff' });
    this.UImovecountT.visible = false;
    this.UIhealthT = game.add.text(41*16 - 3, 16*17+4, this.health, { fontSize: '16px', fill: '#fff' });
    this.UIhealthT.visible = false;
    this.team = team; // This is a string that determines whether the unit is a player unit or an enemy unit.
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
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
            this.leftMax -= 1; // Suppose that leftMax were 1, but a unit were immediately standing in that square. Then there would be one extra, so we must subtract 1.
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
    if((xSelected >= 0 && xSelected < levelWidth) && (ySelected >= 0 && ySelected < levelHeight)) { // Make sure that the tile clicked is in the background's boundries.
        if((gameLevel[xSelected][ySelected] instanceof PhysUnit) == true) { // Check whether it's a unit.
            if(gameLevel[xSelected][ySelected].team != this.team){ // Make sure that it's not on the same team as the attacking unit.
                if(xSelected == (this.xPlace - 1) && ySelected == this.yPlace) { // Check whether the unit is on the immediate left of the attacking unit.
                    attackedUnit = gameLevel[xSelected][ySelected];
                    doCombat = true;
                    attackedUnit.tint = 0xff0000;
                    this.enemyLeft = true;
                }
                else if(xSelected == (this.xPlace + 1) && ySelected == this.yPlace) { // Or on the immediate right.
                    attackedUnit = gameLevel[xSelected][ySelected];
                    doCombat = true;
                    attackedUnit.tint = 0xff0000;
                    this.enemyRight = true;
                }
                else if(xSelected == this.xPlace && ySelected == (this.yPlace - 1)) { // Or above.
                    attackedUnit = gameLevel[xSelected][ySelected];
                    doCombat = true;
                    attackedUnit.tint = 0xff0000;
                    this.enemyUp = true;
                }
                else if(xSelected == this.xPlace && ySelected == (this.yPlace + 1)) { // Or below.
                    attackedUnit = gameLevel[xSelected][ySelected];
                    doCombat = true;
                    attackedUnit.tint = 0xff0000;
                    this.enemyDown = true;
                }
            }
        }
    }
    if(doCombat == true) { // This can be executed only if the attacked unit is next to the attacking one.
        attackSound.play();
        attackTimer = game.time.create(false);
        attackTimer.add(1000, PhysUnit.prototype.battle, this);
        attackTimer.start();
    }
    else {
        negative.play();
        chosenSquare = false;
        attackPressed = false;
        setInvisible();
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
    if(attackedUnit.health <= 0) { // If unit is now dead...
        var winner = this;
        attackTimer.add(1000, PhysUnit.prototype.removeFromTeam, this, winner, attackedUnit);
    }
    else { 
        this.attackedEnemy = true; // Reset everything.
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
        setInvisible();
    }
}

PhysUnit.prototype.removeFromTeam = function(winner, loser) { // Now that the attacked unit is dead, it needs to be taken out of its team's array.
    loser.kill(); // Get rid of the sprite.
    deathSound.play();
    if(winner.team == 'player') {  
        for(var i = 0; i < enemyTeam.length; i++) { // Go through whole array and find the unit that has the same coordinates as the dead unit.
            if(enemyTeam[i].xPlace == loser.xPlace && enemyTeam[i].yPlace == loser.yPlace) {
                enemyTeam.splice(i, 1); // Cut out the unit.
                gameLevel[loser.xPlace][loser.yPlace] = 0;
                break; // Now that the unit has been found and removed, we can stop the loop now.
            }
        }
        winner.attackedEnemy = true;
        winner.enemyLeft = false;
        winner.enemyRight = false;
        winner.enemyUp = false;
        winner.enemyDown = false;
        this.pathTiles.removeAll();
        this.pathsFound = false;
        chosenSquare = false;
        attackPressed = false;
        doCombat = false;
        enableButtons(); 
        winner.pathFinder();
        winner.tint = 0xffffff;
        winner.pathTiles.visible = false;
        setInvisible();
    }
    else {
        for(var i = 0; i < playerTeam.length; i++) {
            if(playerTeam[i].xPlace == loser.xPlace && playerTeam[i].yPlace == loser.yPlace) {
                playerTeam.splice(i, 1);
                gameLevel[loser.xPlace][loser.yPlace] = 0;
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
                gameLevel[this.xPlace][this.yPlace] = 0;
                break; // Now that the unit has been found and removed, we can stop the loop now.
            }
        }
    }
    else {
        for(var i = 0; i < enemyTeam.length; i++) {
            if(enemyTeam[i].xPlace == this.xPlace && enemyTeam[i].yPlace == this.yPlace) {
                enemyTeam.splice(i, 1);
                gameLevel[this.xPlace][this.yPlace] = 0;
                break;
            }
        }
    }
}

PhysUnit.prototype.chooseUnit = function() {
    notEnemy:
    if(chosenSquare == false) {
        chosenX = Math.floor((game.input.mousePointer.x - shiftPhysFactor) / 16); // Get the coordinates of the square clicked on.
        chosenY = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        if(gameLevel[chosenX][chosenY] instanceof PhysUnit) { // Check whether it is a unit first.
            setInvisible(); // If there were something on screen before, it's gone now.
            gameLevel[chosenX][chosenY].pathFinder(); // Find the possible paths. This is done only for the player's benefit.
            gameLevel[chosenX][chosenY].portrait.visible = true; // Show the UI information of the unit clicked on.
            gameLevel[chosenX][chosenY].UIdefenseT.visible = true;
            gameLevel[chosenX][chosenY].UIattackT.visible = true;
            gameLevel[chosenX][chosenY].UImovecountT.visible = true;
            gameLevel[chosenX][chosenY].UImovecountT.text = gameLevel[chosenX][chosenY].movesDone + '/' + gameLevel[chosenX][chosenY].moveCount;
            gameLevel[chosenX][chosenY].UIhealthT.visible = true;
            gameLevel[chosenX][chosenY].UIhealthT.text = gameLevel[chosenX][chosenY].health;
            if(gameLevel[chosenX][chosenY].turnEnd == true) { // There is no point in continuing if the unit has already ended its turn.
                negative.play();
                enableButtons();
                return;
            }
            gameLevel[chosenX][chosenY].tint = 0xFFDF00;
            if(turnNumber % 2 == 1) { // Make sure that it is the player's turn only, though strictly speaking, this is not necessary.
                if(gameLevel[chosenX][chosenY].team == 'player') { // Make sure that the unit clicked on is a player unit.
                    if(movePressed == true) { // What happens if you have pressed the move button.
                        if(gameLevel[chosenX][chosenY].movesDone == gameLevel[chosenX][chosenY].moveCount) { // If the unit cannot move anymore, leave.
                            negative.play();
                            enableButtons();
                            return;
                        }
                        chosenSquare = true; 
                        newUnit = gameLevel[chosenX][chosenY];
                        return;
                    }
                    else if(attackPressed == true) { // What happens if you have pressed the attack button.
                        setInvisible();
                        if(gameLevel[chosenX][chosenY].attackedEnemy == true) { // If the unit has already attacked, leave.
                            negative.play();
                            enableButtons();
                            return;
                        }
                        gameLevel[chosenX][chosenY].tint = 0xFFDF00; // Show the UI information of the unit clicked on.
                        gameLevel[chosenX][chosenY].portrait.visible = true;
                        gameLevel[chosenX][chosenY].UIdefenseT.visible = true;
                        gameLevel[chosenX][chosenY].UIattackT.visible = true;
                        gameLevel[chosenX][chosenY].UImovecountT.visible = true;
                        gameLevel[chosenX][chosenY].UImovecountT.text = gameLevel[chosenX][chosenY].movesDone + '/' + gameLevel[chosenX][chosenY].moveCount;
                        gameLevel[chosenX][chosenY].UIhealthT.visible = true;
                        gameLevel[chosenX][chosenY].UIhealthT.text = gameLevel[chosenX][chosenY].health;
                        chosenSquare = true;
                        attacker = gameLevel[chosenX][chosenY];
                        return;
                    }
                    else if(turnEndPressed == true) { // What happens if you have pressed the turn end button.
                        setInvisible();
                        doneUnit = gameLevel[chosenX][chosenY];
                        doneUnit.turnEnd = true;
                        doneUnit.tint = 0x696969;
                        doneUnit.portrait.visible = false;
                        turnEndPressed = false;
                        enableButtons();
                        clickThruSound.play();
                        return;
                    }
                }
            }
        } 
        else {
            setInvisible();
            enableButtons();
        }
    }
    else if(movePressed == true) { // This is triggered after the move button and the unit have been selected.
        PhysUnit.prototype.chooseSquare();
    }
    else if(attackPressed == true) { // This is triggered after the attack button and the unit have been selected.
        xSelected = Math.floor((game.input.mousePointer.x - shiftPhysFactor) / 16); // Get the coordinates of the unit to be attacked.
        ySelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        attacker.checkEnemy();
    }
}

PhysUnit.prototype.chooseSquare = function() {
    xSelected = Math.floor((game.input.mousePointer.x - shiftPhysFactor) / 16); // Get the coordinates of the square to be gone to.
    ySelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
    if((xSelected >= 0 && xSelected < levelWidth) && (ySelected >= 0 && ySelected < levelHeight)) { // Make sure that it is in the boundaries first.
        if((gameLevel[xSelected][ySelected] instanceof PhysUnit) == false) { // Check whether it is a unit.
            if((chosenX > xSelected && game.math.difference(chosenX, xSelected) <= newUnit.leftMax && chosenY == ySelected))
            { // Move the sprite to the left.
                newUnit.movesDone += game.math.difference(chosenX, xSelected);
                gameLevel[xSelected][ySelected] = newUnit; // Move the actual unit to its new spot in the array.
                newUnit.xPlace = xSelected; // Reset coordinates of the unit.
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0; // Set the previous spot to 0, since nothing should be one there anymore.
                PhysUnit.prototype.changeSprite(newUnit); // Change the actual sprite, since it has been moved only programming-wise.
            }
            else if((xSelected > chosenX && game.math.difference(chosenX, xSelected) <= newUnit.rightMax && chosenY == ySelected)) { // And to the right.
                newUnit.movesDone += game.math.difference(chosenX, xSelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                PhysUnit.prototype.changeSprite(newUnit);
            }
            else if((chosenY > ySelected && game.math.difference(chosenY, ySelected) <= newUnit.upMax && chosenX == xSelected)) { // And upward.
                newUnit.movesDone += game.math.difference(chosenY, ySelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                PhysUnit.prototype.changeSprite(newUnit);
            }
            else if((ySelected > chosenY && game.math.difference(chosenY, ySelected) <= newUnit.downMax && chosenX == xSelected)) { // And downward.
                newUnit.movesDone += game.math.difference(chosenY, ySelected);
                gameLevel[xSelected][ySelected] = newUnit;
                newUnit.xPlace = xSelected;
                newUnit.yPlace = ySelected;
                gameLevel[chosenX][chosenY] = 0;
                PhysUnit.prototype.changeSprite(newUnit);
            }
            else {
                negative.play();
            }
            movePressed = false;
            chosenSquare = false;
            setInvisible();
            enableButtons();
            return;
        }
        else {
            negative.play();
            movePressed = false;
            chosenSquare = false;
            setInvisible();
            enableButtons();
            return;
        }
    }
}

PhysUnit.prototype.changeSprite = function(change) { // Change the sprite.
    confirmation.play();
    change.x = change.xPlace * 16 + shiftPhysFactor;
    change.y = change.yPlace * 16 + shiftPhysFactor;
    change.pathTiles.removeAll();
    change.enemyLeft = false; // Reset all these variables since the coordinates have been changed.
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
    for(var i = 0; i < playerTeam.length; i++) { // Make sure that pathfinding for all units should be done again.
        playerTeam[i].pathsFound = false;
        playerTeam[i].pathTiles.removeAll();
    }
    for(var i = 0; i < enemyTeam.length; i++) {
        enemyTeam[i].pathsFound = false;
        enemyTeam[i].pathTiles.removeAll();
    }
}

PhysUnit.prototype.turnEnd = function() { // Function determining what happens if the player unit ends its turn.
    var counter = 0;
    for(var i = 0; i < playerTeam.length; i++) { // Count how many units have ended their turn.
        if(playerTeam[i].turnEnd == true) {
            counter += 1;
        }
    }
    if(counter == playerTeam.length) { // Execute only if all the units have ended their turn.
        for(var i = 0; i < playerTeam.length; i++) {
            playerTeam[i].movesDone = 0;
            playerTeam[i].attackedEnemy = false;
            playerTeam[i].pathsFound = false;
            playerTeam[i].pathTiles.removeAll();
            playerTeam[i].tint = 0xffffff;
            playerTeam[i].portrait.visible = false;
            kenta.movesDone = 0; // Make sure to reset Kenta's moves.
        }
        for(var i = 0; i < enemyTeam.length; i++) {
            enemyTeam[i].turnEnd = false;
        }
        for(var i = 0; i < virViruses.length; i++) {
            virViruses[i].turnEnd = false;
        }
        turnNumber += 1; // Raise the turn number.
        turnEndPressed = false;
        game.sound.stopAll(); // Stop all the game music and sounds.
        battleThemeEnemy.play(); // Play the enemy theme.
        background.inputEnabled = false; // Make sure the player cannot do anything to the screen.
        backgroundVir.inputEnabled = false;
        disableButtons();
        PhysUnit.prototype.physEnemyAI(enemyTeam[aiIndex]);
    }
}

PhysUnit.prototype.physEnemyAI = function(unit) { // Start the Physical World enemy AI.
    if(stopAI == true) { // If the battle has ended, escape immediately.
        return;
    }
    unit.tint = 0xFFDF00; 
    unit.portrait.visible = true; // Show UI information of the enemy.
    unit.UIdefenseT.visible = true;
    unit.UIattackT.visible = true;
    unit.UImovecountT.visible = true;
    unit.UImovecountT.text = unit.movesDone + '/' + unit.moveCount;
    unit.UIhealthT.visible = true;
    unit.UIhealthT.text = unit.health;
    aiTimer = game.time.create(false);
    aiTimer.add(2000, PhysUnit.prototype.findNearestUnit, this, unit); 
    aiTimer.start();
}

PhysUnit.prototype.findNearestUnit = function(unit) { // This AI focuses on finding the player unit nearest to it.
    unit.pathFinder();
    var nearest = 0;
    var targetUnit = 0;
    for(var i = 0; i < playerTeam.length; i++) { // Go through the whole player team array and find the unit nearest to the enemy unit.
        var distance = Phaser.Math.distance(playerTeam[i].xPlace, playerTeam[i].yPlace, unit.xPlace, unit.yPlace);
        if(i == 0) {
            nearest = distance;
        }
        if(distance <= nearest) { 
            nearest = distance;
            targetUnit = i; // Be sure to get the array index of the player unit.
        }
    }
    aiTimer.add(3000, PhysUnit.prototype.findPathToUnit, this, unit, playerTeam[targetUnit]);
}

PhysUnit.prototype.findPathToUnit = function(enemy, player) { // Similar to pathfinding function. Find the square from which the shortest distance to the player is gotten.
    var moveDiff = enemy.moveCount - enemy.movesDone;
    var bestDirect = 'west'; 
    var squareAway = 0;
    var nearest = 0;
    for(enemy.leftMax = 1; enemy.leftMax <= moveDiff; enemy.leftMax++){ // Go look at the western path.
        if(enemy.xPlace - enemy.leftMax < 0) { // If space does not exist, then stop, as there is no point in looking into this path anymore.
            break;
        }
        else if(gameLevel[enemy.xPlace - enemy.leftMax][enemy.yPlace] != 0) {
            if(gameLevel[enemy.xPlace - enemy.leftMax][enemy.yPlace] == player) { // If the unit itself is the player unit, the shortest distance has been gotten already.
                squareAway = enemy.leftMax - 1; 
                bestDirect = 'west';
                nearest = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace - enemy.leftMax, enemy.yPlace);
            }
            break;
        }
        else {
            var distance = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace - enemy.leftMax, enemy.yPlace);
            if(enemy.leftMax == 1) {
                nearest = distance;
            }
            if(distance <= nearest) {
                nearest = distance;
                squareAway = enemy.leftMax;
            }
        }
    }
    enemy.leftMax -= 1;
    for(enemy.upMax = 1; enemy.upMax <= moveDiff; enemy.upMax++){ // Now look at the northern path. This works exactly the same way.
        if(enemy.yPlace - enemy.upMax < 0) {
            break;
        }
        else if(gameLevel[enemy.xPlace][enemy.yPlace - enemy.upMax] != 0) {
            if(gameLevel[enemy.xPlace][enemy.yPlace - enemy.upMax] == player) {
                squareAway = enemy.upMax - 1;
                bestDirect = 'north';
                nearest = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace, enemy.yPlace - enemy.upMax);
            }
            break;
        }
        else {
            var distance = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace, enemy.yPlace - enemy.upMax);
            if(distance <= nearest) {
                nearest = distance;
                squareAway = enemy.upMax;
                bestDirect = 'north';
            }
        }
    }
    enemy.upMax -= 1;
    for(enemy.rightMax = 1; enemy.rightMax <= moveDiff; enemy.rightMax++) { // Now look at the eastern path.
        if(enemy.xPlace + enemy.rightMax >= levelWidth) {
            break;
        }
        else if(gameLevel[enemy.xPlace + enemy.rightMax][enemy.yPlace] != 0) {
            if(gameLevel[enemy.xPlace + enemy.rightMax][enemy.yPlace] == player) {
                squareAway = enemy.rightMax - 1;
                bestDirect = 'east';
                nearest = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace + enemy.rightMax, enemy.yPlace);
            }
            break;
        }
        else {
            var distance = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace + enemy.rightMax, enemy.yPlace);
            if(distance <= nearest) {
                nearest = distance;
                squareAway = enemy.rightMax;
                bestDirect = 'east';
            }
        }
    }
    enemy.rightMax -= 1;
    for(enemy.downMax = 1; enemy.downMax <= moveDiff; enemy.downMax++) { // Now look at the southern path.
        if(enemy.yPlace + enemy.downMax >= levelHeight) {
            break;
        }
        else if(gameLevel[enemy.xPlace][enemy.yPlace + enemy.downMax] != 0) {
            if(gameLevel[enemy.xPlace][enemy.yPlace + enemy.downMax] == player) {
                squareAway = enemy.downMax - 1;
                bestDirect = 'south';
                nearest = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace, enemy.yPlace + enemy.downMax);
            }
            break;
        }
        else {
            var distance = Phaser.Math.distance(player.xPlace, player.yPlace, enemy.xPlace, enemy.yPlace + enemy.downMax);
            if(distance <= nearest) {
                nearest = distance;
                squareAway = enemy.downMax;
                bestDirect = 'south';
            }
        }
    }
    enemy.downMax -= 1;
    if(squareAway > 0) { // Move the enemy unit to its new spot.
        if(bestDirect == 'west') { 
            enemy.movesDone += squareAway;
            gameLevel[enemy.xPlace - squareAway][enemy.yPlace] = enemy; // Put the enemy in its new spot.
            enemy.xPlace = enemy.xPlace - squareAway;
            gameLevel[enemy.xPlace + squareAway][enemy.yPlace] = 0; // Empty its original spot.
            PhysUnit.prototype.changeSprite(enemy); // Change the sprite itself to reflect this.
        }
        else if(bestDirect == 'north') {
            enemy.movesDone += squareAway;
            gameLevel[enemy.xPlace][enemy.yPlace - squareAway] = enemy;
            enemy.yPlace = enemy.yPlace - squareAway;
            gameLevel[enemy.xPlace][enemy.yPlace + squareAway] = 0;
            PhysUnit.prototype.changeSprite(enemy);
        }
        else if(bestDirect == 'east') {
            enemy.movesDone += squareAway;
            gameLevel[enemy.xPlace + squareAway][enemy.yPlace] = enemy;
            enemy.xPlace = enemy.xPlace + squareAway;
            gameLevel[enemy.xPlace - squareAway][enemy.yPlace] = 0;
            PhysUnit.prototype.changeSprite(enemy);
        }
        else if(bestDirect == 'south') {
            enemy.movesDone += squareAway;
            gameLevel[enemy.xPlace][enemy.yPlace + squareAway] = enemy;
            enemy.yPlace = enemy.yPlace + squareAway;
            gameLevel[enemy.xPlace][enemy.yPlace - squareAway] = 0;
            PhysUnit.prototype.changeSprite(enemy);
        }
    }
    setInvisible(); 
    confirmation.play();
    enemy.portrait.visible = true;
    enemy.UIdefenseT.visible = true;
    enemy.UIattackT.visible = true;
    enemy.UImovecountT.visible = true;
    enemy.UImovecountT.text = enemy.movesDone + '/' + enemy.moveCount;
    enemy.UIhealthT.visible = true;
    enemy.UIhealthT.text = enemy.health;
    aiTimer.add(1000, PhysUnit.prototype.checkForBattle, this, enemy, player); // Do battle.
}

PhysUnit.prototype.checkForBattle = function(enemy, player) {
    if((enemy.xPlace - 1 >= 0 && enemy.xPlace < levelWidth) && (enemy.yPlace >= 0 && enemy.yPlace < levelHeight)) { // Check the western side.
        if((gameLevel[enemy.xPlace - 1][enemy.yPlace] instanceof PhysUnit) == true) {
            if(gameLevel[enemy.xPlace - 1][enemy.yPlace] == player && enemy.attackedEnemy == false){
                enemy.tint = 0xFFDF00;
                player.tint = 0xff0000;
                attackSound.play();
                aiTimer.add(1500, PhysUnit.prototype.attackPlayer, this, enemy, player);
                return; // Make sure that nothing funny should happen.
            }
        }
    }
    if((enemy.xPlace >= 0 && enemy.xPlace < levelWidth) && (enemy.yPlace - 1 >= 0 && enemy.yPlace < levelHeight)) { // And the northern side.
        if((gameLevel[enemy.xPlace][enemy.yPlace - 1] instanceof PhysUnit) == true) {
            if(gameLevel[enemy.xPlace][enemy.yPlace - 1] == player && enemy.attackedEnemy == false){
                enemy.tint = 0xFFDF00;
                player.tint = 0xff0000;
                attackSound.play();
                aiTimer.add(1500, PhysUnit.prototype.attackPlayer, this, enemy, player);
                return;
            }
        }
    }
    if((enemy.xPlace + 1 >= 0 && enemy.xPlace < levelWidth) && (enemy.yPlace >= 0 && enemy.yPlace < levelHeight)) { // And the eastern side.
        if((gameLevel[enemy.xPlace + 1][enemy.yPlace] instanceof PhysUnit) == true) {
            if(gameLevel[enemy.xPlace + 1][enemy.yPlace] == player && enemy.attackedEnemy == false){
                enemy.tint = 0xFFDF00;
                player.tint = 0xff0000;
                attackSound.play();
                aiTimer.add(1500, PhysUnit.prototype.attackPlayer, this, enemy, player);
                return;
            }
        }
    }
    if((enemy.xPlace >= 0 && enemy.xPlace < levelWidth) && (enemy.yPlace + 1 >= 0 && enemy.yPlace < levelHeight)) { // And the southern side.
        if((gameLevel[enemy.xPlace][enemy.yPlace + 1] instanceof PhysUnit) == true) {
            if(gameLevel[enemy.xPlace][enemy.yPlace + 1] == player && enemy.attackedEnemy == false){
                enemy.tint = 0xFFDF00;
                player.tint = 0xff0000;
                attackSound.play();
                aiTimer.add(1500, PhysUnit.prototype.attackPlayer, this, enemy, player);
                return;
            }
        }
    }
    if(enemy.attackedEnemy == false) { // This happens only if it cannot do battle.
        enemy.tint = 0x696969;
        PhysUnit.prototype.endAITurn();
    }
}

PhysUnit.prototype.attackPlayer = function(enemy, player) {
    var damage = 0;
    damage = enemy.attack - player.defense; // Calculate the damage first.
    if(damage < 0) {
        damage = 0; // Negative damage should not heal the unit, so set damage to 0.
    }
    player.health -= damage; // Then deal it to the unit's health.
    if(player.health <= 0) { // If unit is now dead...
        PhysUnit.prototype.removeFromTeam(enemy, player);
        gameLevel[player.xPlace][player.yPlace] = 0; // Set the unit's square to 0, since nothing should be on it now.
    }
    enemy.attackedEnemy = true;
    enemy.pathTiles.removeAll();
    enemy.pathsFound = false;
    if(stopAI == true) {
        return;
    }
    enemy.tint = 0x696969;
    player.tint = 0xffffff;
    setInvisible();
    PhysUnit.prototype.endAITurn();
}

PhysUnit.prototype.endAITurn = function() {
    if(stopAI == true) {
        return;
    }
    clickThruSound.play();
    enemyTeam[aiIndex].turnEnd = true; // The enemy unit cannot do anything else, so it ends its turn.
    aiIndex += 1; // Raise the index by 1, since we need to go to the next element in the enemy team array.
    var counter = 0;
    for(var i = 0; i < enemyTeam.length; i++) {
        if(enemyTeam[i].turnEnd == true) {
            counter += 1;
        }
    }
    if(counter == enemyTeam.length) {
        aiIndex = 0;
        setInvisible();
        if(virViruses.length > 0) {
            VirUnit.prototype.virAI(virViruses[aiIndex]);
        }
        else { // If there are no enemies in the Virtual World, go back to the player's turn.
            for(var i = 0; i < playerTeam.length; i++) {
                playerTeam[i].turnEnd = false;
            }
            for(var i = 0; i < enemyTeam.length; i++) {
                enemyTeam[i].movesDone = 0;
                enemyTeam[i].attackedEnemy = false;
                enemyTeam[i].pathsFound = false;
                enemyTeam[i].tint = 0xffffff;
            }
            turnNumber += 1;
            game.sound.stopAll();
            battleThemePlayer.play();
            background.inputEnabled = true;
            backgroundVir.inputEnabled = true;
            aiIndex = 0;
            turnEndEnsure = false;
            enableButtons();
        }
    }
    else { // If the whole array has not been gone through yet, go to the next element.
        setInvisible();
        PhysUnit.prototype.physEnemyAI(enemyTeam[aiIndex]);
    }
}
