// Page where states are added.

var game = new Phaser.Game(960, 600, Phaser.AUTO, '');
game.state.add("title", title);
game.state.add("credits", credits);
game.state.add("prolog", prolog);
game.state.add("level1Dialog", level1Dialog);
game.state.add("level1Battle", level1Battle);
game.state.add("level2Dialog", level2Dialog);
game.state.add("level2Battle", level2Battle);
game.state.add("level3Dialog", level3Dialog);
game.state.add("level3Battle", level3Battle);
game.state.add("level4Dialog", level4Dialog);
game.state.add("level4Battle", level4Battle);
game.state.add("ending", ending);
game.state.add("gameOver", gameOver);
game.state.start("title");
