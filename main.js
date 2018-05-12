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
var prompts;


var Game = {};

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

        red = this.add.sprite(455, 455, 'red');
        red.width = blah_size;
        red.height = blah_size;
        red.inputEnabled = true;
        game.input.onDown.add(this.selected, this);

        blue = this.add.sprite(260, 455, 'blue');
        blue.width = blah_size;
        blue.height = blah_size;
        blue.inputEnabled = true;
        game.input.onDown.add(this.selected, this);

        //    5/11

        game.physics.arcade.enable(red); // for debug mode, delete after
        red.enableBody = true;
        game.physics.arcade.enable(blue);
        blue.enableBody = true;


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


        red_object =  new Unit('red',10,5,5,0,'human',false,7,7);           // create objs
        blue_object =  new Unit('blue',10,2,2,0,'robot',true,4,7);
        this.add.text(450, 360, 'blue object: ' + myarray[4][7].name, { fontSize: '20px', fill: '#FF0000' });

    },


selected:
    function()
    {
        selected_x = Math.floor(game.input.mousePointer.x / 65);
        selected_y = Math.floor(game.input.mousePointer.y / 65);
        redX = Math.floor(red.x/65); // let the sprite handle the XY ?
        redY = Math.floor(red.y/65);
        blueX = Math.floor(blue.x/65);
        blueY = Math.floor(blue.y/65);
        /*var texts = 'x = '+ selected_x + ' y = '+ selected_y;
        var textss = 'Rx = '+ redX + ' Ry = '+ redY;
        this.add.text(500, 100, textss, {fontSize: '20px', fill: '#FF0000' });
        this.add.text(100, 100, texts, {fontSize: '20px', fill: '#FF0000' });
        */

        // movement only for now, move and update the 2d array

        if(selected_x  >= 960)    // blue not implemented yet, but use same code as red
        {


        }
        else if(selected_x - redX <= 2 && selected_x - redX > 0 && redY  == selected_y && red_object.turnEnd == false && red_object.isRightEmpty(selected_x) == true && red_object.moveCount < 2 )
        {

            tweenR = game.add.tween(red).to( { x: selected_x * 65}, 1500, "Quart.easeOut");
            tweenR.start();
            myarray[red_object.xPlace][red_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_x - redX);
            myarray[red_object.xPlace + blocks_away][red_object.yPlace] = red_object;
            red_object.xPlace += blocks_away;
            red_object.moveCount ++;
            red_object.battle();
            this.add.text(100, 500, 'blue turn: ' + red_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });  //

        }
        else if (redX - selected_x <= 2 && selected_x - redX < 0 && redY  == selected_y && red_object.turnEnd == false && red_object.isLeftEmpty(selected_x) == true  && red_object.moveCount < 2)
        {

            tweenL = game.add.tween(red).to( { x: redX * 65 - (redX - selected_x )*65}, 1500, "Quart.easeOut");
            tweenL.start();
            myarray[red_object.xPlace][red_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_x - redX);
            myarray[red_object.xPlace - blocks_away][red_object.yPlace] = red_object;
            red_object.xPlace -= blocks_away;
            red_object.moveCount ++;
            red_object.battle();
            //red_object.turnEnd(blue_object);
            this.add.text(100, 500, 'blue turn: ' + red_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });

        }
        else if (selected_y - redY <= 2 && selected_y - redY > 0 && redX == selected_x && red_object.turnEnd == false && red_object.isDownEmpty(selected_y) == true  && red_object.moveCount < 2)
        {
            tweenD = game.add.tween(red).to( { y: (redY + selected_y - redY) * 65}, 1500, "Quart.easeOut");
            tweenD.start();
            myarray[red_object.xPlace][red_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_y - redY);
            myarray[red_object.xPlace][red_object.yPlace + blocks_away] = red_object;
            red_object.yPlace += blocks_away;
            red_object.moveCount ++;
            red_object.battle();
            //red_object.turnEnd(blue_object);
            this.add.text(100, 500, 'blue turn: ' + red_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });

        }
        else if (redY - selected_y <= 2 && selected_y - redY < 0 && redX  == selected_x  && red_object.turnEnd == false && red_object.isUpEmpty(selected_y) == true  && red_object.moveCount < 2)
        {
            tweenU = game.add.tween(red).to( { y: redY * 65 - (redY - selected_y )*65}, 1500, "Quart.easeOut");
            tweenU.start();
            myarray[red_object.xPlace][red_object.yPlace] = 0;
            var blocks_away = Math.abs(selected_y - redY);
            myarray[red_object.xPlace][red_object.yPlace - blocks_away] = red_object;
            red_object.yPlace -= blocks_away;
            red_object.moveCount ++;
            red_object.battle();
            //red_object.turnEnd(blue_object);
            this.add.text(100, 500, 'blue turn: ' + red_object.TurnEnd(blue_object), { fontSize: '20px', fill: '#FF0000' });
        }


        if(selected_x  >= 960)
        {


        }
        else if(selected_x - blueX <= 2 && selected_x - blueX > 0 && blueY  == selected_y && blue_object.turnEnd == false)
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


    },

update:
    function()
    {

    },



render:
    function()
    {

        game.debug.bodyInfo(red, 32, 32);

        game.debug.body(red);
        game.debug.body(blue);

    },

};

