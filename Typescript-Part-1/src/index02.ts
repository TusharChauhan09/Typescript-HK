// Interfaces and Types

// complex non-premitive
function greet(user:{
    name : string ,
    age : number
    }) 
{
    console.log(`Hello ${user.name}`);
}

greet({
    name: "Tushar",
    age: 10
});



// 1. interface
interface User {
    name : string,
    age : number ,
}

let t1 : User = {
    name : "Tushar",
    age : 20
}
let t2 : User  = {
    name : "Tarshit",
    age : 20
}
let t3 : User = {
    name : "Tanish",
    age : 19
}

function greet1 ( user : User ) : void {
    console.log(`Hello ${user.name}`);
}
greet1(t2);


// 2. types
type Users = {
    name : string,
    age : number ,
}

type admins = {
    name : string,
    age : number ,
    readonly id? : number
}

let t4 : Users | admins  = {
    name : "Tushar",
    age : 10,
    id : 1234
}

function greet2 ( user : Users | admins ) : void {
    console.log(`Hello ${user.name} ${ 'id' in user ? user.id : '' }`);
}
greet2(t4);




