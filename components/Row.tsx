import Box from "./Box"

const Row = () => {
  const WORD_LENGTH = 5

  const boxes = [...Array(WORD_LENGTH)].map(() => <Box letter={"A"}></Box>)

  return <div>{boxes}</div>

}

export default Row