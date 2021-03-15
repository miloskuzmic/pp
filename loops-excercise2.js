/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var a = [5, -4.2, 3, 7];
var e = 3;
for (var i = 0; i < a.length; i++) {
	if (e === a[i]) {
		var b = 'yes';
	}

}
if (b === 'yes') {
	console.log(b);
}
else {
	console.log('no');
}
/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/
var array = [-3, 11, 5, 3.4, -8];
var multi = array;
for (var i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		multi[i] = array[i] * 2;
	}
}
console.log(multi);
/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var array = [4, 2, 2, -1, 6];
var min = [0];
for (var i = 0; i < array.length; i++) {
	if (array[i] < min){
		min = array[i];
		var index = i;
	}
}
console.log(min, index);
/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */
var x = [4, 2, 2, -1, 6];

for (var i = 0; i < x.length; i++) {
	for (var j = 0; j < x.length; j++){
		if (x[i] < x[j]){
			var min = x[i];
		}
	}
}
console.log(min);
for (var w = 0; w < x.length -1; w++){
	for (var c = w+1; c< x.length; c++)
	if (x[w] > x[c]){
		var v = x[w];
		x[w] = x[c];
		x [c] = v;
	}
}
console.log(x);
console.log('next minimum number is ',x[1]);
/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
var x = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < x.length; i++) {
	if (x[i] > 0) {
		sum += x[i];
	}
}
console.log(sum);
/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
var x = [3, 4, 12, 8];

for (var i = 0; i < x.length; i++) {
	var f = x[x.length - 1 - i];
	console.log (f);

	if (x[i] === f) { 
		var b = true;
	
	}
}
if (b === true) {
	console.log('simetric');
} else {
	console.log('not simetric');
}
/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var x = [4, 5, 6, 2];
var y = [3, 8, 11, 9];
var z = [];
var i = 0;
var j = 0;
while (i < x.length + y.length) {
	z[i] = x[j]; // putting number from array x in array z
	i++; //moving index to next spot
	z[i] = y[j];// putting number from array y in array z
	i++; //moving index to next spot. increasing 'i' 2 times because to make even index
	j++; //moving index to next spot
}
console.log('Output array', z);
/* 8.
Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var x = [4, 5, 6, 2];
var y = [3, 8, 11, 9];
var z = [];
for (i = 0; i < x.length; i++) {
	for (var j = 0; j < y.length; j++) {
		z[i] = x[i];
		z[j + x.length] = y[j];
	}
}

console.log('Output array', z);
/* 9.Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]*/
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var x = [];
var w = 0;
for (var i = 0; i < a.length; i++) {
	if (a[i] !== e) {			
		x[i - w] = a[i]			
	} else {
		w++;  					
	}
}

console.log(x);
/* 10
Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var x = [];
var w = 0
for (i = 0; i <= a.length; i++) {
	if (i < p) {
		x[i] = a[i];
	} else if (i === p) {
		x[i] = e;
		w++;
	} else if (i > p) {
		x[i] = a[i - w];
	}
}
if (p>a.length){
	console.log('error');
}else{
	console.log(x);
}


