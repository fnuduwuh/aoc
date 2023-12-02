import fs from 'fs';

export class InputHelper {

    getPuzzleInput() {
        try {
            var data = fs.readFileSync(`input.txt`, 'utf8');
            return data;
        } catch (e) {
            console.log('Error:', e.stack);
        }
    }

    createArraySeperateByLineBreak(dataAsString) {
        return dataAsString.split('\n');
    }

    create2DArraySeperateByDoubleLineBreak(dataAsString) {
        const twodArr = [];
        dataAsString.split('\n\n').forEach(element => {
           twodArr.push(this.createArraySeperateByLineBreak(element));
        });
        return twodArr;
    }
}