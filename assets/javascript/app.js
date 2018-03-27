$(".startbutton").on("click", function () {
    $(".startbutton").hide();
    var container = $("#question-container");
    var timer = $("#timer-container");
    startTimer(timer);
    for (var i = 0; i < questions.length; i++) {
        var oneQuestion = questions[i];
        var qValue = oneQuestion.Q;
        var ansValue = oneQuestion.ans;
        var questionDivId = "questionNum" + i;
        var questiondiv = $('<div id="' + questionDivId + '">' + qValue + "</div>");
        var answerdiv = $("<div>" + ansValue + "</div>");
        container.append(questiondiv);
        var ansForm = $("<form></form>");
        questiondiv.append(ansForm);
        for (var a = 0; a < ansValue.length; a++) {
            var radioId = questionDivId + "radio" + a;
            var ansSelection = $('<div class ="radio"> <label class="radio-inline"><input type="radio" id="' + radioId + '" name="optradio">' + ansValue[a] + '</label></div>');
            ansForm.append(ansSelection);
        }
    }
    setTimeout(endGame, 30000);


});

function startTimer(display) {
    var timer = 30;
    setInterval(function () {
        timer--;
        display.html("Time left: " + timer);
    }, 1000);
}

function endGame() {

    var correctAns = 0;
    var incorrect = 0;
    var noAns = 0;
    for (var r = 0; r < questions.length; r++) {
        var checkedRadioNum = 99;
        var questionDivId = "questionNum" + r;
        for (var a = 0; a < 4; a++) {
            var radioId = questionDivId + "radio" + a;
            var isChecked = $("#" + radioId).prop("checked");
            if (isChecked) {
                checkedRadioNum = a;
                break;
            }
        }
        if (checkedRadioNum === questions[r].correct) {
            correctAns++;
        }
        else {
            incorrect++;
        }

    }
    var scores = $("#scores");
    $("#question-container").hide();
    $("#timer-container").hide();
    scores.append("Correct: " + correctAns);
    scores.append("<br></br>");
    scores.append("Incorrect: " + incorrect);

}


var questions = [{
    Q: "Which fictional city is the home of Batman?",
    ans: [ "Star City",  "Chicago",  "Gotham City","San Diego"],
    correct: 2 
},
{
    Q: "What is another name for Superman",
    ans: ["The Red Redeemer", "Hombre Murcielago", "The Man of Steel", "The Caped Crusader"],
    correct: 2
},
{
    Q: "This superhero's tools included bullet-proof bracelets and a magic lasso.Who is she",
    ans: ["Super Girl", "Catwoman", "Wonder Woman", "Elastic Girl"],
    correct: 2
},
{
    Q: "Besides Alan Scoot and Hal Jordan, The Green Lantern has also used this name as a secret identity?",
    ans: ["Barry Allen", "Kyle Rayner", "John Dickering", "Bruce Wayne"],
    correct: 1
},



{Q: "Which of these villains was not one of Flash's enemies?",
ans: [ "Captain Boomerang",  "Abra Kadabra",  "Mirror Master","Hush"],
correct: 3 
},

{
    Q: "How fast could Aquaman swim?",
    ans: [ "1,000 feet per second",  "5,000 feet per second",  "10,000 feet per second","20,000 feet per second"],
    correct: 2 
    }]


// $(document).ready(function () {
//     resetGame();
// });

// var questions = [
//           {
//             question: "Which fictional city is the home of Batman?",
//             answers: {
//               a: "Star City",
//               b: "Chicago",
//               c: "Gotham City"
//             },
//             correctAnswer: "c"
//           },
//           {
//             question: "Spinach is high in which mineral?",
//             answers: {
//               a: "Potassium",
//               b: "Calcium",
//               c: "Iron"
//             },
//             correctAnswer: "c"
//           },
//           {
//             question: "Where is Waldo?",
//             answers: {
//               a: "Antarctica",
//               b: "Exploring the Pacific Ocean",
//               c: "Minding his own business, so stop asking",
//             },
//             correctAnswer: "c"
//           },
//           {
//             question: " Traditionally, how many Wonders of the World are there?",
//             answers: {
//               a: "5",
//               b: "7",
//               c: "9"
//             },
//             correctAnswer: "c"
//           },
//         ];





