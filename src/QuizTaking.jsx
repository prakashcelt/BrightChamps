import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function QuizTaking({ quiz }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalTimeLeft, setTotalTimeLeft] = useState(30); // Total timer set to 30 seconds
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const username = state?.username || 'Guest';

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    if (quizFinished) return;

    // Timer for total quiz duration
    const totalTimer = setInterval(() => {
      setTotalTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(totalTimer);
          handleEndQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(totalTimer);
  }, [quizFinished]);

  useEffect(() => {
    if (selectedAnswer !== null || totalTimeLeft <= 0) {
      handleNext();
    }
  }, [selectedAnswer, totalTimeLeft]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const isCorrect = currentQuestion.answers[selectedAnswer].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (totalTimeLeft <= 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    if (currentQuestionIndex + 1 >= quiz.questions.length) {
      handleEndQuiz();
    }
  };

  const handleEndQuiz = () => {
    setQuizFinished(true);
    navigate('/result', { state: { username, score, total: quiz.questions.length } });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md max-w-md w-full mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">{quiz.title}</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">{currentQuestion.question}</p>
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`w-full p-2 mb-2 border rounded ${selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleAnswerSelect(index)}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <p className="text-lg font-semibold mb-4">Time Left: {totalTimeLeft}s</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => handleNext()}
        disabled={selectedAnswer === null && totalTimeLeft > 0}
      >
        Next
      </button>
    </div>
  );
}

export default QuizTaking;
