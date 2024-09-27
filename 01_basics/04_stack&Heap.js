//Stack (primitive datatypes) & Heap (non-primitive datatypes)
//*Primitive datatypes sends the copy of its values
//*Non-primitve datatypes send its reference

//Example 1
// let primitive_variable=1;
// let another_primitive_variable=primitive_variable;
// another_primitive_variable=2;
// console.log(primitive_variable)
// console.log(another_primitive_variable)//It shows that  another_primitive_variable contains only the copy because if it contains reference then primitive_variable get also change but it does not change


//Example 2
let obj1={
    name:'shikhar',
    age:21
}

let obj2=obj1;

obj2.name="prakhar"
console.log(obj2)
console.log(obj1)//It shows both obj1 and obj2 pointed to the same object because reference shared not copy value