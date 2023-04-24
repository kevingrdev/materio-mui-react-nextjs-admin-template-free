/**
 * Saves a value to localStorage, converting non-string values to JSON strings.
 *
 * @param {string} key - The key to store the value under in localStorage.
 * @param {*} value - The value to store in localStorage.
 * @throws {Error} - Throws an error if localStorage is not available or if the key is not a string.
 */
export function saveToLocalStorage(key, value) {
  try {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string')
    }

    const valueString = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, valueString)
  } catch (error) {
    throw new Error('Error saving to localStorage: ' + error.message)
  }
}

/**
 * Gets a value from localStorage, parsing JSON strings back into objects or primitives.
 *
 * @param {string} key - The key to retrieve the value for from localStorage.
 * @returns {*} - The value stored under the given key, or null if it does not exist.
 * @throws {Error} - Throws an error if localStorage is not available or if the key is not a string.
 */
export function getFromLocalStorage(key) {
  try {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string')
    }

    const value = localStorage.getItem(key)

    return JSON.parse(value) ? JSON.parse(value) : value
  } catch (error) {
    throw new Error('Error retrieving from localStorage: ' + error.message)
  }
}
