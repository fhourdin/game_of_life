/* eslint-disable arrow-body-style */
import React from 'react'

const Sentence = ({ sentence, children }) => {
  return (
    <div>
      <h1>{sentence}</h1>
      {children}
    </div>
  )
}

export default Sentence
