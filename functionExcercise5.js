/*1.
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/
function switchhMinMax(arr) {
    var min = arr[0];
    var max = arr[0];
    var indMin;
    var indMax;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            indMin = i;
        }else if (arr[i] > max) {
            max = arr[i];
            indMax = i;
        }
        
    }
    arr[indMin] = max;
    arr[indMax] = min;
    return arr;
}
console.log(switchhMinMax([3, 500, 12, 149, 53, 414, 1, 19]));

/* 2 Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/
function matemathicArr(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / 2 + 5;
        if (arr[i] === 0) {
            arr[i] = 20;
        }
    }
    return arr;
}
console.log(matemathicArr([3, 500, -10, 149, 53, 414, 1, 19]))
/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
function grades(arrName, arrpoints) {
    var arrName;
    var arrpoints;
    var result = '';
    for (i = 0; i < arrName.length; i++) {
        if (arrpoints[i] < 51) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and failed to complete the exam.\n"
        } else if (arrpoints[i] <= 60) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and earned 6.\n"
        } else if (arrpoints[i] <= 70) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and earned 7.\n"
        } else if (arrpoints[i] <= 80) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and earned 8.\n"
        } else if (arrpoints[i] <= 90) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and earned 9.\n"
        } else if (arrpoints[i] <= 100) {
            result += arrName[i] + " acquired " + arrpoints[i] + " points and earned 10.\n"
        }
    }
    return result;

}
console.log(grades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*4.(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

*/
function multiplayAndSort(arr) {
    var pom;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                pom = arr[i];
                arr[i] = arr[j]
                arr[j] = pom;

            }

        } arr[i] *= 2;
    }
    return arr
}
console.log(multiplayAndSort([13, 11, 15, 5, 6, 1, 8, 12]))
/*(skip :)) 5. Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/
function descendingOrder(arr) {
    var pom;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                pom = arr[i];
                arr[i] = arr[j]
                arr[j] = pom;

            }

        }
    }
    return arr
}
console.log(descendingOrder([13, 11, 15, 5, 6, 1, 8, 12]));

/* 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/
function subtracktOddNumber(num) {
    var sum = 0;
    var sum1 = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        } else if (i % 2 !== 2 && i <= num / 2) {
            sum1 += i;
        }

    }

    return (sum - sum1) * 12.5;
}
console.log(subtracktOddNumber(1000))
/* 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa*/
function firstLetters(arr) {
    var pom = '';
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && arr[i].length >= 2) {
            pom += arr[i][0] + arr[i][1]
        }
    }
    return pom
}
console.log(firstLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

/* 8.Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/
function descendingOrder(arr) {
    var arr1 = ''
    for (var i = arr.length - 1; i >= 0; i--) {
        arr1 += arr[i]
    }
    return arr1
}
console.log(descendingOrder('Belgrade Institute of Technology'));

/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/
function combinatio() {
    var pom = ''
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i !== j) {
                pom += '(' + i + ',' + j + '), ';
            }
        }
    }
    return pom
}
console.log(combinatio());
/*10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/
function checkPrime(number){
    var pom = true
    for (var i = 2; i <= number; i++){
        if ((number %i ) === 0 && number !== i){
            pom = false;
        }
    }
    return pom;
}
console.log('Number is prime ', checkPrime(17))
/*11Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/
function isPolindrome(str) {
   var pom = true;
    for (var i = 0; i < str.length; i++){
        if (str[i] !== str[str.length -1 -i]){
             pom= false;
        }
    }
    return pom
}
console.log(isPolindrome('Geek'))

/*12Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/
function greatestDicisor(x, y) {
    if (x <= y) {
       var pom = x;
    }else{
        pom = y;
    }
        for (var i = pom; i > 0; i--) {
            if (x % i === 0 && y % i === 0) {
                return i
            }
        }   
}
console.log(greatestDicisor(9,81));




