module states {
    // This is where all the fun happens
    export function scenario(): void {

        scene.removeChild(game_face);
        scene.removeChild(leftButton);
        scene.removeChild(rightButton);
        scene.removeChild(backButton);

        //scene = new createjs.Container(); //a container is a nestable display list that allows you to work with compound display elements
        if (scenarioNum == 0) {
            game_face = new objects.Label(" Now you are stand in front of the dragon den, you\n need to choose to go into the left cave or right cave.\n Left Cave: Green Dragon, Right Cave: Red Dragon.\n Hint: Green means peace, Red means brave.", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 1) {//lier
            game_face = new objects.Label(" Green dragon says:'You need to find the golden\n dragon to get the treasure.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 2) {//true
            game_face = new objects.Label(" Red dragon says:'You need to find the yellow\n dragon to get the treasure.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 3) {//true
            game_face = new objects.Label(" Yellow dragon says:'There is no treasure here,\n find my twin brother.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 4) {//lier
            game_face = new objects.Label(" White dragon says:'There is no yellow dragon here, go back.", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 5) {//lier
            game_face = new objects.Label("Blue dragon says:'The red dragon lied you the true.\n Go to find the golden dragon.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 6) {//lier
            game_face = new objects.Label("Golden dragon says:'You come to the right place.\n you will find the treasure here, go ahead.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 7) {//true
            game_face = new objects.Label(" Red dragon says:'You come to the wrong cave.\n my twin brother did not tell you where to go?'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 8) {//neutral
            game_face = new objects.Label("Orange dragon says:'Go away, don't border me.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 9) {//true
            game_face = new objects.Label("Yellow dragon says:'You win the game. Take the treasures.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 10) {//lier
            game_face = new objects.Label("Green dragon says:'Don't believe my twin brother.\n Find the golden dragon.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 11) {//true
            game_face = new objects.Label("Blue dragon says:'Go back to find the yellow dragon.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 12) {//lier
            game_face = new objects.Label("Pink dragon says:'You are dead. Game over.'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 13) {//true
            game_face = new objects.Label("Purple dragon says:'You have to believe the red dragon'", "20px Arial", "#ff7700", 320, 200);
            scene.addChild(game_face);
        } else if (scenarioNum == 14) {//dead
            game_face = new objects.Label("Black dragon says:'You lost the game.'", "20px Arial", "#ffffff", 320, 200);
            scene.addChild(game_face);
        }


        leftButton = new objects.Button("LeftCaveButton", 160, 400);
        leftButton.on("click", clickLeftButton, this); //callback function from game.ts
        scene.addChild(leftButton);

        backButton = new objects.Button("BackButton", 320, 400);
        backButton.on("click", clickBackButton, this); //callback function from game.ts
        scene.addChild(backButton);

        rightButton = new objects.Button("RightCaveButton", 480, 400);
        rightButton.on("click", clickRightButton, this); //callback function from game.ts
        scene.addChild(rightButton);

        stage.addChild(scene);
    }
}