'use strict'

import { RandomIntInRangeOptions as RandomIntOptions } from './options'

export class Num extends Number {
  /**
   * Generates and returns a random integer in range from
   * `min` to `max`. Both, `min` and `max` are included
   * in the random number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  static randomIntWithin (min: number, max: number, options?: RandomIntOptions): number {
    const candidates = this.allIntWithin(min, max, options)

    const index = Math.floor(Math.random() * candidates.length)

    return candidates[index]
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
  static allIntWithin (min: number, max: number, options?: RandomIntOptions): number[] {
    if (this.diff(max, min) < 0) {
      return []
    }

    const { except = [] } = options ?? { }
    const exceptions = ([] as number[]).concat(except)

    return Array
      .from(
        { length: max - min + 1 },
        (_, index) => index + min // mapping function filling the array
      )
      .filter(candidate => {
        return !exceptions.includes(candidate)
      })
  }

  /**
   * Generates and returns a random number between then given
   * `min` and `max` numbers. Both, `min` and `max` are
   * excluded in the random number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  static randomIntBetween (min: number, max: number, options?: RandomIntOptions): number|undefined {
    if (this.diff(max, min) <= 1) {
      return
    }

    const { except = [] } = options ?? { }
    const exceptions = ([] as number[]).concat(except).concat([min, max])

    const candidates = this.allIntWithin(min, max, { except: exceptions })

    const index = Math.floor(Math.random() * candidates.length)

    return candidates[index]
  }

  /**
   * Returns the difference between the first item and the rest.
   *
   * @param {Number} a
   * @param {...Number} rest
   *
   * @returns {Number}
   */
  static diff (a: number, ...nums: number[]): number {
    const sum = nums.reduce((sum, number) => {
      return sum + number
    }, 0)

    return a - sum
  }
}
