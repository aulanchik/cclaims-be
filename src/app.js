const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const contacts = require('./routes/contacts');
const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.use('/api', contacts);

module.exports = { app };
