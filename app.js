
import express from "express"
import  userRouter from './modules/user/user.router.js'


const app = express();
app.use(express.json())
app.use(userRouter)

app.get("/",(req,res)=>{
    res.json({message:"Home page"})
})


app.get("*",(req,res)=>{
    res.json({
        message:"error 404 Not Found"
    })
})

app.listen(3000,()=>{
    console.log("running..........................");
})