const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    email:{
        type: String,
        require:true,
        unique:true,
    },
    password:{
        type: String,
        require:true
    },
    status:{
        type: String,
    },
})
const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel
