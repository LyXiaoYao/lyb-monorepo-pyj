'use strict';

const lybeslintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(lybeslintConfig(), 'Hello from lybeslintConfig');
console.info('lybeslintConfig tests passed');
