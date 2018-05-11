var questions = [ 
  {
    text: "How do you open sits", // one string
    options: ["one click" , "two click" , "three click"]  , //three strings                       // - object 1
    chosen: null      
  },
  {
    text: "How do you close a screen in sits", // one string
    options: ["click the X" , "file > quit" , "either"]  , //three strings                             //-object 2
    chosen: null      
  }
];

// ================================================================================================================


function questionToHtml(question, index){  //2 parameters
  var html = `<h2>${question.text}</h2>`; // string literal. it puts the value 'question.text' inside there. takes 'text from config above etc'
  html += `<div data-question-index="${index}">`;
  html += question.options.reduce(optionToHtml, ''); //
  html += '</div>';  
  return html;
}
function optionToHtml(html, option, index){  //2 parameters // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce - accumulator is htmk, therefore had to be changed from the 3rd inline to the first - as example suggests
  html += `<div class="option"><input type="radio" id="choice${index}" name="choice" value=${index}><label for="choice${index}">${option}</label></div>`; // string literal. it puts the value 'question.text' inside there
//uses the options to give us all the options in the config described above //uses the index so it separates all the bits in the page
  return html;
}
function writeQuestion (number, quizElement){ //turn question into HTML
  var current = questionToHtml (questions[number],number);
  quizElement.innerHTML = current ;
  addQuestionListener (quizElement);
}
function addQuestionListener (quizElement){
  var inputs = quizElement.querySelectorAll('input');
  inputs.forEach (addOptionListener); //https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
}
function addOptionListener (input){
  input.addEventListener("change", optionChange);

}
function optionChange (e){
  var currentQuestion = this.parentElement.parentElement.getAttribute("data-question-index");
  var currentOption = this.value ;
  if (this.checked) {
    questions[currentQuestion].chosen = currentOption;
  }
}


// ================================================================================================================
// get quiz space
var quizElement = document.getElementById("quiz");  // function to be called. documentgetElement calls the function from the DOM. writing functuion instead of var defines it.
var currentQuestion = 1;


//display HTML
writeQuestion (currentQuestion, quizElement);