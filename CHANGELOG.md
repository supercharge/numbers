# Changelog


## [3.0.0](https://github.com/supercharge/numbers/compare/v2.0.0...v3.0.0) - 2021-02-xx

### Added
- `Num.isNumber(input)` method determining whether the given `input` is a number
- `Num.isNotInteger(input)` method determining whether the given `input` is not an integer
- `Num(123).isInRange(min, max)` method determining whether the given number is in the range between `min` and `max`

### Updated
- bump dependencies
- change `main` entrypoint in `package.json` to `dist` folder
- move test runner from `@hapi/lab` to `jest`
- move assertions from `@hapi/code` to `jest`

### Removed
- this package does not export the `Number` readonly properties (e.g. `MAX_VALUE`, etc.) anymore. Please use the global `Number` object instead
- remove `index.js` file which acted as a middleman to export from `dist` folder
- remove `index.js` file which acted as a middleman to export from `dist` folder

### Breaking Changes
Starting in version `3.0`, this package does not export a class extending `Number`. Instead, this package exports a function,
like the global `Number` object does. You’ll find helpful methods on the default export, like `Num.isInteger(123)` helping
you seamlessly interact with numbers. Wrapping a number like `Num(123)` returns an extended `Number` instance. This `Number`
instance extends the `Number` class with helpful methods, like `isInRange(min, max)`.

**Usage**

```js
const Num = require('@supercharge/numbers')

/**
 *  before (v2)
 */

// retrieving the actual number value
new Num(123) // returns 123

// accessing readonly properties
Num.MAX_VALUE


/**
 *  now (v2)
 */

// retrieving the actual number value
Num(123).get() // returns 123

// accessing readonly properties
// Num.MAX_VALUE // undefined
Number.MAX_VALUE
```


## [2.0.0](https://github.com/supercharge/numbers/compare/v1.1.0...v2.0.0) - 2020-07-27

### Added
- `isDecimal(number)` method to determine whether the given `number` is a number with decimal places
- options as the third parameters to all methods generating random integers
  - the options object currently allow the `except` property to exclude an array of numbers when generating a random number. Example: `Num.randomIntWithin(10, 20, { except: [14, 15] })`

### Updated
- move code to TypeScript to automatically generate Typings

### Breaking Changes
Well, the previous version had two similar methods (`randomInt` and `randomIntInRange`). While `randomIntInRange` accepted an options object, `randomInt` did not. The `randomInt` method was removed in favor of `randomIntWithin`.

- Renamed methods:
  - `allIntInRange` is now `allIntWithin`
  - `randomIntInRange` is now `randomIntWithin`
- removed `randomInt` method in favor of `randomIntWithin` because it has a more explicite naming


## [1.1.0](https://github.com/supercharge/numbers/compare/v1.0.0...v1.1.0) - 2020-02-11

### Added
- extend native `Number` class to make all existing Number methods available
- `.allIntInRange(min, max)` method to generate a list of integers between min and max
- `.randomIntInRange(min, max, { except = [] })` method to retrieve a random integer in range


## 1.0.0 - 2020-02-11

### Added
- `1.0.0` release 🚀 🎉
