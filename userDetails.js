const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        uname:String,
        email:String,
        phoneNo:String,
    }
);

module.exports = mongoose.model("UserInfo",UserDetailsSchema);