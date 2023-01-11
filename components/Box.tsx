const Box = ({ letter }: BoxProps) => <div>{letter}</div>;

export default Box


type BoxProps = {
  letter: string;
}