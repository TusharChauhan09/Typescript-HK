"use strict";
// Interfaces and Types
// complex non-premitive
function greet(user) {
    console.log(`Hello ${user.name}`);
}
greet({
    name: "Tushar",
    age: 10
});
let t1 = {
    name: "Tushar",
    age: 20
};
let t2 = {
    name: "Tarshit",
    age: 20
};
let t3 = {
    name: "Tanish",
    age: 19
};
function greet1(user) {
    console.log(`Hello ${user.name}`);
}
greet1(t2);
let t4 = {
    name: "Tushar",
    age: 10,
    id: 1234
};
function greet2(user) {
    console.log(`Hello ${user.name} ${'id' in user ? user.id : ''}`);
}
greet2(t4);
