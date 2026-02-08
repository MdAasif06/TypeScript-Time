const chaiFloavours = ["masala", "adrak"];
const chaiPrice = [10, 20, 30, 40];
const rating = [4.5, 4, 5.0];
const menu = [
    { name: "masala", price: 25 },
    { name: "adrak", price: 15 },
];
//read only array in typeScript
const cities = ["delhi", "pune", "hyderabad"];
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
//tuple
let chaiTuple;
chaiTuple = ["masala", 23];
// chaiTuple=[30,"adrak"]   //follow order
const location = [28.6, 56.2];
const chaiItems = ["masala", 32];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["small"] = 0] = "small";
    CupSize[CupSize["medimum"] = 1] = "medimum";
    CupSize[CupSize["large"] = 2] = "large";
})(CupSize || (CupSize = {}));
const size = CupSize.large;
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["served"] = 1] = "served";
    Status[Status["cancelled"] = 2] = "cancelled";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["Masala"] = "masala";
    ChaiType["Ginger"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`making ${type}`);
}
makeChai(ChaiType.Ginger);
let t = ["chai", 10];
t.push("lemon");
export {};
//# sourceMappingURL=arrayEnum.js.map