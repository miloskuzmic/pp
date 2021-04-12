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
/* 8. Write a function to find the maximum and minimum elements. Function returns an array.*/
function maximunAndMinimu(arr) {
    var min = arr[0];
    var max = arr[0];
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    arr1[arr1.length] = max;
    arr1[arr1.length] = min;
    return arr1;
}
var arr = [2, 3, 4, 5, 78, 32, -1];
console.log(maximunAndMinimu(arr));
//9. Write a function to find the median element of array.
function medianElement(array) {
    var pom;
    var index;
    var median;
    //sorting array
    for (var i = 0; i < array.length; i++) {
        for (var j = 1 + i; j < array.length; j++) {
            if (array[i] > array[j]) {
                pom = array[i];
                array[i] = array[j];
                array[j] = pom;
            }
        }
    }
    //finding median
    if (array.length % 2 === 0) {
        index = parseInt(array.length / 2);
        median = (array[index] + array[index - 1]) / 2;
    } else {
        index = parseInt(array.length / 2);
        median = array[index];
    }
    return median;
}
var array = [9, 8, 4, 5, 6, 1, 3, 2];
console.log(medianElement(array));
//10. Write a function to find the element that occurs most frequently.
function occursMost(array) {
    var counter = 0;
    var numberOfsame = 0;
    var pom;
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }
            if (numberOfsame < counter) {
                pom = array[i];
                numberOfsame = counter;
            }
        }
        counter = 0;
    }
    return pom;
}
var array = [3, 'a', 'a', 5, 6, 7, 3, 3];
console.log('Most occure element is ', occursMost(array));
/* 11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/
function firstMiddleLast(array) {
    var outputArray = [];
    var pomIndex;
    if (array.length % 2 === 0) {
        outputArray[outputArray.length] = array[0];
        outputArray[outputArray.length] = array[array.length - 1];
    } else {
        outputArray[outputArray.length] = array[0];
        pomIndex = parseInt(array.length / 2);
        outputArray[outputArray.length] = array[pomIndex];
        outputArray[outputArray.length] = array[array.length - 1];
    }
    if (outputArray.length === 0) {
        return array;
    } else {
        return outputArray;
    }
}
var array = [1, 2, 3, 4];
console.log(firstMiddleLast(array));
/* 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/
function averageNelements() {
    var sum = 0;
    var avr;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];

    }

    avr = sum / arguments.length;
    return avr;
}
var elemN = averageNelements(1, 2, 3, 4, 5);
console.log(elemN);
/*13. Write a function to find all the numbers greater than the average.*/
function greaterThenAverage(array) {
    var sum = 0;
    var avr;
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avr = sum / array.length;
    for (var j = 0; j < array.length; j++) {
        if (array[j] > avr) {
            arr[arr.length] = array[j];
        }
    }
    return arr;
}
var array = [1, 2, 3, 4, 5];
console.log(greaterThenAverage(array));
/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40*/
function bmi(weight, height) {
    var rez = '';
    var index = weight / (height * height);
    if (index < 15) {
        rez += 'Starvation';
    } else if (index > 15 && index < 17.5) {
        rez += 'Anorexic';
    } else if (index > 17.5 && index < 18.5) {
        rez += 'Underweight';
    } else if (index >= 18.5 && index < 25) {
        rez += 'Ideal';
    } else if (index >= 25 && index < 30) {
        rez += 'Overweight';
    } else if (index >= 30 && index < 40) {
        rez += 'Obese';
    } else if (index >= 40) {
        rez += 'Morbidly';
    }
    return rez;
}
console.log(bmi(58, 1.69));
/* 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
Dovrsite ovo za utorak
*/
function textInFrame(array) {
    var maxLength = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    function writing(str, num) {
        var rez = '';
        for (var i = 0; i < num; i++) {
            rez += str;
        }
        return rez;
    }
    maxChar = maxLength + 4;
    var topAndBottom = writing('*', maxChar);
    //middle part
    var middle = '';
    for (var i = 0; i < array.length; i++) {
        var newLenght = maxLength - array[i].length;
        var misingLenght = writing(' ', newLenght);
         middle += '* ' + array[i] + misingLenght + ' *' + '\n';
        
        
    }
    
    var final = topAndBottom +'\n' + middle + topAndBottom;

    return final;
}
var array = ["Hello", "World", "in", "a", "frame"];
console.log(textInFrame(array));
