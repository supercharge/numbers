'use strict'

class Num {
  /**
   * Create a new skeleton instance.
   */
  constructor (value) {
    this.value = Number(value)
  }

  /**
   * Determine whether the number is an integer.
   *
   * @returns {Boolean}
   */
  isInteger () {
    return Number.isInteger(this.value)
  }

  /**
   * Generates and returns a random number between then given
   * `start` and `end` numbers. Both, start and end are
   * included in the random number generation process.
   *
   * @param {Number} start
   * @param {Number} end
   *
   * @returns {Number}
   */
  static between (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start)
  }
}

module.exports = Num
