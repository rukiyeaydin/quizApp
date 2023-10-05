import React from 'react'
import './style.css'

const Quiz = ({questions, currentQuestion, handleAnswerClick}) => {
  return (
    <div className='quiz'>
      <p>Soru {currentQuestion + 1} / {questions.length} </p>
      <h3>{questions[currentQuestion].soru}</h3>
      <div className="cevaplar">
        {questions[currentQuestion].cevaplar.map(({text, isCorrect}) => (
            <button className='c1' key={text} onClick={() => handleAnswerClick(isCorrect)}>{text}</button>
        ))}
      </div>
    </div>
  )
}

export default Quiz
