//* Conversion of string to pure number

// //Example 1
// let a="33";

// let convertInNumber=Number(a);
// console.log(a)
// console.log(typeof convertInNumber)


// //Example 2 : 
// let b="33abc"
// let convertInNumber2=Number(b)
// console.log(convertInNumber2)
// console.log(typeof convertInNumber2)

//*Conversion of Boolean to number
// Example 1
// let c=true;
// let convertInNumber3=Number(c)
// console.log(convertInNumber3)
// console.log(typeof convertInNumber3)

//*Conversion of number to boolean
// //Example 1
// let isLoggedIn=1;
// let convertInBool=Boolean(isLoggedIn)
// console.log(convertInBool)

// //Example 2
// let isLoggedIn1=""
// let convertInBool1=Boolean(isLoggedIn1)
// console.log(convertInBool1)

//*Conversion of string into Boolean
// //Example 1
// let string1="abc"
// let convert_Str_in_Bool=Boolean(string1)
// console.log(convert_Str_in_Bool)

// //Example 2
// let string2=""//it is empty with any space but if it contains space then answer will true otherwise false
// let convert_Str_in_Bool1=Boolean(string2)
// console.log(convert_Str_in_Bool1)

//* Comparison  of Datatypes
//Example 1
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
console.log(null==undefined)//true
console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined>=0)//false

//! Note: Because comparsion operators convert null into number but equality check does not convert into number