// Interfaces and Types

// 1. Interfaces : for complex object types 

// 1.a.1 create interface 
// complex type interface 
interface User{
    name : string,
    age : number,
    address? : {     // 1.a.2 optionl field
        readonly city: string, // 1.a.3 readonly field
        country: string,
        pincode: number
    },
}

// complex user
let user : User = {
    name : "Tushar",
    age : 20,
    address : {
        city: "Shimla",
        country: "India",
        pincode: 171003
    },
}

// function using complex type in parameters
function isLegal(user: User) : boolean {
    if(user.age>=18){
        return true
    }
    else{
        return false
    }
}

let result = isLegal(user);
console.log("The person is : " + result);

// DRY principle : interface using interface to use address 
interface Address{
    readonly city: string,
    country: string,
    pincode: number
}
interface Office{
    address: Address
}


// 1.b.1 using interface  
interface People{
    name : string,
    age : number,
    greet: ()=> string,
}

// 1.b.2 using interface on a function
const person1 : People  = {
    name : "Tushar",
    age : 20,
    greet : () => {
        return "hello";         // Problem : it can't use this.name  
    }
}
let greating1 = person1.greet();
console.log(greating1);


// 1.b.3  implement interfaces in classes
class Person2 implements People{
    extra : string;
    
    // The bellow line takes all the constructor inputs to the interface variable as we are using public access specifier
    constructor( public name : string , public age : number ){
        this.extra = "This an extra member variable";
    }

    greet () : string {
        return "hello " + this.name ;
    };
}
let obj = new Person2("Tushar",20);
let greating2 = obj.greet();
console.log(greating2);

// 1.b.4 extends interface with interface and class with class


// Note : Difference Abstract classes and Interface 

// 2. Types 

// 2.a.1 type creation 
type User2 = {
    name: string,
    age: number,
    greet : () => string
}

// 2.a.2 advantage: types provide unions and intersection 
type Employee = {
    name : string;
    startDate : string;
}
type Manager = {
    name : string;
    department : string;
}

// a. intersection : need to have all the properties of (a and b)
type teamLead1 = Employee & Manager ;
// b. union : either all the properties of a or b or both (a and b)
type teamLead2 = Employee |  Manager ;


let e1 : Employee  = {
    name: "Tushar",
    startDate : "09-12-2004"
}

let m1 : Manager  = {
    name: "Tanish",
    department: "CSE"
}

let t1 : teamLead1 = {
    name : "Tarshit",
    startDate : "21-02-2006",
    department : "Btech"
}

let t2 : teamLead2 = {
    name : "Tarshit",
    startDate : "21-02-2006",
}

// Note : Difference Types and Interface



export {}
