import { contactController } from "../controller/contact.js";
import express from "express"
export const contactRoute=express.Router();
contactRoute.post("/contact-Me",contactController);