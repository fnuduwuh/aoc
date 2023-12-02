import { InputHelper } from '../../getInput.js';
import fs from 'fs';

const input = new InputHelper();
const data = input.createArraySeperateByLineBreak(input.getPuzzleInput(2023, 1));

data.pop(); // fix this you lazy bugger
console.log(data)
const numbers = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9]
]);

const regexDigit = /\d/;
const regexWordFw = /(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/;
const regexWordBw = /(eno)|(owt)|(eerht)|(ruof)|(evif)|(xis)|(neves)|(thgie)|(enin)/;

function partTwo() {
    let score = 0;
    data.forEach(element => {
        const firstdigit = getDigit(element, regexWordFw, false);
        const reverseString = element.split('').reverse().join('');
        const lastdigit = getDigit(reverseString, regexWordBw, true);
        score += parseInt(firstdigit + lastdigit);
    });
    return score;
}

function partOne() {
    let score = 0;
    data.forEach(element => {
        const firstdigit = getSingleDigit(element);
        const reverseString = element.split('').reverse().join('');
        const lastdigit = getSingleDigit(reverseString);
        score += parseInt(firstdigit + lastdigit);
    });
    return score;
}

function getDigit(element, regexWord, reverse) {
    const firstdigitIndex = element.search(regexDigit);
    const firstWordIndex = element.search(regexWord);
    let digit;
    if ((firstdigitIndex > -1) && firstdigitIndex < firstWordIndex || firstWordIndex < 0) {
        digit = getSingleDigit(element);
    } else if (firstWordIndex > -1 && !reverse) {
        digit = numbers.get(element.match(regexWord)[0]);
    } else {
        digit = numbers.get(element.match(regexWord)[0].split('').reverse().join(''));
    }
    return digit.toString();
}

function getSingleDigit(element) {
    return element[element.search(regexDigit)];
}

console.log('Part 1: ' + partOne());
console.log('Part 2: ' + partTwo());