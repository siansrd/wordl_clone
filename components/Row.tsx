import { WORD_LENGTH } from "../game/game_config"
import { getLetterResult, LetterResult } from "../game/src/game"
import styles from "../styles/Home.module.css"
import Box from "./Box"

type RowProps = {
  word?: string
  answer: string
}

const Row = ({ word, answer }: RowProps) => {
  const boxes = [...Array(WORD_LENGTH)].map((_, i) => {
    if (!word) return <Box key={i} />

    const guessLetter = word[i]
    const guessLetterResult = getLetterResult(guessLetter, answer, i)

    return (
      <Box letter={word[i]} key={i} guessLetterResult={guessLetterResult} />
    )
  })

  return <div className={styles.row}>{boxes}</div>
}

export default Row
