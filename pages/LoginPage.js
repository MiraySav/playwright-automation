exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.cookies = "//button[.='Ok, zgadzam się']";
    this.mojeAllegro = "//button[contains(.,'Moje Allegro')]";
    this.loginLink = "//a[@data-analytics-click-value='login-button']";
    this.usernameInput = "#login";
    this.passwordInput = "#password";
    this.loginButton = "//button[.=' Zaloguj się']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://allegro.pl/");
  }
  async login(username, password) {
    await this.page.locator(this.cookies).click();
    await this.page.locator(this.mojeAllegro).click();
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
