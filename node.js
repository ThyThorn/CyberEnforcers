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

Node.prototype.whichKind = function() { // Only Kenta will ever use this, since enemies cannot activate nodes.
	background.inputEnabled = false;
	if(this.unit.movesDone >= this.unit.moveCount && this.unit.unitName == 'kenta') {
		kenta.tint = 0xffffff;
        kenta.portrait.visible = false;
        kenta.UImovecountT.visible = false;
        enableButtons();
		return;
	}
	if(this.effect == 'green') {
		this.checkAOE();
		kenta.tint = 0xffffff;
        kenta.portrait.visible = false;
        kenta.UImovecountT.visible = false;
		timer = game.time.create(false);
		timer.add(1000, Node.prototype.greenNode, this);
		timer.add(2000, Node.prototype.destroy, this);
		timer.start();
	}
	else if(this.effect == 'red') {
		this.checkAOE();
		kenta.tint = 0xffffff;
        kenta.portrait.visible = false;
        kenta.UImovecountT.visible = false;
		timer = game.time.create(false);
		timer.add(1000, Node.prototype.redNode, this);
		timer.add(2000, Node.prototype.destroy, this);
		timer.start();
	}
	else if(this.effect == 'blue') {
		kenta.tint = 0xFFDF00;
		blueNodeVar = true; // This is used for choosing the virtual unit (which is always Kenta for the player).
	}
}

Node.prototype.checkAOE = function() { // Find the boundaries to the AOE.
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

Node.prototype.destroy = function() { // Get rid of the AOE squares.
	this.AOETiles.removeAll();
	hackNodeButton.loadTexture('hackNodeButton');
	enableButtons();
	background.inputEnabled = true;
}

Node.prototype.greenNode = function() { // Make the AOE and activate its effect.
	greenNodeSound.play();
	for(var i = this.yPlace - northBound; i <= this.yPlace; i++) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) { // Heal any unit in the AOE.
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 1) {
						gameLevel[j][i].health += 5;
					}
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 0) {
						gameLevel[j][i].health += 5;
					}
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 1) {
						gameLevel[j][i].health += 5;
					}
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 0) {
						gameLevel[j][i].health += 5;
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
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 1) {
						gameLevel[j][i].health += 5;
					}
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 0) {
						gameLevel[j][i].health += 5;
					}
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 1) {
						gameLevel[j][i].health += 5;
					}
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 0) {
						gameLevel[j][i].health += 5;
					}
				} 
			}
		}
	}
	this.unit.movesDone += 2;
},

Node.prototype.redNode = function() { // Same thing as above, but the effect is different.
	redNodeSound.play();
	for(var i = this.yPlace - northBound; i <= this.yPlace; i++) {
		for(var j = this.xPlace - westBound; j <= this.xPlace; j++) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 1) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
							PhysUnit.prototype.turnEnd();
						}
					}
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 0) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
							PhysUnit.prototype.turnEnd();
						}
					}
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 1) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
							PhysUnit.prototype.turnEnd();
						}
					}
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 0) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
						}
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
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 1) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
						}
					}
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 0) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
						}
					}
				} 
			}
		}
		for(var j = this.xPlace + eastBound; j > this.xPlace; j--) {
			if(gameLevel[j][i] != 1) {
				blueTile = this.AOETiles.create(j * 16 + shiftPhysFactor, i * 16 + shiftPhysFactor, 'greenTile');
				if(gameLevel[j][i] instanceof PhysUnit) {
					if(gameLevel[j][i].team == 'enemy' && turnNumber % 2 == 1) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
						}
					}
					if(gameLevel[j][i].team == 'player' && turnNumber % 2 == 0) {
						gameLevel[j][i].health -= 10;
						if(gameLevel[j][i].health <= 0) {
							gameLevel[j][i].deleteFromTeam();
						}
					}
				} 
			}
		}
	}
	this.unit.movesDone += 2;
}
