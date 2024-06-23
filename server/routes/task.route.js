import { Router } from "express";
import {setTask,getAllTask,taskUpdate, taskDelete} from "../controllers/task.controller.js"
export const taskRoute=Router();

taskRoute.post("/setTask",setTask)
taskRoute.post("/getAllTask",getAllTask)
taskRoute.put("/taskUpdate",taskUpdate);
taskRoute.post("/taskDelete",taskDelete);