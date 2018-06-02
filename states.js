var game = new Phaser.Game(960, 600, Phaser.AUTO, '');
game.state.add("title", title);
game.state.add("level1Dialog", beginningDialogPlay);
game.state.add("level1Battle", level1Battle);
game.state.start("title");
