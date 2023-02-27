import { LetterResult } from "../game/src/game"
import styles from "../styles/Home.module.css"

type BoxProps = {
  letter?: string
  guessLetterResult?: LetterResult
}

const Box = ({ letter, guessLetterResult }: BoxProps) => {
  if (!letter) return <div className={`${styles.charBox} ${"white"}`}></div>

  const backgroundColour =
    guessLetterResult === LetterResult.correct
      ? styles.correctPositionBox
      : guessLetterResult === LetterResult.incorrectPosition
      ? styles.incorrectPositionBox
      : styles.incorrectBox

  return (
    <div className={`${styles.charBox} ${backgroundColour}`}>
      {letter && letter.toUpperCase()}
    </div>
  )
}

export default Box
