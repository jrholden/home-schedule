const express = require('express')
const {
  getItems,
  saveItem
} = require('../controllers/itemController');


const router = express.Router();

router.all('/', (req, res) => {
  console.log("URL: /api/");
  res.status(404)
  if (req.accepts('json')) {
    res.json({ message: '404 not Found', status: 404 })
  } else {
    res.type('txt').send('404 Not Found')
  }
});

router.get('/get', getItems);
router.post('/save', saveItem);

module.exports = router

