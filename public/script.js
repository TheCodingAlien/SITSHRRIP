//question function av
var choices = ["answerChoice", "answerChoice2", "answerChoice3", "answerChoice4"]; 
var choice0 = document.getElementById("answerChoice1");
var choice1 = document.getElementById("answerChoice2");
var choice2 = document.getElementById("answerChoice3");   
var choice3 = document.getElementById("answerChoice4");
// av end
var currentQuestion = 1
function findChoice(question) {
     var index = -1;

     // look through the choices
     choices.forEach( function(choice, arrayIndex) {
         if (choice.question === question) {
             index = arrayIndex;
         }
     } );

     // return the course index if found.
     return index;
 }
function nextQuest() {
  var choice = jQuery('input[name="choice"]:checked');
//choose choice
var choiceIndex= findChoice(currentQuestion);
if (choiceIndex===-1){
  choices.push({question: currentQuestion, answer: choice.val()});
} else {
  choices[choiceIndex].answer=choice.val();
}
  console.log(choices);
}
//question function av
function findChoice(question) {
document.getElementById("next").style.display="none"
displayQuest++;

var quest = document.getElementById("current")==true;
quest.innerHTML = displayQuest;
} else  {
	var quest= document.getElementById("noncurrent")==false; nextQuestion(displayQuest + 1);
	}

function nextQuestion(){
document.getElementById 
}
//av end