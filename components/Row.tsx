import Box from "./Box"

const Row = () => {
  const WORD_LENGTH = 5

  const boxes = [...Array(WORD_LENGTH)].map((_, i) => <Box letter={"A"} key={i}></Box>)

  return <div>{boxes}</div>
}

export default Row