import express from 'express';
//import routes
import itemRoutes from './itemRoutes.js';
import singleItemRoutes from './singleItemRoutes.js'

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

export default router; 