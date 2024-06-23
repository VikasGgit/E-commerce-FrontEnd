import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js"

 const app= express();


app.use(express.json());
app.use(cors());
app.use('/auth', authRouter)
app.use('/user', userRouter);
app.get('/', (req, res) => {
    res.json({
        "status":400,
        "msg":"welcom to world!"
    });
})


export default app;