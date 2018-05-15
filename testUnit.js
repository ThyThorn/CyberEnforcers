function Unit(unitName, health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace, gameLevel, key, frame)   // Use the x and y variables as part of making the sprite.
{
	Phaser.Sprite.call(this, game, xPlace * 16, yPlace * 16, key, frame);
    this.width = 16;
    this.height = 16;
    this.unitName = unitName;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team; // This is a boolean that determines whether the unit is a player unit or an enemy unit.
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
    this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    gameLevel[xPlace][yPlace] = this;
    this.inputEnabled = true;
    game.physics.enable(this);
    this.events.onInputDown.add(Unit.prototype.selector, this);
}

Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

Unit.prototype.selector = function(sprite) {
       
}

Unit.prototype.update = function() {

}