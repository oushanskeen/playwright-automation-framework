import { Given, When, Then, After, Before } from '@cucumber/cucumber';
import { UIWorld } from "./world";
import { login, type LoginPage, type Unlogged } from '../../../src/ui/pom/functions/login';
import { initPlaywrightContext } from '../../../src/ui/pom/functions/initPlaywrightContext';
import { expect, type Page } from '@playwright/test';

Before("", async function () {
  const { browser, context, page } = await initPlaywrightContext();
  this.browser = browser;
  this.context = context;
  this.page = page;
  // TODO: expect local mocked server is running
  const res = await fetch('http://localhost:3000/health');
  const response = {
    status: res.status,
    body: await res.json(),
  };
  // TODO: expect local mocked server returns data on one of sample requests
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ status: 'ok' });
})

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
  const [email, pwd] = testInput.split("&").map(e => e.split("=")[1])
  this.page = await login(this.page as LoginPage<Unlogged>, email, pwd)
  this.status = await this.page.locator('[data-testid="loginStatus-text"]').textContent();
});
Then('the unit output is {string}', async function (this: UIWorld, expectedOutput: string) {
  console.log("[UI.steps.js/Then] Expected output:", expectedOutput);
  expect(this.status).toBe(expectedOutput)
});

After("", async function () {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
})