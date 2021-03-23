// TODO
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const CLIENT_PATH = path.resolve(__dirname, '../client/dist')
app.use(express.static(CLIENT_PATH));
const PORT = 8080;
app.get('/', function (req, res) {
  res.render('index', {});
});
app.listen(PORT, (() => {
  console.log(`Server listening on :${PORT}`);
}));