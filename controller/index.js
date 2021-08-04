const mahasiswa = require('./mahasiswa');
const jurusan = require('./jurusan');
const controller = {};
const axios = require('./axios');
controller.mahasiswa = mahasiswa;
controller.axios = axios;
controller.jurusan = jurusan;
module.exports = controller;