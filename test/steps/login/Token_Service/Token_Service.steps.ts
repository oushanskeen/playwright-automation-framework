import { Given, When, Then } from '@cucumber/cucumber';
import assert from "assert";
import { TokenServiceWorld } from "./world"
import normalize from "../../../../src/utils/normalize";

Given('the requirement {string}', async function (this: TokenServiceWorld, req: string) {
  console.log("\n[TokenService.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (this: TokenServiceWorld, risk: string) {
  console.log("[TokenService.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (this: TokenServiceWorld, testId: string) {
  console.log("[TokenService.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (this: TokenServiceWorld, testName: string) {
  console.log("[TokenService.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (this: TokenServiceWorld, testInput: string) {
  console.log("[TokenService.steps.js/Given] the unit input is ", testInput)
  await this.TokenService.post(testInput)
});
Then('the unit output is {string}', async function (this: TokenServiceWorld, expectedOutput: string) {
  console.log("[TokenService.steps.js/Then] Expected output:", expectedOutput);
  const actualOutput = await this.TokenService.getLatestResponse()
  assert.strictEqual(actualOutput, normalize(expectedOutput));
});