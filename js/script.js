// global varialbles
const questionContainer = document.querySelector('.question');

// question objects. reference to HTML
const body = document.querySelector('body');
// const modal = document.querySelector('.modal');
// const carousel = document.querySelector('.carousel');
// const carouselImg = document.querySelector('carouselImg');
const startButton = document.getElementById('start-btn');
// const nextButton = document.querySelector('.carousel .next-btn');
// const select = document.querySelector('.carousel .select');
const restartButton = document.getElementById('restart');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const userScore = document.getElementById('user-score');
// const showGameResults =document.getElementById('results');
// const submitButton = document.getElementById('submit');

class Question {
  constructor(question, correct, a, b, c, d ){
    this.question = question
    this.choices = {
      a: a,
      b: b,
      c: c,
      d: d
    };
    this.correctChoice = correct
  }
}


const question1 = new Question (
  'Before basketballs were invented in 1929, what kind of ball did peole use to play basketball with?',
  'a',
  'Footballs',
  'Tennis balls',
  'Rugby balls',
  'Snooker balls',
);
console.log(question1);



const question2 = new Question (
  'This guy scored the most playoff points ever, and is one of the all-time greatest players. What is his name?',
  'b',
  'Jordan Michael',
  'Michael Jordan',
  'Mike Geordie',
  'Michelle McJordan',
);
console.log(question2);

const question3 = new Question (
  'How many people are on a basketball team at once?',
  'a',
  '5',
  '7',
  '8',
  '12',
);
console.log(question3);

const question4 = new Question (
  'Which of these is a slang for playing basketball?',
  'a',
  'Shoot some hoops',
  'Blast some rings',
  'Chuck some balls',
  'Sink some oranges',
);
console.log(question4);

const question5 = new Question (
  'What is the name of Chicagos NBA team?',
  'd',
  'Demons',
  'Stags',
  'Bison',
  'Bulls',
);
console.log(question5);


const question6 = new Question (
  'What team won the very first NBA game?',
  'd',
  'Philadelphia warrior',
  'Toronto Huskies',
  'Chicago Stags',
  'New York Knicks',
);
console.log(question6);


const question7 = new Question (
  'Who was the youngest player to score 10,000 points in the NBA?',
  'a',
  'Lebron James',
  'Kobe Bryant',
  'Wilt Chamberlain',
  'Michael Jordan',
);
console.log(question7);


 const question8 = new Question(
   'Which NBA player was nicknamed after a rifle?',
   'a',
   'Andrei Kirilenko',
   'Dirk Nowitzki',
   'Dikembe Mutombo',
   'Giannis Antetokounmpo',
 );
 console.log(question8);


 const question9 = new Question (
   'Who was the oldest player to score 50+ points in a game?',
   'b',
   'Michael Jordan',
   'Jamal Crawford',
   'Grant Hill',
   'Steve Nash',
 );
 console.log(question9);

const question10 = new Question(
  'Who was the first player in NBA history to make 400 three-pointers in a season?',
  'b',
  'Dennis Scott',
  'Stephen Curry',
  'Ray Allen',
  'James Harden',
);
console.log(question10);


const question11 = new Question(
  'Who is the famouse Russian NBA player?',
  'b',
  'Andrey Arshavin',
  'Andrey Kirilenko',
  'Roman Abramovich',
  'Aleksandr Ovechkin',
);
console.log(question11);

const question12 = new Question(
  'What NBA player has won the most league MVPs?',
  'd',
  'Lebron James',
  'Stephen Curry',
  'Michael Jordan',
  'Kareem Abdul-Jabbar',
);
console.log(question12);

const question13 = new Question(
  'Which NBA team plays at Madison Square Garden?',
  'd',
  'Golden State Warriors',
  'Brooklyn Nets',
  'Miami Heat',
  'New York Knicks',
);
console.log(question13);


