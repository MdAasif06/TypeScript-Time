interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const masala: Chai = {
  flavour: "masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = { id: 1, name: "chai" };
// s.id=2

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

//important interface worked
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = {
  name: "asif",
  age: 20,
};
