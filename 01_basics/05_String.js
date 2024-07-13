const name = "Ashu"
const repoCount = 50

//console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('Ashu_hhc_com')

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName. length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "  Ashu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ashu.com/ashu%20satpathy"

console.log(url.replace('%20', '-'));

console.log(url.includes('pop'));

console.log(gameName.split('_'));
