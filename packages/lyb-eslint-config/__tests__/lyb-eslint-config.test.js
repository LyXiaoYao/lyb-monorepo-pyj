'use strict';

const lybEslintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(lybEslintConfig(), 'Hello from lybEslintConfig');
console.info('lybEslintConfig tests passed');
