export type CheckGuess = (guess: string) => boolean
type CreateCheckGuess = (answer: string) => CheckGuess

export enum letterResult {
  correct = "CORRECT",
  incorrectPosition = "INCORRECT_POSITION",
  incorrect = "INCORRECT"
}

export const createCheckGuess: CreateCheckGuess = (answer: string) => {
  return (guess: string) => {
    return answer === guess
  }
}

export const addGuess = (guess: string, guesses: string[]): string[] => {
  return [...guesses, guess]
}

export const getLetterResult = (guess: string, answer: string, position: number) => {
  return answer[position] === guess 
    ? letterResult.correct : answer.includes(guess) 
    ? letterResult.incorrectPosition : letterResult.incorrect
}
 

