'use strict'

//first question
var answer = prompt('Do I like whales? [Y/n]');
console.log('answer: ', answer);
answer=answer.toLowerCase();
if (answer==='y' || answer==='yes') alert('You\'re right!');
else if (answer==='n' || answer==='no') alert('You\'re wrong.');
else alert('Invalid input!');

//second question
answer = prompt('Do I like to *eat* whales? [Y/n]');
console.log('answer #2: ', answer);
answer=answer.toLowerCase();
if (answer==='y' || answer==='yes') alert('You\'re wrong!');
else if (answer==='n' || answer==='no') alert('You\'re right.');
else alert('Invalid input!');

//third question
answer = prompt('Am I a sailor?');
console.log('answer #3: ', answer);
answer=answer.toLowerCase();
if (answer==='y' || answer==='yes') alert('You\'re right!');
else if (answer==='n' || answer==='no') alert('You\'re wrong.');
else alert('Invalid input!');

//fourth question
answer = prompt('Do I like to *eat* sailors?');
console.log('answer #4: ', answer);
answer=answer.toLowerCase();
if (answer==='y' || answer==='yes') alert('You\'re wrong!');
else if (answer==='n' || answer==='no') alert('You\'re right.');
else alert('Invalid input!');

//fifth question
answer = prompt('Do I like bananas? [Y/n]');
console.log('answer #5: ', answer);
answer=answer.toLowerCase();
if (answer==='y' || answer==='yes') alert('You\'re right.');
else if (answer==='n' || answer==='no') alert('Wrooowwng!');
else alert('Invalid input!');
