import mongoose from "mongoose";
export const connectdb=async()=>{
  try {
   await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connect succesfully");
    
  } catch (error) {
    console.log(Error);
    
  }

}