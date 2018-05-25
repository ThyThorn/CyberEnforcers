function Node(named,effect,north,south,west,east,xPlace,yPlace,unit){
	this.named = named;	// the node's name
	this.effect = effect;	//buff or debufs on units, only active if node is active
	this.xPlace = xPlace;	// position in x
	this.yPlace = yPlace;	// position in y
	this.north = north;	 //paths to the nodes that can be reached from this node
	this.south = south; 
	this.west = west;
	this.east = east;
	this.unit = unit; // the unit that is on the node right now.
	virLevel[this.xPlace][this.yPlace] = this;
	this.AOETiles = game.add.group();
}

Node.prototype.constructor = Node;

var timer;

Node.prototype.whichKind = function() {
	background.inputEnabled = false;
	if(this.effect == 'green') {
		this.checkAOE();
		timer = game.time.create(false);
		timer.add(1000, Node.prototype.greenNode, this);
		timer.add(4000, Node.prototype.destroy, this);
		timer.start();
	}
	else if(this.effect == 'red') {
		this.checkAOE();
		timer = game.time.create(false);
		timer.add(1000, Node.prototype.redNode, this);
		timer.add(4000, Node.prototype.destroy, this);
		timer.start();
	}
	else if(this.effect == 'blue') {
		blueNodeVar = true;
	}
}

Node.prototype.checkAOE = function() {
	for(northBound = 1; northBound <= yAOE; northBound++) {
		if(this.yPlace - northBound < 0) {
			break;
		}
	}
	northBound -= 1;
	for(southBound = 1; southBound <= yAOE; southBound++) {
		if(this.yPlace + southBound >= levelHeight) {
			break;
		}
	}
	southBound -= 1;
	for(westBound = 1; westBound <= xAOE; westBound++) {
		if(this.xPlace - westBound < 0) {
			break;
		}
	}
	westBound -= 1;
	for(eastBound = 1; eastBound <= xAOE; eastBound++) {
		if(this.xPlace + eastBound >= levelWidth) {
			break;
		}
	}
	eastBound -= 1;
}

Node.prototype.destroy = function() {
	this.AOETiles.removeAll();
	hackNodeButton.loadTexture('hackNodeButton');
	enableButtons();
	background.inputEnabled = true;
}

Node.prototype.greenNode = function() {
	for(var i = this.yPlace - northBound; i <= this.yPlace; i++) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health += 5;
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health += 5;
				}
			}
		}
	}
	for(var i = this.yPlace + southBound; i > this.yPlace; i--) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health += 5;
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health += 5;
				} 
			}
		}
	}
},

Node.prototype.redNode = function() {
	for(var i = this.yPlace - northBound; i <= this.yPlace; i++) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health -= 10;
					if(gameLevel[j][i].health <= 0) {
						gameLevel[j][i].deleteFromTeam();
					}
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health -= 10;
					if(gameLevel[j][i].health <= 0) {
						gameLevel[j][i].deleteFromTeam();
					}
				}
			}
		}
	}
	for(var i = this.yPlace + southBound; i > this.yPlace; i--) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health -= 10;			
					if(gameLevel[j][i].health <= 0) {
						gameLevel[j][i].deleteFromTeam();
					}	
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					gameLevel[j][i].health -= 10;
					if(gameLevel[j][i].health <= 0) {
						gameLevel[j][i].deleteFromTeam();
					}
				} 
			}
		}
	}
}
