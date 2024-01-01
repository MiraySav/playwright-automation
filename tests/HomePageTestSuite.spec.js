import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
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
test("Count products on the home page", async ({ page }) => {
  const home = new HomePage(page);
  const products = await home.productList;
  await expect(products).toHaveLength(35);
  await expect(home.page).toHaveTitle("STORE");
});

test("Print the names of the products on home page", async ({ page }) => {
  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");
  const products = await page.$$('//div[@id="tbodyid"]//div//h4//a');
  for (const product of products) {
    const producttext = await product.textContent();
    // console.log(producttext);
  }
});
test.only("Add product to the cart", async ({ page }) => {
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  expect(status).toBe(true);
});
