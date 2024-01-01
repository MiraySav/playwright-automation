import { test, expect } from "@playwright/test";
test("Sign Up ", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("#signin2").click();
  await page.locator("#sign-username").fill("miray");
  await page.locator("#sign-password").fill("Testing1230");
  await page.locator("//button[.='Sign up']").click();
});
