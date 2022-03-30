const express = require("express")
let app = express()
app.use(express.json())
app.get("/", (req,res)=>{
res.json({value:"Hello user"})
})
app.post("/webhook", (req, res)=>{
    res.JSON(req.body)
})
app.listen(3000, ()=>{
    console.log("Running.")
})
