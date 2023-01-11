import { Dispatch, SetStateAction, SyntheticEvent } from "react";

type Props = {
  setGuess: Dispatch<SetStateAction<string>>
}

const Guess = ({setGuess} : Props) => {
  
  const handleSubmitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    setGuess(e.target.guess.value || "")
  }

  return <form onSubmit={e => handleSubmitGuess(e)}>
    <label>
      Guess:
      <input type="text" name="guess" />
    </label>
    <input type="submit" value="Guess" />
  </form>
}

export default Guess
