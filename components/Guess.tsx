import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

type Props = {
  submitGuess: (guess: string) => void
}

const Guess = ({submitGuess} : Props) => {
  
  const handleSubmitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    submitGuess(guess)
    setGuess("")
  }

  const [guess, setGuess] = useState<string>("")

  return <form onSubmit={e => handleSubmitGuess(e)}>
    <label>
      Guess:
      <input 
        type="text" 
        name="guess" 
        value={guess} 
        onChange={e => setGuess(e.target.value)}/>
    </label>
    <input type="submit" value="Guess" />
  </form>
}

export default Guess
