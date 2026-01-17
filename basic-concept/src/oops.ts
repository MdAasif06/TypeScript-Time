class ChaiOne {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new ChaiOne("Ginger", 20);
masalaChai.flavour = "masala";

class Chai {
  public flavour: string = "masala";

  private secretIngredients = "cardamom";

  reveal() {
    return this.secretIngredients;
  }
}
const c = new Chai();
c.reveal();

class shop {
  protected shopName = "chai corner";
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
  static shopName = "chaiCode cafee";

  constructor(public flavour: string) {}
}
console.log(ekChai.shopName);

abstract class Drink {
  abstract make(): void;
}
class Mychai extends Drink {
  make() {
    console.log("Brewing cahi");
  }
}

class Heater {
  heat() {}
}
class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
