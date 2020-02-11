'use strict'

const Num = require('../src')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Num', () => {
  it('isInteger', () => {
    expect(Num.isInteger(5)).to.be.true()
    expect(Num.isInteger(1.5)).to.be.false()
  })

  it('randomInt', () => {
    expect(Num.randomInt(2, 5)).to.be.in.range(2, 5)
    expect(Num.randomInt(2, 2)).to.equal(2)
  })

  it('randomIntBetween', () => {
    expect(Num.randomIntBetween(2, 5)).to.be.in.range(3, 4)
    expect(Num.randomIntBetween(2, 4)).to.equal(3)
    expect(Num.randomIntBetween(2, 2)).to.be.undefined()
    expect(Num.randomIntBetween(2, 3)).to.be.undefined()
    expect(Num.randomIntBetween(10, 5)).to.be.undefined()
  })

  it('diff', () => {
    expect(Num.diff(2, 5)).to.equal(-3)
    expect(Num.diff(10, 1, 1, 1)).to.equal(7)
    expect(Num.diff(10)).to.equal(10)
  })

  it('allIntBetween', () => {
    expect(Num.allIntInRange(7, 12)).to.equal([7, 8, 9, 10, 11, 12])
    expect(Num.allIntInRange(10, 2)).to.equal([])
  })

  it('randomIntInRange', () => {
    expect(Num.randomIntInRange(7, 12)).to.be.in.range(7, 12)
    expect(Num.randomIntInRange(12, 7)).to.be.undefined()
    expect(Num.randomIntInRange(7, 8, { except: [8] })).to.equal(7)
    expect(Num.randomIntInRange(7, 10, { except: [8] })).to.be.in.range(7, 10).and.not.equal(8)
  })
})
