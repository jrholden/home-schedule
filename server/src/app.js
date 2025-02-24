const express = require('express');
const cors = require('cors');
const path = require('path')

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9595;

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
const connectDB = require('./config/database');
const mongoose = require('mongoose')
connectDB()

console.log(process.env.NODE_ENV)


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all request headers
app.use((req, res, next) => {
    console.log(req.headers);
    next();
});
app.use('/', express.static(path.join(__dirname, 'public')))

//import routes
const baseRoutes = require('./routes/baseRoutes')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});
app.use('/api', baseRoutes);

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 not Found', status: 404 })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})