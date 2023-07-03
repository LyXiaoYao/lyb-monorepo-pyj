const rule = require('../../rules/no-http-url')
const { RuleTester } = require('eslint')
const ruleTester = new RuleTester()

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var str = 'https://lyxiaoyao.com'",
    },
  ],
  invalid: [
    {
      code: "var str = 'http://lyxiaoyao.com'",
      output: "var str = 'http://lyxiaoyao.com'",
      errors: [
        {
          message: 'Recommended "http://lyxiaoyao.com" switch to HTTPS',
        },
      ],
    },
  ],
})
