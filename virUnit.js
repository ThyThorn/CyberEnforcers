function VirUnit(unitName, moveCount, team, turnEnd, xPlace, yPlace, key, frame, portrait)
{
    Phaser.Sprite.call(this, game, shiftPhysFactor + mapWidth + shiftUIFactor + (xPlace * 16), shiftPhysFactor + yPlace * 16, key, frame);
    this.portrait = game.add.image(31*16,16*5, portrait);
    this.portrait.scale.set(.5,.5);
    this.portrait.visible = false;
    this.portrait.sendToBack();
    this.unitName = unitName;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team;
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    this.inputEnabled = false;
    this.UImovecountT = game.add.text(38*16 - 3, 16*17+4, this.movesDone + '/' + this.moveCount, { fontSize: '16px', fill: '#fff' });
    this.UImovecountT.visible = false;
    game.physics.enable(this);
    if(this.team == 'enemy') {
        virViruses.push(this);
    }
}

VirUnit.prototype = Object.create(Phaser.Sprite.prototype);
VirUnit.prototype.constructor = VirUnit;

VirUnit.prototype.checkNodes = function(maybeNode) { // Check whether the node in the parameter matches the nodes connected to the current node.
    var myNode = virLevel[this.xPlace][this.yPlace];
    if(myNode.north == maybeNode) {
        accessible = true;
    }
    else if(myNode.south == maybeNode) {
        accessible = true;
    }
    else if(myNode.west == maybeNode) {
        accessible = true;
    }
    else if(myNode.east == maybeNode) {
        accessible = true;
    }
}

VirUnit.prototype.chooseVirUnit = function() {
    if(blueNodeVar == true) { // After the node button has been clicked on, and Kenta is standing on a blue node...
        disableButtons();
        setInvisible();
        xVirSelected = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30); // Get coordinates of the square.
        yVirSelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        chosenVirX = kenta.xPlace; // Get Kenta's coordinates.
        chosenVirY = kenta.yPlace;
        newNode = virLevel[chosenVirX][chosenVirY];
        tryAgain:
        if(newNode instanceof Node) {
            if(turnNumber % 2 == 1) { // The next condition makes sure that the node clicked on is empty and blue.
                if(virLevel[xVirSelected][yVirSelected].effect == 'blue' && virLevel[xVirSelected][yVirSelected].unit == null) {
                    blueNodeSound.play();
                    virLevel[xVirSelected][yVirSelected].unit = newNode.unit;
                    virLevel[xVirSelected][yVirSelected].unit.xPlace = xVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.yPlace = yVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * newNode.unit.xPlace);
                    virLevel[xVirSelected][yVirSelected].unit.y = 16 * yVirSelected + shiftPhysFactor;
                    kenta.tint = 0xffffff;
                    virLevel[chosenVirX][chosenVirY].unit = null;
                    accessible = false;
                }
                else {
                    kenta.tint = 0xffffff;
                    newNode.unit.portrait.visible = false;
                    newNode.unit.UImovecountT.visible = false;
                }
            }
        }
        else {
            negative.play();
        }
        enableButtons();
        blueNodeVar = false;
        kenta.tint = 0xffffff;
        kenta.portrait.visible = false;
        kenta.UImovecountT.visible = false;
        background.inputEnabled = true;
        return;
    }
    notNode:
    if(chosenVirSquare == false) { 
        chosenVirX = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30); // Choose a unit.
        chosenVirY = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16); // For a unit that the player can actually move, it must always be Kenta.
        newNode = virLevel[chosenVirX][chosenVirY];
        if(newNode instanceof Node) {
            if(turnNumber % 2 == 1) {
                if(newNode.unit.team == 'player') {
                    kenta.tint = 0xFFDF00;
                    newNode.unit.portrait.visible = true;
                    newNode.unit.UImovecountT.visible = true;
                    newNode.unit.UImovecountT.text = newNode.unit.movesDone + '/' + newNode.unit.moveCount;
                    if(movePressed == true) {
                        chosenVirSquare = true;
                    }
                }
                else {
                    break notNode;
                }
            }
        }
        else {
            negative.play();
            chosenVirSquare = false;
            movePressed = false;
            accessible = false;
            kenta.tint = 0xffffff;
            kenta.portrait.visible = false;
            kenta.UImovecountT.visible = false;
            enableButtons();
        }
    }
    else {
        xVirSelected = Math.floor((game.input.mousePointer.x - shiftUIFactor - shiftPhysFactor) / 16 - 30); // Get the coordinates of the second square.
        yVirSelected = Math.floor((game.input.mousePointer.y - shiftPhysFactor) / 16);
        if((xVirSelected >= 0 && xVirSelected < levelWidth) && (yVirSelected >= 0 && yVirSelected < levelHeight)) { // Make sure that it is in the boundaries first.
            goToThis = virLevel[xVirSelected][yVirSelected]; 
            if(goToThis instanceof Node) { // Check whether the square is a node.
                newNode.unit.checkNodes(goToThis); // See whether the node can be gone to.
                if(goToThis.unit != null) { // Check whether the node is occupied already.
                    isFull = true;
                }
                else {
                    isFull = false;
                }
                if(accessible == true && isFull == false && newNode.unit.movesDone < newNode.unit.moveCount) { // Move Kenta to the new node.
                    newNode.unit.movesDone += 1;
                    confirmation.play();
                    virLevel[xVirSelected][yVirSelected].unit = newNode.unit;
                    virLevel[xVirSelected][yVirSelected].unit.xPlace = xVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.yPlace = yVirSelected;
                    virLevel[xVirSelected][yVirSelected].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * newNode.unit.xPlace);
                    virLevel[xVirSelected][yVirSelected].unit.y = 16 * yVirSelected + shiftPhysFactor;
                    virLevel[xVirSelected][yVirSelected].unit.tint = 0xffffff;
                    virLevel[chosenVirX][chosenVirY].unit = null;
                    chosenVirSquare = false;
                    movePressed = false;
                    accessible = false;
                    enableButtons();
                }
                else {
                    negative.play();
                }
                chosenVirSquare = false;
                movePressed = false;
                accessible = false;
                kenta.tint = 0xffffff;
                kenta.portrait.visible = false;
                kenta.UImovecountT.visible = false;
                enableButtons();
            }
            else { 
                negative.play();
                chosenVirSquare = false;
                movePressed = false;
                accessible = false;
                kenta.tint = 0xffffff;
                kenta.portrait.visible = false;
                kenta.UImovecountT.visible = false;
                enableButtons();
            }
        }
    }
}

