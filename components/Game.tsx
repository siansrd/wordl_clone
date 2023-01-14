import { ANSWER } from "../game/game_config"
import { createCheckGuess } from "../game/game_logic"
import Grid from "./Grid"
import Guess from "./Guess"

const Game = () => {

  const checkGuess = createCheckGuess(ANSWER)
 
  return <div>
    <Grid/>
    <Guess checkGuess={checkGuess}/>
  </div>
}

export default Game