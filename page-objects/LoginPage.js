module.exports = {
    url: 'https://soraia.herokuapp.com/login',
    elements: {
        UsernameField: {
            selector: "input[name='username']"
         },
         passwordField: {
            selector: "input[name='password']"
         },
         loginButton: {
             selector: "button[type='submit']"
         },
         successMessage: {
             selector: ".example h2"
        }
    }
}