// function getFirstElement<ElementType>(array:(ElementType)[]){
//     return array[0]
// }

// const numbers=[1,2,3,4]
// const firstNum=getFirstElement([numbers])

// const strings=["asdf","ascsj"]
// const firstString=getFirstElement(strings)
// console.log(firstNum)
// console.log([firstString])

/*function abcd<T>(a: T) {
    console.log(a);
}

abcd<string>("asid");   // string
abcd<number>(10);       // number
abcd<number>(20);       // number
*/

//inteface generics
interface Hello<T> {
  name: string;
  age: number;
  key: T;
}
function abcd(obj: Hello<string>) {
  console.log(obj);
}
// abcd({ name: "asid", age: 25, key: "this is generics" });

// class generics
class BottleMaker<T> {
  constructor(public key: T) {}
}
let b1 = new BottleMaker<string>("hey");
let b2 = new BottleMaker<number>(40);
// console.log(b1)

function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray<string>("masala"));

wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
// console.log(pair("malsala",10))

interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "hello" };

interface ApiPromise<T> {
  status: number;
  data: T;
}
const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
