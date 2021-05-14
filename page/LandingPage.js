const { By, until } = require("selenium-webdriver");
const BasePage = require("./BasePage");

let signUpButton = By.css('[data-testid="signupButton"]');
let loginButton = By.css('[data-testid="loginButton"]');

class LandingPage extends BasePage
{
    ClickSignUp = async() => {
        await this.WaitThenClick(signUpButton);
    }

    ClickLogin = async() => {
        await this.WaitThenClick(loginButton);
    }
}
module.exports = LandingPage;