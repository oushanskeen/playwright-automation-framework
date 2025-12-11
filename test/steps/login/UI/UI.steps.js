const { Given, When, Then } = require('@cucumber/cucumber');

Given('the requirement {string}', async function (req) {
  console.log("\n[UI.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (risk) {
  console.log("[UI.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (testId) {
  console.log("[UI.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (testName) {
  console.log("[UI.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (testInput) {
  console.log("[UI.steps.js/Given] the unit input is ", testInput)
});
Then('the unit output is {string}', async function (expectedOutput) {
  console.log("[UI.steps.js/Then] Expected output:", expectedOutput);
});