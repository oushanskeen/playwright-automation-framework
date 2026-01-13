const { setDefaultTimeout } = require("@cucumber/cucumber");

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'tests/world/**/*.ts',
      'tests/step_definitions/**/*.ts'
    ],
    paths: ['tests/features/**/*.feature'],
    setDefaultTimeout: 30 * 1000
  }
}
