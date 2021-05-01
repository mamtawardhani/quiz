var submitButton;
var inp_1, inp_2;
var title;
var question;
var op_1, op_2, op_3, op_4;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  //submit button
  submitButton = createButton();
  submitButton.html("Submit");
  submitButton.position(window.innerWidth/2.05, window.innerHeight/1.5);
  submitButton.style("width", "70px");
  submitButton.style("height", "30px");
  submitButton.style("backgroundColor", "red");
  submitButton.style("color", "gold");
  submitButton.style("fontSize", "15px");

  //input buttons
  inp_1 = createInput();
  inp_1.position(window.innerWidth/2.55, window.innerHeight/1.7);
  inp_1.attribute("placeholder", "Enter Your Name Here");
  inp_2 = createInput();
  inp_2.position(window.innerWidth/1.95, window.innerHeight/1.7);
  inp_2.attribute("placeholder", "Enter Correct Option No.");

  //title
  title = createElement("h1");
  title.html("MyQuiz Game");
  title.position(window.innerWidth/2.25, window.innerHeight/30);
  
  //question
  question = createElement("h2");
  question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
  question.position(window.innerWidth/3.6, window.innerHeight/5);

  //option 1
  op_1 = createElement("h3");
  op_1.html("1: Everyone");
  op_1.position(window.innerWidth/3.6, window.innerHeight/3.8);

  //option 2
  op_2 = createElement("h3");
  op_2.html("2: Envelope");
  op_2.position(window.innerWidth/3.6, window.innerHeight/3.2);

  //option 3
  op_3 = createElement("h3");
  op_3.html("3: Estimate");
  op_3.position(window.innerWidth/3.6, window.innerHeight/2.75);

  //option 4
  op_4 = createElement("h3");
  op_4.html("4: Example");
  op_4.position(window.innerWidth/3.6, window.innerHeight/2.4);

}

function draw() {
  background(0, 228, 208);
}
