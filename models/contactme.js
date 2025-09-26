import mongoose from "mongoose";

  const userSchema=new mongoose.Schema({
Name:{
  type:String,
  required:true
  },
  emailid:{
    type:String,
    required:true,
  },
  Message:{
    type:String,
    required:true,
  }
})
export const Contact = mongoose.model("Contact", userSchema);