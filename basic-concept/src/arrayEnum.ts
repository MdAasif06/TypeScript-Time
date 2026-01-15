const chaiFloavours: string[] = ["masala", "adrak"];
const chaiPrice: number[] = [10, 20, 30, 40];

const rating: Array<number> = [4.5, 4, 5.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 25 },
  { name: "adrak", price: 15 },
];

//read only array in typeScript
const cities: readonly string[] = ["delhi", "pune", "hyderabad"];

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tuple
let chaiTuple: [string, number];
chaiTuple = ["masala", 23];
// chaiTuple=[30,"adrak"]   //follow order
const location: readonly [number, number] = [28.6, 56.2];

const chaiItems: [name: string, price: number] = ["masala", 32];

enum CupSize{
    small,
    medimum,
    large
}
const size=CupSize.large

enum Status{
    pending,
    served,
    cancelled
}
enum ChaiType{
    Masala="masala",
    Ginger="ginger"
}
function makeChai(type:ChaiType){
    console.log(`making ${type}`)
}
makeChai(ChaiType.Ginger)

let t:[string,number]=["chai",10]
t.push("lemon")