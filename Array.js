// Function that accepts two numbers to generate an array between them.
const readline = require('readline');

// Create interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function generateRange() {
    rl.question('Enter the start value: ', startInput => {
        const start = parseInt(startInput);

        rl.question('Enter the end value: ', endInput => {
            const end = parseInt(endInput);
            const result = range(start, end);
            console.log('Generated range:', result);
            rl.close(); // prompt to enter start and end value and find the range 
        });
    });
}

function range(start, end) {
    let array = [];
    let increment;// this actually finds the range 


    if (end >= start) {
        increment = 1;
    } else {
        increment = -1;
    } // Re-check this 

    
    for (let i = start; end >= start ? i <= end : i >= end; i += increment) {
        array.push(i);
    }// Use for loop to generate array

    return array;
}


generateRange();