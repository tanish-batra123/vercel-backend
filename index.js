import express from "express"
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"
import { contactRoute } from "./routes/contactroutes.js";
import cors from "cors";

dotenv.config();
const app=express();
const PORT=5000;
app.use(cors({
  origin: 'https://new-portfolio-pied-two-32.vercel.app', 
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));
app.use(express.json()); 


  app.use("/portfolio",contactRoute);
    app.use((req,res)=>{
    res.send("hello backend")
  })
  await connectdb();
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});