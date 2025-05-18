 // Data-types (2)
 // 1. Primitive (7) : string, Number, Boolean, null, undefined, Symbol, BigInt
const id = Symbol('123')
const symid = Symbol('123')
console.log( id == symid)

 // 2. (Non-Primitive / Reference ()) : Array, Object, Function
 
const hero = ["saktiman", "Juniour-jee", "mangu"];  // Array

let obj = {name:"vishal", age:20,}  // object

let myfun = function(){
    console.log("Hello World");
}

console.log(typeof myfun); // check data-type

// -----------------------------------------

// memory location
// Stack memory(primitive) , Heap memory(reference)
 