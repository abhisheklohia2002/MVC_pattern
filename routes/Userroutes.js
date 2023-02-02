const express = require("express");
const app = express()
const routess = express.Router();
const multer = require("multer");

const body_parser = require("body-parser");

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(express.json())
const path = require("path");

// console.log(path.join(__dirname,"../public/userimage"));

app.use(express.static('public'))
  const storage =  multer.diskStorage({
    destination:function(req,file,cb){
            cb(null,path.join(__dirname,"../public/userimage"),(error,res)=>{
                if(error)throw error
            })
    },
    filename:function(req,file,cb){
      const name =  Date.now()+"-"+file.originalname;
cb(null,name)
    }
})



const upload = multer({storage:storage});



const userController = require("../controller/userController");


const auth = require("../middleware/Auth")
routess.post('/register',upload.single('image'),userController.register)

routess.post("/login",auth,userController.login_User);


routess.get("/test",auth,userController.tokenData)

module.exports = routess;
