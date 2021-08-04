const Sequelize = require('sequelize');
const db = require('../database/mysql');

const jurusan = require('./jurusan');
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
// mahasiswa.hashOne(jurusan, { foreignKey: 'kd_jurusan' });
mahasiswa.belongsTo(jurusan, { foreignKey: 'kd_jurusan' });

mahasiswa.removeAttribute('id');
module.exports = mahasiswa;