let response=require('../services/status.service')
let serverstatus=(req,res)=>{
    res.json(response());
}
module.exports=serverstatus;