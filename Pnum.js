//A function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array.
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // Collect input 


function filterPrimes() {
    rl.question('Enter numbers separated by spaces: ', function (input) {
        const numbers = input.split(' ').map(num => parseInt(num));
        const primeNumbers = filterPrimeNumbers(numbers);
        console.log('Prime numbers:', primeNumbers);
        rl.close(); // identifies the prime numbers 
    });
}


function checkPrime(number) {
    if (number <= 1) {
        return false; 
    }

    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

function filterPrimeNumbers(numbers) {
    return numbers.filter(number => checkPrime(number));// checks only prime numbers 
}

filterPrimes();