let playButton = document.getElementById('start-game');
let userName = document.getElementById('username');
let homePage = document.getElementById('home-page');
let gamePage = document.getElementById('game-page');
let validationMessage = document.getElementById('validation');
let gameoverPage = document.getElementById('gameover-area');
let questionArea = document.getElementById('questions');
let python = document.getElementById('python');
let javaScript = document.getElementById('javascript');

let howToplay = document.getElementById('how-to-play');

function howtoPlay(){
    howToplay.style.display = "block";
    homePage.style.display = "none";

}
//Validate username
let usernameLength = "*Please enter a name longer than 2 charectors*";
let checkSpace = "Please enter a name with no spaces";
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

 //game starts with timer and first question
 let questionNumber =document.getElementById('question-number');
 let score = document.getElementById('your-score');
 
 let questionsLeft = document.getElementById('question-remaining');
 
 let userscore = 0;
 let qNumber = 1;
 let qLeft = 10;
 let currentIndex = 0;
 let counting;

 function playGame() {
    gamePage.style.display = "block";
    homePage.style.display = "none";
    displayQuestions(slicedQuestions[currentIndex]);
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText= qLeft;
    counting = setInterval(countDown,1000);
    countDown();
}
let i = questions.length;
 while (--i > 0){
    let randomI = Math.floor(Math.random() * (i+1));
    [questions[randomI], questions[i]] = [questions[i], questions[randomI]];
 }
 //console.log(questions);
let m; 
let slicedQuestions;
 
m = Math.ceil(questions.length / 3);
slicedQuestions = questions.slice(0, m);
console.log(slicedQuestions[currentIndex]);

function displayQuestions(question) {
    questionArea.innerText = question.question;
    python.innerText = question.choice[0];
    javaScript.innerText = question.choice[1];
    
}

let gamepage = document.getElementById('game-page');
function checkAnswer(event) {
    answerSelected = event.target;
    let selected = answerSelected.innerText;
    let rightAnswer = slicedQuestions[currentIndex].correct;
    if (selected === rightAnswer){
        answerSelected.style.background= "#226F54";
        //gamepage.style.border = "0.5rem solid #226F54";
        setTimeout(function(){
            answerSelected.style.background = "#faf9f6";
            score.innerText = ++userscore;
            currentIndex++;
            questionsLeft.innerText= --qLeft;
            questionNumber.innerText = ++qNumber;
            nextQuestion()
        }, 1000);
        
        
    } else {
        answerSelected.style.background= "#E04C4C";
        //gamepage.style.border = "0.5rem solid #E04C4C";
        setTimeout(function(){
            answerSelected.style.background = "#faf9f6";
            currentIndex++;
            questionsLeft.innerText= --qLeft;
            questionNumber.innerText = ++qNumber;
            nextQuestion()
       }, 1000);
       
    }
    
    

}
let ansButton = document.getElementsByClassName('answer');
for (let i = 0; i < ansButton.length; i++) {
    ansButton[i].addEventListener('click', checkAnswer);
    
    
}
function nextQuestion() {
    if (currentIndex + 1 > slicedQuestions.length) {
        gameOver();
        
    }else {
        displayQuestions(slicedQuestions[currentIndex]);
        
    }
}

function gameOver() {
    gamePage.style.display = "none";
    gameoverPage.style.display = "block";
    
}
let timer = document.getElementById('timer');
let noTime = document.getElementById('no-time-left');
let secsLeft = 40;

let noTimeleft = "Sorry, You've run out of time!";
function countDown() {
    timer.innerText = --secsLeft;
    if (secsLeft <= 0) {
        gameOver();
        noTime.innerHTML = noTimeleft;
    }
}