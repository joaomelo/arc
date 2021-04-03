const { chromium } = require('playwright');

describe('sign in use case', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test('sign in with default user', async () => {
    await page.goto('http://localhost:5000/');
    expect(await page.title()).toBe('arc');
  });
});
