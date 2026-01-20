function wrapInArray<T>(item:T):T[]{
    return [item]
}
console.log(wrapInArray("masala"))
wrapInArray(42)
wrapInArray({flavour:"Ginger"})