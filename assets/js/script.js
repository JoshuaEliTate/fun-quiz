var timer = document.querySelector("#timer");
var start = document.querySelector("#start")
var intro = document.querySelector("#intro")
var questions = document.querySelector("#questions")
var results = document.querySelector("#results")
var highscores = document.querySelector("#highscores")
var submit = document.querySelector("#submit")
var startQuiz = document.querySelector("#startQuiz")

var q1 = document.querySelector("#q1")

var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")

var totalPoints = 0
var time = 10
var seconds = 0





var theTimer = function startTimer(){
    setInterval(function(){
        if (seconds >= -10 ){
        timer.innerHTML=time + seconds;
        seconds--; 
        } else {
            timer.style.display;"none"
        }
    },1000)
    intro.style.display="none"
    startQuiz.style.display="none"
}

// function {

// }

function showQuestion1(){
    questions.style.display="block"
    q1.innerHTML="what is 6 + 3"
    a1.innerHTML="9"
    a1.setAttribute("isCorrect", true)
    a2.innerHTML="1"
    a2.setAttribute("isCorrect", false)
    a3.innerHTML="3"
    a3.setAttribute("isCorrect", false)
    a4.innerHTML="6"
    a4.setAttribute("isCorrect", false)
}

intro.style.display;"block";
start.addEventListener('click', function(){
    theTimer();
    showQuestion1();


});
q1.addEventListener('click', function(){
var nextQuestion = questions.getAttribute("questions") + 1
console.log("nextQuestion")
})
var nextQuestion = questions.getAttribute("questions") + 1
console.log(nextQuestion)

