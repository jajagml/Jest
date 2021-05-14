const { By, until } = require("selenium-webdriver");
const BasePage = require("./BasePage");

let loginBanner = By.css('main h1');
let userNameTextBox = By.css('div [autocomplete="on"][name="session[username_or_email]"]');
let passwordTextBox = By.css('div [autocomplete="on"][name="session[password]"]');
let loginButtom = By.css('[data-testid="LoginForm_Login_Button"] [dir="auto"]');

class LoginPage extends BasePage
{
    PageLoaded = async() => {
        await this.IsPageLoaded(loginBanner);
    }

    EnterUserName = async(name) => {
        await this.WaitThenSendKeys(userNameTextBox, name);
    } 

    EnterPassword = async(pword) => {
        await this.WaitThenSendKeys(passwordTextBox, pword);
    }

    ClickLogin = async() => {
        await this.WaitThenClick(loginButtom);
    }

}
module.exports = LoginPage;