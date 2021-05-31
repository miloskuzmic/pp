/*
1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

	12345 -> 54321
*/
function reverseNumber(number) {
  var numTostr = parseInt(
    number
      .toString()
      .split("")
      .sort(function (a, b) {
        return parseInt(b) - parseInt(a);
      })
      .join("")
      .toString()
  );
  return numTostr;
}
var output = reverseNumber(12345);
console.log(output);
console.log(typeof output);

/*
2. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”
*/
function alphabeticOrder(string) {
  var newString = string.toLowerCase().split('').sort().join('');
  return newString
}
var input = 'Webmaster';
var output = alphabeticOrder(input);
console.log(output);
/*
3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/
function alphabetize(string) {
    var newString = string.split(' ');
    
    for (var i = 0; i < newString.length; i++){
        newString[i] = newString[i].split('').sort().join('');
    }
    var newString1 = newString.join(' ');
    
    return newString1;
  }
  var input = 'Republic Of Serbia';
  var output = alphabetize(input);
  console.log(output);
/*
4.Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/
function strToArray(string) {
    var array = string.split(' ')
    return array;
}
var input = 'John Snow';
var output = strToArray(input);
console.log(output);
/*
Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."
*/
function abbrev(string) {
    var newString = string.split(' ');
    return newString[0] + ' ' + newString[1].charAt(0) + '.'
}
console.log(abbrev('John Snow'))
/*    
Write a function that adds string to the left or right of string, by replacing it’s characters.

	'0000', ‘123’, 'l' -> 0123 
'00000000', ‘123’, 'r' -> 12300000

Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"

Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"

Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"




*/
