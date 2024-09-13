import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function QuizResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { username, score, total } = state || {};
  const percentage = ((score / total) * 100).toFixed(2);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz Completed</h1>
      <p className="text-lg mb-4">Username: {username}</p>
      <p className="text-lg mb-4">Score: {score} out of {total}</p>
      <p className="text-lg mb-4">Percentage: {percentage}%</p>
      <button
        onClick={handleRestart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizResult;
