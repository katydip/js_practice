(function(){


var word = "JAVASCRIPT"
var letter = "J"

var wordletters = word.split("");
  console.log(wordletters);

var count = (word.match(/J/g) || []).length;
  console.log(count);
//is there a way to replace that "J" in the global match function with the variable letter? 


if (wordletters.includes(letter)) {
  console.log(`Yeah, the letter ${letter} exists ${count} times in my word`)
} else {
  console.log("Nope, that letter doesn't exist in my word.")
}

})();
