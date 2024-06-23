import { Task } from "../models/task.model.js";

export const setTask=async(req,res,next)=>{
try {
       const {title, description, dueDate,userId}=req.body.formData;
       console.log(title,description)
       const newTask=await Task.create({
        "title":title,
        "description":description,
        "dueDate": dueDate,
        "userId":userId
       }
       )
       res.json({
        success:true,
        msg:"task created successfully",
        newTask
       })
} catch (error) {
    res.json({
        success:false,
        msg:error.msg||"Error creating a task",
    })
}
}



export const getAllTask=async(req,res,next)=>{
    try {
        const userId=req.body.userId;
        const tasks=await Task.find({"userId":userId});
        res.json({
            success: true,
            tasks: tasks
        });
        console.log(tasks);
    } catch (error) {
        res.json({
            success:false,
            msg:error.msg||"Error getting tasks",
        })
    }
}

export const taskUpdate = async(req,res,next)=>{
  try{

  }catch{
    res.json({
        success:false,
        msg:error.msg||"Error updating task",
    })
  }
}