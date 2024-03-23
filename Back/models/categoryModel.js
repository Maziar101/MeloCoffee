import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide a Category Name"],
        unique:true,
    },
});

const Categories = mongoose.model("Categories",categorySchema);
export default Categories