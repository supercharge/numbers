# Changelog


## [2.0.0](https://github.com/supercharge/numbers/compare/v1.1.0...v2.0.0) - 2020-05-xx

### Added
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
