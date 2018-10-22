const express = require('express');
const app = express();
const port = process.env.PORT || 8080;;

app.get('/', (req, res) => {
  console.log({message: 'Hello from Express'});
  res.send('Hello World for Stackdriver Logging!');
});

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`)
);
