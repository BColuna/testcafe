import { Selector } from 'testcafe';
import Home from '../pomObjects/home';
import CreateAccount from '../pomObjects/createAccount';

fixture('Pom test')
    .page('https://magento.softwaretestingboard.com/');

test('Create Account', async t => {
    Home.createAccount();

    CreateAccount.insertFirstName("Mr");
    CreateAccount.insertLastName("X");
    CreateAccount.insertEmail("MrX@anonymous.com");
    CreateAccount.insertPass("1234ABCD!");
    CreateAccount.insertPassConfirm("1234ABCD!");

    CreateAccount.clickCreateAccount();

    Home.checkWelcomeMessage("Mr", "X");
});