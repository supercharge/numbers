'use strict'

import { Num } from './num'
import { RandomIntInRangeOptions } from './options'
import { NumConstructor } from './num-constructor-contract'

const num: NumConstructor = function (value?: any): Num {
  return new Num(value)
}

/**
 * Determine whether the given `input` is a number.
 *
 * @param input - the `input` value to check whether it’s a number
 */
num.isNumber = (input?: any): boolean => {
  return num.isInteger(input) || num.isDecimal(input)
}

/**
 * Determine whether the value passed is an integer, false otherwise.
 *
 * @param number A numeric value.
 */
num.isInteger = (number: unknown): boolean => {
  return Number.isInteger(number)
}

/**
 * Determine whether the given `number` is not an integer value.
 *
 * @param {Number} number
 */
num.isNotInteger = (number: unknown): boolean => {
  return !num.isInteger(number)
}

/**
 * Determine whether the given `number` has decimal places. Returns
 * `true` if the value passed has decimal places, `false` otherwise.
 *
 * @param {Number} number
 */
num.isDecimal = (number: unknown): boolean => {
  return typeof number === 'number' && num.isNotInteger(number)
}

/**
 * Returns the sum of the given `numbers`.
 *
 * @param {Number[]} numbers
 */
num.sum = (...numbers: number[]) => {
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0)
}

/**
 * Generates and returns a random integer in the range of `min` to `max`.
 * Both, `min` and `max` are included in the number generation process.
 *
 * @param {Number} min
 * @param {Number} max
 */
num.randomIntWithin = (min: number, max: number, options?: RandomIntInRangeOptions): number => {
  const candidates = num.allIntWithin(min, max, options)

  const index = Math.floor(Math.random() * candidates.length)

  return candidates[index]
}

/**
 * Returns an array of all integer values in the range of
 * `min` to `max`, including both `min` and `max`.
 *
 * @param {Number} min
 * @param {Number} max
 */
num.allIntWithin = (min: number, max: number, options?: RandomIntInRangeOptions): number[] => {
  if (num(max).diff(min) < 0) {
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
 * Generates and returns a random number between the given `min` and `max`.
 * Both, `min` and `max` are excluded in the number generation process.
 *
 * @param {Number} min
 * @param {Number} max
 */
num.randomIntBetween = (min: number, max: number, options?: RandomIntInRangeOptions): number | undefined => {
  if (num(max).diff(min) <= 1) {
    return
  }

  const { except = [] } = options ?? { }
  const exceptions = ([] as number[]).concat(except).concat([min, max])

  const candidates = num.allIntWithin(min, max, { except: exceptions })

  const index = Math.floor(Math.random() * candidates.length)

  return candidates[index]
}

export = num
