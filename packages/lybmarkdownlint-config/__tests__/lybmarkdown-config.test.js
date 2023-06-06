'use strict';

const lybmarkdownConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(lybmarkdownConfig(), 'Hello from lybmarkdownConfig');
console.info('lybmarkdownConfig tests passed');
