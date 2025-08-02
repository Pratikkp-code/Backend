import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`Server is running on port ${process.env.port}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!",err);
    
})

