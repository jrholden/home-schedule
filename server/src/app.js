const express = require('express');
const cors = require('cors');
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

const baseRoutes = require('./routes/baseRoutes')

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
app.use('/api', baseRoutes);


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})