/*Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character */
var nekibroj = 12;
var nekinaziv1 = 'tekst'
var brojeva12nesto = 23;
var nekaVarmozda = 2;
var JosJednaVar = 3;
/*2. Save a string (text) describing your current mood in a variable and print it out in console.*/
var tekst = 'Jos sam pospan i pijemi se kafa';
console.log (tekst);
/*3. Feel free to play around in the console and get familiar with it.*/
console.log(nekibroj);
console.log (JosJednaVar);
console.log (typeof nekibroj);
/*Arithmetic operators
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? */
var brojeva12nesto = 23;
var nekaVarmozda = 2;
var JosJednaVar = 3;
var x = brojeva12nesto - nekaVarmozda;
var q = nekaVarmozda * JosJednaVar + brojeva12nesto;
var w = brojeva12nesto/JosJednaVar + nekaVarmozda;
console.log (x);
console.log (q);
console.log (w);
/*5. How many grams weight 1.2kg of bananas? */
var weightInKg = 1.2;
var weightInG  = weightInKg * 1000;
console.log ('Bananas weight ' + weightInG + 'g');
/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…*/
var wait5min = 5;
var wait30min = 30;
var Annawait = wait5min * 60;
var Tomwait = wait30min * 60;
console.log ('We wait for Anna' + ' ' + Annawait  + ' ' + 'seconds');
console.log ('We wait for Tom' + ' ' + Tomwait + ' ' + 'seconds');
/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?*/
var usbGb = 4;
var usbMb = usbGb * 1000;
var usbKb = usbMb * 1000;
var news = usbKb / 98;
console.log (usbMb);
console.log (news);

// zavrsiti kasnije samo prebaciti u mb
//8. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
var a = 2;
var rezultat =  a*=2;
console.log (rezultat);
var b = 5;
var score = b+=3;
console.log (score);
var c = 15;
var score1 = c/=5;
console.log (score1);
var d = 21;
var score2 = d-=7;
console.log (score2);
/* 10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/
var Myname = 'Milos';
var Myage = 79;
var cat = false;
console.log (Myname +' ' + typeof Myname);
console.log (Myage +' ' + typeof Myage);
console.log (cat +' ' + typeof cat);
/*11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56
*/
var a = "number";
var b = true;
var c = null;
var d = "false";
var e = 56;
console.log (typeof a);
console.log (typeof b);
console.log (typeof c);
console.log (typeof d);
console.log (typeof e);
/*12. Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value?
*/
var a = "neki tekst";
var b = 43;
var c = "";

console.log(!!a);
console.log(!!b);
console.log(!!c);


/* Use the console to check the results you think should go in the following table:
p       q          p&&q         P||q 
true    true        true        true
true    false       false       true
false   true        false       true
false   false       false       false
*/
var p = false;
var q = false;
console.log(p || q);

/*14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
Is age negative value
Is age greater than 120 */

var age = 30;
negative = !age;
console.log (age > 120);
console.log (negative);
/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not)   */
var speed = 80;
//var check = speed >= 60 && speed <= 120;
console.log (speed >= 60 && speed <= 120);
