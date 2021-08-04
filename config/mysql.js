const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'kuliah'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('KOneksi berhasil!');
})