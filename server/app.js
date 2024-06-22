import express from 'express'
import { userRoute } from './routes/user.route.js';
import { taskRoute } from './routes/task.route.js';

const app=express();
app.use(express.json());


app.use("/api/v1/auth",userRoute);
app.use("/api/v1/task",taskRoute)

export default app;
