module.exports= {

    beforeEach: (browser) => {
        browser.page.LoginPage().navigate();
    },

    'Verify login is successful': (browser) => {
        let loginPage = browser.page.LoginPage();
        loginPage
            .assert.title('The Internet')
            .assert.visible('@UsernameField')
            .setValue('@UsernameField',"tomsmith")
            .setValue('@passwordField', "SuperSecretPassword!")
            .submitForm('@loginButton')
            .expect.element('@successMessage').text.to.be.equal('Secure Area')
    },
    'Verify login is not successful': (browser) => {
        let loginPage = browser.page.LoginPage();
        loginPage
            .setValue('@UsernameField',"tomsmith_incorrect")
            .setValue('@passwordField', "SuperSecretPassword!")
            .submitForm('@loginButton')
            .expect.element('@successMessage').text.to.be.equal('Login Page')
    }
}