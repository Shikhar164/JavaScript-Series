//todo: function declaration types:
//(a)Simple declaration
// function sampleFunction(parameter1,parameter2){
//     console.log(parameter1,parameter2)
// }

// sampleFunction('this is a function declaration call',1)

//(b)function declaration with anonymus function
// let func=function(parameter1,parameter2){
//     console.log(parameter1,parameter2)
// }

// func('this is a function declaration call',2)

//(c)function declaration with arrow function
let arrowFunc=(parameter1,parameter2)=>{
    console.log(parameter1,parameter2)
}
arrowFunc('this is a function declaration call',3);//! This semicolon(;) is very important to execute iife functions.

//(d)iife - immediately invoke funtions
(function iife(parameter1,parameter2){
    console.log(parameter1,parameter2)
})('this is a function declaration call',4)







