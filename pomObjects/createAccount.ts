import { Selector, t } from 'testcafe';

class CreateAccount {
    firstNameInput = Selector('#firstname');
    lastNameInput = Selector('#lasttname');
    emailInput = Selector('#email_address');
    passwordInput = Selector('#password');
    passwordConfirmInput = Selector('#password-confirm');
    createAccountButton = Selector('.action submit primary');

    async insertFirstName (name:string) {
        await t.typeText(this.firstNameInput, name);
    }

    async insertLastName (name:string) {
        await t.typeText(this.lastNameInput, name);
    }

    async insertEmail (email:string) {
        await t.typeText(this.emailInput, email);
    }

    async insertPass (pass:string) {
        await t.typeText(this.passwordInput, pass);
    }

    async insertPassConfirm (pass:string) {
        await t.typeText(this.passwordConfirmInput, pass);
    }

    async clickCreateAccount(){
        await t.click(this.createAccountButton);
    }
}

export default new CreateAccount();