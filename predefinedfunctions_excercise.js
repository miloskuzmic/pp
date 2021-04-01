/*1 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/
function arrayToNumbers(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i])){
            arr1[arr1.length] = parseFloat(arr[i]);
        }
    }  
    return arr1;
}
console.log(arrayToNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));
/*2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”
*/
function joinAllElements(array) {
    var pom = '';
    for (var i = 0; i < array.length; i++){
      if (isFinite(array[i]) && array[i] !== null){
          pom += array[i];
      }
    }
    return pom;
}
console.log(joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/* 3. Write a program to filter out falsy values from the array.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/
function filterFalsy(arr){
    var pom  = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]){
            pom[pom.length] = arr[i];
        }
    }
    return pom;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));  
/*4Write a program that calculates a number of integer values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/
function numersOfInteger(arr){
    var rez = 0;
    for (var i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) === arr[i]){
            rez++
        }
    }
    return rez;
}
console.log(numersOfInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/* 5. Write a program that calculates a number of float values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
function floatValues(arr){
    var rez = 0;
    for (var i = 0; i < arr.length; i++){
        if (parseFloat(arr[i]) !== parseInt([arr[i]]) && !!arr[i]){
            rez++
        }
        
    } 
    return rez;
}
console.log(floatValues([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
