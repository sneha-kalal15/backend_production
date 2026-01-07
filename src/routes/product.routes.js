let router=require('express').Router()
let productcontrollers=require('../controllers/product.controller')
router.get('/products',productcontrollers.getfinalproducts)
router.post('/products',productcontrollers.storeallproducts)
router.delete('/products/:id',productcontrollers.deletepro)
router.put('/products/:id',productcontrollers.updatepro)

module.exports=router