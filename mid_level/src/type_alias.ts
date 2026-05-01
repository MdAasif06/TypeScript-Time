//Type alias
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
// console.log(point.x)
//type alias for primitive

type ID = string | number;
let userId: ID = "asif06";
let productId: ID = 123;
// console.log(userId)

//type alias Vs interface

//1. interface can be extended ,type alias can't
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden retriver",
};
console.log(myDog.name)

// 2.interfaces can be declared multiple time will merge

interface Animal {
  name: string;
}
interface Animal {
  age: number;
}
let dog: Animal = {
  age: 3,
  name: "bud",
};
console.log(dog.name)

//3.use interfaces for object shapes
//type aliases for union and intersectioons
interface User {
  name: string;
  age: number;
}

type UserId = string | number;
