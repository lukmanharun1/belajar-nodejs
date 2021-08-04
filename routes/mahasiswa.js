const express = require('express');
const router = express.Router();
const db = require('../config/mysql');

router.get('/', (req, res, next) => {
    let sql = "SELECT * FROM mahasiswa";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Get Method Mahasiswa',
            data: result
        });
    })
})

router.post('/', (req, res, next) => {
    const mahasiswa = {
        nim: req.body.nim,
        nama: req.body.nama
    }
    res.status(200).json({
        message: 'Post Method Mahasiswa',
        data: mahasiswa
    });
});

router.get('/:nim', (req, res, next) => {
    const nim = req.params.nim;
    let sql = "SELECT * FROM mahasiswa WHERE nim=" + nim;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Mahasiswa Ditemukan',
            data: result
        });
    })
})

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Put Method Mahasiswa',
    });
});
router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Method Mahasiswa',
    });
});


module.exports = router;