/* Create Express Router */
import express from 'express'
const router = express.Router()

import userModule from './modules/user'
router.use('/users', userModule)



import productModule from './modules/product'
router.use('/products', productModule)


import purchaseApi from './modules/purchase.api'
router.use('/purchase', purchaseApi)


import categories from './modules/category'
router.use('/categories', categories)
export default router;