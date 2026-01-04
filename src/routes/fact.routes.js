let router=require('express').Router();
let fetchfact=require('../controllers/fact.controller')
router.get('/fact',fetchfact)
module.exports=router