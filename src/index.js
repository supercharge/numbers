'use strict'

const Num = require('./num')

const numbers = value => {
  return new Num(value)
}

module.exports = numbers
module.exports.default = numbers

module.exports.between = Num.between
