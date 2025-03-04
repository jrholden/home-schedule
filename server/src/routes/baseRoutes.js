import express from 'express';
//import routes
import itemRoutes from './itemsRoutes.js';
import singleItemRoutes from './singleItemRoutes.js';
import userRoutes from './userRoutes.js';


const router = express.Router();

router.all('/', (req, res) => {
  console.log("URL: /api/");
  res.status(404);
  if (req.accepts('json')) {
    res.json({ message: '404 not Found', status: 404 });
  } else {
    res.type('txt').send('404 Not Found');
  }
})


router.use('/item', singleItemRoutes);

router.use('/items', itemRoutes);

router.use('/user', userRoutes);

export default router; 