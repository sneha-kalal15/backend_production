
let productservices=require('../services/product.service')
const getfinalproducts=async (req,res)=>{
    let finalproducts= await productservices.getallproducts();
    res.status(200).json(finalproducts)
}

const storeallproducts=async (req,res)=>{
  await productservices.createallproducts(req.body);
  res.status(201).json({"msg":"products stored succesfully"})
}
const 
updatepro=async(req,res)=>{
    await productservices.updatetheproducts(req.param.id,req.body)
    res.json({"msg":"product is updated successfully"})
}

module.exports={getfinalproducts,storeallproducts,updatepro}