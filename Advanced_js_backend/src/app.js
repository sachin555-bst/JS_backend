import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
 

//configurations below

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}  //for json fromat
))

app.use(express.urlencoded({extended:true , limit:"16kbk"})) //for file format

app.use(express.static("public")) // to keep some document assests in own server

app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)

export {app}
