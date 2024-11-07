import express from 'express'
import { users } from "./users.js"
import { userRouter } from "./routes.js";
import jwt from 'jsonwebtoken'

const secretKey = 'firstcrud'

const app = express();
app.use(express.json());
app.use("/user", userRouter);

app.post('/login', (req, res) => {
    const { email } = req.body;

    const userEmail = users.find(user => user.email === email);

    if(!userEmail){
        res.status(404).json({ message: "User not found" });
    }else{
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    }
})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1]

    if(token == null){
        return res.status(401).json({ message: "Token not provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) =>{
        if(err){
            return res.status(403).json({ message: "Token not valid" });
        }
        req.user = decoded;
        next();
    })
}

app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.email} to the dashboard`  })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})