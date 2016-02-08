var states;
(function (states) {
    // This is where all the fun happens
    function gameover() {
        scene.removeChild(game_face);
        scene.removeChild(leftButton);
        scene.removeChild(rightButton);
        scene.removeChild(backButton);
        if (scenarioNum == 9) {
            game_face = new objects.Label("Yellow dragon says:'You win the game.\n Take the treasures.'", "25px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
            stage.removeChild(bitmap);
            bitmap = new createjs.Bitmap("Assets/images/dragon-treasure.jpg");
            bitmap.scaleX = 0.45;
            bitmap.scaleY = 0.35;
            stage.addChild(bitmap);
            stage.update();
        }
        else if (scenarioNum == 14) {
            game_face = new objects.Label("Black dragon says:'You lost the game.'", "25px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
            stage.removeChild(bitmap);
            bitmap = new createjs.Bitmap("Assets/images/dragon-fire.jpg");
            bitmap.scaleX = 0.4;
            bitmap.scaleY = 0.4;
            stage.addChild(bitmap);
            stage.update();
        }
        startoverButton = new objects.Button("startoverButton", 320, 400);
        startoverButton.on("click", clickStartOverButton, this); //callback function from game.ts
        scene.addChild(startoverButton);
        stage.addChild(scene);
    }
    states.gameover = gameover;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map