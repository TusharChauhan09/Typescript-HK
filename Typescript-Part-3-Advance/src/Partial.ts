// 2. Partial
interface User {
    id: number;
    name: string;   // not nessacery to provide  
    email: string;  
    password: string;
    createdAt: Date;
  }
  
  
  // a. using another interface/type : it increases the time to change the type if changed in the refred interface ( 2 place change )
  // interface UserProfile {
  //   name?: string;
  //   email?: string;
  // }
  // const displayUserProfile = (user: UserProfile) => {
  //     console.log(`Name: ${user.name}, Email: ${user.email} `);
  // };
  
  
  // pick : it choose from the existing interface/type rather than creating one
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, "name" | "email">;

  // b. Partial  : it make all the provided parameters  things optional 
  type PartialOptionalProps = Partial<UserProfile>
  
  const displayUserProfile = (user: PartialOptionalProps) => {
    console.log(`Name: ${user.name}, Email: ${user.email} `);
  };

  displayUserProfile({name : "tushar"})
  
  export {}