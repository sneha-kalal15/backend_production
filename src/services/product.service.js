let finalproducts=require('../repository/product.repo')
let getallproducts=async()=>{
    return await finalproducts.fetchproducts();
}

let createallproducts=async({title,price,image})=>{
    return await finalproducts.createproducts({title,price,image});
}



let deletetheproduct=async(id)=>{
   return await finalproducts.deleteproducts(id)
}

let updatetheproducts=async (id,payload) =>{
    return await   finalproducts.updateproducts(id,payload)
}


module.exports={getallproducts,createallproducts,deletetheproduct,updatetheproducts}