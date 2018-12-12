var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// Create connection to database
var config =
{
    userName: 'admin_login',
    password: 'Start@123',
    server: 'manutd8.database.windows.net',
    options:
    {
        database: 'TestSDB',
        encrypt: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("success");
    }
}
);


var port = process.env.PORT || '3000';


//Listen on provided PORT
app.listen(port, () => console.log("Server is running"));


// var api = require('./routes/api');

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: false}));

// app.use(express.static(path.join(__dirname,'dist')));


// app.get('/index',function(req,res){
//     res.sendFile(__dirname+'/dist/index.html')
// });

// UI makes service request to get data from DB

// getting data from DB
app.get('/', function (req, res) {
    //   logger.info("Server Root");
    var request = new Request(
        "SELECT User_NAME FROM \"User\"WHERE USER_NAME = 'Ishmeet' AND Password = 'ish1234'",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );


    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
});


app.post('/', function (req, res) {
    console.log("body " + req.body.username + " AND Password = " + req.body.password);
    var request = new Request(
        "SELECT USER_NAME FROM \"User\" WHERE USER_NAME = '" + req.body.username + "' AND Password = '" + req.body.password + "'",//USER_NAME == req.body.username AND Password == req.body.password',
        function (err, rowCount, rows) {
            if (err) {
                res.send(err);
            }
            else {
                console.log("post " + rowCount + ' row(s) returned');
                console.log(rowCount);
                res.status(200).send("hi")
            }

        }
    );
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);

})


app.get('/form', (req, res) => {

    res.send('Connected Form');
});

app.post('/form', (req, res) => {

    if(err) {

        console.log("SQL Connection Error: ". err);
    }

    else {

        var querySQL = "INSERT INTO Plant SET ?";
        var valuesSQL = {

            "Region" : req.body.Region,
            "Plant": req.body.Plant
        };

        var query = connection.query(querySQL, valuesSQL, function (err, result){
            if(err){
            console.error('SQL error: ', err);
            return next(err);
            }
            
        });
    }
})

// app.use('/',api);
/*
    Get port from environment and store in express
*/