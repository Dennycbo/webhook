const express = require("express")
const app = express()
app.use(express.json())
app.listen(3500, ()=>{
    console.log("Running")
})
app.get("/", (req,res)=>{
    res.json({status:"RUNNING"})
})
app.post("/webhook", async(req,res)=>{
    res.json({status:"Sucess"})
    const {SaveUsers} = require("./saveUsers/saveusers")
    let transStatus = req.body.trans_status
    let userEmail = req.body.client_email
    let planKey = req.body.product_key
    let datePayment = req.body.trans_updatedate
    setTimeout(()=>{
        SaveUsers(userEmail, transStatus, planKey, datePayment)
    }, 2000)
})