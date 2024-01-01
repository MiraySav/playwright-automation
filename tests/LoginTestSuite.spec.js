import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Normal Login", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("miray", "Testing123");
  await page.waitForTimeout(3000);
});

test("Wrong Username Input", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("miray1", "Testing123");
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("User does not exist.");
    expect(dialog.accept());
  });
  await page.waitForTimeout(3000);
});

test("Wrong Password Input", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("miray", "Testing123@@");
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("Wrong password.");
    expect(dialog.accept());
  });
  await page.waitForTimeout(3000);
});
