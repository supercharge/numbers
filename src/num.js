'use strict'

class Num extends Number {
  /**
   * Generates and returns a random integer in range from
   * `start` to `end`. Both, `start` and `end` are
   * included in the random number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  static randomInt (min, max) {
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  }

  /**
   * Generates and returns a random number between then given
   * `start` and `end` numbers. Both, start and end are
   * excluded in the random number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  static randomIntBetween (min, max) {
    if (this.diff(max, min) <= 1) {
      return
    }

    return Math.floor(
      Math.random() * (max - (min + 1))
    ) + (min + 1)
  }

  /**
   * Returns an array of all integer values in range from
   * `min` to `max`, including both `min` and `max`.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Array}
   */
  static allIntInRange (min, max) {
    return this.diff(max, min) <= 0
      ? []
      : Array.from(
        { length: max - min + 1 },
        (_, index) => index + min // mapping function to fill the array
      )
  }

  /**
   * Returns a random item from the range between `min` and `max`.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  static randomIntInRange (min, max, options = {}) {
    const { except = [] } = options
    const exceptions = [].concat(except)

    const candidates = this
      .allIntInRange(min, max)
      .filter(candidate => {
        return !exceptions.find(exception => {
          return exception === candidate
        })
      })

    return candidates[
      Math.floor(Math.random() * candidates.length)
    ]
  }

  /**
   * Returns the difference between the first item and the rest.
   *
   * @param {Number} a
   * @param {...Number} rest
   *
   * @returns {Number}
   */
  static diff (a, ...nums) {
    const sum = nums.reduce((sum, number) => {
      return sum + number
    }, 0)

    return a - sum
  }
}

module.exports = Num
