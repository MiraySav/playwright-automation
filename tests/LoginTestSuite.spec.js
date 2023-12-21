import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login with normal information", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("miray.sav@yandex.com", "123456.Asdf");
  await page.waitForTimeout(3000);
});
