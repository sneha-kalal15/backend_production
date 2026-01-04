let products=require('../models/products.model')
const fetchproducts=async ()=>{
   return await products.find()
}

const createproducts=async(payload)=>{
    return await products.create(payload)
}

const updateproducts=async(id,payload)=>{
  return await products.findByIdAndUpdate(id,payload)
}

module.exports={fetchproducts,createproducts,updateproducts}  
