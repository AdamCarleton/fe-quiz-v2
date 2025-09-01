import FE1Units from './characters/fe1Units.js';
import FE2Units from './characters/fe2Units.js';

const unitList = document.querySelectorAll(".unit");
const units = [...unitList];

const nameList = document.querySelectorAll(".name");
const names = [...nameList];

let gameElements;
let gameBorder;

const games = [
    "Shadow Dragon",
    "Echoes: Shadows of Valentia",
    "New Mystery of the Emblem",
    "Genealogy of the Holy War",
    "Thracia 776",
    "Binding Blade",
    "Blazing Blade",
    "Sacred Stones",
    "Path of Radiance",
    "Radiant Dawn",
    "Awakening",
    "Fates",
    "Three Houses"
];

// variables to check number of units in a game
let shadowDragonTotal;
let shadowDragonScore = 0;
let echoesTotal;
let echoesScore = 0;
let newMysteryTotal;
let newMysteryScore = 0;
let genealogyTotal;
let genealogyScore = 0;
let thraciaTotal;
let thraciaScore = 0;
let bindingBladeTotal;
let bindingBladeScore = 0;
let blazingBladeTotal;
let blazingBladeScore = 0;
let sacredStonesTotal;
let sacredStonesScore = 0;
let pathOfRadianceTotal;
let pathOfRadianceScore = 0;
let radiantDawnTotal;
let radiantDawnScore = 0;
let awakeningTotal;
let awakeningScore = 0;
let fatesTotal;
let fatesScore = 0;
let threeHousesTotal;
let threeHousesScore = 0;

const timeInterval = 2000; // used for swapping portraits
let playerScore = 0;

const characters = [
    ...FE1Units,
    ...FE2Units
];

const totalCount = characters.length;
const score = document.querySelector(".score");

const gameWin = document.querySelector(".win-container");
let gaveUp = false;

function checkGuess(guess) {

}

function changeImg() {
    console.log("changeImg loaded");
}

// window.changeImg = changeImg;
window.addEventListener("DOMContentLoaded", changeImg);

// INITIALIZE GAME

let contentGenerated = false;
const startButton = document.getElementById("start-game");
const startContainer = document.getElementById("start-container");
const gameBoard = document.getElementById("game-board");

function createGame() {
    if (contentGenerated) return;
    // Removes button from game-board
    startButton.remove();
    startContainer.remove();
    
    // loops through games array and creates a container div for each game
    for(var i = 0; i < games.length; i++) {
        const gameDiv = document.createElement("div");
        gameDiv.classList.add("game");
        const gameTitle = document.createElement("p");
        gameTitle.classList.add("game-title");
        gameTitle.innerHTML = games[i];
        gameDiv.appendChild(gameTitle);
        gameBoard.appendChild(gameDiv);
    }

    // get newly create game boxes and titles
    const gameList = document.querySelectorAll(".game");
    const gameArray = [...gameList];
    const titleList = document.querySelectorAll(".game-title");
    const titleArray = [...titleList];

    // Loop through each game, adding characters with matching game key/value
    gameArray.map((game, i) => {
        // console.log(`${titleArray[i].textContent} ${i}`);
        characters.map((unit, index) => {
            // console.log(unit.game);
            // console.log(titleArray[i].textContent);

            if (unit.game === titleArray[i].textContent) {
                const newUnit = document.createElement("div");
                newUnit.classList.add("character");
                const unitName = document.createElement("p");
                unitName.classList.add("name");
                const unitImg = document.createElement("img");
                unitImg.classList.add("portrait");
                unitImg.src = "./images/FE_Logo.png";
                unitImg.id = unit.name.toLowerCase();

                if (unit.hasOwnProperty("isDLC")) {
                    unitImg.classList.add("dlc");
                    unitImg.src = "./images/FE_Logo_orange.png";
                    unitName.classList.add("dlc-name");
                }

                if (unit.hasOwnProperty("isPostGame")) {
                    unit.classList.add("post-game");
                    unitImg.src = "./images/FE_Logo_red.png";
                    unitName.classList.add("post-game-name");
                }
                // console.log(titleList);

                unitImg.classList.add(`fe${i+1}`);
                unitImg.id = unit.name.toLowerCase();
                newUnit.appendChild(unitName);
                newUnit.appendChild(unitImg);
                gameList[i].appendChild(newUnit);
                units.push(unitImg);
                names.push(unitName);
            }
        });
    });

    gameElements = document.querySelectorAll(".game");
    gameBorder = [...gameElements];
    contentGenerated = true;
}

// window.createGame = createGame;
startButton.addEventListener("click", createGame);

function checkWin() {
   
}

function playAgain() {

}

