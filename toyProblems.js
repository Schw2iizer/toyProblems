

// Write a function called finder that accepts two parameters, the first one is a strong and the second is an array
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
// -------------------------------------------------







