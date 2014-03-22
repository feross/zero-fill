var zeroFill = require('../')
var test = require('tape')

test('basic use', function (t) {
  t.equal(zeroFill(1, 4), '0001')
  t.equal(zeroFill(1, 10), '0000000001')
  t.equal(zeroFill(1, 1), '1')
  t.end()
})

test('width edge cases', function (t) {
  t.equal(zeroFill(20, 1), '20', 'do not trim string if width is too small')
  t.equal(zeroFill(20, 0), '20', 'zero width')
  t.equal(zeroFill(1, 0), '1', 'zero width')
  t.equal(zeroFill(1), '1', 'missing width')
  t.equal(zeroFill(100), '100', 'missing width')
  t.end()
})
