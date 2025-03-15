"use strict";
// Arrays
Object.defineProperty(exports, "__esModule", { value: true });
// question-1 : Given an array of positive integers as input, return the maximum value in the array
function maxElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let arr1 = [12, 34, 543, 23, 432];
let result1 = maxElement(arr1);
console.log("max value is : " + result1);
// question-2 : Given a list of users, filter out the users that are legal (greater than 18 years of age)
function isLegal(user) {
    return user.filter((cur) => cur.age >= 18);
}
let users = [
    {
        firstName: "Tushar",
        lastName: "Chauhan",
        age: 20
    },
    {
        firstName: "harkirat",
        lastName: "Singh",
        age: 21
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },
];
let result2 = isLegal(users);
console.log(result2);
