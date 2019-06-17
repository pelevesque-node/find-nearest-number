/* global describe, it */
'use strict'

const expect = require('chai').expect
const findNearestNumber = require('../index')

describe('#findNearestNumber()', () => {
  it('should work for integer/floats and positive/negative numbers and targets', () => {
    const arr = [-100, -54.34, 0, 54.34, 100]
    const numTargetPairs = [
      [-120, -100],
      [-120.55, -100],
      [-90, -100],
      [-90.55, -100],
      [-60, -54.34],
      [-60.55, -54.34],
      [-40, -54.34],
      [-40.55, -54.34],
      [-10, 0],
      [-10.55, 0],
      [10, 0],
      [10.55, 0],
      [40, 54.34],
      [40.55, 54.34],
      [60, 54.34],
      [60.55, 54.34],
      [90, 100],
      [90.55, 100],
      [120, 100],
      [120.55, 100]
    ]
    numTargetPairs.forEach(v => {
      const result = findNearestNumber(v[0], arr)
      const expected = v[1]
      expect(result).to.equal(expected)
    })
  })
})