// //  setTimeout(timeUp, 1000 * 15);

// //  function timeUp () {
// //     console.log('done');
// //     $('#show-number').append("<h2>Time's Up!</h2>");
// //     console.log("time is up");
// //  }
// // }
// // $(document).ready(function() {
// //     function initialScreen(){
// //         startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
// //         $(".mainArea").html(startScreen);
// //     }

        
// //     });

// // var number = 30;
// // var intervalId;

// // function run() {
// //     clearInterval(intervalId);
// //     intervalId = setInterval(decrement, 1000);
// //   }

// //   function decrement () {
// //       number--;
// //       $("#show-number").html("<h2>"+ number + "<h2>");
// //       if (number === 0) {
// //           stop();
// //           alert("Time UP!");
        
// //       } 
// //   }
// //   function stop () {
// //       clearInterval(intervalId);
// //   }
// //   run();

// // (function() {
// //     function buildQuiz() {
// //       // we'll need a place to store the HTML output
// //       var output = [];
  
// //       // for each question...
// //       myQuestions.forEach((currentQuestion, questionNumber) => {
// //         // we'll want to store the list of answer choices
// //         var answers = [];
  
// //         // and for each available answer...
// //         for (letter in currentQuestion.answers) {
// //           // ...add an HTML radio button
// //           answers.push(
// //             `<label>
// //               <input type="radio" name="question${questionNumber}" value="${letter}">
// //               ${letter} :
// //               ${currentQuestion.answers[letter]}
// //             </label>`
// //           );
// //         }
  
// //         // add this question and its answers to the output
// //         output.push(
// //           `<div class="question"> ${currentQuestion.question} </div>
// //           <div class="answers"> ${answers.join("")} </div>`
// //         );
// //       });
  
// //       // finally combine our output list into one string of HTML and put it on the page
// //       quizContainer.innerHTML = output.join("");
// //     }
  
// //     function showResults() {
// //       // gather answer containers from our quiz
// //       var answerContainers = quizContainer.querySelectorAll(".answers");
  
// //       // keep track of user's answers
// //       let numCorrect = 0;
  
// //       // for each question...
// //       myQuestions.forEach((currentQuestion, questionNumber) => {
// //         // find selected answer
// //         var answerContainer = answerContainers[questionNumber];
// //         var selector = `input[name=question${questionNumber}]:checked`;
// //         var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
// //         // if answer is correct
// //         if (userAnswer === currentQuestion.correctAnswer) {
// //           // add to the number of correct answers
// //           numCorrect++;
  
// //           // color the answers green
// //           answerContainers[questionNumber].style.color = "lightgreen";
// //         } else {
// //           // if answer is wrong or blank
// //           // color the answers red
// //           answerContainers[questionNumber].style.color = "red";
// //         }
// //       });
  
// //       // show number of correct answers out of total
// //       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// //     }
  
// //     var quizContainer = document.getElementById("quiz");
// //     var resultsContainer = document.getElementById("results");
// //     var submitButton = document.getElementById("submit");
// //     var myQuestions = [
//       {
//         question: "Which fictional city is the home of Batman?",
//         answers: {
//           a: "Star City",
//           b: "Chicago",
//           c: "Gotham City"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "Spinach is high in which mineral?",
//         answers: {
//           a: "Potassium",
//           b: "Calcium",
//           c: "Iron"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "Where is Waldo?",
//         answers: {
//           a: "Antarctica",
//           b: "Exploring the Pacific Ocean",
//           c: "Minding his own business, so stop asking",
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: " Traditionally, how many Wonders of the World are there?",
//         answers: {
//           a: "5",
//           b: "7",
//           c: "9"
//         },
//         correctAnswer: "c"
//       },
//     ];
  
    // display quiz right away
    // buildQuiz();
  
    // on submit, show results
//     submitButton.addEventListener("click", showResults);
//   })();

  