//javascript start here
const start_btn = document.querySelector(".start_quiz");
//quiz question and options const
const quiz_box = document.querySelector(".quiz-box");
const ques_text = quiz_box.querySelector(".ques_text");
const options_box = quiz_box.querySelector(".options");
//variable to display sidebar btn
const row = document.querySelector(".row");
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
// const RightAudio = new Audio();
// RightAudio.src = "../audio/correctAudio.mp3"
// const WrongAudio = new Audio();
// WrongAudio.src = "../audio/wrongAudio.mp3"


// Prevent F5 and Ctrl+R
document.addEventListener("keydown", function(event) {
    // F5 key
    if (event.key === "F5") {
        event.preventDefault();
    }
    // Ctrl+R or Command+R on Mac
    if ((event.ctrlKey || event.metaKey) && event.key === "r") {
        event.preventDefault();
    }
});

// Warn users before they leave the page
window.addEventListener("beforeunload", function(event) {
    // Customize the message as needed
    const confirmationMessage = "You have unsaved changes. Are you sure you want to leave?";
    event.returnValue = confirmationMessage; // This line is required for most browsers
    return confirmationMessage; // Some browsers will show this message
});



// js code to display form details

const navbarBtn = document.getElementById("navbarBtn");
// const sidebar = document.getElementById("sidebar");

// Set the initial state of the sidebar
sidebar.style.display = "none"; // Initially hide the sidebar

// Store original margin
const originalMargin = navbarBtn.style.marginLeft || "0px";

navbarBtn.addEventListener("click", function() {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block"; // Show sidebar
        navbarBtn.style.marginLeft = "250px"; // Set left margin to 250px
    } else {
        sidebar.style.display = "none"; // Hide sidebar
        navbarBtn.style.marginLeft = originalMargin; // Reset left margin
    }
});   

// }

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
    // startTimer(60); // calling start timer
}

var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
var skipAns = 0;
count_ques.innerHTML = que_index + 1;


// Prompt user for experience level
let userExperienceLevel = prompt("Enter your experience level (fresher, below 1 year, 1 year, more than 1 year):").toLowerCase();

// Filter questions based on new experience levels
function filterQuestionsByExperience(experienceLevel) {
    return questions.filter(question => question.experienceLevel === experienceLevel);
}

