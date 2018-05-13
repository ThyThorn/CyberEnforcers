function Unit(name,health, attack, defense, moveCount, team, turnEnd, xPlace, yPlace)   // Use the last two variables as part of making the sprite.
{
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.moveCount = moveCount; // Maximum number of squares a unit can move.
    this.team = team; // This is a boolean that determines whether the unit is a player unit or an enemy unit.
    //this.movesDone = 0; // Number of squares a unit has moved through so far.
    this.turnEnd = turnEnd; // A unit should be able to do its actions only if this variable remains false.
    this.attackedEnemy = false; // This remains false until the unit gets into a battle with another unit.
    this.xPlace = xPlace;
    this.yPlace = yPlace;
    myarray[xPlace][yPlace] = this;   // place the obj into the 2d array

    if(this.team == 'redTeam')
    {
        teamRed.push(this);
        this.index = redTeam_index;
        redTeam_index ++;
    }
    else
    {
        teamBlue.push(this);
        this.index = blueTeam_index;
        blueTeam_index ++;
    }
    //redTeam_index ++;

    Unit.prototype.isLeftEmpty = function(selected_x)
    {
        var blocks_away = Math.abs(selected_x - this.xPlace);

        if (myarray[this.xPlace - blocks_away][this.yPlace] == 0 )       // does not handle the case which an object is in between
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    Unit.prototype.isRightEmpty = function(selected_x)
    {
        var blocks_away = Math.abs(selected_x - this.xPlace);

        if (myarray[this.xPlace + blocks_away][this.yPlace] == 0)
        {
            return true;
        }
        else
        {
            return false;
        }


    };

    Unit.prototype.isDownEmpty = function(selected_y)
    {
        var blocks_away = Math.abs(selected_y - this.yPlace);

        if (myarray[this.xPlace ][this.yPlace + blocks_away] == 0 )
        {
            return true;
        }
        else
        {
            return false;
        }


    };

    Unit.prototype.isUpEmpty = function(selected_y)
    {
        var blocks_away = Math.abs(selected_y - this.yPlace);

        if (myarray[this.xPlace ][this.yPlace - blocks_away] == 0 )
        {
            return true;
        }
        else
        {
            return false;
        }


    };



    /*Unit.prototype.isTurnEnd = function() {
    	if(this.moveCount >= 2){
    		return true;
    	}else {
    		return false;
    	}

    };*/


    Unit.prototype.battle = function()
    {

        var left = myarray[this.xPlace - 1][this.yPlace];
        var right = myarray[this.xPlace + 1][this.yPlace];
        var up = myarray[this.xPlace][this.yPlace - 1];
        var down =  myarray[this.xPlace][this.yPlace + 1];

        if(left != 0)
        {
            var opponent = left;
            prompts = "Battle with " + opponent.name + "?\n" + "Health: " + opponent.health + "\nAttack: " + opponent.attack + "\nDefense: " + opponent.defense + "\n YES!!!";
            game.add.text(0, 0, prompts, { fontSize: '20px', fill: '#FF0000' });
            //window.alert(prompts);
            //this.attackedEnemy = true;

            var damage_dealt = 0;
            if(this.attack >　opponent.defense　)
            {
                damage_dealt = this.attack - opponent.defense;
                opponent.health -= damage_dealt;
            }


            var result = "Attacked " + opponent.name + " with attack power " + this.attack + ".\n" + opponent.name + " has " + opponent.defense + " defense point.\n" + damage_dealt + " damage was dealt\n" + opponent.name + " health: " + opponent.health;
            game.add.text(500, 0, result, { fontSize: '20px', fill: '#66ff66' });
            //return myarray[this.xPlace - 1][this.yPlace].name;
        }

        if(right != 0)
        {
            var opponent = right;
            prompts = "Battle with " + opponent.name + "?\n" + "Health: " + opponent.health + "\nAttack: " + opponent.attack + "\nDefense: " + opponent.defense + "\n YES!!!";
            game.add.text(0, 0, prompts, { fontSize: '20px', fill: '#FF0000' });
            //window.alert(prompts);
            //this.attackedEnemy = true;

            var damage_dealt = 0;
            if(this.attack >　opponent.defense　)
            {
                damage_dealt = this.attack - opponent.defense;
                opponent.health -= damage_dealt;
            }


            var result = "Attacked " + opponent.name + " with attack power " + this.attack + ".\n" + opponent.name + " has " + opponent.defense + " defense point.\n" + damage_dealt + " damage was dealt\n" + opponent.name + " health: " + opponent.health;
            game.add.text(500, 0, result, { fontSize: '20px', fill: '#66ff66' });
            //return myarray[this.xPlace - 1][this.yPlace].name;
        }


        if(up != 0)
        {
            var opponent = up;
            prompts = "Battle with " + opponent.name + "?\n" + "Health: " + opponent.health + "\nAttack: " + opponent.attack + "\nDefense: " + opponent.defense + "\n YES!!!";
            game.add.text(0, 0, prompts, { fontSize: '20px', fill: '#FF0000' });
            //window.alert(prompts);
            //this.attackedEnemy = true;

            var damage_dealt = 0;
            if(this.attack >　opponent.defense　)
            {
                damage_dealt = this.attack - opponent.defense;
                opponent.health -= damage_dealt;
            }


            var result = "Attacked " + opponent.name + " with attack power " + this.attack + ".\n" + opponent.name + " has " + opponent.defense + " defense point.\n" + damage_dealt + " damage was dealt\n" + opponent.name + " health: " + opponent.health;
            game.add.text(500, 0, result, { fontSize: '20px', fill: '#66ff66' });
            //return myarray[this.xPlace - 1][this.yPlace].name;
        }

        if(down != 0)
        {
            var opponent = down;
            prompts = "Battle with " + opponent.name + "?\n" + "Health: " + opponent.health + "\nAttack: " + opponent.attack + "\nDefense: " + opponent.defense + "\n YES!!!";
            game.add.text(0, 0, prompts, { fontSize: '20px', fill: '#FF0000' });
            //window.alert(prompts);
            //this.attackedEnemy = true;

            var damage_dealt = 0;
            if(this.attack >　opponent.defense　)
            {
                damage_dealt = this.attack - opponent.defense;
                opponent.health -= damage_dealt;
            }


            var result = "Attacked " + opponent.name + " with attack power " + this.attack + ".\n" + opponent.name + " has " + opponent.defense + " defense point.\n" + damage_dealt + " damage was dealt\n" + opponent.name + " health: " + opponent.health;
            game.add.text(500, 0, result, { fontSize: '20px', fill: '#66ff66' });

        }


    };
   
}




