const assert = require('assert')
const stylelint = require('stylelint')
const path = require('path')

//describe表示进入jest执行环境
describe('test/rules-validate.test.js', () => {

  //it 相当于jest
  it('Validate default', async () => {
    const filePaths = [path.join(__dirname, './fixtures/index.css')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
      });
      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate scss', async () => {
    const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
      });
      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate less', async () => {
    const filePaths = [path.join(__dirname, './fixtures/less-test.less')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
      });
      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate cssmodule', async () => {
    const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
      });
      assert.ok(filesResult.length !== 0);
    }
  });

})