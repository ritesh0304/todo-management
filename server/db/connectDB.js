import mongoose from "mongoose"
import {DB_NAME} from '../constants.js'
async function connectDB(){
  try {
    let connection=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log("Host: ", connection.connection.host)
  } catch (error) {
     throw error.msg;
  }
}

export {connectDB}