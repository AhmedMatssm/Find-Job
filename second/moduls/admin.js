const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({

    email:{
        type: String,
        require:true,
        unique:true,
    },
    password:{
        type: String,
        require:true
    }
})
const AdminModel = mongoose.model("admin",AdminSchema)

module.exports = AdminModel
