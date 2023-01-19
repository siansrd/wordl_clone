import { useState } from 'react'
import { ANSWER } from '../game/game_config'
import { addGuess, CheckGuess, createCheckGuess } from '../game/src/game'
import Grid from './Grid'
import Guess from './GuessForm'

const Game = () => {
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [guesses, setGuesses] = useState<string[]>([])

  const checkGuess: CheckGuess = createCheckGuess(ANSWER)

  const submitGuess = (guess: string) => {
    setGuesses(addGuess(guess, guesses))
    setGameWon(checkGuess(guess))
  }

  return (
    <div>
      <Grid
        guesses={guesses}
        answer={ANSWER}
      />
      <Guess submitGuess={submitGuess} />
      {gameWon && 'You won!'}
    </div>
  )
}

export default Game
