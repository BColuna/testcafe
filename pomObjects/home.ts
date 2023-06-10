import { Selector, t } from 'testcafe';

class Home {
    createAnAccount = Selector('.header links').find('a').withText('Create an Account');
    signInButton = Selector('.authorization-link');
    welcomeMessage = Selector('.logged-in');

    async signIn () {
        await t.click(Selector(this.signInButton));
    }

    async createAccount () {
        await t.click(Selector(this.createAnAccount));
    }

    async checkWelcomeMessage(firstName, lastName){
        await t.expect(this.welcomeMessage.innerText)
            .eql("Welcome, " + firstName + " " + lastName + "!")
    }
}

export default new Home();