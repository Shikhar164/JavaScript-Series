// There are three types of variables var,let and const,
//var is function level scope where let and const have block scope.
//NOTE: var can have global level scope if it is declared outside function.

// "use strict" //use strict must be used before any code otherwise it will not work

// const accountId = 144553
// let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState;

// console.table([accountId,accountEmail,accountPassword,accountState]);

// Question 1.
// console.log(accountCity);//result var

// Question 2.
// console.log(accountState);//result undefined

// Question 3.
// accountId=32;//result assignment to constant variable

// Question 4.
// notDeclaredVariable=1;
// console.log(notDeclaredVariable);//result 1 if "use strict" result reference error,notDeclared variable is not defined


// Question 5.
// var c=3;

// {
//     c=4;
// } 
// console.log(c);//result 4
// Note:Because var keyword has a function level scope but declared outside it have global level scope and variable c defined in block and outside the block both refer to the same variable.So variable c in block reassign the value which is 4.

// Question 6.
// {
//     let d=4;
// }

// // d is not defined because d is declared with let keyword so it is block level scope
// console.log(d);

// Question 7.
// {
//     var a=10
// }
// console.log(a);// prints 10

// Question 8.
// var a=10;
// function fun()
// {
// var a=20;
// console.log(a);
// }
// console. log(a);//result 10 because function never called

// Question 9.
// let x=10;
// {
//    let x=20;
//    console.log(x);
// }
// console.log(x);//result 20 10
// NOTE: These two x variables are not the same object; they are distinct variables with the same name but different scopes.

// Question 10.
// let x=10;
// function foo(){
//     console.log(x);
//     let x=20;
// }
// foo();// result reference error : cannot access 'x' before initialization.
// NOTE:(let x=10) is globally declared and initialized but foo() function has its local variable x also, which shadows(more priority than global variable inside its scope) the outer variable(global variable) so due to the concept of hoisting let x=20 will be hoisted and javascript interpret this code like this:
// let x = 10;

// function foo() {
//     let x; // 'x' is hoisted to the top of the function scope but not yet initialized
//     console.log(x); // Trying to access 'x' which is currently undefined
//     x = 20; // 'x' is initialized here
// }

// foo();
// so it gives reference error

// if it is declared with var keyword then it gives undefined because due to the concept of hoisting when variable have var datatype then it is hoisted to the top with initial value undefined but on the case of let keyword it is declared only not initialized.


