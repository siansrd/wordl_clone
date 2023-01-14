import { WORD_LENGTH } from "../game/game_config"
import styles from "../styles/Home.module.css"
import Box from "./Box"

type RowProps = {
  word: string
}

const Row = ({word}: RowProps) => {

  const boxes = [...Array(WORD_LENGTH)].map((_, i) => <Box letter={word[i]} key={i}></Box>)

  return <div className={styles.row}>{boxes}</div>
}

export default Row