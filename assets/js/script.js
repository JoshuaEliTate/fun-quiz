var timer = document.querySelector("#timer");
var start = document.querySelector("#start")
var intro = document.querySelector("#intro")
var questions = document.querySelector("#questions")
var somename= document.getElementById("name")
var initialsButton= document.getElementById("enterInitials")
var initialsInput = document.getElementById("initials")
var results= document.getElementById("results")
var submit = document.querySelector("#submit")
var startQuiz = document.querySelector("#startQuiz")
var answers = document.querySelector("#answers")
var listOfScores = document.querySelector("#listOfScores")
var q1 = document.querySelector("#q1")
var score = document.querySelector("#score")
var back = document.querySelector("#back")
var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")

var totalPoints = 0
var time = 29
var seconds = 0
var correct = "true"
var incorrect = "false"
var nextQuestion = 0

var allHighScores = JSON.parse(localStorage.getItem('storedData'))

var theTimer = function startTimer(){
    var stopTimer = setInterval(function(){

        if (nextQuestion ===5 || nextQuestion===0) {
            clearInterval(stopTimer)
            return
        } else if (seconds >= 29){
            clearInterval(stopTimer)
            questions.style.display="none"
            timer.style.display="none"
            somename.style.display="block"
            timePoints= 0
            return
        } else if (seconds <= 29){
            timer.innerHTML=time - seconds;
            seconds++; 
        } 
    },1000)
    intro.style.display="none"
    startQuiz.style.display="none"
}


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
        somename.style.display="block"
        timePoints=(time - seconds) * 2
        clearInterval(theTimer)
    }
}

start.addEventListener('click', function(){
    seconds = 0
    totalPoints = 0
    timer.innerHTML=30
    timer.style.display="block"
    nextQuestion= 1
    theTimer();
    showQuestion1();


});


back.addEventListener('click', function(){
    intro.style.display="block"
    startQuiz.style.display="block"
    results.style.display="none"
    nextQuestion = 0
})

a1.addEventListener('click', function(){
    var answerValue = a1.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=30
    } else{
        seconds+= 3
        totalPoints-=20
    }
    displayNext()
    nextQuestion++
});
a2.addEventListener('click', function(){
    var answerValue = a2.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=30
    }else{
        seconds+= 3
        totalPoints-=20
    }
    displayNext()
    nextQuestion++
});
a3.addEventListener('click', function(){
    var answerValue = a3.getAttribute("isCorrect")
    if (answerValue == correct){
        totalPoints+=30
    }else{
        seconds+= 3
        totalPoints-=20
    }
    displayNext()
    nextQuestion++
});
a4.addEventListener('click', function(){
    var answerValue = a4.getAttribute("isCorrect");
    if (answerValue == correct){
        totalPoints+=30
    }else{
        seconds+= 3
        totalPoints-=20
    }
    displayNext()
    nextQuestion++
});


highscores.addEventListener('click', function(){
    intro.style.display="none"
    startQuiz.style.display="none"
    listOfScores.innerHTML=""
    allHighScores.sort(function(a,b){return b.storedScore - a.storedScore})
    for(var i=0;i<allHighScores.length;i++){
        var newScoreElement= document.createElement('li');
        newScoreElement.innerHTML=allHighScores[i].storedName + " "+allHighScores[i].storedScore
        listOfScores.append(newScoreElement);
    }
    results.style.display="block"
})

initialsButton.addEventListener('click', function(){
    nameinput= initials.value
    somename.style.display="none"
    results.style.display="block"
    var veryfinalpoints = totalPoints + timePoints

    var storedData={
        storedName:initialsInput.value,
        storedScore: veryfinalpoints
    }
        if(allHighScores){
        allHighScores.push(storedData)
    } else{
        allHighScores = [storedData]
    }

    localStorage.setItem('storedData', JSON.stringify(allHighScores))
    listOfScores.innerHTML=""
    allHighScores.sort(function(a,b){return b.storedScore - a.storedScore})
    for(var i=0;i<allHighScores.length;i++){
        var newScoreElement= document.createElement('li');
        newScoreElement.innerHTML=allHighScores[i].storedName + " "+allHighScores[i].storedScore
        listOfScores.append(newScoreElement);
    }
    nameinput=""
    initials.value=""
})