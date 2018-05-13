//
var blah_size = 65; // characters' size
var red;
var redX;           // the xy block red in
var redY;
var blue;
var blueX;
var blueY;
var selected_x;    // mouse xy
var selected_y;
var tweenR;        //tweens
var tweenL;
var tweenU;
var tweenD;
var tweenQ;
var tweenE;
var tweenF;
var tweenG;
var gameXY_mid = 400;
var red_object;     //objects
var blue_object;
var myarray = new Array(15);         // 15x15 array
var teamRed = new Array();
var teamBlue = new Array();
var prompts;
var redTeam_index = 0;
var blueTeam_index = 0;


var Game = {};
/*Player shouldn't be able to move 2 slot when count == 1*/
Game.main =  function(game)
{


};

Game.main.prototype =
{



preload:
    function()
    {
        this.load.image('background', 'phaser/myGame/assets/black.jpg');
        this.load.image('red','phaser/myGame/assets/red.png');
        this.load.image('blue','phaser/myGame/assets/blue.png');

    },

create:
    function()
    {

        this.add.image(0, 0, 'background');

        //.create 2d array
        for(var i =0; i < 15; i++)
        {
            myarray [i] = new Array(15);
        }
        for(var i = 0; i < 15; i++)
        {
            for(var j =0; j<15; j++)
            {
                myarray[i][j] = 0;
            }
        }
        //player 1
        red = this.add.sprite(455, 455, 'red');
        red_object =  new Unit('red',10,5,5,0,'redTeam',false,7,7);           // create objs
		red.width = blah_size;
        red.height = blah_size;
        red.inputEnabled = true;
        game.input.onDown.add(this.selected, {character: red, character_object : red_object, teams: 'red_team', teamArray: teamRed  });
		
		//player 2
		red1 = this.add.sprite(650, 650, 'red');
        red_object1 =  new Unit('red',10,6,5,0,'redTeam',false,10,10);           // create objs
		red1.width = blah_size;
        red1.height = blah_size;
        red.inputEnabled = true;
        game.input.onDown.add(this.selected, {character: red1, character_object : red_object1, teams: 'red_team', teamArray: teamRed  });
		
		

        blue = this.add.sprite(260, 455, 'blue');
        blue_object =  new Unit('blue',10,2,2,0,'blueTeam',true,4,7);
        blue.width = blah_size;
        blue.height = blah_size;
        blue.inputEnabled = true;
        game.input.onDown.add(this.selected, {character: blue, character_object : blue_object, teams: 'blue_team', teamArray: teamBlue });
        // game.input.onDown.add(this.selected,  {red_sprite: red});

        //    5/11

        game.physics.arcade.enable(red); // for debug mode, delete after
        red.enableBody = true;
        game.physics.arcade.enable(blue);
        blue.enableBody = true;




        this.add.text(450, 360, 'blue object: ' + myarray[4][7].name, { fontSize: '20px', fill: '#FF0000' });

    },


selected:
    function()
    {
        var player = this.character;
        var player_object = this.character_object;
        var player_team = this.teams;
        var team_Array = this.teamArray;

        selected_x = Math.floor(game.input.mousePointer.x / 65);
        selected_y = Math.floor(game.input.mousePointer.y / 65);
        redX = Math.floor(player.x/65); // let the sprite handle the XY ?
        redY = Math.floor(player.y/65);
        // blueX = Math.floor(blue.x/65);
        // blueY = Math.floor(blue.y/65);
        /*var texts = 'x = '+ selected_x + ' y = '+ selected_y;
        var textss = 'Rx = '+ redX + ' Ry = '+ redY;
        this.add.text(500, 100, textss, {fontSize: '20px', fill: '#FF0000' });
        this.add.text(100, 100, texts, {fontSize: '20px', fill: '#FF0000' });
        */



        // movement only for now, move and update the 2d array

        if(selected_x  >= 960)    // blue not implemented yet, but use same code as red                                         teamRed[player_object].moveCount = 0;
        {


        }
        else if(selected_x - redX <= 2 && selected_x - redX > 0 && redY  == selected_y && team_Array[player_object.index].turnEnd == false && player_object.isRightEmpty(selected_x) == true && team_Array[player_object.index].moveCount <= 2 )
        {

            tweenR = game.add.tween(player).to( { x: selected_x * 65}, 1500, "Quart.easeOut");
            tweenR.start();
            myarray[player_object.xPlace][player_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_x - redX);
            myarray[player_object.xPlace + blocks_away][player_object.yPlace] = player_object;
            player_object.xPlace += blocks_away;
            team_Array[player_object.index].moveCount ++;      // += blocks_away
            //teamRed[player_object.index].moveCount ++;
            player_object.battle();


            if(player_team == 'red_team')
            {
                turnEnd('red');
            }
            else
            {
                turnEnd('blue');
            }

            //this.add.text(100, 500, 'blue turn: ' + player_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });  //

        }
        else if (redX - selected_x <= 2 && selected_x - redX < 0 && redY  == selected_y && team_Array[player_object.index].turnEnd == false && player_object.isLeftEmpty(selected_x) == true && team_Array[player_object.index].moveCount <= 2 )
        {

            tweenL = game.add.tween(player).to( { x: redX * 65 - (redX - selected_x )*65}, 1500, "Quart.easeOut");
            tweenL.start();
            myarray[player_object.xPlace][player_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_x - redX);
            myarray[player_object.xPlace - blocks_away][player_object.yPlace] = player_object;
            player_object.xPlace -= blocks_away;
            team_Array[player_object.index].moveCount ++;
            player_object.battle();



            if(player_team == 'red_team')
            {
                turnEnd('red');
            }
            else
            {
                turnEnd('blue');
            }
            //player_object.turnEnd(blue_object);
            // this.add.text(100, 500, 'blue turn: ' + player_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });

        }
        else if (selected_y - redY <= 2 && selected_y - redY > 0 && redX == selected_x && team_Array[player_object.index].turnEnd == false && player_object.isDownEmpty(selected_y) == true  && team_Array[player_object.index].moveCount <= 2 )
        {
            tweenD = game.add.tween(player).to( { y: (redY + selected_y - redY) * 65}, 1500, "Quart.easeOut");
            tweenD.start();
            myarray[player_object.xPlace][player_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_y - redY);
            myarray[player_object.xPlace][player_object.yPlace + blocks_away] = player_object;
            player_object.yPlace += blocks_away;
            team_Array[player_object.index].moveCount ++;
            player_object.battle();


            if(player_team == 'red_team')
            {
                turnEnd('red');
            }
            else
            {
                turnEnd('blue');
            }
            //player_object.turnEnd(blue_object);
            // this.add.text(100, 500, 'blue turn: ' + player_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });

        }
        else if (redY - selected_y <= 2 && selected_y - redY < 0 && redX  == selected_x  && team_Array[player_object.index].turnEnd == false && player_object.isUpEmpty(selected_y) == true  && team_Array[player_object.index].moveCount <= 2 )
        {
            tweenU = game.add.tween(player).to( { y: redY * 65 - (redY - selected_y )*65}, 1500, "Quart.easeOut");
            tweenU.start();
            myarray[player_object.xPlace][player_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_y - redY);
            myarray[player_object.xPlace][player_object.yPlace - blocks_away] = player_object;
            player_object.yPlace -= blocks_away;
            team_Array[player_object.index].moveCount ++;
            player_object.battle();

            if(player_team == 'red_team')
            {
                turnEnd('red');
            }
            else
            {
                turnEnd('blue');
            }



            //player_object.turnEnd(blue_object);
            // this.add.text(100, 500, 'blue turn: ' + player_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });
        }


        /* if(selected_x  >= 960)
         {


         }
         else if(selected_x - blueX <= 2 && selected_x - blueX > 0 && blueY  == selected_y && blue_object.turnEnd == false && player_object.isRightEmpty(selected_x) == true )
         {
             tweenD = game.add.tween(blue).to( { x: (blueX + selected_x - blueX) * 65 }, 1500, "Quart.easeOut");
             tweenD.start();

         }
         else if (blueX - selected_x <= 2 && selected_x - blueX < 0 && blueY  == selected_y && blue_object.turnEnd == false)
         {
             tweenE = game.add.tween(blue).to( { x: blueX * 65 - (blueX - selected_x )*65}, 1500, "Quart.easeOut");
             tweenE.start();

         }
         else if (selected_y - blueY <= 2 && selected_y - blueY > 0 && blueX == selected_x && blue_object.turnEnd == false)
         {
             tweenF = game.add.tween(blue).to( { y: (blueY + selected_y - blueY) * 65}, 1500, "Quart.easeOut");
             tweenF.start();

         }
         else if (blueY - selected_y <= 2 && selected_y - blueY < 0 && blueX  == selected_x && blue_object.turnEnd == false)
         {
             tweenG = game.add.tween(blue).to( { y: blueY * 65 - (blueY - selected_y )*65}, 1500, "Quart.easeOut");
             tweenG.start();
         }
        */

    },

    /*update:
        function()
        {

        },*/



render:
    function()
    {

        game.debug.bodyInfo(red, 32, 32);

        game.debug.body(red);
        game.debug.body(blue);

    },

};

function turnEnd (player)              // if all characters on red team turnEnd == true, set all blue team member   turnEnd == false
{
    //window.alert('fk u');

    if(player == 'red')
    {
        var counter = 0;

        for(var i =0; i < teamRed.length ; i++)
        {
            if(teamRed[i].moveCount >= 2)
            {
                counter ++;
            }
        }

        if(counter >= teamRed.length )
        {
            for(var i = 0; i < teamRed.length; i++)
            {
                teamRed[i].turnEnd = true;
                teamRed[i].moveCount = 0;
            }

            for(var i =0; i < teamBlue.length ; i++)
            {
                teamBlue[i].turnEnd = false;

            }
        }
    }
    else
    {

        var counter = 0;

        for(var i =0; i < teamBlue.length; i++)
        {
            if(teamBlue[i].moveCount == 2)
            {
                counter ++;
            }
        }

        if(counter >= teamBlue.length)
        {
            for(var i =0; i < teamBlue.length; i++)
            {
                teamBlue[i].turnEnd = true;
                teamBlue[i].moveCount = 0;
            }

            for(var i =0; i < teamRed.length; i++)
            {
                teamRed[i].turnEnd = false;

            }
        }
    }






}
















