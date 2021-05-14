const { By, until } = require("selenium-webdriver");
const BasePage = require("./BasePage");

let homeBanner = By.css('[data-testid="titleContainer"]');

class HomePage extends BasePage
{

    PageLoaded = async() => {
        return await this.IsPageLoaded(homeBanner) && await this.ElementVisible(homeBanner);
    }
}
module.exports = HomePage;