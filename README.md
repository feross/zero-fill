# zero-fill [![build](https://img.shields.io/travis/feross/zero-fill.svg)](https://travis-ci.org/feross/zero-fill) [![version](https://img.shields.io/npm/v/zero-fill.svg)](https://npmjs.org/package/zero-fill)

### Zero-fill a number to the given size.

![zero](https://raw.githubusercontent.com/feross/zero-fill/master/img.png)

[![browser support](https://ci.testling.com/feross/zero-fill.png)](https://ci.testling.com/feross/zero-fill)

## install

```
npm install zero-fill
```

## usage

```js
var zeroFill = require('zero-fill')

zeroFill(4, 1) // '0001'
zeroFill(10, 1) // '0000000001'
zeroFill(1, 1) // '1'
```

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
