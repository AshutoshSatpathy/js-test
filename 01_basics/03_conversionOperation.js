let score = "43"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//value    result
//========  =========
//"33" => 33
//"33agb" => NaN (Not a Number)
//null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true; false => 0
//"" => false
//"Ashu" => true

let someNumber = 33

//let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

//+++++++++++++++++  Operation  +++++++++++++++++++

let value = 3
let negValue = -value
 //console.log(negValue);

 //console.log(2+2)
 //console.log(2-2)
//console.log(2*2)
//console.log(2**3)
//console.log(2/3)
//console.log(2%3)

// let str1 = "hello"
// let str2 = "Ashu"

// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
