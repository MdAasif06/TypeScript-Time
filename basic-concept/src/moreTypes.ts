let response: any = "43";
//force full asertion
let numricLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const input = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase()

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

//try catch block
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai and code";
const strData: string = data as string;

type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirect to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirect to user dashboard");
    return;
  }
  role;
}


function neverReturn():never{
    while(true){}
}