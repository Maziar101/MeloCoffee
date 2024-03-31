import mongoose from "mongoose";
const specialCoffeeSchema = new mongoose.Schema({
    mobile:{
        type: String,
        required : true,
    },
    desktop:{
        type: Object,
        required: true,
    },
});
const specialCoffee = mongoose.model("specialCoffee",specialCoffeeSchema);
export default specialCoffee;