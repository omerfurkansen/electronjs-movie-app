// A helper function to generate a random character
export const getRandomChar = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}