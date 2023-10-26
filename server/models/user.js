import { Schema, Types, model } from "mongoose";

const userschema = new Schema ({
    name:{
        Types:String,
        default:"-"
    },
    email:{
        Types:String,
        require:true

    },
    address:{
        Types:String,
        require:true
    },
    password:{
        Types:String,
        require:true
    }
})