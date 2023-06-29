module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/possible-errors',
    './rules/base/style',
    './rules/base/varibles',
    './rules/base/es6',
    './rules/base/strict',
    './rules/imports'
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impiledStrict: true,
      jsx: true
    }
  },
  root: true
}