'use strict';

alert('Hi! My name is Will. Please take a moment to read the directions on my page :-).');

var counter = 0;

function fxnCounter () {
  counter += 1; /* This var will tally the user's score */
}

fxnCounter();

function firstQuestion() {
/* First Question */
  var anotherCupAnswer = prompt('Would you like another cup of coffee (yes or no)?');
  anotherCupAnswer = anotherCupAnswer.toUpperCase();

  if (anotherCupAnswer === 'YES' || anotherCupAnswer === 'Y') {
    alert('Good descision! You\'ll need one because there are still more questions to come...');
    console.log(anotherCupAnswer + ', the user would like another cup.');
    fxnCounter();
  } else if (anotherCupAnswer === 'NO' || anotherCupAnswer === 'N') {
    alert('Ewww wrong answer, you still have four more questions.');
    console.log('The user does not want another cup :(');
  } else {
    alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
    console.log('The user is not following instructions :(');
  }
}

firstQuestion();


function secondQuestion() {
/* Second Question */
  var treeAnswer = prompt('If a tree falls in a forest and I\'m not around to hear it, does it still make a sound?');

  treeAnswer = treeAnswer.toUpperCase();

  if (treeAnswer === 'YES' || treeAnswer === 'Y') {
    alert('No that\'s absurd! How could it make a sound if I\'m not arround to hear it.');
    console.log('The user is incorrect');
  } else if (treeAnswer === 'NO' || treeAnswer === 'N') {
    alert('You are correct!');
    console.log('The user is correct.');
    fxnCounter();
  } else {
    alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
    console.log('The user is not following instructions :(');
  }
}

secondQuestion();

function thirdQuestion() {
/* Third Question */
  var meatAnswer = prompt('Is beef my favorite meat?');
  meatAnswer = meatAnswer.toUpperCase();

  if (meatAnswer === 'YES' || meatAnswer === 'Y') {
    alert('Nah it used to be, but pork is where it\'s at!');
    console.log('The user does not know my favorite meat :(');
  } else if (meatAnswer === 'NO' || meatAnswer === 'N') {
    alert('Right on! You might just know a thing or two.');
    console.log('The user is correct');
    fxnCounter();
  } else {
    alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
    console.log('The user is not following instructions :(');
  }
}
thirdQuestion();

function fourthQuestion() {
/* Fourth Question */
  var webAnswer = prompt('Will I build the raddest site ever oneday???');

  webAnswer = webAnswer.toUpperCase();

  if (webAnswer === 'YES' || webAnswer === 'Y') {
    alert('Of course! Im sure this page is a good indicator ;)');
    console.log('The user is correct and aware of my web development abilities.');
    fxnCounter();
  } else if (webAnswer === 'NO' || webAnswer === 'N') {
    alert('No?! are you seeing this page. Its pretty good right?');
    console.log('The user is clearly wrong.');
  } else {
    alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
    console.log('The user is not following instructions :(');
  }
}

fourthQuestion();

function fifthQuestion() {
/* Fifth Question */
  var smokeAnswer = prompt('Am I going to take a smoke break after you answer this last question?');

  smokeAnswer = smokeAnswer.toUpperCase();

  if (smokeAnswer === 'YES' || smokeAnswer === 'Y') {
    alert('No I can\'t :( Thanks for reminding me that I\'m trapped inside of a computer. Nevertheless, I appreciate you taking the time to talk with me');
    console.log('The user is incorrect.');
  } else if (smokeAnswer === 'NO' || smokeAnswer === 'N') {
    alert('Sadly you are correct :-( unfortunately I am stuck inside of a computer. Thanks for taking the time to chat with me.');
    console.log('The user is correct.');
    fxnCounter();
  } else {
    alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
    console.log('The user is not following instructions :(');
  }
}

fifthQuestion();

//random number question

var randomNum = Math.floor(Math.random() * 11);

console.log('This is how many cups I\'ve had today: ' + randomNum);

var userGuess = prompt('Can you guess how many cups of cofee I\'ve had today? I\'ll give you a hint. Its between 0 and 10, and I\'ll give you four tries. Good luck! ');

userGuess = Number(userGuess);

for(var i = 0; i < 4; i++) {
  if (userGuess === randomNum) {
    console.log('The user has guessed correctly. The loop should stop');
    alert('You\'re right!');
    i = 4; //this should stop the loop from running after they guess correctly
    counter++;
  }
  else {
    console.log('The user\'s guess is wrong.');
    if (userGuess > randomNum) {
      alert('Sorry your guess was to high.');
    } else {
      alert('Sorry your guess was too low.');
    }

    var tries = 3 - i; //this variable will be used to inform user of how many tries they have left.
    tries = tries.toString();

    if (i < 2) {
      userGuess = prompt('Guess again! You have ' + tries + ' more tries.');
    } else if (i === 2) {
      userGuess = prompt('Guess again! This is your last chance...');
    } else {
      alert('Too bad :-(. You are all out of guesses.');
    }
    userGuess = Number(userGuess);
    console.log('The user\'s new guess is: ', userGuess);
  }
}

// Array question
var states = ['north carolina', 'iowa', 'california', 'nc', 'ia', 'ca'];


userGuess = prompt('What states have I lived in other than Oregon? I\'ll give you six tries to guess (also feel free to use abreviations)!');

console.log('The user has guessed:' + userGuess);

for(var j = 0; j < 6; j++){
  userGuess = userGuess.toLowerCase();
  console.log(userGuess);
  for( i = 0; i < states.length; i++) {
    if (userGuess === states[i]) {
      console.log('The user is correct');
      alert('Correct! I have lived in: North Carolina, Iowa, and California.');
      i = states.length;
      j = 6;
      counter++;
    }
  }
  console.log('The user is incorrect');
  if(j < 4){
    tries = 5 - j;
    tries = tries.toString();
    userGuess = prompt('Good try! Guess again. You have ' + tries + ' more guesses.' );
    console.log('The user has guessed:' + userGuess);
  } else if(j === 4) {
    userGuess = prompt('Nice try! I\'ll give you one more.');
    console.log('The user has guessed:' + userGuess);
  } else if(j === 5) {
    alert('Sorry, you are all out of guesses.');
  }
}


var score = (counter / 7) * 100;
score = score.toString();
if (counter >= 4) {
  alert('You did great! I would be happy to call you a friend :-). You scored ' + score + '%');
  console.log('The user did well answering the questions. Their score is ' + score);
} else {
  alert('You did poorly. You scored ' + score + '%. Please leave my page :-(');
  console.log('The user did poorly answering the questions. Their score is  ' + score + '%');
}
