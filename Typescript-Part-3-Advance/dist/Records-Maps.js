"use strict";
// 3. Records
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    id1: {
        no: 1,
        name: "Tushar",
    },
    id2: {
        no: 2,
        name: "Tarshit",
    },
};
console.log(users);
// for changes changes
users["id1"].name = "Mayur";
console.log(users);
// Or
// c. Maps : js concept
const u = new Map();
// set value in key
u.set("id1", { no: 1, name: "Tushar" });
u.set("id2", { no: 2, name: "Tarshit" });
// get value from key
u.get("id1");
// delete
u.delete("id2");
console.log(u);
