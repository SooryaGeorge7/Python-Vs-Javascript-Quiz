let playButton = document.getElementById('start-game');
let userName = document.getElementById('username');
let homePage = document.getElementById('home-page');
let gamePage = document.getElementById('game-page');
let validationMessage = document.getElementById('validation');
let gameoverPage = document.getElementById('gameover-area');
let questionArea = document.getElementById('questions');
let python = document.getElementById('python');
let javaScript = document.getElementById('javascript');

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
 let timer = document.getElementById('timer');
 let questionsLeft = document.getElementById('question-remaining');
 
 let userscore = 0;
 let qNumber = 1;
 let qLeft = 10;
 let currentIndex = 0;
 
 function playGame() {
    gamePage.style.display = "block";
    homePage.style.display = "none";
    displayQuestions(questions[currentIndex]);
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText= qLeft;
}
