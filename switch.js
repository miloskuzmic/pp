/*
Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.
*/
var numberInweek = 3;
switch (numberInweek) {
    case 1:
        console.log ('Ponedeljak')
        break;
     case 2:
        console.log ('Utorak')
        break;
    case 3:
        console.log ('Sreda')
         break;
    case 4:
        console.log ('Cetvrtak')
         break;
     case 5:
        console.log ('Petak')
        break;
    case 6:
        console.log ('Subota')
         break;
    case 7:
        console.log ('Subota')
        break;
    
}

/*
Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/
var numberInweek = 3;
switch (numberInweek) {
    case 1:
        console.log ('Ponedeljak')
        break;
     case 2:
        console.log ('Utorak')
        break;
    case 3:
        console.log ('Sreda')
         break;
    case 4:
        console.log ('Cetvrtak')
         break;
     case 5:
        console.log ('Petak')
        break;
    case 6:
        console.log ('Subota')
         break;
    case 7:
        console.log ('Subota')
        break;
    default:
        console.log ('Inout must be number between 1 and 7')
        break;
}
/*
Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/
var numberInweek = 3;
switch (numberInweek) {
    case 1: 
    case 2:
    case 3:
    case 4:  
    case 5:
        console.log ('It\'s weekday');
        break;
    case 6:
    case 7:
        console.log ('it\'s weekend') 
    default:
        console.log ('Inout must be number between 1 and 7')
        break;
}
/* 
Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/
var monthInyear = 5;
switch (monthInyear) {
    case 1:
        console.log ('January');
        break;
    case 2:
        console.log ('February');
        break;
    case 3:
        console.log ('March');
        break;
     case 4:
        console.log ('April');
        break;
    case 5:
        console.log ('May');
        break;
    case 6:
        console.log ('June');
        break;
    case 7:
        console.log ('July');
        break;
    case 8:
        console.log ('August');
        break;
    case 9:
        console.log ('September')
        break;
    case 10:
        console.log ('Octobar');
        break;
    case 11:
        console.log ('November');
        break;
    case 12:
        console.log ('December');
        break;        
    default:
        console.log ('Input must be a number between 1 and 12');
        break;
}
/*
Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
*/
var monthInyear = 5;
switch (monthInyear) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log ('Spring');
        break;
    case 7:
    case 8:
    case 9:
        console.log ('Summer');
    case 10:
    case 11:
        console.log ('Autunm');
    case 12:
    case 1:
    case 2:
        console.log ('winter');
    default:
        console.log ('Input must be a number between 1 and 12');
        break;
}
/*
Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.
*/
var grade = 'A';
switch (grade) {
    case 'A':
       console.log ('Good job');
        break;
    case 'B':
        console.log ('Pretty good');
        break;
    case 'C':
        console.log ('Passed');
        break;
    case 'D':
        console.log ('Not so good');
        break;
    case 'F':
        console.log ('Failed');
        break;
    default:
        console.log ('Unkown grade');
        break;
}
/*
Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.
*/
var cityName = 'New York';
switch (cityName) {
    case 'New York':
    case 'Los Angeles':
    case 'Chicago':
    case 'Houston':
    case 'San Diego':
        console.log ('USA');
        break;
    case 'Beograd':
    case 'Novi Sad':
    case 'Subotica':
    case 'Apatin':
        console.log ('Serbia');
        break;
    case 'London':
    case 'Cambridge':
    case 'Cardif':
        console.log ('UK');
        break;
    case 'Zagreb':
    case 'CSplit':
        console.log ('Croatia');
        break;
    case 'Dublin':
        console.log ('Ireland')
    default:
        console.log ('Please choose a different city');
        break;
}
/*
Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/
var number1 = 10;
var number2 = 6;
var operator = '/';
switch (operator) {
    case '+':
    console.log (number1 + number2);
        break;
    case '/':
      (number2 !== 0) ? console.log (number1 / number2) : console.log ('number2 can not be 0');
        break;
    case '-':
    console.log (number1 - number2);
        break;
    case '*':
        console.log (number1 * number2);
  
}
