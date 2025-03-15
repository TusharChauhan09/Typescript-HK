"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function sumAge(u1, u2) {
    return u1.age + u2.age;
}
const sum = sumAge({ name: "tushar", age: 20 }, { name: "mayur", age: 18 });
console.log(sum);
