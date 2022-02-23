let searchName = element(by.xpath)

const homePage = function () {
  this.get = function () {
    browser.get('https://rozetka.com.ua/ua/')
  }
}

module.exports  = new homePage()