VirUnit.prototype.virAI = function(unit) {
    if(stopAI == true) {
        return;
    }
    unit.tint = 0xFFDF00;
    virTimer = game.time.create(false);
    virTimer.add(2000, VirUnit.prototype.moveVir, this, unit); 
    virTimer.start();
}

VirUnit.prototype.moveVir = function(unit) {
    var chooser = game.rnd.integerInRange(1, 4);
    var oldX = unit.xPlace;
    var oldY = unit.yPlace;
    var newX = unit.xPlace;
    var newY = unit.yPlace;
    if(chooser == 1) {
        if(virLevel[unit.xPlace][unit.yPlace].north != null) {
            if(virLevel[unit.xPlace][unit.yPlace].north.unit == null) {
                unit.movesDone += 1;
                confirmation.play();
                oldX = virLevel[unit.xPlace][unit.yPlace].xPlace;
                oldY = virLevel[unit.xPlace][unit.yPlace].yPlace;
                newX = virLevel[unit.xPlace][unit.yPlace].north.xPlace;
                newY = virLevel[unit.xPlace][unit.yPlace].north.yPlace;
                virLevel[newX][newY].unit = unit;
                virLevel[newX][newY].unit.xPlace = newX;
                virLevel[newX][newY].unit.yPlace = newY;
                virLevel[newX][newY].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * unit.xPlace);
                virLevel[newX][newY].unit.y = 16 * unit.yPlace + shiftPhysFactor;
                virLevel[oldX][oldY].unit = null;
            }
        }
    }
    else if(chooser == 2) {
        if(virLevel[unit.xPlace][unit.yPlace].east != null) {
            if(virLevel[unit.xPlace][unit.yPlace].east.unit == null) {
                unit.movesDone += 1;
                confirmation.play();
                oldX = virLevel[unit.xPlace][unit.yPlace].xPlace;
                oldY = virLevel[unit.xPlace][unit.yPlace].yPlace;
                newX = virLevel[unit.xPlace][unit.yPlace].east.xPlace;
                newY = virLevel[unit.xPlace][unit.yPlace].east.yPlace;
                virLevel[newX][newY].unit = unit;
                virLevel[newX][newY].unit.xPlace = newX;
                virLevel[newX][newY].unit.yPlace = newY;
                virLevel[newX][newY].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * unit.xPlace);
                virLevel[newX][newY].unit.y = 16 * unit.yPlace + shiftPhysFactor;
                virLevel[oldX][oldY].unit = null;
            }
        }
    }
    else if(chooser == 3) {
        if(virLevel[unit.xPlace][unit.yPlace].south != null) {
            if(virLevel[unit.xPlace][unit.yPlace].south.unit == null) {
                unit.movesDone += 1;
                confirmation.play();
                oldX = virLevel[unit.xPlace][unit.yPlace].xPlace;
                oldY = virLevel[unit.xPlace][unit.yPlace].yPlace;
                newX = virLevel[unit.xPlace][unit.yPlace].south.xPlace;
                newY = virLevel[unit.xPlace][unit.yPlace].south.yPlace;
                virLevel[newX][newY].unit = unit;
                virLevel[newX][newY].unit.xPlace = newX;
                virLevel[newX][newY].unit.yPlace = newY;
                virLevel[newX][newY].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * unit.xPlace);
                virLevel[newX][newY].unit.y = 16 * unit.yPlace + shiftPhysFactor;
                virLevel[oldX][oldY].unit = null;
            }
        }
    }
    else if(chooser == 4) {
        if(virLevel[unit.xPlace][unit.yPlace].west != null) {
            if(virLevel[unit.xPlace][unit.yPlace].west.unit == null) {
                unit.movesDone += 1;
                confirmation.play();
                oldX = virLevel[unit.xPlace][unit.yPlace].xPlace;
                oldY = virLevel[unit.xPlace][unit.yPlace].yPlace;
                newX = virLevel[unit.xPlace][unit.yPlace].west.xPlace;
                newY = virLevel[unit.xPlace][unit.yPlace].west.yPlace;
                virLevel[newX][newY].unit = unit;
                virLevel[newX][newY].unit.xPlace = newX;
                virLevel[newX][newY].unit.yPlace = newY;
                virLevel[newX][newY].unit.x = shiftPhysFactor + mapWidth + shiftUIFactor + (16 * unit.xPlace);
                virLevel[newX][newY].unit.y = 16 * unit.yPlace + shiftPhysFactor;
                virLevel[oldX][oldY].unit = null;
            }
        }
    }
    if((oldX == newX) && (oldY == newY)) {
        if(virCounter < 4) {
            virCounter += 1;
            virTimer.add(2000, VirUnit.prototype.moveVir, this, unit); 
        }
        else {
            virTimer.add(1000, VirUnit.prototype.whichNode, this, unit);
        }
    }
    else {
        virTimer.add(1000, VirUnit.prototype.whichNode, this, unit);
    }
}

