const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
var calculadora;
Given(/^cargo el objeto$/, function () {
    calculadora = this.getCalculadora();
});
When(/^ejecuto la suma de (\d+) y (\d+)$/, function (a,b) {
    this.resultado = this.calculadora.suma(a,b);
});
Then(/^el resultado es (\d+)$/, function (res) {
    assert.equal(this.resultado, res);
});