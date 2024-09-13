
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizStart from './QuizStart';
import QuizTaking from './QuizTaking';
import QuizResult from './QuizResult';

const quizData = {
  title: 'General Knowledge Quiz',
  questions: [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ]
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Sri Lanka", correct: false },
      ]
    },
    {
      question: "Which is the largest desert in the world?",
      answers: [
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: false },
        { text: "Antarctica", correct: true },
      ]
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false },
      ]
    }
  ]
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route path="/quiz" element={<QuizTaking quiz={quizData} />} />
        <Route path="/result" element={<QuizResult />} />
      </Routes>
    </Router>
  );
}

export default App;
