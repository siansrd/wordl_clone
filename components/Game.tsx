import { useState } from "react"
import { ANSWER } from "../game/game_config"
import { createCheckGuess } from "../game/game_logic"
import Grid from "./Grid"
import Guess from "./Guess"

const Game = () => {

  const [gameWon, setGameWon] = useState(false)

  const checkGuess = createCheckGuess(ANSWER)
  
  const submitGuess = (guess: string) => {
    setGameWon(checkGuess(guess))
  }
 
  return <div>
    <Grid/>
    <Guess submitGuess={submitGuess}/>
    <p>{gameWon ? "correct" : "incorrect"}</p>
  </div>
}

export default Game

