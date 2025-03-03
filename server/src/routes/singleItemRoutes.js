import express from 'express'
import {
  saveItem,
  deleteItem,
  getItem,
  getItemTitle,
  getItemType,
  setItemTitle,
  setItemType,
  setItemDateInfo
} from '../controllers/singleItemController.js'


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

router.post('/get', getItem);

router.post('/get/title', getItemTitle);

router.post('/get/type', getItemType);

router.patch('/patch/title', setItemTitle);

router.patch('/patch/type', setItemType);

router.post('/save', saveItem);

router.delete('/delete', deleteItem);

export default router; 