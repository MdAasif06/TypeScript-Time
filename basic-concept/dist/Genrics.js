// function getFirstElement<ElementType>(array:(ElementType)[]){
//     return array[0]
// }
function abcd(obj) {
    console.log(obj);
}
// abcd({ name: "asid", age: 25, key: "this is generics" });
// class generics
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("hey");
let b2 = new BottleMaker(40);
// console.log(b1)
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray("masala"));
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });
function pair(a, b) {
    return [a, b];
}
const numberBox = { content: 10 };
const numberBoxCup = { content: "hello" };
const res = {
    status: 200,
    data: { flavor: "masala" },
};
export {};
//# sourceMappingURL=Genrics.js.map