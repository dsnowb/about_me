'use strict'

//set lower bound
var numLow = 0;

//get upper bound
var numHigh = prompt('We\'re going to play a little guessing game about you... about what\'s in your head. Give me some whole number');
numHigh = parseInt(numHigh);

alert('Please think of a number between ' + numLow + ' and ' + numHigh + ' .');

//set max number of prompts
var numQs = 5;
for (var i = 0; i < numQs; ++i) {

  //get input from user
  var answer = prompt('Is the number less than or equal to ' + Math.floor((numHigh+numLow)/2) + '?');
  console.log('answer: ', answer);

  //validate input and adjust bounds
  answer.toLowerCase();
  if (answer==='y' || answer==='yes') numHigh = Math.floor((numHigh+numLow)/2);
  else if (answer==='n' || answer==='no') numLow = Math.floor((numHigh+numLow)/2) + 1;
  else alert('Sorry, that was not a valid answer.');
  console.log('numLow/numHigh: ' + numLow +'/' + numHigh);

  //print result (or failure to obtain result)
  var solved = false;
  var elNumber = document.getElementById('the_number');
  var elResponse = document.getElementById('response');
  if (numLow===numHigh) {
    i = numQs;
    elNumber.textContent = numLow;
    elResponse.textContent = 'Pfft. Easy.';
    solved = true;
  }
  if (i === numQs - 1 && solved===false) {
    elNumber.textContent = '?';
    elResponse.textContent = 'You\'re an enigma!';
  }
}
