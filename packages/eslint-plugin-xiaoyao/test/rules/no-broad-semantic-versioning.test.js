const rule = require('../../rules/no-broad-semantic-versioning')
const { RuleTester } = require('eslint')
const ruleTester = new RuleTester()

ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'eslint-plugin-xiaoyao': '^0.0.1' },
      })}`,
    },
  ],
  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'eslint-plugin-xiaoyao': '*' },
      })}`,
      errors: [
        {
          message: 'The "eslint-plugin-xiaoyao" is not recommended to use "*"',
        },
      ],
    },
  ],
})
