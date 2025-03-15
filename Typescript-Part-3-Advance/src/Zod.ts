// Zod

import express from "express";
import { z } from 'zod';

const app = express();

app.use(express.json());

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// a. use type/interface 
// type finalUserSchema ={
//     name: string,
//     email: string,
//     age? : number,
// }

// b. using zod infer
// type of above zod schema 
type finalUserSchema  = z.infer<typeof userProfileSchema > ;  // Run time variable as i will take the type at the time code runs 

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : finalUserSchema = req.body; 

  if (!success) {
    res.status(411).json({});
    return
  }
  res.json({
    message: "User updated"
  })
});

app.listen(3000);

export {}