module.exports = {
    'My First Nightwatch Test case': function(browser) {
        browser
            .url('https://soraia.herokuapp.com')
            .waitForElementVisible("a[href='/login']")
            .click("a[href='/login']")
            .assert.containsText(".example h2", "Login Page");
    }
}