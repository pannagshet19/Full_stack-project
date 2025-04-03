import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();


//const express= require("express");
const app = express();


mongoose.connect(`mongodb+srv://pannagshet7:${process.env.MONGODB_PASSWORD}@cluster0.qzlv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => app.listen(6000, () => console.log("connected to database and server"))).catch((e) => console.log(e));

app.use("/", (req, res, next) => {
    res.send("hI good morning");
});

//server 
app.listen(6000, () => {
    console.log(`connected to local host port${6000}`);

});


//password SgV9zOrsddc3LiLm 
