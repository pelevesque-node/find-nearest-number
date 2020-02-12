[![Build Status](https://travis-ci.org/pelevesque/find-nearest-number.svg?branch=master)](https://travis-ci.org/pelevesque/find-nearest-number)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/find-nearest-number/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/find-nearest-number?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# find-nearest-number

Finds the nearest number of a given target number.

## Node Repository

https://www.npmjs.com/package/@pelevesque/find-nearest-number

## Installation

`npm install @pelevesque/find-nearest-number`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const findNearestNumber = require('@pelevesque/find-nearest-number')
```

```js
const num = 45
const arr = [-100, -50, 0, 50, 100]
const result = findNearestNumber(num, arr)
// result === 50
```
