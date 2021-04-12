/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
function findeElement(arr, element) {
    var b = 'no';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            b = 'yes';
        }
    }

    return b;
}
console.log(findeElement([5, -4.2, 3, 7], 3))
/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/
function multiplieOfelements(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= 2;
        }
    }
    return arr;
}
console.log(multiplieOfelements([-3, 11, 5, 3.4, -8]))

/* 3.Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
function minimumValue(arr) {
    var pom = '';
    var index = '';
    var pom1 = ''
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                pom = arr[j];
                index = j;
            }
    }
    pom1 = pom + ',' + index;
    return pom1;
}
console.log(minimumValue([4, 2, 2, -1, 6]));
/* 4.Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
function secondSmall(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++)
            if (arr[i] < arr[j]) {
                pom = arr[i];
                arr[i] = arr[j];
                arr[j] = pom;
                
            }
    }
    return arr[1];
}
console.log(secondSmall([4, 2, 2, -1, 6]))
/* 5.Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
function sumOfpostive(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfpostive([3, 11, -5, -3, 2]));
/* 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/
function isSimetric(arr) {
    var pom = false;
    for (var i = 0; i < arr.length; i++) {
        var x = arr[arr.length - 1 - i];
        if (arr[i] === x) {
            pom = true;
        }
    }
    if (pom) {
        return 'The array is symetric';
    } else {
        return 'The array is no\'t symetric';
    }
}
console.log(isSimetric([2, 4, -2, 7, -2, 4, 2]));

/*7.Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
function interwinesTwoArr(arr1, arr2) {
    arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3[arr3.length] = arr1[i];
        arr3[arr3.length] = arr2[i];
    }
    return arr3;
}
console.log(interwinesTwoArr([4, 5, 6, 2], [3, 8, 11, 9]));
/* 8.Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/
function concateTwoArr(arr, arr1) {
    var arr2 = [];
    for (i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            arr2[i] = arr[i];
            arr2[j + arr.length] = arr1[j];
        }
    }
    return arr2;
}
console.log(concateTwoArr([4, 5, 6, 2], [3, 8, 11, 9]));
/* 9.Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/
function deleteGivenElement(arr, element) {
    var arr1 = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            arr1[j] = arr[i];
            j++;
        }
    }
    return arr1;
}
console.log(deleteGivenElement([4, 6, 2, 8, 2, 2], 2));
/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
function InserElement(arr, position, element) {
    arr1 = [];
    if (position > arr.length) {
        pom = 'Position is greater then array'
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (i === position) {
                arr1[i] = element;
            }
            arr1[arr1.length] = arr[i];
        }
    } return arr1;
}
console.log(InserElement([2, -2, 33, 12, 5, 8], 3, 78));