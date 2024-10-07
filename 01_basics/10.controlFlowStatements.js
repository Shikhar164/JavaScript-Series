//!1. if and else statement
// let age=18;
// if(age>=18){
//     console.log("you can vote")
// }
// else{
//     console.log("you cannot vote")
// }

//!2.if ...else ...if
// let weekDay=10
// let weekDayName;

// if(weekDay==1){
//     weekDayName='Sunday'
// }else if(weekDay==2){
//     weekDayName='Monday'
// }else if(weekDay==3){
//     weekDayName='tuesday'
// }else if(weekDay==4){
//     weekDayName='wednesday'
// }else if(weekDay==5){
//     weekDayName='thursday'
// }else if(weekDay==6){
//     weekDayName='friday'
// }else if(weekDay==7){
//     weekDayName='saturday'
// }
// else{
//     weekDayName='Invalid weekday'
// }

// console.log(weekDayName)

//!3.Ternary operators
// Example:1
// let age=28;
// let message;

// age>=18?(message='You can vote'):(message='You cannot vote')
// console.log(message)

// Example:2
// let authenticated = true;
// let nextURL = authenticated? (console.log('You will redirect to admin area'), '/admin'): (console.log('Access denied'), '/403');

// // redirect to nextURL here
// console.log(nextURL); // '/admin'

//!4.Switch case
// let day = 5;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Sun";
//     break;

//   case 2:
//     dayName = "Mon";
//     break;
    
//   case 3:
//     dayName = "tue";
//     break;

//   case 4:
//     dayName = "wed";
//     break;

//   case 5:
//     dayName = "thur";
//     break;

//   case 6:
//     dayName = "fri";
//     break;

//   case 7:
//     dayName = "sat";
//     break;

//   default:
//     dayName = "Ivalid date";

// }
// console.log(dayName)

//!5.break:break is used to prematurely terminate the loop 
// //Example:1 simple for loop
// for (let i=1;i<=5;i++){
//   console.log(i)
//   if(i==3) 
//     break;
// }

//Example:2 nested loop:breaks the inner loop
// for(let i=1;i<=5;i++){
//   for(let j=1;j<=5;j++){
//     if(j==4||j==5) break;
//     console.log(i,j)
//   }
// }

//Example 3:Nested loop :breaks the outer loop you have to use label
// outer:for(let i=1;i<=5;i++){
//   for(let j=1;j<=5;j++){
//     if(j==4||j==5) break outer;
//     console.log(i,j)
//   }
// }


//!6.continue: continue is used to skip the particular statement in the loop
// Example 1:
// for(let a=1;a<=5;a++){
//   if(a%2==0) continue;
//   console.log(a)
// }

//Example 2:continue use with label
// outer:for(let i=1;i<=5;i++){
//   for(let j=1;j<=5;j++){
//     if(i+j==3) continue outer;
//     console.log(i,j)
//     console.log("hello")//not skip this line because it is not immediate line
//   }
// }

//!7.Comma operator: gives the rightmost exrpession
// Example 1:
let a=(1,2,3,4)
console.log(a)

//Example 2:
// let a=1;
// let b=2
// let c=3
// console.log(b)
// console.log(a++,++b,--c)


