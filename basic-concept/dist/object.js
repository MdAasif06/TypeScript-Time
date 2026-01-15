"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true,
};
// {
//   name: string;
//   price: nuber;
//   isHot: boolean;
// }
let tea;
tea = {
    name: "ginger tea",
    price: 25,
    isHot: true,
};
const adrakTea = {
    name: "adrak chai",
    price: 26,
    ingredients: ["ginger", "tea leaves"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "asid",
    password: "5442365",
};
const updateChai = (updates) => {
    console.log("Updating chai with ", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "masala chai",
    quantity: 2,
});
const chaiInfo = {
    name: "lemon Tea",
    price: 30,
};
//# sourceMappingURL=object.js.map