function getChai(kind) {
    if (typeof kind === "string") {
        return `making ${kind} chai..`;
    }
    return `chai order ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `default server masala chhai`;
}
function orderChai(size) {
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
function server(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serverOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar}`;
    }
    return `serving custom chai : ${item}`;
}
function makeChai(order) {
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
export {};
//# sourceMappingURL=typeNarrowing.js.map