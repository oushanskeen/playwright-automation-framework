import { Given, When, Then } from '@cucumber/cucumber';
import assert from "assert";
import { UIWorld } from "./world"
import normalize from "../../../../src/utils/normalize";

Given('the requirement {string}', async function (this: UIWorld, req: string) {
  console.log("\n[UI.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (this: UIWorld, risk: string) {
  console.log("[UI.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (this: UIWorld, testId: string) {
  console.log("[UI.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (this: UIWorld, testName: string) {
  console.log("[UI.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (this: UIWorld, testInput: string) {
  console.log("[UI.steps.js/Given] the unit input is ", testInput)
  await this.LoginPage.login(testInput)
});
Then('the unit output is {string}', async function (this: UIWorld, expectedOutput: string) {
  console.log("[UI.steps.js/Then] Expected output:", expectedOutput);
  const actualOutput = await this.LoginPage.getStatus()
  assert.strictEqual(actualOutput, normalize(expectedOutput));
});