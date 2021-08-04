const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get Method Mahasiswa',
    });
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post Method Mahasiswa',
    });
});

router.get('/:nim', (req, res, next) => {
    const nim = req.params.nim;
    if (nim === '12345') {
        res.status(200).json({
            message: 'NIM 12345'
        })
    } else {
        res.status(200).send({
            message: 'NIM LAIN'
        })
    }
    res.status(200).json({
        message: 'Get Method Mahasiswa',
    });
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