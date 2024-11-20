const express = require('express');
const app = express();
const mongoose = require('mongoose');
const salesRouter = require('../routes/router');

require('dotenv').config({path: '../../../../config.env'});
const cors = require("cors");

app.use(express.json());
app.use(cors());
// app.use('/data-visualization-dash', salesRouter);
app.use('/', salesRouter);


const db = process.env.DB;
mongoose.connect(db).then((con) => {
    console.log("DB connected successfully");
});

// mongodb+srv://vinay:<db_password>@cluster0.koxfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://vinay:6jJ4Z7NQzG60dcmA@cluster0.koxfs.mongodb.net/

app.post('/login', async (req, res) => {
    await console.log(req);
})

app.get('/login', async (req, res) => {
    console.log(req)
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
})