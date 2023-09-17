const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Patna", correct: false },
            { text: "Chandigarh", correct: false },
            { text: "Ladakh", correct: false },
        ]
    },
    {
        question: "What is the full form of CPU?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Central Part of Unit", correct: false },
            { text: "Central Process of Unity", correct: false },
            { text: "Central Process per Unit", correct: false },
        ]
    },
    {
        question: "How many colors does a traffic light have?",
        answers: [
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "5", correct: false },
            { text: "3", correct: true },
        ]
    },
    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyper Markup Language", correct: false },
            { text: "Hypo Maker Language", correct: false },
            { text: "Hypertext Makeup Language", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.addEventListener("click", () => nextQuestion());
    showQuestion();
}

function showQuestion() {
    // Clear answer buttons
    answerButton.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer.correct));
        answerButton.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    const buttons = answerButton.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        if (questions[currentQuestionIndex].answers[i].correct) {
            buttons[i].classList.add("correct");
        } else {
            buttons[i].classList.add("incorrect");
        }
        buttons[i].setAttribute("disabled", true); // Disable all buttons
    }

    if (isCorrect) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = "block"; // Show the next button
    } else {
        // Quiz is over, display the score
        questionElement.innerHTML = "Quiz Over!";
        answerButton.innerHTML = "Your Score: " + score + " out of " + questions.length;
        nextButton.style.display = "none"; // Hide the next button
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    nextButton.style.display = "none"; // Hide the next button until an answer is chosen
}

startQuiz();