// Shuffle function
function shuffleArray(originalArray) {
    const questions = [...originalArray];
    const shuffledArray = [];

    while (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        shuffledArray.push(questions.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
}

// Filter and shuffle questions
const filteredQuestions = filterQuestionsByExperience(userExperienceLevel);
const shuffled = shuffleArray(filteredQuestions);

// Function to create sidebar buttons for each question
function createSidebarButtons() {
    shuffled.forEach((question, index) => {
        const listItem = document.createElement('button');
        listItem.textContent = `Question ${index + 1}`;
        listItem.id = `question-${index}`; // Store the index in the ID
        // Set onclick event to show the question when clicked
        listItem.onclick = () => {
            que_index = index; // Update the current question index
            ShowQuestion(que_index); // Show the selected question
        };

        row.appendChild(listItem);
    });
}

// Call this function to create the sidebar buttons
createSidebarButtons();   

ShowQuestion(que_index);
//function to show question in loop
function ShowQuestion(q_index) {
    total_q.innerText = shuffled.length;
    total_ques_r.innerText = shuffled.length;

    // ques_text.innerText = shuffled[q_index].num + ". " + shuffled[q_index].question;
    ques_text.innerText = shuffled[q_index].question;
    
    //loop to display question in question box     
    var option_statement = "";

    for (var i = 0; i < shuffled[que_index].options.length; i++) {
        option_statement += `<div class="option">${shuffled[que_index].options[i]}</div>`;
    }

    options_box.innerHTML = option_statement;
    var AllOptions = options_box.querySelectorAll(".option");

    for (var j = 0; j < AllOptions.length; j++) {
        AllOptions[j].setAttribute("onclick", "UserAnswer(this)");
    }
    next_btn.classList.add("inactive");
    skip_btn.classList.remove("inactive");
}


// Function to change the sidebar button color to green
function changeSidebarButtonColor(index) {
    const button = document.getElementById(`question-${index}`);
    if (button) {
        button.style.backgroundColor = 'purple';
        button.style.color = 'white'; // Optional: Change text color for better visibility
    }
}

// Array to hold user answers and correct answers and question as objects
let answers = [];
// Define a variable to hold the score
let score = 0;
// User answer handling function
function UserAnswer(answer) {
    let UserAns = answer.innerText;
    let correctAns = shuffled[que_index].answer;
    var AllOptions2 = options_box.querySelectorAll(".option");
    let questionText = shuffled[que_index].question; // Get the current question text
     // let WrongAnsArr = []; //array to store wrong answered shuffled

    next_btn.classList.remove("inactive");

    // Store the user's answer and the correct answer and question in an object
    answers[que_index] = {
        question: questionText,
        userAnswer: UserAns,
        correctAnswer: correctAns
    };

    // Change the sidebar button color after answering
    changeSidebarButtonColor(que_index); // Pass the current question index

    if (UserAns == correctAns) {
        console.log("%c Right Answer", "color:green");
        answer.classList.add("correct");
        right_answers++;
        score++; // Increase score for a correct answer
        // RightAudio.play();
    } else {
        console.log("%c Wrong Answer", "color:red");
        answer.classList.add("incorrect");
        wrong_answers++;
        score -= 0.5; // Deduct 0.5 points for an incorrect answer
        // WrongAudio.play();

        // Highlight the correct answer
        for (var i = 0; i < AllOptions2.length; i++) {
            if (AllOptions2[i].innerText == correctAns) {
                AllOptions2[i].classList.add("correct");
            }
        }
    }

    // Disable other options after one gets selected
    for (var j = 0; j < AllOptions2.length; j++) {
        AllOptions2[j].classList.add("disabled");
    }
    console.log("Answers:", answers);
    console.log("Current Score:", score);
}

// Update the result display function to include the score
function displayResults() {

    // Retrieve user info from local storage
    const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    // Display user info in the result box
    if (storedInfo) {
        const userInfoDisplay = `
            <p><strong>Name:</strong> ${storedInfo.name}</p>
            <p><strong>Mobile:</strong> ${storedInfo.mobile}</p>
            <p><strong>Qualification:</strong> ${storedInfo.qualification}</p>
            <p><strong>Email:</strong> ${storedInfo.email}</p>
            <p><strong>Experience:</strong> ${storedInfo.experience}</p>
        `;
        document.querySelector('.user-info-display').innerHTML = userInfoDisplay;
    }
    
    right_ans_r.innerText = right_answers;
    wrong_ans_r.innerText = wrong_answers;
    skip_ans_r.innerText = skipAns;
    percentage.innerText = ((right_answers * 100) / shuffled.length).toFixed(2) + "%"; // percentage formula
    document.querySelector(".final-score-value").innerText = score.toFixed(2); // Display the final score
}

//onclick event for skip function
skip_btn.onclick = () => {
    que_index++;
    if (shuffled.length > que_index) {
        count_ques.innerText = que_index + 1;
        ShowQuestion(que_index);
        skipAns++;
    }

    else {
        console.log("exam complete");
        warning.classList.add('inactive');
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        // right_ans_r.innerText = right_answers;
        // wrong_ans_r.innerText = wrong_answers;
        // skip_ans_r.innerText = skipAns;
        // percentage.innerText = ((right_answers * 100) / shuffled.length).toFixed(2) + "%"; //percentage formula
        displayResults();
    }

}

//onclick event for next function
next_btn.onclick = () => {
    que_index++;
    if (shuffled.length > que_index) {
        count_ques.innerText = que_index + 1;
        // shuffledQuestion = shuffled.sort(() => Math.random() - .5);
        ShowQuestion(que_index);
    } else {
        console.log("exam complete")
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        // right_ans_r.innerText = right_answers;
        // wrong_ans_r.innerText = wrong_answers;
        // skip_ans_r.innerText = skipAns;
        // percentage.innerText = ((right_answers * 100) / shuffled.length).toFixed(2) + "%"; //percentage formula
        displayResults();
    }

    if (shuffled.length - 1 == que_index) {
        warning.classList.add("inactive");
        next_btn.innerText = "Finish";
        //To stop the watch where user click on finish
        clearInterval(counter);
        // tab switch count
        document.getElementById('info').innerHTML = "The Browser Tab has been change or minimized " + counter + " times"
    }
}

// // Function to display answers
function displayAnswers() {
    const answersDisplay = document.querySelector(".answers-display");
    answersDisplay.innerHTML = ""; // Clear previous content

    // Iterate through the answers array and create HTML for each
    answers.forEach((answer, index) => {
        const answerBlock = document.createElement("div");
        answerBlock.classList.add("answer-block");

        answerBlock.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${answer.question}</p>
            <button class="toggle-answer" data-index="${index}">Show Answers</button>
            <div class="answer-details inactive" id="answer-details-${index}">
            <p><strong>Your Answer:</strong> ${answer.userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
             </div>
        `;

        answersDisplay.appendChild(answerBlock);
    });

    // Show the modal
    const modal = document.querySelector(".modal");
    modal.classList.remove("inactive");
    modal.style.display = "block"; // Show the modal

      // Add event listeners to toggle answer visibility
      const toggleButtons = document.querySelectorAll(".toggle-answer");
      toggleButtons.forEach(button => {
          button.onclick = () => {
              const index = button.getAttribute("data-index");
              const answerDetails = document.getElementById(`answer-details-${index}`);
              answerDetails.classList.toggle("inactive");
              button.textContent = answerDetails.classList.contains("inactive") ? "Show Answers" : "Hide Answers";
          };
      });
}

// Close the modal when the close button is clicked
document.querySelector(".close").onclick = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none"; // Hide the modal
};

// Add event listener for the Show Answers button
document.querySelector(".show-answers").onclick = () => {
    displayAnswers();
};

//javascript code for again_quiz button
// again_quiz.onclick = () => {
//     quiz_box.classList.remove("inactive");
//     result_box.classList.add("inactive");
//     reset();
// }

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
    // listItem = 0;
    next_btn.innerText = "Next Question";
    count_ques.innerHTML = que_index + 1;
    shuffledQuestion = shuffled.sort(() => Math.random() - .5);
    ShowQuestion(que_index);
    ShowQuestion(shuffledQuestion[que_index]);
}


// Set the countdown time for 45 minutes (in seconds)
let countdownTime = 15 * 60; // 45 minutes = 2700 seconds

// Function to format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0') + ' minutes'}`;
}

// Function to start the countdown
function startCountdown() {
    const timerElement = document.getElementById('timer');

    const interval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(interval);
            // timerElement.innerHTML = "Time's up!";
            clearInterval(interval);
            timerElement.innerHTML = "Time's up!";
            // Automatically submit the quiz
            console.log("exam complete")
            quiz_box.classList.add("inactive");
            result_box.classList.remove("inactive");
            right_ans_r.innerText = right_answers;
            wrong_ans_r.innerText = wrong_answers;
            skip_ans_r.innerText = skipAns;
            percentage.innerText = ((right_answers * 100) / questions.length).toFixed(2) + "%";
            // submitButton.click(); /
        } else {
            timerElement.innerHTML = `${formatTime(countdownTime)}`;
            countdownTime--;
        }
    }, 1000);
}

// Start the countdown when the page loads
window.onload = startCountdown;

//to load content form local storage
const userInfo = {
    name: name,
    mobile: mobile,
    qualification: qualification,
    email: email,
    experience: Experience,
};

// Store the object in local storage
localStorage.setItem('userInfo', JSON.stringify(userInfo));
