// import dotenv from "dotenv";
// dotenv.config({ path: './.env' });


import { connectDB } from './db/connectDB.js';
import app from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running at port:");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
