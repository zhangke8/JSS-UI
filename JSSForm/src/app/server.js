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

// Get port from environment and store in express
var port = process.env.PORT || '3000';

//Listen on provided PORT
app.listen(port, () => console.log("Server is running"));

// getting data from DB
app.get('/login', function (req, res) {
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

app.post('/login', function (req, res) {
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

// get historical records from DB
app.get('/history', function (req, res) {
    var request = new Request(
        "SELECT Create_DATE, Plant_Name, Region FROM Plant",
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
