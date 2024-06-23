import { Router } from "express";
import {setTask,getAllTask,taskUpdate} from "../controllers/task.controller.js"
export const taskRoute=Router();

taskRoute.post("/setTask",setTask)
taskRoute.post("/getAllTask",getAllTask)
taskRoute.post("/taskUpdate",taskUpdate);