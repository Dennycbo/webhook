const express = require("express")
let app = express()
app.use(express.json())
app.post("/webhook", (req, res)=>{
    console.log(req.body)
})
app.listen(3000, ()=>{
    console.log("Running.")
})