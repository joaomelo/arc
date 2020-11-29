import 'core-js/stable';
import 'regenerator-runtime/runtime';

const {chromium} = require('playwright');
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

it('should work', async () => {
  await page.goto('http://localhost:5000/');
  console.log(await page.title());
  expect(await page.title()).toBe('arc');
});