function capitalize(string) {
    return string.charAt(0).toUpperCase()
            .concat(string.slice(1, string.length));
}

function reverseString(string) {
    let reversedString = "";

    for(let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString.concat(string.charAt(i));
    }
    
    return reversedString;
}

const Calculator = (a, b, operator) => {
    switch(operator) {
        case "+":
            return a + b;
            break;

        case "-":
            return a - b;
            break;

        case "*":
            return a * b;
            break;


        case "/":
            return a / b;
            break;
        
        default:
            return "INVALID OPERATOR";
    }
}

function encryptCeasarCipher(message, shift) {

    const UPPER_CASE_BASE = 65;
    const LOWER_CASE_BASE = 97;
    const ALPHABET_LENGTH = 26;
    let base = 0;
    let newLetter = '';
    let newSting = '';
    for(let i = 0; i < message.length; i++) {  
        
        newLetter = message[i];

        if((/[a-zA-Z]/).test(message.charAt(i))) {
            base = message[i] === message[i].toUpperCase() ? base = UPPER_CASE_BASE : base = LOWER_CASE_BASE;
            newLetter = String.fromCharCode(base + (((message[i].charCodeAt(0) - base) + shift) % ALPHABET_LENGTH));
            
        } 

        newSting += newLetter;
    }
    
    return newSting;
}

function findAverage(array) {
    let avg = 0;

    avg = array.reduce((total, current) => total + current, 0);
    avg /= array.length;

    return avg;
}

function findMin(array) {

    if(array.length == 0) {
        return 0;
    }

    let min = array[0];

    for(let i = 0; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }

    return min;
}

function findMax(array) {

    if(array.length == 0) {
        return 0;
    }

    let max = array[0];

    for(let i = 0; i < array.length; i++) {
        if(max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

function analyzeArray(array) {

    obj = {
        average: findAverage(array),
        min: findMin(array),
        max: findMax(array),
        length: array.length
    };

    return obj;
}

module.exports = {
    capitalize,
    reverseString,
    Calculator,
    encryptCeasarCipher,
    analyzeArray
};