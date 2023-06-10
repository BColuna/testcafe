import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

const devName = Selector('#developer-name');
const parallelCheckbox = Selector('#background-parallel-testing');
const windowsRadio = Selector('#windows');
const preferredInterface = Selector('#preferred-interface');
const preferredInterfaceOption = preferredInterface.find('option');
const triedTestCafeRadio = Selector('#tried-test-cafe');
const slider = Selector('#slider');
const textArea = Selector('#comments');
const thankYouMessage = Selector('#article-header');


test('My first test', async t => {
    console.log(`Hello world!\n
     __      __\n
    ( _\    /_ )\n
     \ _\  /_ / \n
      \ _\/_ /_ _\n
      |_____/_/ /|\n
      (  (_)__)J-)\n
      (  /'.,   /\n
       \/  ;   /\n
        | === |\n`);
});

test('My second test', async t => {
    await t.typeText(devName, 'John Doe')
        .expect(devName.value).eql('John Doe');

    await t.click(parallelCheckbox)
        .expect(parallelCheckbox.checked).eql(true);
    
    await t.click(windowsRadio)
        .expect(windowsRadio.checked).eql(true);

    await t.click(preferredInterface)
        .click(preferredInterfaceOption.withText('Command Line'))
        .expect(preferredInterface.value).eql('Command Line');

    await t.expect(slider.hasClass('ui-slider-disabled')).ok();

    await t.click(triedTestCafeRadio)
        .expect(triedTestCafeRadio.checked).eql(true);
    
    await t.expect(slider.hasClass('ui-slider-disabled')).notOk();

    await t.click(slider)
        .pressKey('right right right right right');

    await t.typeText(textArea, 'I think, therefore I am')
        .expect(textArea.value).eql('I think, therefore I am');

    await t.click('#submit-button');

    await t.expect(thankYouMessage.innerText).eql('Thank you, John Doe!');


})