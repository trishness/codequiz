//create button on html page
//grab button inside query selector in java
//even listener when user clicks
//when click, go to question
//can put questions into html or javascript, java is dom manipulation
//one question, some options to said question
//user click option, is correct or incorrect, compare user choice to correct answer
//for loop over questions to ask multiple questions, can use array
//keep track of indices for arrays for comparison, how to compare arrays????
//timer outside of for loop, so that timer isn't restarting with the loop, same goes for eventlisteners
//create function for timer, run function when user starts quiz
//if user answers incorrectly, deduct time. if/else?

var timer = document.querySelector("#timer");
var main = document.getElementById("main");
var startButton = document.querySelector("#startBtn");
var startDiv = document.querySelector(".startDiv");
var questionsDiv = document.querySelector(".questionsDiv");
var questionH1 = document.querySelector(".showQuestion");
var option1 = document.querySelector("#button0");
var option2 = document.querySelector("#button1");
var option3 = document.querySelector("#button2");
var option4 = document.querySelector("#button3");
var buttonsDiv = document.querySelector(".buttons");
var secondsLeft = 90;
var myIndex = 0;
var scoreBoard = document.getElementById("scoreBoard");
var userForm = document.getElementById("userForm");
var userInput = document.getElementById("inputForm");


questionsDiv.style.display = "none"
//want timer to start when user clicks start quiz
//var secondsLeft = 90;

document.getElementById("startBtn").addEventListener("click", function () {
    questionsDiv.style.display = "block"
    startDiv.style.display = "none"
 
    printToScreen()

    setTime(),
        console.log(secondsLeft)
})

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining in quiz!";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function sendMessage() {
    timer.textContent = "Sorry, time's up! Hit the books and try again :)";
    if (secondsLeft === 0) {
        alert(timer.textContent)
    };
    finalScreen();
}

function finalScreen() {

}


var questionsArr = [
    {
        question: "Which of the following is an example of a boolean?",
        options: ["True/False", "NaN", "73", "Orange"],
        correctAnswer: "True/False"
    },
    {
        question: "What does scope refer to?",
        options: ["Accessibility/visibility of variables throughout your code", "How to find specific characters within your code", "The type of variables presented in a function", "The process in which a third party reviews your code to check for errors and general comprehension"],
        correctAnswer: "Accessibility/visibility of variables throughout your code"
    },
    {
        question: "Where is the correct location to link the local JavaScript file within your HTML?",
        options: ["You don't need to link it, it links automatically", "Within the head", "At the beginning of the body", "At the end of the body"],
        correctAnswer: "At the end of the body"
    },
    {
        question: "What is the command to add elements into a new array?",
        options: [".insert", ".push", ".add", ".combine"],
        correctAnswer: ".push"
    },
    {
        question: "Which best describes JavaScript?",
        options: ["The skeleton of a website", "The style of a website", "The interactive elements of a website", "A super hip term for when you're writing code while drinking coffee"],
        correctAnswer: "The interactive elements of a website"
    }
]


function printToScreen() {

    questionH1.textContent = questionsArr[myIndex].question

    option1.textContent = questionsArr[myIndex].options[0]
    option2.textContent = questionsArr[myIndex].options[1]
    option3.textContent = questionsArr[myIndex].options[2]
    option4.textContent = questionsArr[myIndex].options[3]
}

buttonsDiv.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    
    if (event.target.textContent !== questionsArr[myIndex].correctAnswer) {
        (secondsLeft--, secondsLeft--, secondsLeft--, secondsLeft--, secondsLeft--);
        console.log(secondsLeft);
        }

    myIndex++

    if (myIndex >= questionsArr.length) {
        alert(`Congratulations! You finished the quiz with a score of ${secondsLeft}!`)
        console.log(secondsLeft);
        score = localStorage.setItem("secondsLeft")
        questionsDiv.style.display = "none";
        //show scoreboard form
        
    } else{ 
        printToScreen();
    }
})

//