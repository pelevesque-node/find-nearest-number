'use strict'

module.exports = (arr, num) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  )