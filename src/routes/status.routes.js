//express router
let router=require('express').Router()
let serverstatus=require('../controllers/status.controller')
router.get('/',serverstatus)
module.exports=router