function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai..`;
  }
  return `chai order ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `default server masala chhai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}
class kulhadChai {
  serve() {
    return `serving kulhad chai`;
  }
}
class cuttingChai {
  server() {
    return `serving a cutting chai`;
  }
}
function server(chai: kulhadChai | cuttingChai) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};
function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}
function serverOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar}`;
  }
  return `serving custom chai : ${item}`;
}

type masalaChai = { type: "masala"; spiceLevel: number };
type gingerChai = { type: "ginger"; amount: number };
type elaichiChai = { type: "elaichi"; aroma: number };

type chai = masalaChai | gingerChai | elaichiChai;

function makeChai(order: chai) {
  switch (order.type) {
    case "masala":
      return "masala chai";
      break;
    case "elaichi":
      return "elachi chai";
      break;
    case "ginger":
      return "ginger chai";
      break;
  }
}
