import mongoose from "mongoose";

const {Schema, model}=mongoose;

const todoSchema = new Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        title:{
            type:String,
            required:true,
            trim:true,
        },
        description:String,
        completed:{
            type:Boolean,
            default:false,
        },
        priority:{
            type:String,
            enum:['low','medium','high'],
            default:"medium",
        },
        dueDate:Date,
        category:String,
    },
    {
        timestamps:true,
    }
);

const Todo = model("Todo",todoSchema);

export default Todo;