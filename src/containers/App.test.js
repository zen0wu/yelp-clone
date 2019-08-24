import puppeteer from "puppeteer";

const TIMEOUT = 30000;
const RESTAURANT_NAME =
  "Jack in the Box, 39017 Cedar Boulevard, Newark, CA, USA";

let browser;
let page;

beforeAll(async (done) => {
  browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  page.setViewport({ width: 1920, height: 1080 });
  done();
}, TIMEOUT);

afterAll(async (done) => {
  await browser.close();
  done();
}, TIMEOUT);

test("should render list of restaurants in both list and map views", async () => {
  await page.focus("#search-box");
  await page.keyboard.type(RESTAURANT_NAME);
  await page.keyboard.press("Enter");
  await page.waitForResponse(
    response => response.url().indexOf("/v3/businesses/search") !== -1
  );

  await page.waitForFunction(() => document.querySelector("#list-view").innerHTML.indexOf('Jack in the Box') !== -1)
  await page.waitForFunction(() => document.querySelector("#map-view").innerHTML.indexOf('Jack in the Box') !== -1)
}, TIMEOUT);

