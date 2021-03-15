/* 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
*/
for ( var i=0; i<16 ; i++){
    if (i % 2 ===0) {
        console.log (i, 'is even');
    }else {
        console.log (i, 'is odd');
    } 
}
/* 2. Write a program to sum the multiples of 3 and 5 under 1000.*/
var sum = 0;
for (var i=0; i<1000; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
         sum += i;
    }   
}
console.log (sum);
//3. Write a program to compute the sum and product of an array of integers. 
var sum = 0;
var prod = 1;
var array = [2,4,6,8,33,44,66];
for (var i = 0; i<array.length; i++){
    sum += array[i];
    prod *= array[i];
}
console.log ('Sum of array of integers is:', sum);
console.log ('Product of array of integers is:', prod);

/* 4. Write a program which prints the elements of the following array as a single string.
var x = ['1','A','B',"c", "r", true, NaN, undefined];*/
var x = ['1','A','B',"c", "r", true, NaN, undefined];
var y = '';
for (var i=0; i<x.length; i++){
    y+=x[i];    
    
}
console.log (y);
/*5. Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24], [8, 11, 9, 4],[7, 0, 7, 27]];*/
var a = [[1, 2, 1, 24], [8, 11, 9, 4],[7, 0, 7, 27]];
for (var i = 0; i<a.length; i++){
    for (j = 0; j < a[i].length; j++)
    console.log(a[i][j]);
    
}

//6. Write a program that outputs the sum of squares of the first 20 numbers.
sum=0;
for (var i = 0; i<=20; i++){
    var squ = i * i;
    sum+= squ;
}
console.log (sum);
/* 7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
*/
var averageGrade = 0;
var students = [['David', 80],['Marko',77],['Dany',88],['John', 95], ['Thomas', 68]];
for ( var i = 0; i < students.length; i++){
    averageGrade +=(students[i][1]);
    var rez = averageGrade / students.length;
   
}
console.log ('Avarage grade is:', rez);
if (rez < 100){
    console.log ('Grade is A');
}
else if (rez <90){
    console.log ('Grade is B');  
}
else if (ares <80){
    console.log ('Grade is C');  
}
else if (rez <70){
    console.log ('Grade is D');  
}
else if (rez <60){
    console.log ('Grade is F');  
}
/*
 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/
for (var i=1; i<100; i++ ){
    if ( i%3 === 0 && i % 5 !==0  ){
        console.log ('Fizz');
    }else if (i%5 ===0 && i%3 !==0 ){
        console.log ('Buzz');
    }
    if (i%3 === 0 && i%5 === 0){
        console.log ('FizzBuzz')
    }
    console.log (i);
}


