const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'temp',
    host: 'localhost',
    port: '3306'
});

let tempdb = {};

tempdb.all = () => {
    return new Promise((resolve,  reject) => {
        pool.query('SELECT * FROM `temperature`', (err, results)=>{
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = tempdb;
