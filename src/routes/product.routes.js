let router=require('express').Router()
let productcontroller=require('../controllers/product.controller')
router.get('/products',productcontroller.getfinalproducts)
router.post('/products',productcontroller.storeallproducts)
router.put('/products/:id',productcontroller.updatepro)

module.exports=router