/* 
1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']
*/
let capitalizesFirstLetter = (...arguments) => {
let array = Array.from(arguments)
  let newArray = array.filter((e) => typeof e === "string");
  // console.log(newArray);
  newArray.forEach((element, i, newArray) => {
    newArray[i] = element.charAt(0).toUpperCase() + element.slice(1);
  });
   console.log(newArray);
};
capitalizesFirstLetter(["hello", "there", "ES", 6]);
/*
/*
2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only
*/
const products = [{ name: "Banana", price: 120.23   }, { name: "Orange", price: 100  }]
 
const productsWithTax = products.map(product => {
 
    const { price: prodPrice } = product;
 
    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: Math.round(prodPrice * 0.2),
    }
 
    return newProd
})
const taxes = products.map(product => {
 
    const { price: prodPrice } = product;
 
    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: Math.round(prodPrice * 0.2),
    }
 
    return newProd.tax
})
 
console.log(productsWithTax);
console.log(taxes);

/*	
3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/
let increaseElement = (array, increaser) => {
    let newArray = []
    if (increaser){
    newArray = array.map(element => element + increaser)
    } else{
     newArray = array.map(element => element + 1)
    }
    return newArray
}
console.log(increaseElement([4, 6, 11, -9, 2.1], 2))
// second method
let increaseElement = (array, increaser = 1) => {
   let newArray = array.map(element => element + increaser)
    return newArray
}
console.log(increaseElement([4, 6, 11, -9, 2.1]))
/*
4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/
let fileterEven = (array) => {
    let evenElementsArray = array.filter(element => element % 2 === 0)
    return evenElementsArray;
}
const arr = [6, 11, 9, 0, 3];
console.log(fileterEven(arr))
    /*
5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
 */
let filterElements = (array) => {
    let filteredArray = array.filter(element => element.includes('js') || element.includes('JS') )
     console.log(filteredArray) ;
}
const array = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
filterElements(array)

/*
6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/
let filterInteger = (array) => {
    let filteredNumbers = array.filter(element => Number.isInteger(element))
     console.log(filteredNumbers)
}
const arrayOfNumbers = [1.6, 11.34, 9.23, 7, 3.11, 8];
filterInteger(arrayOfNumbers);
/*
7.Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/
let filterIntegerWithNumberFive = (...elem) => {
    let array = Array.from(elem)
    let filteredNumbers = array.filter(element => Number.isInteger(element) && element.toString().includes(5))
    console.log(filteredNumbers)
}
filterIntegerWithNumberFive(23, 11.5, 9, 'abc', 45, 28, 553 )
/*	
8. Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5

*/
let indexOfElements = (array) => {
    let index= [];
    array.forEach(element => {  
        if (element > 10){
             index.push(array.indexOf(element));
        }
        
    })
    return console.log(index.toString())
} 
const array1 = [1.6, 11.34, 29.23, 7, 3.11, 18];
indexOfElements(array1)
/*
9.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.   
*/
const arrayOfPersons = [
    {name:'Pero',
    age: 33,
    },
    {name: 'Djuro',
    age: 26,
    },
    {name:'Milos',
    age: 18,
    },
];
let printPerson = (array) => {
    let persons = []
    array.forEach(element =>{
        if (element.age > 25) {
            persons.push(element.name)
        };
    })
    console.log(`Persons older then 25 year are: ${persons.toString()}`);
    
}

let olderThan = (array) => {
    let count = 0;
    array.forEach(element =>{
        if (element.age > 40) {
           count++;
        };
        
    });
    console.log(`There is ${count} persons older than 40`)
}
let allOlder = (array) =>{
    let b = array.every(array => array.age > 20)
    b ? console.log('Yes') : console.log('No');
}
printPerson(arrayOfPersons);
olderThan(arrayOfPersons);
allOlder(arrayOfPersons);

/*
10.Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no
*/
const checkPositive = (array) => {
    let check = 'Yes';
    array.forEach(element => {
        if (element < 0) {
            check = 'No';
        }
    });
    console.log(check)
}
checkPositive([3, 11, 9, 5, 6]);
checkPositive([3, -12, 4, 11]);
/*
11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
*/
const calculateProduct = (array) => {
    let rez = 1;
    array.forEach(element => {
        rez = rez * element;
    });
    console.log(rez);
}
calculateProduct([2, 8, 3])
/*
12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/
const maxOfArray = array => console.log (Math.max(...array));
const input = [2, 7, 3, 8, 5.4] ;
maxOfArray(input);




