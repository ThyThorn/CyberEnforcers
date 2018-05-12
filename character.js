function Unit(name,health, attack, defense, moveCount, friend, turnEnd, xPlace, yPlace) { // Use the last two variables as part of making the sprite.
	this.name = name;
	this.health = health;
	this.attack = attack;
	this.defense = defense;
	this.moveCount = moveCount; // Maximum number of squares a unit can move.
	this.friend = friend; // This is a boolean that determines whether the unit is a player unit or an enemy unit. 
	this.movesDone = 0; // Number of squares a unit has moved through so far.
	this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
	this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
	this.xPlace = xPlace;
    this.yPlace = yPlace;                                              	
	myarray[xPlace][yPlace] = this;   // place the obj into the 2d array
}


	