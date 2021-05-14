let LandingPage = require('../page/LandingPage');
let LoginPage = require('../page/LoginPage');
let HomePage = require('../page/HomePage');
let TwitterAccount = require('../credentials/twitterAccount');

describe('Verify Tiwtter login page',() => {

    beforeEach(async() => {
        this.landingPage = new LandingPage();
        this.loginPage = new LoginPage();
        this.homePage = new HomePage();
        this.twitterAccount = new TwitterAccount();
        this.credentials = this.twitterAccount.myAccount();
        jest.setTimeout(10000);  

        await this.landingPage.OpenTwitter();  
    });

    test('Test case 1: Login successful',async() => {        
        let userName = this.credentials.userName;
        let password = this.credentials.password;

        await this.landingPage.ClickLogin();

        await this.loginPage.PageLoaded();
        await this.loginPage.EnterUserName(userName);
        await this.loginPage.EnterPassword(password);
        await this.loginPage.ClickLogin();
        await this.homePage.PageLoaded();
        expect(await this.homePage.PageLoaded()).toBe(true);

    }); 

    afterEach(async() => {
        await this.loginPage.CloseTwitter();
    });
});