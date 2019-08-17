import puppeteer from "puppeteer";

const RESTAURANT_NAME =
  "Jack in the Box, 39017 Cedar Boulevard, Newark, CA, USA";

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  page.setViewport({ width: 1920, height: 1080 });
});

afterAll(async () => {
  await browser.close();
});

test("should render list of restaurants in both list and map views", async () => {
  await page.focus("input");
  await page.keyboard.type(RESTAURANT_NAME);
  await page.keyboard.press("Enter");
  await page.waitForResponse(
    response => response.url().indexOf("/v3/businesses/search") !== -1
  );

  expect(
    await page.evaluate(() => document.querySelector("#map-view").innerHTML)
  ).toMatch("Jack in the Box");
  expect(
    await page.evaluate(() => document.querySelector("#list-view").innerHTML)
  ).toMatch("Jack in the Box");
});
