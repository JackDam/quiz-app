// Sample data (You can extend this with more questions)
const quizData = [
    {
        question: "Which of the following statements about the CFA Institute's Professional Conduct Program (PCP) is least accurate?",
        options: [
            "A) Possible sanctions include condemnation by a member’s peers or suspension of a candidate’s participation in the CFA Program.",
            "B) If the PCP staff determine that a sanction against a member is warranted, the member must either accept the sanction or lose the right to use the CFA designation.",
            "C) Members who cooperate with a PCP inquiry by providing confidential client information to PCP staff are not in violation of Standard III(E) Preservation of Confidentiality."
        ],
        correctAnswer: "B",
        explanation: "Members can accept or reject a disciplinary sanction proposed by the Professional Conduct Program staff..."
    }
];

let currentQuestion = 0;

// Display the first question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionData = quizData[currentQuestion];

    questionElement.innerText = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `<input type="radio" name="answer" value="${option[0]}"> ${option}`;
        optionsElement.appendChild(optionElement);
    });
}

// Handle answer submission
document.getElementById('submitButton').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const resultElement = document.getElementById('result');
    const explanationElement = document.getElementById('explanation');
    
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const correctAnswer = quizData[currentQuestion].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            resultElement.innerText = `Correct! ✓`;
        } else {
            resultElement.innerText = `Incorrect. The correct answer is: ${correctAnswer}`;
        }

        // Display explanation
        explanationElement.innerText = quizData[currentQuestion].explanation;
    } else {
        resultElement.innerText = 'Please select an option!';
    }
});

// Initialize the quiz
displayQuestion();
