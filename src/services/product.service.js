let finalproduct= require('../repository/product.repo')

let getallproducts=async()=>{
    return await finalproduct.fetchproducts();
}
let createallproducts=async(title,price,image)=>{
    return await finalproduct.createproducts({title,price,image});
}
let updatetheproducts=async (id,payload) =>{
    return await finalproduct.updateproducts(id,payload)}

module.export=(getallproducts,createallproducts,updatetheproducts)