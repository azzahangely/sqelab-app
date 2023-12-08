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


// func to send ver email to user
const sendVerificationEmail = async (email, verificationToken) => {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure the email service or SMTP details here
      service: "gmail",
      auth: {
        user: "azzahangeli@gmail.com",
        pass: "",
      },
    });
  
    // Compose the email message
    const mailOptions = {
      from: "sqelab.com",
      to: email,
      subject: "Email Verification",
      text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
    };
  
    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Verification email sent successfully");
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };

//ENDPOINT TO REGISTER IN THE APP

app.post("/register", async(req,res) => {
    try{
        const {name,email,password} = req.body;

        //check if the email is registered
        const existedUser = await User.findOne({email});
        if(existedUser){
            return res.status(400).json({message:"Sorry, your email has been registered as an account in SQELAB!"});
        }

        //create a new acc
        const newUser = new User({name, email, password});

        //generate and store the ver. token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to the database
        await newUser.save();

        //send ver email to user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

    

            
        
    } catch(error){
        console.log("error registering user", error);
        res.status(500).json({message:"Registration Failed!"})
    }

})

// ENDPOINT TO VERIFY EMAIL
app.get("/verify/:token", async (req, res) => {
    try {
      const token = req.params.token;
  
      //Find the user witht the given verification token
      const user = await User.findOne({ verificationToken: token });
      if (!user) {
        return res.status(404).json({ message: "Invalid verification token" });
      }
  
      //Mark the user as verified
      user.verified = true;
      user.verificationToken = undefined;
  
      await user.save();
  
      res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
      res.status(500).json({ message: "Email Verificatioion Failed" });
    }
  });
  