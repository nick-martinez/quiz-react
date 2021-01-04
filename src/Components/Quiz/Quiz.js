import React, { useState } from "react";
import "../Quiz/Quiz.css";

export default function Quiz() {
  const questions = [
    {
			questionPrompt: "How many pages is a React app (ideally)?",
			answers: [
				{ answerText: "0", isCorrect: false },
				{ answerText: "1", isCorrect: true },
				{ answerText: "2", isCorrect: false },
				{ answerText: "3", isCorrect: false },
			],
		},
    {
			questionPrompt: "React is a JavaScript framework?",
			answers: [
				{ answerText: "True", isCorrect: false },
				{ answerText: "False", isCorrect: true },
			],
		},
    {
			questionPrompt: "Reaact is a JavaScript library?",
			answers: [
				{ answerText: "True", isCorrect: true },
				{ answerText: "False", isCorrect: false },
			],
		},
    {
			questionPrompt: "React is concerned with this kind of management?",
			answers: [
				{ answerText: "iOS", isCorrect: false },
				{ answerText: "upper", isCorrect: false },
				{ answerText: "function", isCorrect: false },
				{ answerText: "state", isCorrect: true },
			],
		},
    {
			questionPrompt: "What popular social media company is responsible for maintaining React?",
			answers: [
				{ answerText: "Facebook", isCorrect: true },
				{ answerText: "Twitter", isCorrect: false },
				{ answerText: "Linkdin", isCorrect: false },
				{ answerText: "Reddit", isCorrect: false },
			],
		},
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  };

	
	function restartQuiz() {
		const restartValue = 0

		setCurrentQuestion(restartValue);	
		setScore(restartValue);
		setShowScore(false);
	}
  
	return (
		<div className="quizContainer">
			{showScore ? (
				<div className="result">
					You scored {score} out of {questions.length}
					<button onClick={restartQuiz}>Try Again</button>
				</div>
			) : (
				<>
					<div className="question">
						<div className="questionCount">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className="questionPrompt">{questions[currentQuestion].questionPrompt}</div>
					</div>
					<div className="answers">
            {questions[currentQuestion].answers.map((answer) => (
							<button onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}