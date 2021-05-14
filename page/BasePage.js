const { Builder, until, By  } = require("selenium-webdriver");
const chrome = require('chromedriver');
const { testURL } = require('../config/jest.config');

var mySingleton = (() => {
    let myInstance;

    createNewIntance = () => {
        let driver = new Builder().forBrowser('chrome').build();
        return driver;
    }
    return {
        getNewInstance: () => {
            if(!myInstance)
            {
                myInstance = createNewIntance();
            }
            return myInstance;
        }
    };

})();

class BasePage 
{
    constructor() {
        let driver = mySingleton.getNewInstance();
        this.driver = driver;
    }

    OpenTwitter = async() => {
        await this.driver.manage().window().maximize();
        await this.driver.get(testURL);
    }

    CloseTwitter = async() => {
        await this.driver.quit();
    }

    IsPageLoaded = async(el) => {
        try{
            await this.driver.wait(until.elementLocated(el), 5000);
            return true;
        }catch(e){
            return false;
        }
    }

    WaitThenClick = async(el) => {
        await this.driver.wait(until.elementLocated(el), 5000);
        await this.driver.findElement(el).click();
    }

    WaitThenSendKeys = async(el, value) => {
        await this.driver.wait(until.elementLocated(el), 5000);
        await this.driver.findElement(el).sendKeys(value);
    }

    ElementVisible = async(el) => {
        try{
            await this.driver.wait(until.elementLocated(el), 5000);
            await this.driver.wait(until.elementIsVisible(await this.driver.findElement(el)), 50000);
            return true;
        }catch(e){
            return false;
        }
    }
}
module.exports = BasePage;