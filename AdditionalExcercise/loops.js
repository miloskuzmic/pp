//Get the sum of two arrays…actually the sum of all their elements.
//P.S. Each array includes only integer numbers. Output is a number too.
var arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
var arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
var sum1 = sum2 =  0;
for (var i = 0, j = 0; i < arr1.length && j < arr2.length; i++ , j++){
    sum1 += arr1[i];
    sum2 += arr2[j];
}
console.log('Summ of elements of arrays :', sum1 + sum2);
//Using a for loop print all even numbers up to and including n. Don’t include 0.
var n = 22;
for (var i = 1; i<= n; i++){
    if (i%2 === 0){
        console.log(i);
    }
}
//Using a for loop output the elements in reverse order
var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (var i = 0; i < arr.length; i++){
    console.log(arr[arr.length -1 - i]);
}
/*
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.
*/
var arr1 = [4, 6, 7];
var arr2 = [8, 1, 9];
var a = 0;
var arr3 = [];
while (a < arr1.length){
    arr3[a] = arr1[a] + arr2 [a];
    a++; 

}
console.log('New array is:', arr3);
//Given a string change the every second letter to an uppercase ‘Z’. Assume
//there are no space.
var str = 'javascript';
var str1 = '';
var change = 'Z';
for (var i = 0 ; i < str.length; i++){
 (i % 2 !== 0) ? str1 = str1 + change : str1 = str1 + str[i];
}
console.log(str1);

//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
var str = "don’t know why";
var b = true;
for (var i = 0; i< str.length; i++){
    (str[i] === 'y') ?  b = true : b = false;
}
(b === true) ? console.log('yes') : console.log('no');
//Given a number n Calculate the factorial of the number
var n = 4;
var fac = 1;
for (i = n; i> 0; i--){
    fac = i * fac;

}
console.log('Factorial of number n is:', fac);
/*Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.*/
var pin = 2345;
var quess = [4544, 4444, 2345, 5467, 4437];
for (i = 0; i< 4; i++){
    console.log('Please make your quess');
    console.log(quess[i]);
    if (quess[i] === pin){
        console.log('That was correct!');
        break;
    }else
    console.log('Sorry that was wrong.')
}
/*
Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.*/
var str = 'racecar';
var str1 = 'Java';
b = true;
c = true
for (i = 0 , j = 0; i < str.length && j < str1.length; i++ , j++){
    (str[i] === str[str.length - 1 - i]) ? b : b = false;
    (str1[j] === str1[str1.length - 1 - j]) ? c : c = false;
}
console.log('String1 polindrome');
b ? console.log('Yes') : console.log('No');
console.log('String2 polindrome');
c ? console.log('Yes') : console.log('No');
/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.*/
var num1 = 2;
var num2 = 8;
sum1 = sum2 = 0;
for (i = 1 ; i <= num1; i++){
    sum1+= i;
}
for (j = 1 ; j <= num2; j++){
    sum2+= j;
}
console.log('Summation is' ,sum1);
console.log('Summation is' ,sum2);

