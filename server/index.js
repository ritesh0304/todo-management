import app from "./app.js";
import dotenv from "dotenv";
import {connectDB} from './db/connectDB.js'
import cors from 'cors'
dotenv.config({
    path:'./.env'
})

const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*', 
};

app.use(cors(corsOptions));
connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server running at port :",process.env.PORT)
    })
})