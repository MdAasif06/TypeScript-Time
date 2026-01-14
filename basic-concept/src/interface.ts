type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: chaiOrder) {
  console.log(order);
}
function serveChai(order: chaiOrder) {
  console.log(order);
}

type teaRecipe = {
  water: number;
  milk: number;
};
class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}

interface cupSize {
  size: "small" | "large";
}

class Chai implements cupSize {
  size: "small" | "large" = "large";
}

// union
type TeaType = "masala" | "ginger" | "lemon";
function orderChai(t: TeaType) {
  console.log(t);
}
//intersection
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai1 = BaseChai & Extra;

const cup: MasalaChai1 = {
  teaLeaves: 2,
  masala: 1,
};
type User = {
  userName: string;
  bio?: string;
};
const u1: User = { userName: "asif" };
const u2: User = { userName: "asif", bio: "asif@" };

type Config = {
  readonly appName: string;
  version: number;
};
const cfg: Config = {
  appName: "Mastarji",
  version: 1,
};
// cfg.appName="chai"
