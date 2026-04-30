//interface
interface User {
  name: string;
  age: number;
  email?: string; //optional prperty
  readonly id: number; //readOnly property we can't updated
}

let user: User = {
  name: "asif",
  age: 23,
  id: 1,
};
//user.id=5 ///we can't updated value of readonly
// console.log(user.id)

//interface with method
interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}
let laptop: Product = {
  name: "MacBook pro",
  price: 2000,
  getDiscount(percenttage: number): number {
    return (percenttage / 100) * this.price;
  },
};
// console.log(laptop.getDiscount(10));

//object type notation
let user1: { name: string; age: number } = {
  name: "asif",
  age: 23,
};
// console.log(user.age)
