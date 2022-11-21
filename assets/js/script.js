var timer = document.querySelector("#timer");
var start = document.querySelector("#start")
var intro = document.querySelector("#intro")
var questions = document.querySelector("#questions")
var results = document.querySelector("#results")
var highscores = document.querySelector("#highscores")
var submit = document.querySelector("#submit")
var startQuiz = document.querySelector("#startQuiz")
var answers = document.querySelector("#answers")
var q1 = document.querySelector("#q1")
var score = document.querySelector("#score")

var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")

var totalPoints = 0
var time = 10
var seconds = 0
var correct = "true"
var incorrect = "false"
var nextQuestion = 1



var theTimer = function startTimer(){
    setInterval(function(){
        if (seconds >= -10 ){
        timer.innerHTML=time + seconds;
        seconds--; 
        } else {
            timer.style.display="none"
            questions.style.display="none"
            results.style.display="block"
        }
    },1000)
    intro.style.display="none"
    startQuiz.style.display="none"
}

// function {

// }

function showQuestion1(){
    questions.setAttribute("questions", 1)
    questions.style.display="block"
    q1.innerHTML="what is 6 + 3"
    a1.innerHTML="9";
    a1.setAttribute("isCorrect", true)
    a2.innerHTML="1";
    a2.setAttribute("isCorrect", false)
    a3.innerHTML="3";
    a3.setAttribute("isCorrect", false)
    a4.innerHTML="6";
    a4.setAttribute("isCorrect", false)
}
function showQuestion2(){
    questions.style.display="block"
    q1.innerHTML="what is 56/7"
    a1.innerHTML="9"
    a1.setAttribute("isCorrect", false)
    a2.innerHTML="7"
    a2.setAttribute("isCorrect", false)
    a3.innerHTML="8"
    a3.setAttribute("isCorrect", true)
    a4.innerHTML="10"
    a4.setAttribute("isCorrect", false)
}
function showQuestion3(){
    questions.style.display="block"
    q1.innerHTML="what is 20 * 20"
    a1.innerHTML="9043"
    a1.setAttribute("isCorrect", false)
    a2.innerHTML="535"
    a2.setAttribute("isCorrect", false)
    a3.innerHTML="612"
    a3.setAttribute("isCorrect", false)
    a4.innerHTML="400"
    a4.setAttribute("isCorrect", true)
}
function showQuestion4(){
    questions.style.display="block"
    q1.innerHTML="what is 5 + 20"
    a1.innerHTML="15"
    a1.setAttribute("isCorrect", false)
    a2.innerHTML="7"
    a2.setAttribute("isCorrect", false)
    a3.innerHTML="25"
    a3.setAttribute("isCorrect", true)
    a4.innerHTML="6281"
    a4.setAttribute("isCorrect", false)
}

function displayNext(){
    if (nextQuestion === 1){
        showQuestion2()
    } else if (nextQuestion ===2){
        showQuestion3()
    } else if (nextQuestion ===3){
        showQuestion4()
    } else if (nextQuestion ===4){
        timer.style.display="none"
        questions.style.display="none"
        results.style.display="block"
        score.innerHTML=totalPoints
    }
}

highscores.addEventListener('click', function(){
    intro.style.display="none"
    startQuiz.style.display="none"
    results.style.display="block"
})

// intro.style.display;"block";
start.addEventListener('click', function(){
    theTimer();
    showQuestion1();


});

a1.addEventListener('click', function(){
    var answerValue = a1.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=20
    } else{
        totalPoints-=10
    }
    displayNext()

    console.log(totalPoints)
    nextQuestion++

});
a2.addEventListener('click', function(){
    var answerValue = a2.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=20
    }else{
        totalPoints-=10
    }
    displayNext()

    console.log(totalPoints)
    nextQuestion++
});
a3.addEventListener('click', function(){
    var answerValue = a3.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=20
    }else{
        totalPoints-=10
    }
    displayNext()

    console.log(totalPoints)
    nextQuestion++
});
a4.addEventListener('click', function(){
    var answerValue = a4.getAttribute("isCorrect");
    if (answerValue == correct){
        totalPoints+=20
    }else{
        totalPoints-=10
    }
    displayNext()

    console.log(totalPoints)
    nextQuestion++
    
});

