import { createCheckGuess } from "../game_logic"
const ANSWER = "A"
const checkGuess = createCheckGuess("A")

describe('checkGuess', () => {
  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess("A")).toEqual(true)
  })
})