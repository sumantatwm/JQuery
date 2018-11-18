var currentQuestion = 0;
var score = 0;
var totalQuestions= questions.length;//Math.floor(Math.random() * 5) + 2 ;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("questions");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var againButton = document.getElementById("againButton");
var resultContainer = document.getElementById("result");
var nextButtonContainer = document.getElementById("nextQuiz");

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' +q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("Please select an Answer.");
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer ==answer) {
        this.score = this.score+1;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion == totalQuestions-1) {
        nextButton.textContent = "Finish";
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        resultContainer.style.display = '';
        resultContainer.textContent = "Your Score: "+this.score+" out of "+totalQuestions;
        return;
    }

    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
