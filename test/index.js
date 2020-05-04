'use strict'

const Num = require('..')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Num', () => {
  it('isInteger', () => {
    expect(Num.isInteger(5)).to.be.true()
    expect(Num.isInteger(1.5)).to.be.false()
  })

  it('randomIntWithin', () => {
    expect(Num.randomIntWithin(2, 5)).to.be.in.range(2, 5)
    expect(Num.randomIntWithin(2, 2)).to.equal(2)
    expect(Num.randomIntWithin(2, 2)).to.equal(2)
    expect(Num.randomIntWithin(2, 3, { except: 2 })).to.equal(3)
    expect(Num.randomIntWithin(3, 1)).to.be.undefined()
    expect(Num.randomIntWithin()).to.be.undefined()
  })

  it('allIntWithin', () => {
    expect(Num.allIntWithin(7, 12)).to.equal([7, 8, 9, 10, 11, 12])
    expect(Num.allIntWithin(10, 2)).to.equal([])
    expect(Num.allIntWithin(1, 1)).to.equal([1])
    expect(Num.allIntWithin(1, 3, null)).to.equal([1, 2, 3])
    expect(Num.allIntWithin(1, 2, { except: 2 })).to.equal([1])
    expect(Num.allIntWithin(1, 3, { except: [2] })).to.equal([1, 3])
  })

  it('randomIntBetween', () => {
    expect(Num.randomIntBetween(2, 5)).to.be.in.range(3, 4)
    expect(Num.randomIntBetween(2, 4)).to.equal(3)
    expect(Num.randomIntBetween(2, 2)).to.be.undefined()
    expect(Num.randomIntBetween(2, 3)).to.be.undefined()
    expect(Num.randomIntBetween(10, 5)).to.be.undefined()
    expect(Num.randomIntBetween(1, 3, null)).to.be.between(1, 3)
    expect(Num.randomIntBetween(1, 4, { except: 2 })).to.equal(3)
    expect(Num.randomIntBetween(1, 4, { except: [2] })).to.equal(3)
  })

  it('diff', () => {
    expect(Num.diff(2, 5)).to.equal(-3)
    expect(Num.diff(10, 1, 1, 1)).to.equal(7)
    expect(Num.diff(10)).to.equal(10)
  })
})
