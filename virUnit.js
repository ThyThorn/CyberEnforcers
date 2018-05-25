function VirUnit(unitName, moveCount, team, turnEnd, xPlace, yPlace, key, frame)
{
    Phaser.Sprite.call(this, game, shiftPhysFactor + mapWidth + shiftUIFactor + (xPlace * 16), shiftPhysFactor + yPlace * 16, key, frame);
    this.width = 16;
    this.height = 16;
    this.unitName = unitName;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team;
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    this.inputEnabled = false;
    game.physics.enable(this);
    if(this.team == 'enemy') {
        virViruses.push(this);
    }
}

VirUnit.prototype = Object.create(Phaser.Sprite.prototype);
VirUnit.prototype.constructor = VirUnit;

VirUnit.prototype.checkNodes = function(maybeNode) {
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
