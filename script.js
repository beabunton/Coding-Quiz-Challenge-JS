var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 90;
var alert =document.getElementById("alert");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        question: "String values must be enclosed within what when assigned to variables?",
        choices: ["commas","curly brackets","quotes"],
        answer : "curly brackets"    
    },
    {
        question: "Arrays in JavaScript can be used to store what?",
        choices: ["numbers and strings", "booleans", "other arrays", "booleans", "all of the above"],
        answer : "all of the above"    
    },
    {
        question: "Commonly used data types DO NOT include what?",
        choices: ["booleans","alerts","numbers"],
        answer : "booleans"    
    },
    {
        question: "An if/else statement is enclosed with what?",
        choices: ["quotes","curly brackets", "parenthesis","square brackets"],
        answer : "parenthesis"    
    },
    {
        question: "Which attribute of the <script> element ensures that scripts with this attribute will           execute in the order in which they appear in the document?",
        choices: ["stable","async","defer"],
        answer : "defer"    
    },
]
btnStart.addEventListener("click", function(){
  let quizQuestions = document.getElementById("quiz-questions")
});

  
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Correct"
        console.log("Correct")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 2000);

}







  
