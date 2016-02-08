// MENU STATE
var states;
(function (states) {
    // This is where all the fun happens
    function menu() {
        scene = new createjs.Container(); //a container is a nestable display list that allows you to work with compound display elements
        gameNameLabel = new objects.Label("The Dragon Den Legend", "50px Arial", "#ff7700", 320, 80); //320,240
        scene.addChild(gameNameLabel); // add label to the stage
        game_face = new objects.Label(" You are a hero, in order to save all the people in your village,\n you need to go to the dragon den to beat the dragons and get\n the treasure back. There are eight caves but you can only find\n the treasure in one cave . In order to win the game, you need\n to use you wisdom to find the treasure cave. Good luck! ", "20px Arial", "#ff7700", 320, 200); //320,240
        scene.addChild(game_face); // add label to the stage
        // start button
        startButton = new objects.Button("StartButton", 320, 400);
        startButton.on("click", clickStartButton, this); //callback function from game.ts
        scene.addChild(startButton);
        stage.addChild(scene);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map