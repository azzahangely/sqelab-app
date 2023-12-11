// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Order = require('./models/order');

mongoose
  .connect('mongodb://azzahazkiyah:sqelab@ac-p0nytwi-shard-00-00.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-01.lmtelfd.mongodb.net:27017,ac-p0nytwi-shard-00-02.lmtelfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-79xj60-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error Connecting to MongoDB', err);
  });

app.listen(port, '192.168.56.1', () => {
  console.log('Server is running on http://192.168.56.1');
});

// =============== REGISTER ENDPOINT =============== //

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before storing it in the database

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

// =============== LOGIN ENDPOINT =============== //

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token for successful login
    const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
});
