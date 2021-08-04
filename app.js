const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mahasiswaRoutes = require('./routes/mahasiswa');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRoutes);
module.exports = app;