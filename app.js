'use strict';

alert('Hi! My name is Will. Please take a moment to read the directions on my page :-).');

var counter = 0; /* This var will tally the user's score */

/* First Question */
var anotherCupAnswer = prompt('Would you like another cup of coffee (yes or no)?');
anotherCupAnswer = anotherCupAnswer.toUpperCase();

if (anotherCupAnswer === 'YES' || anotherCupAnswer === 'Y') {
  alert('Good descision! You\'ll need one because there are still more questions to come...');
  console.log(anotherCupAnswer + ', the user would like another cup.');
  counter++;
} else if (anotherCupAnswer === 'NO' || anotherCupAnswer === 'N') {
  alert('Ewww wrong answer, you still have four more questions.');
  console.log('The user does not want another cup :(');
} else {
  alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
  console.log('The user is not following instructions :(');
}

/* Second Question */
var treeAnswer = prompt('If a tree falls in a forest and I\'m not around to hear it, does it still make a sound?');

treeAnswer = treeAnswer.toUpperCase();

if (treeAnswer === 'YES' || treeAnswer === 'Y') {
  alert('No that\'s absurd! How could it make a sound if I\'m not arround to hear it.');
  console.log('The user is incorrect');
} else if (treeAnswer === 'NO' || treeAnswer === 'N') {
  alert('You are correct!');
  console.log('The user is correct.');
  counter++;
} else {
  alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
  console.log('The user is not following instructions :(');
}

/* Third Question */
var meatAnswer = prompt('Is beef my favorite meat?');
meatAnswer = meatAnswer.toUpperCase();

if (meatAnswer === 'YES' || meatAnswer === 'Y') {
  alert('Nah it used to be, but pork is where it\'s at!');
  console.log('The user does not know my favorite meat :(');
} else if (meatAnswer === 'NO' || meatAnswer === 'N') {
  alert('Right on! You might just know a thing or two.');
  console.log('The user is correct');
  counter++;
} else {
  alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
  console.log('The user is not following instructions :(');
}

/* Fourth Question */
var webAnswer = prompt('Will I build the raddest site ever oneday???');

webAnswer = webAnswer.toUpperCase();

if (webAnswer === 'YES' || webAnswer === 'Y') {
  alert('Of course! Im sure this page is a good indicator ;)');
  console.log('The user is correct and aware of my web development abilities.');
  counter++;
} else if (webAnswer === 'NO' || webAnswer === 'N') {
  alert('No?! are you seeing this page. Its pretty good right?');
  console.log('The user is clearly wrong.');
} else {
  alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
  console.log('The user is not following instructions :(');
}

/* Fifth Question */
var smokeAnswer = prompt('Am I going to take a smoke break after you answer this last question?');

smokeAnswer = smokeAnswer.toUpperCase();

if (smokeAnswer === 'YES' || smokeAnswer === 'Y') {
  alert('No I can\'t :( Thanks for reminding me that I\'m trapped inside of a computer. Nevertheless, I appreciate you taking the time to talk with me');
  console.log('The user is incorrect.');
} else if (smokeAnswer === 'NO' || smokeAnswer === 'N') {
  alert('Sadly you are correct :-( unfortunately I am stuck inside of a computer. Thanks for taking the time to chat with me.');
  console.log('The user is correct.');
  counter++;
} else {
  alert('I don\'t understand your answer and don\'t have time for someone who doesn\'t bother to read instructions');
  console.log('The user is not following instructions :(');
}

var score = counter / 5;
if (counter >= 3) {
  alert('You did great! I would be happy to call you a friend :-).');
  console.log('The user did well answering the questions. Their score is ' + score);
} else {
  alert('You did poorly. Please leave my page :-(');
  console.log('The user did poorly answering the questions. Their score is  ' + score);
}
