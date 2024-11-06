require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors'); 

const route = require('./routes/index'); 

// instance 
const app = express(); 

// middleware 
app.use(express.json())

const allowedOrigins = [
    "http://localhost:3000", 
    "https://wanderingwords.onrender.com", 
]
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) callback(null, true) 
        else callback(new Error('Not allowed by CORS'), false) 
    }, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
})); 

// start 
route(app); 

// connect to database 
mongoose.connect(process.env.MONGODB_URI) 
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Fail to connect")) 

// listening 
app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`); 
})
