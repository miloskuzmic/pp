/*Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false
*/
function isString (a){
    var b = '';
    
    if (typeof a === 'string'){
        b+='true';
    }else{
        b+='false';
    }
        return b;
}
console.log(isString(12));
/* 2. 
    Write a function to check whether a string is blank or not.

    "My random string" -> false
    " " -> true
    12 -> false
    false -> false
    */
    function isBlankString (a){
       var b = '';
       if (typeof a === 'string' && a.length === 0){
        b+='true';
    }else{
        b+='false';
    }
            return b;
    }
    console.log(isBlankString('My random string'));
/*3. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa" */
    function concaString(a, b){
        var c = ''
        for (var i = 1; i <= b; i++){
            c +=a;
        }
        return c;
    }
    console.log(concaString('Ha', 1));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function countLetter(a, b){
    var c = 0;
    for (var i = 0; i < a.length; i++){
        if (b === a[i]){
             c++;
        }
    }
     
    return c;
}
console.log(countLetter('My random string', 'i'));
/*5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.*/
function positionOfChar(a, b){
    var c = '';
    for (var i = 0; i < a.length; i++){
       // console.log(a[i]);
        if (b === a[i]){
            c = i;
            i = a.length;
        }else{
            c = -1;
        }
        
    }
    return c;
}
console.log(positionOfChar('My random string', 'w'));
/*6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/
function lastOfChar(a, b){
    var c = '';
    for (var i = a.length; i >= 0; i--){
       // console.log(a[i]);
        if (b === a[i]){
            c = i;
            i = 0;
        }else {
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
function strToarr(a){
    var arr = [];
    for (i = 0; i < a.length; i++){
        if (a[i] !== ''){
            arr[i] += a[i];
            console.log(arr[i]);
        }else if (a[i] === '') {
            arr[i] += 'null';
        }
    }
    return arr;
}
console.log(strToarr('My random string'));