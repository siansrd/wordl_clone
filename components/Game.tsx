import { useState } from "react"
import Grid from "./Grid"
import Guess from "./Guess"

const Game = () => {

  const [guess, setGuess] = useState<string>("")
 
  return <div>
    <Grid/>
    <Guess setGuess={setGuess}/>
  </div>
}

export default Game