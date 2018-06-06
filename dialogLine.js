// Constructor of dialog line in the works.

function dialogLine(line,char1,char2,char1x, char1y, char2x, char2y, scale1, scale2, dialogScene,soundEffect,specialEffect, leftSpeaker, rightSpeaker){
	this.line = line; // The dialog line itself. If there is no line, use ''.
	this.char1 = char1; // The sprite of the character appearing on the left.
	this.char2 = char2; // The sprite of the character appearing on the right.
	this.char1x = char1x; // The x-coordinate of the left character. 
	this.char1y = char1y; // The y-coordinate of the left character.
	this.char2x = char2x; // The x-coordinate of the right character.
	this.char2y = char2y; // The y-coordinate of the right character.
	this.scale1 = scale1; // The scale to which you want to set the left character.
	this.scale2 = scale2; // THe scale to which you want to set the right character.
	this.dialogScene = dialogScene; // The array to which the dialog line will be added.
	this.dialogScene.push(this); // Add the line to the array.
	this.soundEffect = soundEffect; // A string that says what kind of sound effect you want. If none, use ''.
	this.specialEffect = specialEffect; // A string that says what kind of special effect for the camera to use. If none, use ''.
	this.leftSpeaker = leftSpeaker; // Boolean that determines which character is speaking.
	this.rightSpeaker = rightSpeaker; // The one not speaking will have its sprite dimmed.
}

dialogLine.prototype.constructor = dialogLine;

dialogLine.prototype.execute = function() {
	if(this.line != '') {
		textBox = game.add.sprite(0, game.world.height - 130, 'textBox');
        textBox.width = game.world.width;
        gameLine = game.add.text(23,game.world.height - 115, this.line, {font: '18.4pt Georgia', fill: '#000' }); 
	}
	if(leftChar != null) {
        leftChar.kill();
    }
	leftChar = game.add.sprite(this.char1x, this.char1y, this.char1);
    leftChar.scale.setTo(this.scale1, this.scale1);
    if(rightChar != null) {
        rightChar.kill();
    }
    rightChar = game.add.sprite(this.char2x, this.char2y, this.char2);
    rightChar.scale.setTo(this.scale2, this.scale2);
    textBox.bringToTop();
    gameLine.bringToTop();
    lineVar += 1;
    if(this.soundEffect == '') {
        normal.play();
    }
    if(this.specialEffect == 'flash') {
        game.camera.flash(0xffffff, 500);
    }
    if(this.leftSpeaker == true && this.rightSpeaker == false) {
    	rightChar.tint = 0x696969;
    }
    else if(this.rightSpeaker == true && this.leftSpeaker == false) {
    	leftChar.tint = 0x696969;
    }
    else if(this.leftSpeaker == false && this.rightSpeaker == false) {
    	leftChar.tint = 0x696969;
    	rightChar.tint = 0x696969;
    }
}
