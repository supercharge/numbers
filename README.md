<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    <h3>Numbers</h3>
  </p>
  <p>
    Number utilities for Node.js and JavaScript
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#Docs"><strong>Docs</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/@supercharge/numbers"><img src="https://img.shields.io/npm/v/@supercharge/numbers.svg" alt="Latest Version"></a>
    <a href="https://www.npmjs.com/package/@supercharge/numbers"><img src="https://img.shields.io/npm/dm/@supercharge/numbers.svg" alt="Monthly downloads"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Introduction
The `@supercharge/numbers` package extends JavaScripthttps://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Numbers [`Number`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number) class to provide additional helper methods when working with numbers, like generating a random number in a given range.


## Installation

```
npm i @supercharge/numbers
```


## Docs
Find all the [details for `@supercharge/numbers` in the extensive Supercharge docs](https://superchargejs.com/docs/numbers).


## Usage
Using `@supercharge/numbers` is pretty straightforward. Use the exposed static methods directly from the imported package:

```js
const Num = require('@supercharge/numbers')

Num.randomIntWithin(0, 10)
// 10
// returns a number from 0 to 10 (inclusive start and end)

Num.randomIntBetween(0, 10)
// 4
// returns a number from 1 to 9 (exclusive start and end)

Num(10).isInRange(0, 10)
// true (min and max are inclusive)
```


## Contributing
Do you miss a string function? We very much appreciate your contribution! Please send in a pull request 😊

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License
MIT © [Supercharge](https://superchargejs.com)

---

> [superchargejs.com](https://superchargejs.com) &nbsp;&middot;&nbsp;
> GitHub [@supercharge](https://github.com/supercharge) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)
