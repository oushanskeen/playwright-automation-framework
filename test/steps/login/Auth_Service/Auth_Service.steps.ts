import { Given, When, Then } from '@cucumber/cucumber';
import assert from "assert";
import { AuthServiceWorld } from "./world"
import normalize from "../../../../src/utils/normalize";

Given('the requirement {string}', async function (this: AuthServiceWorld, req: string) {
  console.log("\n[AuthService.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (this: AuthServiceWorld, risk: string) {
  console.log("[AuthService.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (this: AuthServiceWorld, testId: string) {
  console.log("[AuthService.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (this: AuthServiceWorld, testName: string) {
  console.log("[AuthService.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (this: AuthServiceWorld, testInput: string) {
  console.log("[AuthService.steps.js/Given] the unit input is ", testInput)
  await this.AuthService.post(testInput)
});
Then('the unit output is {string}', async function (this: AuthServiceWorld, expectedOutput: string) {
  console.log("[AuthService.steps.js/Then] Expected output:", expectedOutput);
  const actualOutput = await this.AuthService.getLatestResponse()
  assert.strictEqual(actualOutput, normalize(expectedOutput));
});