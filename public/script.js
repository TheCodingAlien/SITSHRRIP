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
function writeQuestion (number){ //turn question into HTML
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
  var currentQuestion = parseInt(this.parentElement.parentElement.getAttribute("data-question-index"), 10);
  var currentOption = this.value ;
  if (this.checked) {
    questions[currentQuestion].chosen = currentOption;
  }
}
function generatePagination (currentQuestion) {
  var lastIndex = questions.length - 1 ;
  var previous = Math.max(currentQuestion - 1, 0);
  var next = Math.min(currentQuestion + 1, lastIndex);

  // write previous link
  var html = `<a href="#" data-page="${previous}">&laquo;</a>`;
  // write question links
  html += questions.reduce(questionToPagination, ''); //
  //write next link
  html += `<a href="#" data-page="${next}">&raquo;</a>`;

  // write to the DOM
  paginationElement.innerHTML=html;

  // add handlers to links
  addPaginationListener (paginationElement);
}
function addPaginationListener (paginationElement){
 var links = paginationElement.querySelectorAll('a');
  links.forEach (addLinkListener); //https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
}
function addLinkListener (link){
  link.addEventListener("click", changePage);
}

function changePage (e){
  var page = parseInt(this.getAttribute ("data-page"), 10);
  if (currentQuestion === page) {
    // don't redraw if page is this page
    return;
  }

  // Save selection and show page
  currentQuestion = page;
  writeQuestion (page);
  generatePagination(page);
}
function questionToPagination (html, question, index) {
  var humanFriendly = index+1;
  return html +   `<a href="#" data-page="${index}">${humanFriendly}</a>`;
}

// ================================================================================================================
// get quiz space
var quizElement = document.getElementById("quiz");  // function to be called. documentgetElement calls the function from the DOM. writing functuion instead of var defines it.
var paginationElement =  document.getElementById("pagination");
var currentQuestion = 0;

//display HTML
writeQuestion (currentQuestion);
generatePagination(currentQuestion);
