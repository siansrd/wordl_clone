import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

type Props = {
  checkGuess: (guess: string) => boolean
}

const Guess = ({checkGuess} : Props) => {
  
  const handleSubmitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    checkGuess(e.target.guess.value || "")
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
