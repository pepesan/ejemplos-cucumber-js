// features/support/world.js
const { setWorldConstructor } = require("@cucumber/cucumber");
const calculadora = require("../../app/src/calculadora");

class CustomWorld {
    constructor() {
        this.variable = 0;
        this.calculadora = calculadora.calculadora;
        this.resultado = 0;
    }

    getCalculadora(){
        return this.calculadora;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}

setWorldConstructor(CustomWorld);
