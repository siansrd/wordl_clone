import Row from "./Row"
import styles from '../styles/Home.module.css'

const Grid = () => {

  const GUESSES = 6

  const rows = [...Array(GUESSES)].map((_, i) => <Row key={i}/>)

  return <div className={styles.grid}>
    {rows}
  </div>
}

export default Grid