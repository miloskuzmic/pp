/*Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false
*/
function isString(a) {
    var b = '';

    if (typeof a === 'string') {
        b += 'true';
    } else {
        b += 'false';
    }
    return b;
}
console.log(isString('My string'));
/* 2. 
    Write a function to check whether a string is blank or not.

    "My random string" -> false
    " " -> true
    12 -> false
    false -> false
    */
function isBlankString(a) {
    var b = '';
    if (typeof a === 'string' && a.length === 0) {
        b += 'true';
    } else {
        b += 'false';
    }
    return b;
}
console.log(isBlankString('My random string'));
/*3. Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa" */
function concaString(a, b) {
    var c = '';
    for (var i = 1; i <= b; i++) {
        c += a;
    }
    return c;
}
console.log(concaString('Ha', 1));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function countLetter(a, b) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        if (b === a[i]) {
            c++;
        }
    }
    return c;
}
console.log(countLetter('My random string', 'i'));
/*5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.*/
function positionOfChar(a, b) {
    var c;
    for (var i = 0; i < a.length; i++) {
        if (b === a[i]) {
            c = i;
            break;
            // i = a.length;
        } else {
            c = -1;
        }

    }
    return c;
}
console.log(positionOfChar('My random string', 'r'));
/*6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/
function lastOfChar(a, b) {
    var c = '';
    for (var i = a.length; i >= 0; i--) {
        // console.log(a[i]);
        if (b === a[i]) {
            c = i;
            i = 0;
        } else {
            c = -1;
        }

    }
    return c;
}
console.log(lastOfChar('My random string', 'M'));
/*7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
function strToarr(a) {
    var arr = [];
    var b = null;
    for (i = 0; i < a.length; i++) {
        if (a[i] !== ' ') {
            arr[i] = a[i];
        } else {
            arr[i] = b;
        }
    }
    return arr;
}
console.log(strToarr('My random string'));
/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/
function isPrime(a) {
    var j = true;
    for (var i = 2; i <= a; i++) {
        if ((a % i) === 0 && a !== i) {
            j = false;
        }
    }
    return j;
}
console.log(isPrime(15));
/*9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
function replaceSpace(str, seperator) {
    var str1 = '';
    if (seperator === undefined) {
        seperator = '-';
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            str1 += str[i];
        } else {
            str1 += seperator;
        }
    }
    return str1;
}
console.log(replaceSpace('My random string', '+'));
/*10. Write a function to get the first n characters and add “...” at the end of newly created string.*/
function beginOfString(str, n) {
    var str1 = '';
    for (i = 0; i < n; i++) {
        str1 = str[i];
    }
    str1 += '...';
    return str1;
}
console.log(beginOfString('My new string', 4));
/*11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function arrOfNumber(str) {
    var str1 = [];
    var j = 0
    for (var i = 0; i < str.length; i++) {
        if (isFinite(parseFloat(str[i]))) {
            str1[j] = parseFloat(str[i]);
            j++;
        }
    }
    return str1;
}
console.log(arrOfNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

/*12 
Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/
function pension(birth, curent, gender) {
    var ret;
    if (gender === 'men') {
        ret = 65 - (curent - birth);
    } else if (gender === 'woman') {
        ret = 60 - (curent - birth);
    }
    if (ret > 0){
        return ret + 'years to retirement';
    }else{
        return 'Already retired';
    }
}
console.log(pension(1989, 2021, 'men'));
/* 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/
function redExcercise(n) {
    if (n > 10 && n < 14) {
        n = n + 'th';
    } else {
        var ostatak = n % 10;
        switch (ostatak) {
            case 1:
                n = n + 'st';
                break;
            case 2:
                n = n + 'nd';
                break;
            case 3:
                n = n + 'rd';
                break;
            case 4:
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                n = n + 'th';
                break;
            default:
                n = 'Not a number';
                break;
        }
    }
    return n;
}
console.log(redExcercise(6));
//Second method
function redExcercise(n) {
    var str = '' + n;
    if (str >= 11 && str < 14) {
        str = str + 'th';
    } else if (str[str.length - 1] === 2) {
        str = str + 'nd';
    } else if (str[str.length - 1] === 3) {
        str = str + 'rd';
    } else if (str[str.length - 1] === 1) {
        str = str + 'st';
    } else {
        str = str + 'th';
    }
    return str;
}
console.log(redExcercise(211));
//dario :
function humanizeNumber(num) {
    // if   (typeof num == "undefined") {   //ogradjivanje
    // return;
    //}
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}

console.log(humanizeNumber(200011));



