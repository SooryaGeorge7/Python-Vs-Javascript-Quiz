// Username Validation
const userName = document.getElementById('username');
const validationMessage = document.getElementById('validation');

//Different sections in game
const homePage = document.getElementById('home-page');
const gamePage = document.getElementById('game-page');
const gameoverPage = document.getElementById('gameover-area');
const howToplay = document.getElementById('how-to-play');

//Buttons
const howTo = document.getElementById('how');
const playButton = document.getElementById('start-game');

//Game page questions
const questionArea = document.getElementById('questions');

//Answer Button
const ansButton = document.getElementsByClassName('answer');

//Game starts with display of timer,first question, remaining questions, and score 
const questionNumber =document.getElementById('question-number');
const score = document.getElementById('your-score');
const questionsLeft = document.getElementById('question-remaining');
const timer = document.getElementById('timer');

//Div that shows if time has run out.
const noTime = document.getElementById('no-time-left');

//Game over page that will show user's performance
const showScores = document.getElementById('show-score');
const performances = document.getElementById('performance');

//Function that displays the page that shows you how to play
function howtoPlay(){
    howToplay.style.display = "block";
    homePage.style.display = "none";
}

//Event listener for How to play button
howTo.addEventListener('click', howtoPlay);

//Validate username using variables
const usernameLength = "*Please enter a name longer than 2 charectors*";
const checkSpace = "*Please enter a name with no spaces*";

//Function to validate username
//Learnt to use index of to check for blank spaces https://www.w3schools.com/jsref/jsref_indexof.asp
//Learnt that i had to convert intergers herehttps://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
function validateMessage() {
    if(userName.value.length <= parseInt(2)) {
        validationMessage.innerHTML = usernameLength;
    }
    else if (userName.value.indexOf(" ") >= 0) {
        validationMessage.innerHTML = checkSpace;
    }
    else {
        playGame();
    }

}

//Event listener for play button
playButton.addEventListener('click', validateMessage);


//Used https://sebhastian.com/fisher-yates-shuffle-javascript/ to learn to randomize objects in array using while loop.
let i = questions.length;
 while (--i > 0){
    let randomI = Math.floor(Math.random() * (i+1));
    [questions[randomI], questions[i]] = [questions[i], questions[randomI]];
 }

 //Define variables for only returning 1/3rd of array 
let maxTen; 
let slicedQuestions;

//Since questions array has 30 object, it can be divided by 3.
maxTen = Math.ceil(questions.length / 3);

//This is the new array that contains 10 questions
slicedQuestions = questions.slice(0, maxTen);


 // Starting values for start of game
 let userscore = 0;
 let qNumber = 1;
 let qLeft = 10;
 let currentIndex = 0;
 let counting;

 /**Function for game  which displays game page, and hides home page.
  *It calls a function to display questions, countdown , and displays the starting value for score container in game page
  *Learnt how to start a countdown using setInterval here https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript*/
 function playGame() {
    gamePage.style.display = "flex";
    homePage.style.display = "none";
    displayQuestions(slicedQuestions[currentIndex]);
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText= qLeft;
    counting = setInterval(countDown,1000);
    countDown();
}


//Function that takes in the array and displays question and answer choices.
function displayQuestions(question) {
    questionArea.innerText = question.question;
    
}

//Define the button you choose as your answer as variable.
let answerSelected;

/**Create checkAnswer function that takes in the action of
 *  "click" eevent on either answer choices and then checks if the answer selected was infact the correct answer.*/
//Learnt to do event target correctly here https://www.w3schools.com/jsref/event_target.asp
function checkAnswer(event) {
    answerSelected = event.currentTarget.getAttribute("id");
    let selected = event.currentTarget.innerText;
    let rightAnswer = slicedQuestions[currentIndex].correct;
    /**Use if and else statements to turn selected answer to either shade of red or green by 
     * adding css from stylesheet using classList.add()*/
    //Learnt how to change color or styles for only few seconds or a second here:https://stackoverflow.com/questions/5600351/javascript-change-css-color-for-5-seconds
    if (selected === rightAnswer){
        document.getElementById(answerSelected).classList.add("correctbtn");
        gamePage.classList.add("correct-shadow");
        setTimeout(function(){
            document.getElementById(answerSelected).classList.remove("correctbtn");
            gamePage.classList.remove("correct-shadow");
            //used -- or ++ to either increase(scores, number) value of variables or descrease(for remaining questions)
            questionsLeft.innerText= --qLeft;
            questionNumber.innerText = ++qNumber;
            score.innerText = ++userscore;
            nextQuestion();
        }, 1000);
        //Current index needs to increase with every question inorder to display next question in array    
        currentIndex++;      
    } else {
        document.getElementById(answerSelected).classList.add("incorrectbtn");
        gamePage.classList.add("incorrect-shadow");
        setTimeout(function(){
            document.getElementById(answerSelected).classList.remove("incorrectbtn");
            gamePage.classList.remove("incorrect-shadow");
            questionsLeft.innerText= --qLeft;
            questionNumber.innerText = ++qNumber;
            nextQuestion();
       }, 1000);
       currentIndex++;
    }  
}

//Using Event listener for answer buttons. 
//Learnt how to do this for classes here : https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for (let i = 0; i < ansButton.length; i++) {
    ansButton[i].addEventListener('click', checkAnswer);
}

//Function that calls out function that displays object from questions array.
function nextQuestion() {
    //If current index +1 is longer than the array length, game stops and this function calls out the function that displays gameover page.
    if (currentIndex + 1 > slicedQuestions.length) {
        gameOver();
        //Learnt to stop countdown interval here: https://www.w3schools.com/jsref/met_win_clearinterval.asp
        clearInterval(counting);
    }else {
        displayQuestions(slicedQuestions[currentIndex]);
    }
}

//Function that displays game over page and calls out showScore function
function gameOver() {
    gamePage.style.display = "none";
    gameoverPage.style.display = "flex";
    showScore();
}

//Define variables for countdown function
let secsLeft = 60;
const noTimeleft = "Sorry, You've run out of time!";

// This function decreases secsLeft value as countdown timer starts. When value decreases to 0 or less, It calls out gameOver() and noTime div displays message.
function countDown() {
    timer.innerText = --secsLeft;
    if (secsLeft <= 0) {
        gameOver();
        noTime.innerHTML = noTimeleft;
    }
}

//This function shows user's score and also displays a performance message to user depending on score.
function showScore() {
    showScores.innerHTML = `Your Score: ${userscore}/10`;
    if (userscore == 10) {
        performances.innerHTML = `Congratulations! You really know your stuff ${userName.value}!`;
    }else if (userscore >= 7){
        performances.innerHTML = `Well done ${userName.value}! This is a good score but there is still room for improvement`;
    }else if (userscore < 7, userscore >= 5){
        performances.innerHTML = `${userName.value}, You've just passed but you can definetly do better! `;
    }else {
        performances.innerHTML = `Oh no, someone needs to revise their notes!Try again ${userName.value}? `;
    }
}