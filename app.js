const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
// const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/formdata';

mongoose.connect("mongodb://127.0.0.1:27017/formmmdata").then((jdujs)=>{
  console.log("Succesfully");
}).catch((iw)=>{
 console.log("Error")
})
app.get('/hello',(req,res)=>{
  res.send("Hello World");
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/form', formRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
