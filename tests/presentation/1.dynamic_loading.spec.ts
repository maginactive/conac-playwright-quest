import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Dynamic Loading Test', async ({ page }) => {
  // Navigate to the dynamic loading page
  await page.goto('http://localhost:3000/');

  // Click on the "Start" button
  const startButton = page.locator("div[id='start'] button");
  await startButton.click();

  // Wait for the loading icon to appear
  const loadingIcon = page.locator("img[alt='Loading']");
  await loadingIcon.waitFor();

  // Record the start time
  const startTime = Date.now();

  // Wait for the loading icon to disappear
  await loadingIcon.waitFor({ state: 'hidden' });

  // Wait for the "Finish" message to appear
  const finishMessage = page.locator("div[id='guess-time'] button");
  await finishMessage.waitFor();

  // Record the end time
  const endTime = Date.now();

  // Calculate the loading time in seconds
  const loadingTime = (endTime - startTime) / 1000; // convert to seconds

  // Output the loading time
  console.log(`Loading time was: ${loadingTime} seconds`);

  // Save the loading time to a file, appending a new line
  const filePath = path.join(__dirname, 'loading_time.txt');
  fs.appendFileSync(filePath, `\n${loadingTime}`);
});
