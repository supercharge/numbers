'use strict'

class Num {
  /**
   * Determine whether the number is an integer.
   *
   * @returns {Boolean}
   */
  static isInteger (num) {
    return Number.isInteger(num)
  }

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
