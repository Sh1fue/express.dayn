const Router = require('express')
const router = new Router()

const typeRouter = require('./TypeRouter')
const deviceRouter = require('./DeviceRouter')
const userRouter = require('./UserRouter')
const brandRouter = require('./BrandRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router