 //2 Parts- Primitives and non-primitives
 //Primitive-7(Call by value)
 /* 1.String 
    2.Number
    3.Boolean
    4.Null
    5.undefined
    6.Symbol
    7.BigInt 
 */

//Non-primitive(reference Types)

/*
1.Array
2.Objects
3.Functions
*/

//Js is dynamically typed
// Dynamically Typed → You don’t have to declare types.

// let x = 5;      // number
// x = "hello";    // now it's a string — valid!
// The type of a variable is checked at runtime, not during compilation.
// const score=100;
const isLoggedIn = false
const outsideTemp = null

// let userEmail; //undefined
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(id===anotherId);

const bigNumber = 3566668696899455n


const name = ['Sachin','nepal','brt'];

let obj={
    name1:'shrestha',
    age : 22,

}

// function h1(){
//     console.log("hello")
// }
const myfunction=function(){
    console.log("hello")
}

console.log(typeof name)






// TypeScript
// const score:number =20