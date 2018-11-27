const express = require('express');
const app = express();
const port = process.env.PORT || 8080;;

app.get('/error', (req, res) => {
  console.log('Hit the endpoint that throw and error.');
  res.send('This threw an error');
  throw new Error('Throw an error');
});

app.get('/error1', (req, res) => {
  console.log('Hit the endpoint that throw and error.');
  res.send('This threw an error');
  throw new Error('Throw an error #1');
});

app.get('/error2', (req, res) => {
  console.log('Hit the endpoint that throw and error.');
  res.send('This threw an error');
  throw new Error('Throw an error #2');
});

app.get('/crash', (req, res) => {
  console.log('Hit the endpoint that crashes the app.');
  res.send('This crashed everything');
  setTimeout(function () {
    throw new Error('We crashed!');
  }, 5);
});

app.get('/crash1', (req, res) => {
  console.log('Hit the endpoint that crashes the app.');
  res.send('This crashed everything');
  setTimeout(function () {
    throw new Error('We crashed #1!');
  }, 5);
});

app.get('/crash2', (req, res) => {
  console.log('Hit the endpoint that crashes the app.');
  res.send('This crashed everything');
  setTimeout(function () {
    throw new Error('We crashed #2!');
  }, 5);
});

app.get('/404', (req, res) => {
  console.log('Hit the 404 endpoint.');
  res.status(404).send('No no no.');
});


app.get('/', (req, res) => {
  console.log({ message: 'Hello from Express' });
  res.send('Hello World for Stackdriver Monitoring!');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
