const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9595;

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.post('/echo', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
