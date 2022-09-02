const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.listen(5000,()=>{
    console.log("Listening on port localhost 5000")
})