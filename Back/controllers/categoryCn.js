import Categories from "../models/categoryModel.js";

export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Categories.find(req.query);
    return res.status(200).json({
      data: {
        categories,
      },
      status: "Success",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Error in fetching the category",
    });
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCat = await Categories.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Category has been Deleted Successfully!",
    });
  } catch (err) {
    return res.status(400).json({
        status:"fail",
        message: "Invalid Category ID"
    });
  }
};
export const createCategory = async (req,res,next)=>{
    try{
        const newCategory = await Categories.create(req.body);
        return res.status(201).json({
            message:"Category Created Successfully",
            data:{newCategory},
            status:"Success",
        });
    }catch(err){
        return res.status(401).json({
            message:" An error while creating a new Category",
        });
    }
};