import { Given, When, Then } from '@cucumber/cucumber';
import assert from "assert";
import { DBWorld } from "./world"
import normalize from "../../../../src/utils/normalize";

Given('the requirement {string}', async function (this: DBWorld, req: string) {
  console.log("\n[DB.steps.js/Given] the requirement ", req)
});
Given('the requirement risk {string}', async function (this: DBWorld, risk: string) {
  console.log("[DB.steps.js/Given] the requirement risk ", risk)
});
Given('the test id {string}', async function (this: DBWorld, testId: string) {
  console.log("[DB.steps.js/Given] the test id ", testId)
});
Given('the test name {string}', async function (this: DBWorld, testName: string) {
  console.log("[DB.steps.js/Given] the test name ", testName)
});
When('the unit input is {string}', async function (this: DBWorld, testInput: string) {
  console.log("[DB.steps.js/Given] the unit input is ", testInput)
});
Then('the unit output is {string}', async function (this: DBWorld, expectedOutput: string) {
  console.log("[DB.steps.js/Then] Expected output:", expectedOutput);
});