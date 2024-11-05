require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors'); 

const route = require('./routes/index'); 

// instance 
const app = express(); 

// Serve React static files 
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// middleware 
app.use(express.json())
app.use(cors({
    origin: "https://wanderingwords.onrender.com", 
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
