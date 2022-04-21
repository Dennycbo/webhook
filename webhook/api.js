const express = require("express")
const app = express()
app.use(express.json())
app.listen(3500, ()=>{
    console.log("Running")
})
app.get("/", (req,res)=>{
    res.json({status:"RUNNING"})
})
app.post("/webhook", (req,res)=>{
    res.json({status:"Sucess"})
    let transStatus = req.body.trans_status
    let userEmail = req.body.client_email
    let planKey = req.body.product_key
})
