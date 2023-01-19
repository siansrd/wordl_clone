import React, { SyntheticEvent, useState } from "react";
import { WORD_LENGTH } from "../game/game_config";
import { createCheckWordLength } from "../game/src/form_validation";

type Props = {
  submitGuess: (guess: string) => void
}

const checkWordLength = createCheckWordLength(WORD_LENGTH)

const Guess = ({submitGuess} : Props) => {

  const [error, setError] = useState<React.ReactElement>(<></>)

  const handleSubmitGuess = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!checkWordLength(guess)) {
      setError(<p>needs to be 5 letters</p>) }
    else {
      setError(<></>)
      submitGuess(guess)
      setGuess("")
    }
  }

  const [guess, setGuess] = useState<string>("")

  return <form onSubmit={e => handleSubmitGuess(e)}>
    <label>
      Guess:
      <input 
        maxLength={5}
        type="text" 
        name="guess" 
        value={guess} 
        onChange={e => setGuess(e.target.value)}/>
    </label>
    <input type="submit" value="Guess" />
    {error}
  </form>
}

export default Guess
