import { addGuess, createCheckGuess } from "../game_logic"
const ANSWER = "A"
const checkGuess = createCheckGuess("A")

describe('checkGuess', () => {
  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess("A")).toEqual(true)
  })

  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess("B")).toEqual(false)
  })
})


describe ('addGuess', () => {
  test('it should add new guess to array of guesses', () => {
    expect(addGuess("B", ["A"])).toEqual(["A", "B"])
  })
})