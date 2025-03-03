import express from 'express';
import {getItems} from '../controllers/itemsController.js';


const router = express.Router();

router.all('/', (req, res) => {
  console.log("URL: /api/item/");
  res.status(404);
  if (req.accepts('json')) {
    res.json({ message: '404 not Found', status: 404 });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

router.get('/get', getItems);


export default router; 

