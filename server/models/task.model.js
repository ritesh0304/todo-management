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
    },
    dueDate:{
         type:String,
        //  required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
})

export const Task=mongoose.model('Task',taskSchema);