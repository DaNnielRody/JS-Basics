//import axios from 'axios';
import express from "express";

const app = express();

// app.get("user/about/:id", (req, res) => {
//     res.send("Response user" + req.params.id)
// })

// app.get("item/about/:id", (req, res) => {
//     res.send("Response item" + req.params.id)
// })

const userRouter = express.Router();
const itemRouter = express.Router();

// Isso funciona como um middleware. No caso, a aplicação só passa para as outras caso a autenticação seja feita corretamente. Caso não, ele retorna erro e não entra na aplicação
app.use((req, res, next) => {
  if (req.query.password !== "pwd123") {
    return res.status(402).send("Authentication error");
  }
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

// Utilizando um router, podemos definir o que cada função passa através do middleware e no final usamos com o app.use()

userRouter.use((req, res, next) => {
  console.log("User query time: ", Date());
  next();
});

userRouter.get("/about/:id", (req, res) => {
  res.send("Response user" + req.params.id);
});

itemRouter.use((req, res, next) => {
  console.log("Item query time: ", Date());
  next();
});

itemRouter.get("/about/:id", (req, res) => {
  res.send("Response item" + req.params.id);
});

app.use("/item", itemRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`listening zap`);
});
