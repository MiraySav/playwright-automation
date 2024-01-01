exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutLink = "#logout2";
  }
  async logout() {
    await this.page.locator(this.logoutLink).click();
  }
};
