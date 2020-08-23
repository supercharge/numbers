'use strict'

const Num = require('..')

describe('Num', () => {
  it('isInteger', () => {
    expect(Num.isInteger(5)).toBe(true)
    expect(Num.isInteger(1.5)).toBe(false)
  })

  it('isDecimal', () => {
    expect(Num.isDecimal(5.1)).toBe(true)
    expect(Num.isDecimal(5.123456789)).toBe(true)

    expect(Num.isDecimal(1)).toBe(false)
    expect(Num.isDecimal('')).toBe(false)
  })

  it('randomIntWithin', () => {
    const num = Num.randomIntWithin(2, 5)
    expect(num).toBeGreaterThanOrEqual(2)
    expect(num).toBeLessThanOrEqual(5)

    expect(Num.randomIntWithin(2, 2)).toEqual(2)
    expect(Num.randomIntWithin(2, 2)).toEqual(2)
    expect(Num.randomIntWithin(2, 3, { except: 2 })).toEqual(3)
    expect(Num.randomIntWithin(3, 1)).toBeUndefined()
    expect(Num.randomIntWithin()).toBeUndefined()
  })

  it('allIntWithin', () => {
    expect(Num.allIntWithin(7, 12)).toEqual([7, 8, 9, 10, 11, 12])
    expect(Num.allIntWithin(10, 2)).toEqual([])
    expect(Num.allIntWithin(1, 1)).toEqual([1])
    expect(Num.allIntWithin(1, 3, null)).toEqual([1, 2, 3])
    expect(Num.allIntWithin(1, 2, { except: 2 })).toEqual([1])
    expect(Num.allIntWithin(1, 3, { except: [2] })).toEqual([1, 3])
  })

  it('randomIntBetween', () => {
    const withinTwoToFive = Num.randomIntWithin(2, 5)
    expect(withinTwoToFive).toBeGreaterThanOrEqual(2)
    expect(withinTwoToFive).toBeLessThanOrEqual(5)

    expect(Num.randomIntBetween(2, 4)).toEqual(3)
    expect(Num.randomIntBetween(2, 2)).toBeUndefined()
    expect(Num.randomIntBetween(2, 3)).toBeUndefined()
    expect(Num.randomIntBetween(10, 5)).toBeUndefined()

    const num = Num.randomIntBetween(1, 3, null)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(3)

    expect(Num.randomIntBetween(1, 4, { except: 2 })).toEqual(3)
    expect(Num.randomIntBetween(1, 4, { except: [2] })).toEqual(3)
  })

  it('diff', () => {
    expect(Num.diff(2, 5)).toEqual(-3)
    expect(Num.diff(10, 1, 1, 1)).toEqual(7)
    expect(Num.diff(10)).toEqual(10)
  })
})
