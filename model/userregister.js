const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
    ,
    password : {
        type:String,
        required:true
    }
    ,
    image:{
        type:String,
        required:true
    }
    ,
    mobile:{
        type:String,
        required:true
    }
    , data:{
        type:String,
        required:true

    },
    token:{
        type:String,
        required:true
    }
  
})


const model = new mongoose.model("user",userSchema);
module.exports = model;
