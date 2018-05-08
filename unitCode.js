// Code for making a unit, be it a player unit or an enemy unit. 
// This is by no means complete.

function Unit(health, attack, defense, moveCount, xPlace, yPlace) { // Use the last two variables as part of making the sprite.
	this.health = health;
	this.attack = attack;
	this.defense = defense;
	this.moveCount = moveCount; // Maximum number of squares a unit can move.
	this.movesDone = 0; // Number of squares a unit has moved through so far.
	this.turnEnd = false; // A unit should be able to do its actions only if this variable remains false.
	this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
}

Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

function update() { 
	if(this.movesDone == this.moveCount || this.attackedEnemy == true) {
		this.turnEnd = true;
	}
}