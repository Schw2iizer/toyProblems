

// Write a function called finder that accepts two parameters, the first one is a string and the second is an array
// have your function return true if the string is found in the array and false if it is not
var nums = ["Javascript", "hello", "world"];

var finder = function(argument){
	for (var i = 0; i < nums.length; i++){
		if (argument === nums[i]){
			return true;
		};
	};
	return false;
};

finder("Javascript");
// ----------------------------------------------------------------------------------

// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an array of last names. 
// Have the function return a new array combining the first names and the last names.
var first = ["Tyler", "Ean" ,"Cahlan"];
var last = ["McGinnis", "Platter", "Sharp"];

var combinator = function(first, last){
	var firstLast = [];
	for (var i = 0; i < first.length; i++){
		firstLast.push(first[i] + " " + last[i]);
	}
	return firstLast;
}

combinator(["Tyler", "Ean", "Cahlan"], ["McGinnis", "Platter", "Sharp"]);

// ------------------------------------------------------------------------------------
// Make the function invocation work

var cb = function(total){
	console.log("The total sum of the array is " + total);
}

var nums = [1, 4, 3, 5, 2, 8];

var sum = function (arr, callback){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	callback(total);
}

sum(nums, cb);


sum([1,4,3,5,2,8], function(total){

//----------------------------------------------------------------------------------------

// replaceOdd([1,2,3,4,5,6,7,8,9,10])

// Write a function named replaceOdd that takes in an array of numbers, and changes all of the odd numbers to the letter "O".

var arr = [1,2,3,4,5,6,7,8,9,10];
var replaceOdd = function(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0){
			arr[i] = "O";
		}
	}
			return arr;
}

replaceOdd(arr);

// --------------------------------------------------------------------------------------------------

// Write a function called Reverse that takes in a string and returns the string reversed. Do not use .tring.prototype.reverse = function() {


 var Reverse = function(str) {
	var a = str;
	var b = a.length - 1;
	var newWord = "";
	for(var i = b; i >= 0; i--){
		if (b !== 0) {
			newWord = newWord + a[i];
		}

	}
		return newWord;
	}

// OR =======

var Reverse = function(str){
	var o = "";
	for (var i = str.length - 1; i >= 0; i--){
		o += str[i];
	}
	return o
}

// ----------------------------------------------------------------------------------------------------------------------


// Write a function that returns the factorial of a number. The number 5 will return 5 * 4 * 3 * 2 * 1
var fact = function(x){
	n = 5
	product = n * (n - 1)

	for (i = n - 2; i > 1; i--){
   product = product * i
	}
}
alert(product);

// ------------------------------------------------------------------------------------------------------------------------------

// Write a function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.


var str = "++d+===+c++=";

var simpleSymbols = function(str) {
for (var i = 0; i < str.length; i++) {
  if (str.charAt(i) !== "+" && str.charAt(i) !== "=") {
    if (str.charAt(i - 1) !== "+" || str.charAt(i + 1) !== "+") {
        return false;
    };
  };
};
    return true;
}

simpleSymbols(str);

// ------------------------------------------------------------------------------------------------------------------------------

// Given an arbitrary input string, return the first non-repeated character in the string. 
// For example: firstNonRepeatedCharacter("ABA"); // => "B"
// 			 firstNonRepeatedCharacter("AABCABD"); // =. "C"

function(str) {
	for(var i = 0; i < str.length; i++){
		var before = str.slice(0, i);
		var after = str.slice (i + 1);
		if(before.indexOF(str[i]) === -1 && after.indexOf(str[i]) === -1) {
			return str[i];
		}
	}
	return null;
}

// ------------------------------------------------------------------------------------------------------------

// Write a function called ABCheck that takes a string parameter and return the string true if the characters A and B are separated by exactly 3 places anywhere in the string at least once. (ie: "lane borrowed" would result in true because there is exactly three characters between A and B). Otherwise, return the string.

var abCheck = function(str){
	var arr = str.toLowerCase().split("");
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === "a" && arr[i + 4] === "b" || arr[i - 4] === "b"){
			return true;
		} 
	}		
		return false;
}

ABCheck("lane borrowed");

// ------------------------------------------------------------------------------------------------------------

// Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no".
 
var fib = [0,1];
for(var i=fib.length; i<12; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 

OR ---

var fib = function(num){
	var fibArray = [0,1];
	for (var i = 0; i < 99; i++){
		fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
	}
	console.log(fibArray);
	if(fibArray.indexOf(num) === -1) {
		return alse;
	}
	return true;
} 

fib(5);

// -----------------------------------------------------------------------------------------------------------------------

// Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return one of them. If there are no items that occur an even number of times, return null. 

// var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
// console.log(onlyEven); 4

// var onlyEven = evenOccurence([1, 1, 3, 4, 1,]);
// console.log(onlyEven); 


var evenOccurance = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    var occurs = 0; 
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        occurs++;
    }
  }
  if(occurs %2 === 0) {
    return arr[i];
  }
  }
}
evenOccurance([5, 4, 3, 4]);
// ----------------------------------------------------------------------------------------------------------------

Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution.

var fibonacci = function(n) {
	var sum = 0;
	var num1 = 0;
	var num2 = 1;
	for(var i = 1; i < n; i++){
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return sum;
}
fibonacci(6);


// RECURSIVE SOLUTION ------>

var recursiveFib = funtion (n){
	if (n <= 2) {
		return 1;
	}
	return recursiveFib(n - 1) + recursiveFib(n - 2);
}	
// ---------------------------------------------------------------------------------------------------------------

Create a function that takes in three strings as parameters. The goal is to swap all x characters in the string for y characters. For example. swapper("some string", "s, "z") returns "zome ztring

var swapper = function(str, l, x){
	var strArray = str.split("");
	for (var i = 0; i < strArray.length; i++){
		if (strArray[i] === "l"){
			strArray[i] = "x";
		}
	}
	var string = strArray.join("");
	return string;
}

swapper("hello world", "l", "x");
// ------------------------------------------------------------------------------------------------------------------

// Write a function that accepts a multi dimensional array and returns a flattened version.

// flatten([1, 2, [3, [4], 5, 6], 7]) to [1, 2, 3, 4, 5, 6, 7]

var flatten = function(arr){
	var str = arr.join('[');
	var newArray = [];
	for (var i = 0; i < str.length; i++){
		if(str[i] !== && str[i] !== ","){
			newArry.push(+str[i]);
		}

	}
	return newArray;
}

flatten();

// OR

var flatten = function(arr){
	for (var i = 0; i < arr.length; i++){
		if (typeof arr[i] !== 'Number'){
			arr = arr.concat(arr.splice(i, 1)[0]);
			i--;

		}
	}
}

// ---------------------------------------------------------------------------------------------------------------

http://jsfiddle.net/cahlan/2ub9u8fj/




