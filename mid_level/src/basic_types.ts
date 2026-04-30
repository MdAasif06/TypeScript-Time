//primitives
let username:string="asif"
let age:number=22
let isAdmin:boolean=true

//Array
let numbers:number[]=[1,2,3,4,5]
let names:string[]=["md","asif","alam"]

//tupes
let person:[string,number]=["asif",22]

//enum
enum Color{
Red,
Green,
Blue
}
let favoriteColor:Color=Color.Blue


//any (avoid when possible)

let randomValue:any=10
randomValue="asif"
randomValue=true
//console.log(randomValue)   //alwas last value u get

//unknown (save then any)
let userInput:unknown;
userInput=5;
userInput="text"
// console.log(userInput)


//void (for function that don't return)
function subscribe():number{
    // console.log(message)
    return 5
    
}
// console.log(subscribe())

//null and undefined
let nullValue:null=null
let undefinedValue:undefined=undefined