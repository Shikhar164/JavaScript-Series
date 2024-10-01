// const myDate=new Date();
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getTime())// return the time in milliseconds from 1 Jan 1970

// let myCreatedDate=new Date(2023,0,23)
let myCreatedDate=new Date(2023,0,23,5,6)
// let myCreatedDate=new Date("2023-1-25")
// let myCreatedDate=new Date("1-8-23")

// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp=Date.now();
// // console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor((myCreatedDate.getTime()/1000)))// in seconds

let newDate=new Date();
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    dayPeriod:"narrow",  
}))
