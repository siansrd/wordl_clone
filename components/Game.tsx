import { useState } from "react"
import { ANSWER } from "../game/game_config"
import { addGuess, CheckGuess, createCheckGuess } from "../game/game_logic"
import Grid from "./Grid"
import Guess from "./Guess"

const Game = () => {

  const [gameWon, setGameWon] = useState<boolean>(false)
  const [guesses, setGuesses] = useState<string[]>([])

  const checkGuess: CheckGuess = createCheckGuess(ANSWER)
  
  const submitGuess = (guess: string) => {
    setGuesses(addGuess(guess, guesses))
    setGameWon(checkGuess(guess))
  }
 
  return <div>
    <Grid guesses={guesses}/>
    <Guess submitGuess={submitGuess}/>
    <p>{gameWon ? "correct" : "incorrect"}</p>
  </div>
}

export default Game

