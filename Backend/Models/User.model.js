const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username:String,
    password:{ type: String, required: true }
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel