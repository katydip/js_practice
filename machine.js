// Change machine
//
// Imagine we have a very versatile change machine. Create a variable called
// amount stores a quantity of dollars, and write some code that produces an
// array that indicates the number of 1, 5, 10, and 20 bills that the change machine
// should return. You want the change machine to return the smallest number of bills possible.
//
// After your code runs you should have a new array of the
// format [twenties, tens, fives, ones].
// For example, if amount = 47, you should print an array after
// your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).
(function(){

var amount = 67;
console.log("Here is your change for " + amount + " dollars");

var howmany20s = parseInt(amount / 20);
// console.log(howmany20s);
var remainder20s = amount%20;
// console.log(remainder20s);
var howmany10s = parseInt(remainder20s / 10);
// console.log(howmany10s);
var remainder10s = remainder20s%10;
// console.log(remainder10s);
var howmany5s = parseInt(remainder10s / 5);
// console.log(howmany5s);
var remainder5s = remainder10s%5;
// console.log(remainder5s);
var howmany1s = parseInt(remainder5s / 1);
// console.log(howmany1s);

console.log(howmany20s, howmany10s, howmany5s, howmany1s);

})();
