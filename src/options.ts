'use strict'

export interface RandomIntInRangeOptions {
  /**
   * An array of numbers you want to exclude while
   * finding a random number in the given range.
   */
  except: number|number[]
}
