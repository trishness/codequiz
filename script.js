//create button on html page
//grab button inside query selector in java
//even listener when user clicks
//when click, go to question
//can put questions into html or javascript, java is dom manipulation
//one question, some options to said question
//user click option, is correct or incorrect, compare user choice to correct answer
//for loop over questions to ask multiple questions, can use array
//array for questions
//array for answers             //keep track of indices for arrays for comparison, how to compare arrays????
//array for correct answer
//all arrays stored within an object
//timer outside of for loop, so that timer isn't restarting with the loop, same goes for eventlisteners
//create function for timer, run function when user starts quiz
//if user answers incorrectly, deduct time. if/else?

var timer = document.querySelector(".time");
var main = document.getElementById("main");
var startButton = document.querySelector("#startBtn");



//want timer to start when user clicks start quiz
var secondsLeft = 90;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining in quiz!";

        if(secondsLeft===0) {
            clearInterval(timerInterval);
            sendMessage()
        }
    }, 1000);
}

function sendMessage() {
    timer.textContent="Time's up!";
    if(secondsLeft===0) {
        alert(timer.textContent)
    };
}

setTime();





function runQuiz() {
    var questions = [{
            question:"What is an example of a boolean?",
            choices: ["True/False", "NaN", "73", "Orange"],
            correctAnswer, 0
    },  {
            question: "What does scope refer to?",
            choices: ["Accessibility/visibility of variables throughout your code", "How to find specific characters within your code", "The type of variables presented in a function", "The process in which a third party reviews your code to check for errors and general comprehension"],
            correctAnswer, 0
    },  {
            question: "What does a child element refer to?",
            choices: ["An elemental code that was added to JavaScript within the past year", "A placeholder within your code used in the early developmental stages", "A sub element of any given parent element", "The production of HTML and CSS when linked"],
            correctAnswer, 2
    },  {
            question: "What is the command to add elements into a new array?",
            choices: [".insert", ".push", ".add", ".combine"],
            correctAnswer, 1
    },  {
            question: "What is JavaScript best described as?",
            choices: ["The skeleton of a website", "The style of a website", "The interactive elements of a website", "A super hip term for when you're writing code while drinking coffee"],
            correctAnswer, 2
    }
}];

//var questionCounter = 0;
//var selections = [];
//var quiz = 