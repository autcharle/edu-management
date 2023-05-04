const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan'); // feedback for request
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router')

// su dung variables in .env file
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny')); // feedback ex. log.console => "GET /login 200 15 - 4.615 ms"

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("starting on port 8080")
    app.listen(8080);
})
