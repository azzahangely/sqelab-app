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

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

const User = require("./models/user");
const Order = require("./models/order");


// =============== REGISTER ENDPOINT =============== //

app.post('/register', async (req, res) => {
  const { username, email, password, role, major, semester, skillLevel, /* Other fields */ } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
      role,

      // UMKM 
      annualTurnover, 
      businessLifespan,
      businessIndustry,

      // STUDENT
      major,
      semester,
      skillLevel,
    });

    const savedUser = await newUser.save();

    res.status(200).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});
