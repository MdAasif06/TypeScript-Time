"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "43";
//force full asertion
let numricLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const input = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase()
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
//try catch block
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai and code";
const strData = data;
function redirectBasedOnRole(role) {
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
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map