const startButton = document.getElementById('start');
var right = document.getElementById("response");
var redo = document.getElementById("replay");

// Coding Challenge Questions
var questions = [
    new Question(
        "1. What are variables used for in JavaScript Programs?",
        ["Storing numbers, dates, or other values", 
        "Varying randomly", 
        "Causing high-school flashbacks", 
        "None of the above"],
        "Storing numbers, dates, or other values"
    ),

    new Question(
        "2. Which of the following are capabilities of functions in JavaScript?",
        ["Return a value", 
        "Accept parameters and Return a value",
        "Accept parameters", 
        "None of the above"],
        "Accept parameters"
    ),

    new Question(
        "3. Which tag is an extention to HTML that can enclose any number of JavaScript statements?",
        ["<SCRIPT>",
        "<BODY>", "<HEAD>",
        "<TITLE>"],
        "<SCRIPT>"
    ),

    new Question(
        "4. Which of the following is not considered a JavaScript operator?",
        ["new",
            "this",
                "delete",
                "typeof"],
                "this"
    ),

    new Question(
        "5. Which of the following best describes JavaScript?",
        ["a low-level programming language.",
            "a scripting language precompiled in the browser.",
            "a compiled scripting language",
            "an object-oriented scripting language"],
            "an object-oriented scripting language"
    ),

    new Question(
        "6. Which statement tests for a specific condition",
        ["Select",
            "If",
                "Switch",
                    "For"],
                    "If"
    ),
    
    new Question(
        "7. Which answer best describe what JavaScript entities start and and end with?",
        ["Semicolon, colon",
            "Semicolon, Ampersand",
                "Ampersand, colon",
                    "Ampersand, semicolon"],
                    "Ampersand, semicolon"
    ),
]

// Timer countdown information
function startTimer() {
    var p_time = document.getElementById('time').innerHTML;
    var timeArray = p_time.split(":");
    var min = timeArray[0];
    var sec = checkSecond((timeArray[1] - 1));
    if (sec == 59) {
        min = min -1
    }

    if (min < 0) {
        clearTimeout(timerRef)
        alert("Out of Time")
        return;
    }

    document.getElementById('time').innerHTML = min + ":" + sec;

    var timeRef = setTimeout(startTimer, 2000);

}

function checkSecond(seconds) {
    if (seconds < 10 && seconds >= 0) {
        seconds = "0" + seconds
    };
    if (seconds < 0) {
        seconds = "59"
    };
    return seconds;

    }
    
function wrongTimer () {
    var x_time = document.getElementById('time').innerHTML;
    var wrongArray = x_time.split(":");
    var x_min = wrongArray[0];
    var x_sec = checkSecond((wrongArray[1]-1));
    if(x_sec == 59) {
        x_min = x_min - 1

    }

    x_sec -= 10;
    document.getElementById('time').innerHTML = x_min + ":" + x_sec;
}

function stopTimer () {
    clearInterval(timerRef);
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex =0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];

}

Quiz.prototype.guess = function (answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        right.innerHTML = "Correct!";
        this.score += 10;
    } else if (!this.getQuestionIndex().isCorrectAnswer(answer)) {
        right.innerHTML = "Incorrect - Minus 10 Seconds";
        wrongTimer();
    }
    this.questionIndex++;

}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var quesEl = document.getElementById("question");
        quesEl.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i =0; i < choices.length; i++) {
            var quesEl = document.getElementById("choice"+i);
            quesEl.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
      }
    };

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showScores() {
    var initials = window.prompt("Please enter your initals to record your score.")
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + initials + " " + quiz.score + "</h2>";
    localStorage.setItem("highsores", initials + " " + quiz.score);
    redo.textContent = "Replay";
    startButton.style.display = "none";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

//Start Quiz
var quiz = new Quiz(questions);

function replay () {
    location.reload();
};

startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', populate);
redo.addEventListener('click', replay);