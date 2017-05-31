// Finding palindromes
//
// Create a variable called word that stores a word we want to test
// as a palindrome. Write some code that prints out "true" if word
// is a palindrome, or "false" if its not.
(function(){

var word = "hannah";
var palindrome = word.split("").reverse().join("").split(" ").reverse().join(" ");
// console.log(palindrome);

console.log(word == palindrome);

})();
