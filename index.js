import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import { contactRoute } from "./routes/contactroutes.js";
import cors from "cors";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://your-frontend.vercel.app", // abhi localhost bhi rakh sakte ho
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use("/portfolio", contactRoute);

app.use((req, res) => {
  res.send("Hello Backend (Serverless Running)");
});

await connectdb();

// ❌ Remove app.listen()
// ✅ Export handler for vercel
export const handler = serverless(app);
