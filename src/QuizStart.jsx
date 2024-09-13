import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizStart() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (username.trim()) {
      navigate('/quiz', { state: { username } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz</h1>
      <input
        type="text"
        placeholder="Enter your username"
        className="p-2 border rounded mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStart;
