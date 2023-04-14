/*
More info about Array Functions!

Add a value to the end of an array.
push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Remove the value at the end of the array (returns the popped value!)
pop(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

Add a value to the front of an array.
unshift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

Remove the value at the front of an array (returns the shifted value!)
shift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

*/


// Write a function to reverse the values in a given array.

// Build your own array lists as a group, so share some of your favorite movies, games, or even pokemon! (Or make up your own!)
var favMovies = [];
var favGames = [];


var boringArr = ['a', 'b', 'c', 'd', 'e', 'f'];

// var boringTemp = boringArr[2]



function reverseArr(arr) {
    reverseArr = [];

    var temp = arr[0];
    for (var i=arr.length - 1; i>=0; i--) {
        temp = arr[i]
        reverseArr.push(temp);
        
    } return reverseArr;
}


var favGolfers = ["JT", "Tiger", "Mac O'grady", "The Bear", "John Rahm" ];
var result = reverseArr(favGolfers);
console.log(result);

// BUILT IN METHOD TO REVERSE ARRAYS //
var R2 = favGolfers.reverse()
console.log(R2)

// ANOTHER FUNCTION TO REVERSE ARRAYS //

function reverseArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop())
    }
    return arr;
}



// Optional Challenges!
// Level 1: Construct the function with both a For Loop and then a While Loop. (Watch out for infinite loops!)
// Level 2: Knowing .pop() RETURNS the removed value, find a way to use this to move a value to the other side.
// Level 3: Create the function in a way that reverses the Array "in place" where you don't create a new Array and use a temp variable!
// (Hint: This one can be challenging, so don't stress this one!)