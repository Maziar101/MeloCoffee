import specialCoffee from "../models/specialCoffeeModel.js";

export const getAllSpecialCoffees = async (req,res,next)=>{
    try{
        const specialCoffees = await specialCoffee.find(req.query);
        res.status(200).json({
            message: "All Sliders Found Successfully",
            data:specialCoffees,
        });
    }catch(err){
        res.status(400).json({
            message: err,
        });
    };
};