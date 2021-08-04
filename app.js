const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require(helmet);
const basicAuth = require('express-basic-auth');
const mahasiswaRoutes = require('./routes/mahasiswa');
const helmet = require('helmet');

app.use(helmet());
app.use(basicAuth({
    users: {
        'admin': 'supersecret',
    },
    unauthorizedResponse: basicAuthResponse
}));
function basicAuthResponse(req) {
    return req.auth 
                ? `(Credensials ${req.auth.user} : ${req.auth.password} rejected)` 
                : 'Unauthorized'
}

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use((req, res, next) => {
    const error = new Error('Tidak Ditemukan');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 5000).json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;