const name = "Vishal"
const repoCount = 50

console.log(`Hello my name is : ${name} and my repo count is : ${repoCount}`);

const gameName = new String('vishalVN')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4) // always less one
console.log(newString)

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const newStringOne = "  Vishal  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://vishal%20/shayri%20/new"
console.log(url.replace('%20','-'))

console.log(url.includes('vishal'))
const gameName2  = "Vishal-game-2-s-22"
console.log(gameName2.split('-'))