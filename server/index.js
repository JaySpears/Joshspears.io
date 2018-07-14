// Dependencies.
const express = require('express');
const path = require('path');
const app = express();
const emailController = require('./controllers/controller.email.js');
const bodyParser = require('body-parser');

// Allowing app to use static CSS and JavaScript files.
app.use(express.static(__dirname + '/../client'));

// To support JSON-encoded bodies.
app.use(bodyParser.json());

// Root route.
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// Email route.
app.post('/email', (req, res) => {
  console.log(req);
  emailController.send(req.body).then(() => {
    res.status(200).send({
      status: 'success'
    });
  }).catch(() => {
    res.status(403).send({
      status: 'failure'
    });
  });
});

// Listen to port 5000.
app.listen(5000, () => {
  console.log('Application listening on port -> 5000');
});
