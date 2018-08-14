var questions = [ 
  {
    text: "Which of the following options will convert the OBI_NOTE field content to a HTML output?", // one string
    options: ["«OBI_NOTE&HTML»" , "«OBI_NOTE&H»" , "«OBI_NOTE&CONVERT.HTML&D1»"]  , //three strings                       // - object 1
    chosen: null      
  },
  {
    text: "What is the name of the query language used to query Oracle database?", // one string
    options: ["PLSQL" , "TSQL" , "MDX"]  , //three strings                             //-object 2
    chosen: null      
  },
  {
   text: "What is the name of the screen in SITS in client used to reset passwords for eVision?", // one string
    options: ["MST" , "MUA" , "USR"]  , //three strings                             //-object 3
    chosen: null 
  },
  {
   text: "What is the relationship between STU to SPR?", // one string
    options: ["One to Many" , "Many to Many" , "One to One"]  , //three strings                             //-object 4
    chosen: null 
  },
  {
   text: "What is the front-end plugin framework provided by Tribal in order to make eVision responsive?", // one string
    options: ["JetPack" , "Wordpress" , "BootStrap"]  , //three strings                             //-object 5
    chosen: null 
  },
  {
   text: "Which of the following is mandatory in XHTML? - Select more than one correct answer.", // one string
    options: ["<!DOCTYPE html>" , " <html>" , "<BR>"]  , //three strings                             //-object 6
    chosen: null 
  },
  {
   text: "Which of the following is valid XML Construct?", // one string
    options: ["<name>Julian</CloseName>" , "</name>Julian" , "<OpenName>Julian</CloseName>"]  , //three strings                             //-object 7
    chosen: null 
  },
  {
   text: "Which of the following component is used by SITS/eVision to allow prospective students to apply for courses or enquire online?", // one string
    options: ["CAMS" , "SRS" , "IPP"]  , //three strings                             //-object 8
    chosen: null 
  },
  {
   text: "In which of the following screens within SITS would you identify if a batch job has been successfully completed? ", // one string
    options: ["XON" , "BPC" , "DTY"]  , //three strings                             //-object 9
    chosen: null 
  },
  {
   text: "Which of the following screen in SITS will you be able to run SQL without the help of a SRL syntax?", // one string
    options: ["SPD" , "SWB" , "SLP"], //three strings                             //-object 10
    chosen: null 
  },
  {
   text: "Which of the following statements are true? -Select more than one correct answer.", // one string
    options: ["Javascript files can be published to eVision webserver using FMU in SITS client" , "Javascript can be published directly on the eVision webservers" , "CSS files can be published to eVision webservers FMU in SITS client"], //three strings
    chosen: null
  },
  {
   text: "From the three sets of options below which one correctly defines the framweworks available for eVision and SITS developments?", // one string
    options: ["Task Manager, Vista, XP, POP/POD, TUP and SRL" , "Task Manager, Vista, POP/POD, TUP and SRL" , "Task Manager, Vista, PHP/POD, TUP and SRL"], //three strings                             //-object 12
    chosen: null 
  },
  {
   text: "How do you perform a hard refresh on an Internet Browser?", // one string
    options: ["Press F5" , "Press control + F5" , "Press Shift + ALT + F5"]  , //three strings                             //-object 13
    chosen: null 
  },
  {
   text: "In which of the following SITS tables an audit record is created immediately when a change is made?", // one string
    options: ["AUD" , "AUH" , "APH"]  , //three strings                             //-object 14
    chosen: null 
  },
  {
   text: "Which is of the following is used as a style sheet transformation for a XML message?", // one string
    options: ["XSD" , "CSS" , "XSL"]  , //three strings                             //-object 15
    chosen: null 
  },
  {
   text: "In which of the following tables are the students historic addresses held in?", // one string
    options: ["STU" , "SAW" , "ADD"]  , //three strings                             //-object 16
    chosen: null 
  },
  {
   text: "Which one of the following statements are true?", // one string
    options: ["It is not possible to perform multiple document upload in SITS" , "Once a document is stored in SITS it is not possible to amend its filename which cannot be amended in database" , "It is possible to amend UDF in DOC table once a DOC is uploaded"], //three strings                             //-object 17
    chosen: null 
  },
  {
   text: "Which task input option would you use to allow the user to select from a large data item list where they know what they want to select, rather than be propmted in runtime?", // one string
    options: ["Dynamic Listbox" , "Multiple Select" , "Record picker"]  , //three strings                             //-object 18
    chosen: null 
  },
  {
   text: "It is possible to archive emails sent to students from SITS?", // one string
    options: ["True" , "False"]  , //three strings                             //-object 19
    chosen: null 
  },
  {
   text: "How do you define Role groups in SITS for eVision containers?", // one string
    options: ["CON and COP" , "RSH AND RQI" , "RGD and RGC"]  , //three strings                             //-object 20
    chosen: null 
  },
  {
   text: "Please name at least 6 tables used by a process manager", // one string
    options: ["insert text here"] , //three strings                             //-object 21
    chosen: null 
  },
   {
   text: "What are the three functionalities provide by a StuTalk component?", // one string
    options: ["insert text here"]  , //three strings                             //-object 22
    chosen: null 
  }
];

// Javascript for submitting test & get results button 
function completeTestButton() {
    $.post("http://127.0.0.1:8080/complete-test",
    {
      text: "",
      options: "",
      chosen: ""
    },
    function(data,completeTestResultstatus){
      alert("Data: " + data + "\nCompleteTestResultstatus: " + completeTestResultstatus);
    });



  var chosen {

if     
  }

  console.log("click ok!");
};

// ================================================================================================================

var escape = document.createElement('textarea'); 

  function escapeHTML(html) { escape.textContent = html; return escape.innerHTML; }

function questionToHtml(question, index){  //2 parameters
  var html = `<h2>${question.text}</h2>`; // string literal. it puts the value 'question.text' inside there. takes 'text from config above etc'
  html += `<div data-question-index="${index}">`;
  question.options.forEach(function(option, index) {
    html += optionToHtml(option, index, question.chosen);
  }); //
  html += '</div>';  
  return html;
}
function optionToHtml(option, index, chosen){  //2 parameters // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce - accumulator is htmk, therefore had to be changed from the 3rd inline to the first - as example suggests
  option = escapeHTML(option);
  var html = `<div class="option"><input type="radio" id="choice${index}" name="choice" value="${index}"`;
  if (''+index === chosen) {
    html += ' checked';
  }
  html += `><label for="choice${index}">${option}</label></div>`; // string literal. it puts the value 'question.text' inside there
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
// debugging protocol
function isValidQuestion(question, index) {
    var isValid = Array.isArray(question.options) &&
        typeof(question.text) === 'string' &&
        typeof(question.chosen) !== 'undefined';

    if (!isValid) {
      console.warn("Found invalid question at index " + index, question);
    }
    return isValid;
}

//re display user selection


// ================================================================================================================
// get quiz space
var quizElement = document.getElementById("quiz");  // function to be called. documentgetElement calls the function from the DOM. writing functuion instead of var defines it.
var paginationElement =  document.getElementById("pagination");
var currentQuestion = 0;

questions = questions.filter(isValidQuestion);

//display HTML
writeQuestion (currentQuestion);
generatePagination(currentQuestion);