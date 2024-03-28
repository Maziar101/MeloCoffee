import Sliders from "../models/sliderModel.js";

export const getAllSliders = async (req,res,next)=>{
    try{
        const sliders = await Sliders.find(req.query);
        res.status(200).json({
            message: "All Sliders Found Successfully",
            data:sliders,
        });
    }catch(err){
        res.status(400).json({
            message: err,
        });
    };
};