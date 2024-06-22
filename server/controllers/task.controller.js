import { Task } from "../models/task.model.js";

export const setTask=async(req,res,next)=>{
try {
       const {title, description, dueDate}=req.body;
       console.log(title,description)
       const newTask=await Task.create({
        "title":title,
        "description":description,
        "dueDate": dueDate
       }
       )
       console.log("1")
       res.json({
        status:true,
        msg:"task created successfully",
        newTask
       })
} catch (error) {
    res.json({
        status:false,
        msg:error.msg||"Error creating a task",
    })
}
}



export const getAllTask=async(req,res,next)=>{
    try {
        const tasks=await Task.find({});
        res.json({
            success: true,
            tasks: tasks
        });
    } catch (error) {
        res.json({
            status:false,
            msg:error.msg||"Error getting tasks",
        })
    }
}

export const taskUpdate = async(req,res,next)=>{
  try{

  }catch{
    res.json({
        status:false,
        msg:error.msg||"Error updating task",
    })
  }
}