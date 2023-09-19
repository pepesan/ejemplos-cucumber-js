const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert')
const {Builder, By} = require("selenium-webdriver");
var {setDefaultTimeout} = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
// this.timeout(30000)
let driver
let vars

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    await driver.manage().setTimeouts( { implicit: 15000 } );
});
After(function () {
    // Assuming this.driver is a selenium webdriver
    return driver.quit();
});

Given(/^abro el pactometro$/, async function () {

    await driver.get("https://cursosdedesarrollo.com/pactometro/")
});
Then(/^compruebo los ceros$/, async function () {
    // 2 | assertText | id=num-sies | 0
    assert(await driver.findElement(By.id("num-sies")).getText() == "0")
    // 3 | assertText | id=num-abst | 0
    assert(await driver.findElement(By.id("num-abst")).getText() == "0")
    // 4 | assertText | id=num-noes | 0
    assert(await driver.findElement(By.id("num-noes")).getText() == "0")
    // await driver.quit();
});
Then(/^existe el boton de reset$/, async function () {
    // assert(await driver.findElement(By.css("button#reset")).getText() == "Reset")
});
Then(/^existe la caja de Partidos$/, async function () {
    // assert(await driver.findElement(By.id("reset")).getText() == "Reset")
});
Then(/^existen los botones de los partidos$/, async function () {

});
