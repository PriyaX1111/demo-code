
//javascript start here
const start_btn = document.querySelector(".start_quiz");
//quiz question and options const
const quiz_box = document.querySelector(".quiz-box");
const ques_text = quiz_box.querySelector(".ques_text");
const options_box = quiz_box.querySelector(".options");
//quiz footer and control buttons
const next_btn = document.querySelector(".next-btn");
const total_q = document.querySelector(".quiz-footer .total_ques");
const count_ques = document.querySelector(".quiz-footer .count_ques");
//result box const
const result_box = document.querySelector(".result-box");
const total_ques_r = document.querySelector(".total-ques span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const percentage = document.querySelector(".percentage span");

const again_quiz = document.querySelector(".result-footer .again-quiz");
const exit = document.querySelector(".result-footer .exit");

//start btn onclick event
start_btn.onclick = () => {
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
}

total_q.innerText = questions.length;
total_ques_r.innerText = questions.length;


var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
count_ques.innerHTML = que_index + 1;
ShowQuestion(que_index);

function ShowQuestion(q_index) {
    ques_text.innerText = questions[q_index].num + ". " + questions[q_index].question;
    var option_statement = "";
    for (var i = 0; i < questions[que_index].options.length; i++) {
        option_statement += `<div class="option">${questions[que_index].options[i]}</div>`;
    }

    options_box.innerHTML = option_statement;
    var AllOptions = options_box.querySelectorAll(".option");

    for (var j = 0; j < AllOptions.length; j++) {
        AllOptions[j].setAttribute("onclick", "UserAnswer(this)");
    }
    next_btn.classList.add("inactive");
}

next_btn.onclick = () => {
    que_index++;
    if (questions.length > que_index) {
        count_ques.innerText = que_index + 1;
        ShowQuestion(que_index);
    } else {
        console.log("exam complete")
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_r.innerText = right_answers;
        wrong_ans_r.innerText = wrong_answers;
        percentage.innerText = ((right_answers * 100) / questions.length).toFixed(2) + "%"; //percentage formula
    }
    if (questions.length - 1 == que_index) {
        next_btn.innerText = "Finish";
    }
}

function UserAnswer(answer) {
    let UserAns = answer.innerText;
    let correctAns = questions[que_index].answer;
    var AllOptions2 = options_box.querySelectorAll(".option");

    next_btn.classList.remove("inactive");

    if (UserAns == correctAns) {
        console.log("%c Right Answer", "color:green");
        answer.classList.add("correct");
        right_answers++;
    }
    else {
        console.log("%c Wrong Answer", "color:red");
        answer.classList.add("incorrect");
        wrong_answers++;

        for (var i = 0; i < AllOptions2.length; i++) {
            if (AllOptions2[i].innerText == correctAns) {
                AllOptions2[i].classList.add("correct");
            }
        }
    }

    for (var j = 0; j < AllOptions2.length; j++) {
        AllOptions2[j].classList.add("disabled");
    }

}

again_quiz.onclick = () => {
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    count_ques.innerHTML = que_index + 1;
    ShowQuestion(que_index);
}