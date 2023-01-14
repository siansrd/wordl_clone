import Row from "./Row"
import styles from '../styles/Home.module.css'
import { GUESSES } from "../game/game_config"

type GridProps = {
  guesses: string[]
}

const Grid = ({guesses}: GridProps) => {

  const rows = [...Array(GUESSES)].map((_, i) => {
    const word: string = guesses[i]
    return <Row word={word ? word : "     "} key={i} />
  })

  return <div className={styles.grid}>
    {rows}
  </div>
}

export default Grid