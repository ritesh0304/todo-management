import express from 'express'
import { route } from './routes/user.route.js';

const app=express();
app.use(express.json());


app.use("/api/v1/auth",route);

export default app;
