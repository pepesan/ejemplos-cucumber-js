const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert')
const {Builder, By} = require("selenium-webdriver");
var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);
// this.timeout(30000)
let driver
let vars
Given(/^abro el navegador$/, async function () {

    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    await driver.manage().setTimeouts( { implicit: 15000 } );
    // Test name: navegacion
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get("https://cursosdedesarrollo.com/")
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
});
When(/^relleno el formulario$/, async function () {
// 3 | type | id=wp-block-search__input-1 | nas
    await driver.findElement(By.id("wp-block-search__input-1")).sendKeys("nas")
});
When(/^pulso en buscar$/, async function () {
// 4 | click | css=.wp-block-search__button |
    await driver.findElement(By.css(".wp-block-search__button")).click()
});
Then(/^compruebo el texto$/, async function () {
    // 5 | assertText | css=header.page-header h1 | Search results for: nas
    assert(await driver.findElement(By.css("header.page-header h1")).getText() == "Search results for: nas")
    await driver.quit();
});
