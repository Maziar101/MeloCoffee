import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Users from "../models/userModel.js";

export const Register = async(req,res,next)=>{
    try{
        const {name,username,password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password);
        const newUser = Users.create({name,username,hashedPassword});
        res.status(201).json({
            message: 'User created successfully!',
        });
    }catch(err){
        res.status(400).json({
            message: ""
        });
    };
};


// export const Login = async(req,res,next)=>{
//     try{
        
//     }catch(err){

//     };
// };