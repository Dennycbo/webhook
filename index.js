const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
app.get("/", (req,res)=>{
    res.json({value:"Hello world"})
})
app.post("/", (req, res)=>{
    console.log(req.body)
    res.json({status:"Sucess"})
})
app.listen(2500, ()=>{
    console.log("Running.")
})
