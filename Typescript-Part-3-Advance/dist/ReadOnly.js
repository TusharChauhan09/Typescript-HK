"use strict";
// 3. ReadOnly
Object.defineProperty(exports, "__esModule", { value: true });
const u1 = {
    id: 1,
    name: "Tushar",
    email: "tushar@gmail.com",
    password: "123",
};
// or
// b. make all the paramters read only but make all the keys readonly
// const u1 : Readonly<User> =  {
//     id : 1,
//     name : "Tushar",
//     email : "tushar@gmail.com",
//     password : '123'
// }
console.log(u1.email, u1.password);
// u1.email = "hello@gamil.com"; //error
u1.password = "456";
console.log(u1.email, u1.password);
const config = {
    endpoint: "https://api.example.com",
    apiKey: "abcdef123456",
};
