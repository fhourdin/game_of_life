import React, { useState } from 'react'
import Sentence from './Sentence'

const App = () => {
  const [sentence, setSentence] = useState('Hello World')

  const handleClick = () => {
    setSentence('Good Bye World')
  }

  return (
    <div>
      <Sentence sentence={sentence}>
        <span>Coucou</span>
      </Sentence>
      <button type="button" onClick={handleClick}>
        Bouton
      </button>
    </div>
  )
}

export default App
