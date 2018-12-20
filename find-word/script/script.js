var alphabet;
alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); //creating an array
var block = "";

var alpha = {};
for (var i = 0; i < alphabet.length; i++){
    alpha[alphabet[i]] = i+1;
    block+= '<div class="letters"  onclick="Letter()">' + alphabet[i] + '</div>'; 

}

$('.alphabet').html(block);
console.log(block);
// //checking the inputed word is correct or wrong
// function randomWord () {
//   var order = ["computer","windows","mouse","desktop"];

//   var word = order[Math.floor(Math.random() * order.length)];

//   var s = prompt ("guess the word");

//   if (s === word){
//     document.write('correct');
//   }
//   else {
//     document.write('wrong');
//   }
// ;}


var randomWord = ["computer","windows","mouse","desktop"];
var word = randomWord[Math.floor(Math.random() * randomWord.length)];

var s;
var count = 0;
var answerArray = [];

function startGame () {
  for (i = 0 ; i < word.length ; i++ )
  {
    answerArray[i] = "_";
  }

  s = answerArray.join(' ');
  document.getElementById("answer").innerHTML = s;
}

function Letter() {
  var letter = document.getElementById("letter").value;

  if(letter.length > 0) {
    for(var i = 0 ; i < word.length ; i++){
      if(word[i] === letter){
        answerArray[i] = letter;
      }
    }

    count++;
    document.getElementById("counter").innerHTML = "Number of clicks:" + count;
    document.getElementById("answer").innerHTML = answerArray.join(" "); 
  }
  if (count > 5){
    document.getElementById("stat").innerHTML = "SOME TEXT";
  }
}