console.log("connected");
var randomquestionIndex = [];
while (randomquestionIndex.length<5) {
    var i = Math.floor(Math.random()*10) + 1;
    if (randomquestionIndex.indexOf(i) === -1) {
        randomquestionIndex.push(i);
    }
}
console.log(randomquestionIndex);
var score = 0;
var totalQuestions= 5;//questions.length;//Math.floor(Math.random() * 5) + 2 ;
var indexCount = 0;
var currentQuestion = randomquestionIndex[indexCount];

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
var correctQuestionCount = 0;

function loadQuestion(questionIndex,i) {
    var q = questions[questionIndex];
    questionEl.textContent = (i+1) + '. ' +q.question;
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
    if (questions[currentQuestion].answer == answer) {
        this.score = this.score+1;
        this.correctQuestionCount = this.correctQuestionCount+1;
    }

    selectedOption.checked = false;
    indexCount++;
    currentQuestion = randomquestionIndex[indexCount];

    if (indexCount == totalQuestions-1) {
        nextButton.textContent = "Finish";
    }
    if (indexCount == totalQuestions) {
        container.style.display = 'none';
        resultContainer.style.display = '';

        //Google Pie Chart
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Scores', 'Out Of 5'],
            ['correct', this.correctQuestionCount],
            ['Wrong', this.totalQuestions-this.correctQuestionCount]

          ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Your Score: '+this.score+' out of '+totalQuestions, 'width':550, 'height':400};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(resultContainer);
        chart.draw(data, options);

        }

        

       // resultContainer.textContent = "Your Score: "+this.score+" out of "+totalQuestions;
        return;
    }

    loadQuestion(currentQuestion,indexCount);
}

loadQuestion(currentQuestion,indexCount);
