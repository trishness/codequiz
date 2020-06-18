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
var scoreBoard = document.querySelector(".scoreBoard");
var userArray=JSON.parse(localStorage.getItem("user")) || []; 


//welcome page
scoreBoard.style.display="none"
questionsDiv.style.display = "none"

//begin quiz
document.getElementById("startBtn").addEventListener("click", function () {
    questionsDiv.style.display = "block"
    startDiv.style.display = "none"
    
 
    printToScreen()

    setTime(),
        console.log(secondsLeft)
})

//timer
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

//quiz questions
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

//cycle through quiz questions
function printToScreen() {

    questionH1.textContent = questionsArr[myIndex].question

    option1.textContent = questionsArr[myIndex].options[0]
    option2.textContent = questionsArr[myIndex].options[1]
    option3.textContent = questionsArr[myIndex].options[2]
    option4.textContent = questionsArr[myIndex].options[3]
}

buttonsDiv.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    
    //checking for correct answer, corresponding time penalty
    if (event.target.textContent !== questionsArr[myIndex].correctAnswer) {
        (secondsLeft--, secondsLeft--, secondsLeft--, secondsLeft--, secondsLeft--);
        console.log(secondsLeft);
        }

    myIndex++

    //finishing quiz
    if (myIndex >= questionsArr.length) {
        alert(`Congratulations! You finished the quiz with a score of ${secondsLeft}!`)
        console.log(secondsLeft);
        userScore = secondsLeft;
        console.log(userScore);

        var userName = prompt("What would you like your username to be?");
        console.log(userName);

        var userInfo = {
            username: userName,
            score: userScore
        }
        userArray.push(userInfo);
        localStorage.setItem("user", JSON.stringify(userArray))
        console.log(userInfo)

        questionsDiv.style.display = "none"
        scoreBoard.style.display = "block"

        //scoreboard
        for (var i=0; i < userArray.length; i++){
            
            var row1 = document.createElement("tr")
            var col1 = document.createElement("td")
                col1.textContent= i+1
            var col2 = document.createElement("td")
                col2.textContent= userArray[i].username
            var col3 = document.createElement("td")
                col3.textContent=userArray[i].score
            row1.appendChild(col1)
            row1.appendChild(col2)
            row1.appendChild(col3)
            document.getElementById('scoreBoard').appendChild(row1)
        }
    
        
        
    } else{ 
        printToScreen();
    }
})