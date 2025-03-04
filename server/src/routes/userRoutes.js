import express from 'express';
import {
  getUser,
  saveUser
} from '../controllers/userController.js';

const router = express.Router();

router.all('/', (req, res) => {
  console.log("URL: /api/user/");
  res.status(404);
  if (req.accepts('json')) {
    res.json({ message: '404 not Found', status: 404 });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

router.post('/get', getUser);

router.post('/save', saveUser);

export default router; 