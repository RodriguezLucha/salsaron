const css = text => `[class*="${text}"]`;

module.exports = {
  'Salsaron Title Present' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body')
      .assert.containsText(css('websiteTitle'), 'Salsaron');
  }
};
