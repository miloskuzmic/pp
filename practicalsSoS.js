/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true


Input: “1bser9re”
Output: false
*/
function checkIsInString(string){
    var isValid = false;
    for (var i = 0; i < string.length; i++){
        if (string[i] === '5'){
            return isValid = true;
        }
    }
    return isValid;
}
var input = '1bser9re';
console.log(checkIsInString(input));
/*
2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/
function replaceLetters(string){
    newString = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] === 'J' && string[i + 1] === 'S'){
            newString += '**';
            i++;
        }else {
            newString += string[i];
        }
    }
    return newString;
}
var input = 'Programming in JS is super interesting!';
console.log(replaceLetters(input));
/*
Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
*/
function insertElement(string, position,insElement){
    var newString = '';
    for (var i = 0; i < string.length; i++){
        if (i === position - 1){
            newString += insElement;
            newString += string[i];
        }else{
            newString += string[i];
        };
    };
    return newString;
}
var input = 'Goo morning';
var position = 4;
var insElement = 'd';
var output = insertElement(input, position, insElement);
console.log(output);
/*
Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” 
*/
function deleteChar(string, position){
    newString = '';
    for (var i = 0; i < string.length; i++){
        if (i !== position ){
            newString += string[i]
            
        }else{
            continue;  ;
        }
    }
    return newString;
}
var input = 'Goodd morning!';
console.log(deleteChar(input,3));
/*
Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/
function filtered (array){
    var newArray = array.filter(function(number,index,array){
        return (index % 2 === 0);
    })
    return newArray;
}
var input = filtered([3, 5, 1, 8, 90, -4, 23, 1, 67]);
console.log(input);

/*
Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/
function replaceAndDoubled(array,position1, position2){
    newArray = [];
    for (var i= 0; i < array.length; i++){
        if(i >= position1 && i<= position2){
            newArray[i] = array[i] *2;
        }else{
            newArray[i] = array[i];
        };
    };
    return newArray;
}
var input = [3, 5, 1, 8, 90, -4, 23, 1, 67];
var startPosition = 2;
var endPosition = 6;
var output = replaceAndDoubled(input, startPosition, endPosition);
console.log(output);
/*
Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true


Input: {x: 20, y: 30}, “z”, 20 
Output: false 

Input: {x: 20, y: 30}, “x”, 10 
Output: false
*/
function checkProperty (object, property, value) {
    if (object[property] === value) {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(checkProperty({x: 20, y: 30}, 'z', 20))
/*
Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
var checkIfContain = (function check(firstArray, secondArray){
    var foundChar = 0;
    for (var i = 0; i < firstArray.length; i++){
        for (var j = 0; j < secondArray.length; j++){
            if (firstArray[i] === secondArray[j]){
                foundChar++;
                break;
            }
        }
    }
    return (foundChar === firstArray.length) ? console.log('true') : console.log('false');
})([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);
/*
Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/
function howManyA(string){
    var counterOfA = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] === 'a' || string[i] === 'A' ){
            counterOfA++;
        }
    }
    return counterOfA;
};
function sortArray(array){
    var tempString;
    for (var i = 0; i < array.length-1; i++) {
      for (var j = 1; j < array - i; j++) {
        if (howManyA(array[i]) > howManyA(array[j])) {
         
          tempString = array[i];
          array[i] = array[j];
          array[j] = tempString;
        }
      }
    }
    return array;
  };                         
console.log(sortArray(['apple', 'tea', 'amazing', 'morning', 'JavaScript']))
/*
Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. 
*/
function nextDay(string){
    var day = parseInt(string[0] + string[1]);
    var month = parseInt(string[4] + string[5]);
    var year = parseInt(string[8] + string[9] + string[10] + string[11]);
    var monthLength = 31;
    var  leapYearDay = 0;
    if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 100)){
        leapYearDay = 1;
    }
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        monthLength = 31;      
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        monthLength = 30;
        break;
        case 2:
        monthLength = 28 + leapYearDay;
        break;
    }
    if ((day + 1) > monthLength) {
        day = '01';
        month++;
      }
      else {
        day++;
      };
      if (month > 12) {
        month = '01';
        year++;
      }
      var nextday = '' + day + '. ' + month + '. ' + year + '.';
      return nextday;
}
console.log(nextDay('26. 02. 2020.'));


/*
Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. 


Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 	 111  
    	    4
                      4321
*/