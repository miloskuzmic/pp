/*1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string
*/
function strInstr(originalString, insertString, pos) {
    var str = '';

    if (pos === undefined) {
        pos = 0;
    }
    for (var i = 0; i < originalString.length; i++) {
        if (i !== pos) {
            str += originalString[i];
        } else {
            str += insertString;
            str += ' ';
            str += originalString[pos];
        }
    }
    return str;
}
console.log(strInstr('My random string', 'JS',));
/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
 */
function skipingElements(inputArray) {
    newString = '';
    for (var i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i]) || inputArray[i] === undefined || inputArray[i] === null || inputArray[i] === Infinity) {
           
        } else {
            newString += inputArray[i];
        }
    }
    return newString;
}
console.log(skipingElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*3. Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/
function falsyValues(array) {
    newString = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newString[newString.length] = array[i];
        }
    }
    return (newString.length === 0) ? 'All falsy values is in array' : newString;
}
console.log(falsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 4. Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/
function reversNumber(number) {
    pomStr = '' + number;
    pomStr1 = '';
    for (var i = pomStr.length - 1; i >= 0; i--) {
        pomStr1 += pomStr[i];
    }
    return parseFloat(pomStr1);
}
console.log('Reverse number is: ', reversNumber(12345));
/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/
function lastElementOfArray(array, n) {
    var newArray = [];
    if (n === undefined) {
        newArray = array[array.length - 1];
    } else if (n > array.length) {
        return 'Number n is greater then length of string';
    }
    for (var i = array.length - n; i < array.length; i++) {
        newArray[newArray.length] = array[i];
    }
    return newArray;
}
console.log(lastElementOfArray([7, 9, 0, -2], 3));
/* 6. Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]
*/
function specificNumberOfItems(n, p) {
    var array = [];
    for (var i = 0; i < n; i++) {
        if (p === undefined) {
            array[i] = null;
        } else {
            array[i] = p;
        }
    }
    return array;
}
console.log(specificNumberOfItems(6));
/* 7. Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

*/
function isPerfect(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return (sum === num);
}
var num = 8128;
console.log('Number ' + num + ' a perfect number ' + isPerfect(num));
/* 8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/
function findWord(sentance, word) {
    var count = 0;
    sentance += ' ';
    var pom = '';
    for (var i = 0; i < sentance.length; i++) {
        if (sentance[i] !== ' ') {
            pom += sentance[i];
        } else {
            if (pom === word) {
                count++;
            } else {
                pom = '';
            }
        }
    }
    return count;
}
var string = 'aa bb cc dd aa';
var word = 'aa';
console.log(word, 'was found ', findWord(string, word), 'times');
/* 9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/
function hideEmail(email) {
    var str = '';
    var pom;
    for (i = 0; i < email.length; i++) {
        if (i < 3 || i > pom) {
            str += email[i];
        } else if (email[i] === '@') {
            str += '...' + email[i];
            pom = i;
        }
    }
    return str;
}
console.log(hideEmail('myemail@bgit.rs'));
/* 10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/
function mostFrequent(array) {
    var pom = [];
    var numberOfsame = 1;
    var counter = 0
    for (var i = 0; i < array.length; i++) {
       
        for (var j = 1; j < array.length; j++) {
           
            if (array[i] == array[j]) {
                counter++;
            }
            if (numberOfsame < counter) {
                pom = array[i];
                numberOfsame = counter;
            }
        }
        counter = 0;
    }
    
    return pom;
}
console.log(mostFrequent([3, 'a', 'a', 5, 6, 7]));



