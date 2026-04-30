//basic function
function add(a: number, b: number): number {
  return a + b;
}
// console.log(add(4,5))

//optional Parameter
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting},${name}`;
  }
  return `hello,${name}!`;
}
// console.log(greet("asif","how are u"))

//default parameter
const multiply = (a: number, b: number = 4): number => {
  return a * b;
};
// console.log(multiply(6))

//Rest parameter
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => {
    return total * n;
  });
};
// console.log(sum(1, 2, 3,4,5));

//array function
let divide=(a:number,b:number)=>{
    return Math.round(a/b)
}
// console.log(divide(5,2))

//function type
let calculate:(x:number,y:number)=>number
calculate=add
console.log(calculate(3,4))