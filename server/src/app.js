import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connectDB from './config/database.js';
import corsOptions from './config/corsOptions.js';
//import routes
import baseRoutes from './routes/baseRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9595;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

//custom middleware
app.use(cors(corsOptions));

//standard middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all request headers
app.use((req, res, next) => {
    console.log("Request URL: " + req.url + " | Request Method: " + req.method);
    console.log("Request Body: ");
    console.log(req.body);
    next();
});
app.use('/', express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use('/api', baseRoutes);

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 not Found', status: 404 });
    } else {
        res.type('txt').send('404 Not Found');
    }
})

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log("env: " + process.env.NODE_ENV)
        console.log(`Server runing on port ${PORT}`);
    });
})

mongoose.connection.on('error', (err) => {
    console.error("MONGO HAD A BAD TIME:: ", err);
})