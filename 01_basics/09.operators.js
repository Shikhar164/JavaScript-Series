//1. Unary operator

//Example 1: string to number
// let x='10';
// let y=+x;
// console.log(y)
// console.log(typeof y);

//Example 2: boolean to number
// let a=true;
// let b=+a
// console.log(b)

//Example 3:unary operator in object
//? toString()
//! The toString() method is a built-in method in JavaScript that is used to convert an object to its string representation. Every object in JavaScript inherits this method from the Object prototype, which means that all objects have a default implementation of toString().By default returns "[object Object]"

//? valueOf()
//!The valueOf() method is a built-in method in JavaScript that is used to return the primitive value of an object. This method is particularly useful when you want to convert an object to a primitive type, such as a number or a string, in contexts where a primitive value is expected.
//! Default Behavior of valueOf()
//! By default, the valueOf() method returns the object itself. However, you can override this method in your custom objects to return a specific primitive value.

// let person={
//     name:'Shikhar',
//     toString:function(){
//         return '26'        
//     }
// };
// //  When you apply the unary + operator to an object, JavaScript attempts to convert the object to a primitive value. This is done by calling the object's valueOf() method or toString() method.

// console.log(+person)

let person={
    name:'Shikhar',
    toString:function(){
        return '26'        
    },
    valueOf:function(){
        return '30'
    }

};

console.log(+person)

//2. Logical or ||

// console.log(0||1)//1
// console.log(0||undefined)//0
// console.log(0||null)//null
// console.log(null||undefined)//null

// console.log(1||1)//1
// console.log(1||undefined)//1
// console.log(1||null)//1
// console.log(1||undefined)//1

// let obj={}

// console.log(obj[1])//undefined
// console.log(0||obj[1])//0
// console.log(obj||0)//{}
// console.log(obj||null)//{}