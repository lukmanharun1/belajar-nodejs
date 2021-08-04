const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const mahasiswaRoutes = require('./routes/mahasiswa');
const jurusanRotes = require('./routes/jurusan');
const axiosRouter = require('./routes/axios');
// const helmet = require('helmet');

// swagger
const swaggerUI = require('swagger-ui-express');
const apiDocumentation = require('./apidocs.json');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocumentation));
// app.use(helmet());
// app.use(basicAuth({
//     users: {
//         'admin': 'supersecret',
//     },
//     unauthorizedResponse: basicAuthResponse
// }));
// function basicAuthResponse(req) {
//     return req.auth 
//                 ? `(Credensials ${req.auth.user} : ${req.auth.password} rejected)` 
//                 : 'Unauthorized'
// }

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/axios', axiosRouter);
app.use('/jurusan', jurusanRotes);
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