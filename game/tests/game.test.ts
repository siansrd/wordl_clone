import { addGuess, createCheckGuess } from "../game_logic"
const checkGuess = createCheckGuess("A")

describe('checkGuess', () => {
  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess("A")).toEqual(true)
  })

  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess("B")).toEqual(false)
  })
})

describe('createCheckGuess', () => {
  const ANSWER = "A"

  test('it should return true if the string it is passed matches the string passed to the returned function', () => {
    expect(createCheckGuess(ANSWER)("A")).toBe(true)
  })

  test('it should return false if the string it is passed does not match the string passed to the returned function', () => {
    expect(createCheckGuess(ANSWER)("B")).toBe(false)
  })
})


describe ('addGuess', () => {
  test('it should add new guess to array of guesses', () => {
    expect(addGuess("B", ["A"])).toEqual(["A", "B"])
  })
})