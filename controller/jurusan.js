const model = require('../config/model/index');
const controller = {};
const { Op } = require('sequelize');
const dp = require('../config/database/mysql');

controller.getAll = async (req, res) => {
    try {
        const jurusan = await model.jurusan.findAll();
        console.log(jurusan)
        if (jurusan.length > 0) {
            res.status(200).json({
                message: 'Data Semua Jurusan',
                data: jurusan
            })
        } else {
            res.status(200).json({
                status: 'Tidak Ada Data',
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}
controller.post = async (req, res) => {
    try {
        const jurusan = await model.jurusan.bulkCreate(req.body);
        res.status(201).json({
            message: 'Jurusan Berhasil ditambahkan',
            data: jurusan
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;