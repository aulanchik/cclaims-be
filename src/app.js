var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var helmet = require('helmet');
var app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

module.exports = { app };
