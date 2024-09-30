//*1.
// const number1=100;
// console.log(number1)
// console.log(number1.toString().length);


//*2.
// const number2=new Number(123);
// console.log(number2.toFixed(2))


//*3.
// const number3=123.3234
// console.log(number3.toPrecision(2))

//*4.
// const number4=10000000;
// console.log(number4.toLocaleString())
// console.log(number4.toLocaleString('en-IN'))

//*5
// ++++++++++++++++++++++++++++++++++ Maths+ +++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4))// convert - to + and + to +
// console.log(Math.random())
// console.log(Math.random()*10)//shift the one digit to the right
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10))//to get the value between 0 and 9
// console.log(Math.floor(Math.random()*10)+1)//to get the value between 1 and 10
// console.log(Math.max(1,2,8,6))
// console.log(Math.min(1,2,8,6))

//! Question: find the number that exist between 10 and 20 only

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)//max- min to bring the number between 10 and 20 and +1 to not get 0 and +min so that number must be equal to min and greater than min