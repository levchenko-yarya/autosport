const express = require('express')
const controller = require('./team.controller')
const router = express.Router()

router.get('/all', controller.all)
router.get('/add', controller.add)
router.post('/add', controller.store)

module.exports = router