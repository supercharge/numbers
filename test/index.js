'use strict'

const Num = require('../src')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Num', () => {
  it('isInteger', () => {
    expect(Num(5).isInteger()).to.be.true()
    expect(Num(1.5).isInteger()).to.be.false()
  })
})
