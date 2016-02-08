/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../config/config.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/image.ts" />
/// <reference path="../states/menu.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scenarioNum: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
//var helloLabel: objects.Label;
var gameNameLabel: objects.Label;
var game_face: objects.Label;

var startButton: objects.Button;
var leftButton: objects.Button;
var backButton: objects.Button;
var rightButton: objects.Button;
var startoverButton: objects.Button;
var bitmap: createjs.Bitmap;

function init(): void {

    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    bitmap = new createjs.Bitmap("Assets/images/dragon-cover.jpg");
    bitmap.scaleX = 0.4;
    bitmap.scaleY = 0.35; 
    //bitmap.x = 0;
    //bitmap.y = 0;
    //bitmap.setBounds(0, 0, 640, 480);
    stage.addChild(bitmap);
    stage.enableMouseOver(20); // enable mouse events
    console.log("set up stage...");

    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    console.log("set up Ticker...");

    setupStats(); // sets up our stats counting
    state = config.MENU_STATE;
    changeState();
    
    
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {

    stats.begin(); // start counting
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats(): void {

    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
 
    scene.removeChild(startButton);
    scene.removeChild(game_face);
    state = config.PLAY_STATE;
    scenarioNum = 0;
    changeState();
   
    
}

function clickLeftButton(event: createjs.MouseEvent): void {

    if (scenarioNum == 0) {
        scenarioNum = 1;
    } else if (scenarioNum == 1) {
        scenarioNum = 3;
    } else if (scenarioNum == 2) {
        scenarioNum = 5;
    } else if (scenarioNum == 3) {
        scenarioNum = 7;
    } else if (scenarioNum == 4) {
        scenarioNum = 9;
    } else if (scenarioNum == 5) {
        scenarioNum = 11;
    } else if (scenarioNum == 6) {
        scenarioNum = 13;
    }

    if (scenarioNum == 9) {//win the game
        state = config.OVER_STATE;
    }
    changeState();
}

function clickBackButton(event: createjs.MouseEvent): void {
    if (scenarioNum == 1 || scenarioNum == 2) {
        scenarioNum = 0;
    } else if (scenarioNum == 3 || scenarioNum == 4) {
        scenarioNum = 1;
    } else if (scenarioNum == 5 || scenarioNum == 6) {
        scenarioNum = 2;
    } else if (scenarioNum == 7 || scenarioNum == 8) {
        scenarioNum = 3;
    } else if (scenarioNum == 9 || scenarioNum == 10) {
        scenarioNum = 4;
    } else if (scenarioNum == 11 || scenarioNum == 12) {
        scenarioNum = 5;
    } else if (scenarioNum == 13 || scenarioNum == 14) {
        scenarioNum = 6;
    }
    changeState();
}


function clickRightButton(event: createjs.MouseEvent): void {
    if (scenarioNum == 0) {
        scenarioNum = 2;
    } else if (scenarioNum == 1) {
        scenarioNum = 4;
    } else if (scenarioNum == 2) {
        scenarioNum = 6;
    } else if (scenarioNum == 3) {
        scenarioNum = 8;
    } else if (scenarioNum == 4) {
        scenarioNum = 10;
    } else if (scenarioNum == 5) {
        scenarioNum = 12;
    } else if (scenarioNum == 6) {
        scenarioNum = 14;
    }

    if (scenarioNum == 14) {//lose the game
        state = config.OVER_STATE;
    }
    changeState();
}

function clickStartOverButton(event: createjs.MouseEvent): void { //start over the game

    stage.removeChild(bitmap);
    bitmap = new createjs.Bitmap("Assets/images/dragon-cover.jpg");
    bitmap.scaleX = 0.4;
    bitmap.scaleY = 0.35;
    stage.addChild(bitmap);
    stage.update();

    scene.removeChild(gameNameLabel);
    scene.removeChild(game_face);
    scene.removeChild(startoverButton);
    state = config.MENU_STATE;
    changeState();

    
}

// state machine prep
function changeState(): void {
    
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            console.log("Go to menu state...");
            stateFunction = states.menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            console.log("Go to play game scenario...");
            stateFunction = states.scenario;
            break;
        case config.OVER_STATE:
            // show the game over scene
            console.log("Game over state...");
            stateFunction = states.gameover;
            break;
    }
    stateFunction();
}
 