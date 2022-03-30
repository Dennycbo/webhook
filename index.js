const express = require("express")
let app = express()
app.use(express.json())
app.get("/", (req,res)=>{
res.json({value:"Hello user"})
})
app.post("/webhook", (req, res)=>{
    console.log(req.body)
})
app.listen(process.env.PORT, ()=>{
    console.log("Running.")
})