const question14 = new Question(
  'How many NBA championships did the Lakers win during the 1960s?',
  'a',
  '0',
  '2',
  '4',
  '6',
);
console.log(question14);


const question15 = new Question(
  'What unfortunate NBA record do the Brooklyn Nets hold?',
  'a',
  'fewest rebounds in a game',
  'fewest steals in a game',
  'fewest field goals in a game',
  'fewest assists in a game',
);
console.log(question15);


const question16 = new Question(
  'Which player was nicknamed Black Mamba?',
  'b',
  'Ron Artest',
  'Kobe Bryant',
  'Allen Iverson',
  'Shawn Marion',
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
  question16,
];



// const backgroundImage = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/774px-Brooklyn_Nets_newlogo.svg.png",
//
//   "https://www.kindpng.com/picc/m/409-4095405_transparent-new-york-knicks-png-new-york-knicks.png"
//
// ]
//
// let currentSlide = 0;

// functions start,select
// const toggleModal = () => modal.classList.toggle('open');
//
// const changeSlide = (direction) => {
//   if (direction === 'next'){
//     if (currentSlide < backgroundImage.length - 1) {
//       currentSlide++
//     } else {
//       alert('going back to the first slide')
//       currentSlide = 0;
//     }
//   }
//   else if (direction === 'previous'){
//     if (currentSlide > 0){
//       currentSlide--
//     } else {
//       alert('going back to the last slide')
//       currentSlide = backgroundImage.length - 1;
//     }
//   }
//   carouselImg.setAttribute('src', backgroundImage[currentSlide]);
// }
//
// const openCarousel = () => {
//   carousel.classList.add('open');
//   carouselImg.setAttribute("src", backgroundImage[currentSlide]);
//   toggleModal();
// }
//
// const selectBackground = () => {
//   carousel.classList.remove('open');
//   body.style.backgroundImage = `url(${backgroundImage[currentSlide]})`;
//   startGame();
// }

