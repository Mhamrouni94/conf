const jwt = require("jsonwebtoken");
const config = require("config")
const secret =config.get('secret')
exports.verify=(req,res,next)=>{
    const token = req.headers.token;
    if(token){
    jwt.verify(token,secret,(err,user)=>{
        if (err) res.status(403).json("Token is not valid");
        req.user=user;
        next();
    })}
    else{
        return res.status(401).json("You are not authentified")
    }
}