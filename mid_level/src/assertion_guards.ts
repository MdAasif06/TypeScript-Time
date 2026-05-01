//type assertions

let someValue:unknown="subscribe"
let strLength:number=(someValue as string).length
// OR
let strLength2:number=(<string>someValue).length
console.log(strLength2)


///type guards
function processValue(value:string|number){
    if(typeof value==='string'){
        console.log(value.toUpperCase())
    }else{
        console.log(value.toFixed(2))
    }
}
// processValue("6")

//instance type guard
class Dog{
    bark(){
        console.log("Woof!")
    }
}
class Cat{
    meow(){
        console.log("meow!")
    }
}
function makrSound(animal:Dog|Cat){
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }

}