// function getFirstElement<ElementType>(array:(ElementType)[]){
//     return array[0]
// }
function abcd(obj) {
    console.log(obj);
}
// abcd({ name: "asid", age: 25, key: "this is generics" });
// class generics
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("hey");
var b2 = new BottleMaker(40);
// console.log(b1)
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray("masala"));
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });
// function pair<A,B>(a:A,b:B):[A,B]{
//     return [a,b]
// }
// console.log(pair("malsala",10))
