const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3402;
const { AddUser, AddXP } = require('./db');
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/src/index.html')));
app.use(express.static(path.join(__dirname, 'src')));
app.listen(`${port}`);

console.log(`Server up and ready!\nServer on port ${port}`);
