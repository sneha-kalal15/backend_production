let products=require('../models/product.model')
const fetchproducts=async ()=>{
   return await products.find()
}

const createproducts=async(payload)=>{
    return await products.create(payload)
}

module.exports={fetchproducts,createproducts}
