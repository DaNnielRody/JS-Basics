import express from 'express';
import { User, users } from "./users.js";

export const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/", (req, res) => {
    res.json(users);
})

userRouter.get("/:email", (req, res) => {
    const email = req.params.email;
    const user = users.find(user => user.email === email);

    if(user){
        res.json(user)
    }else{
        res.status(404).json({ message: "User not found" });
    }
    
})

userRouter.post("/", (req, res) => {
    const { firstName, lastName, email, birthDate } = req.body;

    const existingUser = users.find(user => user.email === email);

    if(existingUser){
        res.status(409).json({ message: "User already exists"});
    }

    const newUser = new User(firstName, lastName, email, birthDate);

    users.push(newUser);
    res.status(201).json(newUser);

})

userRouter.put("/:email", (req, res) => {

    const emailParam = req.params.email;
    const { firstName, lastName, email, birthDate } = req.body;
    const user = users.find(user => user.email === emailParam);
    
    if(!user){
        res.status(404).json({ message: "User not found"});
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.birthDate = birthDate;

    res.status(200).json(user);
    
})

userRouter.delete("/:email", (req, res) => {

    const email = req.params.email;
    const userIndex = users.findIndex(user => user.email === email)

    if(userIndex !== -1){
        const removedUser = users.splice(userIndex, 1)[0];
        res.json({ message: `${removedUser.email} removed`})
    }else{
        res.status(404).json({ message: "User not found" });
    }
})