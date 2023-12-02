import {InputHelper} from '../../getInput.js';

const input = new InputHelper();
var data = input.create2DArraySeperateByDoubleLineBreak(input.getPuzzleInput('1'));

const caloriesPerElf = [];

data.forEach(e => {
    caloriesPerElf.push(e.reduce(function(a,b) {return parseInt(a)+parseInt(b)}));
})

caloriesPerElf.sort(function(a,b) { return parseInt(b)-parseInt(a)});
console.log('part 1: ', caloriesPerElf[0]);
console.log('part 2: ', caloriesPerElf.splice(0,3).reduce(function(a,b) { return parseInt(a) + parseInt(b)}));