/*IIFE = Immediately Invoked Function Expressions

1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
    Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]
*/
var replace = (function (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            newArray[i] = array[array.length - 1];
        } else if (i === array.length - 1) {
            newArray[i] = array[0];
        } else {
            newArray[i] = array[i];
        }

    }
    return newArray;
})([4, 5, 11, 9]);
console.log(replace);

/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/
(function (a, b) {
    var rez = a * b;
    return console.log(rez);;
})(4, 5);

/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
   Input: prograMming
   Output: progra**ing, 2
*/
(function (string) {
    var newString = '';
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'm' || string[i] === 'M') {
            newString += '*';
            count++;
        } else {
            newString += string[i];
        }
    }
    return console.log(newString + ',', count);
})('prograMming');
/*
4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
    Output: pera.peric@gmail.com
*/
function suggestsEmail(name, surname) {
    var email = function(){ return name + '.' + surname + '@gmail.com';}
    return email (name, surname);
}
var a = suggestsEmail('pera', 'peric');
console.log(a);
/*
5. Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/
function octalToDecimal(number) {
    var numberToString = number + '';
    return parseInt(numberToString);   
}
var input = octalToDecimal(034);
console.log(input);
/*
6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

    Input: JSGuru123
    Output: Your password is cool! 
*/
function successCallback() {
    return 'Your password is cool! ';
}
function errorCallback() {
    return 'Your password is invalid! ';
}
function isValid(password) {
    var lengthValidation = password.length > 6;
    var numberValidation = false;
    for (var i = 0; i < password.length; i++) {
        var converter = parseInt(password[i]);
        if (typeof converter === 'number') {
            numberValidation = true;
            break;
        }
    }
    var isValide = numberValidation && lengthValidation;
    if (isValide) {
        return successCallback();
    } else {
        return errorCallback();
    }
}
var input = isValid('JSGuru1234');
console.log(input);
/*
 7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 

*/
function checkIsOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
}
function filter(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (checkIsOdd(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray;
}
var input = filter([2, 8, 11, 4, 9, 3]);
console.log(input);

