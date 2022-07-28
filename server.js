const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const bodyParser = require('body-parser');

const router = require('./Routes/addRouter');

dotenv.config();
const { PORT, MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const database = "mongodb+srv://"+MONGODB_USERNAME+":"+MONGODB_PASSWORD+"@evolvfit-backend.e7uzj.mongodb.net/evolvfit?retryWrites=true&w=majority";

mongoose.connect(database, {useNewUrlParser:true, useUnifiedTopology: true})
    .then((result) => {
        console.log("Connected MongoDB...")
    })
    .catch(err => console.log(err));

app.listen(PORT || 3000)
console.log(`Listening on Port ${PORT}`);

app.use("/add", router);