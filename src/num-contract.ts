'use strict'

export interface NumContract extends Number {
  /**
   * Determine whether a given number matches the range of `min` and `max`.
   * Both, `min` and `max` are considered part of the available range.
   *
   * @param {Number} min
   * @param {Number} max
   */
  isInRange (min: number, max: number): boolean

  /**
   * Returns the difference of the number and the given `numberss`.
   *
   * @param {Number[]} numbers
   */
  diff (...numbers: number[]): number
}
