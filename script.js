// start code
// attached JS to HTML id
var questionQuiz = document.querySelector("#questionQuiz");
var choices = document.querySelector("#choices");
var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
// set additonal variables that I think I'll need
var createDiv = document.createElement("div");
var questionIndex = 0;
var timeLeft = 60;
var penalty = 10;
var timeInterval = 0;

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
        cAnswer: "C",
    },
];
// inputed to make sure it runs well
function init() {
    startQuiz();
    renderQuestions();
    checkAnswer();
    allDone();
}
// set up eventListener to start timer, shows timer / stops time
startQuiz.addEventListener("click", function(){
   
    if (timeInterval === 0) {
        timeInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;
            if (timeLeft <=0) {
            clearInterval(timeInterval);
            allDone();
            timer.textContent = "Time's Up!";
            }
        }, 1000);
    }
       renderQuestions();
    console.log(startQuiz);
})
  
function renderQuestions (checkAnswer){
        questionQuiz.innerHTML = "";

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

// was able to get the toggling through questions but won't stop when questions are finished
function checkAnswer(answer) {
        createDiv.setAttribute("id", "createDiv");

    if (answer === myQuestions[questionIndex].cAnswer) {
       
            createDiv.textContent = "Correct!";
        
            questionIndex++;
        
        } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong!";
            
            renderQuestions();
            console.log(checkAnswer);
        }
        var lastQuestion = myQuestions.length -1;
        if (questionIndex >= myQuestions.length) {
           allDone();
           
        
            } else {
           renderQuestions();
           }   
            console.log(lastQuestion);
         questionQuiz.appendChild(createDiv);
            
} 
//All done to appear once the time is up or all questions are answered - can't get to work  
function allDone(checkAnswer) {
    //clears data off of page to show All DONE 
        question.innerHTML = "";
        questionQuiz.innerHTML = "";
        timer.innerHTML = "";
        choices.innerHTML = "";
        createDiv.innerHTML = "";
    // took me forever to find out how to create Element on page thanks W3 Schools
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!";
        questionQuiz.appendChild(createH1);

        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");
        questionQuiz.appendChild(createP);
        
// if else for final score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        createP2.setAttribute("id", "createP2");
        clearInterval(timeInterval);
        createP.textContent = "Your final score is: " + timeRemaining;
        questionQuiz.appendChild(createP2);
    }
// created label for initials with input block and submit button but ran out of time to figure out how to save to other page highscore.html
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your Initials: ";

    questionQuiz.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionQuiz.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    
    questionQuiz.appendChild(createSubmit);

}




    




      

