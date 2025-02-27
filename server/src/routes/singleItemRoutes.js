import express from 'express'
import {getItem, getItemTitle} from '../controllers/singleItemController.js'


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

router.get('/get', getItem);
router.get('/get/title', getItemTitle)

export default router; 