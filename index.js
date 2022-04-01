const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req,res)=>{
    res.json({value:"Hello world"})
})
app.post("/webhook", (req, res)=>{
    console.log(req.body)
})
app.listen(2500, ()=>{
    console.log("Running.")
})
