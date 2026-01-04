let productservices=require('../services/product.service')
const getfinalproducts=async (req,res)=>{
    let finalproducts= await productservices.getallproducts();
    res.status(200).json(finalproducts)
}

const storeallproducts=async (req,res)=>{
  await productservices.createallproducts(req.body);
  res.status(201).json({"msg":"products stored succesfully"})
}

module.exports={getfinalproducts,storeallproducts}