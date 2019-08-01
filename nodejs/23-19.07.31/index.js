const { encodeObj, decodeObj } = require('./convert')

/**
 * Parses the provided Morse input and returns the translated text after writing
 * it out to the console. Spaces between words are assumed to be seven dots.
 *
 * @param {string} input Input string containing morse.
 */
const decode = input => {
  let res = []

  for (const sequence of input.split(' ')) {
    res.push(decodeObj[sequence])
  }

  return res.join('').toLocaleUpperCase()
}

/**
 * Parses the provided text and converts it to Morse code. Spaces between words
 * are represented with seven dots.
 *
 * @param {string} input Input string containing morse.
 */
const encode = input => {
  let res = []

  for (const sequence of input.toLowerCase().split('')) {
    res.push(encodeObj[sequence])
  }

  return res.join(' ').toLocaleUpperCase()
}

module.exports.decode = decode
module.exports.encode = encode
