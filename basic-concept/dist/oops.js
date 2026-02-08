class ChaiOne {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const masalaChai = new ChaiOne("Ginger", 20);
masalaChai.flavour = "masala";
class Chai {
    flavour = "masala";
    secretIngredients = "cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
const c = new Chai();
c.reveal();
class shop {
    shopName = "chai corner";
}
class Branch extends shop {
    getName() {
        return this.shopName;
    }
}
class walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new walet();
class ekChai {
    flavour;
    static shopName = "chaiCode cafee";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(ekChai.shopName);
class Drink {
}
class Mychai extends Drink {
    make() {
        console.log("Brewing cahi");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oops.js.map