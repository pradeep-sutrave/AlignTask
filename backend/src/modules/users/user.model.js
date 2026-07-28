import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const userSchema = new Schema(
    {
        name : {
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            select:false,
        },
        avatar:{
            type:String,
            default:"",
        },
        isVerified:{
            type:Boolean,
            default:false,
        },
        isActive:{
            type:Boolean,
            default:true,
        },
        lastLogin:Date,
        role:{
            type:String,
            enum:['user','admin'],
            default:"user",
        },
    },
    {
        timestamps: true,
    }
);

const User= model("User",userSchema);

export default User;