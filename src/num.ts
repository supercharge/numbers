'use strict'

import { NumContract } from './num-contract'

export class Num extends Number implements NumContract {
  /**
   * Stores the number value.
   */
  private readonly value: number

  /**
   * Create a new Num instance for the given value.
   *
   * @param value
   */
  constructor (value?: any) {
    super(value)

    this.value = Number(value)
  }

  /**
   * Returns the numeric value of this instance.
   */
  get (): number {
    return this.value
  }

  /**
   * Determine whether a given number matches the range of `min` and `max`.
   * Both, `min` and `max` are considered part of the available range.
   *
   * @param {Number} min
   * @param {Number} max
   */
  isInRange (min: number, max: number): boolean {
    return this.isAnyNullish(min, max)
      ? false
      : min <= this.value && this.value <= max
  }

  /**
   * Returns the difference of the number and the given `numberss`.
   *
   * @param {Number[]} numbers
   */
  diff (...numbers: number[]): number {
    return this.value - this.sum(...numbers)
  }

  /**
   * Returns the sum of the given `numbers`.
   *
   * @param {Number[]} numbers
   */
  sum (...numbers: number[]): number {
    return [...numbers].reduce((sum, number) => {
      return sum + number
    }, 0)
  }

  /**
   * Determine whether any of the given `inputs` is nullish.
   *
   * @param inputs
   *
   * @returns {Boolean}
   */
  private isAnyNullish (...inputs: any): boolean {
    return [].concat(inputs).some(input => {
      return this.isNullish(input)
    })
  }

  /**
   * Determine whether the given `input` is nullish.
   *
   * @param input
   *
   * @returns {Boolean}
   */
  private isNullish (input: any): boolean {
    return input === undefined || input === null
  }
}