function startGame(){
  console.log('started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  // generateNextQuestion()
showQuestion(questionArray);
}

// function to show Questions
function showQuestion(questions){
  let first = Math.floor(Math.random() * questions.length);// random #
  questionElement.innerText =questions[first].question;
  for(const [key, value] of Object.entries(questions[first].choices)){
    const button = document.createElement('button');
        document.body.appendChild(button)
        button.innerText = value;
        button.setAttribute("data-correctChoice", questions[first].correctChoice)
        button.addEventListener('click', selectAnswer);
  }

// next button
// function next(){
//   concole.log(generateNextQuestion())
//   nextButton.classList.add('hide')
//   questionContainerElement.classList.remote()
// }

// const BrooklynNets = document.querySelector('#BrooklynNetsImage')
// const NewYorkKnicks = document.querySelector('#NewYorkKnicksImage')
// BrooklynNets.addEventListener('click', function(){
//   BrooklynNets.classList.add('hidden')
//   console.log('clicked BrooklynNetsImage, start game' )
//   startGame();
// })
//
// BrooklynNets.addEventListener('click', function(){
//   BrooklynNets.classList.add('hidden')
//   console.log('clicked NewYorkKnicksImage, start game')
//   startGame();
//   /// here logic to start game
// })

// function of random questions
function generateNextQuestion(){
const previousQuestions = [];
let randomQuestionNumber = math.floor(Math.random() * question.Array.length);
while (previousQuestions.includes(randomQuestionNumber)){
 let randomQuestionNumber = math.floor(Math.random() * question.Array.length);
}
let currentQuestionNumber =randomQuestionNumber;
previousQuestions.push(currentQuestionNumber)
}



  //   if (answer.correct){
  //     button.dataset.correct = answer.correct
  //   }
  //   button.addEventListener('click', selectAnswer);
  //   answerButtonsElement.appendChild(button);
  // });
};

// if answer is correct
// if(playerAnswer === currentQuestion.currentAnswer){
//   numCorrect+++
//   }
// // // color the answer green
// answer[questionNumber].style.color = 'green';
//
// // // if answer is wrong
// else{
//   answer[questionNumber].style.color = 'red';
// }
// }
// });

// }
// ?? if statenet in if answe is correct --- chtobi piemnyalo tsvet na green ili red
// ?? varianti otvetov chtobi rabotali
// ??next button
// ??start buttons
// ??


function selectAnswer(e){
  const selectedButton = e.target
  console.log(selectedButton);
  const correct = selectedButton.dataset
  //const correct = questionArray[1].correctChoice;
  console.log(correct);
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  // if (randomQuestionNumber.length > currentQuestionNumber + 1) {
  //   nextButton.classList.remove('hide')
  // } else {
  //   startButton.innerText = "Restart"
  //   startButton.classList.remove('hide')
  // }
}

// restart game
// function restartGame(){
//   currentQuestion = 0;
// nextButton.classList.remove('hide');
// submitButton.classList.remove('hide');
//   score = 0;
//   startGame();
// }

// //
// function setStatusClass(element, correct){
// //clearStatusClass(element)
//   if (correct){
//     element.classList.add('correct')
//   } else{
//     element.classList.add('wrong')
//   }
// }
// //
//
// const pic1 =
// document.querySelector(".pictures")
//
// const pic2 =
// document.querySelector('#disappear')
//
// pic1.addEventListener('click', function(){
//   pic1.classList.toggle('hidden')
// })


// if you finish player 1 start player 2

// questionField.innerHTML = questionArray[currentQuestionNumber].question;
// questionTracker.push(questionArray[currentQuestionNumber]);
// questionArray.splice(currentQuestionNumber, 1);
//
//  }


//keep track of players answers
// let playerAnswer = '';
// let numCorrect = 0;
//
// //
// for (var i=0; i<questions.length; i++)
//
// // find selected answer
// const answer = answer[questionNumber];
// const selector = 'input[name=question${questionNumber}]: checked';
// const playerAnswer = (answer.querySelector(selector) || {}).value;
//
//
// // if one of the players gets 21 points first => win conditions and finish the game
//
//
//
// //show number of correct answers and total scored
// showGameResults.innerHTML = '${numCorrect} out of ${Questions.length}';
//
//
//
// // function correctChoice (){
// //   if (questionNumber == 1){
// //     current = current +1;
// //     console.log ('current =' +current);
// //     question1();
// //   }
// // if (questionNumber == 2){
// //   current = current +1;
// //   console.log ('current =' +current);
// //   question2();
// // }
// gameOver();
// }
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
// // clock timer
// var count = 20;
// var interval = setInterval(myTimer, 1000);
//
//   function myTimer(){
//     document.getElementById('count').innerHTML= sec + 'sec left';
//     count--;
//     if (count === -1){
//       stopInterval(interval);
//     alert('You are out of time!');
//   }
// }
//
//
// // show score button for player2
//
// //results button
// let showGameResults(player[] players){
//   console.log('Game over!');
//   console.log('Player 1 's: + player[0].points');
//   console.log('Player 2 ' s: + player[1].points );
// }
//


//
// // start game button
// // function startGame(){
// // onEvent('BrooklynNetsImage', "click", function()){
// //   setScreen('Welcome');
// //   music.play();
// //   music.volume = 0.1;
// //   resetTimer();
// //   startTimer();
// //
// // }
// // onEvent('AtlantaHawksImage', "click", function()){
// //   setScreen('Welcome');
// //   music.play();
// //   music.volume = 0.1;
// //   resetTimer();
// //   startTimer();
// // }
// // }
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
// // finish game button
//
// function endGame(){
//   gameStop();
// }


//event listeners
// modalButton.addEventListener('click', toggleModal);
startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => changeSlide("next"));
// select.addEventListener('click', selectBackground);
submitButton.addEventListener('click', submit);

// window.onload = () => {
//   startGame();
// }
// submitButton.addEventListener('click', showGameResults);
