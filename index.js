import FE1Units from './characters/fe1Units.js';
import FE2Units from './characters/fe2Units.js';
import FE3Units from './characters/fe3Units.js';

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
// used in highlight function
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
    ...FE2Units,
    ...FE3Units
];

const totalCount = characters.length;
const score = document.querySelector(".score");

const gameWin = document.querySelector(".win-container");
let gaveUp = false;

// CHECK GUESS
function checkGuess(guess) {
    const inputElement = document.querySelector(".guess");
    const inputValue = inputElement.value;
    let storedString = inputValue.toLowerCase();

    const currentDate = new Date();
    const currentSeconds = currentDate.getSeconds();

    units.map((unit, index) => {
        if (storedString === units[index].id && !characters[index].isFound) {
            unit.setAttribute("src", characters[index].img1);

            // imcrement the count for game associated with characters
            if (characters[index].isFound === false) { // ensures you can't just enter the same character multiple times
                switch (characters[index].game) {
                    case "Shadow Dragon":
                        shadowDragonScore++;
                        break;
                    case "Echoes: Shadows of Valentia":
                        echoesScore++;
                        break;
                    case "New Mystery of the Emblem":
                        newMysteryScore++;
                        break;
                    case "Genealogy of the Holy War":
                        genealogyScore++;
                        break;
                    case "Thracia 776":
                        thraciaScore++;
                        break;
                    case "Binding Blade":
                        bindingBladeScore++;
                        break;
                    case "Blazing Blade":
                        blazingBladeScore++;
                        break;
                    case "Sacred Stones":
                        sacredStonesScore++;
                        break;
                    case "Path of Radiance":
                        pathOfRadianceScore++;
                        break;
                    case "Radiant Dawn":
                        radiantDawnScore++;
                        break;
                    case "Awakening":
                        awakeningScore++;
                        break;
                    case "Fates":
                        fatesScore++
                        break;
                    case "Three Houses":
                        threeHousesScore++;
                        break;
                }
            }

            characters[index].isFound = true;
            unit.classList.add("found"); // to count score easier
            playerScore = document.querySelectorAll(".found").length;
            names[index].innerHTML = characters[index].name;
        }
    });
    inputElement.value = "";
    highlightGame();

    score.innerHTML = `${playerScore} / ${characters.length}`;

    checkWin();
}

window.checkGuess = checkGuess;

function changeImg() {

    setInterval(() => {
        units.map((unit, index) => {
            if (unit.getAttribute("src") === characters[index].img1
                && characters[index].isFound
                && characters[index].hasOwnProperty("img2")) {
                    unit.setAttribute("src", characters[index].img2);
            } else if (unit.getAttribute("src") === characters[index].img2 
                && characters[index].isFound
                && characters[index].hasOwnProperty("img3")) {
                    unit.setAttribute("src", characters[index].img3);
            }  else if (unit.getAttribute("src") === characters[index].img3
                && characters[index].isFound
                && characters[index].hasOwnProperty("img4")) {
                    unit.setAttribute("src", characters[index].img4);
            }  else if (unit.getAttribute("src") !== characters[index].img1
                && characters[index].isFound) {
                unit.setAttribute("src", characters[index].img1);
            }
        })
    }, timeInterval);
}

window.changeImg = changeImg;

