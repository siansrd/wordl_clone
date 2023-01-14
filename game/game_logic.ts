export type CheckGuess = (guess: string) => boolean
type CreateCheckGuess = (answer: string) => CheckGuess

export const createCheckGuess: CreateCheckGuess = (answer: string) => {
  return (guess: string) => {
    return answer === guess
  }
}

export const addGuess = (guess: string, guesses: string[]): string[] => {
  return [...guesses, guess]
}
 

