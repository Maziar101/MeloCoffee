import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{
        type:String,
        required:[true,"Please Set Image For Product"],
    },
    name:{
        type:String,
        required:[true,"Please A Name For Product"],
        unique:true,
    },
    price:{
        type:Number,
        required:[true,"Please A Price For Product"],
    },
    description:{
        type:String,
        required:[true,"Please A Description For Product"],
    },
    isAvailable:{
        type:Boolean,
        required:[true,"Please Set isAvailable For Product"],
    },
    categoryId:{
        type:Array,
        required:[true,"Please Set CategoryId For Product"],
    },
    relatedProductsId:{ 
        type:Array,
        required:[true,"Please Set relatedProductsId For Product"],
    }
},{timestamps:true});

const Products = mongoose.model("Products",productSchema);
export default Products;