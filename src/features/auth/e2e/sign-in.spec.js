import { chromium } from 'playwright';
import { credentials, globals } from '../../../../tests/fixtures';

describe('sign in use case', () => {
  let browser, page;
  const { baseUrl } = globals;
  const { email, password } = credentials[0];

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
    await page.goto(baseUrl);
    await page.fill('#inputEmail', email);
    await page.fill('#inputPassword', password);
    await page.click('#buttonSignIn');

    await page.waitForNavigation({ url: '**/in/arcs' });
    const url = await page.url();

    expect(url).toEqual(expect.stringContaining('/in/arcs'));
  });
});
