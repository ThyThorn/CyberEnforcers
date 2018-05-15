


function Vert_World_Node(name,effect,path_up,path_down,path_left,path_right,xPlace,yPlace){
	this.name = name;	//name of the node like B1 R3
	this.effect = effect;	//buff or debufs on units, only active if node is active
	this.active = false;	//node turned off be defalt, only on when player unit is ontop of it
	this.xPlace = xPlace;	//position in x
	this.yPlace = yPlace;	//position in y
	//paths to the nodes that can be reached from this node
	this.path_up = path_up;	
	this.path_down = path_down;
	this.path_left = path_left;
	this.path_right =  path_right;
	
}
