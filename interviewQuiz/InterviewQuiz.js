//javascript start here
const start_btn = document.querySelector(".start_quiz");
//quiz question and options const
const quiz_box = document.querySelector(".quiz-box");
const ques_text = quiz_box.querySelector(".ques_text");
const options_box = quiz_box.querySelector(".options");
//quiz footer and control buttons
const next_btn = document.querySelector(".next-btn");
const skip_btn = document.querySelector(".skip-btn");
const total_q = document.querySelector(".quiz-footer .total_ques");
const count_ques = document.querySelector(".quiz-footer .count_ques");
//result box const
const result_box = document.querySelector(".result-box");
const total_ques_r = document.querySelector(".total-ques span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const percentage = document.querySelector(".percentage span");
const skip_ans_r = document.querySelector(".skip-ans span");
// warning 
const warning = document.querySelector(".warning");
// variables for again and exit controls
const again_quiz = document.querySelector(".result-footer .again-quiz");
const exit = document.querySelector(".result-footer .exit");
//sidebar display code 
const sidebar = document.getElementById('sidebar');
//variable to shuffle question after click on again quiz
let shuffledQuestion, currentQuestionIndex
//variable for timer 
const timeCount = document.querySelector(".timer .time_minute")
// const for audio
const RightAudio = new Audio();
RightAudio.src = "../audio/correctAudio.mp3"
const WrongAudio = new Audio();
WrongAudio.src = "../audio/wrongAudio.mp3"

//js code to toggleSidebar
function toggleSidebar() {
    sidebar.classList.toggle('show')
}

//code for window visibilities
let counter = 0
document.addEventListener('visibilitychange', function () {
    document.title = document.visibilitystate
    console.log(document.visibilitystate)
    console.log(document.hidden)
    if (document.hidden) {
        counter += 1
        warning.classList.remove('inactive')
        quiz_box.classList.add("inactive");
        start_btn.classList.add("inactive");

        // document.getElementById('info').innerHTML = "The Browser Tab has been change or minimized "+ counter +" times"
    }
})

//js code to generate and verify otp
function generateOTP() {
    let generateOTP = Math.floor(1000 + Math.random() * 9000);
    window.localStorage.setItem("otp", generateOTP);
}
function validateOtp() {
    let validOtp = document.querySelector("#validOtp").value;
    let otp = window.localStorage.getItem('otp');
    if (validOtp == otp) {
        alert("valid opt")
        warning.classList.add('inactive')
        quiz_box.classList.remove("inactive");
    }
    else {
        alert("Invalid Otp")
    }
}

// code to disable refresh button
history.pushState(null, document.title, location.href);
history.back();
history.forward();
window.onpopstate = function () { history.go(1); };

//start btn onclick event
start_btn.onclick = () => {
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
    startTimer(60); // calling start timer
}

var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
var skipAns = 0;
count_ques.innerHTML = que_index + 1;
ShowQuestion(que_index);

//function to show question in loop 

function ShowQuestion(q_index) {
    total_q.innerText = questions.length;
    total_ques_r.innerText = questions.length;

    // ques_text.innerText = questions[q_index].num + ". " + questions[q_index].question;
    ques_text.innerText = questions[q_index].question;
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
    skip_btn.classList.remove("inactive");
}

//onclick event for skip function
skip_btn.onclick = () => {
    que_index++;
    if (questions.length > que_index) {
        count_ques.innerText = que_index + 1;
        ShowQuestion(que_index);
    }

    else {
        console.log("exam complete")
        warning.classList.add('inactive')
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_r.innerText = right_answers;
        wrong_ans_r.innerText = wrong_answers;
        skip_ans_r.innerText = skipAns;
        percentage.innerText = ((right_answers * 100) / questions.length).toFixed(2) + "%"; //percentage formula
    }

}

//javascript code for timer


function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time + " minutes";
        time--;
        if (time < 9) {
            timeCount.textContent = "0" + timeCount.textContent
        }
        if (time < 0) {
            clearInterval(counter);
        }
    }
}


//onclick event for next function
next_btn.onclick = () => {
    que_index++;
    if (questions.length > que_index) {
        count_ques.innerText = que_index + 1;
        shuffledQuestion = questions.sort(() => Math.random() - .5);
        ShowQuestion(que_index);
    } else {
        console.log("exam complete")
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_r.innerText = right_answers;
        wrong_ans_r.innerText = wrong_answers;
        skip_ans_r.innerText = skipAns;
        percentage.innerText = ((right_answers * 100) / questions.length).toFixed(2) + "%"; //percentage formula
    }

    if (questions.length - 1 == que_index) {
        warning.classList.add("inactive");
        next_btn.innerText = "Finish";
        //To stop the watch where user click on finish
        clearInterval(counter);
        // tab switch count down
        document.getElementById('info').innerHTML = "The Browser Tab has been change or minimized " + counter + " times"
    }
}

//javascrip to get users answer and give the feeds if it is correct of wrong with color and correct answer
function UserAnswer(answer) {
    let UserAns = answer.innerText;
    let skipAns = 0;
    let correctAns = questions[que_index].answer;
    var AllOptions2 = options_box.querySelectorAll(".option");
    // let WrongAnsArr = []; //array to store wrong answered questions


    next_btn.classList.remove("inactive");

    if (UserAns == correctAns) {
        console.log("%c Right Answer", "color:green");
        answer.classList.add("correct");
        right_answers++;
        RightAudio.play();
    }

    else {
        console.log("%c Wrong Answer", "color:red");
        answer.classList.add("incorrect");
        wrong_answers++;
        WrongAudio.play();

        questions = questions.filter(function (UserAns) {
            return UserAns != correctAns;
        });

        // console.log(UserAns, questions[que_index]);
        // WrongAnsArr[que_index] = questions[que_index];
        // console.log(UserAns, WrongAnsArr[que_index]);
        // const quest = questions.push(WrongAnsArr[que_index]);
        for (var i = 0; i < AllOptions2.length; i++) {
            if (AllOptions2[i].innerText == correctAns) {
                AllOptions2[i].classList.add("correct");
            }
        }
    }

    // if(UserAns == skipAns){
    //     answer.classList.add("incorrect");
    //     skipAns++;
    // }

    // javascript code to disable other options after one get selected
    for (var j = 0; j < AllOptions2.length; j++) {
        AllOptions2[j].classList.add("disabled");
    }

}

//javascript code for again_quiz button
again_quiz.onclick = () => {
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();
}

//javascript code for exit button
exit.onclick = () => {
    start_btn.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();
}


function reset() {
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    next_btn.innerText = "Next Question";
    count_ques.innerHTML = que_index + 1;
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    ShowQuestion(que_index);
    ShowQuestion(shuffledQuestion[que_index]);
}