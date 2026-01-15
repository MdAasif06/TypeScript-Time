function makeChai(type: string, cups: number) {
  console.log(`making ${cups} cups of ${type}`);
}
// makeChai("masala Chai", 2);

function getChaiPrice(): number {
  return 25;
}
// console.log(getChaiPrice())

function makeOrder(order: string) {
  if (order) return null;
  return order;
}

function logChain(): void {
  console.log("chai is ready");
}

function orderChai(type?: string) {}
function orderChaiOne(type: string = "masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
