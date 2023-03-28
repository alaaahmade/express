// create express app
const express = require("express");
const app =  express();
app.get("/",(req,res)=>{
    res.send("Hello World")
})
// route handler
app.listen(3000,()=>{
    console.log("server is runnig in http://localhost:3000");
})
// listen for connections
