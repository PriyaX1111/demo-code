
//javascript start here

const start_btn = document.querySelector(".start_quiz");
const quiz_box = document.querySelector(".quiz-box");
const ques_text = quiz_box.querySelector(".ques_text");
const options_box = quiz_box.querySelector(".options");

start_btn.onclick =()=>{
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
}

var que_index = 2;

ques_text.innerText = questions[0].question;
var option_statement = ""; 
for(i=0; i<questions.length-1; i++){
    option_statement += `<div class="option">${questions[0].options[i]}</div>`;
}

options_box.innerHTML = option_statement;