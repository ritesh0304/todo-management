import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    description:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    dueDate:{
         type:String,
         required:true,
    }
},{
    timestamps:true
})

export const User=mongoose.model('Task',taskSchema);