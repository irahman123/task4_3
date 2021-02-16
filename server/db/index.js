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
let id = 200
function randomTemparature(max, min){
    return Math.round(Math.random()*(max-min)+min);
};

function getId(){
    return id++;
}


tempdb.all = () => {
    
    return new Promise((resolve,  reject) => {
        
        pool.query('SELECT `Id`, `Temperature`, `Timestamp` FROM `temperature` ORDER BY `Timestamp` DESC LIMIT 5', (err, results)=>{
            if(err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}
    
       /*setInterval(() => { 
            pool.query('INSERT INTO `temperature`(`Id`, `Temperature`, `Timestamp`) VALUES ("'+getId()+'","'+randomTemparature(50, 0).toString()+'", CURRENT_TIMESTAMP) ',  (err, results)=>{
                if(err) {
                    return reject(err);
                }
                return resolve(results);
            })
        }, 20000);    });
};*/

module.exports = tempdb;

//SELECT `Id`, `Temperature`, `Timestamp` FROM `temperature` ORDER BY `Timestamp` ASC LIMIT 5
