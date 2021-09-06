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
    
    
    ]
    )
]