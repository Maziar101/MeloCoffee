import Products from "../models/productModel.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find(req.query);
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (err) {
    res.status(406).json({
      message: err,
      status: "Fail",
    });
  }
};

export const getOneProduct = async (req,res,next)=>{
    try{
        const product=await Products.findById(req.params.id);
        res.status(200).json({
            message:`product with id ${id} found`,
            data:product,
        });
    }catch(err){
        res.status(404).json({
           message: `product with id ${id} not found`, 
        });
    };
};

export const deleteProduct = async (req,res,next)=>{
    try{
        const deletedProduct=await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "Success",
            message:`product with id ${id} has been deleted successfully`,
        });
    }catch(err){
        res.status(400).json({
            status: "Error",
            message: err,
        });
    };
};

export const updateProduct = async (req,res,next)=>{
    try{
        const  updatedProduct= await Products.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
        res.status(200).json({
            message:"Product Updated Successfully",
            data:updatedProduct,
        });
    }catch(err){
        res.status(400).json({
            message: 'Error in updating the product',
        }); 
    };
};

export const createProduct = async (req,res,next)=>{
    try{
        const newP = req.body;
        const newProduct = Products.create({...newP});
        res.status(201).json({
            message: "Product Created Successfully",
        });
    }catch(err){
        res.status(400).json({
            message: err,
        });
    };
};