VirUnit.prototype.whichNode = function(unit) {
    if(virLevel[unit.xPlace][unit.yPlace].effect == 'blue') {
        blueNodeSound.play();
        kenta.tint = 0xff0000;
        kenta.movesDone += 1;
    }
    else if(virLevel[unit.xPlace][unit.yPlace].effect == 'green') {
        virLevel[unit.xPlace][unit.yPlace].whichKind();
    }
    else if(virLevel[unit.xPlace][unit.yPlace].effect == 'red') {
        virLevel[unit.xPlace][unit.yPlace].whichKind();
    }
    /*else if(virLevel[unit.xPlace][unit.yPlace].effect == 'yellow') {
        for(var i = 0; i < playerTeam.length; i++) {
        }
    }*/
    if(stopAI == true) {
        return;
    }
    unit.tint = 0x696969;
    virTimer.add(3000, VirUnit.prototype.virEnd, this);
}

VirUnit.prototype.virEnd = function() {
    if(stopAI == true) {
        return;
    }
    clickThruSound.play();
    for(var i = 0; i < playerTeam.length; i++) {
        playerTeam[i].tint = 0xffffff;
    }
    kenta.tint = 0xffffff;
    virCounter = 0;
    aiIndex += 1;
    if(aiIndex == virViruses.length) {
        for(var i = 0; i < playerTeam.length; i++) {
            playerTeam[i].turnEnd = false;
        }
        for(var i = 0; i < enemyTeam.length; i++) {
            enemyTeam[i].movesDone = 0;
            enemyTeam[i].attackedEnemy = false;
            enemyTeam[i].pathsFound = false;
            enemyTeam[i].tint = 0xffffff;
        }
        for(var i = 0; i < virViruses.length; i++) {
            virViruses[i].tint = 0xffffff;
            virViruses[i].movesDone = 0;
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
    else {
        VirUnit.prototype.virAI(virViruses[aiIndex]);
    }
}
