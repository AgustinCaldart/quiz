import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '¿Como se define un Channel de solo lectura?',
			answerOptions: [
				{ answerText: 'Rchan', isCorrect: false },
				{ answerText: 'chan<-', isCorrect: false },
				{ answerText: 'chan->', isCorrect: false },
				{ answerText: '<-chan', isCorrect: true },
			],
		},
		{
			questionText: '¿Con base a que concepto se utilizan los Waitgroups?',
			answerOptions: [
				{ answerText: 'Contador', isCorrect: true },
				{ answerText: 'Buffer', isCorrect: false },
				{ answerText: 'Comunicacion', isCorrect: false },
			],
		},
		{
			questionText: '¿Cuando usariamos la concurrencia?',
			answerOptions: [
				{ answerText: 'Cuando una tarea se puede dividir en diferentes segmentos para funcionar mejor', isCorrect: false },
				{ answerText: 'Cualquier trabajo que pueda utilizar los multinúcleo de la CPU', isCorrect: false },
				{ answerText: 'Al realizar múltiples solicitudes a diferentes endpoint de una API', isCorrect: false },
				{ answerText: 'Todas las opciones', isCorrect: true },
			],
		},
		{
			questionText: '¿Con que metodo restamos en 1 los waitgroups?',
			answerOptions: [
				{ answerText: 'start()', isCorrect: false },
				{ answerText: 'Deduct()', isCorrect: false },
				{ answerText: 'Wait()', isCorrect: false },
				{ answerText: 'Done()', isCorrect: true },
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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Tu puntuación {score} de {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
