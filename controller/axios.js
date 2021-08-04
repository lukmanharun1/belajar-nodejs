const axios = require('axios');
const controller = {};

controller.getAll = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (response.data.length > 0) {
            res.status(200).json({
                message: 'Data dar Public API',
                data: response.data
            });
        } else {
            res.status(200).json({
                message: 'Tidak Ada Data',
                data: []
            });
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.post = async (req, res) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: req.body.title,
            body: req.body.body,
            userId: 1
        });
            res.status(201).json({
                message: 'Berhasil Tambah Data',
                data: response.data
            });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.put = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/' + id, {
            title: req.body.title,
            body: req.body.body,
            userId: 1
        });
        console.log(response);
            res.status(200).json({
                message: 'Berhasil ubah Data',
                data: response.data
            });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id);
        console.log(response);
            res.status(200).json({
                message: 'Berhasil ubah Data',
            });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


module.exports = controller;