import { Router } from "express";
import { userLogin, userRegister } from "../controllers/user.controller.js";


export const userRoute=Router();
userRoute.post("/register",userRegister)
userRoute.post("/login",userLogin)