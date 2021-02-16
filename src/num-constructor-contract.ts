'use strict'

import { NumContract } from './num-contract'
import { RandomIntInRangeOptions } from './options'

export interface NumConstructor {
  /**
   * Create a new instance.
   */
  (value?: any): NumContract

  /**
   * Determine whether the given `input` is a number.
   *
   * @param input - the `input` value to check whether it’s a number
   */
  isNumber (input?: any): boolean

  /**
   * Returns true if the value passed is an integer, false otherwise.
   * @param number A numeric value.
   */
  isInteger(number: unknown): boolean

  /**
   * Determine whether the given `number` is not an integer value.
   *
   * @param {Number} number
   */
  isNotInteger (number: unknown): boolean

  /**
   * Determine whether the given `number` has decimal places. Returns
   * `true` if the value passed has decimal places, `false` otherwise.
   *
   * @param {Number} number
   */
  isDecimal (number: unknown): boolean

  /**
   * Generates and returns a random integer in the range of `min` to `max`.
   * Both, `min` and `max` are included in the number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   */
  randomIntWithin (min: number, max: number, options?: RandomIntInRangeOptions): number

  /**
   * Returns an array of all integer values in the range of
   * `min` to `max`, including both `min` and `max`.
   *
   * @param {Number} min
   * @param {Number} max
   */
  allIntWithin (min: number, max: number, options?: RandomIntInRangeOptions): number[]

  /**
   * Generates and returns a random number between the given `min` and `max`.
   * Both, `min` and `max` are excluded in the number generation process.
   *
   * @param {Number} min
   * @param {Number} max
   */
  randomIntBetween (min: number, max: number, options?: RandomIntInRangeOptions): number | undefined

  /**
   * Returns the sum of the given `numbers`.
   *
   * @param {Number[]} numbers
   */
  sum (...numbers: number[]): number
}
