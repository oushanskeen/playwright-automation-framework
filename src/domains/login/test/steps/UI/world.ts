import { type Browser, type BrowserContext, type Page, chromium } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber'

export class UIWorld extends World {
  status: string | null
  browser: Browser | null
  context: BrowserContext | null
  page: Page | null

  constructor(options: any) {
    super(options)
    this.status = ""
    this.browser = null
    this.context = null
    this.page = null
  }

}


setWorldConstructor(UIWorld)