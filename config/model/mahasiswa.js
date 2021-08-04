const Sequelize = require('sequelize');
const db = require('../database/mysql');

const mahasiswa = db.define('mahasiswa', {
    nim: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    kd_jurusan: Sequelize.STRING,
    alamat: Sequelize.STRING,
    angkatan: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});

mahasiswa.removeAttribute('id');
module.exports = mahasiswa;