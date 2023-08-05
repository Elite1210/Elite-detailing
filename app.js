// const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');

// const app = express();
// const port = process.env.PORT || 3000; // Use the environment variable PORT if available, or use port 3000 by default

// // Use body-parser middleware to parse incoming JSON data
// app.use(bodyParser.json());

// // Endpoint to handle form data
// app.post('/submit', (req, res) => {
//   // Extract form data from the request body
//   const { name, phone, date, time, service } = req.body;

//   // Here, you can add code to process the form data as needed
//   // For example, you can send an SMS using Twilio
//   const accountSid = 'AC987cae968ea2804b23de7da6423c896c';
//   const authToken = 'aee025ba20ec27a60dc9bd97677e134f';
//   const twilioClient = twilio(accountSid, authToken);

//   twilioClient.messages
//     .create({
//       body: `New Appointment:
// Name: ${name}
// Phone: ${phone}
// Date: ${date}
// Time: ${slot}
// Service: ${servicetype}`,
//       from: '+14179293765', // Your Twilio phone number
//       to: '+919384380653' // The recipient's phone number where you want to send the SMS
//     })
//     .then((message) => {
//       console.log(`SMS sent: ${message.sid}`);
//       res.json({ message: 'Appointment booked successfully! You will receive a confirmation SMS.' });
//     })
//     .catch((error) => {
//       console.error('Error sending SMS:', error);
//       res.status(500).json({ error: 'Failed to book the appointment. Please try again later.' });
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000; // Replace with your desired port

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const apiKey = '5b43c2e5';
// const apiSecret = 'MzkvbNRgdO76IFwJ';

// // Route to handle form submission and send SMS
// app.post('/sendSMS', (req, res) => {
//   const message = `New Appointment:
// Name: ${req.body.name}
// Phone: ${req.body.number}
// Date: ${req.body.date}
// Time: ${req.body.slot}
// Service: ${req.body.servicetype}`;

//   const to = '919384380653'; // Replace with the recipient's phone number

//   axios.post('https://rest.nexmo.com/sms/json', {
//     api_key: apiKey,
//     api_secret: apiSecret,
//     to: to,
//     from: 'NEXMO', // Sender name
//     text: message
//   })
//   .then(response => {
//     res.json({ message: 'Appointment booked successfully! You will receive a confirmation SMS.' });
//   })
//   .catch(error => {
//     console.error('Failed to book the appointment:', error);
//     res.status(500).json({ error: 'Failed to book the appointment. Please try again later.' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const time = formData.get('slot');
  const service = formData.get('servicetype');

  // Create the SMS message
  const message = `New Appointment:
Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Service: ${service}`;

  // Customize this with your Twilio API credentials
  const accountSid = 'AC987cae968ea2804b23de7da6423c896c';
  const authToken = 'aee025ba20ec27a60dc9bd97677e134f';
  const twilioPhone = '+14179293765';
  const recipientPhone = '+919244402553';

  // Initialize Twilio Client
  // const twilio = new Twilio(accountSid, authToken);
  const twilio = new Twilio(accountSid, authToken);

  // Send SMS using Twilio Client
  twilio.messages
    .create({
      body: message,
      from: twilioPhone,
      to: recipientPhone
    }).then(() => {
      alert('Appointment booked successfully! You will receive a confirmation SMS.');
      // Reset the form
      event.target.reset();
    })
    .catch(error => {
      console.error('Failed to book the appointment:', error);
      alert('Failed to book the appointment. Please try again later.');
    });
});

