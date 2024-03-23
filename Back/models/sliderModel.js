import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    alt:{
        type:String,
        required:true,
    },
});

const Sliders = mongoose.model("Sliders",sliderSchema);
export default Sliders;