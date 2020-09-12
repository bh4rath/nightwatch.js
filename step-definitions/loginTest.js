const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given('I open the login URL', () => {
    return client.url('https://soraia.herokuapp.com/login');
});

When('I login with the valid login credentials', () => {
    return client
        .page
        .LoginPage()
        .setValue('@UsernameField', "tomsmith")
        .setValue('@passwordField', "SuperSecretPassword!")
        .submitForm('@loginButton');
});

Then('I Should see Secure Area text', function () {
    return client
        .page
        .LoginPage()
        .expect.element('@successMessage').text.to.be.equal('Secure Area');
});