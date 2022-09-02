const express = require("express")
const cors = require("cors")
const app = express()
const {connection} = require("./config/db")

app.use(express.json())
app.use(cors())


require('dotenv').config()
const userController = require("./Controllers/User.controller")
const authentication = require("./middleware/authentication")
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/user",userController)

app.use(authentication)



app.listen(process.env.PORT,async()=>{
try{
    await connection
    console.log("connected to db")
}
catch(err){
    console.log("unable to connect db")
    console.log(err)
}

    console.log(`listening on port ${process.env.PORT}`)
})