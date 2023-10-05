import './App.css'
import { useState } from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  const questions = [
    {
      soru: "Dünyada toplam kaç okyanus vardır?",
      cevaplar: [
        { text: "8"},
        { text: "7" }, 
        { text: "6" }, 
        { text: "5", isCorrect: true }
      ],
    },
    {
      soru: "Guiness Dünya Rekorlarına göre tıp tarihindeki en ağır insan yaklaşık kaç kiloydu?",
      cevaplar: [
        { text: "635", isCorrect: true },
        { text: "735" },
        { text: "835" },
        { text: "935" },
      ],
    },
    {
      soru: "Asprinin ham maddesi olan ağaç nedir?",
      cevaplar: [
        { text: "Çobanpüskülü" },
        { text: "çam" },
        { text: "Sığla" },
        { text: "Söğüt", isCorrect: true },
      ],
    },
    {
      soru: "Brezilyanın başkenti nedir?",
      cevaplar: [
        { text: "São Paulo" },
        { text: "Rio De Janeiro" },
        { text: "Brazilya", isCorrect: true },
        { text: "Minas Gerais" },
      ],
    },
    {
      soru: "Hangisi dünyadan daha küçüktür?",
      cevaplar: [
        { text: "Mars", isCorrect: true },
        { text: "Satürn" },
        { text: "Neptün" },
        { text: "Uranüs" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [isQuizOver, SetIsQuizOver] = useState(false);
  const [score, SetScore] = useState(0);
  const [wrongAnswers, SetWrongAnswers] = useState(0);


  const handleAnswerClick = (isCorrect) => {
    const next = currentQuestion + 1;
    if(next < questions.length) setCurrentQuestion(next);
    else SetIsQuizOver(true);

    if(isCorrect) SetScore(score + 1);
    else if(!isCorrect) SetWrongAnswers(wrongAnswers + 1)

  }

  const handleResetClick = () => {
    setCurrentQuestion(0);
    SetIsQuizOver(false);
    SetScore(0);
    SetWrongAnswers(0);
  }

  return (
    <div className='app'>
      {isQuizOver ? (
      <Score handleResetClick={handleResetClick} score={score} wrongAnswers={wrongAnswers}/>
      ) : (
      <Quiz questions={questions} currentQuestion={currentQuestion} handleAnswerClick={handleAnswerClick}/>
      )}
    </div>
  )
}

export default App
