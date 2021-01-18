// start code
// attached JS to HTML id
var questionQuiz = document.querySelector("#questionQuiz");
var choices = document.getElementById("#choices");
var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
// set additonal variables that I think I'll need
var count = 0;
var questionIndex = 0;
var timeLeft = 60;
var penalty = 10;
var timeInterval = 0;
var ulCreate = document.createElement("ul");
// var lastQuestion = myQuestions.length -1;

// will start with questions taken from bestlifeonline.com using array and objects
var myQuestions = [
    {
        question: "What was the first toy to be advertised on TV?",
        choiceA: "Barbie",
        choiceB: "Mr Potato Head",
        choiceC: "Slinky",
        choiceD: "Pokemon",
        cAnswer: "B"
    },
    {
        question: "How many trees are there on Earth?",
        choiceA: "3 million",
        choiceB: "33 million",
        choiceC: "300 million",
        choiceD: "3 trillion",
        cAnswer: "D"
    },
    {
        question: "What percent of people have black or brown hair?",
        choiceA: "25%",
        choiceB: "50%",
        choiceC: "75%",
        choiceD: "90%",
        cAnswer: "D"
    },
    {
        question: "What do you call a group of toads?",
        choiceA: "a gaggle",
        choiceB: "a rope",
        choiceC: "a knot",
        choiceD: "a herd",
        cAnswer: "C"
    },
    {
        question: "How many languages are written from right to left?",
        choiceA: "3",
        choiceB: "37",
        choiceC: "12",
        choiceD: "95",
        cAnswer: "12"
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
            allDone();
           }
       }, 1000);
    }
       renderQuestions();
    
       console.log(startQuiz);
})
  
 function renderQuestions (){
    questionQuiz.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < myQuestions.length; i++) {
    let q = myQuestions[questionIndex];
     question.innerHTML = "<p>" + q.question + "</p>";
     choiceA.innerHTML = q.choiceA;
     choiceB.innerHTML = q.choiceB;
     choiceC.innerHTML = q.choiceC;
     choiceD.innerHTML = q.choiceD; 
     
     console.log(renderQuestions);
    }
 }

  function checkAnswer(answer) {
      
        // var newDiv = document.createElement("div");
        // newDiv.setAttribute("id", "newDiv");

     if (answer == myQuestions[questionIndex].cAnswer) {
        // answer.textContent = "Correct!";
        questionIndex++;
        renderQuestions();
    
     } else {
        timeLeft = timeLeft - penalty;
        
        // answer.textContent = "Wrong!";
         
         console.log(checkAnswer);
    }
        

    if (questionIndex >= myQuestions.length) {
        allDone();
      }   else {
         renderQuestions(questionIndex);
     }
}

    function allDone() {
        choiceA.innerHTML = "";
        choiceB.innerHTML = "";
        choiceC.innerHTML = "";
        choiceD.innerHTML = "";
        question.innerHTML = "";
        timer.innerHTML = "";
        
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!";
        questionQuiz.appendChild(createH1);

         var createP = document.createElement("p");
         createP.setAttribute("id", "createP");
         questionQuiz.appendChild(createP);

        if (timeLeft >= 0) {
            var timeRemaining = timeLeft;
            var createP2 = document.createElement("p");
            clearInterval(timeInterval);
            createP.textContent = "Your final score is " + timeRemaining;

            questionQuiz.appendChild(createP2);
        }
    };

    




      

