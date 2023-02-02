const jwt = require("jsonwebtoken");
const config  = require("../config/config");


const verifyToken  = async(req,res,next)=>{
    const token  = req.body.token  || req.query.token || req.headers["authorization"];
    try {
       
       if(!token){
        res.status(400).send({message:"we need token for authenications"})
       }
       else{
        const data_token  = jwt.verify(token,config.name);
            req.user = data_token

       }


    } catch (error) {
        res.status(400).send("invalid token",error)
    }
    return next()
}


module.exports = verifyToken;
