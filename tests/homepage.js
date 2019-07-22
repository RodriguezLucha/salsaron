// const settin/gs = require('./globals.js/index.js');

// console.log('url:', settings);

module.exports = {
  'Salsaron Title Present' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body');
    // .assert.containsText('.website-name', 'Salsaron');
  }
};
