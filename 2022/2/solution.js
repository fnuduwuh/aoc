import {InputHelper} from '../../getInput.js';

const input = new InputHelper();
var data = input.createArraySeperateByLineBreak(input.getPuzzleInput());



const ddata = [];
data.forEach(element => {
    if (element != '') ddata.push(element.split(' '));
});
const elfVals = ['A', 'B', 'C'];
const playerVals = ['X', 'Y', 'Z'];

const calculateWinLose = (arr) => { 
    const elfChoice = arr[0];
    const playerChoice = arr[1];
    if (elfVals.indexOf(elfChoice) === playerVals.indexOf(playerChoice)) {
        // console.log('gelijk met ' + playerChoice + ' vs ' + elfChoice)
        return 3 + (playerVals.indexOf(playerChoice) + 1);
    } else if ((elfChoice === 'C' && playerChoice === 'X')) {
        // console.log('winst speler met ' + playerChoice + ' vs ' + elfChoice)
        return 6 + (playerVals.indexOf(playerChoice) + 1);
    } else if ((elfChoice === 'A' && playerChoice === 'Z')) {
        return 0 + (playerVals.indexOf(playerChoice) + 1);
    } else if (elfVals.indexOf(elfChoice) < playerVals.indexOf(playerChoice)) {
        // console.log('winst speler met ' + playerChoice + ' vs ' + elfChoice)
        return 6 + (playerVals.indexOf(playerChoice) + 1);
    } else if (elfVals.indexOf(elfChoice) > playerVals.indexOf(playerChoice)) {
        return 0 + (playerVals.indexOf(playerChoice) + 1);
    } else {
        return 3 + (playerVals.indexOf(playerChoice) + 1);
    }
 }

 const calcPartTwo = (arr) => {
    const elfChoice = arr[0];
    const result = arr[1];
    let returnVal = 0;

    if (result === 'Y') {
        returnVal += (3 + elfVals.indexOf(elfChoice) +1);
    } else if (result === 'Z') {
        if (elfChoice === 'C') {
            console.log('check')
            returnVal += 1;
        } else {
            returnVal += elfVals.indexOf(elfChoice) +2;
        }
        returnVal += 6;
    } else {
        if (elfChoice === 'A') {
            returnVal += 3;
        } else {
            returnVal += elfVals.indexOf(elfChoice)
        }
    }
return returnVal;

 }

 let sum = 0;
 let sum2 = 0;
 ddata.forEach((arr) => sum+= calculateWinLose(arr)); 
 ddata.forEach((arr) => sum2+= calcPartTwo(arr));
// console.log(calculateWinLose(['A', 'Z']))
console.log(sum)
console.log(sum2)

console.log(calcPartTwo(['A', 'X']))