exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
  }

  async checkProductInCart(productName) {
    let returnBool = false;
    const productsInCart = await this.page.$$(this.noOfProducts);
    console.log([productName, productsInCart]);
    for (const product of productsInCart) {
      if (productName === (await product.textContent())) {
        returnBool = true;
        break;
      }
    }
    return returnBool;
  }
};

//div[@class='col-lg-4 col-md-6 mb-4']
//tbody[@id="tbodyid"]/tr/td[2]
