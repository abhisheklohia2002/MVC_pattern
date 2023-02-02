const express = require("express");
const user = require("../model/userregister");
const app  = express();
const bcryptjs = require("bcryptjs");
const jwt  = require("jsonwebtoken")
const config  = require("../config/config");

app.use(express.json())

const createToken = async(id)=>{
    try {
        const token = await jwt.sign({_id:id},config.name);
        return token
    } catch (error) {
        console.log(error)
    }
}




const changePasswordhash = async(data)=>{
   try {
    const info = await bcryptjs.hash(data,10);
    console.log(info)
    return info;


   } catch (error) {
  res.status(400).send({message:error})
   }
}




const register = async(req,res)=>{
    
    
    const hashpassword =  await changePasswordhash(req.body.password)
    const tokenData = await createToken(check._id);
    

    try {
        const data = new user({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            image:req.file.filename,
            mobile:req.body.mobile,
            data : req.body.data,
            token:tokenData
        });


       
const data_email = await user.findOne({email:req.body.email});


if(data_email){
res.status(404).send({message:"please try Again"})
}

else {
   const result =  await data.save();
   res.status(200).send({result,success:true})
   return;

}

    } 
    catch (error) {
        console.log("error",error)
    }
}



//login_User
const login_User = async (req,res)=>{
    try {
        // console.log(req.body.email,"true")
        const email = req.body.email
        const check = await user.findOne({email});
        if(check){
            const password = await bcryptjs.compare(req.body.password,check.password);
            
            if(password){
                const tokenData = await createToken(check._id);
                const userResult = {
                    _id : check._id,
                    name:check.name,
                    email:check.email,
                    password:check.password,
                    image:check.image,
                    mobile:check.mobile,
                    data :check.type,
                token:tokenData
                    
                }
               

                    res.status(200).send(userResult)
            }
            else {
                res.status(400).send({message:"Invalid Entry"})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({error:"something went wrong"})
        
    }
}



const tokenData = async(req,res)=>{
    try {
        res.status(200).json({message:"successfull"})
    } catch (error) {
        
    }
}

module.exports = {register,login_User,tokenData}