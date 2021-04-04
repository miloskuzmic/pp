/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.
*/
function numberOfVowels(str) {
    var rez = 0;
    var str1 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'U'];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (str[i] === str1[j]) {
                rez++
            }
        }
    }
    return rez;
}
console.log(numberOfVowels('Ay random string'));
/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] ->; [‘a’,1,’b’,2,’c’,3]*/
function combineTwoArrays(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3[arr3.length] = arr1[i];
        arr3[arr3.length] = arr2[i]
    }
    return arr3;
}
var arr1 = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];
console.log(combineTwoArrays(arr1, arr2));
/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/
function rotatingElements(arr, k) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= k) {
            arr1[arr1.length] = arr[i];

        }

    }
    for (var j = 0; j < arr1.length; j++) {
        if (j < k) {
            arr1[arr1.length] = arr[j];
        }

    }
    return arr1;
}
var arr = [1, 2, 3, 4, 5, 6];
var k = 2;
console.log(rotatingElements(arr, k));
// 4. Write a function that takes a number and returns array of its digits.
function digitsToArray(numb1) {
    var str1 = '' + numb1;
    var arr = [];
    for (var i = 0; i < str1.length; i++) {
        arr[arr.length] = str1[i];
    }
    return arr;
}
var numb1 = 123;

console.log(digitsToArray(numb1))
//5. Write a program that prints a multiplication table for numbers up to 12.
function multiTable() {
    var rez = 1;
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 10; j++) {
            rez = i * j;
            console.log(i, 'x', j, '=', rez, '\n');
        }
    }
    
}
console.log(multiTable());
//6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
function cenTofah(cent) {
    var fah;
    fah = (cent * 1.8) + 32;
    return fah;
}
var c = 0;
console.log(cenTofah(c));
//7* Write a function to find the maximum element in array of numbers. Filter out all non-number
//elements.
function maxElement(arr) {
    var pom = 0;
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i])) {
            arr1[arr1.length] = arr[i]
        }
    }
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] > pom) {
            pom = arr[j];
        }
    }
    return pom;
}
console.log(maxElement([1, 2, 3, 4, 5, 'nesto']));
