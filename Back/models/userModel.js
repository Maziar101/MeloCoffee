import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide a Name"],
    },
    username:{
        type:String,
        required:[true,"Please Provide a Username"],
        unique:[true,"Username is Already Exist"],
    },
    password:{
        type:String,
        required:[true,"Please Provide a Password"],
    },
});

const Users = mongoose.model("Users",userSchema);
export default Users