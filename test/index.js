'use strict'

const Num = require('../dist')

const { isNumber } = Num

console.log(isNumber(123))

describe('Num', () => {
  describe('Num statics', () => {
    it('isNumber', () => {
      expect(Num.isNumber(5)).toBe(true)
      expect(Num.isNumber(1.5)).toBe(true)
      expect(Num.isNumber(Date.now())).toBe(true)

      expect(Num.isNumber()).toEqual(false)
      expect(Num.isNumber([])).toBe(false)
      expect(Num.isNumber('1')).toBe(false)
      expect(Num.isNumber(null)).toBe(false)
      expect(Num.isNumber(new Date())).toBe(false)
    })
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

    it('sum', () => {
      expect(Num.sum()).toEqual(0)
      expect(Num.sum(1)).toEqual(1)
      expect(Num.sum(5, 5)).toEqual(10)
      expect(Num.sum(1, 2, 3, 4)).toEqual(10)
    })
  })

  describe('Num instance', () => {
    it('wraps numbers', () => {
      expect(Num(5).get()).toEqual(5)
      expect(new Num(5).get()).toEqual(5)
    })

    it('isInRange', () => {
      expect(Num(5).isInRange(3, 5)).toBe(true)
      expect(Num(3).isInRange(3, 3)).toBe(true)

      expect(Num(5).isInRange()).toBe(false)
      expect(Num(1).isInRange(1)).toBe(false)
      expect(Num().isInRange(1, 1)).toBe(false)
      expect(Num(5).isInRange(10, 20)).toBe(false)
      expect(Num(1).isInRange(1, null)).toEqual(false)
      expect(Num(1).isInRange(null, 1)).toEqual(false)
    })

    it('diff', () => {
      expect(Num(10).diff()).toEqual(10)
      expect(Num(2).diff(5)).toEqual(-3)
      expect(Num(10).diff(1, 1, 1)).toEqual(7)
    })
  })
})
