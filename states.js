// In your index.html, it should have the following:
/* <script type= "text/javascript" src = "phaser/myGame/js/character.js"> </script>
<script type= "text/javascript" src = "phaser/myGame/js/title.js"> </script>
<script type= "text/javascript" src = "phaser/myGame/js/beginningDialog.js"> </script>
<script type= "text/javascript" src = "phaser/myGame/js/main.js"> </script>
<script type= "text/javascript" src = "phaser/myGame/js/states.js"> </script>*/

var game = new Phaser.Game(1200, 600, Phaser.AUTO, '');
game.state.add("title", title);
game.state.add("beginningDialog", beginningDialogPlay);
game.state.add("battle", Game.main);
game.state.start("title");