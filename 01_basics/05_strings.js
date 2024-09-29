//*1. How to include two keywords of strings in single line 
// const name="shikhar"
// const age=21

// console.log("My name is "+name+" and my age is "+age )
// console.log("My name is",name, "and my age is",age )
// console.log(`My name is ${name} and my age is ${age}`)

//*2. String object creating using constructor
const userName=new String("ShikharBhardwaj")
console.log(typeof userName)

//Properties and methods of strings
// console.log(userName.length);
// console.log(userName.charAt(5))
// console.log(userName.charCodeAt(1))//104 because h ascii value is 104
// console.log(userName.concat(' Bhardwaj'))
// console.log(userName.endsWith('al'))
// console.log(userName.includes('ik'))
// console.log(userName.indexOf('r'))
// console.log(userName.lastIndexOf("r"))
// console.log(userName.match('Bha'))
// console.log(userName.substring(0,6))
// console.log(userName.slice(0,7))//can give negative values


const url="  https://shikharbhardwaj.com/shikhar%20bhardwaj  "

console.log(url.replace("%20","_"))
console.log(url.trim())
console.log(url.split('/'))
