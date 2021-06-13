class Question {
  constructor(question, correct, a, b, c, d) {
    this.question = question;
    this.choices = {
      a: a,
      b: b,
      c: c,
      d: d
    };
    this.correctChoice = correct;
  }
}

const question1 = new Question(
  'Before basketballs were invented in 1929, what kind of ball did peole use to play basketball with?',
  'a',
  'Footballs',
  'Tennis balls',
  'Rugby balls',
  'Snooker balls'
);
console.log(question1);

const question2 = new Question(
  'This guy scored the most playoff points ever, and is one of the all-time greatest players. What is his name?',
  'b',
  'Jordan Michael',
  'Michael Jordan',
  'Mike Geordie',
  'Michelle McJordan'
);
console.log(question2);

const question3 = new Question(
  'How many people are on a basketball team at once?',
  'a',
  '5',
  '7',
  '8',
  '12'
);
console.log(question3);

const question4 = new Question(
  'Which of these is a slang for playing basketball?',
  'a',
  'Shoot some hoops',
  'Blast some rings',
  'Chuck some balls',
  'Sink some oranges'
);
console.log(question4);

const question5 = new Question(
  'What is the name of Chicagos NBA team?',
  'd',
  'Demons',
  'Stags',
  'Bison',
  'Bulls'
);
console.log(question5);

const question6 = new Question(
  'What team won the very first NBA game?',
  'd',
  'Philadelphia warrior',
  'Toronto Huskies',
  'Chicago Stags',
  'New York Knicks'
);
console.log(question6);

const question7 = new Question(
  'Who was the youngest player to score 10,000 points in the NBA?',
  'a',
  'Lebron James',
  'Kobe Bryant',
  'Wilt Chamberlain',
  'Michael Jordan'
);
console.log(question7);

const question8 = new Question(
  'Which NBA player was nicknamed after a rifle?',
  'a',
  'Andrei Kirilenko',
  'Dirk Nowitzki',
  'Dikembe Mutombo',
  'Giannis Antetokounmpo'
);
console.log(question8);

const question9 = new Question(
  'Who was the oldest player to score 50+ points in a game?',
  'b',
  'Michael Jordan',
  'Jamal Crawford',
  'Grant Hill',
  'Steve Nash'
);
console.log(question9);

const question10 = new Question(
  'Who was the first player in NBA history to make 400 three-pointers in a season?',
  'b',
  'Dennis Scott',
  'Stephen Curry',
  'Ray Allen',
  'James Harden'
);
console.log(question10);

const question11 = new Question(
  'Who is the famouse Russian NBA player?',
  'b',
  'Andrey Arshavin',
  'Andrey Kirilenko',
  'Roman Abramovich',
  'Aleksandr Ovechkin'
);
console.log(question11);

const question12 = new Question(
  'What NBA player has won the most league MVPs?',
  'd',
  'Lebron James',
  'Stephen Curry',
  'Michael Jordan',
  'Kareem Abdul-Jabbar'
);
console.log(question12);

const question13 = new Question(
  'Which NBA team plays at Madison Square Garden?',
  'd',
  'Golden State Warriors',
  'Brooklyn Nets',
  'Miami Heat',
  'New York Knicks'
);
console.log(question13);

const question14 = new Question(
  'How many NBA championships did the Lakers win during the 1960s?',
  'a',
  '0',
  '2',
  '4',
  '6'
);
console.log(question14);

const question15 = new Question(
  'What unfortunate NBA record do the Brooklyn Nets hold?',
  'a',
  'fewest rebounds in a game',
  'fewest steals in a game',
  'fewest field goals in a game',
  'fewest assists in a game'
);
console.log(question15);

const question16 = new Question(
  'Which player was nicknamed Black Mamba?',
  'b',
  'Ron Artest',
  'Kobe Bryant',
  'Allen Iverson',
  'Shawn Marion'
);
console.log(question16);

const questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16
];

// global varialbles
const quizContainer = document.querySelector('.quiz-container');

// question objects. reference to HTML
//const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
// const randomQuestionNumber = currentQuestion
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreKeeper = document.getElementById('score');
const brooklynNets = document.querySelector('#brooklynNets');
const newYorkKnicks = document.querySelector('#newYorkKnicks');

// const showGameResults =document.getElementById('results');
// const submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', showGameResults);
const previousQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let globalRandom = 0;
let currentQuestionNumber = 0;
let score = 18;
let breaker = false;

// clock timer
// const count = 20;
// const interval = setInterval(myTimer, 1000);
//event listeners
//startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
brooklynNets.addEventListener('click', function(){
  brooklynNets.classList.add('hide')
  newYorkKnicks.classList.add('hide')
  console.log('clicked brooklynNets, start game' )
  startGame();
})

newYorkKnicks.addEventListener('click', function(){
  newYorkKnicks.classList.add('hide')
  brooklynNets.classList.add('hide')
  console.log('clicked newYorkKnicks, start game')
  startGame();
  /// here logic to start game
})

// functions start,select
function startGame() {
  console.log('started');
  //startButton.classList.add('hide');
  //questionContainerElement.classList.remove('hide'); // remove hide?
  showQuestion(questionArray);
  //generateNextQuestion();
}
//questionContainerElement.classList.remove('hide');
//questionContainerElement.classList.add('hide');

