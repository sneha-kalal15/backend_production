let response=require('../services/fact.service')
let =fetchfact=(req,res)=>{
  res.json(response());
}
module.exports=fetchfact;