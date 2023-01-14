import styles from '../styles/Home.module.css'

type BoxProps = {
  letter: string;
}

const Box = ({ letter }: BoxProps) => <div className={styles.charBox}>{letter}</div>;

export default Box