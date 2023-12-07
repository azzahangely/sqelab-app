const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require ("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect("mongodb://azzahazkiyah:sqelab@ac-p0nytwi-shard-00-00.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-01.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-02.lmtelfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-79xj60-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("Connected to MongoDB")
})
.catch((err) =>{
    console.log("Error Connecting to MongoDb", err);
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
})