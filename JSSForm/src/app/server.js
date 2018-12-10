// var express = require('express');
// var bodyparser = require('body-parser');
// var path = require('path');
// var http = require('http');
// var app = express();
// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;

// // Create connection to database
// var config =
// {
//     userName: 'admin_login',
//     password: 'Start@123',
//     server: 'manutd8.database.windows.net',
//     options:
//     {
//         database: 'TestSDB',
//         encrypt: true
//     }
// }
// var connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err)
//     {
//         if (err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             console.log("success");
//         }
//     }
// );


// // var api = require('./routes/api');

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: false}));

// app.use(express.static(path.join(__dirname,'dist')));


// app.get('/index',function(req,res){
//     res.sendFile(__dirname+'/dist/index.html')
// });

// app.get('/', function(req, res){
// //   logger.info("Server Root");
//     var request = new Request(
//         'SELECT User_NAME, Password FROM "User"',
//         function(err, rowCount, rows)
//         {
//             console.log(rowCount + ' row(s) returned');
//             // process.exit();
//         }
//     );

//     request.on('row', function(columns) {
//         columns.forEach(function(column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
//   res.send("Server Root");
// });

// app.post('/', function(req, res) {
//     var request = new Request(
//         'SELECT User_NAME, Password FROM "User" WHERE User_NAME == username AND Password == password',
//         function(data, err) {
//             console.log(data);
//         }
//     );
//     res.status(200).send(req.body.userName + req.body.Password);
// })

// // app.use('/',api);
// /*
//     Get port from environment and store in express
// */ 
// var port = process.env.PORT || '3000';


// //Listen on provided PORT
// app.listen(port, () => console.log("Server is running"));