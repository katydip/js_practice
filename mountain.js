// The Tallest Mountain
//
// Create an array that contains a bunch of numbers representing the heights of various mountains.
// Write some code that identifies the height of the tallest of the available mountains and prints it out.
(function(){

var heights = [1979, 20310, 6288, 14417, 13922, 3560]

heights.sort(function(a,b){
  return a - b;
});
// console.log(heights);


var popped = heights.pop();
console.log(popped);


})();
// var heights = ["1,979", "20,310", "6,288", "14,417", "13,992", "3,560"];
//
// heights.sort(function compareNumbers(a, b) {
//   return a - b;
// })
//
// console.log(heights);
