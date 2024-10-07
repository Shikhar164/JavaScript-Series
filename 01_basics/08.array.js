//* Arrays:
//Javascript arrays is used to store elements can be of different dataytypes and are resizeable.                     
// Javascript array copy operations create shallow copies means used reference.

//! Declaration and defintion
// const myArr=[1,2,3,4,5,"hello",true]
const myArr=new Array(1,2,3,4,5,"hello",true)

//!Printing the whole array
// console.log(myArr)

//!How to access the values of array
// console.log(myArr[2])
// myArr=[4,5,6]//not allowed cannot reassign the different value because of const keyword 
// myArr[2]=10//This is allowed because content of the array can still be modified 
// console.log(myArr[2])

//! Iterate an array
//todo: 1.for loop(traditional)
// for(let i=0;i<myArr.length;i++){
//     console.log(myArr[i])
// }

//todo: 2.for of loop
// for(let a of myArr){
//     console.log(a)
// }

//todo: 3.for in loop
//* for in loop gives key values so output gives the indexes. It basically used in object but can be used in array.
// for(let a in myArr){
//     console.log(a)
// }

// for(let a in myArr){
//     console.log(myArr[a])
// }

//todo: 4.forEach() method:
// myArr.forEach((num)=>{
//     console.log(num)
// })

//!How to join two arrays
let arr1=[1,2,3]
let arr2=["Shikhar","Prakhar","Madhuri","Papa"]
let combinedArray=[...arr1,...arr2]
console.log(combinedArray)

//!Array property
// console.log(myArr.length)

//!Array methods
//todo: Add and manipulate array
//*1. push():add from the end ,changes in the original array
// console.log(myArr.push(6,7))//*return new length of elements

//*2. unshift(): add from the starting
// console.log(myArr.unshift(0,1000))//*return new length of elements

//todo: Remove values from array
//*3. pop(): removes from the end,changes in the original array
// console.log(myArr.pop())//*return true if elements are there return false if there is empty array 

//*4. shift(): removes elements from the starting
// console.log(myArr.shift())//* return the remove element

//*5.splice: deletes the elements from the starting index to the particular number(n) of items you want to delete & you can also add the items & also change original array.
//*Parameters: splice(starting index,number of items to delete,...items you want to add)
// console.log(myArr.splice(2,4,"world","nani"))//* return the subarray list of items that are deleted

//todo: Other methods
//*5.join(): return new Array does not change original array and return as string
// console.log(myArr.join(" and "))

//*6.slice(): return new subarray that contain elements from starting index to ending index excluding last but  does not change original array
//*Parameters :slice(start index,end index)
// console.log(myArr.slice(1,3))

//*7.includes(): return true if element exist in the array otherwise false
// console.log(myArr.includes(9))

console.log(myArr)