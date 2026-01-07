let products=require('../models/products.model')
const fetchproducts=async()=>{
    return await products.find()
}
const createproducts=(payload)=>{
    return  products.create(payload)
}

const updateproducts=(id,payload)=>{
  return products.findByIdAndUpdate(id,payload)
}

const deleteproducts=(id)=>{
  return products.findByIdAndDelete(id)
}



module.exports={fetchproducts,createproducts,deleteproducts,updateproducts}