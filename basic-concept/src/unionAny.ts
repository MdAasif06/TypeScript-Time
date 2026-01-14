let subs: number | string = "1M";

let apiRequest: "pending" | "success" | "error" = "pending";
apiRequest = "success";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

let orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder: "11";
}
console.log(currentOrder);
