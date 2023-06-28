'use strict';

const lybStylelintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(lybStylelintConfig(), 'Hello from lybStylelintConfig');
console.info('lybStylelintConfig tests passed');
