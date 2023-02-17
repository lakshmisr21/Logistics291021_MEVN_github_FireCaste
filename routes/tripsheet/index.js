const router=require('express').Router()
//const { route } = require('../user')
const controller = require('./Controller')
router.post('/newtripsheet',controller.newtripsheet)
//router.get('/gettripsheet',controller.gettripsheet)
module.exports = router