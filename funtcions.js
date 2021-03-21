//1.Write a program that calculates the maximum of two given numbers.
function maxNumber(a, b){
    if (a > b){
        return a;
    }else if (a < b){
        return b;
    }else {
        return 'Numbers are even';
    } 
}
console.log(maxNumber(4, 112));
//2. Write a program that checks if a given number is odd.
function oddNumber(a){
    if (a % 2 !==0){
        return 'odd';
    }else {
        return 'even';
    }
}
console.log(oddNumber(2));
//3. Write a program that checks if a given number is a three digit long number.

function threeDigits(a){
    if (a >= 100 && a < 1000){
        return 'Number have three digit';
    }else {
        return 'Number dont have three digit';
    }
}
console.log(threeDigits(323));
//Write a program that calculates an arithmetic mean of four numbers.
function arith(a, b, c, d){
    var sum = (a + b + c + d) / 4;
    return sum;
}
console.log('Arithmetic mean of four numbers:', arith(1, 2, 3, 4));
/* 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****
*/
function hollowSquare(a){
    var rez = '';
for (var i = 0; i < a; i++){
    for (j = 0; j < a; j++){
     if (i === 0 || i === a - 1 ||j === 0 || j === a - 1){
         rez+='*';
     }else{
         rez+=' ';
     }
    }
rez += '\n';
}
return rez
}

console.log(hollowSquare(5));

/* 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
var rez = '';
for (var i =0; i === 0; i++){
    for (var j =0; j <= 5; j++){
        rez+='*';
    }
    rez+='\n';
    for (var k =0; k <= 3; k++){
        rez+='*';
    }
    rez+='\n';
    for (var s =0; s <= 7; s++){
        rez+='*';
    }
    rez+='\n';
}
console.log(rez);
// 7. Write a program that calculates a number of digits of a given number. 
function numbOfDigits (a){
    var str = '' + a;
    return str.length;
}
console.log(numbOfDigits(90));

/* 8.
Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/
function numbOfapp(arr, e){
    var s = 0;
    for (var i = 0; i < arr.length; i++){
     if (arr[i] === e){
         s++;
     }else{
         s = 'Given number is not in array';
     }
    }return s;
}
console.log(numbOfapp([2, 4, 7, 8, 7, 7, 1], 7));
//9. Write a program that calculates the sum of odd elements of a given array. 
function sumOfOdd(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            sum += arr[i];
        }
    }return sum
}
console.log(sumOfOdd([1,2,3,4,5,6,7]));
/* 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.*/
function appOfLetter(str){
    var sumOfa = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            sumOfa++;
        }
    }return sumOfa;   
}
function appOfBothLetter(str){
    var sumOfBoth = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'A'){
            sumOfBoth++;
        }
    }return sumOfBoth;   
}
console.log(appOfLetter('Valda ce ovo raditi'));
console.log(appOfBothLetter('VAlda ce ovo Raditi'));
/* 11.
 Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
 */
function concaString(str, a){
    var str1 = '';
    for (var i = 0; i < a; i++){
        str1 = str1 + str
    }   
return str1;
}

console.log(concaString('abc', 4));



