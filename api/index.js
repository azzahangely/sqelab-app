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
const User = require("./models/user");
const Order = require("./models/order");

mongoose
    .connect("mongodb://azzahazkiyah:sqelab@ac-p0nytwi-shard-00-00.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-01.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-02.lmtelfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-79xj60-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() =>{
        console.log("Connected to MongoDB")
})
    .catch((err) =>{
        console.log("Error Connecting to MongoDb", err);
});

app.listen(port, "192.168.56.1", () => {
  console.log("Server is running on http://192.168.56.1");
});




// =============== REGISTER ENDPOINT =============== //

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});
