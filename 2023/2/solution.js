import { InputHelper } from '../../getInput.js';

const input = new InputHelper();
const data = input.getPuzzleInput();

// var testdata = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

class Game {
    id;
    blue;
    red;
    green;

    constructor(id) {
        this.id = parseInt(id);
        this.blue = 0;
        this.red = 0;
        this.green = 0;
    }

    updateColorValue(color, value) {
        if (color === 'red') {
            if (value > this.red) {
                this.red = parseInt(value);
            }
        } else if (color === 'blue') {
            if (value > this.blue) {
                this.blue = parseInt(value);
            }
        } else {
            if (value > this.green) {
                this.green = parseInt(value);
            }
        }
    }
}

const colors = /(red)|(blue)|(green)/;

const dataBr = data.split('\n');
dataBr.pop();

function getGames() {
    const games = [];
    dataBr.forEach(line => games.push(getGameFromLine(line)));
    return games;
}

function getGameFromLine(line) {
    line = line.split(':');
    const game = line.shift();
    const gameId = game.match(/[0-9]+/)[0];
    const marbleGame = new Game(gameId);
    const marbles = line.join().split(';').forEach(set => {
        set.split(',').forEach(def => {
            const num = def.match(/[0-9]+/)[0];
            const color = def.match(colors)[0];
            marbleGame.updateColorValue(color, num);
        });
    });
    return marbleGame;
}

function checkPossible(game, maxVals) {
    if (game.blue <= maxVals.maxBlue && game.red <= maxVals.maxRed && game.green <= maxVals.maxGreen) {
        console.log(maxVals.maxRed, game.red)
        return true;
    }
return false;
}

let possible = 0;

const partOne = () => {
    const maxVals = {
        maxRed: 12,
        maxBlue: 14,
        maxGreen: 13
    }

    let sum = 0;

    const possibleGames = getGames().filter(game => checkPossible(game, maxVals));
possibleGames.forEach(game => {
    sum += game.id;
possible++});
return sum;
}

const partTwo = () => {
    let sum = 0;
    getGames().forEach(game => sum += (game.red*game.blue*game.green));
    return sum;
}

console.log(partOne() + ', possible games: ' + possible)
console.log(partTwo())

