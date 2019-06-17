'use strict'

module.exports = (num, arr) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  )
