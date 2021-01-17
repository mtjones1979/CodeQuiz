// start code
// attached JS to HTML id
var questionQuiz = document.querySelector("#questionQuiz");
var choices = document.querySelector("#choices");
var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");

// set additonal variables that I think I'll need
var score = 0;
var questionIndex = 0;
var timeLeft = 60;
var penalty = 10;
var timeInterval = 0;
var ulCreate = document.createElement("ul");
 

// will start with questions taken from bestlifeonline.com using array and objects
var myQuestions = [
    {
        question: "What was the first toy to be advertised on TV?",
        options: ["Barbie", "Mr Potato Head", "Slinky", "Pokemon"],
        answer: "Mr Potato Head",
    },
    {
        question: "How many trees are there on Earth?",
        options: ["3 million","33 million", "300 million", "3 trillion"],
        answer: "3 trillion",
    },
    {
        question: "What percent of people have black or brown hair?",
        options: ["25%","50%", "75%", "90%"],
        answer: "90%",
    },
    {
        quesiton: "What do you call a group of toads?",
        options: ["a gaggle", "a herd", "a rope", "a knot"],
        answer: "a knot",
    },
    {
        question: "How many languages are written from right to left?",
        options: ["3", "37", "95", "12"],
        answer: "12",
    },
];

// have to set up functions to show quesitons and start timer
 startQuiz.addEventListener("click", function(){
     if (timeInterval === 0) {
         timeInterval = setInterval(function(){
             timeLeft--;
             timer.textContent = "Timer: " + timeLeft;
             if (timeLeft <=0) {
                clearInterval(timeInterval);
                finished();
                timer.textContent = "Time's up!";
             }
         }, 1000);
        }
        render(questionIndex);
    });

     function render(questionIndex) {
        questionQuiz.innerHTML = "";
        ulCreate.innerHTML = "";
        for (var i = 0; i < myQuestions.length; i++) {
            var userQuestion = myQuestions[questionIndex].question;
            var userOptions = myQuestions[quesitonIndex].options;
            questionQuiz.textContent = userQuestion;
        }
     }    