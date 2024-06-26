import dotenv from "dotenv";
dotenv.config({ path: './.env' });

import express from 'express';
import cors from 'cors';

import { userRoute } from './routes/user.route.js';
import { taskRoute } from './routes/task.route.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN||"http://localhost:5173/",
  methods:['POST','GET','PUT'], // Ensure CORS_ORIGIN is correctly set in your .env file
  credentials: true, // Enable credentials (cookies, authorization headers) to be included in CORS requests
}));

// JSON parsing middleware
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("api is working welll")
})
// Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/task", taskRoute);

export default app;
