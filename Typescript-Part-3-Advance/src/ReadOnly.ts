// 3. ReadOnly

// a. make make individual keys readonly
interface User {
  readonly id: number; // no change only read
  readonly name: string; // no change only read
  readonly email: string; // no change only read
  password: string;
}

const u1: User = {
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



// Real life Example
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

export {};
