import { expect, type Page } from '@playwright/test';

export type Unlogged = { __state: "unlogged" }
export type Logged = { __state: "logged" }
export type LoginPage<State> = Page & State
export const login = async (
    page: LoginPage<Unlogged>,
    username: string,
    password: string
): Promise<LoginPage<Logged>> => {
    await page.goto("http://localhost:5173");
    await page.locator('[data-testid="login-input"]').fill(username);
    await page.locator('[data-testid="password-input"]').fill(password);
    await page.locator('[data-testid="submit-button"]').click();
    const status = await page.locator('[data-testid="loginStatus-text"]').textContent();
    expect(status).not.toBe("");
    return page as unknown as LoginPage<Logged>;
}