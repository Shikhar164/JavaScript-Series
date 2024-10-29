//* 1. STRUCTURE OF AN OBJECT
//Creating object using Object literal
// let person={
//     name:'shikhar',
//     age:21,
//     gender:'male',
//     hobby:function(){
//         return 'hobby is playing cricket'
//     }
// }

// console.log(person.this)

//* 2. ACCESSING THE PROPERTIES AND METHODS
// i. dot notation
// console.log(person.age)

// ii. [] notation
// console.log(person['name'])


//* 3. ADD/ALTER MORE PROPERTIES AND METHODS TO OBJ
// i.Add
// person.height='average'
// console.log(person)

// person['disablity']='no'
// console.log(person)

// ii.delete
// delete person.age
// console.log(person)


//*4 FACTORY FUNCTION
//Creating object using factory function
// function createObject(name,age,gender,hobby){
//    return{
//         name:name,
//         age:age,
//         gender:gender,
//         hobby:function(){
//             return `hobby is playing ${hobby}`
//         }
//    } 
// }
//!It can also be written in the below way: when key and values both share the same names.
// function createObject(name,age,gender,hobby){
//     return{
//          name,
//          age,
//          gender,
//          hobby:function(){
//              return `hobby is playing ${hobby}`
//          }
//     } 
//  }

// let person1=createObject('shikhar',21,'male','cricket')
// console.log(person1)

//* 5.CONSTRUCTOR
//Creating ojbect using constructor
// function Person(name,age,gender,hobby){
//     this.name=name,
//     this.age=age,
//     this.gender=gender,
//     this.hobby=function(){
//         return `hobby is playing ${hobby}`
//     }
// }

// let person2=new Person('prakhar',25,'male','football')
// console.log(person2)

//* 6.OBJECT COPY IN JS
// let originalPerson = {
//     name: "Aman",
//     age: 30,
//     address: {
//       street: "123 MG Road",
//       city: "New Delhi",
//       location: {
//         lat: 80,
//         long: 56,
//       },
//     },
//   };

// //! i.Shallow copy: In shallow copy, entire object is not copied meaning if the object have nested objects only the reference of that object is shared.So to create shallow copy we use spread operator.
//? (a)spread operator 
//   let shallowCopyPerson={...originalPerson}
//   shallowCopyPerson.age=20;
//   console.log(originalPerson.age)//30
//   console.log(shallowCopyPerson.age)//20
//   shallowCopyPerson.address.street='faridabad'
//   console.log(originalPerson.address.street)//faridabad
//   console.log(shallowCopyPerson.address.street)//faridabad

// //? (b)Object.assign()
// let shallowCopyPerson=Object.assign({},originalPerson)
// shallowCopyPerson.age=20;
// console.log(shallowCopyPerson)

//! ii.Deep Copy: In Deep copy, entire object is  copied meaning there is no reference is shared even in the nested objects.

// let deepCopyPerson=JSON.parse(JSON.stringify(originalPerson)) 
// deepCopyPerson.address.city='faridabad'
// console.log(originalPerson.address.city)
// console.log(deepCopyPerson.address.city)


//todo: NOTE:Difference between  js object and JSON
// i.purpose
// (a) js object : It is used to manipulate data directly and can be created and modified dynamically.
// (b) json: It is used for data exchange often used in API to send and receive data over the web servers in a format that is easily parsed.

// ii.Syntax:
// (a) js object:const person = {
//     name: 'John Doe',
//     age: 30,
//     isEmployed: true,
//     greet: function() {
//         console.log('Hello, ' + this.name);
//     }
// };

// (b) json:{
//     "name": "John Doe",
//     "age": 30,
//     "isEmployed": true
// }

//js object can store functions and methods but json can not.


//* 7.ITERATION OVER AN OBJECT
const obj={
  key1:'value1',
  key2:'value2',
  key3:'value3'
};

//? (a)for in loop
// for(let a in obj){
//   console.log(`keys: ${a} and objectValues:${obj[a]}`)
// }

//? (b)Object.keys():The Object.keys() method returns an array of a given object's own property names. You can then use forEach to iterate over these keys:
// Object.keys(obj).forEach((key)=>{
//   console.log(`keys:${key}`)
// })

//? (c)Object.values(): If you only need the values of the object, Object.values() can be used. It returns an array of the object's values
// Object.values(obj).forEach((value)=>{
//   console.log(`values: ${value}`)
// })

//? (d)Object.entries():The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is particularly useful when you want both keys and values.
// Object.entries(obj).forEach(([key,value])=>{
//   console.log(`keys: ${key} & values:${value}`)
// })

//? (e)5. Using forEach() with Arrays If you convert the object into an array of entries, you can also use forEach() directly:
const entries = Object.entries(obj);//converts an object into array of entries
entries.forEach(([key, value]) => {
    console.log(key, value);
})
console.log(entries)


  