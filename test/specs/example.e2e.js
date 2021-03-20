import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('testemilskyeng@gmail.com');
        LoginPage.setPassword('test_M0Z1LL4-17');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


