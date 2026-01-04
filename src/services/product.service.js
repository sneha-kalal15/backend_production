let finalproduct= require('../repositories/product.repo')

let getallproducts=async()=>{
    return await finalproduct.fetchproducts();
}
let createallproducts=async(title,price,image)=>{
    return await finalproducts.createproducts({title,price,image});
}
model.export=(getallproducts,createallproducts)