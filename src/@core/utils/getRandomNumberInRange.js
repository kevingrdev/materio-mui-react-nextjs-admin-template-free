import { saveToLocalStorage, getFromLocalStorage } from './localStorage'

export function getRandomNumberInRange(min, max, key) {
  let actualMin = min
  let actualMax = max

  // If the key exists in localStorage, use it as the new min value
  const savedValue = getFromLocalStorage(key)
  if (savedValue !== null) {
    actualMin = Number(savedValue)
    actualMax = 3
  }
  const maxValue = actualMax - actualMin
  const randomNumber = Math.floor(Math.random() * maxValue) + actualMin

  // Save the random number in localStorage under the given key
  saveToLocalStorage(key, randomNumber)

  return randomNumber
}
