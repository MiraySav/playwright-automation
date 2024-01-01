import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { CartPage } from "../pages/CartPage";

test.beforeEach("Login", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("miray", "Testing123");
  await page.waitForTimeout(3000);
});

test.afterEach("Logout", async ({ page }) => {
  const logout = new LogoutPage(page);
  await logout.logout();
  await page.waitForTimeout(3000);
});

test("Add product to the cart", async ({ page }) => {
  const cart = new CartPage(page);
});
