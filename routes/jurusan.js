const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/', controller.jurusan.getAll)
router.post('/', controller.jurusan.post)

module.exports = router;