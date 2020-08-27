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

app.get('/getdb', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/database/database.json'));
});


app.post('/db',(req, res) => {
    User = req.body.user;
    AddUser(User);
    res.sendStatus(200);
});

app.post('/xp', (req, res) => {
    User = req.body.user;
    AddXP(User);
    res.sendStatus(200);
})

console.log(`Server up and ready!\nServer on port ${port}`);