function highlightGame() {
    characters.map((unit) => {

        if (unit.isFound && unit.game === "Shadow Dragon" && shadowDragonScore === shadowDragonTotal) {
            gameElements[0].classList.add("complete");
        } else if (unit.isFound && unit.game === "Echoes: Shadows of Valentia" && echoesScore === echoesTotal) {
            gameElements[1].classList.add("complete");
        } else if (unit.isFound && unit.game === "New Mystery of the Emblem" && newMysteryScore === newMysteryTotal) {
            gameElements[2].classList.add("complete");
        } else if (unit.isFound && unit.game === "Genealogy of the Holy War" && genealogyScore === genealogyTotal) {
            gameElements[3].classList.add("complete");
        } else if (unit.isFound && unit.game === "Thracia 776" && thraciaScore === thraciaTotal) {
            gameElements[4].classList.add("complete");
        } else if (unit.isFound && unit.game === "Binding Blade" && bindingBladeScore === bindingBladeTotal) {
            gameElements[5].classList.add("complete");
        } else if (unit.isFound && unit.game === "Blazing Blade" && blazingBladeScore === blazingBladeTotal) {
            gameElements[6].classList.add("complete");
        } else if (unit.isFound && unit.game === "Sacred Stones" && sacredStonesScore === sacredStonesTotal) {
            gameElements[7].classList.add("complete");
        } else if (unit.isFound && unit.game === "Path of Radiance" && pathOfRadianceScore === pathOfRadianceTotal) {
            gameElements[8].classList.add("complete");
        } else if (unit.isFound && unit.game === "Radiant Dawn" && radiantDawnScore === radiantDawnTotal) {
            gameElements[9].classList.add("complete");
        } else if (unit.isFound && unit.game === "Awakening" && awakeningScore === awakeningTotal) {
            gameElements[10].classList.add("complete");
        } else if (unit.isFound && unit.game === "Fates" && fatesScore === fatesTotal) {
            gameElements[11].classList.add("complete");
        } else if (unit.isFound && unit.game === "Three Houses" && threeHousesScore === threeHousesTotal) {
            gameElements[12].classList.add("complete");
        }
    });
}

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

    // Get total number of character per game
    shadowDragonTotal = document.querySelectorAll(".fe1").length;
    echoesTotal = document.querySelectorAll(".fe2").length;
    newMysteryTotal = document.querySelectorAll(".fe3").length;
    genealogyTotal = document.querySelectorAll(".fe4").length;
    thraciaTotal = document.querySelectorAll(".fe5").length;
    bindingBladeTotal = document.querySelectorAll(".fe6").length;
    blazingBladeTotal = document.querySelectorAll(".fe7").length;
    sacredStonesTotal = document.querySelectorAll(".fe8").length;
    pathOfRadianceTotal = document.querySelectorAll(".fe9").length;
    radiantDawnTotal = document.querySelectorAll(".fe10").length;
    awakeningTotal = document.querySelectorAll(".fe11").length;
    fatesTotal = document.querySelectorAll(".fe12").length;
    threeHousesTotal = document.querySelectorAll(".fe13").length;

    gameElements = document.querySelectorAll(".game");
    gameBorder = [...gameElements];
    contentGenerated = true;
}

// window.createGame = createGame;
startButton.addEventListener("click", createGame);

function checkWin() {
   if (playerScore === totalCount && gaveUp === false) {
    gameWin.classList.remove("hide");
   }
   // return true
}

function quit() {
    characters.map((unit, index) => {
        if (unit.isFound === false) {
            units[index].classList.add("missed-border");
            names[index].classList.add("missed-name");
        }
        units[index].setAttribute("src", unit.img1);
        names[index].innerHTML = unit.name;
    });
}

function playAgain() {
    gameWin.classList.add("hide");

    // set each game score back to 0
    shadowDragonScore = 0;
    echoesScore = 0;
    newMysteryScore = 0;
    genealogyScore = 0;
    thraciaScore = 0;
    bindingBladeScore = 0;
    blazingBladeScore = 0;
    sacredStonesScore = 0;
    pathOfRadianceScore = 0;
    radiantDawnScore = 0;
    awakeningScore = 0;
    fatesScore = 0;
    threeHousesScore = 0;

    // remove highlighted border
    gameBorder.map((element) => {
        element.classList.remove("complete");
    })

    // set player score to = and display 0 score
    playerScore = 0;

    score.innerHTML = `${playerScore} / ${characters.length}`;

    // loop through units replacing picture and setting not found
    units.map((unit, index) => {
        unit.classList.remove("found");
        characters[index].isFound = false;
        unit.setAttribute("src", "./images/FE_Logo.png");
    });

    // remove names
    names.map((name) => {
        name.innerHTML = "";
    })
}

window.playAgain = playAgain

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("give-up");
    if (button) {
        button.addEventListener("click", quit);
    }
    const button2 = document.getElementById("reset");
    if (button2) {
        button2.addEventListener("click", reset);
    } 
});


document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
})
