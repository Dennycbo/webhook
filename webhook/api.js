const express = require("express")
const app = express()
app.use(express.json())
app.listen(3500, ()=>{
    console.log("Running")
})
app.get("/", (req,res)=>{
    res.json({status:"RUNNING"})
})
app.post("/webhookbraip", (req,res)=>{
    res.json({status:"Sucess"})
})
