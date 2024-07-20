import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // testDir: "./tests/quests",
  // testMatch: ["tests/1.dynamic_loading.spec.ts"],
  // testMatch: ["tests/2.visual_test.spec.ts"],
  testMatch: ["tests/3.searchText.spec.ts"],

  timeout: 20000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["line"],
    [
      "html",
      {
        outputFolder: "reports/html",
        open: "always",
        // open: "on-failure",
        // host: '0.0.0.0',
        // port: 9223,
      },
    ],

    ["json", { outputFile: "reports/json/json-report.json" }],
    ["junit", { outputFile: "reports/junit/junit-report.xml" }],

    //allure report
    ["allure-playwright", { alwaysOn: true }],
    // ["allure-playwright"],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // headless: false,
    screenshot: {
      mode: "on",
    },
    //not work - hope to see video here after running test
    video: {
      mode: "on",
      // mode:'retain-on-failure',//prefer this to reduce report size
      // size: { width: 1920, height: 1080 },
    },
    launchOptions: {
      //slowMo literally slows down browser interactions.
      slowMo: 1000,
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices[
          "Desktop Chrome"
        ] /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */,
        actionTimeout: 0,
        // actionTimeout: 20000,
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
