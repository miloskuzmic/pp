/*
1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/
var input = [2, 4, 7, 11, -2, 1];
var output = input.map(function(elem){
	return [elem, elem];
	}).flat();
console.log(output);
//second method
var input = [2, 4, 7, 11, -2, 1];
var output = input.flatMap(function (elem){
	return [elem, elem];
});
console.log(output);

/*
2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/
var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var output = input.sort(function compareNumbers(a, b) {
	return a - b;
  })
  .filter(function(element,index){
	return input.indexOf(element) === index;
});
console.log(output);


/*
3. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 */
var input = [1, 2, 9, 2, 1];
var output = input.push(1);
console.log(!!(output % 2 === 0));

/*
4. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/
function countElements(array){
	var count = 0;
	if (array.length % 2 === 0){
		return 'Error message';
	};
	for (var i = 0; i < array.length; i++){
		if (array[i] < array[Math.floor(array.length / 2)] ){
			count++;
		};
		
	};
	return count;
};
var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var output = countElements(input);
console.log(output);

/*
5. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/
function smallestElement(array){
	var output = new Object();
	
	var minElement = array
	.slice()
	.sort(function(a,b)
	{return a - b})
	.shift();
	var lastPosition = array.lastIndexOf(minElement);
	output.minValue = minElement;
	output.minLastIndex = lastPosition;
	return output; 
};
var input = [1, 4, -2, 11, 8, 1, -2, 3];
var output = smallestElement(input);
console.log(output);
/*
 6. Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]
*/
function lessThenGivenElement(array,element){
	var newArray = array.filter(function (elem){
		return elem < element;
	});
	return newArray;
};
var input = [2, 3, 8, -2, 11, 4];
var element = 6;
var output = lessThenGivenElement(input, element);
console.log(output);
/*	
7. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]
*/
function findeStartWord (array, word){
	var newArray = [];
	for (var i = 0; i <array.length; i++){
		if (word === array[i].toLowerCase().slice(0,3)){
			newArray.push(array[i]);
		};
		
	};
	return newArray;
};

 var array = ['JavaScript', 'Programming', 'fun', 'product'] ;
 var word = 'pro';
 var output = findeStartWord(array, word);
 console.log(output);


/*
Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 



Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 


Write a function that checks if a given string is written in all capitals.
Write a function that checks if a given string contains any digits.
Write a function that checks if a given string is a valid hexadecimal color.
Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
 
Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds
   
  
Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


Write a function that calculates the distance between two points in the space. 



Write a function that generates a random integer value between 5 and 20.
Write a function that generates a random integer value between 50 and 100. 
Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    



 Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)



*/