/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output The sign is -
*/
var number1 = 3;
var number2 = -7;
var number3 = 2;
if ((number1 * number2 * number3) < 0) {
    console.log('The sign is -');
}
/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
*/
var number1 = -5;
var number2 = -2;
var number3 = -6;
var number4 = 0;
var number5 = -1;
if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5){
    console.log (number1);
}else if (number2 > number3 && number2 > number4 && number2 > number5){
        console.log (number2);
    }
else if (number3 > number4 && number3 > number5){
        console.log (number3);
    }
else if (number4 > number5){
        console.log (number4);
    }
else {
        console.log (number5);
    }
/*

Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
*/
var number1 = 0;
var number2 = -1;
var number3 = 4;

if (number1 > number2 && number1 > number3) {
  if (number2 >number3){
      console.log (number1,number2,number3);
  } 
  else {
      console.log (number1,number3, number2);
  }
}
 else if (number2 > number1 && number2 > nuumber3){
      if (number1 > number3){
          console.log (number2,number1,number3);
      }
      else {
        console.log (number2, number3 ,number1);
      }
}
  
else if (number3 >number1 && number3 > number2){
  if (number1 > number2) {
      console.log (number3, number1,  number2);
  }
  else{
      console.log (number3, number2,number1);
  }
}
/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
*/
var number = 7;
if (typeof number === 'number'){
    if (number%2 === 0){
        console.log (number + ' ' +'/' + '2' + '='+number/2)
    }
else {
    console.log ('X');
}
}
/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.*/
var number1 = 10;
var number2 = 15;
if (number1 > number2){
    console.log (number1);

}
else {
    console.log (number2);
}
/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F
*/
var c = 'sdsad';
var stepeni = 'C';
var F = 140;
var stepeni2= 'F'
if (typeof c === 'number' && stepeni === "C") {
    var f = (9*c/5) + 32;
    console.log(c+'C' + 'is' + f+'F');
}
else if (typeof F === 'number' && stepeni2 === 'F'){
    var c = (F-32) * (5/9);
    console.log(F+'F' + ' '+ 'is ' +' '+c+'C')
}
/*Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
*/
var input = 32;

if (input < 13){
    var rez = 13 - input;
    console.log (rez);
}
else {
    var rez = (input - 13)*2;
    console.log (rez);
}
/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
*/
var input1 = 12;
var input2 = 5;
if (input1 === input2){
    var rez = (input1 + input2) * 3;
    console.log (rez);
}
else {
    console.log (input1 + input2);
}
/* 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true
*/
var input1 = 5;
var input2 = 54;
if (input1 === 50 || input2 === 50 || input1 + input2 === 50){
    console.log (true);
}
else {
    console.log ('-');
}
/* 10.
Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/
var input = 34;
if (20 < input && input < 100){
    console.log ('20 <=> 100');
}
else if (100 < input && input < 400){
    console.log ('100 <=> 400');
}
else {
    console.log ('-');
}