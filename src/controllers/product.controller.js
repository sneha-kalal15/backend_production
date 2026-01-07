let productservices=require('../services/product.service')
let getfinalproducts=async(req,res)=>{
 let finalproducts=await productservices.getallproducts();
 res.status(200).json(finalproducts)
}
const storeallproducts=async(req,res)=>{
 await productservices.createallproducts(req.body);
 res.status(201).json({"msg":"products stored successfully"})

}

const deletepro=async(req,res)=>{

  await productservices.deletetheproduct(req.params.id)
  res.json({"msg":"product is deleted succesfully"})
}

const updatepro=async(req,res)=>{

  await productservices.updatetheproducts(req.params.id,req.body)
  res.json({"msg":"product is updated succesfully"})
}

module.exports={getfinalproducts,storeallproducts,deletepro,updatepro}