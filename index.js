const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const mysql = require('mysql');
// const cors =  require('cors');
// const moment = require('moment');

// const connection = mysql.createConnection({
//     host      : 'localhost',
//     port      : "3306",
//     user      : 'root',
//     password  : '',
//     database  : 'mydb',
// });

// connection.connect(function(err) {
//     if(err){
//         console.error('erro conectando banco: ' + err.stack);
//         return;
//     }
//     console.log('Banco conectado');
// });


// app.use (cors ());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/listar', function(req, res) {
//     console.log(req)
//     connection.query('select * from alunos where month(current_date) = month(data)',
//     function(error, results, fields) {
//         if(error)
//         res.json(error);
//         else
//             res.json(results);
        
//             console.log('executou!');
//     }); 
// });

// app.post('/enviar', function (req, res) {
//     console.log(req.body) 
//     let data = moment(req.body.data, 'DD-MM-YYYY').format('YYYY-MM-DD');
//         connection.query(`insert into alunos(nome, data) values( '${req.body.nome} ','${data} ')`,
//         function(error, results, fields) {
//             if(error)
//             res.json(error);
//             else
//                 res.json({"nome": "1"});
//                 console.log('executou!');
//     });
// });

    app.use(express.static('public'));

    app.listen(80, function () {
    console.log('Excample app listening on port 80:');
    });
