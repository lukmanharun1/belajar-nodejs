const mahasiswa = require('./mahasiswa');
const controller = {};
const axios = require('./axios');
controller.mahasiswa = mahasiswa;
controller.axios = axios;
module.exports = controller;