// function to show Questions
function showQuestion(questions) {
  let random = Math.floor(Math.random() * questions.length); // random # from 0 to 15
  questionElement.innerText = questions[random].question; // here  we generate first random question
  for (const [key, value] of Object.entries(questions[random].choices)) {
    const button = document.createElement('button');
    questionContainerElement.appendChild(button);
    button.innerText = value;
    button.setAttribute('data-correctChoice', questions[random].correctChoice);
    button.setAttribute('data-choiceOption', key);
    button.addEventListener('click', selectAnswer);
  }
  //  keepeng track of current numbers to fill the array of used numbers
  currentQuestionNumber = random;
  // filling the array of used numbers
  globalRandom = random;
  previousQuestions.push(currentQuestionNumber);
  scoreKeeper.innerText = 'Score: ' + score;

  // if (previousQuestions.length < questionArray.length) {
  // console.log('gogogo');
  // nextButton.addEventListener(
  //   'click',
  //   generateNextQuestion(questions, previousQuestions, random)
  //   // true
  // );
  // }
  //
  // calling the next button
  //console.log(currentQuestionNumber);
  //
}

function nextQuestion() {

  //questionContainerElement.classList.add('hide');
  breaker = false;
  generateNextQuestion(questionArray, previousQuestions, globalRandom);
}

function endGame(score){
  if(score === 21 ){
    nextButton.classList.add('hide');
    quizContainer.classList.add('hide'); // removing the button next
    const win = document.getElementById('winImage');// showing image
    win.src = "https://media.giphy.com/media/xT4uQfHn1CUGyYsiiY/source.gif";
    console.log('YOU WON!!!');
  }
  else if(previousQuestions.length === 16){
    nextButton.classList.add('hide');
    quizContainer.classList.add('hide'); // removing the button next
    const lost = document.getElementById('lostImage');// showing image
    lost.src = "https://media.giphy.com/media/SZo24vtpoBTWw/source.gif"
    console.log('YOU LOST!!!');
  }
}

// function of random questions
function generateNextQuestion(questions, previousQuestions, random) {
  if (previousQuestions.length >= 1) {
    resetState();
    console.log('the question number after click start', currentQuestionNumber);
    // looping untill we get a distinct number
    while (previousQuestions.includes(random)) {
      random = Math.floor(Math.random() * questions.length);
    }
    console.log('the random number now is: ', currentQuestionNumber);
    questionElement.innerText = questions[random].question; // here we generate random question after first
    for (const [key, value] of Object.entries(questions[random].choices)) {
      const button = document.createElement('button');
      questionContainerElement.appendChild(button);
      button.innerText = value;
      button.setAttribute(
        'data-correctChoice',
        questions[random].correctChoice
      ); // new
      button.setAttribute('data-choiceOption', key);
      button.addEventListener('click', selectAnswer);
    }
    currentQuestionNumber = random;
    console.log('test: current question number now is : ', currentQuestionNumber);
    previousQuestions.push(currentQuestionNumber);
    console.log('test: prevQarr size now is  : ', previousQuestions.length);
    //if (button.innerText == value) button.classList.add('hide');
  }
  //globalRandom = random;
console.log("please press start");
}


function resetState() {
  //clearStatusClass(document.body)
  //nextButton.classList.add('hide');
  while (questionContainerElement.firstChild) {
    questionContainerElement.removeChild(
      questionContainerElement.childNodes[0]
    );
  }
}

function selectAnswer(e) {
  console.log(' im in select answer');
  const selectedButton = e.target;
  const selectedChoice = selectedButton.getAttribute('data-choiceOption');
  const correct = selectedButton.getAttribute('data-correctChoice');
  console.log('the chocie you selected is: ', selectedChoice); // log the selected letter
  console.log('the correct choice is : ', correct); // log the correct letter
  // this function should change the color of the page if depending on whether the answer is correct
  if (breaker === false) {
    setStatusClass(selectedButton, correct, selectedChoice);
  }
  breaker = true;
  endGame(score);
  // Array.from(answerButtonsElement.children).forEach(button => {
  //   setStatusClass(button, button.dataset.correct);
  // });
  // if (randomQuestionNumber.length > currentQuestionNumber + 1) {
  //   nextButton.classList.remove('hide')
  // } else {
  //   startButton.innerText = "Restart"
  //   startButton.classList.remove('hide')
  // }
}

function setStatusClass(element, corr, sel) {
  if (corr === sel) {
    element.style.backgroundColor = 'green';
    score = score + 3;
    scoreKeeper.innerText = 'Score: ' + score;
    console.log(score);
    //element.classList.remove('wrong');
  } else {
    element.style.backgroundColor = 'red';
    //element.classList.remove('correct');
  }


  function myTimer(){
    document.getElementById('count').innerHTML= sec + 'sec left';
    count--;
    if (count === -1){
      stopInterval(interval);
    alert('You are out of time!');
  }
}

}


//keep track of players answers
// let playerAnswer = '';
// let numCorrect = 0;
//
// //
// for (var i=0; i<questions.length; i++)
//


//
// // if answer is incorrect// gameOver
// function gameOver(){
//   if (currentScore =< 21) {
//     console.log('currentScore');
//     alert('gameOver');
//   }
// }
//
//
// clock timer
// var count = 20;
// var interval = setInterval(myTimer, 1000);

//   function myTimer(){
//     document.getElementById('count').innerHTML= sec + 'sec left';
//     count--;
//     if (count === -1){
//       stopInterval(interval);
//     alert('You are out of time!');
//   }
// }
//

// // restart game
// function restartGame(){
//
// }
//
//

// //play background music
// function playMusic(LineEvent event){
//   LineEvent.Type type = event.getType();
//   if (type == LineEvent.Type.Start){
//     system.out.printIn('playback started');
//   } else if (type == LineEvent.Type.Stop){
//     playCompleted = true;
//     System.out.printIn('Playback completed');
//   }
// }
//

//
// function endGame(){
//   gameStop();
// }
