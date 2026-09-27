// primitive : 7


// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)


// const bigNumber = 7726387131387481n;


// Refrence type / Non-primitve :

// Array
// Objects
// Functions

// const heros = ["saktiman", "naagraj", "doga"]
// let obj ={
//     name: "Vishal",
//     age: "22",
// }

// const myfunciton = function(){
//     console.log("Hello world ");
// }

// console.log(typeof bigNumber)

// let myYtname = "visuworld"

// let anothername = myYtname
// anothername = "vini"

// console.log(myYtname)
// console.log(anothername)

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}


let userTwo = userOne
userTwo.email = "vishu@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);
