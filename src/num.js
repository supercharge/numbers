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
}

module.exports = Num
