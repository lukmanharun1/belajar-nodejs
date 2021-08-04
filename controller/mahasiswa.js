const { Op } = require('sequelize');
const db = require('../config/database/mysql');
const model = require('../config/model/index');
const controller = {};

controller.getAll = async function (req, res) {
    try {
        const mahasiswa = await model.mahasiswa.findAll({
            attributes: [
                ['nim', 'nis'],
                ['nama', 'nama mahasiswa'],
                ['kd_jurusan', 'kodeJurusan'],
                ['alamat', 'alamat'],
                ['angkatan', 'tahun angkatan']
            ],
            include: [
                {
                    model: model.jurusan
                }
            ],
            where: {
               angkatan: {
                   [Op.between]: [2020, 2021]
               }
            },
            order: [
                ['angkatan', 'desc']
            ],
            limit: 1
            
        })
        // const mahasiswa = await db.query("SELECT mahasiswa.nim AS nimMahasiswa , mahasiswa.nama AS namaMahasiswa , mahasiswa.alamat AS alamat , mahasiswa.angkatan AS tahunAngkatan , mahasiswa.kd_jurusan AS kdJurusan, jurusan.nama_jurusan AS namaJurusan FROM mahasiswa JOIN jurusan ON mahasiswa.kd_jurusan = jurusan.kd_jurusan ORDER BY mahasiswa.nim ASC");
            if (mahasiswa.length > 0) {
                res.status(200).json({
                    message: 'Get Method Mahasiswa',
                    data: mahasiswa
                })
            } else {
                res.status(200).json({
                    message: 'Tidak ada Data',
                    data: []
                });
            }
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.getOne = async (req, res) => {
   try {
    const mahasiswa = await model.mahasiswa.findAll({
        where: {
            nim: req.params.nim
        }
    });
    if (mahasiswa.length > 0) {
        res.status(200).json({
            message: 'Mahasiswa Ditemukan',
            data: mahasiswa
        })
    } else {
        res.status(200).json({
            message: 'Tidak ada Data',
            data: []
        });
    }
   } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.getSearch = async (req, res) => {
    try {
        const search = req.query.keyword;
     const mahasiswa = await model.mahasiswa.findAll({
        attributes: [
            ['nim', 'nis'],
            ['nama', 'nama mahasiswa'],
            ['kd_jurusan', 'kodeJurusan'],
            ['alamat', 'alamat'],
            ['angkatan', 'tahun angkatan']
        ],
         where: {
             [Op.or]: [
                {
                    nim: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    nama: {
                        [Op.like]: `%${search}%`
                    }
                }
            ]
         }
     });
     if (mahasiswa.length > 0) {
         res.status(200).json({
             message: 'Mahasiswa Ditemukan',
             data: mahasiswa
         })
     } else {
         res.status(200).json({
             message: 'Tidak ada Data',
             data: []
         });
     }
    } catch (error) {
         res.status(404).json({
             message: error.message
         });
     }
 }

controller.post = async (req, res) => {
    try {
        const mahasiswa = await model.mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            kd_jurusan: req.body.kd_jurusan,
            alamat: req.body.alamat,
            angkatan: req.body.angkatan,
            foto: req.file.path
        });
        res.status(201).json({
            message: 'Mahasiswa Berhasil ditambahkan',
            data: mahasiswa
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.put = async (req, res) => {
   try {
        const mahasiswa = model.mahasiswa.update({
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }, {
            where: {
                nim: req.params.nim
            }
        });
        res.status(200).json({
            message: 'Berhasil Ubah Data Mahasiswa'
        })
   } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.delete = async (req, res) => {
    try {
        const mahasiswa = await model.mahasiswa.destroy({
            where: {
                nim: req.params.nim
            }
        });
        res.status(200).json({
            message: 'Berhasil Hapus Data Mahasiswa'
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}
module.exports = controller;