// 1. Pick
interface User {
  id: number;
  name: string; // can be changed/accessed/printed
  email: string; // can be changed/accessed/printed
  password: string;
  createdAt: Date;
}


// a. using another interface/type : it increases the time to change the type if changed in the refred interface ( 2 place change )
// interface UserProfile {
//   name: string;
//   email: string;
// }
// const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email} `);
// };


// b. Pick : it choose from the existing interface/type rather than creating one
// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email} `);
};

export {}