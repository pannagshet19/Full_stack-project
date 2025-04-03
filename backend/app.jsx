const express= require("express");
const app=express();

app.use("/",(req,res,next) =>{
    res.send("hI good morning");
});

//server 
app.listen(6000,()=>{
    console.log(`connected to local host port${7000}`);
    
});
