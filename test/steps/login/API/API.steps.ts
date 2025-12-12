import { Given, When, Then } from '@cucumber/cucumber';
import assert from "assert";
import { APIWorld } from "../API/world"
import normalize from "../../../../src/utils/normalize";

Given('the requirement {string}', async function (this: APIWorld, req: string) {
  console.log("\n[API.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (this: APIWorld, risk: string) {
  console.log("[API.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (this: APIWorld, testId: string) {
  console.log("[API.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (this: APIWorld, testName: string) {
  console.log("[API.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (this: APIWorld, testInput: string) {
  console.log("[API.steps.js/Given] the unit input is ", testInput)
  await this.LoginAPI.post(testInput)
});
Then('the unit output is {string}', async function (this: APIWorld, expectedOutput: string) {
  console.log("[API.steps.js/Then] Expected output:", expectedOutput);
  const actualOutput = await this.LoginAPI.getLatestResponse()
  assert.strictEqual(actualOutput, normalize(expectedOutput));
});