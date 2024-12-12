//TODO: OBJECT DESTRUCTURING

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    profile:{
        height:5.5,
        weight:68
    }
};

//* 1.Basic Syntax

// const{firstName,lastName}=person
// console.log(firstName)
// console.log(lastName)

//* 2.Default values
// const {firstName,middleName='NA'}=person
// console.log(middleName)

//* 3.Renaming Variables
// const {firstName:fName,lastName:lName}=person;
// console.log(fName)
// console.log(lName)

//* 4.Nested Destructuring
// const {profile:{height,weight}}=person

// console.log(height)
// console.log(weight)


//todo