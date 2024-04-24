// Function that accepts a string as input and swaps the case of each character.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function swapCaseForString() {
    rl.question('Enter a string: ', function (input) {
        const swappedString = swapCase(input);
        console.log('Swapped case:', swappedString);// swaps case on user input
        rl.close();
    });
}


function swapCase(string) {
    let swappedString = ''; // swap has to be in the characters in the string

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

       
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();// changes the case
        }
    }

    return swappedString;
}

swapCaseForString();