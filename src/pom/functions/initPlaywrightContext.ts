import { expect, chromium, type Browser, type Page, type BrowserContext } from '@playwright/test';

export type PlaywrightContext = {
    browser: Browser;
    context: BrowserContext;
    page: Page;
};
export const initPlaywrightContext = async (): Promise<PlaywrightContext> => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    return {
        browser,
        context,
        page
    }
}