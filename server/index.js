// import dotenv from "dotenv";
// dotenv.config({ path: './.env' });


import { connectDB } from './db/connectDB.js';
import app from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running at port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
