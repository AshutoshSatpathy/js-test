const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 242535664635253n

//Referance (Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "Doga"]
//objects 
let myObj = {
    name: "Ashu",
    age: 25,
}

const myFunction = function(){
  console.log("Hello World")
}

console.log (typeof bigNumber);

//============================================


// stack (Primitive), heap(Non-Primitive)

let myYoutubeName = "Ashu@gamil.com"

let anothername = myYoutubeName
anothername = " chaiAurCode"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Ashu@google.com"

console.log(userOne.email)
console.log(userTwo.email)

