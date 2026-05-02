//Generics in TypeScript

const identity = <T>(arg: T): T => {
  return arg;
};
let out1 = identity<string>("subscribe"); // T = string
let out2 = identity(100); // T = number

// console.log(out1);
// console.log(out2);

type ApiResponse<T> = {
  data: T;
  success: boolean;
};
const userData: ApiResponse<string> = {
  data: "asid",
  success: true,
};
const userId: ApiResponse<number> = {
  data: 101,
  success: true,
};
const userObj: ApiResponse<{ name: string }> = {
  data: { name: "asif" },
  success: true,
};
// console.log(userObj.data.name)

// Array generic

const numbers: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["1", "2", "3", "4", "5"];

function getFirstElement<T>(are: T[]): T | undefined {
  return are[0];
}
let myNum = getFirstElement([1, 2, 3, 4]);
let myName = getFirstElement(["saddam", "subhan", "alam"]);
// console.log(myName);

///Genrics Interfaces
interface keyValuePair<K, V> {
  key: K;
  value: V;
  name: K;
}
let stringNubmerPair: keyValuePair<string, number> = {
  key: "age",
  value: 23,
  name: "asid",
};
// console.log(stringNubmerPair.name)

///Genrics classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T[]): void {
    this.data = this.data.filter((i) => !item.includes(i));
  }

  getItems(): T[] {
    return [...this.data];
  }
}
let testStorage = new DataStorage();
testStorage.addItem(1);
testStorage.addItem(5);

testStorage.removeItem([1, 5]);

// console.log(testStorage.getItems());

///####### Generic Constraints
interface Lengthwise {
  length: number;
}

const logLength = <T extends Lengthwise>(arg: T): T => {
  console.log(arg.length);
  return arg;
};
logLength("hell")
logLength([1,2,3,4,54,6])