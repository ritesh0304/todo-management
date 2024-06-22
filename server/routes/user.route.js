import { Router } from "express";
import { userLogin, userRegister } from "../controllers/user.controller.js";


export const route=Router();
route.post("/register",userRegister)
route.post("/login",userLogin)