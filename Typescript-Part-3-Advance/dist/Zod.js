"use strict";
// Zod
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Define the schema for profile update
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
