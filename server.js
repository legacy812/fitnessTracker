require('dotenv').config();
const express = require('express');
const { join } = require('path');

const app = express();

//middleware
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));
// app.use(require('./seeders/seed'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

//Exercise page
app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, 'public/exercise.html'));
});

//stats page
app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, 'public/stats.html'));
});

//connects to the server
require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.error(e));