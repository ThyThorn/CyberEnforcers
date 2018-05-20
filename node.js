function Node(named,effect,north,south,west,east,xPlace,yPlace,unit){
	this.named = named;	// the node's name
	this.effect = effect;	//buff or debufs on units, only active if node is active
	this.active = false;	//node turned off by default. Only on when player unit is on top of it
	this.xPlace = xPlace;	// position in x
	this.yPlace = yPlace;	// position in y
	this.north = north;	 //paths to the nodes that can be reached from this node
	this.south = south; 
	this.west = west;
	this.east = east;
	this.unit = unit; // the unit that is on the node right now.
	virLevel[this.xPlace][this.yPlace] = this;
}

Node.prototype.constructor = Node;
