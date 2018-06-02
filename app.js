const express = require('express')
const bodyParser = require("body-parser");
const mysql = require('mysql');
const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var pool  = mysql.createPool({
    host     : '35.196.190.147',
    user     : 'root',
    password : 'none',
    database : 'steadia'
});


app.post('/insertReading', (req, res) => {
    let id = req.body.id
    let reading = req.body.reading
    pool.getConnection(function(err, conn){
        if(!err){
            conn.query("INSERT INTO meters (id, reading) VALUES ?,?",[id,reading],function(err,rows){
                conn.release();
                res.end()
                });
        }
        else{
            conn.release();
            res.end()
        }
    })
}
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))