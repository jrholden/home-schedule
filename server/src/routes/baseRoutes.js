const express = require('express')
const {
  getItems,
} = require('../controllers/itemController')

const router = express.Router()

router.use('/items', getItems)

module.exports = router