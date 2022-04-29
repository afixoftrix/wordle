import React from 'react'
import { CharBox } from './CharBox'

export const Word = ({ word=[" "," "," "," ","d"] }) => {
  console.log("this is word: ", word);
  return (
    <div>{word.map((char, i) => <CharBox key={`${char}-${i}`} char={char} />)}</div>
  )
}
