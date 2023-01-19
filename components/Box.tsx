import { LetterResult } from '../game/src/game'
import styles from '../styles/Home.module.css'

type BoxProps = {
  letter: string
  backgroundColour: string
}

const Box = ({ letter, backgroundColour }: BoxProps) => {
  return <div className={`${styles.charBox} ${backgroundColour}`}>{letter}</div>
}

export default Box
