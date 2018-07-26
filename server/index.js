const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const PORT = 3000;


const app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  console.log(req.body);
  // db.addUser(req.body.username, (results) => {
  //   res.send(results);
  // });
});




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
