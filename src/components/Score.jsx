import React from 'react'
import './style.css'

const Score = ({ handleResetClick, score, wrongAnswers }) => {
  return (
    <div className='score'>
      <p>{score} doğru {wrongAnswers} yanlış</p>
      <button onClick={handleResetClick}>Tekrar oyna</button>
    </div>
  )
}

export default Score
