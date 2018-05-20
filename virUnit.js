function VirUnit(unitName, moveCount, team, turnEnd, xPlace, yPlace, key, frame)   // Use the x and y variables as part of making the sprite.
{
	Phaser.Sprite.call(this, game, 480 + (xPlace * 16), yPlace * 16, key, frame);
    this.width = 16;
    this.height = 16;
    this.unitName = unitName;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team;
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    this.inputEnabled = false;
    game.physics.enable(this);
}

VirUnit.prototype = Object.create(Phaser.Sprite.prototype);
VirUnit.prototype.constructor = VirUnit;

VirUnit.prototype.goToNode = function() {

}

VirUnit.prototype.checkNodes = function(maybeNode) {
    var myNode = virLevel[this.xPlace][this.yPlace];
    if(myNode.north == maybeNode) {
        console.log('north');
        accessible = true;
    }
    else if(myNode.south == maybeNode) {
        console.log('south');
        accessible = true;
    }
    else if(myNode.west == maybeNode) {
        console.log('west');
        accessible = true;
    }
    else if(myNode.east == maybeNode) {
        console.log('east');
        accessible = true;
    }
}