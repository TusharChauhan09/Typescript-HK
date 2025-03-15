"use strict";
// Interfaces and Types
Object.defineProperty(exports, "__esModule", { value: true });
// complex user
let user = {
    name: "Tushar",
    age: 20,
    address: {
        city: "Shimla",
        country: "India",
        pincode: 171003
    },
};
// function using complex type in parameters
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let result = isLegal(user);
console.log("The person is : " + result);
// 1.b.2 using interface on a function
const person1 = {
    name: "Tushar",
    age: 20,
    greet: () => {
        return "hello"; // Problem : it can't use this.name  
    }
};
let greating1 = person1.greet();
console.log(greating1);
// 1.b.3  implement interfaces in classes
class Person2 {
    // The bellow line takes all the constructor inputs to the interface variable as we are using public access specifier
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.extra = "This an extra member variable";
    }
    greet() {
        return "hello " + this.name;
    }
    ;
}
let obj = new Person2("Tushar", 20);
let greating2 = obj.greet();
console.log(greating2);
let e1 = {
    name: "Tushar",
    startDate: "09-12-2004"
};
let m1 = {
    name: "Tanish",
    department: "CSE"
};
let t1 = {
    name: "Tarshit",
    startDate: "21-02-2006",
    department: "Btech"
};
let t2 = {
    name: "Tarshit",
    startDate: "21-02-2006",
};
