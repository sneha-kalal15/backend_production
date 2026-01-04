let router=require('express').Router()
let productcontrollers=require('../controllers/product.controller')
router.get('/products',productcontrollers.getfinalproducts)
router.post('/products',productcontrollers.storeallproducts)

module.exports=router